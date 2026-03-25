# Project Initiation Document (PID)

## Smart Home Consulting Project

| Field | Detail |
|---|---|
| **Document Version** | 1.0 |
| **Date Created** | [25th March, 2026 - Week 8] |
| **Last Revised** | [25th March, 2026] |
| **Module** | CST2565 - Compliance and Professional Project Management |
| **Academic Year** | 2025/26 |

### Team Members

| Name | Role | Contact |
|---|---|---|
| Afsah | Project Manager / [Technical Area] | [Email] |
| Jake | [Role] / [Technical Area] | [Email] |
| Eeshitha | [Role] / [Technical Area] | [Email] |
| Syed | [Role] / [Technical Area] | [Email] |

### Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Week 8 Date] | Afsah | Initial PID created |
| 1.1 | [Week 9 Date] | Afsah | Updated after tutor feedback |

---

## 1. Project Background and Context

The UK residential sector accounts for approximately 15% of the nation's total carbon emissions, and the government's net zero target for 2050 has placed significant pressure on new-build housing to incorporate energy-efficient and smart technologies from the outset. Smart home systems — encompassing connected devices, automation platforms, and IoT sensors — offer measurable benefits in energy management, home security, and quality of life. The global smart home market has grown rapidly, driven by ecosystems from Google (Nest), Amazon (Alexa/Echo), and Apple (HomeKit), alongside the emergence of the Matter interoperability standard.

An architectural firm is designing a small housing estate consisting of three distinct housing types:

- **6x 4-bedroom family homes** — targeting families who value convenience, security, and energy efficiency
- **Sheltered accommodation for 14 elderly residents** (with warden) — where occupants may have disabilities and require assistive technology to support independent living
- **8x 2-bedroom affordable starter homes** — targeting first-time buyers where cost-effectiveness is paramount

All homes will have solar panels as standard. The firm has engaged our team to evaluate, recommend, and cost appropriate smart home technologies for each housing type.

This project sits within a broader UK context including Ofgem's smart meter rollout, UK GDPR data privacy requirements for IoT devices, Building Regulations Part L (conservation of fuel and power) and Part P (electrical safety), and accessibility standards including BS 8300.

---

## 2. Project Management Methodology

### Selected Approach: PRINCE2-Aligned Waterfall with Select Agile Practices

#### Methodology Selection Rationale

The team evaluated four candidate methodologies — Waterfall, Agile (Scrum), Hybrid, and PRINCE2 — against the specific characteristics of this project before selecting our approach.

| Project Characteristic | Methodology Implication |
|---|---|
| Fixed scope (defined by client brief) | Requirements are stable; Agile's core advantage of adapting to changing requirements does not apply |
| Fixed deadline (24 April 2026, non-negotiable) | Milestone-driven planning is essential; iterative delivery cycles cannot flex the end date |
| Prescribed deliverables (report + presentation with defined sections) | No concept of a "minimum viable product" or incremental delivery applies |
| Sequential dependencies (research must precede design; design must precede report) | Work is inherently linear, suiting a phased approach |
| Required artefacts (PID, WBS, Gantt chart, 4-Fields Map) | These are native to PRINCE2 and Waterfall methodologies |
| UK academic and professional context | PRINCE2 is the UK national standard for project management (developed by the Office of Government Commerce); its use demonstrates domain-appropriate practice |
| Tutor sign-off required before proceeding | This functions as a PRINCE2 stage gate — a formal authorisation point between stages |
| Small team (3–4 members) over 8 weeks | Insufficient scale for Agile ceremonies (sprint planning, daily stand-ups, sprint reviews, retrospectives) to add value proportionate to their time cost |

#### Why Alternatives Were Rejected

**Agile (Scrum):** Scrum is designed for iterative software development where requirements evolve through customer feedback. This project delivers a single report and presentation on a fixed date — there is no increment to demonstrate to stakeholders at the end of each sprint, and no Product Owner reprioritising a backlog. Two-week sprints within an 8-week timeline would create four cycles of ceremony overhead (planning, review, retrospective) that consume time without improving outcomes. Scrum was therefore rejected as the primary methodology.

**Kanban:** Kanban is a task visualisation and flow management tool rather than a complete project management methodology. It does not provide the governance structure (stage gates, risk management, defined roles, quality criteria) that this project requires. However, we adopted a Kanban board as a visual task-tracking tool within our chosen methodology (see "Adopted Agile Practices" below).

