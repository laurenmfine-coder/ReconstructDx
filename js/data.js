/* ═══════════════════════════════════════════════════════════════════
   ReconstructDx — data.js
   All clinical content, values domains, and crosswalk tables.
   Edit this file to update clinical content — no framework needed.
═══════════════════════════════════════════════════════════════════ */

const RDX = {

  /* ── MODULES ────────────────────────────────────────────────────── */
  modules: [
    {
      id: "breast",
      icon: "🎗️",
      title: "Breast Reconstruction",
      subtitle: "After mastectomy or lumpectomy",
      project: "adult",
      readingLevel: "6th grade",
      options: [
        {
          id: "implant",
          name: "Implant-based reconstruction",
          plain: "Using a silicone or saline implant",
          howItWorks: "A tissue expander is placed under the chest muscle after surgery. Over several weeks, it is slowly filled with saline to stretch the skin. When ready, the expander is replaced with a permanent implant in a second surgery.",
          recovery: "Most people return to light activity in 4–6 weeks. Full recovery after the second surgery takes another 4–6 weeks. You may have temporary drains.",
          pros: ["Usually shorter initial surgery", "No scars on other parts of your body", "Often two shorter surgeries rather than one long one"],
          risks: [
            { label: "Implant needs replacement", rate: "About 20 in 100 people need a new implant within 10 years" },
            { label: "Capsular contracture (scar tissue hardening)", rate: "About 10–15 in 100 people" },
            { label: "Infection requiring implant removal", rate: "About 5 in 100 people" }
          ]
        },
        {
          id: "autologous",
          name: "Your own tissue (flap reconstruction)",
          plain: "Using tissue from your own body",
          howItWorks: "Skin, fat, and sometimes muscle are moved from another part of your body — usually your belly (DIEP flap) or back (latissimus flap) — to rebuild the breast. This is done in one longer surgery.",
          recovery: "Hospital stay of 3–5 days. Return to light activity in 6–8 weeks. Full recovery takes 2–3 months. There will be a scar at the donor site.",
          pros: ["No implant — uses your own tissue", "Often looks and feels more natural over time", "Results tend to be more permanent"],
          risks: [
            { label: "Longer surgery and recovery", rate: "Surgery may take 4–8 hours" },
            { label: "Scar at donor site (belly or back)", rate: "Permanent, but usually hidden by clothing" },
            { label: "Partial tissue loss", rate: "About 5 in 100 people" }
          ]
        },
        {
          id: "none",
          name: "No reconstruction",
          plain: "Living flat after mastectomy",
          howItWorks: "Some people choose not to have reconstruction. The chest is flat after mastectomy. Prosthetic breast forms can be worn inside clothing if desired.",
          recovery: "The shortest recovery — no additional surgery needed. Many people return to full activity within 4–6 weeks of mastectomy alone.",
          pros: ["No additional surgeries", "No implant-related risks", "Some people feel more comfortable and at peace with this choice"],
          risks: [
            { label: "May affect how clothes fit", rate: "Individual — varies by body type and clothing preferences" },
            { label: "Some people feel unexpected grief", rate: "Counseling support is available and recommended" }
          ]
        }
      ],
      valueDomains: ["appearance", "symmetry", "implant", "recovery", "scars", "sensation", "sexual", "surgery_count", "identity"],
      questions: [
        "What reconstruction option do you most often recommend for someone in my situation, and why?",
        "What does the timing of reconstruction look like — can it happen at the same time as my mastectomy?",
        "If I choose implant reconstruction, what happens if I need radiation treatment?",
        "What will the scars look like, and where will they be?",
        "Can I change my mind later — for example, switch from implant to my own tissue, or choose not to reconstruct at all?"
      ]
    },
    {
      id: "prolapse",
      icon: "⚕️",
      title: "Pelvic Organ Prolapse",
      subtitle: "Surgical options for prolapse repair",
      project: "adult",
      readingLevel: "6th grade",
      options: [
        {
          id: "native",
          name: "Native tissue repair",
          plain: "Repairing with your own tissue",
          howItWorks: "The surgeon uses your own pelvic tissue to lift and support the prolapsed organ. No mesh is used. This is often done through the vagina (minimally invasive).",
          recovery: "Return to light activity in 2–4 weeks. Avoid heavy lifting for 6–8 weeks. Pelvic floor physical therapy is often recommended after.",
          pros: ["No permanent implant in your body", "Lower risk of mesh-related complications", "Shorter surgery time for some procedures"],
          risks: [
            { label: "Prolapse may return", rate: "About 30 in 100 people have some return of prolapse within 5 years" },
            { label: "Temporary urinary symptoms", rate: "Common in the first weeks — usually resolves" }
          ]
        },
        {
          id: "mesh",
          name: "Mesh-augmented repair",
          plain: "Using a supportive mesh implant",
          howItWorks: "A synthetic mesh is placed to support the pelvic organs. This is typically used for more severe prolapse or after a previous repair has not worked.",
          recovery: "Similar recovery to native tissue repair. Some additional restrictions around sexual activity during healing (usually 8–12 weeks).",
          pros: ["May have lower recurrence rate for severe prolapse", "Can provide stronger support for significant prolapse"],
          risks: [
            { label: "Mesh erosion through vaginal tissue", rate: "About 5–10 in 100 people" },
            { label: "Pelvic pain", rate: "About 5 in 100 people long-term" },
            { label: "Note: transvaginal mesh has specific FDA warnings — discuss carefully with your surgeon", rate: "" }
          ]
        },
        {
          id: "pessary",
          name: "Pessary (non-surgical option)",
          plain: "A removable device that supports the prolapse",
          howItWorks: "A pessary is a removable silicone device that sits inside the vagina and holds the prolapsed organ in place. It is fitted by your doctor and can be removed at home.",
          recovery: "No surgery — no recovery period. Requires regular follow-up visits to check fit. Some people use it temporarily while deciding about surgery.",
          pros: ["No surgery or anesthesia", "Reversible — can stop at any time", "Can use while trying to get pregnant or while not ready for surgery"],
          risks: [
            { label: "Requires regular maintenance and fitting checks", rate: "Typically every 3–6 months" },
            { label: "May not be effective for severe prolapse", rate: "Depends on the degree of prolapse" }
          ]
        }
      ],
      valueDomains: ["continence", "sexual", "recovery", "implant", "symptoms", "surgery_count", "activity", "identity"],
      questions: [
        "How severe is my prolapse, and does that affect which options are safest for me?",
        "What are the long-term recurrence rates for each option in people like me?",
        "How might each option affect my bladder and bowel function?",
        "How might each option affect sexual activity?",
        "Is a pessary a good option for me to try first before deciding about surgery?"
      ]
    },
    {
      id: "stricture",
      icon: "🔬",
      title: "Urethral Stricture",
      subtitle: "Surgical options for stricture repair",
      project: "adult",
      readingLevel: "6th grade",
      options: [
        {
          id: "dilation",
          name: "Dilation or urethrotomy",
          plain: "Stretching or cutting the scar tissue",
          howItWorks: "The narrowed area is stretched (dilation) or the scar tissue is cut open with a small instrument (urethrotomy). This is done through the urethra — no skin incision needed.",
          recovery: "Usually done as outpatient. A catheter is left in place for 1–5 days. Return to normal activity within 1–2 weeks.",
          pros: ["No skin incision", "Shorter procedure and recovery", "Can be repeated if needed"],
          risks: [
            { label: "High recurrence rate", rate: "50–80 in 100 people have recurrence within 2 years" },
            { label: "May need to learn self-catheterization to prevent recurrence", rate: "Common long-term management strategy" }
          ]
        },
        {
          id: "urethroplasty",
          name: "Urethroplasty",
          plain: "Surgical reconstruction of the urethra",
          howItWorks: "The scarred section of the urethra is either removed and reconnected (for short strictures) or rebuilt using a tissue graft — often from the inner cheek (buccal mucosa). This is a more involved surgery but has the highest long-term success rate.",
          recovery: "Hospital stay of 1–2 days. A catheter stays in place for 3–4 weeks. Return to light activity in 3–4 weeks, full activity in 6–8 weeks.",
          pros: ["Highest long-term cure rate (80–95 in 100 people success at 5 years)", "One surgery with the goal of permanent fix", "Avoids ongoing dilation or catheterization"],
          risks: [
            { label: "Longer surgery and recovery", rate: "Surgery takes 2–4 hours depending on length of stricture" },
            { label: "Small mouth scar if graft is used", rate: "Usually heals without noticeable scarring" },
            { label: "Temporary sexual side effects", rate: "Most resolve within 3–6 months" }
          ]
        }
      ],
      valueDomains: ["urinary", "sexual", "recovery", "surgery_count", "activity", "scars", "identity"],
      questions: [
        "How long is my stricture, and how does that affect which surgery is best for me?",
        "What is the recurrence rate for each option in someone with a stricture like mine?",
        "If I choose dilation first, does that make urethroplasty harder later?",
        "How might surgery affect my sexual function?",
        "What does long-term follow-up look like after each option?"
      ]
    },
    {
      id: "scar_adolescent",
      icon: "🩹",
      title: "Scar Revision",
      subtitle: "For adolescents and families",
      project: "pediatric",
      readingLevel: "5th grade",
      note: "This tool has two versions — one for the young person, and one for parents and guardians. You can switch between them at any time.",
      options: [
        {
          id: "conservative",
          name: "Wait and watch",
          plain: "Giving the scar more time to mature",
          howItWorks: "Most scars continue to improve on their own for up to 2 years after an injury or surgery. During this time, scar massage, silicone sheets, and sun protection can help. No surgery is needed right away.",
          recovery: "No recovery needed — no procedure. Requires patience and consistency with scar care at home.",
          pros: ["No surgery or anesthesia", "Scars often improve significantly with time alone", "Preserves all future options — surgery can still happen later"],
          risks: [
            { label: "Takes time — improvement may be slow", rate: "Most improvement happens in the first 12–18 months" },
            { label: "May not be enough for significant scarring", rate: "Depends on the scar type and location" }
          ]
        },
        {
          id: "laser",
          name: "Laser treatment",
          plain: "Using laser light to improve the scar",
          howItWorks: "Different types of lasers can reduce redness, flatten raised scars, or smooth texture. Multiple sessions are usually needed, spaced 4–8 weeks apart. Some can be done with numbing cream; others may need light sedation for younger patients.",
          recovery: "Mild redness and swelling for a few days after each session. Most young people return to school within 1–2 days.",
          pros: ["No surgical incision", "Can improve color, texture, and redness", "Can be combined with other treatments"],
          risks: [
            { label: "Multiple sessions needed", rate: "Usually 3–6 sessions for best results" },
            { label: "Temporary darkening of skin", rate: "More common in darker skin tones — discuss with your doctor" }
          ]
        },
        {
          id: "surgical",
          name: "Surgical scar revision",
          plain: "Removing or repositioning the scar",
          howItWorks: "The scar is surgically removed and the wound is closed in a way that makes a smaller, less noticeable scar. Sometimes the scar is repositioned along natural skin lines where it is harder to see. Done under general anesthesia.",
          recovery: "Return to school in 1–2 weeks. Avoid contact sports for 4–6 weeks. A new scar will form — it takes 6–12 months to fully mature.",
          pros: ["Can significantly improve scar appearance", "Repositioning can make scars much less visible", "One procedure with lasting results"],
          risks: [
            { label: "Creates a new scar", rate: "The goal is a less noticeable scar — not no scar" },
            { label: "General anesthesia required", rate: "Standard for this age group — your anesthesiologist will explain" }
          ]
        }
      ],
      valueDomains: ["appearance", "school", "sports", "peers", "recovery", "surgery_count", "identity", "scars"],
      questions: [
        "How much do you think this scar will continue to improve on its own?",
        "At what age would you recommend scar revision surgery, and why?",
        "How might treatment affect school and sports?",
        "What results can we realistically expect — what will the scar look like after treatment?",
        "Are there things we can do at home right now that will help?"
      ]
    }
  ],

  /* ── VALUES DOMAIN LIBRARY ──────────────────────────────────────── */
  valueDomains: {
    appearance: {
      icon: "🪞",
      label: "How my body looks",
      description: "Feeling comfortable with how this part of my body looks after treatment"
    },
    symmetry: {
      icon: "⚖️",
      label: "Symmetry and balance",
      description: "Having both sides of my body look similar to each other"
    },
    implant: {
      icon: "🚫",
      label: "Avoiding an implant",
      description: "Not having a permanent foreign object or device in my body"
    },
    recovery: {
      icon: "🗓️",
      label: "Shorter recovery time",
      description: "Getting back to my normal life and activities as quickly as possible"
    },
    scars: {
      icon: "🩺",
      label: "Minimizing visible scars",
      description: "Keeping scars as small or hidden as possible"
    },
    sensation: {
      icon: "✋",
      label: "Keeping sensation",
      description: "Preserving feeling and sensation in the area as much as possible"
    },
    sexual: {
      icon: "💙",
      label: "Sexual function and comfort",
      description: "Making sure treatment does not negatively affect my sexual wellbeing"
    },
    surgery_count: {
      icon: "🔢",
      label: "Fewer surgeries",
      description: "Having as few separate procedures or operations as possible"
    },
    identity: {
      icon: "🧭",
      label: "Feeling like myself",
      description: "Feeling whole and like myself after treatment — physically and emotionally"
    },
    continence: {
      icon: "💧",
      label: "Bladder and bowel control",
      description: "Maintaining control over urination and bowel function after treatment"
    },
    symptoms: {
      icon: "😌",
      label: "Relieving symptoms",
      description: "Reducing pain, pressure, or discomfort from my condition"
    },
    urinary: {
      icon: "💦",
      label: "Urinary flow and function",
      description: "Being able to urinate easily without pain, strain, or obstruction"
    },
    activity: {
      icon: "🏃",
      label: "Returning to physical activity",
      description: "Being able to exercise, lift, and be physically active after treatment"
    },
    school: {
      icon: "🎒",
      label: "Missing as little school as possible",
      description: "Getting back to school quickly and not falling behind"
    },
    sports: {
      icon: "⚽",
      label: "Getting back to sports and activities",
      description: "Returning to sports, dance, or other activities I care about"
    },
    peers: {
      icon: "👥",
      label: "How my peers see me",
      description: "Feeling confident around friends and not having to explain my scar"
    }
  },

  /* ── CROSSWALK TABLE ─────────────────────────────────────────────
     For each module, for each value domain, for each option:
     what plain-language note connects them?
     Format: crosswalk[moduleId][domainId][optionId] = "text"
  ─────────────────────────────────────────────────────────────────── */
  crosswalk: {
    breast: {
      appearance:    { implant: "Implants can provide a natural-looking result, especially with a skilled surgeon.", autologous: "Your own tissue tends to look and feel most natural over time.", none: "Going flat is a valid choice — many people feel confident and comfortable." },
      symmetry:      { implant: "Implants can be sized to match the other side.", autologous: "Your own tissue can be shaped to closely match the other breast.", none: "Prosthetic forms can be worn for symmetry under clothing." },
      implant:       { implant: "This option does use a permanent silicone or saline implant.", autologous: "This option uses no implant — only your own tissue.", none: "No implant needed." },
      recovery:      { implant: "Shorter individual surgeries, but two are needed. Most return to normal in 6–8 weeks total.", autologous: "One surgery, but longer and with a longer recovery — about 8–12 weeks.", none: "Fastest recovery — no additional surgery needed." },
      scars:         { implant: "Scars are limited to the mastectomy site. No scars elsewhere on your body.", autologous: "There will be scars at both the breast site and the donor site (belly or back).", none: "Scars are limited to the mastectomy site only." },
      sensation:     { implant: "Sensation in the reconstructed breast varies — some return, often partial.", autologous: "Some sensation may return over time, especially with nerve-preserving techniques.", none: "No additional effect on sensation." },
      sexual:        { implant: "Sexual wellbeing is individual — many people adapt well. Discuss concerns with your care team.", autologous: "Results that feel more natural may help some people feel more comfortable. Very individual.", none: "Some people feel more at ease with their body after going flat — very individual." },
      surgery_count: { implant: "Requires at least two surgeries — the expander, then the implant.", autologous: "Usually one surgery, though nipple reconstruction is optional later.", none: "No additional surgeries needed." },
      identity:      { implant: "Many people feel like themselves again with reconstruction. Very personal.", autologous: "Using your own tissue resonates deeply with some people — very individual.", none: "For some people, going flat feels authentic and freeing. There is no wrong answer." }
    },
    prolapse: {
      continence:    { native: "Most people see improvement in urinary symptoms after native tissue repair.", mesh: "Mesh repair can provide strong support — continence outcomes are similar to native tissue.", pessary: "A pessary can relieve prolapse symptoms including pressure on the bladder." },
      sexual:        { native: "Most people resume sexual activity within 8 weeks. Outcomes vary.", mesh: "Important to discuss — mesh can occasionally cause pain with sex. Ask your surgeon.", pessary: "A pessary can be removed for sexual activity if preferred." },
      recovery:      { native: "Return to light activity in 2–4 weeks. No heavy lifting for 6–8 weeks.", mesh: "Similar to native tissue. Some additional restrictions during healing.", pessary: "No recovery needed — no surgery." },
      implant:       { native: "No mesh or implant — uses only your own tissue.", mesh: "This option does use a permanent mesh implant.", pessary: "No surgery, no permanent implant — the pessary can be removed at any time." },
      symptoms:      { native: "Most people have significant relief from pressure and discomfort.", mesh: "Strong support may provide reliable symptom relief.", pessary: "Many people get good symptom relief from a well-fitted pessary." },
      surgery_count: { native: "One surgery. Revision is possible if prolapse recurs.", mesh: "One surgery. Mesh removal is a more complex surgery if ever needed.", pessary: "No surgery at all." },
      activity:      { native: "Avoid heavy lifting for 6–8 weeks, then usually return to full activity.", mesh: "Similar restrictions as native tissue repair.", pessary: "No restrictions — can stay physically active right away." },
      identity:      { native: "Many people feel relief and restored confidence after repair.", mesh: "Individual — some people are reassured by stronger structural support.", pessary: "For some, avoiding surgery is the right choice for their life right now." }
    },
    stricture: {
      urinary:       { dilation: "Can restore urinary flow quickly — but may need to be repeated.", urethroplasty: "Has the highest long-term success rate for restoring normal urinary flow." },
      sexual:        { dilation: "Usually no effect on sexual function.", urethroplasty: "Temporary effects are common — most resolve in 3–6 months." },
      recovery:      { dilation: "Fastest recovery — most return to normal activity within 1–2 weeks.", urethroplasty: "Longer recovery — full activity at 6–8 weeks. Catheter in place for 3–4 weeks." },
      surgery_count: { dilation: "May need to be repeated — some people have it multiple times over years.", urethroplasty: "The goal is one definitive surgery with a long-lasting result." },
      activity:      { dilation: "Return to normal activity quickly.", urethroplasty: "Avoid strenuous activity for 6–8 weeks." },
      scars:         { dilation: "No skin incision — no visible scar.", urethroplasty: "A small scar at the surgical site. If a graft is used, a small mouth scar that heals well." },
      identity:      { dilation: "A quick fix that allows normal urination — even if temporarily.", urethroplasty: "For many people, the permanent fix provides significant peace of mind." }
    },
    scar_adolescent: {
      appearance:    { conservative: "Time and scar care often produce significant improvement on their own.", laser: "Laser can improve color and texture — especially redness and raised areas.", surgical: "Surgery can significantly improve scar appearance, especially for wide or thick scars." },
      school:        { conservative: "No time away from school needed.", laser: "Usually 1–2 days away from school after each session.", surgical: "Typically 1–2 weeks away from school." },
      sports:        { conservative: "No restrictions on sports.", laser: "No restrictions, though sun protection on the treated area is important.", surgical: "No contact sports for 4–6 weeks after surgery." },
      peers:         { conservative: "Improvement happens gradually — you may not notice changes right away, but others often do.", laser: "Improvement in redness and texture can make scars much less noticeable to others.", surgical: "A well-healed revised scar may be significantly less visible in social situations." },
      recovery:      { conservative: "No recovery period needed.", laser: "Mild redness for a few days after each session.", surgical: "About 1–2 weeks of recovery." },
      surgery_count: { conservative: "No procedures needed right now.", laser: "Multiple sessions needed — usually 3–6 total.", surgical: "One surgical procedure. Laser can be added later if desired." },
      identity:      { conservative: "Some young people feel more confident over time as the scar naturally fades.", laser: "Many people feel better about their appearance after laser treatment.", surgical: "For some young people, revision surgery provides significant emotional relief." },
      scars:         { conservative: "The scar will not disappear, but may fade and flatten significantly.", laser: "Laser improves the look of the scar but does not remove it.", surgical: "A new, smaller scar replaces the original — the goal is less noticeable, not invisible." }
    }
  },

  /* ── STEP LABELS ────────────────────────────────────────────────── */
  steps: [
    "Welcome",
    "Check-in",
    "Choose Module",
    "Learn",
    "What Matters",
    "Compare Options",
    "Your Summary"
  ]
};
