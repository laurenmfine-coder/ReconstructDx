/* ═══════════════════════════════════════════════════════════════════
   ReconstructDx — app.js
   No framework, no AI, no dependencies beyond data.js
   Pure HTML/CSS/JS — works offline, deployable to GitHub Pages
═══════════════════════════════════════════════════════════════════ */

/* ── STATE ──────────────────────────────────────────────────────────── */
const State = {
  step: 0,
  phqAnswers: {},   // { q0: 0, q1: 1, q2: 0, q3: 1 }
  phqFlagged: false,
  selectedModule: null,  // module object
  valueRatings: {},      // { domainId: 1-5 }
  topValues: [],         // top 3 domain IDs after sorting
  patientName: "",
  leaning: ""
};

/* ── DOM REFS ────────────────────────────────────────────────────────── */
const app        = document.getElementById("app");
const progressNav = document.getElementById("progress-nav");
const progressSteps = document.getElementById("progress-steps");
const progressFill  = document.getElementById("progress-fill");

/* ── ROUTER ─────────────────────────────────────────────────────────── */
function goTo(step) {
  State.step = step;
  updateProgress();
  renderStep(step);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateProgress() {
  const s = State.step;
  const steps = RDX.steps;
  if (s === 0) {
    progressNav.style.display = "none";
    return;
  }
  progressNav.style.display = "block";
  progressSteps.innerHTML = steps.map((label, i) =>
    `<span class="progress-step ${i < s ? "done" : i === s ? "active" : ""}">${label}</span>`
  ).join("");
  const pct = Math.round((s / (steps.length - 1)) * 100);
  progressFill.style.width = pct + "%";
}

function renderStep(step) {
  app.innerHTML = "";
  const screens = [
    renderWelcome,
    renderCheckin,
    renderModuleSelect,
    renderLearn,
    renderValues,
    renderCompare,
    renderSummary
  ];
  if (screens[step]) screens[step]();
}

/* ── HELPERS ─────────────────────────────────────────────────────────── */
function el(tag, attrs = {}, ...children) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") e.className = v;
    else if (k === "html") e.innerHTML = v;
    else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v);
  }
  for (const child of children) {
    if (child == null) continue;
    if (typeof child === "string") e.appendChild(document.createTextNode(child));
    else e.appendChild(child);
  }
  return e;
}

function div(cls, ...children) { return el("div", { class: cls }, ...children); }
function p(txt, cls = "") { return el("p", { class: cls, html: txt }); }
function h1(txt) { return el("h1", { class: "screen-title", html: txt }); }
function h2(txt) { return el("h2", { class: "section-title", html: txt }); }
function h3(txt) { return el("h3", { class: "section-sub", html: txt }); }
function eyebrow(txt) { return el("p", { class: "screen-eyebrow" }, txt); }
function btn(label, cls, onClick, attrs = {}) {
  return el("button", { class: `btn ${cls}`, onclick: onClick, ...attrs }, label);
}

function screen(cls, ...children) {
  const s = div(`screen ${cls}`, ...children);
  app.appendChild(s);
}

/* ── SCREEN 0: WELCOME ───────────────────────────────────────────────── */
function renderWelcome() {
  screen("",
    div("welcome-hero",
      div("logo-mark-lg", "Rx"),
      el("p", { class: "screen-eyebrow" }, "Welcome to"),
      h1("ReconstructDx"),
      el("p", { class: "screen-subtitle" },
        "This tool helps you think through your options before a reconstructive surgery appointment. " +
        "It will ask what matters most to you, explain your options in plain language, and give you a summary to bring to your surgeon."
      ),
      div("time-badge",
        "⏱ About 15 minutes"
      )
    ),
    div("welcome-features",
      featureCard("🔒", "Private", "Nothing you enter is stored or shared"),
      featureCard("📖", "Plain language", "Written at a 6th grade reading level"),
      featureCard("🖨️", "Print-ready", "Get a summary to bring to your appointment"),
      featureCard("🤝", "Your choice", "This tool informs — your doctor and you decide")
    ),
    div("card card-accent",
      p("This tool is for information and decision support only. It does not replace your surgeon's advice. Always discuss your options with your care team.")
    ),
    div("btn-row",
      btn("Get started →", "btn btn-primary btn-lg btn-full", () => goTo(1))
    )
  );
}