**Hybrid (Agile + Waterfall):** A hybrid approach is appropriate when part of a project has uncertain or evolving requirements (suited to Agile) while another part has fixed, well-understood requirements (suited to Waterfall). In this project, the entire scope is defined by the client brief — there is no uncertain component that would benefit from iterative exploration. Adopting a hybrid label without genuine justification would be methodologically unsound.

**Full PRINCE2:** The complete PRINCE2 framework comprises 7 processes, 7 themes, and 7 principles, with governance artefacts including exception reports, change authority procedures, product descriptions, and formal quality review techniques. While powerful for large-scale projects, applying the full PRINCE2 framework to a 3–4 person team over 8 weeks would introduce disproportionate administrative overhead. Instead, we adopted the core PRINCE2 concepts at a scale appropriate to this project.

#### PRINCE2 Concepts Applied

| PRINCE2 Concept | Application in This Project |
|---|---|
| **Project Initiation Document** | This document — the formal authorisation and reference point for the project |
| **Manage by Stages** | Four defined stages: Initiation (Week 8), Research (Week 9), Design (Weeks 10–11), Delivery & Presentation (Week 12) |
| **Stage Gates** | Tutor sign-off at end of Week 8 authorises transition from Initiation to Research; milestone reviews at the end of each stage |
| **Manage by Exception** | If a task slips beyond its planned completion, the deviation is escalated at the next formal meeting, minuted, and the plan is formally updated. Only significant deviations are escalated to the tutor |
| **Defined Roles and Responsibilities** | Project Manager, Technical Leads, Report Editor — each with clear accountability (see Section 10: Roles and Responsibilities) |
| **Business Case** | The cost-benefit analysis and ROI calculations in the report serve this function, justifying the smart home investment to the architectural firm |
| **Risk Management** | Formal risk register with likelihood, impact, and mitigation strategies (see Section 9) |
| **Quality in a Project Environment** | Quality standards defined per task in the 4-Fields Map; peer review process defined in Quality Assurance section |
| **Lessons Learned** | Captured through individual reflective diaries (ongoing) and the Review & Conclusion section of the report |

#### Adopted Agile Practices

While the primary methodology is PRINCE2-aligned Waterfall, the following practices were borrowed from Agile thinking to improve team collaboration:

| Practice | Implementation |
|---|---|
| **Kanban board** | Visual task tracking using GitHub Projects (Board view) with columns: To Do, In Progress, Review, Done. Updated at each meeting via GitHub Issues |
| **Weekly progress updates** | Each team member reports on completed work and blockers at the formal weekly meeting — functionally equivalent to a stand-up |
| **Iterative reflection** | Individual reflective diaries capture lessons learned throughout the project, not only at the end — aligning with the Agile principle of continuous improvement |
| **Timeboxing** | Each project stage has a fixed duration (1–2 weeks). If work cannot be completed within the timebox, scope is adjusted (e.g., reducing research depth) rather than extending the deadline |

#### Project Stages

```
Stage 1: INITIATION (Week 8)
  ├── Brainstorming and stakeholder analysis
  ├── PID, WBS, Gantt chart, 4-Fields Map
  └── STAGE GATE: Tutor sign-off ◆

Stage 2: RESEARCH (Week 9)
  ├── Platform and protocol research
  ├── Device survey (all categories)
  ├── Security, regulatory, and standards research
  └── MILESTONE: Research phase complete ◆

Stage 3: DESIGN (Weeks 10–11)
  ├── Family home design and costing
  ├── Sheltered accommodation design and costing
  ├── Starter home design and costing
  ├── Cost-benefit analysis and additional features
  └── MILESTONE: All designs complete ◆

Stage 4: DELIVERY & PRESENTATION (Week 12)
  ├── Report writing (all sections)
  ├── Peer review, formatting, and proofreading
  ├── Presentation preparation and rehearsal
  └── MILESTONE: Report submitted (24 April 2026) ◆
```

---

## 3. Project Objectives

All objectives follow the SMART framework (Specific, Measurable, Achievable, Relevant, Time-bound):

