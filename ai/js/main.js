window.addEventListener('load', () => {
  renderAll();
  initScroll();
  initTechObserver();
});

function renderAll() {
  renderTopbar();
  renderHero();
  renderStats();
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderContact();
  renderFooter();
}

/* ── TOPBAR ─────────────────────────────────── */
function renderTopbar() {
  const { name, available } = DATA.personal;
  const [first, ...rest] = name.split(' ');
  document.getElementById('logo').innerHTML = `${first} <em>${rest.join(' ')}</em>`;

  document.getElementById('nav').innerHTML = [
    { href: '#stack', label: 'Skills',     s: 'stack'   },
    { href: '#work',  label: 'Projects',   s: 'work'    },
    { href: '#exp',   label: 'Experience', s: 'exp'     },
    { href: '#edu',   label: 'Education',  s: 'edu'     },
    { href: '#contact',label:'Contact',    s: 'contact' },
  ].map(n => `<a href="${n.href}" class="nav-link" data-section="${n.s}">${n.label}</a>`).join('');

  if (!available) document.getElementById('avail-badge').style.display = 'none';
}

/* ── HERO ───────────────────────────────────── */
function renderHero() {
  const p = DATA.personal;

  document.getElementById('hero-kicker').textContent = `${p.title} · ${p.location}`;

  const [w1, accent, w2] = p.tagline;
  document.getElementById('hero-heading').innerHTML = `${w1} <em>${accent}</em> ${w2}`;
  document.getElementById('hero-sub').textContent   = p.summary;

}

/* ── STATS ──────────────────────────────────── */
function renderStats() {
  document.getElementById('stats-inner').innerHTML = DATA.stats.map(s => `
    <div class="stat-item">
      <div class="stat-val">${s.value}</div>
      <div class="stat-lbl">${s.label}</div>
    </div>
  `).join('');
}

/* ── SKILLS ─────────────────────────────────── */
function renderSkills() {
  document.getElementById('tech-grid').innerHTML = DATA.techStack.map((t, i) => `
    <div class="tech-item" style="animation-delay:${i * 0.05}s">
      <img src="${t.icon}" alt="${t.name}" loading="lazy"/>
      <span>${t.name}</span>
    </div>
  `).join('');

  document.getElementById('soft-chips').innerHTML =
    DATA.softSkills.map(s => `<span class="soft-chip">${s}</span>`).join('');
}

/* ── PROJECTS ───────────────────────────────── */
function renderProjects() {
  document.getElementById('proj-list').innerHTML = DATA.projects.map(p => `
    <div class="proj-row">
      <div>
        <div class="proj-number">${p.id}</div>
        <div class="proj-name">${p.title}</div>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-pills">
          ${p.stack.map(s => `<span class="proj-pill">${s}</span>`).join('')}
        </div>
      </div>
      <div class="proj-side">
        <span class="proj-tag-badge">${p.tag}</span>
        <span class="proj-year">${p.year}</span>
        <a class="gh-btn" href="${p.github}" target="_blank" rel="noopener">
          <i class="fa-brands fa-github"></i>GitHub
        </a>
      </div>
    </div>
  `).join('');
}

/* ── EXPERIENCE ─────────────────────────────── */
function renderExperience() {
  document.getElementById('exp-list').innerHTML = DATA.experience.map(e => `
    <div class="exp-item">
      <div class="exp-period">
        ${e.period}
        <span class="exp-loc">${e.location}</span>
      </div>
      <div>
        <div class="exp-co-tag"><span>${e.company}</span></div>
        <div class="exp-role">${e.role}</div>
        <ul class="exp-bullets">
          ${e.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ── EDUCATION ──────────────────────────────── */
function renderEducation() {
  document.getElementById('edu-row').innerHTML = DATA.education.map(e => `
    <div class="edu-card">
      <div class="edu-badge">${e.type}</div>
      <div class="edu-school">${e.school}</div>
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-date">${e.date} · ${e.place}</div>
    </div>
  `).join('');
}

/* ── CONTACT ────────────────────────────────── */
function renderContact() {
  const p = DATA.personal;
  document.getElementById('contact-sub').textContent =
    'Open to Frontend and Full-Stack roles in Denmark and Europe. Clean code, great UX, and teams that care about craft.';

  document.getElementById('contact-cards').innerHTML = [
    { icon: 'fa-regular fa-envelope', label: 'Email',    val: p.email,                           href: `mailto:${p.email}` },
    { icon: 'fa-brands fa-github',    label: 'GitHub',   val: p.github.replace('https://',''),   href: p.github },
    { icon: 'fa-brands fa-linkedin',  label: 'LinkedIn', val: p.linkedin.replace('https://',''), href: p.linkedin },
    { icon: 'fa-solid fa-phone',      label: 'Phone',    val: p.phone,                           href: `tel:${p.phone.replace(/\s/g,'')}` },
  ].map(l => `
    <a class="contact-card" href="${l.href}" target="_blank" rel="noopener">
      <div class="contact-card-icon"><i class="${l.icon}"></i></div>
      <div>
        <div class="contact-card-label">${l.label}</div>
        <div class="contact-card-val">${l.val}</div>
      </div>
      <i class="fa-solid fa-arrow-up-right-from-square contact-card-arrow"></i>
    </a>
  `).join('');
}

/* ── FOOTER ─────────────────────────────────── */
function renderFooter() {
  document.getElementById('footer-name').textContent = `© 2025 ${DATA.personal.name}`;
  document.getElementById('footer-loc').textContent  = DATA.personal.location;
}

/* ── SCROLL ─────────────────────────────────── */
function initScroll() {
  const ids = ['hero','stack','work','exp','edu','contact'];
  window.addEventListener('scroll', () => {
    const sy = window.scrollY + 80;
    let cur = ids[0];
    ids.forEach(id => { const el=document.getElementById(id); if(el&&el.offsetTop<=sy) cur=id; });
    document.querySelectorAll('.nav-link').forEach(l =>
      l.classList.toggle('active', l.dataset.section === cur)
    );
    document.querySelectorAll('.exp-item').forEach((el,i) => {
      if(el.getBoundingClientRect().top < window.innerHeight-50)
        setTimeout(()=>el.classList.add('show'), i*100);
    });
  });
  setTimeout(()=>window.dispatchEvent(new Event('scroll')),80);
}

/* ── TECH OBSERVER ──────────────────────────── */
function initTechObserver() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target);} });
  }, { threshold: 0.1 });
  document.querySelectorAll('.tech-item').forEach(el=>io.observe(el));
}