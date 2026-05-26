// ── Data ──────────────────────────────────────────────────────

const experience = [
  {
    role: 'Project Team Lead',
    company: 'PT. Makmur Adil Sentosa Bakti Borneo',
    type: 'Full-time',
    period: 'Nov 2024 – Present',
    location: 'Indonesia · Hybrid',
    current: true,
    bullets: [],
  },
  {
    role: 'Finance Specialist',
    company: 'PT. Tectona Alas Makmur',
    type: 'Full-time',
    period: 'Apr 2024 – Present',
    location: 'Indonesia · Hybrid',
    current: true,
    bullets: [],
  },
  {
    role: 'Intern, Energy Project Advisory',
    company: 'ING',
    companyDesc: 'Global bank providing specialised lending, tailored corporate finance, and debt and equity market solutions',
    type: 'Internship',
    period: 'Jul 2023 – Nov 2023',
    location: 'Greater London, UK · On-site',
    current: false,
    bullets: [
      'Conducted in-depth financial analysis on the bankability of a Gigafactory project by modelling revenue and cost structures and capital expenditure in close collaboration with clients, resulting in optimised project returns.',
      'Researched and modelled the UK and EU subsidy payment mechanism on Carbon Capture, Utilisation, and Storage projects using Excel and VBA, resulting in more streamlined decision-making on CCUS investment opportunities and their financing structures.',
      'Facilitated weekly stakeholder meetings with clients and cross-functional teams, employing structured agendas and visual aids to communicate project progress, challenges, and next steps.',
    ],
  },
  {
    role: 'Business Analyst',
    company: 'PT. Tectona Alas Makmur',
    companyDesc: 'Largest reforestation services company in East Borneo, Indonesia',
    type: 'Full-time',
    period: 'Nov 2022 – May 2023',
    location: 'Samarinda, East Kalimantan, Indonesia · Hybrid',
    current: false,
    bullets: [
      'Developed and implemented a standardised requirements-gathering and documentation process using Microsoft Power Automate, improving clarity and reducing manual data entry errors.',
      'Streamlined cash management reporting by designing formatted Excel files with Macros, resulting in faster and more consistent monthly reports.',
      'Reorganised the assessment of project costs, revenue streams, and ROI by developing a user-friendly Excel dashboard, enabling real-time tracking of financial indicators and reducing time spent on data consolidation.',
    ],
  },
  {
    role: 'Financial Analyst',
    company: 'PT. Tectona Alas Makmur',
    companyDesc: 'Largest reforestation services company in East Borneo, Indonesia',
    type: 'Full-time',
    period: 'Jan 2020 – Aug 2021',
    location: 'Samarinda, East Kalimantan, Indonesia',
    current: false,
    bullets: [
      'Managed DCF and payback analyses using Excel and VBA to build dashboards and management reports for capital budgeting and valuation, supporting more accurate and timely decisions on project opportunities above IDR 10B.',
      'Developed a VBA-automated financial forecasting model that accurately predicted future cash flows, improving operational planning and saving 7 staff members 900+ hours per year.',
    ],
  },
];

const education = [
  {
    degree: 'MSc Finance',
    institution: 'Bayes Business School (formerly Cass)',
    location: 'London, United Kingdom',
    period: '2021 – 2022',
    metrics: [
      { value: '73.1%', label: 'Core Modules' },
      { value: '2nd', label: 'Highest Mark' },
      { value: 'Top 5', label: 'UK Ranking' },
      { value: 'Top 22', label: 'Global Ranking' },
    ],
    bullets: [
      'Graduated with Distinction, achieving the second highest average mark across core modules in the cohort.',
      'Modules included Asset Management, Corporate Finance and Valuation, Derivatives and Risk Management, International Finance, Statistics in Finance, Introduction to Python, and Visual Basics in Finance.',
    ],
  },
  {
    degree: 'BCom Accounting and Finance',
    institution: 'University of Melbourne',
    location: 'Melbourne, Australia',
    period: '2017 – 2019',
    metrics: [
      { value: '81.6%', label: 'Finance Mark' },
      { value: 'H2A', label: 'Honours' },
      { value: '1st', label: 'Australia Rank' },
      { value: 'Top 14', label: 'Global Rank' },
    ],
    bullets: [
      'Averaged 81% (First Class Honours level) across core finance subjects: Principles of Finance, Corporate Finance, Investments, Derivative Securities, Foundations of FinTech, Quantitative Methods, and Econometrics.',
      'Achieved A– (93/100) in Marketing Management at Harvard University through the Melbourne Global Scholars programme, earning the Melbourne Global Scholars Award.',
    ],
  },
];