1. **Platform Evaluation:** Identify and compare a minimum of 3 smart home platform ecosystems (e.g., Google Home, Amazon Alexa, Apple HomeKit, Matter/Thread) against criteria of interoperability, cost, security, and accessibility, by the end of Week 9.

2. **Family Home Design:** Produce a costed smart home specification for the 4-bedroom family homes, including platform selection, device recommendations, network architecture diagram, and itemised cost table in GBP, by the end of Week 10.

3. **Sheltered Accommodation Design:** Evaluate and recommend appropriate fall-detection, emergency response, warden monitoring, and independent-living technologies for the sheltered accommodation block housing 14 elderly residents, with full costing, by the end of Week 11.

4. **Starter Home Design:** Produce a cost-optimised smart home specification for the 2-bedroom starter homes, distinguishing essential features from optional upgrades, with full costing, by the end of Week 11.

5. **Solar Integration:** For all three housing types, design and document how solar panel output data can be integrated with smart home devices to optimise energy usage (e.g., triggering appliances when surplus energy is available), by the end of Week 11.

6. **Security Analysis:** Document authentication, encryption, and data privacy considerations for all recommended systems, including incident response and recovery plans, by the end of Week 11.

7. **Report Delivery:** Produce a complete group report of no more than 20 pages (Times New Roman 11pt, justified) with full referencing, table of contents, and appendices, submitted by 24th April 2026.

8. **Presentation Delivery:** Deliver a group presentation covering all five marking criteria (a-e) during the week of 20th-24th April 2026.

---

## 4. Project Scope

### In Scope

- Research into smart home platforms, protocols, devices, and sensors
- Technology recommendations tailored to each of the three housing types
- Security analysis: authentication, encryption, network segmentation, IoT data privacy
- Incident response and recovery planning
- Solar panel integration with smart home automation
- Itemised costing of all recommended hardware components in GBP (parts only)
- Identification of additional desirable features available at extra cost to purchasers
- Cost-benefit analysis with estimated time to recover costs
- Project management documentation (PID, WBS, Gantt chart, 4-Fields Map)
- Meeting minutes and individual reflective diaries
- Group report and group presentation

### Out of Scope

- Physical installation or construction
- Installation labour costs (explicitly excluded by brief)
- Software development or coding
- Network infrastructure outside the home boundary (broadband is assumed available)
- Purchasing decisions (recommendations only)
- Solar panel selection or specification (provided as standard by the architect)
- Post-occupancy maintenance planning
- Legal contracts or procurement

---

## 5. Deliverables

| Deliverable | Format | Due |
|---|---|---|
| Project Initiation Document (this document) | Word/PDF | Week 8 |
| Work Breakdown Structure | Indented list + tree diagram | Week 8 |
| Gantt Chart | MS Project / Excel | Week 8 |
| 4-Fields Map | Table (Word/Excel) | Week 8 |
| Weekly Meeting Minutes | Word document per meeting | Weeks 8-12 |
| Individual Reflective Diaries | Personal document per member | Ongoing, shown weekly |
| Group Technical Report | Word, TNR 11pt, max 20 pages + appendices | 24 April 2026 |
| Group Presentation | PowerPoint / slides | 20-24 April 2026 |
| Appendices | Data sheets, cost tables, references | With report |

---

## 6. Stakeholder Analysis

| Stakeholder | Interest | Influence | Key Concern | Engagement Strategy |
|---|---|---|---|---|
| **Architectural Firm** (client) | Primary commissioner; needs feasible, attractive tech specs for marketing the estate | High | Technical integration with building design; aesthetic impact; cost proportionality | Represented via the project brief; design recommendations aligned to build constraints |
| **Families (4-bed homes)** | End users; quality of life, convenience, security | Low (no direct contact) | Ease of use; cost of ownership; data privacy; child safety | Represented via user persona analysis; family-oriented feature selection |
| **Sheltered Accommodation Owner/Warden** | Operational responsibility; duty of care | Medium | System reliability; emergency alerting; ease of warden monitoring; maintenance burden | Requirements derived from care sector best practice; warden dashboard design |
| **Elderly Residents (14 people)** | Direct users; independence, safety, dignity | Low (no direct contact) | Accessibility; non-intrusiveness; simplicity of interaction; fall response time | Represented via accessibility standards (BS 8300); assistive tech selection |
| **First-time Buyers (starter homes)** | End users; affordability, value for money | Low | Upfront cost; future expandability; resale value impact | Cost-optimised design with upgrade path |
| **Energy Suppliers / Grid** | Smart meter integration; demand response | Low | Interoperability with smart meters; compliance with Ofgem standards | Design incorporates Ofgem-compliant smart metering |
| **Insurance Providers** | Security systems may affect premiums | Low | Verified security devices; monitoring capability | Selection of insurance-recognised security products where possible |
| **Local Authority / Building Control** | Regulatory compliance | Medium | Building Regulations Part L, Part P compliance | Regulatory research in Week 9; compliance noted in recommendations |
| **Seminar Tutor** | Academic assessor; project governance | High | Evidence of PM methodology; weekly progress; individual contributions | Weekly formal meetings; PID sign-off; reflective diaries |