function featureCard(icon, title, desc) {
  return div("welcome-feature",
    el("span", { class: "feat-icon" }, icon),
    el("strong", {}, title),
    el("span", {}, desc)
  );
}

/* ── SCREEN 1: WELLBEING CHECK-IN ────────────────────────────────────── */
const PHQ_QUESTIONS = [
  "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
  "Over the last 2 weeks, how often have you had little interest or pleasure in doing things?",
  "Over the last 2 weeks, how often have you felt nervous, anxious, or on edge?",
  "Over the last 2 weeks, how often have you been unable to stop or control worrying?"
];
const PHQ_OPTIONS = ["Not at all", "Several days", "More than half the days", "Nearly every day"];

function renderCheckin() {
  screen("",
    eyebrow("Step 1 of 5"),
    h1("A quick check-in"),
    el("p", { class: "screen-subtitle" },
      "Before we start, we want to make sure you have the support you need. " +
      "Medical decisions can be stressful. These 4 short questions help us point you to helpful resources if you need them."
    ),
    div("card card-accent",
      p("Your answers are not stored and will not be shared with anyone.")
    ),

    ...PHQ_QUESTIONS.map((q, qi) => {
      const optEls = PHQ_OPTIONS.map((opt, oi) => {
        const optDiv = div("phq-opt" + (State.phqAnswers[qi] === oi ? " selected" : ""), opt);
        optDiv.addEventListener("click", () => {
          State.phqAnswers[qi] = oi;
          renderCheckin();
        });
        return optDiv;
      });
      return div("phq-question",
        el("label", { class: "field-label" }, q),
        div("phq-options", ...optEls)
      );
    }),

    div("btn-row",
      btn("← Back", "btn btn-secondary", () => goTo(0)),
      btn("Continue →", "btn btn-primary", submitCheckin,
        { disabled: Object.keys(State.phqAnswers).length < 4 ? "" : null }
      )
    )
  );
}

function submitCheckin() {
  // PHQ-2: Q0+Q1, GAD-2: Q2+Q3 — flag if either sum ≥ 3
  const phqScore = (State.phqAnswers[0] || 0) + (State.phqAnswers[1] || 0);
  const gadScore = (State.phqAnswers[2] || 0) + (State.phqAnswers[3] || 0);
  State.phqFlagged = (phqScore >= 3 || gadScore >= 3);

  if (State.phqFlagged) {
    app.innerHTML = "";
    screen("",
      eyebrow("Before we continue"),
      h1("You're not alone in feeling this way"),
      el("p", { class: "screen-subtitle" },
        "Making medical decisions when you're feeling anxious or down is really hard. " +
        "Many people find it helpful to speak with a counselor alongside their surgical team."
      ),
      div("card",
        h3("Some resources that may help:"),
        el("ul", { class: "question-list" },
          el("li", {}, "988 Suicide & Crisis Lifeline — call or text 988, available 24/7"),
          el("li", {}, "Crisis Text Line — text HOME to 741741"),
          el("li", {}, "Ask your surgeon's office about a referral to a counselor who works with surgical patients")
        )
      ),
      div("card card-accent",
        p("You can absolutely continue using this tool. This check-in just means we want to make sure you have full support — not that you can't make this decision.")
      ),
      div("btn-row",
        btn("← Back", "btn btn-secondary", () => goTo(1)),
        btn("Continue to tool →", "btn btn-primary", () => goTo(2))
      )
    );
  } else {
    goTo(2);
  }
}

