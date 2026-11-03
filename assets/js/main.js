// ma-loader: first-visit only (sessionStorage), logo + spinning ring
(function(){
  var loader = document.querySelector("[data-loader]"); if(!loader) return;
  try{ if(sessionStorage.getItem("misbar_loader_seen")==="1"){ loader.remove(); return; } }catch(e){}
  document.documentElement.classList.add("ma-loader--lock");
  var done=false, t0=Date.now(), MIN=1100;
  function finish(){
    if(done) return; done=true;
    try{ sessionStorage.setItem("misbar_loader_seen","1"); }catch(e){}
    document.documentElement.classList.remove("ma-loader--lock");
    if(window.gsap){ gsap.to(loader,{opacity:0,duration:.5,ease:"power2.out",onComplete:function(){ if(loader.parentNode) loader.parentNode.removeChild(loader); }}); }
    else { loader.classList.add("ma-loader--hide"); setTimeout(function(){ if(loader.parentNode) loader.parentNode.removeChild(loader); },500); }
  }
  function onLoad(){ setTimeout(finish, Math.max(0, MIN-(Date.now()-t0))); }
  if(document.readyState==="complete") onLoad();
  else window.addEventListener("load", onLoad);
  setTimeout(finish, 3800);
})();

// ma- drag helper: mouse + touch, RTL-aware (BEM ma-)
function maSwipe(el, onLeft, onRight){
  if(!el || el.__maSwipe) return; el.__maSwipe = 1;
  var sx=null, sy=null, pid=null;
  function start(x,y,id){ sx=x; sy=y; pid=id; }
  function end(x,y){
    if(sx===null) return; var dx=x-sx, dy=y-sy; sx=null; sy=null; pid=null;
    if(Math.abs(dy) > Math.abs(dx)*1.2) return; // vertical scroll, ignore
    var rtl=document.documentElement.dir==="rtl";
    if(dx<-40){ rtl?onRight():onLeft(); } else if(dx>40){ rtl?onLeft():onRight(); }
  }
  el.addEventListener("pointerdown",function(e){ if(e.pointerType==="touch") return; start(e.clientX,e.clientY,e.pointerId); });
  window.addEventListener("pointerup",function(e){ if(pid!==null && e.pointerId!==pid) return; if(sx===null) return; end(e.clientX,e.clientY); });
  window.addEventListener("pointercancel",function(){ sx=null; sy=null; pid=null; if(el.classList) el.classList.remove("ma-services__viewport--dragging"); });
  el.addEventListener("touchstart",function(e){ var tc=e.changedTouches[0]; start(tc.clientX,tc.clientY,"touch"); },{passive:true});
  el.addEventListener("touchend",function(e){ var tc=e.changedTouches[0]; end(tc.clientX,tc.clientY); },{passive:true});
  el.addEventListener("touchcancel",function(){ sx=null; sy=null; },{passive:true});
}