const skills = [
  {
    key: 'finance',
    label: 'Finance',
    items: [
      { name: 'Financial Modelling', level: 'Advanced', pct: 90 },
      { name: 'DCF & Valuation', level: 'Advanced', pct: 90 },
      { name: 'Project Finance', level: 'Advanced', pct: 85 },
      { name: 'Capital Budgeting', level: 'Advanced', pct: 85 },
      { name: 'Cash Management', level: 'Advanced', pct: 85 },
      { name: 'Carbon Markets', level: 'Proficient', pct: 75 },
      { name: 'Derivatives & Risk Mgmt', level: 'Proficient', pct: 70 },
    ],
  },
  {
    key: 'analytics',
    label: 'Analytics & Tools',
    items: [
      { name: 'MS Excel', level: 'Advanced', pct: 95 },
      { name: 'VBA / Excel Macros', level: 'Intermediate', pct: 70 },
      { name: 'Power Automate', level: 'Intermediate', pct: 65 },
      { name: 'Bloomberg Terminal', level: 'Intermediate', pct: 60 },
      { name: 'EViews', level: 'Intermediate', pct: 60 },
      { name: 'SPSS Statistics', level: 'Intermediate', pct: 55 },
      { name: 'XERO Accounting', level: 'Intermediate', pct: 60 },
    ],
  },
  {
    key: 'dev',
    label: 'Development',
    items: [
      { name: 'R', level: 'Intermediate', pct: 55 },
      { name: 'Python', level: 'Beginner', pct: 35 },
      { name: 'SQL', level: 'Beginner', pct: 30 },
    ],
  },
];

const projects = [
  {
    title: 'Green Finance & Carbon Markets',
    context: 'Bayes Business School × PT. Tectona Alas Makmur',
    desc: 'Interactive learning portal covering carbon markets and green finance. Features 14 content chapters, 50+ key terms, 70+ flashcards, and 60+ practice questions with progress tracking.',
    tags: ['JavaScript', 'HTML/CSS', 'Education', 'Carbon Markets'],
    links: [
      { label: 'Visit site', href: 'https://galihsumedi.github.io/carbon-credit-research/', primary: true },
    ],
  },
  {
    title: 'Attendance Report Automation',
    context: 'Tectona Group — Internal Tool',
    desc: 'Flask web application that processes raw fingerprint scanner data into formatted monthly Excel reports. Includes lateness tracking, leave categories, and individual employee records.',
    tags: ['Python', 'Flask', 'pandas', 'openpyxl'],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/galihsumedi/attendance-report-TG', primary: false },
    ],
  },
];

const achievements = [
  {
    mark: '★',
    title: 'Gold Medallist — INESPO 2014',
    sub: 'International Environment & Sustainability Project Olympiad',
  },
  {
    mark: '◆',
    title: 'Melbourne Global Scholars Award',
    sub: 'Harvard cross-institutional programme · A– (93/100)',
  },
  {
    mark: '◎',
    title: 'Bloomberg Market Concepts',
    sub: 'Bloomberg Terminal certification',
  },
  {
    mark: '◎',
    title: 'JPMorgan Chase Markets',
    sub: 'Virtual Experience Programme',
  },
  {
    mark: '◎',
    title: 'Codecademy Learn Python 3',
    sub: 'Completed certification',
  },
  {
    mark: '◉',
    title: '18-Handicap Golfer',
    sub: 'Achieved within the first three months of taking up the sport',
  },
  {
    mark: '◉',
    title: 'Sports Coordinator',
    sub: 'Brunch at ATLANTA — badminton & basketball community events',
  },
];

// ── Navigation ─────────────────────────────────────────────────

function initNav() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-item[data-section]');
    if (!btn) return;

    const target = btn.dataset.section;

    document.querySelectorAll('.nav-item').forEach((n) => n.classList.remove('active'));
    document.querySelectorAll(`[data-section="${target}"]`).forEach((n) => n.classList.add('active'));

    document.querySelectorAll('.section').forEach((s) => s.classList.remove('active'));
    const section = document.getElementById(`section-${target}`);
    if (section) section.classList.add('active');

    if (target === 'skills') setTimeout(animateSkillBars, 80);

    closeMobileDrawer();
  });
}

// ── Mobile menu ────────────────────────────────────────────────

function initMobileMenu() {
  const btn = document.getElementById('hamburger');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const drawer = document.getElementById('mobileDrawer');
    const open = drawer.classList.toggle('open');
    btn.classList.toggle('open', open);
  });
}

function closeMobileDrawer() {
  document.getElementById('mobileDrawer')?.classList.remove('open');
  document.getElementById('hamburger')?.classList.remove('open');
}

// ── Stat counters ──────────────────────────────────────────────

