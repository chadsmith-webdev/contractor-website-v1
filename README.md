# ProBuild Contractors — Website Template v1

A fully custom demo website for a general contracting business. Built as a client-facing portfolio demo by **Local Search Ally**.

---

## What This Is

This is a single-page HTML/CSS/JS website designed to demo to potential general contractor clients. It showcases what their business website could look like — complete with branding, services, portfolio, team, certifications, FAQ, and a contact form.

---

## Pages & Sections

| Section          | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| Emergency Banner | 24/7 call-to-action strip at the very top                      |
| Navigation       | Fixed navbar with smooth scroll to all sections                |
| Hero             | Full-screen intro with headline, CTA button, and stats         |
| Services         | 3 core service cards with specs                                |
| Portfolio        | 6 past project cards with category tags                        |
| Testimonials     | 3 client reviews with star ratings                             |
| About / Team     | Company story and 4 team member cards                          |
| Certifications   | 6 credential cards (license, insurance, OSHA, LEED, BBB, Angi) |
| FAQ              | 6 accordion questions covering common client concerns          |
| Contact          | Inquiry form + direct contact info                             |
| Footer           | Navigation links, social icons, built-by credit                |

---

## Files

```
contractor-website-v1/
├── index.html      # All page content and structure
├── styles.css      # All styling and responsive design
├── script.js       # Mobile menu, FAQ accordion, animations, form handler
└── README.md       # This file
```

---

## How to View It

Just open `index.html` in any web browser — no server, build tools, or installs needed.

---

## How to Customize for a Real Client

1. **Business info** — Search `ProBuild` in `index.html` and replace with the client's business name
2. **Phone number** — Search `(555) 123-4567` and replace throughout
3. **Colors** — Open `styles.css` and update the CSS variables at the top (`:root { ... }`)
4. **Services** — Update the 3 service cards in the `#services` section
5. **Portfolio** — Replace the 6 project cards with the client's actual work
6. **Team** — Update names, roles, and initials in the `#about` section
7. **Certifications** — Update license numbers and credentials in `#certifications`
8. **FAQ** — Edit questions/answers in `#faq` to match what that client's customers actually ask
9. **Schema markup** — Update the JSON-LD block in `<head>` with the real address, coordinates, domain, and social URLs
10. **Footer credit** — The "Built by Local Search Ally" line is in the `.footer-bottom-industrial` div

---

## Schema Markup (Local SEO)

The `<head>` contains a JSON-LD schema block with three types:

- **GeneralContractor** — business name, address, phone, hours, credentials, reviews
- **WebSite** — links site to business entity
- **FAQPage** — all 6 FAQ answers eligible for Google rich results

Before going live, replace all placeholder values:

- `Your City`, `ST`, `00000` — real address
- `0.0, 0.0` — real GPS coordinates (find at maps.google.com)
- `probuildcontractors.com` — real domain
- Social profile URLs

Validate at: https://search.google.com/test/rich-results

---

## Part of the Local Search Ally Template Series

This template is one of 7 contractor niche demos:

| Template                       | Niche                    |
| ------------------------------ | ------------------------ |
| contractor-website-v1          | General Contracting ✅   |
| contractor-website-hvac        | HVAC                     |
| contractor-website-plumbing    | Plumbing                 |
| contractor-website-electrical  | Electrical               |
| contractor-website-roofing     | Roofing                  |
| contractor-website-general     | General Contracting (v2) |
| contractor-website-landscaping | Landscaping              |

---

_Built by [Local Search Ally](https://www.localsearchally.com)_
