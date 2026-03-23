# CST2565 Smart Home Consulting Project

**Module:** CST2565 — Compliance and Professional Project Management
**Academic Year:** 2025/26
**Submission:** 24 April 2026
**Presentation:** 20–24 April 2026

---

## Project Brief

An architectural firm is designing a housing estate with three dwelling types. Our team evaluates, recommends, and costs smart home technologies for each:

| Housing Type | Units | Key Focus |
|---|---|---|
| 4-bedroom family homes | 6 | Convenience, security, energy efficiency |
| Sheltered accommodation | 14 residents + warden | Assistive tech, fall detection, independent living |
| 2-bedroom starter homes | 8 | Affordability, scalability, essential features |

All homes have solar panels. All costs in GBP (parts only, no installation).

---

## Repository Structure

```
01-project-management/     PID, WBS, Gantt, 4-Fields Map
02-research/               Technical research and references
03-designs/                Design specs per housing type + cost summary
04-diagrams/               Network diagrams, WBS tree, flowcharts
05-minutes/                Weekly formal meeting minutes
06-reflective-diaries/     Individual reflective diaries
07-appendices/             Datasheets, price screenshots, supporting docs
08-final-report/           Assembled report + pandoc output
```

---

## Team & File Ownership

| Member | Role | Owns These Files |
|---|---|---|
| [Member A] | Project Manager | `01-project-management/`, `05-minutes/`, intro, conclusion |
| [Member B] | Technical Lead — Family Homes | `03-designs/family-home.md`, protocol research |
| [Member C] | Technical Lead — Sheltered Accommodation | `03-designs/sheltered-accommodation.md`, security research |
| [Member D] | Technical Lead — Starter Homes & Costing | `03-designs/starter-home.md`, `03-designs/estate-cost-summary.md`, appendix |

**Rule:** Do not edit another member's file directly. Open an Issue to discuss changes.

---

## Workflow

```bash
git pull                              # Get latest changes
# ... work on your assigned files ...
git add <your-files>
git commit -m "Descriptive message"
git push
```

---

## Generating the Final Report

```bash
cd 08-final-report/
pandoc report.md -o report.docx --reference-doc=template.docx
```

---

## Key Deadlines

| Milestone | Date |
|---|---|
| PID/WBS/Gantt/4-Fields complete | End of Week 2 |
| Tutor sign-off | End of Week 2 |
| Research phase complete | End of Week 4 |
| All designs complete | End of Week 6 |
| Report draft complete | Week 8 |
| Final report submitted | 24 April 2026 |
| Presentation | 20–24 April 2026 |
