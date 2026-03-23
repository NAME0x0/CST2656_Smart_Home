# Smart Home Design: 2-Bedroom Starter Home (×8)

## User Persona

**Name:** Jordan, 27
**Demographics:** Single first-time buyer; junior professional; limited savings after deposit
**Priorities:** Affordability, ease of use, future expandability, energy savings to reduce bills
**Budget sensitivity:** High — every pound matters; wants a smart home but won't pay premium prices
**Tech literacy:** High — uses smartphone for everything; comfortable with app-based control

---

## Platform Selection

**Primary Hub:** Amazon Echo Pop — £44.99

**Rationale:**

- Cheapest Alexa device with Matter support
- Alexa has the widest UK smart home device compatibility
- Matter support means Jordan can add any Matter-certified device in future without needing a new hub
- No Zigbee/Z-Wave hub needed — all devices selected use Wi-Fi (keeps cost down by avoiding hub purchase)
- If Jordan later wants Zigbee/Z-Wave, they can upgrade to Echo Dot Max (£99.99) as a drop-in replacement

---

## Two-Tier Approach

### Essential Tier — Included in base home price

Core smart features that the architectural firm provides as standard with the home.

### Optional Tier — Available at additional cost to purchaser

Upgrades the buyer can add at their own expense, either at purchase or later.

---

## Itemised Cost Table: Essential Tier

| Component | Product | Qty | Unit Price | Total |
|---|---|---|---|---|
| Smart speaker/hub | Amazon Echo Pop | 1 | £44.99 | £44.99 |
| Smart thermostat | Hive Thermostat Mini (starter kit: hub + receiver + thermostat) | 1 | £119.00 | £119.00 |
| Smart doorbell | Ring Video Doorbell Wired | 1 | £49.99 | £49.99 |
| Smart lock (front door) | Yale Conexis L2 | 1 | £159.99 | £159.99 |
| Smart lighting (living room, bedroom 1, bedroom 2, hallway, kitchen) | TP-Link Tapo L530E (Colour E27) | 5 | £7.99 | £39.95 |
| Solar diverter | myenergi eddi (1-phase) | 1 | £439.00 | £439.00 |
| Smart plugs (energy monitoring) | TP-Link Tapo P110 | 3 | £9.99 | £29.97 |
| Smoke/CO alarm (interlinked) | FireAngel Battery Smoke Alarm | 2 | £29.95 | £59.90 |
| Smart plug (basic) | TP-Link Tapo P100 | 2 | £8.99 | £17.98 |
| **ESSENTIAL TIER TOTAL** | | | | **£960.77** |

---

## Itemised Cost Table: Optional Tier (at purchaser's cost)

| Component | Product | Qty | Unit Price | Total |
|---|---|---|---|---|
| Smart alarm system | Ring Alarm Pack S (5-piece) | 1 | £219.99 | £219.99 |
| Additional contact sensors | Ring Alarm Contact Sensor | 2 | £23.99 | £47.98 |
| Outdoor camera (solar) | Eufy SoloCam S220 (2K) | 1 | £69.99 | £69.99 |
| Robot vacuum | Roborock S8 | 1 | £369.99 | £369.99 |
| EV charger | myenergi zappi 7kW (unit only) | 1 | £636.00 | £636.00 |
| Hub upgrade (Zigbee/Thread) | Amazon Echo Dot Max (2025) | 1 | £99.99 | £99.99 |
| Smart TRVs | Drayton Wiser TRV | 4 | £49.99 | £199.96 |
| Drayton Wiser Kit (if upgrading heating) | Drayton Wiser Multi-zone Kit 1 | 1 | £219.99 | £219.99 |
| Smart blinds | SwitchBot Curtain 3 | 2 | £69.99 | £139.98 |
| Air quality sensor | IKEA VINDSTYRKA | 1 | £35.00 | £35.00 |
| Nest Protect smoke/CO | Google Nest Protect (Battery) | 2 | £94.99 | £189.98 |
| **OPTIONAL TIER TOTAL** | | | | **£2,228.85** |

---

## Per-Home and Estate Totals

| Scenario | Per Home | ×8 Homes |
|---|---|---|
| **Essential tier only** | **£960.77** | **£7,686.16** |
| **Fully upgraded (essential + optional)** | **£3,189.62** | **£25,516.96** |

---

## Solar Integration Design

1. **myenergi eddi** diverts surplus solar to immersion heater — a 2-bed home with fewer occupants may have proportionally more surplus solar, making this especially cost-effective
2. **Tapo P110 smart plugs** on washing machine and dishwasher — scheduled to run during peak solar hours via Alexa routine
3. **SMETS2 smart meter** (free) with In-Home Display for real-time visibility
4. If purchaser adds **zappi EV charger** (optional), it shares solar surplus management with eddi via myenergi ecosystem

---

## Network Architecture Notes

- **Simple architecture:** Broadband router → all Wi-Fi devices connect directly
- No separate hub needed — all essential tier devices are Wi-Fi-based
- If buyer upgrades to Echo Dot Max, Thread/Zigbee mesh becomes available
- If buyer adds Ring Alarm, Z-Wave sensors connect via Ring Base Station
- **IoT VLAN recommended** at router level if router supports it (most ISP routers do not; buyer could upgrade to a router like TP-Link Archer AX73 ~£100)

---

## Why Wi-Fi Only for Essential Tier

For a cost-optimised starter home, Wi-Fi-only devices eliminate the need for any additional hub purchase:

- Hive Thermostat: includes its own hub (£119 all-in)
- Tapo bulbs and plugs: connect directly to router
- Ring Wired Doorbell: Wi-Fi direct
- Echo Pop: Wi-Fi direct

This keeps the essential tier under £1,000 per home while remaining fully functional. The upgrade path to Zigbee/Z-Wave/Thread is available via the optional tier hub upgrade.

---

## Annual Savings Estimate (Essential Tier Only)

| Saving Source | Annual Value |
|---|---|
| Smart thermostat (Hive, scheduling + geofencing) | £120–£192 |
| Solar diverter (free hot water from surplus) | £150–£250 |
| Energy monitoring awareness (Tapo P110, ~5% reduction) | £40–£60 |
| **TOTAL ANNUAL SAVING** | **£310–£502** |

### Payback Period (Essential Tier)

- Smart home investment: £960.77
- Annual saving (mid-estimate): £406
- **Payback: approximately 2.4 years**

This is the fastest payback of all three housing types due to the low upfront cost and high solar diverter return.
