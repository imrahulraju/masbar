# MISBAR for Consulting and Services — Corporate Website (Phase 1, English)

Premium black-and-gold corporate site: 8 pages (Home, About, 5 services, Contact) + `admin.html` team editor + 2 reserved future-activity templates.

## Run locally
- Open `index.html` directly, or serve: `python3 -m http.server 8080` → http://localhost:8080

## Edit content
- Contact details / services: `assets/js/site-data.js` (single source of truth; CMS-ready model)
- Team: open `admin.html` in browser, or edit `data/team.json` (import into headless CMS later)
- Contact form currently stores to `localStorage` (`misbar_enquiries`); wire to a form endpoint at launch

## Before launch — replace placeholders
1. Phone/WhatsApp in `assets/js/site-data.js` (currently `+974 0000 0000`)
2. Email `info@misbar.qa` → confirm official public email
3. Office address, logo file, team photos + bios
4. Form endpoint + analytics ID

## Deploy + DNS (M365-safe)
See `docs/launch-checklist.md` and `docs/dns-m365.md`. Key rule: **only add** A/CNAME for the website; **never delete** M365 MX/SPF/DKIM/DMARC records.

## Phase 2 (Arabic)
- Architecture is RTL-ready (`assets/js/i18n.js`, `dir` handling, Arabic fonts preloaded)
- Add Arabic strings + localized routes after English approval; mirror layouts

## Future activities 06–07
- Templates: `services/future-activity-06.html`, `services/future-activity-07.html` (unlinked, `noindex` by omission from sitemap/nav)
- Publish only after client confirms approvals
