# Applied AI Engineer CV Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a repository-backed, ATS-compatible PDF CV positioning Kareem Ahmed for junior Applied AI Engineer roles, internships, and secondarily freelance work.

**Architecture:** Build the CV as a deterministic DOCX using the bundled document runtime, render it through LibreOffice, inspect every rendered page, and deliver the approved PDF. Source claims from the local application repositories and keep the generated artifacts outside application source folders.

**Tech Stack:** Python, python-docx, OOXML, LibreOffice PDF export, Poppler rendering.

## Global Constraints

- Use only official.kareem.ahmed@gmail.com, GitHub, and portfolio as contact details.
- Do not include age, date of birth, photograph, phone, WhatsApp, home address, unsupported metrics, or invented employment.
- Use a single-column, ATS-readable two-page layout.
- Present projects as independent engineering work.
- Visually inspect every rendered page before delivery.

---

### Task 1: Evidence-backed CV copy

**Files:**
- Create: `/Users/kareem_1203/Developer/Kareem_CV/cv_content.md`

- [ ] Inspect application documentation, key AI integrations, architecture, tests, and package manifests.
- [ ] Draft concise summary, skills, project bullets, education, and languages.
- [ ] Scan the copy for unsupported metrics, invented employment, secrets, and placeholders.

### Task 2: Deterministic document build

**Files:**
- Create: `/Users/kareem_1203/Developer/Kareem_CV/build_cv.py`
- Create: `/Users/kareem_1203/Developer/Kareem_CV/Kareem_Ahmed_Applied_AI_Engineer_CV.docx`

- [ ] Resolve the `standard_business_brief` preset into explicit page, font, spacing, heading, link, list, and footer tokens.
- [ ] Build the single-column CV with real headings, real bullets, clickable links, and an ATS-safe masthead.
- [ ] Audit the DOCX structure, styles, page geometry, links, lists, and metadata.

### Task 3: Render and final verification

**Files:**
- Create: `/Users/kareem_1203/Developer/Kareem_CV/Kareem_Ahmed_Applied_AI_Engineer_CV.pdf`
- Create internally: `/Users/kareem_1203/Developer/Kareem_CV/qa/page-1.png` and `page-2.png`

- [ ] Render the DOCX using the packaged renderer with PDF emission.
- [ ] Inspect every page image at full resolution for clipping, overlap, weak hierarchy, awkward breaks, and inconsistent spacing.
- [ ] Iterate the builder and re-render until the CV is visually clean and limited to two pages.
- [ ] Confirm PDF text extraction, clickable contact text, page count, absence of placeholders, and final file integrity.
