/* ═══════════════════════════════════════════════════════════════════
   ReconstructDx — app.js  (Enhanced)
   No framework, no AI, no backend. Pure HTML/CSS/JS.
═══════════════════════════════════════════════════════════════════ */

/* ── STATE ──────────────────────────────────────────────────────────── */
const State = {
  step: 0,
  mode: "home",
  phqAnswers: {},
  phqFlagged: false,
  selectedModule: null,
  valueRatings: {},
  topValues: [],
  patientName: "",
  leaning: "",
  fontSize: "normal"
};

/* ── DOM REFS ────────────────────────────────────────────────────────── */
const app          = document.getElementById("app");
const progressNav  = document.getElementById("progress-nav");
const progressSteps= document.getElementById("progress-steps");
const progressFill = document.getElementById("progress-fill");

/* ── FONT SIZE ───────────────────────────────────────────────────────── */
function setFontSize(size) {
  State.fontSize = size;
  document.documentElement.classList.remove("fs-large","fs-xlarge");
  if (size === "large")  document.documentElement.classList.add("fs-large");
  if (size === "xlarge") document.documentElement.classList.add("fs-xlarge");
  document.querySelectorAll(".fs-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.size === size);
  });
}

/* ── GLOSSARY ────────────────────────────────────────────────────────── */
const GLOSSARY = {
  "mastectomy":          "Surgery to remove one or both breasts, usually to treat or prevent breast cancer.",
  "autologous":          "Using tissue from your own body — no implants or foreign materials.",
  "urethroplasty":       "Surgery to rebuild or repair the urethra (the tube that carries urine out of the body).",
  "urethra":             "The tube that carries urine from the bladder to the outside of the body.",
  "stricture":           "A narrowing inside the urethra caused by scar tissue that makes it hard to urinate.",
  "dilation":            "Gently stretching a narrowed area using a thin instrument.",
  "pessary":             "A soft, removable silicone device placed inside the vagina to support pelvic organs.",
  "prolapse":            "When pelvic organs (like the bladder, uterus, or rectum) slip down from their normal position.",
  "mesh":                "A synthetic material surgically placed to support or strengthen weakened tissue.",
  "expander":            "A temporary implant filled slowly with saline to stretch the skin before a permanent implant is placed.",
  "buccal mucosa":       "Tissue taken from the inside of the cheek — used to repair the urethra in some surgeries.",
  "flap":                "A piece of skin, fat, and sometimes muscle moved from one part of the body to another during reconstruction.",
  "DIEP flap":           "A type of breast reconstruction using skin and fat from the belly. No muscle is removed.",
  "implant":             "A surgically placed device (usually silicone or saline) used to restore shape after mastectomy.",
  "capsular contracture":"When scar tissue around a breast implant hardens and tightens, sometimes causing discomfort or a change in shape.",
  "revision":            "A follow-up surgery to improve or correct the results of a previous procedure.",
  "donor site":          "The part of the body where tissue is taken from to be used for reconstruction elsewhere.",
  "incontinence":        "Difficulty controlling the release of urine or stool.",
  "congenital":          "Present from birth — not caused by injury or disease later in life.",
  "dysphoria":           "A feeling of discomfort or distress, often related to a mismatch between one's gender identity and body.",
  "saline":              "Sterile salt water — used to fill some breast implants.",
  "silicone":            "A gel-like material used to fill some breast implants, designed to feel similar to natural tissue.",
  "catheter":            "A thin, flexible tube placed in the urethra to drain urine during recovery from surgery.",
  "anesthesia":          "Medication that prevents you from feeling pain during surgery. General anesthesia puts you fully to sleep.",
  "outpatient":          "A procedure where you go home the same day — no overnight hospital stay needed.",
};

function glossarize(text) {
  let result = text;
  Object.keys(GLOSSARY).sort((a,b) => b.length - a.length).forEach(term => {
    const regex = new RegExp(`\\b(${term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})(?![^<]*>)`, "gi");
    result = result.replace(regex, match =>
      `<span class="glossary-term" tabindex="0">${match}<span class="glossary-tip">${GLOSSARY[term]}</span></span>`
    );
  });
  return result;
}

