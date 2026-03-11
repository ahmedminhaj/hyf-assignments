# Minhaj Ahammed — Portfolio

## Folder Structure

```
portfolio/
├── index.html          ← Main HTML skeleton (no hardcoded content)
├── css/
│   └── style.css       ← All styles, animations, responsive rules
├── js/
│   ├── data.js         ← ✏️  EDIT THIS FILE to update your portfolio
│   └── main.js         ← Renders all sections from data.js
└── README.md
```

## How to Edit Content

Open **`js/data.js`** — everything is stored in the `DATA` object:

| Key          | What it controls                              |
| ------------ | --------------------------------------------- |
| `personal`   | Name, title, location, email, phone, links    |
| `techStack`  | Icons shown in the Stack section              |
| `projects`   | Project cards (title, desc, stack, year, tag) |
| `experience` | Work history with bullet points               |
| `education`  | Degree + certification cards                  |
| `stats`      | Numbers shown in the terminal card            |
| `softSkills` | Pills shown below the tech icons              |

## How to Run

Just open `index.html` in any browser — no build tools, no server needed.

> For best results (fonts + devicon CDN), open with an internet connection.
