# CST2565 — Smart Home Consulting Project

![Build Report](https://github.com/NAME0x0/CST2656_Smart_Home/actions/workflows/build-report.yml/badge.svg)
![Lint Markdown](https://github.com/NAME0x0/CST2656_Smart_Home/actions/workflows/markdown-lint.yml/badge.svg)
![Spell Check](https://github.com/NAME0x0/CST2656_Smart_Home/actions/workflows/spell-check.yml/badge.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/NAME0x0/CST2656_Smart_Home)
![GitHub issues](https://img.shields.io/github/issues/NAME0x0/CST2656_Smart_Home)
![GitHub pull requests](https://img.shields.io/github/issues-pr/NAME0x0/CST2656_Smart_Home)

**Module:** CST2565 — Compliance and Professional Project Management
**Academic Year:** 2025/26
**Methodology:** PRINCE2-Aligned Waterfall
**Submission:** 24 April 2026 | **Presentation:** 20-24 April 2026

---

## Project Brief

An architectural firm is designing a UK housing estate with three dwelling types. Our team acts as **smart home consultants** — evaluating, recommending, and costing appropriate technologies for each housing type.

| Housing Type | Units | Key Focus | Budget per Unit |
|---|---|---|---|
| 4-bedroom family homes | 6 | Security, energy management, convenience | ~£4,814 |
| Sheltered accommodation | 14 residents + warden | Assistive tech, fall detection, telecare | ~£26,037 (building) |
| 2-bedroom starter homes | 8 | Affordability, essential features, upgrade path | ~£961 |

All homes have **solar panels** as standard. All costs are **GBP, parts only** (no installation labour). The estate total is **£62,609** at the base specification.

---

## Repository Structure

```
CST2565_Smart_Home/
├── .github/
│   ├── CODEOWNERS                 # Auto-assigns PR reviewers by file ownership
│   ├── PULL_REQUEST_TEMPLATE.md   # Standardised PR checklist
│   ├── ISSUE_TEMPLATE/
│   │   ├── config.yml             # Issue template chooser config
│   │   ├── task.yml               # WBS work package template
│   │   ├── research.yml           # Research investigation template
│   │   └── review.yml             # Peer review request template
│   └── workflows/
│       ├── build-report.yml       # Builds DOCX/PDF on every push to main
│       ├── release.yml            # Creates GitHub Release with report files on tag
│       ├── markdown-lint.yml      # Checks Markdown quality with markdownlint
│       └── spell-check.yml        # Spell-checks all Markdown with cspell
│
├── 01-project-management/         # PM artefacts
│   ├── PID.md                     # Project Initiation Document (13 sections)
│   ├── WBS.md                     # Work Breakdown Structure (50+ work packages)
│   ├── gantt-chart-guide.md       # Task list with dependencies for Gantt chart tool
│   └── 4-fields-map.md            # Phase/Task/Owner/Quality matrix (80+ rows)
│
├── 02-research/                   # Technical research
│   ├── technical-research.md      # Platforms, devices, protocols, pricing
│   └── regulatory-context.md      # UK GDPR, PSTI Act, Part L/P, BS 8300, fire safety
│
├── 03-designs/                    # Design specifications per housing type
│   ├── family-home.md             # 4-bed design: persona, devices, costs, solar
│   ├── sheltered-accommodation.md # Sheltered: assistive tech, warden system, telecare
│   ├── starter-home.md            # 2-bed: essential tier + optional upgrades
│   ├── estate-cost-summary.md     # Consolidated estate-wide costing and ROI
│   └── additional-features.md     # Tier 1 practical + Tier 2 emerging tech (robotics)
│
├── 04-diagrams/                   # Network diagrams, WBS tree, flowcharts
├── 05-minutes/                    # Weekly formal meeting minutes
│   └── TEMPLATE.md                # Meeting minutes template
├── 06-reflective-diaries/         # Individual reflective diaries (one per member)
│   └── TEMPLATE.md                # 5-week diary template (Weeks 8–12)
├── 07-appendices/                 # Supporting evidence
│   ├── datasheets/                # Product datasheets (PDF)
│   └── price-screenshots/         # Dated price screenshots (PNG)
├── 08-final-report/               # Final assembled report
│   └── report.md                  # Report source — pandoc converts to DOCX/PDF
│
├── 09-references/                 # Project briefs, marking criteria, reference material
│   ├── project-brief.md           # Original coursework brief (from module spec)
│   └── marking-criteria.md        # Marking scheme, grade descriptors, self-assessment
│
├── .cspell.json                   # Custom dictionary for spell checker
├── .gitignore                     # Excludes OS files, build output, IDE folders
├── .markdownlint.json             # Markdown linting rules
├── CLAUDE.md                      # AI assistant context file
├── CONTRIBUTING.md                # Team workflow guide
└── README.md                      # This file
```

---

## Team and File Ownership

| Member | Role | Primary Files | GitHub Handle |
|---|---|---|---|
| Afsah | Project Manager / Report Editor | `01-project-management/`, `05-minutes/`, intro, conclusion | `@NAME0x0` |
| Jake | Technical Lead — Family Homes | `03-designs/family-home.md`, protocol research, diagrams | `@JakeSajith` |
| Eeshitha | Technical Lead — Sheltered Accommodation | `03-designs/sheltered-accommodation.md`, security research | `@Eeshitha-afk` |
| Syed | Technical Lead — Starter Homes & Costing | `03-designs/starter-home.md`, cost summary, appendices | `@Syed-Nihaal` |

> **Rule:** Do not edit another member's files directly. Open a GitHub Issue to discuss changes. The [CODEOWNERS](.github/CODEOWNERS) file automatically requests reviews from file owners when a PR touches their files.

---

## Workflow

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/NAME0x0/CST2656_Smart_Home.git
cd CST2656_Smart_Home

# 2. Pull latest changes before working
git pull origin main

# 3. Edit your assigned files
# ... work on your section ...

# 4. Commit and push
git add <your-files>
git commit -m "Add cost table for starter home essential tier"
git push origin main
```

### Branching (for larger changes)

```bash
git checkout -b your-name/section-name     # e.g. afsah/family-home-design
# ... make changes ...
git push -u origin your-name/section-name
# Open a Pull Request on GitHub — reviewers are auto-assigned
```

### Individual Contribution Tracking

Every team member commits under their own GitHub account. The following tools provide auditable evidence of individual work for the **20% individual contribution** marking criterion:

- **`git blame`** — shows who wrote each line of every file
- **GitHub contributor graph** — visual breakdown of commits per member
- **PR history** — records who reviewed and approved changes
- **Commit timeline** — shows consistent contribution across all 5 weeks

---

## Automation

This repository uses **GitHub Actions** to automate quality checks and report generation. All workflows run automatically — no manual steps required.

### Build Report (`build-report.yml`)

**Trigger:** Every push to `main` that changes report-related files

**What it does:**

1. Installs [Pandoc](https://pandoc.org/) on a GitHub-hosted runner
2. Converts `08-final-report/report.md` to **DOCX** (Microsoft Word)
3. Attempts to build a **PDF** via LaTeX (non-blocking if LaTeX fonts unavailable)
4. Uploads both files as downloadable **GitHub Artifacts** (retained 30 days)

**How to download:** Go to **Actions** tab > click the latest "Build Report" run > scroll to **Artifacts** > download `report-docx` or `report-pdf`.

### Release (`release.yml`)

**Trigger:** Pushing a git tag matching `v*` (e.g., `v1.0-final`)

**What it does:**

1. Builds DOCX and PDF from the latest `report.md`
2. Creates a **GitHub Release** with auto-generated changelog
3. Attaches both files as release downloads

**How to trigger:**

```bash
git tag v0.1-draft
git push origin v0.1-draft
```

**Recommended tag scheme:**

| Tag | Purpose |
|---|---|
| `v0.1-draft` | First complete draft of all sections |
| `v0.2-reviewed` | After peer review and corrections |
| `v0.3-formatted` | After formatting pass (TNR 11pt, justified) |
| `v1.0-final` | Submission version — 24 April 2026 |

### Markdown Lint (`markdown-lint.yml`)

**Trigger:** Every push or PR to `main` that changes `.md` files

**What it does:** Runs [markdownlint](https://github.com/DavidAnson/markdownlint) to catch formatting issues — broken tables, inconsistent headings, trailing whitespace.

**Configuration:** `.markdownlint.json` at the repo root. Line length (`MD013`) and inline HTML (`MD033`) rules are disabled since our documents use tables and HTML comments.

### Spell Check (`spell-check.yml`)

**Trigger:** Every push or PR to `main` that changes `.md` files

**What it does:** Runs [cspell](https://cspell.org/) with British English and a custom dictionary of technical terms (Zigbee, SMETS2, Tunstall, etc.).

**Configuration:** `.cspell.json` at the repo root. Add new technical terms to the `words` array if the spell checker flags legitimate product names.

### Check Links (`link-checker.yml`)

**Trigger:** Every push or PR to `main` that changes `.md` files + weekly Monday scan

**What it does:** Uses [lychee](https://github.com/lycheeverse/lychee) to find broken internal and external links across all Markdown files.

### Report Word Count (`word-count.yml`)

**Trigger:** Every push or PR that changes `08-final-report/report.md`

**What it does:** Counts words in the report, estimates page count (TNR 11pt ≈ 250 words/page), and **fails the check if the 20-page limit is exceeded**. Results appear in the Actions step summary.

### Auto Label PRs (`auto-label.yml`)

**Trigger:** Every PR opened or updated

**What it does:** Automatically labels PRs based on which files were changed (e.g., `family-home`, `research`, `pm-artefact`, `ci-cd`). Configuration in `.github/labeler.yml`.

### Stale Issues & PRs (`stale.yml`)

**Trigger:** Weekly Monday scan

**What it does:** Marks issues and PRs as `stale` after 7 days of inactivity. Auto-closes after 3 more days unless activity resumes. Issues labelled `critical-path` or `blocked` are exempt.

### Contributor Activity (`contributor-activity.yml`)

**Trigger:** Weekly Friday report + manual dispatch

**What it does:** Generates a per-member contribution summary showing commits, files changed, and lines added/removed for the past 7 days, plus all-time totals. This supports the **20% individual contribution** marking criterion by providing auditable weekly evidence.

---

## Issue Templates

When creating a new issue, GitHub presents three structured templates:

| Template | Use When |
|---|---|
| **Task** | Creating a work package from the WBS — includes project stage, WBS code, housing type, acceptance criteria, priority, and due date |
| **Research** | Assigning an investigation task — includes research questions, output file, and suggested sources |
| **Review Request** | Asking a teammate to review your section — includes review type (accuracy, completeness, formatting, referencing) |
| **Bug / Issue** | Reporting a problem — incorrect data, broken formatting, workflow failure, or missing content |
| **Meeting Agenda** | Preparing a formal or informal weekly meeting — pre-filled agenda items and preparation checklist |
| **Weekly Status** | Individual weekly check-in — completed tasks, next week's plan, blockers, and on-track confidence |

All templates use **GitHub Issue Forms** (YAML) for structured, consistent data entry.

---

## Pull Request Template

Every PR automatically loads a checklist covering:

- File ownership verification (are you editing your own files?)
- Spelling and grammar
- Table rendering in GitHub preview
- Cost figure sources and dates
- Image placement in `04-diagrams/`
- Page limit compliance
- Related issue linking

---

## Project Milestones

Issues are grouped into milestones matching the PRINCE2 stages defined in the PID:

| Milestone | Target | Key Deliverables |
|---|---|---|
| **Stage 1: Initiation** | End of Week 8 | PID, WBS, Gantt chart, 4-Fields Map, tutor sign-off |
| **Stage 2: Research** | End of Week 9 | Platform comparison, device survey, regulatory research |
| **Stage 3: Design** | End of Week 11 | All three housing designs, cost tables, solar integration |
| **Stage 4: Delivery & Presentation** | End of Week 12 | Complete report draft, peer review, formatting, slides, delivery |

Create milestones on GitHub: **Issues** > **Milestones** > **New Milestone**. Assign each issue to the appropriate milestone to track stage completion percentage.

---

## CODEOWNERS

The [CODEOWNERS](.github/CODEOWNERS) file maps file paths to GitHub usernames. When a Pull Request modifies files, GitHub **automatically requests reviews** from the listed owners. This ensures:

- No one's section is changed without their knowledge
- Review requests are assigned without manual effort
- Ownership is transparent and documented

> File ownership is configured in [CODEOWNERS](.github/CODEOWNERS) with each member's GitHub username.

---

## AI Context (`CLAUDE.md`)

The `CLAUDE.md` file provides context for AI coding assistants (Claude, Copilot, etc.) so they understand:

- The project scope and constraints
- Technical decisions already made (Alexa, Aeotec, Drayton Wiser, etc.)
- UK-specific requirements (GBP, UK GDPR, British English)
- The marking criteria and what matters for grading

This means any team member using an AI assistant will get contextually appropriate help without re-explaining the project.

---

## Generating the Report Locally

### Prerequisites

Install [Pandoc](https://pandoc.org/installing.html):

```bash
# Windows (winget)
winget install JohnMacFarlane.Pandoc

# macOS
brew install pandoc

# Ubuntu/Debian
sudo apt install pandoc
```

### Build DOCX

```bash
cd 08-final-report
pandoc report.md -o report.docx --from=gfm --to=docx --toc --number-sections
```

### Build PDF (requires LaTeX)

```bash
# Install LaTeX first:
# Windows: winget install MiKTeX.MiKTeX
# macOS: brew install --cask mactex
# Ubuntu: sudo apt install texlive-latex-recommended texlive-fonts-recommended

cd 08-final-report
pandoc report.md -o report.pdf --from=gfm --to=pdf --toc --number-sections \
  -V geometry:margin=2.5cm -V fontsize=11pt --pdf-engine=pdflatex
```

> You don't need to build locally — GitHub Actions builds automatically on every push. Download from the **Actions** tab.

---

## Key Deadlines

| Milestone | Date | Status |
|---|---|---|
| PID / WBS / Gantt / 4-Fields complete | End of Week 8 | |
| Tutor sign-off (Stage Gate) | End of Week 8 | |
| Research phase complete | End of Week 9 | |
| All designs and cost tables complete | End of Week 11 | |
| Report draft complete | End of Week 12 | |
| **Final report submitted** | **24 April 2026** | |
| **Group presentation** | **20-24 April 2026** | |

---

## Marking Criteria

The full marking scheme is in [`09-references/marking-criteria.md`](09-references/marking-criteria.md). Summary:

| Component | Marks | Key Focus |
|---|---|---|
| Seminar Tutor's individual mark | 20 | Attendance, weekly verbal reports, reflective diary, git contributions |
| Group Presentation | 40 | 5 criteria: systems/devices (5), recommendations (10), PM tools (10), integration (5), benefits/ROI (10) |
| Group Report | 40 | 8 sections × 5 marks: intro, brainstorming, PM artefacts, designs, costing, additional features, conclusion, appendix |

**Report format:** Times New Roman 11pt, justified, max 20 pages (excl. diagrams/images/screenshots)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow guide covering:

- Git workflow (clone, pull, commit, push)
- Branching strategy
- Issue templates and labels
- Pull request process
- Writing standards (UK English, Harvard referencing, TNR 11pt)
- File naming conventions

---

## Technology Stack

| Category | Recommended Platform | Rationale |
|---|---|---|
| Voice assistant | Amazon Alexa (Echo Dot Max / Show 8) | Largest UK device ecosystem, accessibility features |
| Smart hub | Aeotec Smart Home Hub | Zigbee + Z-Wave + Matter, SmartThings-compatible |
| Heating | Drayton Wiser (family/starter), Hive (sheltered) | UK-designed, OpenTherm, multi-zone |
| Solar integration | myenergi eddi + zappi | Surplus solar diversion, EV charging, UK-made |
| Security | Ring + Yale + Eufy | Layered approach: perimeter, access, surveillance |
| Telecare | Tunstall Communicall Vi | UK market leader, 4G backup, BS 8300-compliant |
| Fire safety | FireAngel Pro Connected (family/starter) | Grade D / LD2 compliant, interconnected |
| Protocol priority | Matter > Zigbee > Z-Wave > Wi-Fi > BLE | Interoperability, local control, future-proofing |

---

## Regulatory Compliance

All recommendations comply with:

- **UK GDPR** (Data Protection Act 2018) — data minimisation, privacy by design
- **PSTI Act 2022** (effective April 2024) — unique passwords, security updates, vulnerability disclosure
- **Building Regulations Part L** — energy performance (Future Homes Standard readiness)
- **Building Regulations Part P** — electrical safety (BS 7671, 18th Edition)
- **BS 8300-2:2018** — accessibility in communal areas of sheltered accommodation
- **BS 5839-6** — fire detection and alarm systems
- **Ofgem Smart Meter Rollout** — SMETS2 integration

See `02-research/regulatory-context.md` for the full regulatory analysis and incident response plan.

---

## License

This is a university coursework project. All content is produced for academic assessment purposes only.
