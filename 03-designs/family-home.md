# Smart Home Design: 4-Bedroom Family Home (×6)

## User Persona

**Name:** The Patels
**Demographics:** Couple (mid-30s) with two children (ages 6 and 12); dual income; tech-comfortable
**Priorities:** Convenience, child safety, energy savings, home security, entertainment
**Budget sensitivity:** Medium — willing to invest upfront for long-term savings
**Tech literacy:** Moderate — comfortable with smartphone apps and voice assistants

---

## Platform Selection

**Primary Hub:** Amazon Echo Dot Max (2025) — £99.99
**Secondary Hub:** Aeotec Smart Home Hub V3 (SmartThings) — £84.99

**Rationale:**
- Echo Dot Max supports Zigbee, Thread, Matter, and Wi-Fi — handles all device protocols
- Aeotec Hub adds Z-Wave support for Ring Alarm sensors and provides SmartThings automation engine
- Amazon Alexa is the most widely supported platform across UK smart home devices
- Matter support future-proofs the installation

---

## Itemised Component Cost Table

### Hub and Voice Control

| Component | Product | Qty | Unit Price | Total |
|---|---|---|---|---|
| Primary smart hub/speaker | Amazon Echo Dot Max (2025) | 1 | £99.99 | £99.99 |
| Multi-protocol hub | Aeotec Smart Home Hub V3 | 1 | £84.99 | £84.99 |
| Additional smart speakers | Amazon Echo Pop | 3 | £44.99 | £134.97 |
| Smart display (kitchen) | Amazon Echo Show 8 (4th Gen) | 1 | £179.99 | £179.99 |
| **Subtotal** | | | | **£499.94** |

### Smart Heating (Drayton Wiser — Zigbee)

| Component | Product | Qty | Unit Price | Total |
|---|---|---|---|---|
| Heating starter kit | Drayton Wiser Multi-zone Kit 1 (hub + thermostat + 2 TRVs) | 1 | £219.99 | £219.99 |
| Additional smart TRVs | Drayton Wiser Smart TRV | 8 | £49.99 | £399.92 |
| **Subtotal** | | | | **£619.91** |

### Security and Access

| Component | Product | Qty | Unit Price | Total |
|---|---|---|---|---|
| Smart doorbell | Ring Wired Video Doorbell Pro (3rd Gen, 4K) | 1 | £219.99 | £219.99 |
| Smart lock (front door) | Yale Conexis L2 | 1 | £159.99 | £159.99 |
| Smart alarm system | Ring Alarm Pack M (7-piece) | 1 | £239.99 | £239.99 |
| Additional contact sensors | Ring Alarm Contact Sensor (2nd Gen) | 4 | £23.99 | £95.96 |
| Additional motion detectors | Ring Alarm Motion Detector (2nd Gen) | 2 | £23.99 | £47.98 |
| Outdoor camera (front) | Eufy SoloCam S220 (Solar 2K) | 1 | £69.99 | £69.99 |
| Outdoor camera (rear) | Eufy SoloCam S220 (Solar 2K) | 1 | £69.99 | £69.99 |
| Indoor camera (hallway) | Eufy Indoor Cam C120 (2K) | 1 | £39.99 | £39.99 |
| **Subtotal** | | | | **£943.88** |

### Smart Lighting (IKEA TRADFRI — Zigbee)

| Component | Product | Qty | Unit Price | Total |
|---|---|---|---|---|
| Lighting starter kit | IKEA TRADFRI Starter Kit (Colour E27 + gateway) | 1 | £17.00 | £17.00 |
| Smart bulbs (colour E27) | IKEA TRADFRI Colour E27 | 14 | £10.00 | £140.00 |
| Motion sensor (hallway) | IKEA TRADFRI Motion Sensor | 2 | £10.00 | £20.00 |
| Dimmer switch | IKEA STYRBAR Remote | 3 | £8.00 | £24.00 |
| Outdoor lighting | Ring Smart Spotlight (Battery) | 2 | £54.99 | £109.98 |
| **Subtotal** | | | | **£310.98** |

### Energy and Solar Integration

