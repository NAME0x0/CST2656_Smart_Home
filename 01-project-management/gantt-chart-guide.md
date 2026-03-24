# Gantt Chart Guide

## Smart Home Consulting Project — CST2565

**Note:** This document provides the task list, durations, dependencies, and milestones you need to build your Gantt chart in MS Project, ProjectLibre, Excel, or any other tool.

---

## Task List for Gantt Chart

Build the chart with the following rows. Summary (parent) rows are **bold**; their children are indented beneath them.

| WBS | Task Name | Start | End | Duration | Owner | Dependencies |
|---|---|---|---|---|---|---|
| **1.1** | **PROJECT MANAGEMENT** | **W8** | **W12** | **5 weeks** | **All** | |
| 1.1.1 | Draft PID | W8 Day 1 | W8 Day 3 | 3 days | Afsah | — |
| 1.1.2 | Create WBS | W8 Day 2 | W8 Day 3 | 2 days | Jake | — |
| 1.1.3 | Create Gantt Chart | W8 Day 3 | W8 Day 4 | 2 days | Afsah | 1.1.2 (WBS must exist first) |
| 1.1.4 | Create 4-Fields Map | W8 Day 3 | W8 Day 5 | 3 days | Afsah | 1.1.2 |
| 1.1.5 | Brainstorming session | W8 Day 1 | W8 Day 2 | 2 days | All | — |
| ★ | **MILESTONE: Tutor Sign-Off** | **W8 Day 5** | | **0 days** | Tutor | 1.1.1, 1.1.2, 1.1.3, 1.1.4 |
| | | | | | | |
| **1.2** | **RESEARCH AND INFORMATION GATHERING** | **W9** | **W9** | **1 week** | **All** | **Tutor Sign-Off** |
| 1.2.1 | Platform ecosystem comparison | W9 Day 1 | W9 Day 3 | 3 days | Jake | Tutor Sign-Off |
| 1.2.3 | Communication protocols research | W9 Day 1 | W9 Day 3 | 3 days | Jake | Tutor Sign-Off |
| 1.2.2a | Device survey: heating & HVAC | W9 Day 1 | W9 Day 3 | 3 days | Syed | Tutor Sign-Off |
| 1.2.2b | Device survey: security & access | W9 Day 1 | W9 Day 3 | 3 days | Eeshitha | Tutor Sign-Off |
| 1.2.2c | Device survey: lighting & appliances | W9 Day 2 | W9 Day 3 | 2 days | Syed | Tutor Sign-Off |
| 1.2.2d | Device survey: sensors | W9 Day 2 | W9 Day 4 | 3 days | Jake | Tutor Sign-Off |
| 1.2.2e | Assistive & independent-living tech survey | W9 Day 2 | W9 Day 5 | 4 days | Eeshitha | Tutor Sign-Off |
| 1.2.2f | Energy monitoring & solar integration survey | W9 Day 2 | W9 Day 4 | 3 days | Syed | Tutor Sign-Off |
| 1.2.4 | Security & privacy research | W9 Day 3 | W9 Day 5 | 3 days | Eeshitha | 1.2.2b |
| 1.2.5 | UK regulatory research | W9 Day 3 | W9 Day 5 | 3 days | Afsah | Tutor Sign-Off |
| ★ | **MILESTONE: Research Phase Complete** | **W9 Day 5** | | **0 days** | All | All 1.2.x tasks |
| | | | | | | |
| **1.3** | **DESIGN: 4-BED FAMILY HOMES** | **W10** | **W10** | **1 week** | **Jake** | **Research Complete** |
| 1.3.1 | Family home user persona | W10 Day 1 | W10 Day 1 | 1 day | Jake | Research Complete |
| 1.3.2 | Platform selection & justification | W10 Day 1 | W10 Day 2 | 2 days | Jake | 1.2.1 |
| 1.3.3 | Device selection with prices | W10 Day 2 | W10 Day 4 | 3 days | Jake | 1.3.2, 1.2.2 |
| 1.3.4 | Solar integration design | W10 Day 3 | W10 Day 4 | 2 days | Jake | 1.2.2f |
| 1.3.5 | Network architecture diagram | W10 Day 4 | W10 Day 5 | 2 days | Jake | 1.3.3 |
| 1.3.6 | Itemised cost table | W10 Day 4 | W10 Day 5 | 2 days | Jake | 1.3.3 |
| | | | | | | |
| **1.4** | **DESIGN: SHELTERED ACCOMMODATION** | **W10** | **W11** | **2 weeks** | **Eeshitha** | **Research Complete** |
| 1.4.1a | Elderly resident user persona | W10 Day 1 | W10 Day 1 | 1 day | Eeshitha | Research Complete |
| 1.4.1b | Warden user persona | W10 Day 1 | W10 Day 2 | 2 days | Eeshitha | Research Complete |
| 1.4.2 | Assistive technology selection | W10 Day 2 | W11 Day 2 | 5 days | Eeshitha | 1.2.2e |
| 1.4.3 | Platform selection (accessibility-first) | W10 Day 3 | W11 Day 2 | 4 days | Eeshitha | 1.2.1 |
| 1.4.4 | Warden monitoring dashboard design | W11 Day 1 | W11 Day 3 | 3 days | Eeshitha | 1.4.2 |
| 1.4.5 | Device selection (per-room + communal) | W11 Day 2 | W11 Day 4 | 3 days | Eeshitha | 1.4.3 |
| 1.4.7 | Network architecture diagram | W11 Day 3 | W11 Day 5 | 3 days | Eeshitha | 1.4.5 |
| 1.4.8 | Itemised cost table | W11 Day 4 | W11 Day 5 | 2 days | Eeshitha | 1.4.5 |
| | | | | | | |
| **1.5** | **DESIGN: 2-BED STARTER HOMES** | **W10** | **W11** | **2 weeks** | **Syed** | **Research Complete** |
| 1.5.1 | First-time buyer user persona | W10 Day 1 | W10 Day 1 | 1 day | Syed | Research Complete |
| 1.5.2 | Platform selection (cost-optimised) | W10 Day 1 | W10 Day 2 | 2 days | Syed | 1.2.1 |
| 1.5.3 | Essential vs optional device tiers | W10 Day 2 | W10 Day 5 | 4 days | Syed | 1.5.2, 1.2.2 |
| 1.5.5 | Network architecture diagram | W11 Day 1 | W11 Day 2 | 2 days | Syed | 1.5.3 |
| 1.5.6 | Itemised cost table (both tiers) | W11 Day 2 | W11 Day 4 | 3 days | Syed | 1.5.3 |
| | | | | | | |
| **1.6** | **COST-BENEFIT ANALYSIS** | **W11** | **W11** | **1 week** | **Syed** | **1.3.6, 1.4.8, 1.5.6** |
| 1.6.1 | Consolidated estate-wide cost summary | W11 Day 3 | W11 Day 4 | 2 days | Syed | 1.3.6, 1.4.8, 1.5.6 |
| 1.6.2 | Tangible benefits quantification | W11 Day 4 | W11 Day 5 | 2 days | Syed | 1.6.1 |
| 1.6.3 | Intangible benefits assessment | W11 Day 4 | W11 Day 5 | 2 days | Afsah | 1.6.1 |
| 1.6.4 | ROI / payback period calculation | W11 Day 5 | W11 Day 5 | 1 day | Syed | 1.6.2 |
| 1.6.5 | Additional features catalogue | W11 Day 3 | W11 Day 5 | 3 days | Syed | 1.5.3 |
| ★ | **MILESTONE: All Designs Complete** | **W11 Day 5** | | **0 days** | All | All 1.3-1.6 tasks |
| | | | | | | |
| **1.7** | **REPORT PRODUCTION** | **W12** | **W12** | **1 week** | **All** | **All Designs Complete** |
| 1.7.1 | Write: Introduction & stakeholders | W12 Day 1 | W12 Day 1 | 1 day | Afsah | All Designs Complete |
| 1.7.2 | Write: Brainstorming & platforms | W12 Day 1 | W12 Day 1 | 1 day | Afsah | All Designs Complete |
| 1.7.3 | Write: PM Artefacts section | W12 Day 1 | W12 Day 2 | 2 days | Afsah | All Designs Complete |
| 1.7.4 | Write: Design sections (all 3 types) | W12 Day 1 | W12 Day 2 | 2 days | Jake, Eeshitha, Syed | All Designs Complete |
| 1.7.5 | Write: Costing section | W12 Day 2 | W12 Day 2 | 1 day | Syed | 1.6.1 |
| 1.7.6 | Write: Additional features section | W12 Day 2 | W12 Day 3 | 2 days | Syed | 1.6.5 |
| 1.7.7 | Write: Review & conclusion | W12 Day 3 | W12 Day 3 | 1 day | Afsah | 1.7.1–1.7.6 |
| 1.7.8 | Compile appendix | W12 Day 2 | W12 Day 3 | 2 days | Syed | 1.7.4, 1.7.5 |
| 1.7.9 | Peer review of all sections | W12 Day 3 | W12 Day 3 | 1 day | All | 1.7.1–1.7.8 |
| 1.7.10 | Formatting, TOC, references, proofread | W12 Day 3 | W12 Day 4 | 2 days | Afsah | 1.7.9 |
| ★ | **MILESTONE: Report Draft Complete** | **W12 Day 4** | | **0 days** | All | 1.7.10 |
| | | | | | | |
| **1.8** | **PRESENTATION** | **W12** | **W12** | **1 week** | **All** | **Report Draft** |
| 1.8.1 | Design slides and allocate sections | W12 Day 3 | W12 Day 3 | 1 day | All | 1.7.4 |
| 1.8.2 | Prepare visual aids | W12 Day 3 | W12 Day 4 | 2 days | All | 1.8.1 |
| 1.8.3 | Rehearsal (timed) | W12 Day 5 | W12 Day 5 | 1 day | All | 1.8.1, 1.8.2 |
| ★ | **MILESTONE: Final Report Submitted** | **24 April 2026** | | **0 days** | All | 1.7.10 |
| 1.8.4 | Final presentation delivery | W12 (20–24 April) | | 1 day | All | 1.8.3 |

