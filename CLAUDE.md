# Smart Home Consulting Project — AI Context

## Project Overview

This is a **university coursework project** (CST2565 — Compliance and Professional Project Management) where a team of 3-4 students acts as consultants recommending smart home technologies for a UK housing estate.

## Key Facts

- **Module:** CST2565, worth 60% of module grade (CW2)
- **Deadline:** 24 April 2026 (report), 20-24 April 2026 (presentation)
- **Deliverables:** 20-page group report (TNR 11pt, justified) + group presentation
- **PM Methodology:** PRINCE2-aligned Waterfall with select Agile practices
- **Setting:** UK only — all prices in GBP, UK regulations, UK retailers

## Housing Types

| Type | Units | Budget Focus |
|---|---|---|
| 4-bed family homes | 6 | Full smart home: security, energy, convenience |
| Sheltered accommodation | 14 residents + warden | Assistive tech, fall detection, telecare |
| 2-bed starter homes | 8 | Cost-optimised essentials with upgrade path |

All homes have solar panels pre-installed by the architect.

## Important Constraints

- **Parts-only costing** — no installation labour costs
- **No software development** — recommendations only, no coding
- **Real UK products** with real GBP prices from UK retailers
- **20-page limit** for the report body (diagrams, appendices, references excluded)
- **Individual contributions must be trackable** via git history (20% of mark)

## Marking Criteria

| Criterion | Weight | Key Requirement |
|---|---|---|
| (a) Knowledge of PM methodology and artefacts | 20% | PID, WBS, Gantt, 4-Fields Map, methodology justification |
| (b) Technical content and research depth | 20% | Platforms, protocols, devices, security, solar integration |
| (c) Report quality and presentation | 20% | Professional writing, formatting, referencing, visuals |
| (d) Group work and meeting evidence | 20% | Minutes, attendance, task allocation, collaboration evidence |
| (e) Individual contribution | 20% | Reflective diary, visible contribution via git blame |

## Repository Structure

```
01-project-management/    PID, WBS, Gantt chart guide, 4-Fields Map
02-research/              Technical research, regulatory context
03-designs/               Per-housing-type specs with cost tables
04-diagrams/              Network diagrams, WBS tree, flowcharts
05-minutes/               Weekly meeting minutes
06-reflective-diaries/    Individual reflective diaries (one per member)
07-appendices/            Datasheets, price screenshots, protocol tables
08-final-report/          Assembled report for pandoc conversion
```

## Technical Decisions Already Made

- **Primary voice assistant:** Amazon Alexa (Echo Dot Max / Echo Show 8)
- **Smart hub:** Aeotec Smart Home Hub (SmartThings-compatible, Zigbee + Z-Wave)
- **Heating:** Drayton Wiser (starter/family), Hive (sheltered — simpler interface)
- **Solar integration:** myenergi eddi (solar diverter) + zappi (EV charger, family only)
- **Telecare:** Tunstall Communicall Vi (sheltered accommodation)
- **Protocol priority:** Matter > Zigbee > Z-Wave > Wi-Fi > Bluetooth LE
- **Fire safety:** FireAngel Pro Connected (family/starter), Grade A system (sheltered)

## Marking Criteria Summary

| Component | Marks | Focus |
|---|---|---|
| Seminar Tutor's individual mark | 20 | Weekly attendance, verbal reports, reflective diary, git contributions |
| **Presentation** | **40** | 5 criteria below |
| (a) Systems, devices, platforms, protocols, security, policies | 5 | Breadth and accuracy of technical coverage |
| (b) Recommendation per housing type with rationale | 10 | Persona-driven, justified, diagrammed |
| (c) PM tools applied (PID, WBS, Gantt, 4-Fields) | 10 | Methodology explanation, not just artefacts pasted |
| (d) Integration of smart devices + challenges | 5 | Protocol interop, Matter, solar integration |
| (e) Tangible/intangible benefits + ROI/payback | 10 | Energy savings, insurance, care costs, payback years |
| **Report** | **40** | 8 sections × 5 marks each (TNR 11pt, justified, max 20 pages) |

See `09-references/marking-criteria.md` for full grade descriptors and self-assessment checklist.

## When Helping with This Project

1. Always use UK English spelling
2. All prices must be real, current, and in GBP
3. Reference UK regulations (UK GDPR, PSTI Act, Building Regs Part L/P)
4. Keep recommendations practical and commercially available
5. Respect the 20-page report limit — be concise, use appendices for detail
6. Every recommendation needs a rationale tied to the housing type's user persona
