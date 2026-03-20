/* ═══════════════════════════════════════════════════════════════════
   DermDecide — app-aesthetics.js
   Aesthetic dermatology decision aid platform logic.
   No AI, no backend, no framework.
═══════════════════════════════════════════════════════════════════ */

/* ── STATE ──────────────────────────────────────────────────────────── */
const AState = {
  step: 0,
  mode: "home",
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
  AState.fontSize = size;
  document.documentElement.classList.remove("fs-large","fs-xlarge");
  if (size === "large")  document.documentElement.classList.add("fs-large");
  if (size === "xlarge") document.documentElement.classList.add("fs-xlarge");
  document.querySelectorAll(".fs-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.size === size)
  );
}

/* ── ROUTER ─────────────────────────────────────────────────────────── */
function goTo(step) {
  AState.step = step;
  AState.mode = "tool";
  updateProgress();
  renderStep(step);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  AState.mode = "home";
  progressNav.style.display = "none";
  renderHome();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateProgress() {
  const s = AState.step;
  if (s === 0) { progressNav.style.display = "none"; return; }
  progressNav.style.display = "block";
  progressSteps.innerHTML = "";
  AES.steps.forEach((label, i) => {
    const span = document.createElement("span");
    span.className = "progress-step " + (i < s ? "done" : i === s ? "active" : "");
    span.textContent = label;
    if (i < s && i > 0) {
      span.classList.add("clickable");
      span.setAttribute("role","button");
      span.setAttribute("tabindex","0");
      span.addEventListener("click", () => goTo(i));
      span.addEventListener("keydown", e => { if(e.key==="Enter"||e.key===" ") goTo(i); });
    }
    progressSteps.appendChild(span);
  });
  progressFill.style.width = Math.round((s / (AES.steps.length - 1)) * 100) + "%";
}

function renderStep(step) {
  app.innerHTML = "";
  const screens = [
    renderWelcome,
    renderConcernSelect,
    renderLearn,
    renderValues,
    renderCompare,
    renderSummary
  ];
  screens[step]?.();
}

/* ── HELPERS ─────────────────────────────────────────────────────────── */
function el(tag, attrs={}, ...children) {
  const e = document.createElement(tag);
  for (const [k,v] of Object.entries(attrs)) {
    if (v===null||v===undefined) continue;
    if (k==="class") e.className=v;
    else if (k==="html") e.innerHTML=v;
    else if (k.startsWith("on")) e.addEventListener(k.slice(2),v);
    else if (k==="disabled") { if(v!==false) e.disabled=!!v; }
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
function gap(n=120) { return el("div",{style:`height:${n}px`}); }

function screen(cls,...children) {
  app.innerHTML = "";
  const s = div(`screen ${cls}`,...children);
  app.appendChild(s);
}

function feedbackBar() {
  const bar = div("feedback-bar");
  const label = el("span",{class:"feedback-label"},"Was this section clear?");
  const up = el("button",{class:"feedback-btn","aria-label":"Yes"},"👍 Yes");
  const dn = el("button",{class:"feedback-btn","aria-label":"Not quite"},"👎 Not quite");
  up.addEventListener("click",()=>{ bar.innerHTML=""; bar.appendChild(el("span",{class:"feedback-thanks"},"Thanks! ✓")); });
  dn.addEventListener("click",()=>{ bar.innerHTML=""; bar.appendChild(el("span",{class:"feedback-thanks"},"Thanks — we'll work on this.")); });
  bar.append(label,up,dn);
  return bar;
}

function statCard(number,label,sub) {
  return div("stat-card",
    el("span",{class:"stat-number"},number),
    el("span",{class:"stat-label"},label),
    sub?el("span",{class:"stat-sub"},sub):null
  );
}

/* ══════════════════════════════════════════════════════════════════════
   HOME
══════════════════════════════════════════════════════════════════════ */
function renderHome() {
  screen("home-screen",
    div("home-hero",
      div("home-hero-text",
        el("p",{class:"screen-eyebrow"},"Aesthetic Dermatology Decision Support"),
        el("h1",{class:"home-title"},"DermDecide"),
        el("p",{class:"home-tagline"},
          "Clear, unbiased information to help you understand your aesthetic treatment options — " +
          "before your consultation. Know your choices, know what to expect, and know what questions to ask."
        ),
        div("home-cta-row",
          btn("Explore my options →","btn btn-primary btn-lg",()=>goTo(0)),
          btn("For providers","btn btn-secondary",()=>{
            document.getElementById("provider-section").scrollIntoView({behavior:"smooth"});
          })
        )
      ),
      div("home-hero-visual",
        div("hero-card-stack",
          div("hero-card hero-card-1",el("span",{class:"hero-card-icon"},"💉"),el("span",{},"Neurotoxins explained")),
          div("hero-card hero-card-2",el("span",{class:"hero-card-icon"},"🌿"),el("span",{},"Melasma treatment options")),
          div("hero-card hero-card-3",el("span",{class:"hero-card-icon"},"✨"),el("span",{},"Acne treatment pathway"))
        )
      )
    ),

    div("stats-row",
      statCard("3","Treatment guides","Built to IPDAS standards"),
      statCard("6th","Grade reading level","Plain language throughout"),
      statCard("0","Manufacturer bias","No sponsored content"),
      statCard("~10 min","To complete","Personal summary at the end")
    ),

    div("home-section",
      eyebrow("How it works"),
      el("h2",{class:"home-section-title"},"Make a more informed decision"),
      el("p",{class:"home-section-body"},
        "DermDecide helps you think through your aesthetic treatment options before you walk into a consultation. " +
        "It explains your choices in plain language, helps you identify what matters most to you, " +
        "and generates a summary you can bring to your appointment."
      ),
      div("how-steps",
        howStep("1","Choose your concern","Select the skin concern or treatment area you are researching."),
        howStep("2","Learn your options","Unbiased plain-language overviews of all relevant treatments — including realistic expectations and what does not work as advertised."),
        howStep("3","Rate what matters to you","A values exercise — speed, longevity, cost, safety — to identify your priorities."),
        howStep("4","See a personalized comparison","Your priorities highlighted in a side-by-side treatment comparison."),
        howStep("5","Get your summary","A printable summary with your values, your options, and questions to ask your provider.")
      )
    ),

    div("home-section home-section-alt",
      eyebrow("Current guides"),
      el("h2",{class:"home-section-title"},"What would you like to learn about?"),
      div("concern-grid",
        ...AES.modules.map(mod => {
          const card = div("concern-card",
            el("span",{class:"concern-icon"},mod.icon),
            el("h3",{},mod.concern),
            el("p",{},mod.subtitle)
          );
          card.addEventListener("click",()=>{ AState.selectedModule=mod; goTo(0); });
          return card;
        })
      )
    ),

    div("home-section",{id:"provider-section"},
      eyebrow("For dermatology providers"),
      el("h2",{class:"home-section-title"},"A pre-consultation decision support tool"),
      el("p",{class:"home-section-body"},
        "DermDecide is designed to complement your consultations — not replace them. " +
        "When patients arrive having already read clear, unbiased information about their options " +
        "and identified what matters most to them, consultations become more efficient, more values-aligned, " +
        "and more satisfying for both parties."
      ),
      div("clin-grid",
        clinCard("Plain language","All content written at a 6th-grade reading level and reviewed for clinical accuracy."),
        clinCard("No manufacturer bias","DermDecide is not sponsored by any device company or pharmaceutical brand."),
        clinCard("IPDAS-based methodology","Content developed to International Patient Decision Aid Standards."),
        clinCard("Open access","Free to share with patients. No login required."),
        clinCard("Realistic expectations","Every module explicitly addresses what treatments cannot do — reducing disappointment and building trust."),
        clinCard("Research partnership","Interested in usability research or clinical content collaboration? Contact the development team.")
      )
    ),

    div("home-footer-cta",
      el("h2",{class:"home-section-title"},"Ready to explore your options?"),
      el("p",{class:"home-section-body"},"Takes about 10 minutes. No account needed. Completely private."),
      div("home-cta-row",
        btn("Get started →","btn btn-primary btn-lg",()=>goTo(0)),
        btn("← ReconstructDx","btn btn-secondary",()=>{ window.location.href="../"; })
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
function clinCard(title,body) {
  return div("clin-card",el("strong",{},title),el("span",{},body));
}

/* ══════════════════════════════════════════════════════════════════════
   SCREEN 0: WELCOME / TOOL INTRO
══════════════════════════════════════════════════════════════════════ */
function renderWelcome() {
  screen("",
    div("welcome-hero",
      div("logo-mark-lg","Dx"),
      el("p",{class:"screen-eyebrow"},"Welcome to DermDecide"),
      h1("Let's explore your options"),
      el("p",{class:"screen-subtitle"},
        "This tool gives you clear, unbiased information about aesthetic dermatology treatments. " +
        "It takes about 10 minutes. At the end, you'll get a personal summary to bring to your consultation."
      ),
      div("time-badge","⏱ About 10 minutes")
    ),
    div("welcome-features",
      featureCard("🔒","Private","Nothing you enter is stored"),
      featureCard("📖","Plain language","No jargon — written clearly"),
      featureCard("⚖️","Unbiased","No brand sponsorship, no ads"),
      featureCard("🤝","Your choice","Your provider and you decide together")
    ),
    div("card card-accent",
      p("This tool is for education only. It does not replace a consultation with a board-certified dermatologist or licensed provider.")
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

/* ══════════════════════════════════════════════════════════════════════
   SCREEN 1: CONCERN SELECT
══════════════════════════════════════════════════════════════════════ */
function renderConcernSelect() {
  screen("",
    eyebrow("Step 1 of 5"),
    h1("What are you researching?"),
    el("p",{class:"screen-subtitle"},
      "Choose the concern or treatment area you want to learn about. Each guide covers all of your options in plain language."
    ),
    div("concern-grid",
      ...AES.modules.map(mod => {
        const card = div("concern-card"+(AState.selectedModule?.id===mod.id?" selected":""),
          el("span",{class:"concern-icon"},mod.icon),
          el("h3",{},mod.concern),
          el("p",{},mod.subtitle)
        );
        card.addEventListener("click",()=>{
          AState.selectedModule=mod;
          AState.valueRatings={};
          AState.topValues=[];
          renderStep(1);
        });
        return card;
      })
    ),
    AState.selectedModule ? div("card card-accent",
      p(`<strong>Selected:</strong> ${AState.selectedModule.concern} — ${AState.selectedModule.title}`)
    ) : null,
    div("btn-row",
      btn("← Back","btn btn-secondary",()=>goTo(0)),
      btn("Continue →","btn btn-primary",()=>goTo(2),
        {disabled:!AState.selectedModule?true:null})
    )
  );
}

/* ══════════════════════════════════════════════════════════════════════
   SCREEN 2: LEARN
══════════════════════════════════════════════════════════════════════ */
function renderLearn() {
  if (!AState.selectedModule) { goTo(1); return; }
  const mod = AState.selectedModule;

  screen("",
    eyebrow("Step 2 of 5 — " + mod.concern),
    h1(mod.title),
    el("p",{class:"screen-subtitle"},mod.tagline),

    // Expectation banner
    div("expectation-banner",
      el("span",{class:"expectation-icon"},"💡"),
      div("",
        el("h3",{},mod.expectation.title),
        el("p",{},mod.expectation.body)
      )
    ),

    // Myth busters
    div("myth-section",
      el("h3",{},"Common misconceptions — and what's actually true"),
      ...mod.myths.map(myth =>
        div("myth-item",
          div("",
            el("span",{class:"myth-x"},"✗"),
            el("span",{class:"myth-false"},myth.false)
          ),
          div("",
            el("span",{class:"myth-check"},"✓"),
            el("span",{class:"myth-true"},myth.true)
          )
        )
      )
    ),

    h2("Your options"),
    ...mod.options.map(opt => optionCard(opt)),

    feedbackBar(),
    div("btn-row",
      btn("← Back","btn btn-secondary",()=>goTo(1)),
      btn("Continue: What matters to you →","btn btn-primary",()=>goTo(3))
    )
  );
}

function optionCard(opt) {
  const maintClass = {low:"maint-low",medium:"maint-medium",high:"maint-high"}[opt.maintenance]||"maint-medium";
  return div("aes-option-card",
    div("aes-option-header",
      el("h2",{},opt.name),
      el("span",{class:"aes-option-tagline"},opt.tagline)
    ),
    div("aes-option-body",
      el("p",{},opt.howItWorks),
      div("aes-stats-row",
        opt.onset   ? div("aes-stat",el("span",{class:"aes-stat-value"},opt.onset),el("span",{class:"aes-stat-label"},"Onset")) : null,
        opt.duration? div("aes-stat",el("span",{class:"aes-stat-value"},opt.duration),el("span",{class:"aes-stat-label"},"Duration")) : null,
        div("aes-stat",el("span",{class:"aes-stat-value"},opt.maintenanceLabel),el("span",{class:"aes-stat-label"},"Maintenance"))
      ),
      opt.costNote ? div("cost-note",el("strong",{},"Cost: "),opt.costNote) : null,
      opt.skinToneNote ? div("skin-tone-notice",el("strong",{},"Skin tone note: "),opt.skinToneNote) : null,
      opt.realityCheck ? div("reality-check",
        el("span",{class:"reality-check-label"},"⚠ Reality check"),
        el("p",{},opt.realityCheck)
      ) : null
    )
  );
}

/* ══════════════════════════════════════════════════════════════════════
   SCREEN 3: VALUES
══════════════════════════════════════════════════════════════════════ */
function renderValues() {
  if (!AState.selectedModule) { goTo(1); return; }
  const mod     = AState.selectedModule;
  const domains = mod.valueDomains.map(id=>({id,...AES.valueDomains[id]})).filter(d=>d.label);
  const labels  = ["Not important","Slightly important","Somewhat important","Very important","Extremely important"];
  const answered = Object.keys(AState.valueRatings).length;

  screen("",
    eyebrow("Step 3 of 5"),
    div("values-intro",
      el("h2",{},"What matters most to you?"),
      el("p",{},"Rate how important each of these factors is in choosing your treatment. Your answers shape your personalized comparison."),
      el("p",{class:"values-progress-text"},`${answered} of ${domains.length} answered`)
    ),
    ...domains.map(domain => {
      const current = AState.valueRatings[domain.id];
      const rated   = current!==undefined;
      return div(`value-item${rated?" rated":""}`,
        div("value-item-header",
          el("span",{class:"value-item-icon"},domain.icon),
          div("value-item-text",
            el("strong",{},domain.label),
            el("span",{},domain.description)
          ),
          rated?el("span",{class:"value-check"},"✓"):null
        ),
        div("rating-scale",
          ...labels.map((label,i)=>{
            const rb=el("button",{
              class:`rating-btn${current===i+1?` selected-${i+1}`:""}`,
              "aria-label":`${domain.label}: ${label}`
            },label);
            rb.addEventListener("click",()=>{ AState.valueRatings[domain.id]=i+1; renderStep(3); });
            return rb;
          })
        )
      );
    }),
    feedbackBar(),
    div("btn-row",
      btn("← Back","btn btn-secondary",()=>goTo(2)),
      btn("Continue →","btn btn-primary",submitValues,
        {disabled:answered<domains.length?true:null})
    )
  );
}

function submitValues() {
  AState.topValues = Object.entries(AState.valueRatings)
    .sort((a,b)=>b[1]-a[1]).slice(0,3).map(([id])=>id);
  goTo(4);
}

/* ══════════════════════════════════════════════════════════════════════
   SCREEN 4: COMPARE
══════════════════════════════════════════════════════════════════════ */
function renderCompare() {
  if (!AState.selectedModule) { goTo(1); return; }
  if (!AState.topValues||AState.topValues.length===0) { goTo(3); return; }
  const mod       = AState.selectedModule;
  const crosswalk = AES.crosswalk[mod.id]||{};
  const domains   = mod.valueDomains.map(id=>({id,...AES.valueDomains[id]})).filter(d=>d.label);

  const rows = domains.map(domain => {
    const highlighted = AState.topValues.includes(domain.id);
    return el("tr",{class:highlighted?"highlighted-row":""},
      el("td",{class:"row-label",html:
        domain.icon+" "+domain.label+(highlighted?`<span class="highlight-badge">Your priority</span>`:"")
      }),
      ...mod.options.map(opt=>el("td",{},crosswalk[domain.id]?.[opt.id]||"—"))
    );
  });

  screen("",
    eyebrow("Step 4 of 5"),
    h1("Your personalized comparison"),
    el("p",{class:"screen-subtitle"},
      "Your top priorities are highlighted. See how each treatment aligns with what matters most to you."
    ),
    div("card",
      h3("Your top priorities:"),
      div("",...AState.topValues.map(id=>{
        const d=AES.valueDomains[id];
        return d?el("span",{class:"value-pill"},d.icon+" "+d.label):null;
      }).filter(Boolean))
    ),
    div("comparison-wrap",
      el("table",{class:"comparison-table",role:"table"},
        el("thead",{},el("tr",{},
          el("th",{},""),
          ...mod.options.map(opt=>el("th",{},opt.name))
        )),
        el("tbody",{},...rows)
      )
    ),
    div("card card-accent",
      p("This comparison is based on published clinical evidence and professional guidelines. Your provider will determine which option is most appropriate for your specific situation.")
    ),
    feedbackBar(),
    div("btn-row",
      btn("← Back","btn btn-secondary",()=>goTo(3)),
      btn("Create my summary →","btn btn-teal btn-lg",()=>goTo(5))
    )
  );
}

/* ══════════════════════════════════════════════════════════════════════
   SCREEN 5: SUMMARY
══════════════════════════════════════════════════════════════════════ */
function renderSummary() {
  if (!AState.selectedModule) { goTo(1); return; }
  const mod   = AState.selectedModule;
  const today = new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
  const ratingLabels = ["","Not important","Slightly important","Somewhat important","Very important","Extremely important"];
  const resources = mod.resources||[];

  screen("",
    div("summary-header",
      el("h1",{},"Your Consultation Summary"),
      el("p",{},"Print or save this to bring to your dermatology appointment")
    ),

    div("summary-section",
      el("h3",{},"About this summary"),
      div("field",
        el("label",{class:"field-label",for:"patient-name"},"Your name (optional)"),
        el("input",{type:"text",id:"patient-name",class:"leaning-select",
          placeholder:"Enter your name",value:AState.patientName,
          oninput:e=>{AState.patientName=e.target.value;}})
      ),
      p(`<strong>Date:</strong> ${today}`),
      p(`<strong>Topic:</strong> ${mod.concern} — ${mod.title}`)
    ),

    div("summary-section",
      el("h3",{},"What matters most to you"),
      p("Your top 3 priorities:"),
      div("",...AState.topValues.map((id,i)=>{
        const d=AES.valueDomains[id];
        return d?el("span",{class:"value-pill"},`${i+1}. ${d.icon} ${d.label}`):null;
      }).filter(Boolean)),
      Object.keys(AState.valueRatings).length>0 ? el("br") : null,
      Object.keys(AState.valueRatings).length>0 ? p("All ratings:") : null,
      Object.keys(AState.valueRatings).length>0 ? el("ul",{class:"question-list"},
        ...Object.entries(AState.valueRatings).sort((a,b)=>b[1]-a[1]).map(([id,rating])=>{
          const d=AES.valueDomains[id];
          return el("li",{},`${d?.icon||""} ${d?.label||id} — ${ratingLabels[rating]}`);
        })
      ) : null
    ),

    div("summary-section",
      el("h3",{},"The options you explored"),
      ...mod.options.map(opt=>div("option-summary-block",
        el("h4",{class:"option-summary-title"},opt.name),
        el("p",{class:"option-summary-plain"},opt.tagline),
        el("p",{},`Onset: ${opt.onset} · Duration: ${opt.duration}`)
      ))
    ),

    div("summary-section",
      el("h3",{},"I am leaning toward..."),
      p("You do not need to decide before your consultation. Noting where you are helps guide the conversation."),
      el("select",{class:"leaning-select",onchange:e=>{AState.leaning=e.target.value;}},
        el("option",{value:""},"— Choose an option —"),
        ...mod.options.map(opt=>el("option",{value:opt.id,selected:AState.leaning===opt.id?"":null},opt.name)),
        el("option",{value:"undecided"},"I am still exploring")
      )
    ),

    div("summary-section",
      el("h3",{},"Questions to ask your provider"),
      el("ul",{class:"question-list"},...mod.questions.map(q=>el("li",{},q)))
    ),

    resources.length>0 ? div("summary-section",
      el("h3",{},"Trusted resources"),
      el("p",{class:"resource-intro"},"These organizations provide reliable, evidence-based information about your treatment options."),
      div("resources-grid",...resources.map(r=>{
        const typeLabels={primary:{label:"📚 Learn more",cls:"res-primary"},support:{label:"🤝 Support",cls:"res-support"},findcare:{label:"🔍 Find a provider",cls:"res-findcare"}};
        const meta=typeLabels[r.type]||typeLabels.primary;
        return div("resource-card",
          div("resource-card-top",
            el("span",{class:"resource-type "+meta.cls},meta.label),
            el("strong",{class:"resource-org"},r.org)
          ),
          el("p",{class:"resource-desc"},r.desc),
          el("a",{class:"resource-link",href:r.url,target:"_blank",rel:"noopener noreferrer"},"Visit website →")
        );
      }))
    ) : null,

    div("card",
      p("<strong>This summary was created using DermDecide</strong>, a patient decision aid for aesthetic dermatology developed by medical student researchers. For educational purposes only — all treatment decisions should be made with a board-certified dermatologist or licensed provider.")
    ),

    div("btn-row",
      btn("← Back","btn btn-secondary",()=>goTo(4)),
      btn("🖨 Print this summary","btn btn-teal",()=>window.print()),
      btn("Start over","btn btn-secondary",startOver)
    )
  );
}

function startOver() {
  Object.assign(AState,{
    step:0,selectedModule:null,valueRatings:{},topValues:[],
    patientName:"",leaning:""
  });
  showHome();
}

/* ── SUPPORT PANEL ───────────────────────────────────────────────────── */
function toggleSupport() {
  const panel=document.getElementById("support-panel");
  const overlay=document.getElementById("support-overlay");
  const hidden=panel.hidden;
  panel.hidden=!hidden; overlay.hidden=!hidden;
  if (!hidden) document.getElementById("support-btn").focus();
}

/* ── INIT ────────────────────────────────────────────────────────────── */
showHome();