(function(){
  var c = window.MISBAR && window.MISBAR.contact ? window.MISBAR.contact : {};
  function waLink(msg){ return "https://wa.me/" + (c.whatsapp||"") + "?text=" + encodeURIComponent(msg||"Hello MISBAR, I would like to enquire about your services."); }
  document.querySelectorAll("[data-wa]").forEach(function(a){ a.href = waLink(a.getAttribute("data-wa-msg")||""); a.target="_blank"; a.rel="noopener"; });
  document.querySelectorAll("[data-tel]").forEach(function(a){ if(c.phoneHref) a.href = "tel:+" + c.phoneHref; });
  document.querySelectorAll("[data-mail]").forEach(function(a){ if(c.email) a.href = "mailto:"+c.email; });
  document.querySelectorAll("[data-phone-text]").forEach(function(el){ el.textContent = c.phoneDisplay||""; });
  document.querySelectorAll("[data-email-text]").forEach(function(el){ el.textContent = c.email||""; });
  var y = document.querySelectorAll("[data-year]"); y.forEach(function(el){ el.textContent = new Date().getFullYear(); });
  // Mobile nav
  var burger = document.querySelector(".ma-header__burger"), nav = document.querySelector(".ma-nav");
  if(burger && nav) burger.addEventListener("click", function(){ nav.classList.toggle("ma-nav--open"); });
  // Scroll reveal
  var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("ma-reveal--in"); io.unobserve(e.target);} }); },{threshold:.12});
  document.querySelectorAll(".ma-reveal").forEach(function(el){ io.observe(el); });
  // Team render (CMS-managed dynamic collection; localStorage override from admin.html)
  function team(){ try{ var o = JSON.parse(localStorage.getItem("misbar_team")||"null"); if(Array.isArray(o)&&o.length){ var stale = o.some(function(x){ return !x || !x.name || x.name.indexOf("[Name")!== -1; }); if(!stale) return o; try{localStorage.removeItem("misbar_team");}catch(e){} } }catch(e){} return (window.MISBAR.defaultTeam||[]); }
  document.querySelectorAll("[data-team-grid]").forEach(function(grid){
    var limit = parseInt(grid.getAttribute("data-team-grid")||"0",10), list = team();
    if(limit>0) list = list.slice(0,limit);
    grid.innerHTML = list.map(function(m){
      var tags=(m.expertise||[]).map(function(t){return '<span class="ma-team__tag">'+t+'</span>';}).join("");
      var photo = m.photo ? '<img class="ma-team__photo" src="'+m.photo+'" alt="'+m.name+'" loading="lazy">' : '<div class="ma-team__avatar">'+(m.initials||m.name.charAt(0))+'</div>';
      return '<article class="ma-team__card ma-reveal ma-reveal--in"><div>'+photo+'</div><div class="ma-card__body"><div class="ma-team__role">'+(m.role||"")+'</div><h3>'+(m.name||"")+'</h3><p>'+(m.bio||"")+'</p><div>'+tags+'</div><a class="ma-team__hello" data-wa data-wa-msg="Hello MISBAR, I would like to speak with '+(m.role||"your team")+'. " href="#">Say hello \u2192</a></div></article>';
    }).join("");
    if(window.MISBAR_refreshAnims) setTimeout(window.MISBAR_refreshAnims,50); try{ var cc=(window.MISBAR&&window.MISBAR.contact)||{}; grid.querySelectorAll("[data-wa]").forEach(function(a){ a.href="https://wa.me/"+(cc.whatsapp||"")+"?text="+encodeURIComponent(a.getAttribute("data-wa-msg")||"Hello MISBAR"); a.target="_blank"; a.rel="noopener"; }); }catch(e){}
  });
  // Service slider render + engine (homepage #services)
  document.querySelectorAll("[data-service-grid]").forEach(function(track){
    var services = window.MISBAR.services||[];
    track.innerHTML = services.map(function(s){
      var faces=["https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=100&q=60","https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=100&q=60","https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=60","https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&q=60","https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=60"];
      return '<div class="ma-services__slide"><a class="ma-services__card" href="'+s.slug+'"><div class="ma-media ma-media--zoom"><img src="'+s.img+'" alt="'+s.title+'" loading="lazy" draggable="false"></div><div class="ma-card__body"><div class="ma-tag">ACTIVITY '+s.code+'</div><h3>'+s.title+'</h3><p>'+s.desc+'</p><div class="ma-services__more">Learn more \u2192</div><div class="ma-services__foot"><img src="'+faces[services.indexOf(s)%faces.length]+'" alt="" loading="lazy"><small>Talk to someone who does this<br>every day in Doha</small></div></div></a></div>';
    }).join("");
    var slider = track.closest(".ma-services"); if(!slider) return;
    var viewport = slider.querySelector("[data-svc-viewport]");
    var prev = slider.querySelector("[data-svc-prev]"), next = slider.querySelector("[data-svc-next]");
    var dotsBox = slider.querySelector("[data-svc-dots]");
    var curEl = slider.querySelector("[data-svc-current]"), totEl = slider.querySelector("[data-svc-total]");
    var bar = slider.querySelector("[data-svc-progress]");
    var i = 0, timer = null;
    function perView(){ return window.innerWidth<=640?1:window.innerWidth<=1000?2:3; }
    function maxI(){ return Math.max(0, services.length - perView()); }
    function total(){ if(totEl) totEl.textContent = String(services.length).padStart(2,"0"); }
    function buildDots(){ if(!dotsBox) return; dotsBox.innerHTML=""; for(var d=0; d<=maxI(); d++){ (function(d){ var b=document.createElement("button"); b.className="ma-services__dot"+(d===i?" ma-services__dot--active":""); b.setAttribute("aria-label","Go to slide "+(d+1)); b.addEventListener("click",function(){go(d);restart();}); dotsBox.appendChild(b); })(d); } }
    function paint(){
      var slide = track.querySelector(".ma-services__slide"); if(!slide) return;
      var gap = parseFloat(getComputedStyle(track).gap)||0;
      var w = slide.getBoundingClientRect().width + gap;
      track.style.transform = "translateX("+(-i*w)+"px)";
      if(dotsBox) dotsBox.querySelectorAll(".ma-services__dot").forEach(function(b,bi){ b.classList.toggle("ma-services__dot--active",bi===i); });
      if(curEl) curEl.textContent = String(Math.min(i+1,services.length)).padStart(2,"0");
      if(bar) bar.style.width = ((i+1)/(maxI()+1)*100)+"%";
      if(prev) prev.disabled = (i===0); if(next) next.disabled = (i===maxI());
      if(window.gsap) gsap.fromTo(track.querySelectorAll(".ma-services__slide"),{opacity:.55},{opacity:1,duration:.45,overwrite:"auto"});
    }
    function go(n){ i = (n>maxI())?0:(n<0?maxI():n); paint(); }
    function restart(){ if(timer) clearInterval(timer); timer=setInterval(function(){ if(!document.hidden) go(i+1); },4500); }
    if(prev) prev.addEventListener("click",function(){go(i-1);restart();});
    if(next) next.addEventListener("click",function(){go(i+1);restart();});
    // drag options: press + drag / flick (mouse + touch, live follow + snap)
    track.querySelectorAll("img").forEach(function(im){ im.draggable=false; });
    var sx=null, dx=0, dragging=false, pid=null, moved=0;
    function stepW(){ var s=track.querySelector(".ma-services__slide"); if(!s) return 1; return s.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).gap)||0); }
    function curX(){ return -i*stepW(); }
    function dragStart(x,id){ sx=x; dx=0; moved=0; dragging=true; pid=id; track.classList.add("ma-services__track--dragging"); viewport.classList.add("ma-services__viewport--dragging"); if(timer)clearInterval(timer); }
    function dragMove(x){ if(!dragging||sx===null) return; dx=x-sx; moved=Math.max(moved,Math.abs(dx)); if(Math.abs(dx)>4){ track.style.transform="translateX("+(curX()+dx)+"px)"; } }
    function dragEnd(x){ if(!dragging) return; dragging=false; track.classList.remove("ma-services__track--dragging"); viewport.classList.remove("ma-services__viewport--dragging"); if(sx===null){restart();return;} var fdx=x-sx; sx=null; pid=null; var rtl=document.documentElement.dir==="rtl"; var th=Math.max(40,stepW()*0.15); if(fdx<-th) go(rtl?i-1:i+1); else if(fdx>th) go(rtl?i+1:i-1); else paint(); restart(); }
    function dragCancel(){ dragging=false; sx=null; pid=null; track.classList.remove("ma-services__track--dragging"); viewport.classList.remove("ma-services__viewport--dragging"); paint(); restart(); }
    viewport.addEventListener("pointerdown",function(e){ if(e.button!==undefined&&e.button!==0) return; dragStart(e.clientX,e.pointerId); });
    window.addEventListener("pointermove",function(e){ if(pid!==null&&e.pointerId!==pid) return; dragMove(e.clientX); });
    window.addEventListener("pointerup",function(e){ if(pid!==null&&e.pointerId!==pid) return; dragEnd(e.clientX); });
    window.addEventListener("pointercancel",dragCancel);
    viewport.addEventListener("touchstart",function(e){ var tc=e.changedTouches[0]; dragStart(tc.clientX,"touch"); },{passive:true});
    viewport.addEventListener("touchmove",function(e){ var tc=e.changedTouches[0]; dragMove(tc.clientX); },{passive:true});
    viewport.addEventListener("touchend",function(e){ var tc=e.changedTouches[0]; dragEnd(tc.clientX); },{passive:true});
    viewport.addEventListener("click",function(e){ if(moved>8){ e.preventDefault(); e.stopPropagation(); moved=0; } },true);
    viewport.addEventListener("mouseenter",function(){if(timer)clearInterval(timer);});
    viewport.addEventListener("mouseleave",function(){restart();});
    slider.tabIndex=0;
    function isRTL(){ return document.documentElement.dir==="rtl"; }
    slider.addEventListener("keydown",function(e){ var rtl=isRTL(); if(e.key==="ArrowRight"){go(rtl?i-1:i+1);restart();} if(e.key==="ArrowLeft"){go(rtl?i+1:i-1);restart();} });
    window.addEventListener("resize",function(){buildDots();go(Math.min(i,maxI()));});
    total(); buildDots(); paint(); restart();
    if(window.MISBAR_refreshAnims) setTimeout(window.MISBAR_refreshAnims,50); try{ var cc=(window.MISBAR&&window.MISBAR.contact)||{}; grid.querySelectorAll("[data-wa]").forEach(function(a){ a.href="https://wa.me/"+(cc.whatsapp||"")+"?text="+encodeURIComponent(a.getAttribute("data-wa-msg")||"Hello MISBAR"); a.target="_blank"; a.rel="noopener"; }); }catch(e){}
  });
  // Testimonials slider — "What it feels like to work with us" (ma- BEM, reuses ma-services mechanics)
  document.querySelectorAll("[data-tst]").forEach(function(slider){
    var track = slider.querySelector("[data-tst-track]"); if(!track) return;
    var viewport = slider.querySelector("[data-tst-viewport]");
    var prev = slider.querySelector("[data-tst-prev]"), next = slider.querySelector("[data-tst-next]");
    var dotsBox = slider.querySelector("[data-tst-dots]");
    var curEl = slider.querySelector("[data-tst-current]"), totEl = slider.querySelector("[data-tst-total]");
    var bar = slider.querySelector("[data-tst-bar]");
    function slides(){ return [].slice.call(track.querySelectorAll(".ma-services__slide")); }
    var i = 0, timer = null;
    function perView(){ return window.innerWidth<=640?1:window.innerWidth<=1000?2:3; }
    function maxI(){ return Math.max(0, slides().length - perView()); }
    function total(){ if(totEl) totEl.textContent = String(slides().length).padStart(2,"0"); }
    function buildDots(){ if(!dotsBox) return; dotsBox.innerHTML=""; for(var d=0; d<=maxI(); d++){ (function(d){ var b=document.createElement("button"); b.className="ma-services__dot"+(d===i?" ma-services__dot--active":""); b.setAttribute("aria-label","Go to slide "+(d+1)); b.addEventListener("click",function(){go(d);restart();}); dotsBox.appendChild(b); })(d); } }
    function paint(){
      var list = slides(); if(!list.length) return;
      var gap = parseFloat(getComputedStyle(track).gap)||0;
      var w = list[0].getBoundingClientRect().width + gap;
      track.style.transform = "translateX("+(-i*w)+"px)";
      if(dotsBox) dotsBox.querySelectorAll(".ma-services__dot").forEach(function(b,bi){ b.classList.toggle("ma-services__dot--active",bi===i); });
      if(curEl) curEl.textContent = String(Math.min(i+1,list.length)).padStart(2,"0");
      if(bar) bar.style.width = ((i+1)/(maxI()+1)*100)+"%";
      if(prev) prev.disabled = (i===0); if(next) next.disabled = (i===maxI());
      if(window.gsap) gsap.fromTo(list,{opacity:.55},{opacity:1,duration:.45,overwrite:"auto"});
    }
    function go(n){ i = (n>maxI())?0:(n<0?maxI():n); paint(); }
    function restart(){ if(timer) clearInterval(timer); timer=setInterval(function(){ if(!document.hidden) go(i+1); },4500); }
    if(prev) prev.addEventListener("click",function(){go(i-1);restart();});
    if(next) next.addEventListener("click",function(){go(i+1);restart();});
    track.querySelectorAll("img").forEach(function(im){ im.draggable=false; });
    if(viewport){
      var sx=null, dragging=false, pid=null, moved=0;
      var stepW=function(){ var list=slides(); if(!list.length) return 1; return list[0].getBoundingClientRect().width + (parseFloat(getComputedStyle(track).gap)||0); };
      var curX=function(){ return -i*stepW(); };
      var dragStart=function(x,id){ sx=x; moved=0; dragging=true; pid=id; track.classList.add("ma-services__track--dragging"); viewport.classList.add("ma-services__viewport--dragging"); if(timer)clearInterval(timer); };
      var dragMove=function(x){ if(!dragging||sx===null) return; var dx=x-sx; moved=Math.max(moved,Math.abs(dx)); if(Math.abs(dx)>4){ track.style.transform="translateX("+(curX()+dx)+"px)"; } };
      var dragEnd=function(x){ if(!dragging) return; dragging=false; track.classList.remove("ma-services__track--dragging"); viewport.classList.remove("ma-services__viewport--dragging"); if(sx===null){restart();return;} var fdx=x-sx; sx=null; pid=null; var rtl=document.documentElement.dir==="rtl"; var th=Math.max(40,stepW()*0.15); if(fdx<-th) go(rtl?i-1:i+1); else if(fdx>th) go(rtl?i+1:i-1); else paint(); restart(); };
      var dragCancel=function(){ dragging=false; sx=null; pid=null; track.classList.remove("ma-services__track--dragging"); viewport.classList.remove("ma-services__viewport--dragging"); paint(); restart(); };
      viewport.addEventListener("pointerdown",function(e){ if(e.button!==undefined&&e.button!==0) return; dragStart(e.clientX,e.pointerId); });
      window.addEventListener("pointermove",function(e){ if(pid!==null&&e.pointerId!==pid) return; dragMove(e.clientX); });
      window.addEventListener("pointerup",function(e){ if(pid!==null&&e.pointerId!==pid) return; dragEnd(e.clientX); });
      window.addEventListener("pointercancel",dragCancel);
      viewport.addEventListener("touchstart",function(e){ var tc=e.changedTouches[0]; dragStart(tc.clientX,"touch"); },{passive:true});
      viewport.addEventListener("touchmove",function(e){ var tc=e.changedTouches[0]; dragMove(tc.clientX); },{passive:true});
      viewport.addEventListener("touchend",function(e){ var tc=e.changedTouches[0]; dragEnd(tc.clientX); },{passive:true});
      viewport.addEventListener("mouseenter",function(){if(timer)clearInterval(timer);});
      viewport.addEventListener("mouseleave",function(){restart();});
      viewport.addEventListener("click",function(e){ if(moved>8){ e.preventDefault(); e.stopPropagation(); moved=0; } },true);
    }
    slider.tabIndex=0;
    slider.addEventListener("keydown",function(e){ var rtl=document.documentElement.dir==="rtl"; if(e.key==="ArrowRight"){go(rtl?i-1:i+1);restart();} if(e.key==="ArrowLeft"){go(rtl?i+1:i-1);restart();} });
    window.addEventListener("resize",function(){buildDots();go(Math.min(i,maxI()));});
    total(); buildDots(); paint(); restart();
  });
  // Contact form (front-end only; wire to backend/CMS form endpoint at launch)
  var form = document.getElementById("enquiry-form");
  if(form) form.addEventListener("submit", function(e){
    e.preventDefault();
    var d = Object.fromEntries(new FormData(form).entries());
    try{ var arr = JSON.parse(localStorage.getItem("misbar_enquiries")||"[]"); arr.push(Object.assign({at:new Date().toISOString()},d)); localStorage.setItem("misbar_enquiries",JSON.stringify(arr)); }catch(err){}
    var box = document.getElementById("form-ok"); if(box) box.style.display="block";
    form.reset();
  });
  // Footer year + active nav
  var path = location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll("nav.ma-nav a.ma-nav__link").forEach(function(a){ if(a.getAttribute("href")===path) a.classList.add("ma-nav__link--active"); });
})();

