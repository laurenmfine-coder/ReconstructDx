/* ═══════════════════════════════════════════════════════════════════
   DermDecide — data-aesthetics.js
   All clinical content for aesthetic dermatology decision modules.
   Plain language. 6th-grade reading level target.
   No AI in the patient-facing tool. No device manufacturer bias.
═══════════════════════════════════════════════════════════════════ */

const AES = {

  /* ── MODULES ────────────────────────────────────────────────────── */
  modules: [
    /* ─────────────────────────────────────────────────────────────
       MODULE 1: NEUROTOXINS
    ───────────────────────────────────────────────────────────── */
    {
      id: "neurotoxin",
      track: "aesthetic",
      icon: "💉",
      concern: "Lines and wrinkles",
      title: "Neurotoxin / Relaxant Injections",
      subtitle: "Botox, Dysport, Daxxify, Xeomin, Jeuveau",
      tagline: "Understanding your options for softening expression lines",
      expectation: {
        title: "What these treatments can and cannot do",
        body: "Neurotoxins relax the muscles that cause expression lines — like forehead lines, crow's feet, and frown lines between the brows. They work best on lines that appear when you move your face. They do not fill in lines that are present at rest, restore lost volume, or tighten loose skin. Results are temporary. No single brand is best for everyone — the right choice depends on what you want, how long you want it to last, and your budget."
      },
      myths: [
        { false: "Botox will make my face look frozen", true: "When injected correctly by a skilled provider, neurotoxins soften movement — not eliminate it. Natural-looking results are the goal and the standard." },
        { false: "All neurotoxins are the same", true: "They all use a similar protein to relax muscles, but they differ in how long results last, how quickly they work, and how they spread — which matters for different treatment areas." },
        { false: "Once you start, you have to keep going", true: "You can stop at any time. Your face will simply return to how it looked before treatment." },
        { false: "It is only for women and older patients", true: "Neurotoxins are used by all genders, and many people start in their 20s or 30s as a preventive approach." }
      ],
      options: [
        {
          id: "botox",
          name: "Botox® (onabotulinumtoxinA)",
          tagline: "The original — the most studied, most widely available",
          howItWorks: "Botox is injected in tiny amounts into specific muscles. It blocks the signal that tells the muscle to contract. Results usually appear in 3–5 days and are fully visible by 2 weeks. It has been FDA-approved since 2002 and has the longest safety record of any neurotoxin.",
          onset: "3–5 days",
          duration: "3–4 months",
          spreadProfile: "Moderate — versatile for most areas",
          maintenance: "medium",
          maintenanceLabel: "Every 3–4 months",
          costNote: "Generally the reference price point — ask your provider for current pricing. Not covered by insurance for cosmetic use.",
          realityCheck: "Results vary by the individual's muscle strength, metabolism, and anatomy. Some people metabolize it faster and need more frequent treatments.",
          skinToneNote: null
        },
        {
          id: "dysport",
          name: "Dysport® (abobotulinumtoxinA)",
          tagline: "Faster onset, wider spread — great for large areas",
          howItWorks: "Dysport works similarly to Botox but tends to diffuse slightly more from the injection point. This makes it well-suited for larger areas like the forehead. It typically shows results faster — sometimes within 1–2 days.",
          onset: "1–2 days",
          duration: "3–4 months",
          spreadProfile: "Wider spread — ideal for forehead, less precise areas",
          maintenance: "medium",
          maintenanceLabel: "Every 3–4 months",
          costNote: "Units are measured differently than Botox — a higher number of units does not mean more product. Pricing is comparable overall.",
          realityCheck: "Its wider spread is an advantage for some areas and a reason for caution near delicate areas like the eyes. Your provider will adjust accordingly.",
          skinToneNote: null
        },
        {
          id: "daxxify",
          name: "Daxxify® (daxibotulinumtoxinA)",
          tagline: "Longest lasting — fewer treatments per year",
          howItWorks: "Daxxify is the newest FDA-approved neurotoxin (2022). It uses a unique stabilizing peptide instead of human serum albumin, which helps it last longer. In clinical trials, most patients had results lasting 6 months, with some lasting up to 9 months.",
          onset: "3–5 days",
          duration: "6–9 months",
          spreadProfile: "Similar to Botox — precise injection profile",
          maintenance: "low",
          maintenanceLabel: "Every 6–9 months",
          costNote: "Higher cost per treatment than Botox or Dysport — but fewer treatments per year may make the annual cost comparable or lower for some patients.",
          realityCheck: "Newer product means less long-term real-world data than Botox. Clinical trials are strong, but some patients do not achieve the full 6-month duration.",
          skinToneNote: null
        },
        {
          id: "xeomin",
          name: "Xeomin® (incobotulinumtoxinA)",
          tagline: "Purified formula — no extra proteins",
          howItWorks: "Xeomin is a 'naked' neurotoxin — it contains only the active toxin without accessory proteins. This means it requires no refrigeration and some people find it is less likely to cause resistance over time with repeated use.",
          onset: "3–5 days",
          duration: "3–4 months",
          spreadProfile: "Precise — similar to Botox",
          maintenance: "medium",
          maintenanceLabel: "Every 3–4 months",
          costNote: "Comparable pricing to Botox. Often used as an alternative for patients who feel their results from Botox have diminished over time.",
          realityCheck: "A good option if you have had Botox for many years and wonder if your body has developed resistance — though true resistance is rare.",
          skinToneNote: null
        },
        {
          id: "jeuveau",
          name: "Jeuveau® (prabotulinumtoxinA)",
          tagline: "Modern formula — competitively priced",
          howItWorks: "Jeuveau is FDA-approved specifically for cosmetic use (not medical use like Botox). It was developed using modern manufacturing processes and has a strong safety profile in clinical trials. Results and duration are similar to Botox.",
          onset: "2–3 days",
          duration: "3–4 months",
          spreadProfile: "Similar to Botox",
          maintenance: "medium",
          maintenanceLabel: "Every 3–4 months",
          costNote: "Often available at competitive or promotional pricing — ask your provider. Same maintenance frequency as Botox.",
          realityCheck: "Less long-term data than Botox or Dysport due to its more recent approval (2019), but clinical trials are robust and real-world results are consistent.",
          skinToneNote: null
        }
      ],
      valueDomains: ["longevity", "natural_look", "onset_speed", "cost_annual", "maintenance_freq", "trust_data", "area_precision"],
      questions: [
        "Based on my anatomy and the areas I want treated, which neurotoxin do you recommend and why?",
        "What results are realistic for me — what will I notice, and what won't change?",
        "How often should I come back, and what happens if I wait longer than recommended?",
        "Is there any reason I might not respond as well to one brand over another?",
        "Can I try a different brand if I am not happy with my results from one?"
      ],
      resources: [
        { org: "American Academy of Dermatology (AAD)", desc: "Patient guide to botulinum toxin injections — what to expect, risks, and finding a qualified provider.", url: "https://www.aad.org/public/cosmetic/younger-looking/botulinum-toxin", type: "primary" },
        { org: "FDA — Botox Approval Information", desc: "Official FDA information on all approved neurotoxin products, including safety data and approved uses.", url: "https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/botox-botox-cosmetic-dysport-and-myobloc-information", type: "primary" },
        { org: "American Society for Dermatologic Surgery (ASDS)", desc: "Consumer guide to neurotoxin treatments — including what questions to ask and how to find a board-certified provider.", url: "https://www.asds.net/skin-experts/skin-treatments/botulinum-toxin", type: "findcare" }
      ]
    },

    /* ─────────────────────────────────────────────────────────────
       MODULE 2: MELASMA
    ───────────────────────────────────────────────────────────── */
    {
      id: "melasma",
      track: "aesthetic",
      icon: "🌿",
      concern: "Dark spots / uneven skin tone",
      title: "Melasma Treatment",
      subtitle: "Topical treatments, peels, laser, and combination approaches",
      tagline: "Understanding your options for managing pigmentation",
      expectation: {
        title: "What you need to know about melasma before choosing a treatment",
        body: "Melasma is a chronic condition — it can be managed and significantly improved, but it tends to come back, especially with sun exposure and hormonal changes. No treatment permanently cures it. The most important thing you can do, regardless of which treatment you choose, is consistent sun protection every single day. Without it, even the best treatment will fail. The goal is meaningful improvement, not perfection — and the right treatment for you depends on your skin tone, your triggers, and how much maintenance you are willing to do."
      },
      myths: [
        { false: "Laser is the best and fastest fix for melasma", true: "Laser can make melasma worse, especially in darker skin tones. It must be used very carefully, by an experienced provider, and only after topical treatments have been tried." },
        { false: "Sunscreen is only needed on sunny days", true: "Visible light and indoor light can trigger melasma. Broad-spectrum SPF 30+ with iron oxides, used every day indoors and outdoors, is non-negotiable." },
        { false: "Melasma will go away on its own after pregnancy", true: "For some people it fades; for many it persists. It is not predictable and should not be left untreated if it bothers you." },
        { false: "The same treatment works for everyone", true: "Melasma treatment must be tailored to your skin tone. What works for lighter skin can cause post-inflammatory hyperpigmentation in darker skin tones." }
      ],
      options: [
        {
          id: "topical",
          name: "Topical treatments",
          tagline: "First-line treatment — the foundation for everyone",
          howItWorks: "Prescription and over-the-counter creams and serums reduce the production of melanin (the pigment that causes dark spots). The most effective include hydroquinone (the most studied), tretinoin (a retinoid), azelaic acid, kojic acid, tranexamic acid, and combination formulas like tri-luma. Most people see meaningful improvement in 8–12 weeks with consistent use. These are always the starting point — and often the only treatment needed.",
          onset: "8–12 weeks",
          duration: "Ongoing with maintenance",
          spreadProfile: null,
          maintenance: "high",
          maintenanceLabel: "Daily use required",
          costNote: "Most affordable option. Prescription formulas may be covered by insurance in some cases. Over-the-counter options available at many price points.",
          realityCheck: "Results require patience and consistency. Stopping treatment usually leads to recurrence. Hydroquinone is not recommended for continuous use beyond 3–4 months without a break — your provider will guide cycling.",
          skinToneNote: "Safe across all skin tones when properly selected and monitored. Some ingredients (like kojic acid and azelaic acid) are particularly well-tolerated in darker skin tones."
        },
        {
          id: "chemical_peel",
          name: "Chemical peels",
          tagline: "Accelerates topical results — best combined with creams",
          howItWorks: "A chemical solution is applied to the skin to remove the outer layer where pigment has built up. Superficial peels (glycolic, mandelic, lactic acid) are safest and most commonly used for melasma. They are typically done in a series of 4–6 treatments, spaced 2–4 weeks apart. They work best when combined with at-home topical treatments.",
          onset: "4–6 treatments over 2–3 months",
          duration: "Maintenance peels every 2–3 months",
          spreadProfile: null,
          maintenance: "medium",
          maintenanceLabel: "Maintenance sessions every 2–3 months",
          costNote: "Cost varies by peel depth and provider. Series packages are often more economical than individual treatments.",
          realityCheck: "Deeper peels carry higher risk of post-inflammatory hyperpigmentation in darker skin tones and are generally avoided for melasma. Superficial peels are the appropriate choice.",
          skinToneNote: "Skin tone matters significantly. Mandelic and lactic acid peels are preferred for Fitzpatrick skin types IV–VI due to lower risk of PIH. Always discuss your skin tone with your provider before a peel."
        },
        {
          id: "tranexamic",
          name: "Tranexamic acid (oral or topical)",
          tagline: "Newer approach — effective and well-tolerated",
          howItWorks: "Tranexamic acid (TXA) is a medication that blocks a pathway involved in melanin production. It can be used as a topical cream or serum, or taken as a low-dose oral pill. Multiple studies show meaningful reduction in melasma with both forms. The oral form is not FDA-approved specifically for melasma but is used off-label.",
          onset: "8–12 weeks",
          duration: "Ongoing with maintenance",
          spreadProfile: null,
          maintenance: "medium",
          maintenanceLabel: "Daily use (topical) or as directed (oral)",
          costNote: "Topical TXA is increasingly available in both prescription and OTC forms. Oral TXA is prescription-only and varies in cost.",
          realityCheck: "Oral TXA has a small risk of blood clots — your provider will screen for risk factors before prescribing. Not appropriate for everyone. Topical TXA has a very favorable safety profile.",
          skinToneNote: "Well-studied and well-tolerated across all skin tones, including Fitzpatrick types IV–VI. Increasingly recommended as a first-line option."
        },
        {
          id: "laser_melasma",
          name: "Laser and light treatments",
          tagline: "Used selectively — requires an experienced provider",
          howItWorks: "Certain lasers (like PicoWay, Nd:YAG, and low-fluence Q-switched lasers) can target melanin in the skin. When used correctly by an experienced provider on appropriate candidates, they can provide faster improvement than topicals alone. However, laser for melasma is more complex than for other pigment concerns and requires careful patient selection.",
          onset: "Multiple sessions — improvement after each",
          duration: "Maintenance required; melasma will recur without sun protection",
          spreadProfile: null,
          maintenance: "medium",
          maintenanceLabel: "Series of treatments; maintenance sessions",
          costNote: "Higher cost than topical options. Multiple sessions typically required. Not covered by insurance.",
          realityCheck: "Laser can paradoxically worsen melasma if used incorrectly, or in the wrong candidate, or without rigorous sun protection afterward. It is not a standalone fix and works best in combination with topical therapy.",
          skinToneNote: "High-risk for post-inflammatory hyperpigmentation in darker skin tones (Fitzpatrick IV–VI). Requires a provider with specific expertise in treating skin of color. Low-fluence protocols are safer but results are more gradual."
        }
      ],
      valueDomains: ["improvement_speed", "maintenance_burden", "skin_tone_safety", "cost_overall", "long_term_control", "natural_approach", "pregnancy_safe"],
      questions: [
        "What is causing my melasma — hormonal, sun-related, or both — and does that affect which treatment is best for me?",
        "Given my skin tone, which treatments are safest and which should I avoid?",
        "What does a realistic treatment plan look like — how long, how many visits, and what do I do at home?",
        "If I am on hormonal birth control, does that affect my treatment or my chances of it working?",
        "What happens if I stop treatment — will my melasma come back, and how quickly?"
      ],
      resources: [
        { org: "American Academy of Dermatology (AAD) — Melasma", desc: "Comprehensive patient guide to melasma: causes, treatment, and the critical role of sun protection.", url: "https://www.aad.org/public/diseases/a-z/melasma-overview", type: "primary" },
        { org: "Skin of Color Society", desc: "Resources specifically focused on dermatologic care for patients with skin of color — including melasma treatment considerations.", url: "https://skinofcolorsociety.org/patient-education/", type: "primary" },
        { org: "AAD — Find a Dermatologist", desc: "Find a board-certified dermatologist with expertise in pigmentation disorders.", url: "https://www.aad.org/find-a-derm", type: "findcare" }
      ]
    },

    /* ─────────────────────────────────────────────────────────────
       MODULE 3: ACNE TREATMENT PATHWAY
    ───────────────────────────────────────────────────────────── */
    {
      id: "acne",
      track: "aesthetic",
      icon: "✨",
      concern: "Acne",
      title: "Acne Treatment Pathway",
      subtitle: "Topical, oral, hormonal, isotretinoin, and procedure-based options",
      tagline: "Understanding your options — from gentle to intensive",
      expectation: {
        title: "What to know before choosing an acne treatment",
        body: "Acne is a medical condition, not a hygiene problem, and it often requires treatment to clear. No single treatment works for everyone — the right approach depends on the type of acne you have (comedonal, inflammatory, cystic), your skin type, your hormonal picture, and what you have tried before. Some treatments take 8–12 weeks to show results. Improvement is not always linear — it sometimes gets worse before it gets better, especially with retinoids. This is normal and expected, not a sign of failure."
      },
      myths: [
        { false: "Acne is caused by dirty skin or not washing enough", true: "Acne is caused by oil production, bacteria, and inflammation inside the pore — not surface dirt. Over-washing can make it worse by irritating the skin barrier." },
        { false: "Isotretinoin (Accutane) is dangerous and should be a last resort only", true: "Isotretinoin is highly effective and is appropriate for moderate-to-severe acne that has not responded to other treatments. Its risks are real but manageable with proper monitoring. Many dermatologists now recommend it earlier to prevent scarring." },
        { false: "You have to outgrow acne — treatments don't really work", true: "Most people respond well to the right treatment. The challenge is finding the right match — which is exactly what this tool helps you think through." },
        { false: "Diet doesn't affect acne at all", true: "Research suggests high-glycemic foods and dairy may worsen acne in some people. Diet is not the whole picture but can be a contributing factor worth exploring." }
      ],
      options: [
        {
          id: "topical_acne",
          name: "Topical treatments",
          tagline: "Starting point for mild to moderate acne",
          howItWorks: "Applied directly to the skin, topical treatments target bacteria, unclog pores, and reduce inflammation. Common ingredients include benzoyl peroxide (kills bacteria), retinoids like tretinoin or adapalene (unclogs pores, prevents new acne), clindamycin (antibiotic), azelaic acid, and niacinamide. Most topicals are used once or twice daily. A combination of two or more ingredients is more effective than any single agent alone.",
          onset: "8–12 weeks for meaningful improvement",
          duration: "Long-term maintenance often needed",
          spreadProfile: null,
          maintenance: "high",
          maintenanceLabel: "Daily use required",
          costNote: "Many topicals are covered by insurance with a prescription. OTC options (benzoyl peroxide, adapalene 0.1%) are effective and inexpensive.",
          realityCheck: "Retinoids cause initial dryness, peeling, and sometimes a brief flare — this is expected and usually settles by weeks 4–6. Starting low and slow reduces irritation. Results require patience.",
          skinToneNote: "Retinoids must be introduced gradually in darker skin tones to avoid post-inflammatory hyperpigmentation. Azelaic acid is a gentler alternative that also addresses PIH."
        },
        {
          id: "oral_antibiotic",
          name: "Oral antibiotics",
          tagline: "Short-term boost for inflammatory acne",
          howItWorks: "Doxycycline and minocycline are the most commonly prescribed oral antibiotics for acne. They reduce the bacteria that contribute to inflammatory acne and have anti-inflammatory effects of their own. They are typically used for 3–6 months alongside topical treatments — not as a long-term standalone solution.",
          onset: "4–8 weeks",
          duration: "3–6 months, then taper off",
          spreadProfile: null,
          maintenance: "medium",
          maintenanceLabel: "Daily pill for 3–6 months",
          costNote: "Generic doxycycline is inexpensive and widely covered by insurance. Minocycline varies more in cost.",
          realityCheck: "Antibiotics should not be used indefinitely due to antibiotic resistance concerns. They work best as a bridge while topical treatments build up their effect. Acne often returns after stopping unless topicals are continued.",
          skinToneNote: null
        },
        {
          id: "hormonal",
          name: "Hormonal treatments",
          tagline: "Addresses the root cause in many women",
          howItWorks: "Hormonal acne — typically appearing on the jaw, chin, and neck — responds well to treatments that reduce androgen activity. Options include oral contraceptives (combined estrogen/progestin pills), spironolactone (a blood pressure medication used off-label for hormonal acne), and the newer FDA-approved clascoterone cream. These are for people assigned female at birth and address the hormonal triggers many topicals cannot reach.",
          onset: "3–6 months for full effect",
          duration: "Ongoing while taking the medication",
          spreadProfile: null,
          maintenance: "high",
          maintenanceLabel: "Daily pill or cream, long-term",
          costNote: "Spironolactone is inexpensive and generic. OCP costs vary. Clascoterone cream is newer and may have higher out-of-pocket cost. Many are insurance-covered.",
          realityCheck: "Hormonal treatments work best for people whose acne is driven by androgens — your dermatologist will assess whether this fits your pattern. Spironolactone requires blood pressure monitoring and is not appropriate for everyone.",
          skinToneNote: null
        },
        {
          id: "isotretinoin",
          name: "Isotretinoin (Accutane and generics)",
          tagline: "The most effective treatment for severe or persistent acne",
          howItWorks: "Isotretinoin is an oral vitamin A derivative that reduces oil gland size, decreases bacteria, reduces inflammation, and helps normalize skin cell turnover. It is the only treatment that can produce long-lasting — and sometimes permanent — remission of acne. A typical course lasts 4–6 months. It requires participation in the iPLEDGE program due to the serious risk of birth defects if taken during pregnancy.",
          onset: "Initial worsening common in weeks 1–4; improvement by months 2–3",
          duration: "4–6 month course; effects often last years",
          spreadProfile: null,
          maintenance: "low",
          maintenanceLabel: "One-time course — not a daily ongoing treatment",
          costNote: "Generic versions are available and often covered by insurance. The iPLEDGE monitoring program adds office visit requirements. Budget for more frequent dermatologist visits during treatment.",
          realityCheck: "Side effects include dry skin, lips, and eyes — these are expected and manageable with moisturizers. Rare but serious risks include mood changes and elevated liver enzymes, monitored with blood tests. It is highly teratogenic — effective birth control is mandatory. The iPLEDGE program exists to ensure safety.",
          skinToneNote: "Safe across all skin tones. Post-inflammatory hyperpigmentation from existing acne will continue to fade after the course — isotretinoin itself does not cause PIH."
        },
        {
          id: "procedures_acne",
          name: "In-office procedures",
          tagline: "Complements medication — not a replacement",
          howItWorks: "Dermatology procedures for acne include cortisone injections for individual cysts (rapid deflation in 24–48 hours), chemical peels (reduce comedones and surface bacteria), laser and light therapies (blue light, photodynamic therapy, near-infrared lasers), and extraction. These are best used alongside medication, not instead of it. They can provide faster results for specific lesions and help address acne scarring.",
          onset: "Cortisone injections: 24–48 hours. Peels/laser: series of treatments over months",
          duration: "Varies by procedure",
          spreadProfile: null,
          maintenance: "medium",
          maintenanceLabel: "Series of treatments; periodic maintenance",
          costNote: "Most procedures are cosmetic and not covered by insurance. Cortisone injections for individual cysts are often covered. Cost varies widely.",
          realityCheck: "No in-office procedure alone controls acne long-term. They are most valuable as add-ons to a medical regimen — particularly for scarring, stubborn cysts, or between medication adjustments.",
          skinToneNote: "Chemical peels and lasers for acne require careful selection in darker skin tones to avoid PIH. Discuss your Fitzpatrick skin type with your provider before any energy-based procedure."
        }
      ],
      valueDomains: ["clearing_speed", "permanence", "side_effect_tolerance", "pregnancy_acne", "cost_overall", "maintenance_burden", "scarring_prevention"],
      questions: [
        "What type of acne do I have, and which treatments are most likely to work for my specific pattern?",
        "Given my skin tone, which treatments should I approach with extra caution?",
        "Am I a candidate for isotretinoin, and if so, is now a good time to consider it?",
        "How do I know if my acne is hormonal, and does that change the recommended approach?",
        "What should I do about the dark spots left behind from past acne — and when should I address those?"
      ],
      resources: [
        { org: "American Academy of Dermatology (AAD) — Acne", desc: "Comprehensive patient guide to acne: types, treatment options, and how to get the best results from your treatment plan.", url: "https://www.aad.org/public/diseases/acne", type: "primary" },
        { org: "iPLEDGE Program (FDA)", desc: "Official information about the iPLEDGE safety program for isotretinoin — what it requires and how to enroll.", url: "https://www.ipledgeprogram.com", type: "primary" },
        { org: "Acne and Rosacea Society of Canada / Global Resource", desc: "Patient-focused educational content on acne causes, treatment, and the emotional impact of acne.", url: "https://www.acnesupport.org", type: "support" },
        { org: "Skin of Color Society", desc: "Resources on acne treatment in skin of color — including post-inflammatory hyperpigmentation management.", url: "https://skinofcolorsociety.org/patient-education/", type: "primary" }
      ]
    },

    /* ─────────────────────────────────────────────────────────────
       MODULE 4: PSORIASIS
    ───────────────────────────────────────────────────────────── */
    {
      id: "psoriasis", icon: "🔬", concern: "Psoriasis",
      title: "Psoriasis Treatment",
      subtitle: "Topical, phototherapy, biologics, and systemic options",
      tagline: "A treatment landscape that has completely changed",
      category: "condition",
      expectation: { title: "What you need to know about psoriasis treatment today", body: "Psoriasis is a lifelong immune-mediated condition — but it is one of the most treatable conditions in medicine right now. The arrival of biologic medications has transformed what is achievable: complete or near-complete skin clearance is now a realistic goal for most people, not just a hope. If you are still on older treatments and not clear, better options likely exist for you." },
      myths: [
        { false: "Psoriasis is just a skin condition", true: "Psoriasis is a systemic immune condition. Up to 30% of people develop psoriatic arthritis. Treating it well matters beyond the skin." },
        { false: "Biologics are dangerous last resorts", true: "Biologics have excellent long-term safety records and are now recommended earlier in treatment — often before older systemic medications." },
        { false: "Nothing really works long-term", true: "Many people on modern biologics achieve sustained complete clearance for years." },
        { false: "It only affects people with light skin", true: "Psoriasis affects all skin tones but is significantly underdiagnosed in darker skin where it may look violet or brown rather than red." }
      ],
      options: [
        { id: "topical_pso", name: "Topical treatments", tagline: "First step for mild psoriasis", howItWorks: "Topical corticosteroids, vitamin D analogues, and newer non-steroidal options like tapinarof cream (Vtama, FDA-approved 2023) reduce inflammation and slow skin cell turnover. Foundation of treatment for mild psoriasis and used alongside other treatments for moderate-to-severe disease.", onset: "2–4 weeks", duration: "Ongoing as needed", maintenance: "high", maintenanceLabel: "Daily application", costNote: "Generic corticosteroids are inexpensive. Newer non-steroidal options may have higher copays. Most covered by insurance.", realityCheck: "Topical steroids lose effectiveness if used continuously — cycling is needed. Cannot be used long-term on the face without risk of skin thinning.", skinToneNote: "Steroid-induced skin lightening is more noticeable in darker skin tones. Non-steroidal options preferred for sensitive or darker skin areas." },
        { id: "phototherapy", name: "Phototherapy (light therapy)", tagline: "Highly effective — requires regular office visits", howItWorks: "Narrowband UVB light slows rapid skin cell growth. Given 2–3 times per week in a dermatologist's office or with a home unit. One of the safest and most effective treatments available.", onset: "4–8 weeks of sessions", duration: "Ongoing maintenance sessions", maintenance: "high", maintenanceLabel: "2–3 sessions per week", costNote: "Usually covered by insurance. Home units available but require upfront cost.", realityCheck: "Commitment to 2–3 weekly visits is a real barrier. Home devices address this. Not ideal for face or scalp.", skinToneNote: "Equally effective across all skin tones." },
        { id: "biologic", name: "Biologic medications", tagline: "The most effective treatments available", howItWorks: "Biologics target specific immune pathways. IL-17 inhibitors (secukinumab, ixekizumab) and IL-23 inhibitors (risankizumab, guselkumab) produce complete or near-complete clearance in 70–90% of patients. Most are self-injected every 2–12 weeks.", onset: "4–16 weeks", duration: "Ongoing — most continue indefinitely", maintenance: "low", maintenanceLabel: "Every 2–12 weeks", costNote: "High list price but manufacturer copay programs cover most commercially insured patients. Biosimilars are reducing costs.", realityCheck: "Require regular injections and monitoring. Slightly increase infection risk. Live vaccines should be avoided.", skinToneNote: null },
        { id: "systemic_pso", name: "Traditional systemic medications", tagline: "Oral options — methotrexate, cyclosporine, apremilast", howItWorks: "Methotrexate (weekly), cyclosporine, and apremilast (Otezla, daily) reduce immune activity. Used when topicals fail and before or instead of biologics.", onset: "4–12 weeks", duration: "Ongoing", maintenance: "high", maintenanceLabel: "Daily or weekly oral medication", costNote: "Methotrexate is very inexpensive. Apremilast is covered by most insurance. Cyclosporine is for short-term use only.", realityCheck: "Methotrexate requires regular blood tests. Cyclosporine not for long-term use. Apremilast has fewer monitoring requirements but may cause initial nausea.", skinToneNote: null }
      ],
      valueDomains: ["clearance_goal","injection_ok","office_visits","side_effect_tolerance","cost_overall","long_term_safety","speed_psoriasis"],
      questions: ["What percentage of my body is affected, and does that change which treatment is right for me?","Do I have signs of psoriatic arthritis that should factor into the treatment choice?","Am I a candidate for a biologic, and if so, which class do you recommend?","What monitoring will I need with each treatment option?","Are there biosimilars or patient assistance programs to reduce my costs?"],
      resources: [
        { org: "National Psoriasis Foundation", desc: "Leading patient organization — treatment guides, clinical trial finder, and peer support.", url: "https://www.psoriasis.org", type: "primary" },
        { org: "AAD — Psoriasis", desc: "Evidence-based patient guide to all psoriasis treatment options.", url: "https://www.aad.org/public/diseases/psoriasis", type: "primary" },
        { org: "NPF Treatment Access", desc: "Help navigating insurance and patient assistance programs for biologic medications.", url: "https://www.psoriasis.org/treatment-access/", type: "insurance" }
      ]
    },

    /* ─────────────────────────────────────────────────────────────
       MODULE 5: ATOPIC DERMATITIS
    ───────────────────────────────────────────────────────────── */
    {
      id: "eczema", icon: "🌿", concern: "Eczema / Atopic dermatitis",
      title: "Eczema Treatment Pathway",
      subtitle: "Topical, biologic, JAK inhibitor, and systemic options",
      tagline: "A condition that finally has the treatments it deserves",
      category: "condition",
      expectation: { title: "What has changed about eczema treatment", body: "For decades eczema treatment was limited to moisturizers and topical steroids. Since 2017 that has changed dramatically. Dupilumab (Dupixent) was the first biologic approved for eczema and produces dramatic improvement in most patients. JAK inhibitors have since been approved. If you have been struggling with eczema and have not heard about these options, you deserve to know they exist." },
      myths: [
        { false: "Eczema is just dry skin — moisturize more", true: "Atopic dermatitis is an immune-mediated inflammatory condition. Moisturizers help but do not address the underlying immune dysfunction." },
        { false: "Topical steroids are the only real treatment", true: "Non-steroidal options now exist — including calcineurin inhibitors, crisaborole, ruxolitinib cream, and tapinarof — that avoid steroid side effects entirely." },
        { false: "Biologics are too risky for eczema", true: "Dupilumab has one of the best long-term safety records of any biologic in dermatology — it targets only specific pathways, not the whole immune system." },
        { false: "Children just outgrow it", true: "Moderate-to-severe eczema causes significant suffering and sleep disruption. Effective treatment improves quality of life while awaiting natural resolution." }
      ],
      options: [
        { id: "topical_eczema", name: "Topical treatments", tagline: "Foundation for all eczema", howItWorks: "Topical corticosteroids for flares. Non-steroidal options include tacrolimus and pimecrolimus for sensitive areas, crisaborole for mild-to-moderate, ruxolitinib cream (Opzelura), and tapinarof. Daily ceramide-based moisturizer is essential for everyone.", onset: "Days to weeks", duration: "Ongoing as needed", maintenance: "high", maintenanceLabel: "Daily moisturizer plus topical as needed", costNote: "Generic corticosteroids are inexpensive. Newer non-steroidal topicals vary — some have patient assistance programs.", realityCheck: "Topical steroids should not be used continuously on the same area — they cause skin thinning. Calcineurin inhibitors carry a theoretical cancer warning that most dermatologists consider overstated.", skinToneNote: "Eczema may appear gray, brown, or purple in darker skin tones rather than red. Ensure your provider is experienced with eczema in skin of color." },
        { id: "dupilumab", name: "Dupilumab (Dupixent)", tagline: "The biologic that changed eczema treatment", howItWorks: "Injectable biologic blocking IL-4 and IL-13. Self-injected every 2 weeks (every 4 weeks for some). Approved for adults and children as young as 6 months. Also treats comorbid asthma and nasal polyps.", onset: "2–4 weeks for itch; full skin improvement 4–16 weeks", duration: "Ongoing", maintenance: "low", maintenanceLabel: "Every 2 weeks injection", costNote: "High list price but manufacturer copay card covers most commercially insured patients.", realityCheck: "Most common side effect is conjunctivitis (eye irritation) in ~10% — manageable with eye drops. Not associated with increased infection risk.", skinToneNote: null },
        { id: "jak_eczema", name: "JAK inhibitors (oral)", tagline: "Faster onset, taken as a daily pill", howItWorks: "Upadacitinib (Rinvoq) and abrocitinib (Cibinqo) are FDA-approved oral JAK inhibitors. Faster than dupilumab and produce high clearance rates. Daily pill with more monitoring requirements.", onset: "1–2 weeks — among the fastest", duration: "Ongoing daily", maintenance: "high", maintenanceLabel: "Daily pill", costNote: "Expensive. Manufacturer copay programs available. More lab monitoring required.", realityCheck: "FDA black box warning for serious infections, blood clots, and cardiovascular events — derived from older JAK inhibitors in rheumatoid arthritis patients. Your dermatologist will assess your risk.", skinToneNote: null },
        { id: "systemic_eczema", name: "Traditional systemic medications", tagline: "Older oral options — cyclosporine, methotrexate, mycophenolate", howItWorks: "Broad immune-suppressing medications used before biologics were available. Cyclosporine works quickly but is only for short-term use. Now generally considered when biologics are not accessible.", onset: "4–12 weeks", duration: "Varies — cyclosporine short-term only", maintenance: "high", maintenanceLabel: "Daily or weekly with lab monitoring", costNote: "Very inexpensive medications. Require regular lab tests.", realityCheck: "Suppress the whole immune system — more broadly than dupilumab. Cyclosporine not suitable long-term due to kidney effects.", skinToneNote: null }
      ],
      valueDomains: ["itch_relief","clearance_goal","injection_ok","speed_eczema","side_effect_tolerance","cost_overall","children_safe"],
      questions: ["How severe is my eczema, and am I a candidate for a biologic or JAK inhibitor?","What is the difference between dupilumab and the oral JAK inhibitors — which is right for me?","I have tried topical steroids for years without control — what is the next step?","Does my eczema affect my eyes, asthma, or nasal polyps — could dupilumab treat more than one condition?","Are there patient assistance programs to help with the cost of newer treatments?"],
      resources: [
        { org: "National Eczema Association", desc: "Patient resources, treatment guides, and community support for atopic dermatitis.", url: "https://nationaleczema.org", type: "primary" },
        { org: "AAD — Atopic Dermatitis", desc: "Evidence-based patient information on eczema causes, triggers, and all treatment options.", url: "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis", type: "primary" },
        { org: "Dupixent MyWay Patient Support", desc: "Copay assistance, injection training, and nurse support for dupilumab.", url: "https://www.dupixent.com/support-and-savings", type: "insurance" }
      ]
    },

    /* ─────────────────────────────────────────────────────────────
       MODULE 6: CHRONIC HIVES
    ───────────────────────────────────────────────────────────── */
    {
      id: "hives", icon: "🌊", concern: "Chronic hives",
      title: "Chronic Hives (Urticaria)",
      subtitle: "Antihistamines, omalizumab, and newer biologic options",
      tagline: "Better treatments exist — most people don't know yet",
      category: "condition",
      expectation: { title: "What chronic hives actually is", body: "Chronic spontaneous urticaria (CSU) means hives appearing most days for more than 6 weeks with no identifiable trigger. It is an autoimmune condition — not an allergy you can avoid. It affects quality of life as severely as psoriasis. Most people are managed on antihistamines, but many are not adequately controlled. Omalizumab (Xolair) is FDA-approved for CSU and dramatically improves most patients who don't respond to antihistamines." },
      myths: [
        { false: "Chronic hives must be caused by an allergy", true: "In most cases of chronic spontaneous urticaria, no external trigger is found. It is driven by immune misfiring — not food, environment, or contact allergy." },
        { false: "I just need more antihistamines", true: "Up to 4x the standard dose is the recommended second step. But if that does not work, omalizumab is appropriate — and highly effective." },
        { false: "I have to live with this", true: "Omalizumab produces complete control in about 50% of patients and significant improvement in another 30%. Most people do not know this exists." },
        { false: "Chronic hives will last forever", true: "CSU typically resolves on its own over 1–5 years. Treatment manages symptoms during this period." }
      ],
      options: [
        { id: "antihistamine", name: "Antihistamines (standard and high-dose)", tagline: "First-line treatment", howItWorks: "Non-sedating antihistamines taken daily — not just when hives appear. If standard dose does not work, guidelines recommend up to 4x the standard dose before moving on. This is safe and often more effective.", onset: "Days", duration: "Daily ongoing", maintenance: "high", maintenanceLabel: "Daily pill", costNote: "Very inexpensive — available OTC. High-dose approach uses larger quantities but still affordable.", realityCheck: "If you are on standard-dose antihistamines and still have frequent hives, ask about high-dose before giving up on this class.", skinToneNote: null },
        { id: "omalizumab", name: "Omalizumab (Xolair)", tagline: "The biologic most CSU patients have never heard of", howItWorks: "Injectable biologic given once monthly in a medical office. Targets IgE — a key driver of urticarial reactions. About 50% of patients become completely hive-free; another 30% have significant reduction.", onset: "1–3 months", duration: "Ongoing monthly injections", maintenance: "medium", maintenanceLabel: "Monthly office injection", costNote: "Expensive — manufacturer Genentech Access Solutions covers most commercially insured patients.", realityCheck: "Requires monthly office visits and 30-minute observation due to rare anaphylaxis risk. Hives often return when stopping — try stopping every 6–12 months.", skinToneNote: null },
        { id: "biologic_hives", name: "Newer biologics (dupilumab)", tagline: "Emerging option for difficult cases", howItWorks: "Dupilumab (Dupixent) received FDA approval for CSU in 2024. Shown strong results in clinical trials, particularly for patients not fully responding to omalizumab.", onset: "4–12 weeks", duration: "Ongoing", maintenance: "low", maintenanceLabel: "Every 2–4 weeks self-injection", costNote: "Similar cost and copay assistance as dupilumab for eczema.", realityCheck: "Ask your dermatologist or allergist if you are not responding to omalizumab.", skinToneNote: null },
        { id: "immunosuppressant_hives", name: "Immunosuppressants (cyclosporine, others)", tagline: "Reserved for severe refractory cases", howItWorks: "Cyclosporine, mycophenolate, and hydroxychloroquine are used off-label when antihistamines and biologics have not worked. Broadly suppress immune activity and require monitoring.", onset: "4–8 weeks", duration: "Short-to-medium term", maintenance: "high", maintenanceLabel: "Daily oral with lab monitoring", costNote: "Inexpensive medications — monitoring adds cost.", realityCheck: "Higher side effect burden than omalizumab. Cyclosporine only suitable short-term.", skinToneNote: null }
      ],
      valueDomains: ["symptom_control","office_visits","injection_ok","cost_overall","speed_hives","side_effect_tolerance","remission_goal"],
      questions: ["Am I on the maximum recommended dose of antihistamines, or would going higher help first?","Am I a candidate for omalizumab, and what does prior authorization look like?","How long should I stay on omalizumab before trying to stop to test for remission?","Is my chronic urticaria related to another autoimmune condition I should know about?","What is the difference between chronic spontaneous and chronic inducible urticaria?"],
      resources: [
        { org: "AAFA — Hives", desc: "Plain-language guide to chronic hives, triggers, and treatment options.", url: "https://www.aafa.org/hives-urticaria/", type: "primary" },
        { org: "AAD — Hives", desc: "American Academy of Dermatology patient information on chronic hives.", url: "https://www.aad.org/public/diseases/a-z/hives-overview", type: "primary" },
        { org: "Xolair Access Solutions", desc: "Copay assistance and access support for omalizumab.", url: "https://www.xolair.com/csu/patient/financial-support.html", type: "insurance" }
      ]
    },

    /* ─────────────────────────────────────────────────────────────
       MODULE 7: VITILIGO
    ───────────────────────────────────────────────────────────── */
    {
      id: "vitiligo", icon: "🌓", concern: "Vitiligo",
      title: "Vitiligo Treatment",
      subtitle: "Ruxolitinib cream, phototherapy, topical, and camouflage",
      tagline: "The first FDA-approved treatment for vitiligo arrived in 2022",
      category: "condition",
      expectation: { title: "A historic moment in vitiligo care", body: "In 2022, ruxolitinib cream (Opzelura) became the first treatment ever specifically FDA-approved to repigment vitiligo. Most people living with vitiligo do not yet know it exists. Vitiligo is also an autoimmune condition — not a cosmetic variation — and significantly affects quality of life, especially in people with darker skin tones where contrast is most visible. Both treating and accepting vitiligo are valid paths." },
      myths: [
        { false: "Vitiligo is just cosmetic — nothing to treat", true: "Vitiligo is an autoimmune condition with documented mental health impact comparable to psoriasis. It deserves treatment if it bothers you." },
        { false: "Nothing works for vitiligo", true: "Ruxolitinib cream, narrowband UVB, and combination approaches produce meaningful repigmentation in many patients — especially on the face." },
        { false: "Sun exposure will help repigment", true: "Unprotected sun exposure darkens surrounding skin, increasing contrast. Medical phototherapy uses controlled UV — very different from sun exposure." },
        { false: "Vitiligo only affects certain skin tones", true: "Vitiligo affects all skin tones equally but is more visible and often more distressing in people with darker skin due to contrast." }
      ],
      options: [
        { id: "ruxolitinib", name: "Ruxolitinib cream (Opzelura)", tagline: "First FDA-approved treatment specifically for vitiligo", howItWorks: "Topical JAK inhibitor applied twice daily. Blocks immune signals destroying pigment cells. FDA-approved 2022 for non-segmental vitiligo in adults and adolescents 12+. Best results on the face.", onset: "4–6 months for visible change; best results at 12–24 months", duration: "Ongoing daily application", maintenance: "high", maintenanceLabel: "Twice daily application", costNote: "Expensive — Incyte has a copay assistance program. Prior authorization required.", realityCheck: "Works best on the face. Hands, feet, and body respond more slowly and less completely. Repigmented skin may not perfectly match surrounding skin initially.", skinToneNote: "Particularly meaningful for people with darker skin tones where contrast is most visible." },
        { id: "phototherapy_vit", name: "Narrowband UVB phototherapy", tagline: "Most established effective treatment", howItWorks: "Controlled UVB light stimulates surviving pigment cells to multiply and migrate inward. Given 2–3 times weekly in office or at home with a device. Best on face and trunk.", onset: "3–6 months for initial response", duration: "Ongoing — maintenance sessions often needed", maintenance: "high", maintenanceLabel: "2–3 sessions per week", costNote: "Usually covered by insurance as a medical treatment. Home devices reduce travel burden.", realityCheck: "Response on hands and feet is poor. Repigmentation may not be permanent without maintenance. Combination with ruxolitinib may improve results.", skinToneNote: "Safe and equally effective across all skin tones when properly dosed." },
        { id: "topical_vit", name: "Topical corticosteroids and calcineurin inhibitors", tagline: "Older options — useful as adjuncts", howItWorks: "Topical corticosteroids and calcineurin inhibitors (tacrolimus, pimecrolimus) reduce local immune activity and support mild repigmentation. Calcineurin inhibitors preferred for face. Less effective than ruxolitinib or phototherapy alone.", onset: "3–6 months", duration: "Ongoing with breaks", maintenance: "high", maintenanceLabel: "Daily application", costNote: "Generic options inexpensive. Well covered.", realityCheck: "Modest repigmentation compared to newer options. Steroids cannot be used indefinitely on face.", skinToneNote: null },
        { id: "camouflage", name: "Camouflage and acceptance approaches", tagline: "Immediate results — not treating the condition", howItWorks: "Medical-grade camouflage products can temporarily even skin tone. Many people choose not to treat vitiligo — particularly in communities where it is not stigmatized. Both paths are valid and can be combined.", onset: "Immediate", duration: "Ongoing as desired", maintenance: "medium", maintenanceLabel: "Applied as desired", costNote: "Variable — OTC to medical-grade specialist products. Not covered by insurance.", realityCheck: "Camouflage does not affect the underlying condition or progression. Many use it alongside treatment.", skinToneNote: "Matching to darker skin tones historically required specialist products — Microskin and similar medical-grade options are designed for this." }
      ],
      valueDomains: ["repigmentation_goal","acceptance_path","office_visits","speed_vitiligo","face_vs_body","cost_overall","skin_tone_safety"],
      questions: ["Is my vitiligo stable or actively spreading — does that change what treatment makes sense?","Am I a candidate for ruxolitinib cream, and what results are realistic for my areas?","Would phototherapy, ruxolitinib, or a combination give me the best results?","Are there autoimmune conditions I should be screened for given my vitiligo?","What does realistic repigmentation look like — will my skin return to my exact original color?"],
      resources: [
        { org: "Vitiligo Research Foundation", desc: "Patient education, research updates, and community support for vitiligo.", url: "https://www.vrfoundation.org", type: "primary" },
        { org: "AAD — Vitiligo", desc: "Patient guide to vitiligo causes, diagnosis, and treatment.", url: "https://www.aad.org/public/diseases/a-z/vitiligo-overview", type: "primary" },
        { org: "Opzelura Access (Incyte)", desc: "Copay assistance and access support for ruxolitinib cream.", url: "https://www.opzelura.com/patient/access-and-support/", type: "insurance" }
      ]
    },

    /* ─────────────────────────────────────────────────────────────
       MODULE 8: ALOPECIA AREATA
    ───────────────────────────────────────────────────────────── */
    {
      id: "alopecia", icon: "💫", concern: "Alopecia areata",
      title: "Alopecia Areata Treatment",
      subtitle: "Steroids, JAK inhibitors, minoxidil, and hair restoration",
      tagline: "New FDA-approved treatments have transformed what is possible",
      category: "condition",
      expectation: { title: "What has changed about alopecia areata treatment", body: "Alopecia areata is an autoimmune condition where the immune system attacks hair follicles. In 2022 and 2023, baricitinib (Olumiant) and ritlecitinib (Litfulo) became the first FDA-approved systemic treatments. Clinical trials showed significant hair regrowth in many patients with severe disease. If you have been told there is nothing that works, this has changed. Hair loss also carries profound identity and grief dimensions that deserve acknowledgment." },
      myths: [
        { false: "Alopecia areata always progresses to complete loss", true: "Many people experience spontaneous regrowth. Progression to complete scalp or body hair loss occurs in a minority of cases." },
        { false: "There are no real treatments", true: "JAK inhibitors approved 2022–2023 produce significant hair regrowth in clinical trials for severe disease — the first systemic treatments with strong evidence." },
        { false: "It is caused by stress", true: "Stress may trigger flares in predisposed individuals, but alopecia areata is fundamentally autoimmune — not caused by stress alone." },
        { false: "Hair that grows back will always fall out again", true: "While relapse is possible, many people maintain regrowth on JAK inhibitor therapy. Spontaneous regrowth in milder disease is often durable." }
      ],
      options: [
        { id: "corticosteroid_aa", name: "Corticosteroid injections", tagline: "First-line for limited patchy alopecia areata", howItWorks: "Intralesional corticosteroid injections directly into bald patches suppress local immune activity and stimulate regrowth. Given every 4–6 weeks in office. Most effective for limited patchy disease on the scalp.", onset: "4–8 weeks per session", duration: "Repeated sessions", maintenance: "medium", maintenanceLabel: "Every 4–6 weeks in office", costNote: "Inexpensive and usually insurance-covered. Requires regular office visits.", realityCheck: "Effective for small patches — not practical for extensive disease. Does not prevent new patches. Risk of skin atrophy at injection sites.", skinToneNote: "Skin lightening at injection sites is more visible in darker skin tones — discuss with your dermatologist." },
        { id: "jak_aa", name: "JAK inhibitors (baricitinib, ritlecitinib)", tagline: "First FDA-approved systemic treatments for alopecia areata", howItWorks: "Baricitinib (Olumiant, approved 2022, adults) and ritlecitinib (Litfulo, approved 2023, ages 12+) are daily oral pills. In trials approximately 35–40% of patients achieved significant hair coverage after one year.", onset: "3–6 months initial regrowth; full benefit 12+ months", duration: "Ongoing — hair often falls out again if stopped", maintenance: "high", maintenanceLabel: "Daily pill with monitoring", costNote: "Expensive — manufacturer patient assistance programs available. Require prior authorization and regular labs.", realityCheck: "FDA black box warning for serious infections, blood clots, cardiovascular events — most applicable to older patients with risk factors. Hair loss frequently recurs when stopped.", skinToneNote: null },
        { id: "minoxidil_aa", name: "Minoxidil", tagline: "Supportive — helps retain and regrow hair", howItWorks: "Topical (Rogaine) or oral low-dose minoxidil stimulates hair growth by prolonging the growth phase. Does not treat the underlying immune cause but supports regrowth and reduces shedding.", onset: "3–6 months", duration: "Ongoing — shedding resumes if stopped", maintenance: "high", maintenanceLabel: "Daily topical or oral", costNote: "Topical OTC is inexpensive. Oral requires prescription but low cost.", realityCheck: "Not sufficient alone for significant alopecia areata — most useful as an adjunct.", skinToneNote: null },
        { id: "hair_solutions", name: "Hair prosthetics, wigs, and scalp micropigmentation", tagline: "Immediate solutions — or primary choice", howItWorks: "High-quality wigs and hairpieces provide immediate restoration. Scalp micropigmentation creates the appearance of hair stubble. Valid primary choices or bridges during treatment.", onset: "Immediate", duration: "Ongoing — wigs require maintenance", maintenance: "medium", maintenanceLabel: "Varies by approach", costNote: "Custom wigs range widely. Some insurance covers hairpieces as prosthetics. Micropigmentation is out of pocket.", realityCheck: "Do not treat underlying condition or affect progression. Many use alongside medical treatment.", skinToneNote: "Wigs must match hair texture and scalp tone — resources exist specifically for textured hair and darker skin tones." }
      ],
      valueDomains: ["regrowth_goal","accepting_loss","injection_ok","speed_alopecia","side_effect_tolerance","cost_overall","children_safe"],
      questions: ["How severe is my alopecia areata — and does that determine whether I qualify for JAK inhibitors?","What are realistic expectations for regrowth with JAK inhibitors at my level of disease?","What monitoring is required with baricitinib or ritlecitinib?","If hair grows back and I stop treatment, will it fall out again?","Are there support communities for people living with alopecia areata?"],
      resources: [
        { org: "National Alopecia Areata Foundation (NAAF)", desc: "Patient support, research updates, and treatment information for alopecia areata.", url: "https://www.naaf.org", type: "support" },
        { org: "AAD — Alopecia Areata", desc: "Patient guide to diagnosis and treatment from the American Academy of Dermatology.", url: "https://www.aad.org/public/diseases/hair-loss/types/alopecia", type: "primary" },
        { org: "Children's Alopecia Project", desc: "Support and resources for children and families navigating alopecia areata.", url: "https://www.childrenswithskindisease.org", type: "support" }
      ]
    },

    /* ─────────────────────────────────────────────────────────────
       MODULE 9: ROSACEA
    ───────────────────────────────────────────────────────────── */
    {
      id: "rosacea", icon: "🌸", concern: "Rosacea",
      title: "Rosacea Treatment",
      subtitle: "Topical, oral, and laser options — matched to your subtype",
      tagline: "The right treatment depends on which type of rosacea you have",
      category: "condition",
      expectation: { title: "Why rosacea treatment must match your subtype", body: "Rosacea is not one condition — it is a spectrum of related skin conditions. The four main types are: papulopustular (bumps that look like acne), erythematotelangiectatic (persistent redness and flushing), phymatous (skin thickening), and ocular (eye irritation). Treating the wrong subtype with the wrong treatment can make things worse. Most people have features of more than one type." },
      myths: [
        { false: "Rosacea is just adult acne", true: "Rosacea and acne are distinct conditions. The bumps in papulopustular rosacea look similar to acne but have no blackheads and respond to completely different treatments." },
        { false: "Rosacea is caused by drinking alcohol", true: "Alcohol can trigger flushing, but rosacea is not caused by drinking. Many people with rosacea drink little or no alcohol." },
        { false: "Nothing can be done about facial redness", true: "Persistent redness can be significantly improved with brimonidine gel, oxymetazoline cream, and laser treatments like the Vbeam." },
        { false: "Rosacea only affects light skin", true: "Rosacea is underdiagnosed in darker skin tones because redness is less visible — patients may present with burning, stinging, and bumps without obvious redness." }
      ],
      options: [
        { id: "topical_rosacea", name: "Topical treatments", tagline: "First-line for papulopustular rosacea and redness", howItWorks: "Metronidazole gel/cream and azelaic acid are first-line for bumps. Ivermectin cream (Soolantra) targets Demodex mites. For redness, brimonidine gel (Mirvaso) and oxymetazoline cream (Rhofade) temporarily constrict blood vessels within 30 minutes.", onset: "4–8 weeks for bumps; 30 minutes for redness products", duration: "Ongoing daily use", maintenance: "high", maintenanceLabel: "Daily application", costNote: "Metronidazole and azelaic acid have generic options. Redness treatments are pricier — check insurance.", realityCheck: "Redness gels provide temporary relief — some patients experience rebound redness when the medication wears off.", skinToneNote: "Azelaic acid is particularly well tolerated in darker skin tones and also addresses pigmentation. Redness-reducing gels may be less visually impactful where redness is less prominent." },
        { id: "oral_rosacea", name: "Oral doxycycline (sub-antimicrobial dose)", tagline: "Anti-inflammatory dose — not for killing bacteria", howItWorks: "Low-dose doxycycline (Oracea — 40mg modified release) is FDA-approved for papulopustular rosacea. At this dose it is anti-inflammatory, not antibiotic. Used for 3–4 months alongside topical treatment.", onset: "4–8 weeks", duration: "3–4 months then topical maintenance", maintenance: "medium", maintenanceLabel: "Daily pill for 3–4 months", costNote: "Generic sub-antimicrobial doxycycline available. Standard doxycycline is very inexpensive.", realityCheck: "Targets bumps and inflammation — not redness or flushing. Combined approach with topicals gives best results.", skinToneNote: null },
        { id: "laser_rosacea", name: "Laser and light treatments", tagline: "Best option for persistent redness and visible vessels", howItWorks: "Pulsed dye laser (Vbeam) and intense pulsed light (IPL) target blood vessels causing redness and visible capillaries. Multiple sessions needed. CO2 laser for rhinophyma. Most effective for erythematotelangiectatic subtype.", onset: "Improvement after each session — full results after series", duration: "Maintenance every 1–2 years", maintenance: "low", maintenanceLabel: "Series then periodic maintenance", costNote: "Not typically covered by insurance for rosacea. Varies by laser type and sessions.", realityCheck: "Treats visible redness and vessels but does not prevent new ones — trigger avoidance and topical maintenance still necessary.", skinToneNote: "IPL carries higher risk of pigmentation changes in darker skin. Nd:YAG laser safer for Fitzpatrick IV–VI. Must be performed by a provider experienced with skin of color." },
        { id: "triggers", name: "Trigger identification and avoidance", tagline: "The most important thing alongside any treatment", howItWorks: "Rosacea flares are driven by individual triggers — sun, heat, alcohol, spicy food, exercise, stress, certain skincare products. A rosacea diary tracking what precedes flares is the most practical tool. Sun protection (SPF 30+ mineral) daily is non-negotiable for everyone with rosacea.", onset: "Immediate when triggers avoided", duration: "Lifelong", maintenance: "high", maintenanceLabel: "Daily awareness and avoidance", costNote: "Free — switching to rosacea-safe skincare has some cost.", realityCheck: "Triggers vary by individual — yours may differ from standard lists. Sun protection is universal.", skinToneNote: null }
      ],
      valueDomains: ["redness_focus","bumps_focus","laser_ok","office_visits","maintenance_burden","cost_overall","skin_tone_safety"],
      questions: ["Which subtype of rosacea do I have — and does my treatment plan match that subtype?","Is my persistent redness a treatment target, and what is the best approach?","Would laser significantly help my redness, and am I a good candidate given my skin tone?","Do I have ocular rosacea — and should I also see an ophthalmologist?","What skincare products and triggers should I specifically avoid?"],
      resources: [
        { org: "National Rosacea Society", desc: "Leading patient organization — treatment guides, trigger diary, and provider finder.", url: "https://www.rosacea.org", type: "primary" },
        { org: "AAD — Rosacea", desc: "Patient guide to rosacea types, treatment, and triggers.", url: "https://www.aad.org/public/diseases/rosacea", type: "primary" },
        { org: "Skin of Color Society", desc: "Resources for rosacea in patients with darker skin tones.", url: "https://skinofcolorsociety.org/patient-education/", type: "primary" }
      ]
    },

    /* ─────────────────────────────────────────────────────────────
       MODULE 10: HIDRADENITIS SUPPURATIVA
    ───────────────────────────────────────────────────────────── */
    {
      id: "hs", icon: "🩹", concern: "Hidradenitis suppurativa (HS)",
      title: "Hidradenitis Suppurativa",
      subtitle: "Medical, biologic, and surgical treatment options",
      tagline: "One of the most undertreated conditions in dermatology — with real options",
      category: "condition",
      expectation: { title: "What you need to know about HS", body: "Hidradenitis suppurativa causes painful lumps, abscesses, and scarring in skin-fold areas — armpits, groin, under the breasts. It is not caused by poor hygiene. It is not contagious. It is a serious immune-mediated condition — one of the most painful and psychosocially devastating conditions in all of dermatology — and one of the most underdiagnosed. Many people go years without a proper diagnosis. FDA-approved biologics exist, and surgery can remove affected tissue. You deserve a real treatment plan." },
      myths: [
        { false: "HS is caused by poor hygiene or being overweight", true: "HS is an immune-mediated condition with strong genetic component. Obesity can worsen it but does not cause it. Shame and stigma delay diagnosis by years." },
        { false: "Keep the area clean and it will go away", true: "HS is chronic and progressive if untreated. Early treatment prevents the scarring and tunneling of advanced disease." },
        { false: "Dermatologists can't do much for HS", true: "Adalimumab (Humira) and secukinumab (Cosentyx) are FDA-approved biologics. Surgery removes destroyed tissue. Combination approaches produce the best outcomes." },
        { false: "HS only affects overweight people", true: "HS affects all body types. It is more common in people with obesity but occurs in people of all weights." }
      ],
      options: [
        { id: "medical_hs", name: "Topical and oral antibiotics", tagline: "First-line for mild-to-moderate disease", howItWorks: "Topical clindamycin for mild disease. Oral antibiotic combinations (tetracyclines, rifampin-based, clindamycin combinations) for more widespread disease. Anti-inflammatory as much as antibiotic in effect.", onset: "4–8 weeks", duration: "3–6 months; then reassess", maintenance: "high", maintenanceLabel: "Daily topical or oral", costNote: "Inexpensive generics. Well covered.", realityCheck: "Do not reverse existing scarring or tunneling. Control active inflammation but disease often recurs when stopped. Not sufficient long-term for moderate-to-severe HS.", skinToneNote: null },
        { id: "biologic_hs", name: "Biologic medications (adalimumab, secukinumab)", tagline: "Most effective medical treatment for moderate-to-severe HS", howItWorks: "Adalimumab (Humira, FDA-approved 2015) and secukinumab (Cosentyx, FDA-approved 2023) target specific immune pathways. Self-injected. Significantly reduce frequency and severity of lesions and improve quality of life.", onset: "4–16 weeks", duration: "Ongoing", maintenance: "medium", maintenanceLabel: "Weekly or every 2–4 weeks injection", costNote: "Humira biosimilars have significantly reduced costs. Patient assistance programs available.", realityCheck: "Reduce disease activity but do not eliminate it for most. Do not reverse existing scarring. Surgery often needed alongside for advanced disease.", skinToneNote: null },
        { id: "hormonal_hs", name: "Hormonal treatments", tagline: "For HS that flares with menstrual cycles", howItWorks: "HS frequently worsens around menstruation. OCPs, spironolactone, and metformin reduce hormonal triggers. Adjuncts — not standalone therapies for moderate-to-severe disease.", onset: "3–6 months", duration: "Ongoing", maintenance: "high", maintenanceLabel: "Daily oral", costNote: "Inexpensive generics. Well covered.", realityCheck: "Useful for premenstrual flares but not sufficient alone for significant HS. Most effective as part of a combination approach.", skinToneNote: null },
        { id: "surgical_hs", name: "Surgical treatment", tagline: "The only option that removes destroyed tissue", howItWorks: "Ranges from incision/drainage of abscesses (temporary) to wide local excision removing scarred tunneling tissue permanently. Deroofing opens tunnels for healing. Often combined with biologics.", onset: "Immediate for acute drainage; weeks for full surgical healing", duration: "Permanent removal — recurrence possible in adjacent areas", maintenance: "low", maintenanceLabel: "One-time procedure — ongoing medical treatment still needed", costNote: "Covered by insurance as a medical procedure. Wide excision may require general anesthesia.", realityCheck: "Surgery does not cure HS — new disease can develop in adjacent areas. Medical treatment should continue after surgery.", skinToneNote: "Hypertrophic scarring and keloid formation after surgery are more common in darker skin tones. Discuss scar management with your surgeon." }
      ],
      valueDomains: ["pain_relief","injection_ok","surgery_ok","cost_overall","long_term_control","side_effect_tolerance","scarring_hs"],
      questions: ["What stage or severity of HS do I have, and how does that guide treatment?","Am I a candidate for a biologic — and if so, adalimumab or secukinumab?","Is there a role for surgery in my case, and what type would be most appropriate?","Are there lifestyle changes that could meaningfully improve my HS?","Are there HS specialists or multidisciplinary clinics I should be seen by?"],
      resources: [
        { org: "HS Foundation", desc: "Leading HS patient organization — treatment information, provider directory, and community support.", url: "https://www.hs-foundation.org", type: "primary" },
        { org: "AAD — Hidradenitis Suppurativa", desc: "Patient guide to HS causes, diagnosis, and treatment.", url: "https://www.aad.org/public/diseases/hidradenitis-suppurativa", type: "primary" },
        { org: "HS Connect", desc: "Patient community and peer support network for people living with HS.", url: "https://www.hsconnect.org", type: "support" }
      ]
    }
  ],

  /* ── VALUES DOMAIN LIBRARY
──────────────────────────────────────── */
  valueDomains: {
    /* Neurotoxin domains */
    longevity: {
      icon: "⏳",
      label: "How long results last",
      description: "I want results that last as long as possible before my next treatment"
    },
    natural_look: {
      icon: "🪞",
      label: "Looking natural",
      description: "I want subtle results — I want to look refreshed, not 'done'"
    },
    onset_speed: {
      icon: "⚡",
      label: "How quickly it works",
      description: "I have an event or deadline — I want results as fast as possible"
    },
    cost_annual: {
      icon: "💰",
      label: "Annual cost",
      description: "I want to minimize how much I spend across the full year"
    },
    maintenance_freq: {
      icon: "🗓️",
      label: "Fewer appointments",
      description: "I want to come in as infrequently as possible"
    },
    trust_data: {
      icon: "📊",
      label: "Long-term safety data",
      description: "I prefer treatments with the most years of safety research behind them"
    },
    area_precision: {
      icon: "🎯",
      label: "Precision of injection",
      description: "I am treating a delicate area — I want a product that stays where it is placed"
    },
    /* Melasma domains */
    improvement_speed: {
      icon: "⚡",
      label: "How quickly I see results",
      description: "I want to see improvement as soon as possible"
    },
    maintenance_burden: {
      icon: "🗓️",
      label: "Low daily maintenance",
      description: "I want a treatment that does not require much from me every day"
    },
    skin_tone_safety: {
      icon: "🌿",
      label: "Safe for my skin tone",
      description: "Avoiding side effects like darkening or irritation is my top priority"
    },
    cost_overall: {
      icon: "💰",
      label: "Overall cost",
      description: "Keeping the total cost of treatment manageable matters to me"
    },
    long_term_control: {
      icon: "🎯",
      label: "Long-term control",
      description: "I want a strategy that keeps melasma from coming back"
    },
    natural_approach: {
      icon: "🌱",
      label: "Gentler approach first",
      description: "I prefer to start with less intensive treatments before trying stronger ones"
    },
    pregnancy_safe: {
      icon: "🤱",
      label: "Safe during or after pregnancy",
      description: "I am pregnant, breastfeeding, or planning to be — safety in this context matters"
    },
    /* Acne domains */
    clearing_speed: {
      icon: "⚡",
      label: "Clearing as fast as possible",
      description: "I want to see my skin clear up quickly — speed is my priority"
    },
    permanence: {
      icon: "🎯",
      label: "Long-lasting or permanent results",
      description: "I want a treatment that could produce lasting remission, not just control"
    },
    side_effect_tolerance: {
      icon: "🛡️",
      label: "Minimizing side effects",
      description: "I am sensitive to side effects and prefer gentler approaches even if they take longer"
    },
    pregnancy_acne: {
      icon: "🤱",
      label: "Safe during pregnancy or planning",
      description: "Pregnancy safety is a key factor in my treatment decision"
    },
    scarring_prevention: {
      icon: "🩹",
      label: "Preventing scarring",
      description: "Stopping scarring before it happens is more important to me than the pace of clearing"
    },

    /* New condition domains */
    clearance_goal: { icon: "✨", label: "Achieving clear or nearly clear skin", description: "Complete or near-complete clearance is my goal — not just improvement" },
    injection_ok: { icon: "💉", label: "Comfortable with injections", description: "I am willing to self-inject if it means better results" },
    office_visits: { icon: "🏥", label: "Minimizing office visits", description: "I want as few trips to the doctor as possible" },
    long_term_safety: { icon: "📊", label: "Long-term safety data", description: "I prefer treatments with the most years of safety research" },
    speed_psoriasis: { icon: "⚡", label: "How quickly it works", description: "I want to see improvement as fast as possible" },
    itch_relief: { icon: "🛡️", label: "Relieving itch", description: "Controlling itch is my top priority — it affects my sleep and daily life" },
    speed_eczema: { icon: "⚡", label: "How quickly itch and rash improve", description: "I want itch and rash relief as fast as possible" },
    children_safe: { icon: "👶", label: "Safe for children or pregnancy", description: "I am treating a child, am pregnant, or am planning to be" },
    symptom_control: { icon: "🛡️", label: "Controlling hives completely", description: "I want to be hive-free or as close as possible" },
    speed_hives: { icon: "⚡", label: "How quickly hives are controlled", description: "I want relief from hives as fast as possible" },
    remission_goal: { icon: "🎯", label: "Achieving remission", description: "I want to eventually stop treatment and stay clear" },
    repigmentation_goal: { icon: "🌓", label: "Restoring my natural pigment", description: "Getting my natural skin color back matters to me" },
    acceptance_path: { icon: "🌱", label: "Accepting my appearance", description: "I am exploring acceptance or camouflage rather than medical treatment" },
    speed_vitiligo: { icon: "⚡", label: "How quickly repigmentation appears", description: "I want to see repigmentation as soon as possible" },
    face_vs_body: { icon: "🎯", label: "Treating the face specifically", description: "My face matters most — body repigmentation is secondary" },
    regrowth_goal: { icon: "💫", label: "Regrowing hair", description: "Achieving meaningful hair regrowth is my primary goal" },
    accepting_loss: { icon: "🌱", label: "Accepting hair loss", description: "I am exploring acceptance, wigs, or micropigmentation alongside or instead of medical treatment" },
    speed_alopecia: { icon: "⚡", label: "How quickly hair grows back", description: "I want to see regrowth as soon as possible" },
    redness_focus: { icon: "🌸", label: "Reducing background redness", description: "Persistent facial redness is my main concern" },
    bumps_focus: { icon: "🔬", label: "Clearing bumps and breakouts", description: "The bumps and pimple-like lesions bother me most" },
    laser_ok: { icon: "💡", label: "Open to laser treatment", description: "I am willing to have laser treatments for redness if they offer better results" },
    pain_relief: { icon: "🛡️", label: "Reducing pain and discomfort", description: "Pain relief is my top priority — HS is significantly affecting my quality of life" },
    surgery_ok: { icon: "🩺", label: "Open to surgery", description: "I am willing to consider surgery if it offers the best long-term results" },
    long_term_control: { icon: "🎯", label: "Long-term disease control", description: "I want a treatment that keeps my condition under control over the long term" },
    scarring_hs: { icon: "🩹", label: "Preventing further scarring", description: "Stopping the scarring and tunneling from advancing is critical" }
  },

  /* ── CROSSWALK TABLE
─────────────────────────────────────────────── */
  crosswalk: {
    neurotoxin: {
      longevity:        { botox: "3–4 months — the standard duration.", dysport: "3–4 months — similar to Botox.", daxxify: "6–9 months — the longest lasting option available.", xeomin: "3–4 months — similar to Botox.", jeuveau: "3–4 months — similar to Botox." },
      natural_look:     { botox: "Excellent — highly controllable dosing. The most experience exists with achieving natural results.", dysport: "Very good — slightly wider spread can soften large areas beautifully.", daxxify: "Good — similar precision to Botox. Less long-term real-world data on aesthetic finesse.", xeomin: "Excellent — precise placement, similar to Botox.", jeuveau: "Very good — comparable to Botox in precision." },
      onset_speed:      { botox: "3–5 days to see results — not the fastest.", dysport: "1–2 days — the fastest onset of any neurotoxin.", daxxify: "3–5 days — similar to Botox.", xeomin: "3–5 days — similar to Botox.", jeuveau: "2–3 days — slightly faster than Botox." },
      cost_annual:      { botox: "Middle range — 3–4 treatments per year at standard pricing.", dysport: "Comparable to Botox annually — units are measured differently.", daxxify: "Higher cost per session, but only 1–2 sessions per year may offset this.", xeomin: "Comparable to Botox.", jeuveau: "Often competitively priced — may be the most economical per year." },
      maintenance_freq: { botox: "3–4 times per year.", dysport: "3–4 times per year.", daxxify: "1–2 times per year — the standout advantage of Daxxify.", xeomin: "3–4 times per year.", jeuveau: "3–4 times per year." },
      trust_data:       { botox: "The most data — FDA-approved since 2002. Decades of safety research.", dysport: "Extensive data — FDA-approved since 2009 for cosmetic use.", daxxify: "FDA-approved 2022 — strong clinical trials but limited long-term real-world data.", xeomin: "FDA-approved 2010 — good long-term safety record.", jeuveau: "FDA-approved 2019 — robust clinical data, less long-term history." },
      area_precision:   { botox: "Excellent precision — moderate spread, well-suited to all areas.", dysport: "Wider spread — ideal for forehead, use with care near eyes.", daxxify: "Precise — similar to Botox.", xeomin: "Very precise — no accessory proteins may reduce unwanted spread.", jeuveau: "Precise — similar to Botox." }
    },
    melasma: {
      improvement_speed:   { topical: "Slowest — 8–12 weeks for visible change, but the foundation everyone needs.", chemical_peel: "Faster when added to topicals — series shows results over 2–3 months.", tranexamic: "8–12 weeks — similar pace to topicals but different mechanism.", laser_melasma: "Can produce faster visible change, but risk of worsening is real." },
      maintenance_burden:  { topical: "Highest daily commitment — requires consistent daily use indefinitely.", chemical_peel: "Moderate — in-office sessions every 2–3 months plus daily topicals.", tranexamic: "Moderate — daily topical or oral pill.", laser_melasma: "Lower frequency of visits, but sun protection daily is non-negotiable for anyone." },
      skin_tone_safety:    { topical: "Safest across all skin tones when properly selected — especially azelaic acid and tranexamic acid.", chemical_peel: "Safe with correct peel type — mandelic/lactic preferred for darker tones.", tranexamic: "Excellent safety profile across all skin tones.", laser_melasma: "Highest risk in darker skin tones — requires specialist with skin of color expertise." },
      cost_overall:        { topical: "Most affordable — the foundation of any plan.", chemical_peel: "Moderate — series cost adds up but is less than laser.", tranexamic: "Low to moderate — especially generic or OTC topical versions.", laser_melasma: "Most expensive — multiple sessions required." },
      long_term_control:   { topical: "Best long-term control when used consistently with sun protection.", chemical_peel: "Good when continued as maintenance — not a one-time fix.", tranexamic: "Strong evidence for sustained improvement while using it.", laser_melasma: "Melasma recurs without strict ongoing sun protection regardless of treatment." },
      natural_approach:    { topical: "The most gradual, gentle starting point — appropriate for everyone.", chemical_peel: "A step up from topicals — still non-invasive.", tranexamic: "Gentle mechanism — increasingly considered a first-line gentle option.", laser_melasma: "The most intensive approach — appropriate after topicals have been tried." },
      pregnancy_safe:      { topical: "Azelaic acid and glycolic acid are considered safe in pregnancy. Hydroquinone and tretinoin should be avoided. Discuss with your OB.", chemical_peel: "Superficial peels with glycolic or lactic acid are generally considered safe — avoid stronger peels. Confirm with your OB.", tranexamic: "Topical TXA is generally considered low-risk. Oral TXA should be avoided in pregnancy.", laser_melasma: "Laser treatments should be deferred during pregnancy." }
    },
    psoriasis: {
      skin_clearance: { topical_pso: "Partial clearance for limited areas — rarely achieves full clearance for widespread disease.", phototherapy_pso: "Significant clearance — 60–70% of patients achieve PASI 75 (75% improvement).", oral_systemic_pso: "Moderate clearance — methotrexate and apremilast achieve partial improvement.", biologic_pso: "Highest clearance rates — IL-17 and IL-23 inhibitors achieve 90%+ clearance in the majority of patients." },
      convenience: { topical_pso: "Daily application — practical for limited areas, impractical for widespread disease.", phototherapy_pso: "Most inconvenient — 2–3 office visits per week.", oral_systemic_pso: "Daily or weekly pill — but requires regular blood monitoring visits.", biologic_pso: "Least frequent — injection every 2–12 weeks depending on the drug." },
      side_effect_tolerance: { topical_pso: "Safest — local side effects only when used correctly.", phototherapy_pso: "Very safe systemically — slight skin cancer risk with prolonged use.", oral_systemic_pso: "Moderate — methotrexate requires liver monitoring. Cyclosporine affects kidneys.", biologic_pso: "Good — targeted side effects. Slight infection risk. Requires TB and hepatitis screening before starting." },
      joint_involvement: { topical_pso: "No effect on joints.", phototherapy_pso: "No effect on joints.", oral_systemic_pso: "Methotrexate treats psoriatic arthritis — an advantage if joints are involved.", biologic_pso: "All biologics treat psoriatic arthritis — a major advantage if joint symptoms are present." },
      cost_overall: { topical_pso: "Least expensive — generics available.", phototherapy_pso: "Moderate — covered by insurance but requires many visits.", oral_systemic_pso: "Low (methotrexate) to high (apremilast, deucravacitinib).", biologic_pso: "Highest list price — patient assistance and insurance make cost manageable for most." },
      pregnancy_safe: { topical_pso: "Topical steroids: use with caution. Calcipotriene: avoid. Discuss with OB.", phototherapy_pso: "Narrowband UVB generally considered safe in pregnancy.", oral_systemic_pso: "Methotrexate absolutely contraindicated. Cyclosporine: use with caution. Discuss with OB.", biologic_pso: "Limited data — most avoided in first trimester. Discuss with OB." },
      long_term_safety: { topical_pso: "Decades of safe use — potent steroids require cycling.", phototherapy_pso: "Long safety record — slight skin cancer risk with prolonged use.", oral_systemic_pso: "Methotrexate: decades of data. Newer orals: good but shorter track record.", biologic_pso: "Excellent — TNF inhibitors have 20+ years of data. IL-17 and IL-23 inhibitors have 10+ years." }
    },
    eczema: {
      itch_relief: { topical_ec: "Good for localized itch during flares.", dupilumab_ec: "Significant itch reduction — dramatic improvement in most patients within 2–4 weeks.", jak_ec: "Fastest itch relief — oral JAK inhibitors reduce itch within 1–2 weeks.", systemic_ec: "Moderate — cyclosporine works but has more side effects." },
      skin_clearance: { topical_ec: "Good for flare control — less effective for maintaining long-term clearance.", dupilumab_ec: "Significant sustained clearance — 36–51% achieve clear or almost clear skin at 16 weeks.", jak_ec: "High clearance rates — upadacitinib shows especially high rates.", systemic_ec: "Moderate — cyclosporine achieves clearance but long-term use is limited." },
      onset_speed: { topical_ec: "Days to weeks for flare control.", dupilumab_ec: "4–8 weeks for meaningful improvement.", jak_ec: "Fastest — 1–2 weeks for itch relief; skin clearance continues over months.", systemic_ec: "4–8 weeks." },
      side_effect_tolerance: { topical_ec: "Safest — local side effects only.", dupilumab_ec: "Very good safety profile. Conjunctivitis in 5–10% — manageable.", jak_ec: "FDA black box warnings apply to certain risk groups. Generally well-tolerated in young healthy patients.", systemic_ec: "Most side effects — kidney and blood pressure monitoring for cyclosporine." },
      convenience: { topical_ec: "Daily application plus moisturizing.", dupilumab_ec: "Injection every 2 weeks — low frequency.", jak_ec: "Daily pill — easy, no injections.", systemic_ec: "Daily pill plus frequent monitoring." },
      cost_overall: { topical_ec: "Least expensive — generics available.", dupilumab_ec: "Expensive — widely covered. Most pay $0–$30/month with assistance.", jak_ec: "Similar to dupilumab. Assistance available.", systemic_ec: "Inexpensive as generics — monitoring adds cost." },
      pregnancy_safe: { topical_ec: "Topical steroids with caution. Tacrolimus: avoid. Azelaic acid: generally safe.", dupilumab_ec: "Limited data — generally avoided. Discuss with OB.", jak_ec: "Avoid in pregnancy.", systemic_ec: "Cyclosporine: some use with monitoring. Methotrexate: contraindicated." }
    },
    hives: {
      itch_relief: { antihistamine_hives: "Good for mild-moderate itch — often inadequate for severe CSU.", omalizumab_hives: "Excellent — dramatic itch reduction in most responders within 1–4 weeks.", cyclosporine_hives: "Good — effective for refractory itch.", emerging_hives: "Strong evidence in trials." },
      clearance_hives: { antihistamine_hives: "Partial control in many — complete elimination rare.", omalizumab_hives: "Complete elimination in 36–52% of patients in clinical trials.", cyclosporine_hives: "Meaningful reduction — for refractory disease.", emerging_hives: "High clearance in trials — not yet widely available." },
      onset_speed: { antihistamine_hives: "Hours for acute relief.", omalizumab_hives: "1–4 weeks in most responders.", cyclosporine_hives: "2–4 weeks.", emerging_hives: "Varies." },
      side_effect_tolerance: { antihistamine_hives: "Excellent — second-generation antihistamines very well-tolerated.", omalizumab_hives: "Very good — small anaphylaxis risk for first dose given in office.", cyclosporine_hives: "Moderate — blood pressure and kidney monitoring required.", emerging_hives: "Good in trials — limited long-term data." },
      convenience: { antihistamine_hives: "Daily pills — very easy, OTC available.", omalizumab_hives: "Monthly injection — low frequency.", cyclosporine_hives: "Daily pill plus monitoring visits.", emerging_hives: "Monthly injection or daily pill." },
      cost_overall: { antihistamine_hives: "Pennies per day — OTC available.", omalizumab_hives: "Expensive but widely covered. Most pay $0–$30/month.", cyclosporine_hives: "Affordable generic — monitoring adds cost.", emerging_hives: "Not available outside trials yet." },
      pregnancy_safe: { antihistamine_hives: "Loratadine and cetirizine generally safe in pregnancy. Discuss with OB.", omalizumab_hives: "Limited data — generally avoided. Discuss with OB.", cyclosporine_hives: "Use with monitoring if absolutely needed. Discuss with OB.", emerging_hives: "Unknown — not recommended." }
    },
    vitiligo: {
      repigmentation_goal: { topical_vit: "Moderate — best on face. Hands and feet respond poorly.", ruxolitinib_vit: "Best topical — 30% achieve 75%+ facial repigmentation at 24 weeks.", phototherapy_vit: "Good — best on trunk and face. Hands and feet respond poorly.", depigmentation_vit: "No repigmentation — removes remaining color for uniform appearance." },
      skin_tone_safety: { topical_vit: "Safe across all skin tones when properly selected.", ruxolitinib_vit: "Studied and approved across all skin tones.", phototherapy_vit: "Effective across all skin tones — careful dosing in darker tones.", depigmentation_vit: "Most relevant for patients with extensive vitiligo and darker skin." },
      convenience: { topical_vit: "Daily application.", ruxolitinib_vit: "Twice-daily application.", phototherapy_vit: "Most intensive — 2–3 office visits per week.", depigmentation_vit: "Daily during treatment; lifelong sun protection after." },
      permanence: { topical_vit: "Not permanent — may recur if stopped.", ruxolitinib_vit: "Not permanent — may fade if stopped.", phototherapy_vit: "Not permanent — maintenance needed.", depigmentation_vit: "Permanent and irreversible." },
      cost_overall: { topical_vit: "Moderate — generics available.", ruxolitinib_vit: "Expensive brand-name — assistance programs available.", phototherapy_vit: "Covered by insurance.", depigmentation_vit: "Moderate — compounding pharmacy." },
      side_effect_tolerance: { topical_vit: "Very safe — local effects only.", ruxolitinib_vit: "Well-tolerated topically.", phototherapy_vit: "Safe — mild sunburn risk.", depigmentation_vit: "Permanent — requires full counseling and psychological readiness." },
      natural_approach: { topical_vit: "Gentlest starting point.", ruxolitinib_vit: "Step up from traditional topicals — still topical.", phototherapy_vit: "Non-invasive but intensive.", depigmentation_vit: "Most definitive and irreversible approach." }
    },
    alopecia: {
      regrowth_goal: { steroid_injections_al: "Excellent for limited patchy disease.", jak_alopecia_al: "Best for extensive disease — 35–40% achieve 80%+ coverage.", contact_immunotherapy_al: "Variable — moderate response rates in experienced centers.", support_al: "Does not regrow hair — addresses appearance differently." },
      side_effect_tolerance: { steroid_injections_al: "Well-tolerated — local skin thinning possible.", jak_alopecia_al: "FDA warnings apply to older/higher-risk patients. Generally well-tolerated in young healthy patients.", contact_immunotherapy_al: "Intentional skin irritation — uncomfortable but manageable.", support_al: "No medical side effects." },
      convenience: { steroid_injections_al: "Office visit every 4–6 weeks.", jak_alopecia_al: "Daily pill — easy once approved.", contact_immunotherapy_al: "Weekly to biweekly office visits.", support_al: "No medical appointments." },
      cost_overall: { steroid_injections_al: "Covered by insurance — low out-of-pocket.", jak_alopecia_al: "Expensive — assistance programs available.", contact_immunotherapy_al: "Academic center — variable coverage.", support_al: "$200–$3,000+ for quality wigs. Insurance may cover as cranial prosthesis." },
      identity_acceptance: { steroid_injections_al: "Regrowth-focused — months to see results.", jak_alopecia_al: "Regrowth-focused — long timeline.", contact_immunotherapy_al: "Regrowth-focused — significant commitment.", support_al: "Immediately addresses appearance. Many people find acceptance more empowering than ongoing treatment." },
      permanence: { steroid_injections_al: "Not permanent — may re-fall if stopped.", jak_alopecia_al: "Not permanent — hair typically re-falls when stopped.", contact_immunotherapy_al: "Not permanent — ongoing treatment needed.", support_al: "Wigs removable. Acceptance is a perspective shift." },
      onset_speed: { steroid_injections_al: "4–8 weeks for initial regrowth in responding areas.", jak_alopecia_al: "12–16 weeks for visible regrowth; full benefit at 36+ weeks.", contact_immunotherapy_al: "3–6 months for initial response.", support_al: "Immediate." }
    },
    rosacea: {
      redness_reduction: { topical_ros: "Moderate background redness reduction. Redness reducers: temporary only.", oral_ros: "Moderate — reduces inflammatory redness component.", laser_ros: "Best for persistent redness and vessels — most effective treatment for vascular rosacea.", triggers_ros: "Significant — avoiding triggers directly reduces flushing." },
      bumps_control: { topical_ros: "Excellent for papulopustular rosacea — first-line.", oral_ros: "Very good — doxycycline effectively reduces bumps.", laser_ros: "Secondary — laser primarily targets vessels.", triggers_ros: "Moderate — reduces inflammatory flares." },
      convenience: { topical_ros: "Daily application.", oral_ros: "Daily pill.", laser_ros: "Series then every 6–12 months — low maintenance.", triggers_ros: "Daily habits — sun protection plus awareness." },
      skin_tone_safety: { topical_ros: "Safe across all skin tones.", oral_ros: "Safe — sun sensitivity side effect.", laser_ros: "Requires careful selection in darker tones — Nd:YAG safer for Fitzpatrick IV–VI.", triggers_ros: "Safe for all skin tones." },
      cost_overall: { topical_ros: "Low to moderate.", oral_ros: "Low — generic doxycycline inexpensive.", laser_ros: "Variable — may be covered when medically documented.", triggers_ros: "Free." },
      side_effect_tolerance: { topical_ros: "Very safe topically — brimonidine rebound flushing possible.", oral_ros: "Well-tolerated — sun sensitivity, occasional GI upset.", laser_ros: "Temporary redness after sessions.", triggers_ros: "No side effects." },
      long_term_control: { topical_ros: "Good maintenance when continued.", oral_ros: "Good during treatment — use with maintenance topicals after.", laser_ros: "Durable for treated vessels — maintenance as new vessels develop.", triggers_ros: "Best long-term strategy — reduces progression." }
    },
    hs: {
      pain_relief: { antibiotics_hs: "Moderate — reduces inflammation contributing to pain.", biologic_hs: "Significant — reduces flare frequency and dramatically reduces pain burden.", surgical_hs: "Immediate for acute drainage. Deroofing provides durable relief.", lifestyle_hs: "Moderate — smoking cessation and weight loss reduce overall severity." },
      flare_reduction: { antibiotics_hs: "Moderate — reduces flares during treatment.", biologic_hs: "Best medical option — significantly reduces flare frequency.", surgical_hs: "Permanent for treated areas — HS can still flare elsewhere.", lifestyle_hs: "Meaningful — smoking cessation especially impactful." },
      scarring_prevention: { antibiotics_hs: "Moderate — reduces inflammatory lesions causing scarring.", biologic_hs: "Good — reduces severe flares most likely to cause permanent scarring.", surgical_hs: "Addresses existing tunnels — does not prevent new lesions elsewhere.", lifestyle_hs: "Indirect — reducing severity decreases scarring burden." },
      side_effect_tolerance: { antibiotics_hs: "Very good — well-tolerated.", biologic_hs: "Good — targeted side effects. Requires infection screening.", surgical_hs: "Procedural risks — healing time, surgical scar.", lifestyle_hs: "No medical side effects." },
      convenience: { antibiotics_hs: "Daily pills or topical.", biologic_hs: "Weekly or monthly injection.", surgical_hs: "Procedure plus recovery, then low maintenance.", lifestyle_hs: "Ongoing habit changes — no appointments." },
      cost_overall: { antibiotics_hs: "Very affordable — generics.", biologic_hs: "Expensive — widely covered by insurance for moderate-to-severe HS.", surgical_hs: "Covered by insurance as medical procedure.", lifestyle_hs: "Free to low-cost." },
      pregnancy_safe: { antibiotics_hs: "Doxycycline contraindicated. Topical clindamycin generally safe. Discuss with OB.", biologic_hs: "Limited data — generally avoided. Discuss with OB.", surgical_hs: "Minor procedures generally safe. Major procedures deferred when possible.", lifestyle_hs: "All lifestyle modifications safe and beneficial in pregnancy." }
    },
    acne: {
      clearing_speed:       { topical_acne: "Slowest — 8–12 weeks. Retinoids often cause initial flare before improvement.", oral_antibiotic: "Faster — improvement in 4–8 weeks for inflammatory lesions.", hormonal: "Slowest — 3–6 months. Works deeply but takes time.", isotretinoin: "Initial worsening then significant clearing by months 2–3.", procedures_acne: "Cortisone shots: 24–48 hours for individual cysts. Laser/peels: gradual over series." },
      permanence:           { topical_acne: "Controls acne while used — tends to recur if stopped.", oral_antibiotic: "Temporary bridge — acne often returns after stopping.", hormonal: "Controls acne while taking the medication — usually recurs if stopped.", isotretinoin: "The only treatment with potential for long-term or permanent remission.", procedures_acne: "No procedure produces lasting remission — best as adjuncts." },
      side_effect_tolerance:{ topical_acne: "Mild to moderate — dryness, irritation, initial flare. Start low and slow.", oral_antibiotic: "Generally well-tolerated — sun sensitivity, GI upset possible.", hormonal: "Varies by medication — spironolactone causes frequent urination; OCPs have hormonal effects.", isotretinoin: "Most side effects — dryness, potential mood changes, requires blood monitoring and birth control.", procedures_acne: "Cortisone: very well tolerated. Peels/laser: temporary redness." },
      pregnancy_acne:       { topical_acne: "Benzoyl peroxide and azelaic acid considered safe. Tretinoin and clindamycin should be avoided. Confirm with OB.", oral_antibiotic: "Doxycycline is contraindicated in pregnancy. Confirm any antibiotic with your OB.", hormonal: "OCPs and spironolactone are not used in pregnancy. Clascoterone: safety not established.", isotretinoin: "Absolutely contraindicated in pregnancy — causes severe birth defects. iPLEDGE requires two forms of birth control or abstinence.", procedures_acne: "Cortisone: generally safe. Lasers and stronger peels should be deferred. Confirm with OB." },
      cost_overall:         { topical_acne: "Most affordable — many covered by insurance or available OTC.", oral_antibiotic: "Low cost — generic doxycycline is very inexpensive.", hormonal: "Low cost — generic spironolactone and OCPs are inexpensive.", isotretinoin: "Moderate — generic isotretinoin is covered by many insurance plans. iPLEDGE adds lab/visit costs.", procedures_acne: "Cosmetic procedures not typically covered. Cortisone injections often covered." },
      maintenance_burden:   { topical_acne: "Highest — daily use required indefinitely.", oral_antibiotic: "Moderate — daily pill for 3–6 months, then stop.", hormonal: "High — daily ongoing medication.", isotretinoin: "Lowest long-term — one course, then done for many patients.", procedures_acne: "Varies — cortisone on-demand; laser/peels require series and maintenance." },
      scarring_prevention:  { topical_acne: "Good — retinoids prevent new comedones and some inflammatory lesions.", oral_antibiotic: "Good — reduces inflammatory acne that causes most scarring.", hormonal: "Good — reduces hormonal flares that often cause deep cysts.", isotretinoin: "Best — reduces all acne types including deep cysts most likely to scar. Recommended earlier to prevent permanent scarring.", procedures_acne: "Cortisone injections are excellent for rapidly deflating cysts before they can scar." }
    },

    psoriasis: {
      clearance_goal: { topical_pso: "Good for mild disease — rarely complete clearance for moderate-to-severe.", phototherapy: "About 60–70% achieve significant improvement.", biologic: "Highest rates — 70–90% achieve clear or nearly clear with modern biologics.", systemic_pso: "Variable — methotrexate moderate improvement; apremilast less effective than biologics." },
      injection_ok: { topical_pso: "No injection.", phototherapy: "No injection.", biologic: "Self-injection every 2–12 weeks.", systemic_pso: "Oral pills — methotrexate can also be weekly injection." },
      office_visits: { topical_pso: "Periodic follow-up only.", phototherapy: "2–3 visits per week — highest burden.", biologic: "Minimal — most self-injected at home.", systemic_pso: "Regular blood monitoring visits required." },
      side_effect_tolerance: { topical_pso: "Mild — skin thinning with prolonged steroid use.", phototherapy: "Very safe — mild sunburn reactions possible.", biologic: "Very well tolerated — slightly increased infection risk.", systemic_pso: "Higher monitoring burden — liver/kidney toxicity risks." },
      cost_overall: { topical_pso: "Lowest — generics available.", phototherapy: "Moderate — usually covered by insurance.", biologic: "High list price but copay programs manageable.", systemic_pso: "Lowest medication cost — monitoring adds expense." },
      long_term_safety: { topical_pso: "Decades of data.", phototherapy: "Excellent long-term record.", biologic: "IL-17/IL-23 inhibitors have 10+ years real-world data.", systemic_pso: "Methotrexate 50+ years of data but toxicity monitoring required." },
      speed_psoriasis: { topical_pso: "2–4 weeks.", phototherapy: "4–8 weeks of sessions.", biologic: "4–16 weeks — IL-17 inhibitors fastest.", systemic_pso: "4–12 weeks." }
    },
    eczema: {
      itch_relief: { topical_eczema: "Good for mild-to-moderate itch.", dupilumab: "Excellent — often dramatic itch relief within 2 weeks.", jak_eczema: "Fastest itch relief — noticeable within days.", systemic_eczema: "Moderate — slower than biologics." },
      clearance_goal: { topical_eczema: "Good for mild; insufficient for moderate-to-severe.", dupilumab: "~50% clear or nearly clear at 1 year.", jak_eczema: "Highest rates — ~60% clear with upadacitinib.", systemic_eczema: "Moderate improvement — less than biologics." },
      injection_ok: { topical_eczema: "No injection.", dupilumab: "Self-injection every 2 weeks.", jak_eczema: "Daily oral pill — no injection.", systemic_eczema: "Oral pills only." },
      speed_eczema: { topical_eczema: "Days to weeks for flare control.", dupilumab: "Itch: 2–4 weeks. Skin: 4–16 weeks.", jak_eczema: "Fastest — itch often within days.", systemic_eczema: "4–12 weeks." },
      side_effect_tolerance: { topical_eczema: "Mild — steroid thinning with overuse.", dupilumab: "Very well tolerated — conjunctivitis in ~10%.", jak_eczema: "FDA black box warning — more monitoring required.", systemic_eczema: "Higher side effect profile — broad immune suppression." },
      cost_overall: { topical_eczema: "Lowest — many generics.", dupilumab: "High list; copay cards reduce significantly.", jak_eczema: "High — similar to dupilumab.", systemic_eczema: "Very low medication cost." },
      children_safe: { topical_eczema: "Most approved for children — adjust steroid potency by age/area.", dupilumab: "Approved down to 6 months.", jak_eczema: "Ritlecitinib age 12+; upadacitinib adults only.", systemic_eczema: "Used off-label in children with monitoring." }
    },
    hives: {
      symptom_control: { antihistamine: "Complete control in ~40% on high-dose.", omalizumab: "Complete control in ~50%; significant reduction in another ~30%.", biologic_hives: "Strong emerging data — may match or exceed omalizumab for some patients.", immunosuppressant_hives: "Variable — reserved for refractory cases." },
      office_visits: { antihistamine: "None — daily pill at home.", omalizumab: "Monthly office visit required.", biologic_hives: "Every 2–4 weeks self-injection at home.", immunosuppressant_hives: "Regular monitoring visits." },
      injection_ok: { antihistamine: "No injection.", omalizumab: "Monthly injection in office.", biologic_hives: "Self-injection every 2–4 weeks.", immunosuppressant_hives: "Oral pills only." },
      cost_overall: { antihistamine: "Very low — OTC or inexpensive generics.", omalizumab: "High — copay assistance available.", biologic_hives: "High — similar to other biologics.", immunosuppressant_hives: "Very low medication cost." },
      speed_hives: { antihistamine: "Days.", omalizumab: "1–3 months.", biologic_hives: "4–12 weeks.", immunosuppressant_hives: "4–8 weeks." },
      side_effect_tolerance: { antihistamine: "Excellent.", omalizumab: "Very well tolerated — rare anaphylaxis (reason for office dosing).", biologic_hives: "Very well tolerated.", immunosuppressant_hives: "Higher burden — broad immune suppression." },
      remission_goal: { antihistamine: "Does not induce remission.", omalizumab: "Trials stopping every 6–12 months — some achieve remission.", biologic_hives: "Data emerging.", immunosuppressant_hives: "Does not reliably induce remission." }
    },
    vitiligo: {
      repigmentation_goal: { ruxolitinib: "Best available — especially on face. First FDA-approved treatment.", phototherapy_vit: "Good — established approach, especially face and trunk.", topical_vit: "Modest — useful adjunct.", camouflage: "Does not repigment — conceals depigmentation." },
      acceptance_path: { ruxolitinib: "Can be combined with acceptance — treatment is a choice.", phototherapy_vit: "Gradual and controllable — easy to combine with acceptance.", topical_vit: "Low commitment — easy to stop.", camouflage: "Directly supports acceptance path." },
      office_visits: { ruxolitinib: "Periodic follow-up only — applied at home.", phototherapy_vit: "2–3 sessions per week — home devices reduce this.", topical_vit: "Periodic follow-up only.", camouflage: "None required." },
      speed_vitiligo: { ruxolitinib: "4–6 months visible change; best at 12–24 months.", phototherapy_vit: "3–6 months for initial response.", topical_vit: "Slow — 3–6 months modest change.", camouflage: "Immediate." },
      face_vs_body: { ruxolitinib: "Best on face — body and hands respond more slowly.", phototherapy_vit: "Good on face and trunk — hands and feet respond poorly.", topical_vit: "Most useful on face.", camouflage: "Effective on all areas." },
      cost_overall: { ruxolitinib: "High — patient assistance available.", phototherapy_vit: "Moderate — covered as medical treatment.", topical_vit: "Low — generics available.", camouflage: "Variable — OTC to specialist products." },
      skin_tone_safety: { ruxolitinib: "Safe across all skin tones.", phototherapy_vit: "Safe when properly dosed.", topical_vit: "Calcineurin inhibitors preferred over steroids on face.", camouflage: "Must be matched to skin tone." }
    },
    alopecia: {
      regrowth_goal: { corticosteroid_aa: "Good for limited patchy disease.", jak_aa: "Best for severe disease — 35–40% significant coverage at 1 year.", minoxidil_aa: "Supportive — not sufficient alone.", hair_solutions: "Does not regrow hair — restores appearance immediately." },
      accepting_loss: { corticosteroid_aa: "Can be combined with acceptance for limited patches.", jak_aa: "Can be combined while waiting for response.", minoxidil_aa: "Low commitment — easy to use alongside acceptance.", hair_solutions: "Directly supports acceptance — wigs, micropigmentation." },
      injection_ok: { corticosteroid_aa: "Intralesional injections in office.", jak_aa: "Daily oral pill — no injections.", minoxidil_aa: "No injections.", hair_solutions: "No injections." },
      speed_alopecia: { corticosteroid_aa: "4–8 weeks per session.", jak_aa: "3–6 months initial regrowth; 12+ months full benefit.", minoxidil_aa: "3–6 months.", hair_solutions: "Immediate (wigs)." },
      side_effect_tolerance: { corticosteroid_aa: "Mild — injection site atrophy possible.", jak_aa: "FDA black box warning — monitoring required.", minoxidil_aa: "Very well tolerated.", hair_solutions: "No medical side effects." },
      cost_overall: { corticosteroid_aa: "Low — covered by insurance.", jak_aa: "High — patient assistance available.", minoxidil_aa: "Low — OTC or inexpensive.", hair_solutions: "Variable — wigs range widely." },
      children_safe: { corticosteroid_aa: "Used in children.", jak_aa: "Ritlecitinib age 12+; baricitinib adults only.", minoxidil_aa: "Topical off-label in children.", hair_solutions: "Safe at all ages." }
    },
    rosacea: {
      redness_focus: { topical_rosacea: "Brimonidine and oxymetazoline reduce redness temporarily within 30 minutes.", oral_rosacea: "Does not directly address redness.", laser_rosacea: "Best for persistent redness — longer-lasting than topical options.", triggers: "Reducing triggers decreases flushing events — essential for everyone." },
      bumps_focus: { topical_rosacea: "First-line — metronidazole, azelaic acid, ivermectin effectively reduce bumps.", oral_rosacea: "Very effective for moderate-to-severe papulopustular rosacea.", laser_rosacea: "Not primary treatment for bumps.", triggers: "Reduces flare frequency but does not clear existing bumps." },
      laser_ok: { topical_rosacea: "No laser — topical only.", oral_rosacea: "No laser — oral only.", laser_rosacea: "This is the laser option.", triggers: "No laser — lifestyle approach." },
      office_visits: { topical_rosacea: "Periodic follow-up only.", oral_rosacea: "Periodic follow-up.", laser_rosacea: "Multiple sessions required then maintenance.", triggers: "No office visits required." },
      maintenance_burden: { topical_rosacea: "High — daily application.", oral_rosacea: "Medium — daily pill 3–4 months.", laser_rosacea: "Low ongoing — series then annual maintenance.", triggers: "High — lifelong daily awareness." },
      cost_overall: { topical_rosacea: "Low to moderate.", oral_rosacea: "Low — generic inexpensive.", laser_rosacea: "High — not usually covered.", triggers: "Free." },
      skin_tone_safety: { topical_rosacea: "Azelaic acid excellent for darker skin.", oral_rosacea: "Safe across all skin tones.", laser_rosacea: "IPL risky in darker skin — Nd:YAG preferred for Fitzpatrick IV–VI.", triggers: "Universal importance." }
    },
    hs: {
      pain_relief: { medical_hs: "Moderate — reduces inflammation and acute flares.", biologic_hs: "Best sustained pain reduction.", hormonal_hs: "Useful for premenstrual flares.", surgical_hs: "Immediate relief for abscesses; lasting relief in treated areas." },
      injection_ok: { medical_hs: "Oral or topical — no injections.", biologic_hs: "Weekly or every 2–4 weeks self-injection.", hormonal_hs: "Oral pills only.", surgical_hs: "Surgical procedure — not ongoing injections." },
      surgery_ok: { medical_hs: "No surgery.", biologic_hs: "Often combined with surgery for best results.", hormonal_hs: "No surgery.", surgical_hs: "This is the surgical option." },
      cost_overall: { medical_hs: "Low — generics.", biologic_hs: "High — biosimilars and patient assistance available.", hormonal_hs: "Low — generics.", surgical_hs: "Covered by insurance as medical procedure." },
      long_term_control: { medical_hs: "Good short-term — recurs without ongoing treatment.", biologic_hs: "Best sustained control — reduces lesion count long-term.", hormonal_hs: "Useful adjunct for hormonal triggers.", surgical_hs: "Permanent removal of affected tissue — new disease possible in adjacent areas." },
      side_effect_tolerance: { medical_hs: "Well tolerated — antibiotic resistance concern long-term.", biologic_hs: "Generally well tolerated — increased infection risk.", hormonal_hs: "Well tolerated — spironolactone causes urinary frequency.", surgical_hs: "Surgical risks — scarring; keloid risk higher in darker skin tones." },
      scarring_hs: { medical_hs: "Prevents new scarring if flares controlled — does not reverse existing.", biologic_hs: "Best for preventing progression — reduces destructive lesions.", hormonal_hs: "Reduces flare frequency — indirectly slows scarring.", surgical_hs: "Removes existing scarred tissue — most direct approach." }
    }
  },

  /* ── STEP LABELS ────────────────────────────────────────────────── */
  steps: [
    "Welcome",
    "Choose Concern",
    "Learn",
    "What Matters",
    "Compare",
    "Your Summary"
  ]
};