/* ── ROUTER ─────────────────────────────────────────────────────────── */
function goTo(step) {
  State.step = step;
  State.mode = "tool";
  updateProgress();
  renderStep(step);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  State.mode = "home";
  progressNav.style.display = "none";
  renderHome();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showClinicians() {
  State.mode = "clinicians";
  progressNav.style.display = "none";
  renderClinicians();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateProgress() {
  const s = State.step;
  if (s === 0) { progressNav.style.display = "none"; return; }
  progressNav.style.display = "block";
  progressSteps.innerHTML = RDX.steps.map((label, i) =>
    `<span class="progress-step ${i < s ? "done" : i === s ? "active" : ""}">${label}</span>`
  ).join("");
  progressFill.style.width = Math.round((s / (RDX.steps.length - 1)) * 100) + "%";
}

function renderStep(step) {
  app.innerHTML = "";
  [renderWelcome,renderCheckin,renderModuleSelect,renderLearn,renderValues,renderCompare,renderSummary][step]?.();
}

/* ── HELPERS ─────────────────────────────────────────────────────────── */
function el(tag, attrs={}, ...children) {
  const e = document.createElement(tag);
  for (const [k,v] of Object.entries(attrs)) {
    if (v===null||v===undefined) continue;
    if (k==="class") e.className=v;
    else if (k==="html") e.innerHTML=v;
    else if (k.startsWith("on")) e.addEventListener(k.slice(2),v);
    else e.setAttribute(k,v);
  }
  for (const child of children) {
    if (child==null) continue;
    if (typeof child==="string") e.appendChild(document.createTextNode(child));
    else e.appendChild(child);
  }
  return e;
}

function div(cls,...children) { return el("div",{class:cls},...children); }
function p(txt,cls="")        { return el("p",{class:cls,html:txt}); }
function h1(txt)              { return el("h1",{class:"screen-title",html:txt}); }
function h2(txt)              { return el("h2",{class:"section-title",html:txt}); }
function h3(txt)              { return el("h3",{class:"section-sub",html:txt}); }
function eyebrow(txt)         { return el("p",{class:"screen-eyebrow"},txt); }
function btn(label,cls,onClick,attrs={}) {
  return el("button",{class:`btn ${cls}`,onclick:onClick,...attrs},label);
}

function screen(cls,...children) {
  app.innerHTML = "";
  const s = div(`screen ${cls}`,...children);
  app.appendChild(s);
  // Wire glossary tooltips
  s.querySelectorAll(".glossary-term").forEach(term => {
    term.addEventListener("click", e => {
      e.stopPropagation();
      const wasOpen = term.classList.contains("open");
      s.querySelectorAll(".glossary-term.open").forEach(t=>t.classList.remove("open"));
      if (!wasOpen) term.classList.add("open");
    });
    term.addEventListener("keydown", e => {
      if (e.key==="Enter"||e.key===" ") { e.preventDefault(); term.click(); }
    });
  });
  s.addEventListener("click", () => s.querySelectorAll(".glossary-term.open").forEach(t=>t.classList.remove("open")));
}

function feedbackBar() {
  const bar = div("feedback-bar");
  const label = el("span",{class:"feedback-label"},"Was this section clear?");
  const up = el("button",{class:"feedback-btn","aria-label":"Yes, this was clear"},"👍 Yes");
  const dn = el("button",{class:"feedback-btn","aria-label":"No, this was confusing"},"👎 Not quite");
  up.addEventListener("click",()=>{ bar.innerHTML=""; bar.appendChild(el("span",{class:"feedback-thanks"},"Thanks! That helps us improve. ✓")); });
  dn.addEventListener("click",()=>{ bar.innerHTML=""; bar.appendChild(el("span",{class:"feedback-thanks"},"Thanks — we'll work on making this clearer.")); });
  bar.append(label,up,dn);
  return bar;
}

function statCard(number,label,sub) {
  return div("stat-card",
    el("span",{class:"stat-number"},number),
    el("span",{class:"stat-label"},label),
    sub ? el("span",{class:"stat-sub"},sub) : null
  );
}

/* ══════════════════════════════════════════════════════════════════════
   HOME / LANDING PAGE
══════════════════════════════════════════════════════════════════════ */
function renderHome() {
  screen("home-screen",

    // HERO
    div("home-hero",
      div("home-hero-text",
        el("p",{class:"screen-eyebrow"},"NSU College of Allopathic Medicine · Medical Student Research"),
        el("h1",{class:"home-title"},"ReconstructDx"),
        el("p",{class:"home-tagline"},
          "Plain-language, interactive decision support for patients navigating reconstructive surgery — " +
          "built by medical students, grounded in evidence, centered on what patients say matters most."
        ),
        div("home-cta-row",
          btn("Start the tool →","btn btn-primary btn-lg",()=>goTo(0)),
          btn("For clinicians & researchers","btn btn-secondary",showClinicians)
        )
      ),
      div("home-hero-visual",
        div("hero-card-stack",
          div("hero-card hero-card-1",el("span",{class:"hero-card-icon"},"🩺"),el("span",{},"Plain-language options")),
          div("hero-card hero-card-2",el("span",{class:"hero-card-icon"},"💙"),el("span",{},"What matters to you")),
          div("hero-card hero-card-3",el("span",{class:"hero-card-icon"},"🖨️"),el("span",{},"Bring to your appointment"))
        )
      )
    ),

    // STATS
    div("stats-row",
      statCard(">10th","Grade reading level","Current patient education materials in reconstructive surgery"),
      statCard("0","Validated GU decision aids","In the published literature"),
      statCard("3","Student researchers","Dermatology · Plastics · Health Literacy"),
      statCard("~15 min","To complete","Full decision summary at the end")
    ),

    // HOW IT WORKS
    div("home-section",
      eyebrow("How it works"),
      el("h2",{class:"home-section-title"},"A better conversation starts here"),
      el("p",{class:"home-section-body"},
        "ReconstructDx walks you through your options in plain language, " +
        "helps you identify what matters most to you, and generates a personalized summary to bring to your surgical appointment."
      ),
      div("how-steps",
        howStep("1","Check in","A brief wellbeing screen ensures you have support before making big decisions."),
        howStep("2","Choose your topic","Select the reconstructive procedure you're learning about."),
        howStep("3","Learn your options","Plain language, 6th-grade reading level, with a built-in glossary for unfamiliar words."),
        howStep("4","Rate what matters","A structured values exercise — no right or wrong answers."),
        howStep("5","Compare options","Your priorities are highlighted in a side-by-side comparison."),
        howStep("6","Get your summary","A printable summary with your values, options, and questions to ask your surgeon.")
      )
    ),

    // MODULES
    div("home-section home-section-alt",
      eyebrow("Current modules"),
      el("h2",{class:"home-section-title"},"Available topics"),
      el("p",{class:"home-section-body"},
        "Each module is written to IPDAS standards and reviewed for clinical accuracy. More modules are in development."
      ),
      div("module-grid",
        ...RDX.modules.map(mod => {
          const card = div("module-card",
            el("span",{class:"module-icon"},mod.icon),
            el("h3",{},mod.title),
            el("p",{},mod.subtitle),
            div("module-tag",mod.project==="pediatric"?"Pediatric":"Adult")
          );
          card.addEventListener("click",()=>{ State.selectedModule=mod; goTo(0); });
          return card;
        })
      )
    ),

    // TEAM
    div("home-section",
      eyebrow("Research team"),
      el("h2",{class:"home-section-title"},"Built by medical students at NSU"),
      el("p",{class:"home-section-body"},
        "ReconstructDx is developed under faculty supervision and adheres to " +
        "IPDAS (International Patient Decision Aid Standards) criteria. " +
        "Each student brings a primary area of interest — and all three contribute across both projects."
      ),
      div("team-grid",
        teamCard("Lauren Brick","Health Literacy & AI","Plain language standards, readability pipeline, women's health equity","💡"),
        teamCard("Lauren Grubbs","Dermatology","Skin, scar, and dermatologic module content","🔬"),
        teamCard("Rocco English","Plastic & Reconstructive Surgery","Reconstructive and pediatric module content","🩹")
      ),
      div("team-note",
        p("Faculty Advisor: [Name, Department] · Nova Southeastern University · Dr. Kiran C. Patel COM")
      )
    ),

    // FOOTER CTA
    div("home-footer-cta",
      el("h2",{class:"home-section-title"},"Ready to explore your options?"),
      el("p",{class:"home-section-body"},"The tool takes about 15 minutes. You can stop and come back at any point."),
      div("home-cta-row",
        btn("Start the tool →","btn btn-primary btn-lg",()=>goTo(0)),
        btn("For clinicians →","btn btn-secondary",showClinicians)
      )
    )
  );
}

function howStep(num,title,desc) {
  return div("how-step",
    el("span",{class:"how-num"},num),
    div("how-text",el("strong",{},title),el("span",{},desc))
  );
}

function teamCard(name,role,focus,icon) {
  return div("team-card",
    el("span",{class:"team-icon"},icon),
    el("strong",{class:"team-name"},name),
    el("span",{class:"team-role"},role),
    el("span",{class:"team-focus"},focus)
  );
}

/* ══════════════════════════════════════════════════════════════════════
   FOR CLINICIANS PAGE
══════════════════════════════════════════════════════════════════════ */
function renderClinicians() {
  screen("clinicians-screen",
    div("clin-hero",
      eyebrow("For Clinicians & Researchers"),
      el("h1",{class:"screen-title"},"Partner with ReconstructDx"),
      el("p",{class:"screen-subtitle"},
        "We are actively seeking surgical partners in urology, plastic surgery, and pediatric reconstruction " +
        "to co-develop modules, provide expert review, and support usability testing. " +
        "Involvement is lightweight and includes co-authorship on peer-reviewed publications."
      ),
      div("btn-row",
        btn("← Back to home","btn btn-secondary",showHome),
        btn("Try the tool →","btn btn-primary",()=>goTo(0))
      )
    ),

    div("clin-section",
      h2("The gap we are addressing"),
      p("Reconstructive surgery patient education materials consistently test at 10th–12th grade reading level — " +
        "well above the 6th grade level recommended for patient communication. " +
        "No validated, interactive decision aids currently exist for genitourinary reconstruction (male or female) " +
        "or pediatric reconstructive surgery. ReconstructDx fills this gap with a modular, open-access platform " +
        "built to IPDAS standards.")
    ),

    div("clin-section",
      h2("Methodology"),
      div("clin-grid",
        clinCard("IPDAS Standards","All content developed to International Patient Decision Aid Standards — the gold standard for decision aid quality."),
        clinCard("Plain Language","All modules target ≤6th grade reading level, verified via Flesch-Kincaid, SMOG, and Fry readability indices."),
        clinCard("Validated Instruments","Domain structures drawn from BREAST-Q, BODY-Q, PPBC, RSES, PHQ-9/GAD-7, and SAGA — used as content frameworks and independent outcome measures."),
        clinCard("No AI in the patient tool","All patient-facing content is human-authored and clinician-reviewed. AI tools support content development only — never deployed to patients."),
        clinCard("WCAG 2.1 Accessible","Screen reader compatible, keyboard navigable, minimum 4.5:1 color contrast, mobile-first responsive design."),
        clinCard("Open Source","Platform code is publicly available on GitHub under CC BY-NC 4.0 — transparent, reproducible, and free to adapt.")
      )
    ),

    div("clin-section",
      h2("Two research projects"),
      div("project-cards",
        projectCard("Project 1","ReconstructDx Adult",
          "Genitourinary reconstruction for men and women",
          ["Female urologic reconstruction (prolapse, vulvar, fistula repair)","Male urologic reconstruction (stricture, Peyronie's, penile reconstruction)"],
          "Surgical partners: Female & Male Urologic Reconstructive Surgeons"
        ),
        projectCard("Project 2","ReconstructDx Pediatric",
          "Children, adolescents, and family decision-making",
          ["Adolescent scar revision","Staged reconstruction (microtia, cleft, burns)","Parallel parent/guardian decision aid track"],
          "Surgical partner: Pediatric Reconstructive Plastic Surgeon"
        )
      )
    ),

    div("clin-section",
      h2("What involvement looks like"),
      div("involve-steps",
        involveStep("🕐","~2 hours total","Two expert review sessions during content development using the IPDAS checklist as the structured review instrument"),
        involveStep("📋","IRB-exempt pathway","Usability study anticipated as exempt under 45 CFR 46.104(d)(2) — minimal burden on your practice or team"),
        involveStep("📄","Co-authorship","Named co-investigator with authorship on the module validation paper in your specialty journal"),
        involveStep("🆓","Free validated tool","An open-access decision aid for your patients at no cost — available permanently under CC BY-NC 4.0")
      )
    ),

    div("clin-section",
      h2("Publication targets"),
      div("comparison-wrap",
        el("table",{class:"comparison-table"},
          el("thead",{},el("tr",{},el("th",{},"Paper"),el("th",{},"Project"),el("th",{},"Target Journal"))),
          el("tbody",{},
            pubRow("Readability audit of GU patient education materials","Project 1","Journal of Urology"),
            pubRow("ReconstructDx Adult: development & usability validation","Project 1","Patient Education & Counseling"),
            pubRow("Gender differences in GU reconstructive decision priorities","Project 1","Journal of Sexual Medicine"),
            pubRow("Readability audit of pediatric reconstructive education","Project 2","Plastic & Reconstructive Surgery"),
            pubRow("ReconstructDx Pediatric: family & adolescent decision aid","Project 2","Journal of Pediatric Psychology"),
            pubRow("AI-assisted plain language pipeline for surgical decision aids","Both","JAMIA / JMIR"),
            pubRow("Modular decision aid architecture for reconstructive surgery","Both","Medical Decision Making")
          )
        )
      )
    ),

    div("clin-contact",
      el("h2",{class:"section-title"},"Get in touch"),
      p("If you are interested in becoming a surgical partner or expert reviewer, please contact the research team:"),
      p("📧 [research team email] · Nova Southeastern University, Dr. Kiran C. Patel COM"),
      div("btn-row",
        btn("← Back to home","btn btn-secondary",showHome),
        btn("Try the tool →","btn btn-primary",()=>goTo(0))
      )
    )
  );
}

function clinCard(title,body) {
  return div("clin-card",el("strong",{},title),el("span",{},body));
}
function projectCard(label,title,subtitle,bullets,footer) {
  return div("project-card",
    el("span",{class:"project-label"},label),
    el("h3",{class:"section-sub"},title),
    el("p",{class:"project-subtitle"},subtitle),
    el("ul",{},...bullets.map(b=>el("li",{},b))),
    el("p",{class:"project-footer"},footer)
  );
}
function involveStep(icon,title,body) {
  return div("involve-step",
    el("span",{class:"involve-icon"},icon),
    div("",el("strong",{},title),el("p",{},body))
  );
}
function pubRow(title,project,journal) {
  return el("tr",{},el("td",{},title),el("td",{},project),el("td",{},journal));
}

/* ══════════════════════════════════════════════════════════════════════
   TOOL SCREENS
══════════════════════════════════════════════════════════════════════ */

function renderWelcome() {
  screen("",
    div("welcome-hero",
      div("logo-mark-lg","Rx"),
      el("p",{class:"screen-eyebrow"},"Welcome"),
      h1("Let's think through your options"),
      el("p",{class:"screen-subtitle"},
        "This tool helps you prepare for a conversation with your surgeon. " +
        "It will take about 15 minutes. At the end, you'll get a personal summary to bring to your appointment."
      ),
      div("time-badge","⏱ About 15 minutes")
    ),
    div("welcome-features",
      featureCard("🔒","Private","Nothing you enter is stored or shared"),
      featureCard("📖","Plain language","6th-grade reading level with a built-in glossary"),
      featureCard("🖨️","Print-ready","Get a summary to bring to your appointment"),
      featureCard("🤝","Your choice","This tool informs — your doctor and you decide")
    ),
    div("card card-accent",
      p("This tool is for information and decision support only. It does not replace your surgeon's advice.")
    ),
    div("btn-row",
      btn("Get started →","btn btn-primary btn-lg btn-full",()=>goTo(1)),
      btn("← Back to home","btn btn-secondary btn-full",showHome)
    )
  );
}

function featureCard(icon,title,desc) {
  return div("welcome-feature",
    el("span",{class:"feat-icon"},icon),
    el("strong",{},title),
    el("span",{},desc)
  );
}

const PHQ_QUESTIONS = [
  "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
  "Over the last 2 weeks, how often have you had little interest or pleasure in doing things?",
  "Over the last 2 weeks, how often have you felt nervous, anxious, or on edge?",
  "Over the last 2 weeks, how often have you been unable to stop or control worrying?"
];
const PHQ_OPTIONS = ["Not at all","Several days","More than half the days","Nearly every day"];

function renderCheckin() {
  screen("",
    eyebrow("Step 1 of 5"),
    h1("A quick check-in"),
    el("p",{class:"screen-subtitle"},
      "Before we start, we want to make sure you have the support you need. " +
      "Medical decisions can be stressful. These 4 short questions help us point you to helpful resources if you need them."
    ),
    div("card card-accent",p("Your answers are not stored and will not be shared with anyone.")),
    ...PHQ_QUESTIONS.map((q,qi) => {
      const optEls = PHQ_OPTIONS.map((opt,oi) => {
        const isSelected = State.phqAnswers.hasOwnProperty(qi) && State.phqAnswers[qi]===oi;
        const optDiv = div("phq-opt"+(isSelected?" selected":""),opt);
        optDiv.addEventListener("click",()=>{ State.phqAnswers[qi]=oi; renderStep(1); });
        return optDiv;
      });
      return div("phq-question",el("label",{class:"field-label"},q),div("phq-options",...optEls));
    }),
    div("btn-row",
      btn("← Back","btn btn-secondary",()=>goTo(0)),
      btn("Continue →","btn btn-primary",submitCheckin,
        {disabled:Object.keys(State.phqAnswers).length<4?"":null})
    )
  );
}

function submitCheckin() {
  const phqScore=(State.phqAnswers[0]||0)+(State.phqAnswers[1]||0);
  const gadScore=(State.phqAnswers[2]||0)+(State.phqAnswers[3]||0);
  State.phqFlagged=(phqScore>=3||gadScore>=3);
  if (State.phqFlagged) {
    screen("",
      eyebrow("Before we continue"),
      h1("You're not alone in feeling this way"),
      el("p",{class:"screen-subtitle"},
        "Making medical decisions when you're feeling anxious or down is really hard. " +
        "Many people find it helpful to speak with a counselor alongside their surgical team."
      ),
      div("card",
        h3("Some resources that may help:"),
        el("ul",{class:"question-list"},
          el("li",{},"988 Suicide & Crisis Lifeline — call or text 988, available 24/7"),
          el("li",{},"Crisis Text Line — text HOME to 741741"),
          el("li",{},"Ask your surgeon's office about a referral to a counselor who works with surgical patients")
        )
      ),
      div("card card-accent",
        p("You can absolutely continue using this tool. This check-in just means we want to make sure you have full support.")
      ),
      div("btn-row",
        btn("← Back","btn btn-secondary",()=>goTo(1)),
        btn("Continue to tool →","btn btn-primary",()=>goTo(2))
      )
    );
  } else { goTo(2); }
}

function renderModuleSelect() {
  screen("",
    eyebrow("Step 2 of 5"),
    h1("What decision are you working through?"),
    el("p",{class:"screen-subtitle"},
      "Choose the topic that best fits your situation. Each section is written in plain language with a built-in glossary."
    ),
    div("module-grid",
      ...RDX.modules.map(mod => {
        const card = div("module-card"+(State.selectedModule?.id===mod.id?" selected":""),
          el("span",{class:"module-icon"},mod.icon),
          el("h3",{},mod.title),
          el("p",{},mod.subtitle),
          div("module-tag",mod.project==="pediatric"?"Pediatric":"Adult")
        );
        card.addEventListener("click",()=>{
          State.selectedModule=mod; State.valueRatings={}; State.topValues=[]; renderStep(2);
        });
        return card;
      })
    ),
    State.selectedModule ? div("card card-accent",
      p(`<strong>Selected:</strong> ${State.selectedModule.title} — ${State.selectedModule.subtitle}`)
    ) : null,
    div("btn-row",
      btn("← Back","btn btn-secondary",()=>goTo(1)),
      btn("Continue →","btn btn-primary",()=>goTo(3),{disabled:!State.selectedModule?"":null})
    )
  );
}

function renderLearn() {
  const mod = State.selectedModule;
  screen("",
    eyebrow("Step 3 of 5 — "+mod.title),
    h1("Understanding your options"),
    el("p",{class:"screen-subtitle"},
      "Read through your options below. Words with a dotted underline have a definition — tap or click them to see it."
    ),
    div("glossary-legend",
      el("span",{class:"glossary-legend-demo"},"Underlined words"),
      el("span",{}," have built-in plain-language definitions. Tap any underlined word to see it.")
    ),
    mod.note ? div("card card-accent",p(mod.note)) : null,
    ...mod.options.map(opt => optionCard(opt)),
    feedbackBar(),
    div("btn-row",
      btn("← Back","btn btn-secondary",()=>goTo(2)),
      btn("Continue: What matters to you →","btn btn-primary",()=>goTo(4))
    )
  );
}

function optionCard(opt) {
  return div("card option-card",
    div("option-card-header",
      el("h2",{class:"section-title"},opt.name),
      el("span",{class:"option-plain-label"},opt.plain)
    ),
    h3("How it works"),
    el("p",{class:"",html:glossarize(opt.howItWorks)}),
    h3("Recovery"),
    el("p",{class:"",html:glossarize(opt.recovery)}),
    div("option-columns",
      div("option-col",
        h3("Main benefits"),
        el("ul",{class:"check-list"},...opt.pros.map(pro=>el("li",{html:"✓ "+glossarize(pro)})))
      ),
      div("option-col",
        h3("Risks and things to know"),
        el("ul",{class:"risk-list"},
          ...opt.risks.filter(r=>r.label).map(r=>
            el("li",{html:glossarize(r.label)+(r.rate?`<span class="risk-rate"> — ${r.rate}</span>`:"")}))
        )
      )
    )
  );
}

function renderValues() {
  const mod     = State.selectedModule;
  const domains = mod.valueDomains.map(id=>({id,...RDX.valueDomains[id]}));
  const labels  = ["Not important","Slightly important","Somewhat important","Very important","Extremely important"];
  const answered = Object.keys(State.valueRatings).length;

  screen("",
    eyebrow("Step 4 of 5"),
    div("values-intro",
      el("h2",{},"What matters most to you?"),
      el("p",{},"Rate how important each of these is in making your decision. There are no right or wrong answers."),
      el("p",{class:"values-progress-text"},`${answered} of ${domains.length} answered`)
    ),
    ...domains.map(domain => {
      const current = State.valueRatings[domain.id];
      const rated   = current!==undefined;
      return div(`value-item${rated?" rated":""}`,
        div("value-item-header",
          el("span",{class:"value-item-icon"},domain.icon),
          div("value-item-text",
            el("strong",{},domain.label),
            el("span",{},domain.description)
          ),
          rated ? el("span",{class:"value-check"},"✓") : null
        ),
        div("rating-scale",
          ...labels.map((label,i)=>{
            const rb = el("button",{
              class:`rating-btn${current===i+1?` selected-${i+1}`:""}`,
              "aria-label":`${domain.label}: ${label}`
            },label);
            rb.addEventListener("click",()=>{ State.valueRatings[domain.id]=i+1; renderStep(4); });
            return rb;
          })
        )
      );
    }),
    feedbackBar(),
    div("btn-row",
      btn("← Back","btn btn-secondary",()=>goTo(3)),
      btn("Continue →","btn btn-primary",submitValues,
        {disabled:answered<domains.length?"":null})
    )
  );
}

function submitValues() {
  State.topValues = Object.entries(State.valueRatings)
    .sort((a,b)=>b[1]-a[1]).slice(0,3).map(([id])=>id);
  goTo(5);
}

function renderCompare() {
  const mod       = State.selectedModule;
  const crosswalk = RDX.crosswalk[mod.id]||{};
  const domains   = mod.valueDomains.map(id=>({id,...RDX.valueDomains[id]}));

  const rows = domains.map(domain => {
    const highlighted = State.topValues.includes(domain.id);
    return el("tr",{class:highlighted?"highlighted-row":""},
      el("td",{class:"row-label",html:
        domain.icon+" "+domain.label+(highlighted?`<span class="highlight-badge">Your priority</span>`:"")
      }),
      ...mod.options.map(opt=>el("td",{html:glossarize(crosswalk[domain.id]?.[opt.id]||"—")}))
    );
  });

  screen("",
    eyebrow("Step 5 of 5"),
    h1("Comparing your options"),
    el("p",{class:"screen-subtitle"},
      "Your top priorities are highlighted. See how each option relates to what matters most to you."
    ),
    div("card",
      h3("Your top priorities:"),
      div("",...State.topValues.map(id=>{
        const d=RDX.valueDomains[id];
        return el("span",{class:"value-pill"},d?d.icon+" "+d.label:id);
      }))
    ),
    div("comparison-wrap",
      el("table",{class:"comparison-table",role:"table"},
        el("thead",{},el("tr",{},el("th",{}),...mod.options.map(opt=>el("th",{},opt.name)))),
        el("tbody",{},...rows)
      )
    ),
    div("card card-accent",
      p("This comparison is based on published medical evidence. Your surgeon will know which options are right for your specific situation.")
    ),
    feedbackBar(),
    div("btn-row",
      btn("← Back","btn btn-secondary",()=>goTo(4)),
      btn("Create my summary →","btn btn-teal btn-lg",()=>goTo(6))
    )
  );
}

function renderSummary() {
  const mod   = State.selectedModule;
  const today = new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
  const ratingLabels = ["","Not important","Slightly important","Somewhat important","Very important","Extremely important"];

  screen("",
    div("summary-header",
      el("h1",{},"Your Decision Summary"),
      el("p",{},"Print or save this page to bring to your surgical consultation")
    ),
    div("summary-section",
      el("h3",{},"About this summary"),
      div("field",
        el("label",{class:"field-label",for:"patient-name"},"Your name (optional)"),
        el("input",{type:"text",id:"patient-name",class:"leaning-select",
          placeholder:"Enter your name",value:State.patientName,
          oninput:e=>{State.patientName=e.target.value;}})
      ),
      p(`<strong>Date:</strong> ${today}`),
      p(`<strong>Topic:</strong> ${mod.title} — ${mod.subtitle}`)
    ),
    div("summary-section",
      el("h3",{},"What matters most to you"),
      p("Your top 3 priorities:"),
      div("",...State.topValues.map((id,i)=>{
        const d=RDX.valueDomains[id];
        return d?el("span",{class:"value-pill"},`${i+1}. ${d.icon} ${d.label}`):null;
      }).filter(Boolean)),
      el("br"),
      p("All ratings:"),
      el("ul",{class:"question-list"},
        ...Object.entries(State.valueRatings).sort((a,b)=>b[1]-a[1]).map(([id,rating])=>{
          const d=RDX.valueDomains[id];
          return el("li",{},`${d?.icon||""} ${d?.label||id} — ${ratingLabels[rating]}`);
        })
      )
    ),
    div("summary-section",
      el("h3",{},"Your options at a glance"),
      ...mod.options.map(opt=>div("option-summary-block",
        el("h4",{class:"option-summary-title"},opt.name),
        el("p",{class:"option-summary-plain"},opt.plain),
        el("p",{},opt.howItWorks),
        el("p",{class:"option-summary-recovery"},"Recovery: "+opt.recovery)
      ))
    ),
    div("summary-section",
      el("h3",{},"I am leaning toward..."),
      p("You do not have to decide now. Noting where you are can help guide your conversation."),
      el("select",{class:"leaning-select",onchange:e=>{State.leaning=e.target.value;}},
        el("option",{value:""},"— Choose an option —"),
        ...mod.options.map(opt=>el("option",{value:opt.id,selected:State.leaning===opt.id?"":null},opt.name)),
        el("option",{value:"undecided"},"I am still deciding")
      )
    ),
    div("summary-section",
      el("h3",{},"Questions to ask your surgeon"),
      el("ul",{class:"question-list"},...mod.questions.map(q=>el("li",{},q)))
    ),
    div(State.phqFlagged?"summary-section card-warn":"summary-section",
      el("h3",{},"Support resources"),
      State.phqFlagged
        ? p("<strong>Based on your check-in, you may benefit from additional support.</strong> Many people find that talking with a counselor before a major medical decision is helpful.")
        : p("Making medical decisions can be stressful. Support is always available."),
      el("ul",{class:"question-list"},
        el("li",{},"988 Suicide & Crisis Lifeline — call or text 988, available 24/7"),
        el("li",{},"Crisis Text Line — text HOME to 741741"),
        el("li",{},"Ask your care team about a referral to a counselor who works with surgical patients")
      )
    ),
    div("card",
      p("<strong>This summary was created using ReconstructDx</strong>, a patient decision aid developed by medical student researchers at NSU College of Allopathic Medicine. For informational purposes only — all decisions should be made with your surgical team.")
    ),
    div("btn-row",
      btn("← Back","btn btn-secondary",()=>goTo(5)),
      btn("🖨 Print this summary","btn btn-teal",()=>window.print()),
      btn("Start over","btn btn-secondary",startOver)
    )
  );
}

function startOver() {
  Object.assign(State,{
    step:0,phqAnswers:{},phqFlagged:false,
    selectedModule:null,valueRatings:{},topValues:[],
    patientName:"",leaning:""
  });
  showHome();
}

function toggleSupport() {
  const panel=document.getElementById("support-panel");
  const overlay=document.getElementById("support-overlay");
  const hidden=panel.hidden;
  panel.hidden=!hidden; overlay.hidden=!hidden;
  if (!hidden) document.getElementById("support-btn").focus();
}

/* ── INIT ────────────────────────────────────────────────────────────── */
showHome();
