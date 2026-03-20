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
    }
  ],

  /* ── VALUES DOMAIN LIBRARY ──────────────────────────────────────── */
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
    }
  },

  /* ── CROSSWALK TABLE ─────────────────────────────────────────────── */
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
    acne: {
      clearing_speed:       { topical_acne: "Slowest — 8–12 weeks. Retinoids often cause initial flare before improvement.", oral_antibiotic: "Faster — improvement in 4–8 weeks for inflammatory lesions.", hormonal: "Slowest — 3–6 months. Works deeply but takes time.", isotretinoin: "Initial worsening then significant clearing by months 2–3.", procedures_acne: "Cortisone shots: 24–48 hours for individual cysts. Laser/peels: gradual over series." },
      permanence:           { topical_acne: "Controls acne while used — tends to recur if stopped.", oral_antibiotic: "Temporary bridge — acne often returns after stopping.", hormonal: "Controls acne while taking the medication — usually recurs if stopped.", isotretinoin: "The only treatment with potential for long-term or permanent remission.", procedures_acne: "No procedure produces lasting remission — best as adjuncts." },
      side_effect_tolerance:{ topical_acne: "Mild to moderate — dryness, irritation, initial flare. Start low and slow.", oral_antibiotic: "Generally well-tolerated — sun sensitivity, GI upset possible.", hormonal: "Varies by medication — spironolactone causes frequent urination; OCPs have hormonal effects.", isotretinoin: "Most side effects — dryness, potential mood changes, requires blood monitoring and birth control.", procedures_acne: "Cortisone: very well tolerated. Peels/laser: temporary redness." },
      pregnancy_acne:       { topical_acne: "Benzoyl peroxide and azelaic acid considered safe. Tretinoin and clindamycin should be avoided. Confirm with OB.", oral_antibiotic: "Doxycycline is contraindicated in pregnancy. Confirm any antibiotic with your OB.", hormonal: "OCPs and spironolactone are not used in pregnancy. Clascoterone: safety not established.", isotretinoin: "Absolutely contraindicated in pregnancy — causes severe birth defects. iPLEDGE requires two forms of birth control or abstinence.", procedures_acne: "Cortisone: generally safe. Lasers and stronger peels should be deferred. Confirm with OB." },
      cost_overall:         { topical_acne: "Most affordable — many covered by insurance or available OTC.", oral_antibiotic: "Low cost — generic doxycycline is very inexpensive.", hormonal: "Low cost — generic spironolactone and OCPs are inexpensive.", isotretinoin: "Moderate — generic isotretinoin is covered by many insurance plans. iPLEDGE adds lab/visit costs.", procedures_acne: "Cosmetic procedures not typically covered. Cortisone injections often covered." },
      maintenance_burden:   { topical_acne: "Highest — daily use required indefinitely.", oral_antibiotic: "Moderate — daily pill for 3–6 months, then stop.", hormonal: "High — daily ongoing medication.", isotretinoin: "Lowest long-term — one course, then done for many patients.", procedures_acne: "Varies — cortisone on-demand; laser/peels require series and maintenance." },
      scarring_prevention:  { topical_acne: "Good — retinoids prevent new comedones and some inflammatory lesions.", oral_antibiotic: "Good — reduces inflammatory acne that causes most scarring.", hormonal: "Good — reduces hormonal flares that often cause deep cysts.", isotretinoin: "Best — reduces all acne types including deep cysts most likely to scar. Recommended earlier to prevent permanent scarring.", procedures_acne: "Cortisone injections are excellent for rapidly deflating cysts before they can scar." }
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