/* ── SCREEN 2: MODULE SELECT ─────────────────────────────────────────── */
function renderModuleSelect() {
  screen("",
    eyebrow("Step 2 of 5"),
    h1("What decision are you working through?"),
    el("p", { class: "screen-subtitle" },
      "Choose the topic that best fits your situation. Each section has information about your options, written in plain language."
    ),
    div("module-grid",
      ...RDX.modules.map(mod => {
        const card = div("module-card" + (State.selectedModule?.id === mod.id ? " selected" : ""),
          el("span", { class: "module-icon" }, mod.icon),
          el("h3", {}, mod.title),
          el("p", {}, mod.subtitle)
        );
        card.addEventListener("click", () => {
          State.selectedModule = mod;
          State.valueRatings = {};
          State.topValues = [];
          renderModuleSelect();
        });
        return card;
      })
    ),
    State.selectedModule ? div("card card-accent",
      p(`<strong>You selected:</strong> ${State.selectedModule.title} — ${State.selectedModule.subtitle}`)
    ) : null,
    div("btn-row",
      btn("← Back", "btn btn-secondary", () => goTo(1)),
      btn("Continue →", "btn btn-primary", () => goTo(3),
        { disabled: !State.selectedModule ? "" : null }
      )
    )
  );
}

/* ── SCREEN 3: LEARN ─────────────────────────────────────────────────── */
function renderLearn() {
  const mod = State.selectedModule;
  screen("",
    eyebrow("Step 3 of 5 — " + mod.title),
    h1("Understanding your options"),
    el("p", { class: "screen-subtitle" },
      "Here is a plain-language overview of your options. Take your time reading — you can go back at any point."
    ),
    mod.note ? div("card card-accent", p(mod.note)) : null,
    ...mod.options.map(opt => optionCard(opt)),
    div("btn-row",
      btn("← Back", "btn btn-secondary", () => goTo(2)),
      btn("Continue: What matters to you →", "btn btn-primary", () => goTo(4))
    )
  );
}

function optionCard(opt) {
  return div("card",
    h2(opt.name),
    el("p", { class: "screen-eyebrow", style: "margin-bottom:8px" }, opt.plain),
    h3("How it works"),
    p(opt.howItWorks),
    h3("Recovery"),
    p(opt.recovery),
    h3("Main benefits"),
    el("ul", { class: "question-list" },
      ...opt.pros.map(pro => el("li", { style: "padding-left:20px" }, pro))
    ),
    h3("Risks and things to know"),
    el("ul", { class: "question-list" },
      ...opt.risks.filter(r => r.label).map(r =>
        el("li", { style: "padding-left:20px" },
          `${r.label}${r.rate ? " — " + r.rate : ""}`
        )
      )
    )
  );
}

/* ── SCREEN 4: VALUES CLARIFICATION ──────────────────────────────────── */
function renderValues() {
  const mod = State.selectedModule;
  const domains = mod.valueDomains.map(id => ({ id, ...RDX.valueDomains[id] }));
  const ratingLabels = ["Not important", "Slightly important", "Somewhat important", "Very important", "Extremely important"];

  screen("",
    eyebrow("Step 4 of 5"),
    div("values-intro",
      el("h2", {}, "What matters most to you?"),
      el("p", {}, "Rate how important each of these things is in making your decision. " +
        "There are no right or wrong answers — this is about your priorities.")
    ),

    ...domains.map(domain => {
      const current = State.valueRatings[domain.id];
      const rated = current !== undefined;

      return div(`value-item${rated ? " rated" : ""}`,
        div("value-item-header",
          el("span", { class: "value-item-icon" }, domain.icon),
          div("value-item-text",
            el("strong", {}, domain.label),
            el("span", {}, domain.description)
          )
        ),
        div("rating-scale",
          ...ratingLabels.map((label, i) => {
            const ratingBtn = el("button", {
              class: `rating-btn${current === i + 1 ? ` selected-${i + 1}` : ""}`,
              "aria-label": `${domain.label}: ${label}`
            }, label);
            ratingBtn.addEventListener("click", () => {
              State.valueRatings[domain.id] = i + 1;
              renderValues();
            });
            return ratingBtn;
          })
        )
      );
    }),

    div("btn-row",
      btn("← Back", "btn btn-secondary", () => goTo(3)),
      btn("Continue →", "btn btn-primary", submitValues,
        { disabled: Object.keys(State.valueRatings).length < mod.valueDomains.length ? "" : null }
      )
    )
  );
}