| Component | Product | Qty | Unit Price | Total |
|---|---|---|---|---|
| Solar diverter | myenergi eddi (1-phase) | 1 | £439.00 | £439.00 |
| Energy monitor | OWL Intuition-e | 1 | £85.00 | £85.00 |
| EV charger | myenergi zappi 7kW (unit only) | 1 | £636.00 | £636.00 |
| Smart plugs (energy monitoring) | TP-Link Tapo P110 | 6 | £9.99 | £59.94 |
| **Subtotal** | | | | **£1,219.94** |

### Sensors and Safety

| Component | Product | Qty | Unit Price | Total |
|---|---|---|---|---|
| Smoke/CO alarms | Google Nest Protect (Battery) | 4 | £94.99 | £379.96 |
| Water leak sensor (kitchen) | Fibaro Flood Sensor (Z-Wave) | 1 | £54.37 | £54.37 |
| Water leak sensor (bathroom) | Fibaro Flood Sensor (Z-Wave) | 1 | £54.37 | £54.37 |
| Air quality sensor | IKEA VINDSTYRKA | 1 | £35.00 | £35.00 |
| **Subtotal** | | | | **£523.70** |

### Smart Appliances

| Component | Product | Qty | Unit Price | Total |
|---|---|---|---|---|
| Robot vacuum | Roborock S8 | 1 | £369.99 | £369.99 |
| Smart plugs (basic) | TP-Link Tapo P100 | 4 | £8.99 | £35.96 |
| Smart blinds (master bedroom) | IKEA FYRTUR Blackout Roller | 2 | £145.00 | £290.00 |
| **Subtotal** | | | | **£695.95** |

---

## Per-Home Total

| Category | Cost |
|---|---|
| Hub and Voice Control | £499.94 |
| Smart Heating | £619.91 |
| Security and Access | £943.88 |
| Smart Lighting | £310.98 |
| Energy and Solar | £1,219.94 |
| Sensors and Safety | £523.70 |
| Smart Appliances | £695.95 |
| **TOTAL PER HOME** | **£4,814.30** |
| **TOTAL FOR 6 HOMES** | **£28,885.80** |

---

## Solar Integration Design

1. **Solar panels** generate electricity; surplus not consumed by the home is detected by the **myenergi eddi** solar diverter
2. The eddi automatically diverts surplus solar to the **immersion heater**, heating water for free instead of exporting to grid
3. If an EV is connected, the **myenergi zappi** can prioritise charging from solar surplus (Eco+ mode)
4. Smart plugs (Tapo P110) on high-consumption appliances (washing machine, dishwasher, tumble dryer) can be scheduled via automation to run during peak solar generation hours
5. The **OWL Intuition-e** monitors whole-home consumption, giving the family visibility of their energy use
6. The **SMETS2 smart meter** (free from supplier) provides half-hourly grid data, enabling time-of-use tariffs

---

## Network Architecture Notes

The network diagram should show:
- Broadband router (ISP-provided, Wi-Fi 6) as central point
- Aeotec Hub connected via Ethernet to router (handles Zigbee + Z-Wave)
- Echo Dot Max on Wi-Fi (handles Thread + Matter)
- Device groups by protocol:
  - **Zigbee mesh:** Drayton Wiser heating, IKEA TRADFRI lighting, IKEA sensors, VINDSTYRKA
  - **Z-Wave:** Ring Alarm base + sensors, Fibaro flood sensors
  - **Wi-Fi:** Cameras (Eufy), Ring doorbell, myenergi eddi/zappi, OWL monitor, Tapo smart plugs, Echo speakers
  - **Thread/Matter (future):** New devices added by residents
- IoT VLAN recommended: separate network segment for smart home devices, isolated from family's computers and phones

---

## Annual Savings Estimate

| Saving Source | Annual Value |
|---|---|
| Smart heating (Drayton Wiser multi-zone) | £200–£300 |
| Solar diverter (free hot water from surplus) | £150–£250 |
| Solar-aware EV charging (zappi Eco+) | £100–£200 |
| Energy monitoring awareness (typical 5% reduction) | £60–£80 |
| Insurance discount (Ring Alarm, 2–5%) | £10–£25 |
| **TOTAL ANNUAL SAVING** | **£520–£855** |

### Payback Period

- Smart home investment: £4,814.30
- Annual saving (mid-estimate): £687
- **Payback: approximately 7 years**
- Note: This excludes the EV charger (£636), which has its own separate payback via fuel savings. Without EV charger, payback drops to ~6 years.