---

## 7. Assumptions

1. All homes have access to high-bandwidth broadband (as stated in the brief)
2. The task is set in the UK; all costs in pounds sterling
3. Solar panels are pre-specified by the architect; we do not select or cost the panels, only design their integration with smart devices
4. The architectural firm will make final installation and purchasing decisions; we provide recommendations only
5. All pricing is sourced from UK retailers and manufacturer websites, reflecting 2025/26 availability
6. Group members have equal access to university library resources and the internet
7. The sheltered accommodation is a single building with 14 individual rooms/units and shared spaces, with a resident warden
8. "Parts only" costing means retail price of devices and components, excluding wiring, installation labour, and commissioning
9. The estate is a new build; no legacy systems or retrofitting constraints apply

---

## 8. Constraints

| Constraint | Impact |
|---|---|
| 5-week project duration (Weeks 8–12) | Limits depth of research; requires disciplined prioritisation |
| Group size: 3-4 members | Work must be divided efficiently; all members must contribute equally |
| Report maximum: 20 pages (excl. diagrams/images/screenshots) | Demands concise writing; detailed data goes in appendices |
| Costs in GBP only; no installation costs | Simplifies costing but limits accuracy of total project cost |
| Formal seminar meetings required weekly | Fixed time commitment; attendance directly affects individual marks (20%) |
| Times New Roman 11pt, justified | Fixed formatting requirement |

---

## 9. Risk Register

| # | Risk Description | Likelihood | Impact | Risk Level | Mitigation Strategy | Owner |
|---|---|---|---|---|---|---|
| R1 | A team member fails to complete allocated tasks on time | Medium | High | **High** | Weekly task review at formal meetings; early escalation to tutor; workload redistribution if needed | Project Manager |
| R2 | Technology prices change between research and submission date | Low | Medium | Low | Use date-stamped screenshots of pricing; note "prices as of [date]" in cost tables | All |
| R3 | Smart home platform discontinues product or changes compatibility | Low | Medium | Low | Prefer established, widely-adopted platforms; cite manufacturer roadmaps and Matter/Thread commitment | Technical Leads |
| R4 | Scope creep into installation design, software development, or infrastructure outside the home | Medium | Medium | **Medium** | Refer to scope exclusions (Section 3); tutor sign-off on PID enforces boundaries | Project Manager |
| R5 | Group scheduling conflicts reduce informal meeting attendance | High | Low | Medium | Agree all meeting times in Week 8; use shared calendar; virtual meetings as backup | All |
| R6 | IoT security vulnerabilities discovered in recommended products during project | Low | High | Medium | Include incident response plan in report; recommend firmware update policies; note known CVEs | Security Lead |
| R7 | Insufficient differentiation between the three housing types | Medium | High | **High** | Assign separate team members to each housing type; ensure requirements analysis starts from user personas, not just device lists | Technical Leads |
| R8 | Report exceeds 20-page limit | Medium | Medium | Medium | Track page count from Week 11; move detailed data to appendices; Report Editor enforces limit | Report Editor |
| R9 | Interoperability issues between recommended devices from different manufacturers | Medium | Medium | Medium | Prioritise Matter/Thread-compatible devices; test compatibility claims against manufacturer documentation | Technical Leads |
| R10 | Vendor lock-in: recommending a single-ecosystem approach that limits future flexibility | Medium | Medium | Medium | Evaluate multi-protocol hubs; document lock-in risks in report; recommend open standards where feasible | All |

---

## 10. Roles and Responsibilities