function submitValues() {
  // Sort by rating descending, take top 3
  State.topValues = Object.entries(State.valueRatings)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([id]) => id);
  goTo(5);
}

/* ── SCREEN 5: OPTION COMPARISON ─────────────────────────────────────── */
function renderCompare() {
  const mod = State.selectedModule;
  const crosswalk = RDX.crosswalk[mod.id] || {};
  const domains = mod.valueDomains.map(id => ({ id, ...RDX.valueDomains[id] }));
  const isTopValue = id => State.topValues.includes(id);

  // Build table
  const headerCells = [
    el("th", {}, ""),
    ...mod.options.map(opt => el("th", {}, opt.name))
  ];

  const rows = domains.map(domain => {
    const highlighted = isTopValue(domain.id);
    const cells = [
      el("td", { class: "row-label" },
        domain.icon + " " + domain.label +
        (highlighted ? `<span class="highlight-badge">Your priority</span>` : "")
      ),
      ...mod.options.map(opt => {
        const note = crosswalk[domain.id]?.[opt.id] || "—";
        return el("td", {}, note);
      })
    ];
    const row = el("tr", { class: highlighted ? "highlighted-row" : "" }, ...cells);
    return row;
  });

  screen("",
    eyebrow("Step 5 of 5"),
    h1("Comparing your options"),
    el("p", { class: "screen-subtitle" },
      "Your top priorities are highlighted. This table shows how each option relates to what matters most to you."
    ),

    div("card",
      h3("Your top priorities from the previous step:"),
      div("",
        ...State.topValues.map(id => {
          const d = RDX.valueDomains[id];
          return el("span", { class: "value-pill" }, d ? d.icon + " " + d.label : id);
        })
      )
    ),

    div("comparison-wrap",
      el("table", { class: "comparison-table", role: "table" },
        el("thead", {}, el("tr", {}, ...headerCells)),
        el("tbody", {}, ...rows)
      )
    ),

    div("card card-accent",
      p("This comparison is based on published medical evidence. Your surgeon will know which options are right for your specific situation.")
    ),

    div("btn-row",
      btn("← Back", "btn btn-secondary", () => goTo(4)),
      btn("Create my summary →", "btn btn-teal btn-lg", () => goTo(6))
    )
  );
}

