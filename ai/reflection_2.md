# Portfolio Reflection

## Improvements (Part A → Part B)

1. Split into `index.html`, `style.css`, `data.js`, `main.js` — proper folder structure
2. All content moved to a `DATA` object — no more hardcoded HTML
3. Added fixed navbar with smooth scroll and active state
4. New typography and light editorial design theme
5. Tech icons now animated with scroll-triggered entrance
6. Projects changed from side-by-side cards to a vertical list
7. Added Experience, Education, and Contact sections
8. Animations — fade-in, hover effects, scroll reveals
9. Semantic HTML and `alt` text for accessibility

---

## Diagram

```
PART A                    PART B
─────────────────         ──────────────────────────
index.html                index.html  (skeleton)
styles.css                css/style.css
                          js/data.js  (content)
                          js/main.js  (rendering)

About Me                  Hero + Stats
Skills | Tech Stack       Skills
Projects (3 cards)        Projects (vertical)
                          Experience
                          Education
                          Contact
```

---

## 3 Learnings

1. Separating content into `data.js` makes updates simple and mirrors how real frameworks work.
2. Small animations — a few keyframes and an IntersectionObserver — make a page feel significantly more polished.
3. Defining CSS variables before writing any rules enforces consistency and makes global changes easy.

---

## 3 Ethical Issues and Mitigations

1. **Accessibility** — Part A had no keyboard nav or proper labels. Fixed with semantic HTML, `alt` text, and native interactive elements.
2. **Use of AI-generated code** — AI-generated solution would make it harder to write code and debug independently.Fixed with reviewing AI-generated code before adding.
3. **Privacy** — Email and phone in static HTML are exposed to scrapers. Mitigated by isolating them in `data.js`;