// Hero banner slider (modern, GSAP-animated)
(function(){
  var root=document.querySelector("[data-hero]"); if(!root) return;
  var slides=[].slice.call(root.querySelectorAll(".ma-hero__slide"));
  var dotsBox=root.querySelector("[data-hero-dots]");
  var cur=root.querySelector("[data-hero-cur]");
  var prev=root.querySelector("[data-hero-prev]"), next=root.querySelector("[data-hero-next]");
  var i=0,timer=null; slides.forEach(function(_,d){var b=document.createElement("button");b.className="ma-hero__dot"+(d===0?" ma-hero__dot--active":"");b.setAttribute("aria-label","Slide "+(d+1));b.addEventListener("click",function(){go(d);restart();});dotsBox.appendChild(b);});
  function animate(slide){
    if(!window.gsap) return;
    var els=slide.querySelectorAll(".ma-hero__kicker,h1,p,.ma-hero__cta,.ma-hero__stats,.ma-hero__badges,.ma-hero__card,.ma-hero__float");
    gsap.fromTo(els,{y:34,opacity:0},{y:0,opacity:1,duration:.85,stagger:.09,ease:"power3.out",overwrite:"auto"});
  }
  function go(n){ slides[i].classList.remove("ma-hero__slide--active"); i=(n+slides.length)%slides.length; slides[i].classList.add("ma-hero__slide--active");
    dotsBox.querySelectorAll(".ma-hero__dot").forEach(function(b,bi){b.classList.remove("ma-hero__dot--active"); if(bi===i){void b.offsetWidth; b.classList.add("ma-hero__dot--active");}});
    if(cur)cur.textContent=String(i+1).padStart(2,"0"); animate(slides[i]);
    if(window.ScrollTrigger)ScrollTrigger.refresh(); }
  function restart(){if(timer)clearInterval(timer);timer=setInterval(function(){if(!document.hidden)go(i+1);},6000);}
  if(prev)prev.addEventListener("click",function(){go(i-1);restart();});
  if(next)next.addEventListener("click",function(){go(i+1);restart();});
  root.querySelectorAll("img").forEach(function(im){ im.draggable=false; });
  maSwipe(root,function(){go(i+1);restart();},function(){go(i-1);restart();});
  root.addEventListener("pointerdown",function(){if(timer)clearInterval(timer);});
  root.addEventListener("mouseenter",function(){if(timer)clearInterval(timer);});
  root.addEventListener("mouseleave",restart);
  animate(slides[0]); restart();
})();

// Counters + FAQ accordion (reference-inspired bands)
(function(){
  function counters(){
    var els=document.querySelectorAll("[data-count]");
    if(!els.length) return;
    if(!window.gsap){
      els.forEach(function(el){ el.textContent = el.getAttribute("data-count"); });
      return;
    }
    els.forEach(function(el){
      var end=parseFloat(el.getAttribute("data-count")||"0");
      var obj={v:0};
      gsap.to(obj,{v:end,duration:1.6,ease:"power2.out",
        scrollTrigger:{trigger:el,start:"top 90%",once:true},
        onUpdate:function(){ el.textContent=Math.round(obj.v); }});
    });
  }
  function faq(){
    document.querySelectorAll(".ma-faq__item").forEach(function(item){
      var q=item.querySelector(".ma-faq__q"); if(!q) return;
      q.addEventListener("click",function(){
        var open=item.classList.contains("ma-faq__item--open");
        document.querySelectorAll(".ma-faq__item--open").forEach(function(o){o.classList.remove("ma-faq__item--open");});
        if(!open) item.classList.add("ma-faq__item--open");
      });
    });
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",function(){counters();faq();});
  else {counters();faq();}
})();

