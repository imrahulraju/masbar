/* MISBAR site-wide GSAP animations — hero entrance, scroll reveals, parallax, header, counters */
(function(){
  function fallbackReveal(){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("ma-reveal--in");io.unobserve(e.target);}});},{threshold:.12});
    document.querySelectorAll(".ma-reveal:not(.ma-reveal--in)").forEach(function(el){io.observe(el);});
  }
  if(!window.gsap){ fallbackReveal(); return; }
  gsap.registerPlugin(ScrollTrigger);
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduce){ fallbackReveal(); return; }
  // Header shrink on scroll
  ScrollTrigger.create({start:40,onUpdate:function(s){},onToggle:function(s){document.querySelector(".ma-header").classList.toggle("ma-header--scrolled",s.isActive);}});
  // Hero entrance timeline (all pages: .hero-inner or .page-hero)
  // NOTE: deferred until ma-loader-done — running opacity tweens under the first-visit
  // loader left hero copy stuck at opacity:0 on mobile Safari (double-tween conflict
  // with main.js hero animate()). overwrite:auto + clearProps keeps it recoverable.
  function playHeroEntrance(){
    if(playHeroEntrance.done) return; playHeroEntrance.done=true;
    var tl = gsap.timeline({defaults:{ease:"power3.out"}});
    tl.from(".ma-header",{y:-70,opacity:0,duration:.7,overwrite:"auto",clearProps:"transform"})
      .fromTo("[data-hero] .ma-hero__slide.ma-hero__slide--active > .ma-container > div > *, .ma-page-hero .ma-container > *",
        {y:34,opacity:0},{y:0,opacity:1,duration:.8,stagger:.1,overwrite:"auto",clearProps:"transform"},"-=.35")
      .fromTo(".ma-hero__badges span",
        {y:16,opacity:0},{y:0,opacity:1,duration:.5,stagger:.08,overwrite:"auto",clearProps:"transform"},"-=.4")
      .fromTo(".ma-hero__cta .ma-btn",
        {y:18,opacity:0,scale:.96},{y:0,opacity:1,scale:1,duration:.5,stagger:.1,overwrite:"auto",clearProps:"transform"},"-=.5");
  }
  try{
    if(document.querySelector("[data-loader]") && !document.body.classList.contains("ma-ready")){
      window.addEventListener("ma-loader-done",playHeroEntrance,{once:true});
      setTimeout(playHeroEntrance,3000); // fallback: never leave hero hidden
    } else { playHeroEntrance(); }
  }catch(e){ playHeroEntrance(); }
  // Hero background slow parallax + subtle zoom on load
  var bg = document.querySelector(".ma-hero__bg");
  if(bg){ gsap.fromTo(bg,{scale:1.12},{scale:1,duration:2.2,ease:"power2.out"});
    gsap.to(bg,{yPercent:14,ease:"none",scrollTrigger:{trigger:"[data-hero], .ma-hero",start:"top top",end:"bottom top",scrub:true}}); }
  // Generic scroll reveals: every .reveal fades up (works on ALL pages)
  gsap.utils.toArray(".ma-reveal").forEach(function(el){
    if(el.closest(".ma-hero__inner")||el.closest(".ma-page-hero")) return;
    gsap.fromTo(el,{y:36,opacity:0},{y:0,opacity:1,duration:.9,ease:"power3.out",
      scrollTrigger:{trigger:el,start:"top 88%",once:true}});
  });
  // Stagger groups
  gsap.utils.toArray(".ma-grid, .ma-steps, .ma-team__grid, .ma-checklist, .ma-detail, .ma-process, .ma-faq, .ma-smart__grid, .ma-stats__inner").forEach(function(group){
    var kids = group.children; if(!kids.length) return;
    gsap.fromTo(kids,{y:28,opacity:0},{y:0,opacity:1,duration:.7,stagger:.09,ease:"power3.out",
      scrollTrigger:{trigger:group,start:"top 86%",once:true}});
  });
  // Featured images: scale-in + parallax
  gsap.utils.toArray(".ma-feature img, .ma-media--zoom img").forEach(function(img){
    gsap.fromTo(img,{scale:1.08},{scale:1,duration:1.2,ease:"power2.out",
      scrollTrigger:{trigger:img,start:"top 88%",once:true}});
  });
  // CTA band + cards lift on enter
  gsap.utils.toArray(".ma-cta-band, .ma-why__card, .ma-services__card, .ma-team__card, .ma-detail__item, .ma-smart__card, .ma-process__item, .ma-faq__item, .ma-hero__strip-item, .ma-split__card").forEach(function(el){
    gsap.fromTo(el,{y:26,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",
      scrollTrigger:{trigger:el,start:"top 90%",once:true}});
  });
  // Buttons magnetic hover (desktop only)
  if(window.matchMedia("(pointer:fine)").matches){
    document.querySelectorAll(".ma-btn--gold, .ma-services__btn").forEach(function(btn){
      btn.addEventListener("mousemove",function(e){var r=btn.getBoundingClientRect();
        gsap.to(btn,{x:(e.clientX-r.left-r.width/2)*.12,y:(e.clientY-r.top-r.height/2)*.18,duration:.3});});
      btn.addEventListener("mouseleave",function(){gsap.to(btn,{x:0,y:0,duration:.4,ease:"elastic.out(1,.5)"});});
    });
  }
  // Smooth anchor scrolling for #services etc.
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener("click",function(e){var t=document.querySelector(a.getAttribute("href"));
      if(t){e.preventDefault();gsap.to(window,{scrollTo:0,duration:.1});t.scrollIntoView({behavior:"smooth"});}});
  });
  // Re-run reveal registration for dynamically rendered content (slider/team)
  window.MISBAR_refreshAnims = function(){
    if(!window.gsap||!window.ScrollTrigger) return;
    gsap.utils.toArray(".ma-services__card, .ma-team__card").forEach(function(el){
      if(el.dataset.gsBound) return; el.dataset.gsBound="1";
      gsap.fromTo(el,{y:26,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",
        scrollTrigger:{trigger:el,start:"top 92%",once:true}});
    });
    ScrollTrigger.refresh();
  };
  setTimeout(function(){ if(window.MISBAR_refreshAnims) window.MISBAR_refreshAnims(); },600);
  // Refresh triggers after dynamic renders (team/slider) and images
  window.addEventListener("load",function(){ScrollTrigger.refresh();});
  setTimeout(function(){ScrollTrigger.refresh();},800);
})();
