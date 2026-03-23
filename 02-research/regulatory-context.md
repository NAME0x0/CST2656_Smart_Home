# UK Regulatory Context for Smart Home Installations

## 1. UK GDPR and IoT Data Privacy

**Legal framework:** UK GDPR (retained by the Data Protection Act 2018) applies to all smart home devices collecting personal data.

### Key Obligations

1. **Data Minimisation:** Devices may only collect data strictly necessary for their stated function
2. **Data Protection by Design (DPbD):** Choose products with built-in privacy protections (e.g., Eufy cameras with local storage, Matter local-control devices)
3. **Transparency:** Residents must be informed in plain language about what data devices collect, who receives it, and retention periods — particularly critical for elderly residents with limited digital literacy
4. **Children's Data:** Smart speakers/displays with microphones in family homes capturing children's voices require specific disclosure
5. **Telecare Lawful Basis:** Processing of telecare data (bed occupancy, movement, fall detection) in sheltered accommodation requires lawful basis — most appropriately **Vital Interests** (Article 6(1)(d)) for emergency response, or **Contract** (Article 6(1)(b)) if part of tenancy agreement

### PSTI Act 2022 (effective April 2024)

All UK-sold smart home devices must:
- Have unique default passwords (no shared defaults)
- Declare a minimum period for security update support
- Provide a public vulnerability disclosure policy

### Practical Action

The housing developer must produce a **Smart Home Privacy Notice** for all residents at handover, listing each device, what data it collects, who processes it, and how residents can opt out.

---

## 2. Building Regulations Part L (Conservation of Fuel and Power)

**Current framework:** Approved Document L (volume 1: Dwellings) sets minimum energy performance requirements.

### Future Homes Standard (FHS)

- Targets 75–80% carbon reduction vs 2013 baseline
- Mandatory TRVs on all radiators — smart TRVs (Drayton Wiser, tado) exceed this requirement
- Low-carbon heating requirements (heat pumps or equivalent)
- Smart thermostats with geofencing contribute to SAP (Standard Assessment Procedure) score calculations

### Smart Home Relevance

Part L does not directly specify smart heating controls, but achieving required SAP scores is easier with demonstrable smart controls that reduce calculated energy demand.

---

## 3. Building Regulations Part P (Electrical Safety)

**Approved Document P:** All electrical installation work must comply with BS 7671 (IET Wiring Regulations, 18th Edition, Amendment 2).

### Key Requirements

| Work Type | Notifiable? | Requires Registered Electrician? |
|---|---|---|
| EV charger installation (zappi, Pod Point) | Yes | Yes (Part P + Smart Charge Points Regulations 2021) |
| Hardwired security cameras | Yes (if new wiring) | Yes |
| Solar diverter (myenergi eddi) | Yes (immersion circuit modification) | Yes |
| Hardwired smart doorbell (Ring Wired) | No (low-voltage, existing wiring) | No |
| Plug-in devices (smart plugs, speakers, robot vacuums) | No | No |
| Replacing a socket with a smart socket | No (like-for-like) | No |

### AFDDs

Amendment 2 to BS 7671 requires Arc Fault Detection Devices (AFDDs) on final circuits in new residential buildings — applicable to this estate.

---

## 4. Ofgem Smart Meter Rollout

- 41 million smart/advanced meters installed by end 2025 (71% of domestic meters)
- New obligation: all remaining premises by end 2030
- SMETS2 meters support half-hourly data for time-of-use tariffs (works with zappi/eddi)
- All homes in the estate should have SMETS2 smart meters at handover

---

## 5. BS 8300 Accessibility Standard

**BS 8300-2:2018** — Code of Practice for accessible and inclusive built environments.

### Applicability

- Does NOT apply to individual private dwellings
- DOES apply to communal areas of sheltered accommodation (corridors, entrance, lounge, kitchen)
- Approved Document M (Building Regulations) references BS 8300 as the compliance standard

### Smart Home Relevance

| Requirement | Smart Home Solution |
|---|---|
| Controls at accessible heights (750–1200mm) | Voice control (Alexa/Google) as primary interface |
| Suitable for users with visual impairment | Large-display devices (Echo Show 8) |
| Suitable for users with hearing impairment | Vibrating pendant/watch (Tunstall Minuet) |
| Suitable for users with limited dexterity | Voice control eliminates need for physical switches |
| Support independent living | Telecare (Communicall Vi), fall detection, medication management |

---

## 6. Fire Safety — BS 5839-6

| Dwelling Type | Required Grade | Required Category |
|---|---|---|
| New family homes / starter homes | Grade D (mains-powered with battery backup) | Category LD2 (escape routes + high-risk rooms) |
| Sheltered accommodation | Grade A (with monitoring) | Category L1 (full coverage) |

- FireAngel Pro Connected (with gateway) satisfies Grade D / LD2
- Sheltered accommodation requires a registered fire alarm engineer for Grade A / L1
- Nest Protect (interconnected) satisfies Grade D / LD2 for family/starter homes

---

## 7. Incident Response and Recovery Plan

### Threat Categories

| Threat | Description | Impact |
|---|---|---|
| Device compromise | Malware infects IoT device (camera, speaker) | Privacy breach; data exfiltration; device used in botnet |
| Network breach | Unauthorised access to home Wi-Fi | Access to all connected devices; credential theft |
| Data loss | Cloud provider outage or account breach | Loss of automation rules, camera footage, energy data |
| Power failure | Extended power outage | Loss of smart heating, lighting, monitoring; telecare backup critical |
| Vendor discontinuation | Manufacturer stops supporting device | No security updates; device becomes vulnerable |

### Response Procedures

#### Device Compromise
1. Isolate the affected device from the network (remove from Wi-Fi / unplug)
2. Factory reset the device
3. Change all Wi-Fi passwords and hub credentials
4. Update firmware on all remaining devices
5. Re-add the device with a new unique password
6. Review access logs if available

#### Network Breach
1. Change Wi-Fi password immediately
2. Review connected devices list on router — remove unknown devices
3. Enable WPA3 if not already active
4. Consider enabling IoT VLAN to isolate smart devices from personal devices
5. Update router firmware

#### Telecare System Failure (Sheltered Accommodation — Critical)
1. Tunstall Communicall Vi has built-in **4G cellular backup** — continues operating during broadband outage
2. Warden performs **manual welfare check** of all residents within 30 minutes of system failure notification
3. Portable emergency call buttons (battery-powered) distributed to all residents
4. System provider contacted for emergency repair (Tunstall SLA: 4-hour response)
5. Incident logged and reported to care management

#### Power Failure
1. Battery-powered devices (pendants, watches, smoke alarms, door sensors) continue operating
2. Tunstall Communicall Vi has battery backup (minimum 24 hours)
3. Smart heating reverts to boiler's built-in timer
4. Solar battery storage (if installed — Tesla Powerwall) provides backup power
5. Warden initiates manual welfare checks in sheltered accommodation

### Recovery and Prevention

- All devices must be on manufacturer's current firmware at all times
- Automatic firmware updates enabled where available
- Annual security review of all installed devices
- Replacement plan for devices reaching end-of-support (PSTI Act requires manufacturers to declare support period)
- Network password rotation every 12 months
- Residents briefed on phishing and social engineering risks (smart speaker voice purchasing disabled by default)
