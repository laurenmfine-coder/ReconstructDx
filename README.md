# ReconstructDx — Patient Decision Aid Platform

A modular, plain-language, interactive patient decision aid for reconstructive surgery.  
No frameworks. No AI in the patient-facing tool. No backend. Works offline.

## Live Demo
Deploy to GitHub Pages — see instructions below.

## What This Is
ReconstructDx helps patients think through reconstructive surgery decisions by:
- Completing a brief wellbeing check-in (PHQ-2, GAD-2)
- Choosing a procedure module
- Reading plain-language option overviews
- Rating what matters most to them (values clarification)
- Seeing a personalized option comparison
- Printing a decision summary to bring to their surgical consultation

## Current Modules
| Module | Population | Project |
|--------|-----------|---------|
| Post-mastectomy breast reconstruction | Adult | Project 1 |
| Pelvic organ prolapse repair | Adult (female) | Project 1 |
| Urethral stricture repair | Adult (male) | Project 1 |
| Adolescent scar revision | Pediatric | Project 2 |

## File Structure
```
reconstructdx-site/
├── index.html          # Single entry point
├── css/
│   └── main.css        # All styles — edit tokens at top for branding
├── js/
│   ├── data.js         # ALL clinical content lives here — edit this file
│   └── app.js          # Navigation and rendering logic
└── README.md
```

## Adding or Editing Clinical Content
All clinical content lives in `js/data.js`. You do not need to touch `app.js` or `css/main.css` to:
- Add a new procedure module
- Edit existing clinical text
- Add values clarification domains
- Update crosswalk comparison notes

### To add a new module:
1. Add an entry to `RDX.modules[]` following the existing pattern
2. Add a crosswalk entry to `RDX.crosswalk{}` with the same module `id`
3. Add any new value domain IDs to `RDX.valueDomains{}`

## Deploying to GitHub Pages
1. Push this repository to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch, root folder
4. Your site will be live at `https://[username].github.io/[repo-name]`

## Reading Level
All content targets ≤ 6th grade reading level (Flesch-Kincaid, SMOG, Fry).  
Use the free Readable.com tool or Microsoft Word's readability checker to verify edits.

## Accessibility
- WCAG 2.1 Level AA compliant
- Full keyboard navigation
- Screen reader compatible (ARIA labels throughout)
- Minimum 4.5:1 color contrast
- Mobile-first responsive design

## No AI in the Patient-Facing Tool
This tool uses no AI, no API calls, no machine learning at runtime.  
All content is pre-written by the clinical student team and reviewed by faculty.  
AI tools may be used *during content development* (behind the scenes) to assist with  
plain-language drafting — but the deployed tool is fully static and human-authored.

## Research Use
If deploying for research/usability testing:
- Add your IRB approval number to the welcome screen in `app.js`
- Add a data use consent step before the check-in screen if required
- Session data is not stored by default — add logging only with IRB approval

## Built By
Medical student research team  
Nova Southeastern University — Dr. Kiran C. Patel College of Allopathic Medicine  
Faculty advisor: [Name]

## License
Creative Commons Attribution-NonCommercial 4.0  
Free to use, adapt, and share for non-commercial research and clinical purposes.  
Please cite the original research publication when available.