> **Note:** Adjust names and allocations to match your actual group composition (3 or 4 members).

| Role | Name | Primary Responsibilities | Technical Area |
|---|---|---|---|
| **Project Manager** | Afsah | Coordinates meetings; maintains WBS/Gantt/4-Fields; writes minutes; manages report timeline; liaison with tutor | Introduction; stakeholder analysis; review & conclusion |
| **Technical Lead — Family Homes** | Jake | Researches platforms, protocols, and devices for 4-bedroom family homes; produces design and cost table | Family home design; protocol comparison; network diagrams |
| **Technical Lead — Sheltered Accommodation** | Eeshitha | Researches assistive technologies, fall detection, warden monitoring for elderly residents; produces design and cost table | Sheltered accommodation design; security research; incident response |
| **Technical Lead — Starter Homes & Costing** | Syed | Researches cost-optimised solutions for 2-bedroom starter homes; consolidates all cost tables; identifies additional features | Starter home design; consolidated costing section; appendix/data sheets |
| **Report Editor** (shared or rotated) | Afsah (rotated) | Consolidates all sections; enforces formatting (TNR 11, justified); manages references; proofreads | Final formatting; table of contents; reference list |

All members contribute to:

- Weekly meeting attendance and verbal reports
- Individual reflective diaries
- Presentation preparation and delivery
- Peer review of each other's report sections

---

## 11. Communication Plan

| Channel | Purpose | Frequency |
|---|---|---|
| **Formal seminar meeting** (in-person, with tutor) | Progress reports; task allocation; plan review; minutes taken | Weekly (seminar slot) |
| **Informal meeting** (virtual — Google Meet / Discord) | Draft review; collaborative work; problem-solving | Weekly (agreed day/time) |
| **WhatsApp group chat** | Quick questions; sharing links/resources; scheduling | As needed |
| **GitHub repository** ([CST2565_Smart_Home](https://github.com/NAME0x0/CST2656_Smart_Home)) | All project files; version control via git; individual contributions tracked via `git blame` and commit history | Ongoing — all written work committed here |
| **GitHub Issues** | Task assignment; blocker tracking; technical discussions (threaded comments) | Created from WBS; updated at each meeting |
| **GitHub Projects board** | Visual Kanban (To Do → In Progress → Review → Done); Timeline view for Gantt tracking | Updated at each meeting |
| **Email** | Formal communications with tutor if needed outside seminars | As needed |

### Decision-Making Protocol

- Decisions are made by group consensus at formal meetings
- If consensus cannot be reached, the issue is escalated to the seminar tutor
- All decisions are recorded in meeting minutes and as GitHub Issue comments

### Document Naming Convention

- All working documents are Markdown files in the GitHub repository
- Branch naming: `[member-name]/[section]` (e.g., `afsah/family-home-design`)
- Final report generated via pandoc: `pandoc report.md -o report.docx --reference-doc=template.docx`

### Individual Contribution Tracking

- Each member works on their assigned files and commits under their own GitHub account
- `git blame` and GitHub's contributor graph provide auditable evidence of individual work
- This satisfies the 20% individual contribution marking criterion

---

## 12. Quality Assurance

| Activity | When | Responsible |
|---|---|---|
| Peer review of each report section draft | Week 12 | All members review sections they did not write |
| Cross-check WBS, Gantt, and 4-Fields for consistency | Week 8 and Week 12 | Project Manager |
| Verify all costs have cited sources and dates | Week 11 | Costing Lead |
| Check report page count against 20-page limit | Week 11 and Week 12 | Report Editor |
| Formatting check (TNR 11pt, justified, TOC, references) | Week 12 | Report Editor |
| Presentation rehearsal (timed) | Week 12 | All |

---

## 13. Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| **Group Member** | Afsah | | |
| **Group Member** | Jake | | |
| **Group Member** | Eeshitha | | |
| **Group Member** | Syed | | |
| **Seminar Tutor** (Approval) | [Tutor Name] | | |

> **Approval confirms:** The project scope, objectives, and plan described in this PID are agreed by all group members and approved by the seminar tutor. Work may proceed.

---

*This is a living document. Any changes to scope, objectives, timeline, or team structure must be agreed at a formal meeting, recorded in minutes, and reflected in an updated version of this PID.*