function animateCounters() {
  document.querySelectorAll('.counter[data-target]').forEach((el) => {
    const target = parseInt(el.dataset.target, 10);
    let n = 0;
    const tick = () => {
      n = Math.min(n + 1, target);
      el.textContent = n;
      if (n < target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

// ── Experience ─────────────────────────────────────────────────

function renderExperience() {
  const container = document.getElementById('experienceTimeline');
  if (!container) return;

  container.innerHTML = experience.map((job, i) => {
    const expandable = job.bullets.length > 0;
    return `
      <div class="tl-item${job.current ? ' current' : ''}">
        <div class="exp-card${expandable ? ' expandable' : ''}" data-exp="${i}">
          <div class="exp-head">
            <div class="exp-meta">
              <div class="exp-role">${job.role}</div>
              <div class="exp-company">${job.company}</div>
              ${job.companyDesc ? `<div class="exp-company-desc">${job.companyDesc}</div>` : ''}
              <div class="exp-attrs">
                <span class="exp-period">${job.period}</span>
                <span class="exp-sep">·</span>
                <span class="exp-location">${job.location}</span>
                <span class="exp-type-pill">${job.type}</span>
              </div>
            </div>
            ${expandable ? `<button class="exp-toggle" aria-label="Expand details">+</button>` : ''}
          </div>
          ${expandable ? `
            <div class="exp-body" id="exp-body-${i}">
              <ul class="exp-bullets">
                ${job.bullets.map((b) => `<li>${b}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  container.addEventListener('click', (e) => {
    const card = e.target.closest('.exp-card.expandable');
    if (!card) return;
    const i = card.dataset.exp;
    const body = document.getElementById(`exp-body-${i}`);
    const btn = card.querySelector('.exp-toggle');
    if (!body) return;

    const opening = !body.classList.contains('open');
    if (opening) {
      body.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
      btn?.classList.add('open');
    } else {
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        body.style.maxHeight = '0';
        body.classList.remove('open');
        btn?.classList.remove('open');
      }));
    }
  });
}

// ── Education ──────────────────────────────────────────────────

function renderEducation() {
  const container = document.getElementById('educationCards');
  if (!container) return;

  container.innerHTML = education.map((edu) => `
    <div class="edu-card">
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-institution">${edu.institution}</div>
      <div class="edu-loc-period">
        <span class="edu-period">${edu.period}</span>
        <span class="edu-sep">·</span>
        <span class="edu-location">${edu.location}</span>
      </div>
      <div class="edu-metrics">
        ${edu.metrics.map((m) => `
          <div class="edu-metric">
            <div class="edu-metric-val">${m.value}</div>
            <div class="edu-metric-lbl">${m.label}</div>
          </div>
        `).join('')}
      </div>
      <ul class="edu-bullets">
        ${edu.bullets.map((b) => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// ── Skills ─────────────────────────────────────────────────────

function renderSkills() {
  const container = document.getElementById('skillsContainer');
  if (!container) return;

  container.innerHTML = skills.map((group) => `
    <div class="skill-group" data-group="${group.key}">
      <div class="skill-group-label">${group.label}</div>
      <div class="skill-list">
        ${group.items.map((s) => `
          <div class="skill-row">
            <div class="skill-name">${s.name}</div>
            <div class="skill-track">
              <div class="skill-fill" data-pct="${s.pct}"></div>
            </div>
            <div class="skill-level">${s.level}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function animateSkillBars() {
  document.querySelectorAll('.skill-fill[data-pct]').forEach((bar) => {
    bar.style.width = bar.dataset.pct + '%';
  });
}

function initSkillFilters() {
  document.querySelector('.filter-row')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.skill-group').forEach((g) => {
      g.style.display = (filter === 'all' || g.dataset.group === filter) ? '' : 'none';
    });
  });
}

// ── Projects ───────────────────────────────────────────────────

function renderProjects() {
  const container = document.getElementById('projectCards');
  if (!container) return;

  container.innerHTML = projects.map((p) => `
    <div class="project-card">
      <div class="project-title">${p.title}</div>
      <div class="project-context">${p.context}</div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">
        ${p.tags.map((t) => `<span class="p-tag">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        ${p.links.map((l) => `
          <a href="${l.href}" target="_blank" rel="noopener"
             class="project-link${l.primary ? '' : ' alt'}">${l.label} ↗</a>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ── Achievements ───────────────────────────────────────────────

function renderAchievements() {
  const container = document.getElementById('achievementGrid');
  if (!container) return;

  container.innerHTML = achievements.map((a) => `
    <div class="achieve-card">
      <div class="achieve-mark">${a.mark}</div>
      <div class="achieve-body">
        <div class="achieve-title">${a.title}</div>
        <div class="achieve-sub">${a.sub}</div>
      </div>
    </div>
  `).join('');
}

// ── Init ───────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobileMenu();
  renderExperience();
  renderEducation();
  renderSkills();
  initSkillFilters();
  renderProjects();
  renderAchievements();
  setTimeout(animateCounters, 350);
});
