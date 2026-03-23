# Gantt Chart Guide

## Smart Home Consulting Project — CST2565

**Note:** This document provides the task list, durations, dependencies, and milestones you need to build your Gantt chart in MS Project, ProjectLibre, Excel, or any other tool.

---

## Task List for Gantt Chart

Build the chart with the following rows. Summary (parent) rows are **bold**; their children are indented beneath them.

| WBS | Task Name | Start | End | Duration | Owner | Dependencies |
|---|---|---|---|---|---|---|
| **1.1** | **PROJECT MANAGEMENT** | **W1** | **W8** | **8 weeks** | **All** | |
| 1.1.1 | Draft PID | W1 Day 1 | W1 Day 5 | 5 days | [Member A] | — |
| 1.1.2 | Create WBS | W1 Day 3 | W2 Day 2 | 4 days | [Member B] | — |
| 1.1.3 | Create Gantt Chart | W1 Day 5 | W2 Day 3 | 3 days | [Member A] | 1.1.2 (WBS must exist first) |
| 1.1.4 | Create 4-Fields Map | W2 Day 1 | W2 Day 4 | 4 days | [Member A] | 1.1.2 |
| 1.1.5 | Brainstorming session | W1 Day 1 | W1 Day 3 | 3 days | All | — |
| ★ | **MILESTONE: Tutor Sign-Off** | **W2 Day 5** | | **0 days** | Tutor | 1.1.1, 1.1.2, 1.1.3, 1.1.4 |
| | | | | | | |
| **1.2** | **RESEARCH AND INFORMATION GATHERING** | **W3** | **W4** | **2 weeks** | **All** | **Tutor Sign-Off** |
| 1.2.1 | Platform ecosystem comparison | W3 Day 1 | W3 Day 5 | 5 days | [Member B] | Tutor Sign-Off |
| 1.2.3 | Communication protocols research | W3 Day 1 | W3 Day 5 | 5 days | [Member B] | Tutor Sign-Off |
| 1.2.2a | Device survey: heating & HVAC | W3 Day 1 | W3 Day 5 | 5 days | [Member D] | Tutor Sign-Off |
| 1.2.2b | Device survey: security & access | W3 Day 1 | W3 Day 5 | 5 days | [Member C] | Tutor Sign-Off |
| 1.2.2c | Device survey: lighting & appliances | W3 Day 3 | W4 Day 2 | 4 days | [Member D] | Tutor Sign-Off |
| 1.2.2d | Device survey: sensors | W3 Day 3 | W4 Day 3 | 5 days | [Member B] | Tutor Sign-Off |
| 1.2.2e | Assistive & independent-living tech survey | W3 Day 3 | W4 Day 4 | 6 days | [Member C] | Tutor Sign-Off |
| 1.2.2f | Energy monitoring & solar integration survey | W3 Day 3 | W4 Day 3 | 5 days | [Member D] | Tutor Sign-Off |
| 1.2.4 | Security & privacy research | W4 Day 1 | W4 Day 5 | 5 days | [Member C] | 1.2.2b |
| 1.2.5 | UK regulatory research | W4 Day 1 | W4 Day 4 | 4 days | [Member A] | Tutor Sign-Off |
| ★ | **MILESTONE: Research Phase Complete** | **W4 Day 5** | | **0 days** | All | All 1.2.x tasks |
| | | | | | | |
| **1.3** | **DESIGN: 4-BED FAMILY HOMES** | **W5** | **W5** | **1 week** | **[Member B]** | **Research Complete** |
| 1.3.1 | Family home user persona | W5 Day 1 | W5 Day 1 | 1 day | [Member B] | Research Complete |
| 1.3.2 | Platform selection & justification | W5 Day 1 | W5 Day 2 | 2 days | [Member B] | 1.2.1 |
| 1.3.3 | Device selection with prices | W5 Day 2 | W5 Day 4 | 3 days | [Member B] | 1.3.2, 1.2.2 |
| 1.3.4 | Solar integration design | W5 Day 3 | W5 Day 4 | 2 days | [Member B] | 1.2.2f |
| 1.3.5 | Network architecture diagram | W5 Day 4 | W5 Day 5 | 2 days | [Member B] | 1.3.3 |
| 1.3.6 | Itemised cost table | W5 Day 4 | W5 Day 5 | 2 days | [Member B] | 1.3.3 |
| | | | | | | |
| **1.4** | **DESIGN: SHELTERED ACCOMMODATION** | **W5** | **W6** | **2 weeks** | **[Member C]** | **Research Complete** |
| 1.4.1a | Elderly resident user persona | W5 Day 1 | W5 Day 1 | 1 day | [Member C] | Research Complete |
| 1.4.1b | Warden user persona | W5 Day 1 | W5 Day 2 | 2 days | [Member C] | Research Complete |
| 1.4.2 | Assistive technology selection | W5 Day 2 | W6 Day 2 | 5 days | [Member C] | 1.2.2e |
| 1.4.3 | Platform selection (accessibility-first) | W5 Day 3 | W6 Day 2 | 4 days | [Member C] | 1.2.1 |
| 1.4.4 | Warden monitoring dashboard design | W6 Day 1 | W6 Day 3 | 3 days | [Member C] | 1.4.2 |
| 1.4.5 | Device selection (per-room + communal) | W6 Day 2 | W6 Day 4 | 3 days | [Member C] | 1.4.3 |
| 1.4.7 | Network architecture diagram | W6 Day 3 | W6 Day 5 | 3 days | [Member C] | 1.4.5 |
| 1.4.8 | Itemised cost table | W6 Day 4 | W6 Day 5 | 2 days | [Member C] | 1.4.5 |
| | | | | | | |
| **1.5** | **DESIGN: 2-BED STARTER HOMES** | **W5** | **W6** | **2 weeks** | **[Member D]** | **Research Complete** |
| 1.5.1 | First-time buyer user persona | W5 Day 1 | W5 Day 1 | 1 day | [Member D] | Research Complete |
| 1.5.2 | Platform selection (cost-optimised) | W5 Day 1 | W5 Day 2 | 2 days | [Member D] | 1.2.1 |
| 1.5.3 | Essential vs optional device tiers | W5 Day 2 | W5 Day 5 | 4 days | [Member D] | 1.5.2, 1.2.2 |
| 1.5.5 | Network architecture diagram | W6 Day 1 | W6 Day 2 | 2 days | [Member D] | 1.5.3 |
| 1.5.6 | Itemised cost table (both tiers) | W6 Day 2 | W6 Day 4 | 3 days | [Member D] | 1.5.3 |
| | | | | | | |
| **1.6** | **COST-BENEFIT ANALYSIS** | **W6** | **W6** | **1 week** | **[Member D]** | **1.3.6, 1.4.8, 1.5.6** |
| 1.6.1 | Consolidated estate-wide cost summary | W6 Day 3 | W6 Day 4 | 2 days | [Member D] | 1.3.6, 1.4.8, 1.5.6 |
| 1.6.2 | Tangible benefits quantification | W6 Day 4 | W6 Day 5 | 2 days | [Member D] | 1.6.1 |
| 1.6.3 | Intangible benefits assessment | W6 Day 4 | W6 Day 5 | 2 days | [Member A] | 1.6.1 |
| 1.6.4 | ROI / payback period calculation | W6 Day 5 | W6 Day 5 | 1 day | [Member D] | 1.6.2 |
| 1.6.5 | Additional features catalogue | W6 Day 3 | W6 Day 5 | 3 days | [Member D] | 1.5.3 |
| ★ | **MILESTONE: All Designs Complete** | **W6 Day 5** | | **0 days** | All | All 1.3-1.6 tasks |
| | | | | | | |
| **1.7** | **REPORT PRODUCTION** | **W7** | **W8** | **2 weeks** | **All** | **All Designs Complete** |
| 1.7.1 | Write: Introduction & stakeholders | W7 Day 1 | W7 Day 2 | 2 days | [Member A] | All Designs Complete |
| 1.7.2 | Write: Brainstorming & platforms | W7 Day 1 | W7 Day 2 | 2 days | [Member A] | All Designs Complete |
| 1.7.3 | Write: PM Artefacts section | W7 Day 2 | W7 Day 3 | 2 days | [Member A] | All Designs Complete |
| 1.7.4 | Write: Design sections (all 3 types) | W7 Day 1 | W7 Day 4 | 4 days | [B, C, D] | All Designs Complete |
| 1.7.5 | Write: Costing section | W7 Day 3 | W7 Day 4 | 2 days | [Member D] | 1.6.1 |
| 1.7.6 | Write: Additional features section | W7 Day 4 | W7 Day 5 | 2 days | [Member D] | 1.6.5 |
| 1.7.7 | Write: Review & conclusion | W7 Day 5 | W8 Day 1 | 2 days | [Member A] | 1.7.1–1.7.6 |
| 1.7.8 | Compile appendix | W7 Day 3 | W8 Day 1 | 3 days | [Member D] | 1.7.4, 1.7.5 |
| 1.7.9 | Peer review of all sections | W8 Day 1 | W8 Day 2 | 2 days | All | 1.7.1–1.7.8 |
| 1.7.10 | Formatting, TOC, references, proofread | W8 Day 2 | W8 Day 4 | 3 days | [Member A] | 1.7.9 |
| ★ | **MILESTONE: Report Draft Complete** | **W8 Day 4** | | **0 days** | All | 1.7.10 |
| | | | | | | |
| **1.8** | **PRESENTATION** | **W8** | **W12** | | **All** | **Report Draft** |
| 1.8.1 | Design slides and allocate sections | W8 Day 2 | W8 Day 3 | 2 days | All | 1.7.4 |
| 1.8.2 | Prepare visual aids | W8 Day 3 | W8 Day 4 | 2 days | All | 1.8.1 |
| 1.8.3 | Rehearsal (timed) | W8 Day 5 | W8 Day 5 | 1 day | All | 1.8.1, 1.8.2 |
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
| Tutor Sign-Off on PID & Plan | End of Week 2 | PID, WBS, Gantt, 4-Fields complete |
| Research Phase Complete | End of Week 4 | All research tasks |
| All Designs Complete | End of Week 6 | All design + cost-benefit tasks |
| Report Draft Complete | Week 8 Day 4 | All report sections + peer review + formatting |
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

1. Create columns: WBS Code | Task Name | Owner | Start Week | End Week | W1 | W2 | W3 | W4 | W5 | W6 | W7 | W8
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