/* ── SCREEN 6: DECISION SUMMARY ──────────────────────────────────────── */
function renderSummary() {
  const mod = State.selectedModule;
  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  screen("",
    div("summary-header",
      el("h1", {}, "Your Decision Summary"),
      el("p", {}, "Print or save this page to bring to your surgical consultation")
    ),

    // Name + date
    div("summary-section",
      el("h3", {}, "About this summary"),
      div("field",
        el("label", { class: "field-label", for: "patient-name" }, "Your name (optional)"),
        el("input", {
          type: "text", id: "patient-name",
          class: "leaning-select",
          placeholder: "Enter your name",
          value: State.patientName,
          oninput: (e) => { State.patientName = e.target.value; }
        })
      ),
      p(`<strong>Date:</strong> ${today}`),
      p(`<strong>Topic:</strong> ${mod.title} — ${mod.subtitle}`)
    ),

    // Top values
    div("summary-section",
      el("h3", {}, "What matters most to you"),
      p("Based on your answers, these are your top priorities:"),
      div("",
        ...State.topValues.map((id, i) => {
          const d = RDX.valueDomains[id];
          if (!d) return null;
          return el("span", { class: "value-pill" }, `${i + 1}. ${d.icon} ${d.label}`);
        }).filter(Boolean)
      ),
      el("br"),
      p("Full ratings:")  ,
      el("ul", { class: "question-list" },
        ...Object.entries(State.valueRatings)
          .sort((a, b) => b[1] - a[1])
          .map(([id, rating]) => {
            const d = RDX.valueDomains[id];
            const labels = ["", "Not important", "Slightly important", "Somewhat important", "Very important", "Extremely important"];
            return el("li", {}, `${d?.icon || ""} ${d?.label || id} — ${labels[rating]}`);
          })
      )
    ),

    // Options summary
    div("summary-section",
      el("h3", {}, "Your options at a glance"),
      ...mod.options.map(opt => div("",
        h3(opt.name + " — " + opt.plain),
        p(opt.howItWorks),
        el("br")
      ))
    ),

    // Leaning
    div("summary-section",
      el("h3", {}, "I am leaning toward..."),
      p("You do not have to decide now. But if you are leaning in a direction, noting it here can help guide your conversation with your surgeon."),
      el("select", {
        class: "leaning-select",
        onchange: (e) => { State.leaning = e.target.value; }
      },
        el("option", { value: "" }, "— Choose an option —"),
        ...mod.options.map(opt => el("option", { value: opt.id, selected: State.leaning === opt.id ? "" : null }, opt.name)),
        el("option", { value: "undecided" }, "I am still deciding")
      )
    ),

    // Questions to ask
    div("summary-section",
      el("h3", {}, "Questions to ask your surgeon"),
      el("ul", { class: "question-list" },
        ...mod.questions.map(q => el("li", {}, q))
      )
    ),

    // Support resources (always shown, prominent if flagged)
    div(State.phqFlagged ? "summary-section card-warn" : "summary-section",
      el("h3", {}, "Support resources"),
      State.phqFlagged
        ? p("<strong>Based on your check-in, you may benefit from additional support.</strong> Many people find that talking with a counselor before making a major medical decision is helpful.")
        : p("Making medical decisions can be stressful. Support is always available."),
      el("ul", { class: "question-list" },
        el("li", {}, "988 Suicide & Crisis Lifeline — call or text 988, available 24/7"),
        el("li", {}, "Crisis Text Line — text HOME to 741741"),
        el("li", {}, "Ask your care team about a referral to a counselor who works with surgical patients")
      )
    ),

    div("card",
      p("<strong>This summary was created using ReconstructDx</strong>, a patient decision aid developed by medical student researchers. It is for informational purposes only and does not replace clinical advice. All decisions should be made with your surgical team.")
    ),

    div("btn-row",
      btn("← Back", "btn btn-secondary", () => goTo(5)),
      btn("🖨 Print this summary", "btn btn-teal", () => window.print()),
      btn("Start over", "btn btn-secondary", startOver)
    )
  );
}

function startOver() {
  Object.assign(State, {
    step: 0,
    phqAnswers: {},
    phqFlagged: false,
    selectedModule: null,
    valueRatings: {},
    topValues: [],
    patientName: "",
    leaning: ""
  });
  goTo(0);
}

/* ── SUPPORT PANEL ───────────────────────────────────────────────────── */
function toggleSupport() {
  const panel   = document.getElementById("support-panel");
  const overlay = document.getElementById("support-overlay");
  const hidden  = panel.hidden;
  panel.hidden   = !hidden;
  overlay.hidden = !hidden;
  if (!hidden) {
    // closing — return focus to button
    document.getElementById("support-btn").focus();
  }
}

/* ── INIT ────────────────────────────────────────────────────────────── */
goTo(0);