---

## Key Dependencies (Critical Path)

The critical path for this project is:

```
PID → Tutor Sign-Off → Platform/Protocol Research → Design (all 3 types)
→ Cost Tables → Report Sections → Peer Review → Formatting → Submission
```

Any delay on this chain directly delays the submission date. Tasks off the critical path (e.g., regulatory research, additional features catalogue) have float and can slip without affecting the deadline.

---

## Milestones Summary

| Milestone | Target Date | Predecessor |
|---|---|---|
| Tutor Sign-Off on PID & Plan | End of Week 8 | PID, WBS, Gantt, 4-Fields complete |
| Research Phase Complete | End of Week 9 | All research tasks |
| All Designs Complete | End of Week 11 | All design + cost-benefit tasks |
| Report Draft Complete | Week 12 Day 4 | All report sections + peer review + formatting |
| Final Report Submitted | 24 April 2026 | Final proofread |
| Presentation Delivered | 20–24 April 2026 | Rehearsal complete |

---

## How to Build This in Your Chosen Tool

### Microsoft Project / ProjectLibre

1. Enter each task row with the WBS code as a custom field
2. Set summary tasks as parent rows; indent children beneath
3. Enter Start/End dates or durations; let the tool calculate
4. Add dependencies using the Predecessors column (e.g., task 5 depends on task 3: enter "3" in Predecessors)
5. Insert milestones as tasks with 0 duration
6. Assign resources (member names) in the Resource column
7. The tool will auto-highlight the critical path in red

### Excel

1. Create columns: WBS Code | Task Name | Owner | Start Week | End Week | W8 | W9 | W10 | W11 | W12
2. For each task, fill/colour the cells in the week columns that the task spans
3. Use different colours per team member
4. Draw arrows manually (using shapes) for key dependencies
5. Mark milestones with a diamond shape (◆) in the appropriate week column
6. Bold the summary rows

---

## Notes

- Update this Gantt chart at each formal meeting if the plan changes
- Record any schedule changes in the meeting minutes (the brief requires "minuted agreed formal changes to the plan")
- Include both the original and final version in the report to show how the plan evolved
