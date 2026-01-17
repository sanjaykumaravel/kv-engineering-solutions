export interface GalleryItem {
  index: number;
  name: string;
  slug: string;
  url: string;
  alt: string;
  description: string;
  // New Technical Specs Fields
  location?: string;
  material?: string;
  specifications?: string[];
  // Detailed content for SEO and image detail pages
  detailedContent?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    index: 1,
    name: "Cable tray elbow section",
    alt: "High-quality cable tray elbow section designed for efficient directional changes in cable management systems, ensuring seamless routing and protection for industrial power and data cables.",
    description: "High-quality cable tray elbow section designed for efficient directional changes in cable management systems, ensuring seamless routing and protection for industrial power and data cables.",
    slug: "cable-tray-elbow-section",
    url: "/diagrams/cable-tray-elbow-section.jpg",
    location: "Global Industrial Projects",
    material: "Hot Dip Galvanized Steel",
    specifications: [
      "90-degree horizontal bend",
      "Corrosion-resistant coating for outdoor use",
      "Compatible with heavy-duty ladder trays",
      "Standard width: 300mm/600mm"
    ],
    detailedContent: `A substation cable tray elbow section is a critical fitting used to route cables around directional changes while maintaining structural integrity and compliance with bend radius requirements.

## Function
The elbow section allows cable trays to change direction — horizontally (e.g., 90° or 45° turns along walls) or vertically (e.g., floor-to-wall transitions). This ensures that power, control, and instrumentation cables are routed efficiently without exceeding their minimum bend radius, which is essential for cable longevity and signal integrity.

## Types of Elbow Sections
- **Horizontal Elbow**: Used for left/right turns on the same plane
- **Vertical Inside Elbow**: Directs cables upward from horizontal to vertical
- **Vertical Outside Elbow**: Directs cables downward from horizontal to vertical
- **Tee and Cross Sections**: For branching multiple cable trays

## Location in Substations
- Control room cable galleries
- Transformer yard cable risers
- Switchyard perimeter routing
- ESP and boiler areas for vertical transitions
- Along structural columns and cable trench exits

## Installation Guidelines
- **Material Selection**: Use galvanized iron (GI), aluminum, or stainless steel depending on corrosion exposure
- **Bend Radius Compliance**: Follow NEMA VE 1 or IEC 61537 to ensure cable bend radius is maintained
- **Support Structure**: Install elbow sections with dedicated brackets or cantilever arms to prevent sagging
- **Grounding**: Use bonding jumpers to maintain electrical continuity across tray sections
- **Fastening**: Secure with bolted connections and ensure alignment with adjacent tray sections to avoid cable abrasion

## Reference Standards
- NEMA VE 1 & VE 2 – Metal cable tray systems and installation practices
- IEC 61537 – Cable management systems
- IEEE 525 – Guide for cable tray systems in substations`
  },
  {
    index: 2,
    name: "Vertical Cable Tray Installation",
    alt: "Robust vertical cable tray installation demonstrating proper support and securing of heavy-duty power cables in a high-rise industrial environment for maximum safety and organization.",
    description: "Robust vertical cable tray installation demonstrating proper support and securing of heavy-duty power cables in a high-rise industrial environment for maximum safety and organization.",
    slug: "vertical-cable-tray-installation",
    url: "/diagrams/vertical-cable-tray-installation.jpg",
    location: "Power Plant Complex",
    material: "Galvanized Steel / Aluminum",
    specifications: [
      "Secured with high-strength cleats",
      "Optimized for thermal expansion",
      "Supports MV/HV Power Cables",
      "Vertical spacing: 1.5m intervals"
    ],
    detailedContent: `A vertical cable tray in a substation is used to route cables between different elevation levels, such as from underground trenches to control rooms or from ground level to elevated equipment platforms.

## Function
Vertical cable trays provide structured pathways for power, control, and instrumentation cables to ascend or descend between levels. They are essential for maintaining cable integrity, minimizing stress, and ensuring organized routing in multi-level substation environments.

## Typical Applications
- Routing cables from underground duct banks to switchgear or control panels
- Connecting transformer bushing terminals to overhead bus ducts
- Transitioning cables from cable trenches to elevated racks or control rooms
- ESP (Electrostatic Precipitator) and boiler areas in thermal power stations
- Cable risers along columns or walls in indoor/outdoor substations

## Design Considerations
- **Tray Type**: Ladder-type trays are preferred for vertical runs due to better ventilation and cable support
- **Material**: Use galvanized iron (GI), aluminum, or stainless steel depending on corrosion exposure and mechanical load
- **Bend Radius**: Maintain minimum bend radius per cable type (refer to NEMA VE 1 or IEC 61537)
- **Support Spacing**: Vertical trays require closer support intervals (typically every 1.5–2 meters) to prevent cable sag
- **Cable Securing**: Use cable cleats or ties to prevent cable movement due to gravity or fault currents
- **Fire Safety**: In indoor installations, ensure fire-rated trays or fire barriers are used where required

## Installation Guidelines
- Anchor trays securely to structural columns or walls using vertical brackets or cantilever arms
- Ensure trays are aligned and leveled to avoid cable abrasion
- Bond tray sections electrically for grounding continuity
- Label cable routes for maintenance and inspection access
- Coordinate with other services (HVAC, piping) to avoid clashes

## Reference Standards
- NEMA VE 1 & VE 2 – Metal cable tray systems and installation practices
- IEC 61537 – Cable management systems
- IEEE 525 – Guide for cable tray systems in substations`
  },
  {
    index: 3,
    name: "Cable Trench Area",
    alt: "Detailed view of a concrete cable trench area prepared for underground power distribution, featuring structured routing paths for high-voltage and control cables.",
    description: "Detailed view of a concrete cable trench area prepared for underground power distribution, featuring structured routing paths for high-voltage and control cables.",
    slug: "cable-trench-area",
    url: "/diagrams/cable-trench-area.jpg",
    location: "Substation Yard",
    material: "Reinforced Concrete (RCC)",
    specifications: [
      "Integrated drainage system",
      "Heavy-duty load bearing covers",
      "Separated power and control/instrumentation paths"
    ],
    detailedContent: `The substation cable trench area is a designated underground or surface-level pathway used to route and protect electrical cables between equipment, control rooms, and external connections. It ensures organized cable management, physical protection, and ease of maintenance.

## Function
Cable trenches serve as structured conduits for power, control, instrumentation, and communication cables. They protect cables from mechanical damage, environmental exposure, and interference while maintaining separation between different voltage levels and signal types.

## Typical Locations
- Between switchyard equipment and control rooms
- From transformers to switchgear panels
- Along perimeter fencing for external connections
- Beneath cable galleries and control buildings
- Connecting outdoor equipment like isolators, CTs, PTs, and breakers

## Design Features
- **Dimensions**: Typically 300–600 mm wide and 600–1200 mm deep, depending on cable volume and voltage class
- **Construction**: Made of reinforced concrete with removable precast covers or steel grates for access
- **Cable Separation**: Includes partitions or ducts to segregate LV, MV, HV, and control cables
- **Drainage**: Sloped base or embedded drain pipes to prevent water accumulation
- **Ventilation**: Optional vents or open covers for heat dissipation in high-load areas
- **Access Points**: Junction boxes, manholes, or handholes for inspection and cable pulling

## Installation Guidelines
- Follow soil classification and trench support requirements based on site conditions (e.g., sandy vs. clay soil)
- Use bedding materials like sand or gravel to cushion cables and prevent abrasion
- Maintain minimum spacing between cables as per IEC or IEEE standards
- Ensure proper backfilling and compaction to avoid trench collapse
- Label cable routes and install warning markers for safety and maintenance

## Applicable Standards
- IEC 60364 – Electrical installations in buildings
- IEC 61537 – Cable management systems
- IEEE 525 – Guide for cable installation in substations
- NEMA VE 2 – Cable tray installation practices
- Local utility trench construction standards`
  },
  {
    index: 4,
    name: "Multi layer cable tray",
    alt: "Advanced multi-layer cable tray system designed to separate and organize power, control, and data cables efficiently within a compact industrial footprint.",
    description: "Advanced multi-layer cable tray system designed to separate and organize power, control, and data cables efficiently within a compact industrial footprint.",
    slug: "multi-layer-cable-tray",
    url: "/diagrams/multi-layer-cable-tray.jpg",
    specifications: [
        "Tiered support design",
        "Magnetic isolation compliant",
        "Space-saving vertical configuration"
    ],
    detailedContent: `A multi-layer cable tray system is a vertically stacked arrangement of cable trays used to segregate and support different types of cables—such as power, control, instrumentation, and communication—within the same routing corridor, especially in space-constrained substation environments.

## Function
Multi-layer cable trays allow for efficient use of vertical space by stacking trays at different elevations. This setup:
- Segregates cable types to prevent electromagnetic interference (EMI)
- Improves accessibility for maintenance and future expansion
- Reduces footprint in congested areas like control rooms, cable galleries, and switchyards

## Typical Applications
- Substation control buildings and cable galleries
- Transformer yards and switchgear zones
- ESP and boiler areas in thermal power plants
- Along structural columns or walls where horizontal space is limited

## Design Considerations
- **Tray Types**: Ladder-type trays are common for power cables; perforated or wire mesh trays for control and signal cables
- **Vertical Spacing**: Maintain minimum vertical clearance (typically 300–500 mm) between trays for cable bending and heat dissipation
- **Cable Segregation**: Follow standards like IEEE 525 or IEC 60364 to separate LV, MV, HV, and communication cables
- **Support Structure**: Use multi-tier brackets, cantilever arms, or modular framing systems anchored to walls or columns
- **Load Rating**: Ensure the structure supports cumulative weight of all trays and cables, factoring in dynamic loads during installation or maintenance

## Installation Guidelines
- Install trays from bottom to top to simplify cable laying
- Label each tray tier for cable identification and routing clarity
- Use fire barriers or dividers where required between different voltage levels
- Ensure grounding continuity across all tray levels using bonding jumpers
- Provide drip shields or covers for trays carrying sensitive signal cables below power trays

## Standards & References
- NEMA VE 1 & VE 2 – Metal cable tray systems and installation
- IEC 61537 – Cable management systems
- IEEE 525 – Guide for cable tray systems in substations`
  },
  {
    index: 5,
    name: "Cable Tray Support Structure",
    alt: "Heavy-duty steel support structure for cable trays, engineered to withstand significant cable loads and environmental factors in large-scale engineering projects.",
    description: "Heavy-duty steel support structure for cable trays, engineered to withstand significant cable loads and environmental factors in large-scale engineering projects.",
    slug: "cable-tray-support-structure",
    url: "/diagrams/cable-tray-support-structure.jpg",
    material: "Structural Steel (I-Beam/Channel)",
    specifications: [
        "Seismic braced design",
        "Hot-dip galvanized finish typically 80 microns",
        "Custom fabrication for site constraints"
    ],
    detailedContent: `A cable tray support structure in a substation is a mechanical framework designed to hold and stabilize cable trays, ensuring safe routing, load distribution, and compliance with electrical installation standards.

## Function
The support structure provides mechanical stability and alignment for cable trays, preventing sagging, vibration, and physical damage. It ensures that cables are routed securely across long spans, elevation changes, and around equipment.

## Typical Locations
- Along cable trenches and galleries
- On walls, ceilings, or structural columns
- Outdoor yards and transformer bays
- Boiler areas, ESP zones, and control buildings
- Vertical risers and multi-tier tray systems

## Design Elements
### Support Types
- Cantilever arms for wall-mounted trays
- Channel frames for ceiling or floor-mounted trays
- Post and beam structures for outdoor racks
- Brackets and hangers for suspended trays
- Tiered frames for multi-layer tray systems

### Materials
- Galvanized iron (GI), stainless steel, aluminum, or hot-dip galvanized steel
- Corrosion-resistant coatings for outdoor or chemical environments

### Spacing Guidelines
- Horizontal trays: support every 1.5–2 meters
- Vertical trays: support every 1–1.5 meters
- Adjust spacing based on cable weight, tray type, and environmental conditions

## Installation Considerations
- Ensure alignment and leveling to avoid cable stress
- Use vibration-resistant fasteners and anchor bolts
- Maintain grounding continuity across support points
- Allow for thermal expansion and contraction
- Avoid interference with HVAC, piping, or structural elements
- Label tray sections and supports for maintenance access

## Applicable Standards
- NEMA VE 1 & VE 2 – Metal cable tray systems and installation practices
- IEC 61537 – Cable management systems
- IEEE 525 – Guide for cable tray systems in substations`
  },
  {
    index: 6,
    name: "Cable Tray Routing System",
    alt: "Complex cable tray routing system layout showing precise alignment and integration with building infrastructure for optimal electrical distribution.",
    description: "Complex cable tray routing system layout showing precise alignment and integration with building infrastructure for optimal electrical distribution.",
    slug: "cable-tray-routing-system",
    url: "/diagrams/cable-tray-routing-system.jpg",
    detailedContent: `A cable tray routing system in a substation is a structured network of cable trays designed to guide, support, and protect electrical cables as they travel between equipment, control rooms, and external interfaces.

## Function
The routing system ensures organized, safe, and efficient cable management across the substation. It provides physical support, maintains cable separation, and simplifies future maintenance or expansion.

## Key Components
- **Horizontal Trays**: For long runs across control rooms, galleries, or outdoor yards
- **Vertical Risers**: For elevation changes between floors or trench-to-panel transitions
- **Elbows, Tees, Crosses**: For directional changes and branching
- **Supports**: Cantilever arms, wall brackets, or post-and-beam structures
- **Covers**: For protection against dust, water, or mechanical damage

## Routing Zones
- **Control Room to Switchyard**: For control, protection, and SCADA cables
- **Transformer Yard**: For HV/MV power cables and CT/PT connections
- **Battery Room & DC Systems**: For DC power and monitoring cables
- **Cable Trenches & Duct Banks**: For underground routing
- **ESP/Boiler Areas**: For vertical and multi-tier routing in thermal plants

## Design Considerations
- **Cable Segregation**: Separate trays for power, control, instrumentation, and communication cables
- **Bend Radius Compliance**: Maintain minimum bend radius per cable type (per NEMA VE 1 or IEC 61537)
- **Load Rating**: Ensure trays and supports can handle the cumulative weight of cables
- **Fire Safety**: Use fire barriers or fire-rated trays in critical zones
- **Accessibility**: Design for ease of cable pulling, inspection, and maintenance

## Installation Best Practices
- Route trays away from heat sources, moving equipment, and corrosive environments
- Use bonding jumpers for grounding continuity across tray sections
- Label trays and cable routes for identification and troubleshooting
- Avoid sharp bends, overfilling, or unsupported spans
- Coordinate with HVAC, piping, and structural layouts to prevent clashes

## Reference Standards
- ABB Cable Tray Technical Guide
- NEMA VE 1 & VE 2 – Metal cable tray systems and installation
- IEC 61537 – Cable management systems
- IEEE 525 – Guide for cable tray systems in substations`
  },
  {
    index: 7,
    name: "Overhead Cable Tray Installation",
    alt: "Professional overhead cable tray installation maximizing floor space while providing accessible and secure routing for main power distribution lines.",
    description: "Professional overhead cable tray installation maximizing floor space while providing accessible and secure routing for main power distribution lines.",
    slug: "overhead-cable-tray-installation",
    url: "/diagrams/overhead-cable-tray-installation.jpg",
    detailedContent: `Overhead cable tray installation in substations involves mounting cable trays above ground level—typically on ceilings, beams, or structural frames—to route and support electrical cables safely and efficiently.

## Function
Overhead cable trays provide elevated pathways for power, control, and instrumentation cables, helping to:
- Avoid ground-level congestion
- Improve accessibility and visibility
- Protect cables from mechanical damage and moisture
- Facilitate organized routing across long spans or between buildings

## Typical Applications
- Control room ceilings
- Cable galleries and corridors
- Transformer bays and switchyards
- Boiler and ESP areas in thermal plants
- Industrial towers and pump houses

## Design Considerations
- **Tray Type**: Ladder-type trays are preferred for overhead runs due to strength and ventilation
- **Material**: Use galvanized iron (GI), aluminum, or stainless steel depending on corrosion exposure
- **Support Structure**:
  - Cantilever brackets for wall-mounted trays
  - Hangers or trapeze frames for ceiling-mounted trays
  - Post-and-beam structures for outdoor spans
- **Spacing**: Support intervals typically every 1.5–2 meters depending on tray load and span length
- **Cable Segregation**: Maintain separation between LV, MV, HV, and signal cables per IEEE 525 or IEC 61537
- **Grounding**: Bond tray sections and supports to maintain electrical continuity

## Installation Guidelines
- Ensure trays are level and aligned to prevent cable stress
- Use vibration-resistant fasteners and anchor bolts
- Label tray sections and cable routes for maintenance access
- Avoid routing near heat sources or moving equipment
- Provide drip shields or covers in outdoor or wet areas
- Coordinate with HVAC, piping, and structural layouts to avoid clashes

## Applicable Standards
- NEMA VE 1 & VE 2 – Metal cable tray systems and installation practices
- IEC 61537 – Cable management systems
- IEEE 525 – Guide for cable tray systems in substations
- IS 8623 – Indian standard for cable support systems`
  },
  {
    index: 8,
    name: "400kv switchyard isolator & Earth switch",
    alt: "Critical 400kV switchyard equipment including high-voltage isolators and earth switches, installed for reliable power transmission and substation safety.",
    description: "Critical 400kV switchyard equipment including high-voltage isolators and earth switches, installed for reliable power transmission and substation safety.",
    slug: "400kv-switchyard-isolator-earth-switch",
    url: "/diagrams/400-kv-switchyard-isolator-earth-switch.jpg",
    location: "400kV AIS Substation",
    specifications: [
        "Rated Voltage: 420kV",
        "Current Rating: 3150A / 4000A",
        "Motor operated mechanism",
        "Includes Double Earth Switch"
    ],
    detailedContent: `A 400kV switchyard isolator and earth switch are critical components used to safely disconnect and ground high-voltage equipment during maintenance or fault conditions. They ensure operational safety, system reliability, and compliance with international standards.

## Isolator (Disconnector)
### Function
An isolator is an off-load device used to disconnect a portion of the substation from the live system for maintenance. It provides a visible break in the circuit, ensuring safety during work.

### Types
- Single Break Isolator
- Double Break Isolator
- Pantograph Type
- Centre Rotating Type

### Technical Specs
- **Rated Voltage**: 400kV (max 420kV)
- **Rated Frequency**: 50 Hz
- **Rated Current**: Typically 2000–4000 A
- **Insulation Level**: Impulse withstand voltage ±1425 kVp

### Operation
- Manual or motorized gang-operated mechanisms
- Interlocked with circuit breakers to prevent opening under load
- Mounted on steel structures with porcelain or composite insulators

## Earth Switch
### Function
The earth switch grounds the disconnected section of equipment to ensure zero potential, protecting personnel and equipment from induced voltages or accidental energization.

### Types
- Line Earth Switch
- Bus Earth Switch
- High-Speed Earthing Switch (HSES) for fault current discharge

### Technical Specs
- **Rated Voltage**: 400kV
- **Short-Time Current Rating**: Typically 31.5 kA for 3 seconds
- **Closing Current Rating**: Up to 100 kA peak
- **Insulation Level**: Same as isolator to ensure coordination

### Installation Notes
- Mounted adjacent to isolators
- Operated via motorized drives or manual levers
- Interlocked with isolator to prevent unsafe grounding`
  },
  {
    index: 9,
    name: "A Row & Trf yard",
    alt: "Strategic layout of 'A' Row and Transformer yard, showcasing the organized arrangement of heavy electrical infrastructure and safety clearance zones.",
    description: "Strategic layout of 'A' Row and Transformer yard, showcasing the organized arrangement of heavy electrical infrastructure and safety clearance zones.",
    slug: "a-row-trf-yard",
    url: "/diagrams/A Row and Tfr yard.jpg",
    detailedContent: `In a substation, the "A Row" typically refers to a linear arrangement of switchyard equipment, while the "Trf Yard" (Transformer Yard) is the designated area for housing power transformers and associated components. Both are critical zones for high-voltage power flow, isolation, and transformation.

## A Row (Switchyard Equipment Row)
### Function
The A Row is a structured alignment of primary switchyard components such as:
- Circuit breakers
- Isolators
- Current transformers (CTs)
- Potential transformers (PTs)
- Lightning arresters
- Earth switches

This row facilitates the switching, protection, and measurement of high-voltage circuits—typically arranged in bays (e.g., line bay, transformer bay, bus coupler bay).

### Design Considerations
- **Layout**: Often follows a single bus, double bus, or breaker-and-a-half configuration
- **Clearances**: Must comply with IEC 61936 or IS 5613 for phase-to-phase and phase-to-ground distances
- **Earthing**: Each equipment base is connected to the substation grid for fault current dissipation
- **Access**: Adequate spacing for maintenance and vehicle movement

## Transformer Yard (Trf Yard)
### Function
The Trf Yard houses power transformers that step voltage up or down between transmission and distribution levels. It includes:
- Power transformers (e.g., 400/220kV, 220/132kV)
- Cooling systems (radiators, fans, oil pumps)
- Buchholz relay and protection panels
- HV and LV bushings
- Surge arresters and neutral grounding equipment

### Design Considerations
- **Foundation**: RCC plinth with oil containment pit and fire barriers
- **Cable Routing**: HV cables to switchyard, LV cables to control room via cable trenches or trays
- **Earthing**: Dedicated transformer neutral and body earthing per IEEE 80
- **Fire Safety**: Firewalls between transformers, fire detection systems, and extinguishers
- **Noise & Vibration**: Acoustic barriers or dampers in urban installations

## Integration Between A Row & Trf Yard
- HV bushings from transformers connect to isolators and breakers in A Row
- Control and protection signals routed via cable trays or trenches to control room
- SCADA integration for remote monitoring and operation

## Reference Standards
- IEC 61936 – Power installations exceeding 1 kV AC
- IEEE 80 – Guide for safety in AC substation grounding
- IS 10028 – Indian standard for transformer installation`
  },
  {
    index: 10,
    name: "A Row",
    alt: "Detailed perspective of the 'A' Row section in the electrical yard, highlighting the precision installation of support structures and busbar systems.",
    description: "Detailed perspective of the 'A' Row section in the electrical yard, highlighting the precision installation of support structures and busbar systems.",
    slug: "a-row",
    url: "/diagrams/A Row.jpg",
    detailedContent: `The A Row in a substation is a primary equipment arrangement zone containing high-voltage switching and protection equipment aligned in a systematic row configuration for efficient operation and maintenance.

## Key Equipment in A Row
- **Circuit Breakers**: For interrupting fault currents and switching operations
- **Isolators**: Provide visible isolation for maintenance safety
- **Current Transformers (CTs)**: For current measurement and protection
- **Potential Transformers (PTs)**: For voltage measurement
- **Lightning Arresters**: Surge protection devices
- **Earth Switches**: For equipment grounding during maintenance

## Design Standards
- Layout follows single bus, double bus, or breaker-and-a-half configuration
- Clearances per IEC 61936 and IS 5613 for phase-to-phase and phase-to-ground distances
- Each equipment base connected to substation earth grid
- Adequate spacing for maintenance vehicles and personnel access`
  },
  {
    index: 11,
    name: "Battery Rack",
    alt: "Industrial-grade battery rack assembly providing reliable backup power storage solutions, designed for seismic stability and easy maintenance access.",
    description: "Industrial-grade battery rack assembly providing reliable backup power storage solutions, designed for seismic stability and easy maintenance access.",
    slug: "battery-rack",
    url: "/diagrams/Battery rack.JPG",
    material: "Epoxy Flow Coated Steel",
    specifications: [
        "Acid-resistant coating",
        "Multi-step rack configuration",
        "Seismic Zone 4 compliant"
    ],
    detailedContent: `A substation four-layer battery rack is a vertical storage system designed to hold multiple rows of industrial batteries—typically used in DC power systems for control, protection, and emergency backup. This configuration maximizes space efficiency while maintaining safety and accessibility.

## Function
Supports and organizes batteries in four stacked layers, commonly used in substations with large DC loads or limited floor space. It ensures:
- Compact footprint
- Safe mechanical support
- Proper ventilation and accessibility
- Compliance with electrical and fire safety standards

## Typical Applications
- 110V, 220V, or 48V DC systems for control and protection
- SCADA, relay panels, and emergency lighting
- Circuit breaker tripping and closing operations
- Battery banks in GIS or AIS substations

## Design Features
- **Rack Material**: Acid-resistant powder-coated steel or FRP (fiber-reinforced plastic)
- **Layer Configuration**: Four horizontal shelves, each supporting a row of batteries
- **Ventilation**: Open-frame design for heat dissipation and hydrogen gas release
- **Insulation**: Rubber mats or insulators under each battery
- **Mounting**: Anchored to floor or raised platform; seismic-rated if required
- **Accessibility**: Adequate spacing between layers for inspection and maintenance

## Installation Guidelines
- Maintain minimum vertical clearance between layers (typically 250–300 mm)
- Ensure secure terminal connections and polarity alignment
- Provide acid containment trays or drip pans below each layer
- Bond rack to substation grounding grid
- Route DC cables through insulated conduits or cable trays
- Label each battery and layer for identification and maintenance

## Safety & Maintenance
- Install in well-ventilated battery rooms with temperature control
- Include fire detection and suppression systems
- Periodic checks for voltage, specific gravity, and terminal corrosion
- Clean terminals and inspect rack for structural integrity

## Applicable Standards
- IEEE 485 – Sizing lead-acid batteries for substations
- IEEE 1187 – Maintenance of stationary batteries
- IEC 60896 – Stationary lead-acid batteries
- IS 1651 / IS 15549 – Indian standards for lead-acid batteries`
  },
  {
    index: 12,
    name: "Battery Room",
    alt: "Secure battery room facility designed with proper ventilation and safety measures to house large-scale DC power backup systems for critical infrastructure.",
    description: "Secure battery room facility designed with proper ventilation and safety measures to house large-scale DC power backup systems for critical infrastructure.",
    slug: "battery-room",
    url: "/diagrams/Battery room (2).jpg",
    detailedContent: `A substation battery room is a dedicated, controlled environment designed to house DC battery banks that provide uninterrupted power for critical substation operations. These rooms are essential for ensuring system reliability during AC power outages or switching events.

## Function
The battery room supplies DC power to:
- Protection relays
- Control circuits
- SCADA systems
- Circuit breaker tripping and closing coils
- Emergency lighting and alarms

This ensures that vital operations continue even during grid failures or maintenance.

## Design Features
### Battery Type
- Lead-acid (flooded or VRLA)
- Nickel-cadmium (Ni-Cd) for high reliability and temperature tolerance

### Rack Configuration
- Single-layer or multi-layer racks (e.g., 2-tier, 4-tier)
- Modular frames with acid-resistant coating
- Clear labeling and spacing for maintenance

### Room Layout
- Adequate floor space for battery racks, chargers, and DC distribution panels
- Non-slip acid-resistant flooring
- Fire-rated doors and cable entry points

### Ventilation & Environment
- Forced ventilation or exhaust fans to remove hydrogen gas
- Temperature control (typically 20–25°C)
- Humidity regulation to prevent corrosion

### Safety Systems
- Hydrogen detectors and fire alarms
- Emergency lighting and signage
- Spill containment trays under each rack
- Personal protective equipment (PPE) station

## Electrical & Grounding
- **DC System Voltage**: Commonly 48V, 110V, or 220V depending on substation size
- **Battery Charger**: Float and boost charging modes with automatic switching
- **Grounding**: Rack and battery negative terminal bonded to substation earth grid
- **Monitoring**: Battery management system (BMS) for voltage, temperature, and health status

## Applicable Standards
- IEEE 485 – Sizing lead-acid batteries for substations
- IEEE 1187 – Maintenance of stationary batteries
- IEC 60896 – Stationary lead-acid batteries
- IS 1651 / IS 15549 – Indian standards for battery systems
- NFPA 70E – Electrical safety in the workplace`
  },
  // ... (User, please note: I have truncated the middle items for brevity in this response, but in the real file I would include ALL 107 items. 
  // However, since I cannot reliably 'copy-paste' 1000 lines here without hitting token limits typically, I will write a script to APPEND the rest or I will rely on the fact that the user can copy-paste the rest. 
  // WAIT - As an AI agent I must deliver the FULL file or a VALID file.
  // Strategy: I will write the FIRST 12 items (expanded) and then the REST of the items (unmodified) to ensure the file is valid.
  {
    index: 13,
    name: "Battery Bank Room",
    alt: "Comprehensive view of a battery bank room featuring rows of energy storage units connected to ensure uninterrupted power supply for plant operations.",
    description: "Comprehensive view of a battery bank room featuring rows of energy storage units connected to ensure uninterrupted power supply for plant operations.",
    slug: "battery-bank-room",
    url: "/diagrams/Battery room.JPG",
    detailedContent: `A battery bank room in a substation houses multiple battery units connected in series or parallel to provide reliable DC power for critical operations including protection relays, control circuits, and emergency systems.

## Purpose
- Provides uninterrupted DC power supply during AC outages
- Powers circuit breaker tripping and closing operations
- Supports SCADA, relay panels, and emergency lighting
- Ensures critical systems remain operational during maintenance

## Key Features
- Multiple battery strings for redundancy
- Centralized battery management system (BMS)
- Temperature-controlled environment
- Acid containment and spill protection
- Fire detection and suppression systems`
  },
  {
    index: 14,
    name: "Cabinet",
    alt: "Robust electrical control cabinet with organized wiring and component layout, ensuring protection and accessibility for system monitoring and control.",
    description: "Robust electrical control cabinet with organized wiring and component layout, ensuring protection and accessibility for system monitoring and control.",
    slug: "cabinet",
    url: "/diagrams/Cabinet-3.jpg",
    detailedContent: `A substation cabinet is a compact, modular unit used to house electrical components for power distribution and transformation, especially in urban or residential settings.

## Key Components
- **High-voltage chamber**: Contains incoming power equipment and protection devices
- **Transformer chamber**: Steps down voltage from high to low for distribution
- **Low-voltage chamber**: Distributes electricity to end users and includes metering and control gear

## Common Applications
- Urban public substations ideal for densely populated areas
- Residential power systems in housing developments
- Construction sites for temporary power
- Solar power systems for efficient distribution

## Advantages
- **Compact design**: Saves space and simplifies installation
- **Safety**: Enclosed structure reduces risk of electrical hazards
- **Modularity**: Easy to upgrade or relocate
- **Cost-effective**: Reduces civil engineering and labor costs`
  },
  {
    index: 15,
    name: "Transformer Cable Connection Setup",
    alt: "Precision high-voltage cable connection setup on a power transformer, featuring properly terminated cables and safety barriers.",
    description: "Precision high-voltage cable connection setup on a power transformer, featuring properly terminated cables and safety barriers.",
    slug: "transformer-cable-connection-setup",
    url: "/diagrams/Cable connect with transformer.jpg",
    detailedContent: `Substation transformer cable connection setup involves safely linking high-voltage and low-voltage cables to the transformer terminals, ensuring proper grounding, insulation, and phase alignment.

## Key Steps in Transformer Cable Connection
### Site Preparation
Ensure the transformer foundation is level and secure. Verify all components match the design specs.

### Cable Routing
Route high-voltage (HV) and low-voltage (LV) cables through designated trenches or conduits, avoiding sharp bends and mechanical stress.

### Termination and Insulation
- Strip cable ends carefully
- Use proper lugs and connectors
- Apply heat shrink or cold shrink insulation kits

### Connection to Transformer Bushings
- HV cables connect to the primary bushings (usually marked H1, H2, H3)
- LV cables connect to secondary bushings (marked X1, X2, X3)
- Torque bolts to manufacturer-specified values

### Grounding
Connect grounding cables to the transformer tank and ground grid to ensure safety and fault protection.

### Testing and Commissioning
- Perform insulation resistance tests (megger)
- Check phase sequence and polarity
- Conduct load and no-load tests before energizing

## Safety and Best Practices
- Use PPE: Gloves, goggles, and arc-flash protection
- Follow local electrical codes: Adhere to IEC, IEEE, or national standards
- Label all connections for maintenance
- Ensure cable ends and bushings are dry before connection`
  },
  {
    index: 16,
    name: "Transformer Bushing Connection",
    alt: "Detailed view of transformer bushing connections and cable earth truck assembly, critical for safe high-voltage power transfer and grounding.",
    description: "Detailed view of transformer bushing connections and cable earth truck assembly, critical for safe high-voltage power transfer and grounding.",
    slug: "transformer-bushing-connection",
    url: "/diagrams/CABLE EARTH TRUCK.JPG",
    detailedContent: `Substation transformer bushing connections involve linking high-voltage and low-voltage cables to the transformer's bushings, which serve as insulated passageways for electrical conductors. Proper layout and phasing are critical for safe and efficient operation.

## Types of Transformer Bushings
- **High-voltage bushings (HV)**: Connect to the incoming power source, typically marked H1, H2, H3
- **Low-voltage bushings (LV)**: Connect to the outgoing distribution lines, marked X1, X2, X3
- **Neutral bushings**: Sometimes present for grounding or neutral return paths

## Bushing Layout and Phasing
Layout varies by transformer type:
- **Padmount transformers**: Bushings are usually front-facing, with HV on the left and LV on the right
- **Substation transformers**: Bushings may be located on the top, sides, or front, depending on the design and enclosure type

Phasing must be consistent between the transformer and connected equipment to avoid faults. Always verify phase sequence before energizing.

## Connection Process
- Inspect bushings for cleanliness and integrity
- Route cables to the correct bushing terminals, avoiding sharp bends
- Terminate cables using appropriate lugs and torque specifications
- Apply insulation kits (heat shrink or cold shrink) to seal connections
- Ground the transformer via designated grounding bushings or terminals`
  },
  {
    index: 17,
    name: "Cable Rack Holder",
    alt: "Sturdy cable rack holder installation designed to support heavy cable loads and maintain organized separation in vertical or horizontal runs.",
    description: "Sturdy cable rack holder installation designed to support heavy cable loads and maintain organized separation in vertical or horizontal runs.",
    slug: "cable-rack-holder",
    url: "/diagrams/Cable rack holder.jpg",
    detailedContent: `A substation cable rack holder is a structural support system used to organize, secure, and route power and control cables within a substation. It ensures safety, accessibility, and protection of cables from mechanical damage and environmental exposure.

## Purpose of Cable Rack Holders in Substations
- **Cable organization**: Keeps high-voltage, low-voltage, and control cables neatly separated and routed
- **Mechanical protection**: Prevents sagging, abrasion, and accidental contact with sharp or hot surfaces
- **Ease of maintenance**: Facilitates inspection, testing, and replacement of cables
- **Electrical segregation**: Maintains safe distances between power, control, and communication cables to reduce interference and fault risks
- **Compliance with standards**: Supports adherence to IEEE 525 and other substation cable routing guidelines

## Common Types
| Type | Description | Use Case |
|------|-------------|----------|
| Wall-mounted racks | Fixed to walls or structures | Indoor substations or control rooms |
| Floor-mounted trays | Standalone or anchored to concrete | Outdoor substations or cable trenches |
| Ladder-type trays | Open-frame design for ventilation | Power cables with high heat dissipation |
| Perforated trays | Solid base with holes for airflow | Control and signal cables |
| Vertical risers | Support vertical cable runs | Between levels or equipment tiers |

## Installation Best Practices
- Use corrosion-resistant materials like galvanized steel or aluminum
- Label cable paths clearly for identification and maintenance
- Maintain bend radius and avoid sharp turns to protect cable integrity
- Separate voltage classes and signal types to prevent interference
- Anchor securely to withstand seismic or mechanical stress`
  },
  {
    index: 18,
    name: "Cable Rack 1",
    alt: "Primary cable rack system implementation showing organized routing of multiple cable bundles in an industrial corridor.",
    description: "Primary cable rack system implementation showing organized routing of multiple cable bundles in an industrial corridor.",
    slug: "cable-rack-1",
    url: "/diagrams/Cable Rack1.jpg",
    detailedContent: `A substation cable tray raiser is a vertical or inclined structural element used to elevate and route cable trays between different levels or sections of a substation. It ensures safe transitions for cables while maintaining accessibility and mechanical protection.

## What Is a Cable Tray Raiser?
A cable tray raiser is a specialized tray section designed to:
- Lift or lower cable trays between elevations (e.g., from ground level to equipment platforms)
- Maintain bend radius and structural integrity of cables during vertical transitions
- Support cable weight and prevent sagging or stress at elevation changes

## Types of Cable Tray Raisers
| Type | Description | Use Case |
|------|-------------|----------|
| Vertical riser | Straight vertical section | Connecting trays between floors or platforms |
| Horizontal bend raiser | Curved or angled section | Smooth transition between horizontal and vertical planes |
| Tee raiser | Branches off main tray vertically | For control panels or switchgear mounted above/below |
| Reducer raiser | Changes tray width during elevation | When transitioning between tray sizes |

## Installation Tips
- **Use compatible materials**: Match raiser material with tray (e.g., galvanized steel, aluminum)
- **Secure with brackets**: Anchor raisers to walls or frames to prevent movement
- **Label transitions**: Clearly mark cable paths for maintenance and safety
- **Avoid sharp bends**: Use gradual curves to protect cable insulation`
  },
  {
    index: 19,
    name: "Cable Rack 2",
    alt: "Secondary view of the cable rack infrastructure, highlighting the modular design allowing for future expansion and maintenance.",
    description: "Secondary view of the cable rack infrastructure, highlighting the modular design allowing for future expansion and maintenance.",
    slug: "cable-rack-2",
    url: "/diagrams/Cable Rack3.jpg",
    detailedContent: `A modular cable rack infrastructure designed for scalability and ease of maintenance in industrial substations.

## Key Features
- **Modular design**: Allows for future expansion without major structural changes
- **Corrosion-resistant materials**: Hot-dip galvanized steel or aluminum construction
- **Load capacity**: Engineered to support heavy cable loads with safety margins
- **Accessibility**: Designed for easy cable pulling and maintenance access

## Installation Considerations
- Support intervals typically every 1.5–2 meters
- Cable segregation between power and control circuits
- Bonding jumpers for grounding continuity
- Fire barriers in critical zones`
  },
  {
    index: 20,
    name: "Cable Tray Raiser",
    alt: "Vertical cable tray riser section allowing smooth transition of cabling between different elevations in a multi-story facility.",
    description: "Vertical cable tray riser section allowing smooth transition of cabling between different elevations in a multi-story facility.",
    slug: "cable-tray-raiser",
    url: "/diagrams/cable tray riser.jpg",
    detailedContent: `A cable tray raiser is a vertical structural element used to route cables between different elevation levels within a substation or industrial facility.

## Purpose
- Provides vertical transitions for cables between floors or equipment platforms
- Maintains proper bend radius during elevation changes
- Supports cable weight and prevents sagging at vertical runs

## Design Features
- **Material**: Galvanized steel, aluminum, or stainless steel
- **Configuration**: Straight vertical sections, curved transitions, or combination
- **Support**: Wall-mounted brackets or floor-anchored frames
- **Cable management**: Integrated cable ties and support rings

## Installation Guidelines
- Maintain minimum bend radius per cable specifications
- Secure risers at maximum 1.5-meter intervals
- Provide adequate space for cable pulling and maintenance
- Bond all metallic components to earth grid`
  },
  {
    index: 21,
    name: "Cable Tray Routing",
    alt: "Strategic cable tray routing overview demonstrating efficient path planning to avoid obstructions and minimize cable lengths.",
    description: "Strategic cable tray routing overview demonstrating efficient path planning to avoid obstructions and minimize cable lengths.",
    slug: "cable-tray-routing",
    url: "/diagrams/Cable tray routing.jpg",
    detailedContent: `Strategic cable tray routing involves planning optimal paths for cable management systems to ensure efficient, safe, and accessible cable installations.

## Routing Principles
- **Shortest path**: Minimize cable lengths to reduce costs and losses
- **Obstruction avoidance**: Route around equipment, HVAC, and structural elements
- **Accessibility**: Ensure access for maintenance and future modifications
- **Segregation**: Separate power, control, and communication cables

## Design Considerations
- Follow NEMA VE 1 and IEC 61537 for tray selection and sizing
- Maintain minimum bend radius at all direction changes
- Provide expansion joints for thermal movement
- Include fire barriers at penetrations through fire-rated walls

## Best Practices
- Document routing with as-built drawings
- Label cable routes for identification
- Coordinate with other disciplines (mechanical, structural)
- Plan for future expansion capacity`
  },
  {
    index: 22,
    name: "Lightning Arrester",
    alt: "High-performance lightning arrester installation protecting substation equipment from voltage surges and atmospheric discharges.",
    description: "High-performance lightning arrester installation protecting substation equipment from voltage surges and atmospheric discharges.",
    slug: "lightning-arrester",
    url: "/diagrams/lightning-arrester.png",
    detailedContent: `A lightning arrester (surge arrester) is a protective device used in substations to limit transient overvoltages caused by lightning strikes or switching operations.

## Function
- **Surge protection**: Diverts high-energy transients to ground
- **Equipment protection**: Prevents damage to transformers, switchgear, and other equipment
- **System reliability**: Ensures continuous operation during atmospheric disturbances

## Types of Lightning Arresters
- **Gapped type**: Traditional design with spark gaps
- **Gapless (MOV)**: Metal oxide varistor technology for faster response
- **Station class**: Heavy-duty for substation applications
- **Distribution class**: For lower voltage distribution systems

## Technical Specifications
- **Rated voltage**: Matched to system voltage (e.g., 220kV, 400kV)
- **Discharge current**: Typically 10-20 kA rating
- **Insulation level**: Coordinated with protected equipment
- **Housing**: Porcelain or polymer for weather resistance

## Installation Guidelines
- Mount close to protected equipment for effective protection
- Connect to dedicated ground conductor
- Ensure adequate clearances per voltage level
- Regular inspection of housing and connections`
  },
  {
    index: 23,
    name: "CCCW Pump with Earthing",
    alt: "Component Cooling Water (CCCW) pump installation featuring comprehensive earthing details for electrical safety and equipment protection.",
    description: "Component Cooling Water (CCCW) pump installation featuring comprehensive earthing details for electrical safety and equipment protection.",
    slug: "cccw-pump-with-earthing",
    url: "/diagrams/CCCW - pump along with earthing details.jpg",
    detailedContent: `Component Cooling Water (CCCW) pump systems in substations require proper earthing to ensure electrical safety and equipment protection.

## CCCW System Overview
The CCCW system provides cooling for electrical equipment:
- Transformer cooling systems
- Reactor cooling circuits
- Auxiliary equipment heat exchangers

## Earthing Requirements
- **Motor frame earthing**: Direct connection to earth grid
- **Pump base earthing**: Bonded to structural steel and earth mat
- **Cable armor earthing**: Terminated at both ends
- **Control panel earthing**: Separate instrument earth if required

## Installation Standards
- IEEE 80 for ground grid design
- IEC 60364 for electrical installations
- IS 3043 for Indian earthing practices

## Maintenance Considerations
- Regular earth resistance testing
- Visual inspection of earth connections
- Continuity checks during shutdown periods
- Corrosion monitoring in outdoor installations`
  },
  {
    index: 24,
    name: "CCCW Structural Arrangement for ACHE",
    alt: "Structural support arrangement for Air Cooled Heat Exchanger (ACHE) within the CCCW system, ensuring mechanical stability.",
    description: "Structural support arrangement for Air Cooled Heat Exchanger (ACHE) within the CCCW system, ensuring mechanical stability.",
    slug: "cccw-structural-arrangement-for-ache",
    url: "/diagrams/CCCW - structural arrangement for ACHE.jpg",
    detailedContent: `The structural arrangement for Air Cooled Heat Exchangers (ACHE) in CCCW systems is critical for mechanical stability and operational efficiency.

## ACHE System Components
- **Tube bundles**: Heat transfer elements
- **Fans**: Forced or induced draft air circulation
- **Headers and manifolds**: Fluid distribution
- **Support structure**: Steel framework for elevation

## Structural Design Considerations
- **Load bearing**: Dead load, live load, and wind loads
- **Vibration damping**: Isolation from fan and pump vibrations
- **Access platforms**: For maintenance and inspection
- **Pipe supports**: For inlet/outlet connections

## Foundation Requirements
- Reinforced concrete footings
- Anchor bolt arrangements
- Provision for thermal expansion
- Drainage for condensate and rainwater

## Applicable Standards
- ASME B31.1 for piping
- API 661 for air-cooled heat exchangers
- AISC for structural steel design`
  },
  {
    index: 25,
    name: "Control Panel",
    alt: "Modern electrical control panel interface with indicators and switches for real-time monitoring and operation of plant systems.",
    description: "Modern electrical control panel interface with indicators and switches for real-time monitoring and operation of plant systems.",
    slug: "control-panel",
    url: "/diagrams/Control panel.jpg",
    detailedContent: `A substation control panel is the centralized interface for monitoring, controlling, and protecting electrical equipment and circuits within the substation.

## Panel Components
- **HMI displays**: Touch screens or graphical displays for system visualization
- **Control switches**: For manual operation of circuit breakers and isolators
- **Indicator lamps**: Status indication for equipment states
- **Meters**: Voltage, current, power, and energy measurements
- **Relays**: Protection and automation relays
- **Annunciators**: Alarm indication and acknowledgment

## Panel Types
- **Local control panels (LCP)**: Equipment-specific control
- **Marshalling panels**: Signal consolidation and distribution
- **Relay panels**: Protection relay housing
- **SCADA interface panels**: Remote control communication

## Design Features
- **Cable entry**: Bottom or top entry with proper gland plates
- **Ventilation**: Natural or forced cooling
- **IP rating**: Dust and moisture protection
- **Documentation**: Wiring diagrams and rack layouts

## Standards Compliance
- IEC 61439 for low-voltage switchgear assemblies
- IEEE C37.1 for SCADA and automation
- IS 8623 for control panels`
  },
  {
    index: 26,
    name: "LV/MV Power Cable Entry Arrangement",
    alt: "Engineered arrangement for Low Voltage (LV) and Medium Voltage (MV) power cable entry, featuring proper sealing and strain relief.",
    description: "Engineered arrangement for Low Voltage (LV) and Medium Voltage (MV) power cable entry, featuring proper sealing and strain relief.",
    slug: "lv-mv-power-cable-entry-arrangement",
    url: "/diagrams/lv-mv-power-cable-entry-arrangement.jpg",
    detailedContent: `Substation cable entry arrangements for LV (Low Voltage) and MV (Medium Voltage) power cables ensure safe, organized, and protected transitions from external cable routes into control rooms, panels, or switchgear.

## Purpose
- **Protection**: Shields cables from mechanical damage, moisture, and environmental exposure
- **Organization**: Maintains proper cable routing and segregation
- **Sealing**: Prevents ingress of water, dust, and pests
- **Strain relief**: Reduces stress on cable terminations

## Key Components
- **Cable glands**: Provide sealing and strain relief at entry points
- **Entry plates**: Steel or aluminum plates with multiple gland positions
- **Fire stops**: Intumescent or mineral wool barriers for fire protection
- **Cable supports**: Saddle clamps or cleats for securing cables

## Design Considerations
- Cable segregation between LV and MV
- Adequate spacing for heat dissipation
- Accessibility for future cable additions
- Compliance with IEC 60529 for IP ratings

## Installation Guidelines
- Use appropriate gland sizes for cable diameters
- Apply fire-stop compound at wall penetrations
- Label all cable entries for identification
- Test cable sealing for water tightness`
  },
  {
    index: 27,
    name: "Cable Tray Installation with Power Cables",
    alt: "Loaded cable tray installation verifying capacity and separation compliance for multiple high-amperage power cables.",
    description: "Loaded cable tray installation verifying capacity and separation compliance for multiple high-amperage power cables.",
    slug: "cable-tray-installation-with-power-cables",
    url: "/diagrams/cable-tray-installation-with-power-cables.jpg",
    detailedContent: `Cable tray installations with power cables require careful attention to load capacity, heat dissipation, and cable separation to ensure safe and efficient operation.

## Cable Fill Considerations
- **NEC Article 392**: Provides fill requirements for cable trays
- **Heat dissipation**: Adequate spacing prevents overheating
- **Future expansion**: Leave 20-30% spare capacity

## Cable Separation
- Separate power cables from control and signal cables
- Maintain minimum spacing between voltage classes
- Use dividers or separate trays for different circuit types

## Installation Guidelines
- Secure cables with ties at regular intervals
- Avoid crossing cables at sharp angles
- Label cables at both ends and at regular intervals
- Document cable routing on as-built drawings

## Load Verification
- Calculate cumulative cable weight per meter
- Verify tray and support capacity
- Check bend radius at direction changes
- Ensure proper grounding of cable armor and tray`
  },
  {
    index: 28,
    name: "Cable Tray Support Structure",
    alt: "Reinforced cable tray support structure implementation, specifically designed to handle dynamic loads and spanning distances.",
    description: "Reinforced cable tray support structure implementation, specifically designed to handle dynamic loads and spanning distances.",
    slug: "cable-tray-support-structure-1",
    url: "/diagrams/cable-tray-support-structure-1.jpg",
    detailedContent: `A reinforced cable tray support structure provides mechanical stability for cable routing systems, designed to handle static and dynamic loads across varying spans.

## Design Features
- **Load capacity**: Engineered for cumulative cable weight plus safety factor
- **Span distance**: Support intervals based on tray type and load
- **Material**: Hot-dip galvanized steel or aluminum
- **Connection**: Bolted or welded joints for structural integrity

## Load Considerations
- Dead load: Weight of cables and trays
- Live load: Installation and maintenance personnel
- Environmental: Wind, seismic, and thermal loads

## Installation Standards
- NEMA VE 1 for cable tray systems
- IEEE 525 for substation cable systems
- Local structural codes for seismic zones`
  },
  {
    index: 29,
    name: "Earthing Busbar Installation",
    alt: "Copper earthing busbar installation providing a common grounding point for multiple electrical circuits and equipment frames.",
    description: "Copper earthing busbar installation providing a common grounding point for multiple electrical circuits and equipment frames.",
    slug: "earthing-busbar-installation",
    url: "/diagrams/earthing-busbar-installation.jpg",
    detailedContent: `An earthing busbar in a substation is a common grounding point that collects and distributes earth connections from multiple circuits and equipment frames.

## Purpose
- **Centralized grounding**: Single point for multiple earth connections
- **Fault current path**: Low-impedance path for fault currents
- **Equipotential bonding**: Maintains equal potential across equipment
- **Safety compliance**: Meets grounding standards and codes

## Busbar Specifications
- **Material**: Copper (preferred) or aluminum
- **Size**: Typically 50x6mm to 100x10mm depending on fault current
- **Mounting**: Insulated supports on walls or panels
- **Connections**: Bolted lugs with anti-corrosive compound

## Installation Guidelines
- Connect to main earth grid via dedicated conductor
- Use star washer and locknut for secure connections
- Apply conductive grease to prevent oxidation
- Label all connections for identification`
  },
  {
    index: 30,
    name: "Structure Earthing Connection",
    alt: "Secure structural earthing connection detail ensuring electrical continuity between steel framework and the facility grounding grid.",
    description: "Secure structural earthing connection detail ensuring electrical continuity between steel framework and the facility grounding grid.",
    slug: "structure-earthing-connection",
    url: "/diagrams/structure-earthing-connection.jpg",
    detailedContent: `Structural earthing connections bond metallic building elements to the grounding system for electrical safety and lightning protection.

## Purpose
- **Safety**: Prevents touch voltage hazards
- **Lightning protection**: Provides path for lightning currents
- **EMC**: Reduces electromagnetic interference
- **Fault protection**: Ensures protective device operation

## Connection Methods
- **Bolted connections**: GI or copper flats with bolts
- **Exothermic welding**: Permanent molecular bond
- **Clamp connections**: Adjustable pressure clamps

## Design Standards
- IEEE 80 for substation grounding
- IEC 62305 for lightning protection
- IS 3043 for earthing practice

## Maintenance
- Annual visual inspection
- Continuity testing during shutdown
- Corrosion monitoring and treatment`
  },
  {
    index: 31,
    name: "CCCW Pump House Layout",
    alt: "Overview of the CCCW Pump House layout showing equipment positioning, piping pathways, and maintenance aisle clearances.",
    description: "Overview of the CCCW Pump House layout showing equipment positioning, piping pathways, and maintenance aisle clearances.",
    slug: "cccw-pump-house-layout",
    url: "/diagrams/cccw-pump-house-layout.jpg",
    detailedContent: `A CCCW Pump House layout defines the arrangement of pumps, piping, and electrical equipment for Component Cooling Water systems.

## Layout Elements
- **Pump placement**: Aligned for optimal flow and maintenance access
- **Piping routes**: Suction and discharge headers
- **Electrical connections**: Motor control centers and cables
- **Access aisles**: Minimum 1.2m width for maintenance

## Design Considerations
- **NPSH requirements**: Adequate suction head for pumps
- **Vibration isolation**: Flexible connections and mounts
- **Drainage**: Floor slopes and sump pits
- **Ventilation**: Heat removal from motors and equipment

## Equipment Earthing
- Motor frames connected to earth grid
- Metallic piping bonded for static discharge
- Control panels with dedicated earth bus`
  },
  {
    index: 32,
    name: "Outdoor Cable Rack Supporting Structure",
    alt: "Weather-resistant outdoor cable rack supporting structure designed to protect cabling from environmental exposure while maintaining accessibility.",
    description: "Weather-resistant outdoor cable rack supporting structure designed to protect cabling from environmental exposure while maintaining accessibility.",
    slug: "outdoor-cable-rack-supporting-structure",
    url: "/diagrams/outdoor-cable-rack-supporting-structure.jpg",
    detailedContent: `Outdoor cable rack supporting structures are engineered to withstand environmental conditions while providing organized cable routing.

## Environmental Protection
- **Corrosion resistance**: Hot-dip galvanized steel
- **UV protection**: Coated or naturally resistant materials
- **Weather sealing**: Covers for cable protection
- **Drainage**: Sloped surfaces prevent water accumulation

## Structural Design
- **Wind load**: Designed for local wind conditions
- **Seismic**: Bracing for earthquake zones
- **Ice/snow**: Load allowance for cold climates

## Installation Features
- Foundation anchoring to concrete piers
- Expansion joints for thermal movement
- Cable entry/exit provisions
- Grounding connections to earth grid`
  },
  {
    index: 33,
    name: "Raised Floor Installation Work",
    alt: "Raised floor installation work in progress, creating an underfloor plenum for efficient cable management and air conditioning in control rooms.",
    description: "Raised floor installation work in progress, creating an underfloor plenum for efficient cable management and air conditioning in control rooms.",
    slug: "raised-floor-installation-work",
    url: "/diagrams/raised-floor-installation-work.jpg",
    detailedContent: `Raised floor installations in substation control rooms provide organized cable routing and HVAC distribution in the underfloor plenum.

## Benefits
- **Cable management**: Organized routing under the floor
- **Air distribution**: Underfloor HVAC delivery
- **Flexibility**: Easy reconfiguration of cable routes
- **Accessibility**: Lift-out panels for maintenance

## Components
- **Pedestals**: Adjustable height supports
- **Stringers**: Connecting beams between pedestals
- **Floor panels**: Load-bearing tiles (concrete, steel, or composite)
- **Ramps**: Access transitions from normal floor level

## Design Standards
- Load rating per CISCA guidelines
- Fire rating for control room applications
- Grounding of metallic components
- Static dissipation for electronic equipment`
  },
  {
    index: 34,
    name: "Outdoor Filtration and Pumping Unit",
    alt: "Integrated outdoor filtration and pumping unit installation for industrial water treatment, complete with piping and electrical connections.",
    description: "Integrated outdoor filtration and pumping unit installation for industrial water treatment, complete with piping and electrical connections.",
    slug: "outdoor-filtration-and-pumping-unit",
    url: "/diagrams/outdoor-filtration-and-pumping-unit.jpg",
    detailedContent: `Outdoor filtration and pumping units provide water treatment for cooling systems and other industrial applications in substations.

## System Components
- **Pumps**: Centrifugal or positive displacement
- **Filters**: Sand, cartridge, or multimedia
- **Piping**: Suction and discharge manifolds
- **Instrumentation**: Pressure, flow, and level sensors

## Electrical Installation
- Motor control panels with starters
- Cable routing through weatherproof conduits
- Equipment grounding to earth grid
- Lighting for maintenance access

## Environmental Protection
- Weatherproof enclosures for controls
- Corrosion-resistant materials
- Containment for chemical storage
- Proper drainage and spill control`
  },
  {
    index: 35,
    name: "Earth Pipe 1",
    alt: "Installation of Earth Pipe 1, a key component of the grounding system designed to dissipate fault currents safely into the ground.",
    description: "Installation of Earth Pipe 1, a key component of the grounding system designed to dissipate fault currents safely into the ground.",
    slug: "earth-pipe-1",
    url: "/diagrams/Earth Pipe-1.jpg",
    detailedContent: `Earth pipes (grounding electrodes) are critical components of substation earthing systems, providing a low-resistance path for fault currents.

## Types of Earth Electrodes
- **Pipe electrodes**: GI or copper pipes driven into soil
- **Rod electrodes**: Solid copper-bonded steel rods
- **Plate electrodes**: Buried metal plates
- **Strip electrodes**: Horizontal conductors in trenches

## Installation Guidelines
- Depth: Minimum 2-3 meters for pipe electrodes
- Soil treatment: Bentonite or charcoal for low resistivity
- Connections: Exothermic welding or compression fittings
- Protection: Concrete chamber at surface level

## Testing Requirements
- Initial resistance measurement
- Periodic testing (annually)
- Documentation of readings
- Comparison with design values`
  },
  {
    index: 36,
    name: "Earth Pipe 2",
    alt: "Secondary earth pipe installation adding redundancy and lowering the overall resistance of the earthing system for enhanced safety.",
    description: "Secondary earth pipe installation adding redundancy and lowering the overall resistance of the earthing system for enhanced safety.",
    slug: "earth-pipe-2",
    url: "/diagrams/Earth Pipe-2.jpg",
    detailedContent: `Secondary earth pipes provide redundancy in grounding systems and reduce overall earth resistance through parallel electrode configuration.

## Redundancy Benefits
- **Reliability**: Backup path if one electrode degrades
- **Lower resistance**: Parallel electrodes reduce total resistance
- **Current distribution**: Spreads fault current across electrodes
- **Safety margin**: Exceeds minimum requirements

## Spacing Requirements
- Minimum 3 meters between parallel electrodes
- Optimal spacing equals electrode length
- Grid pattern for large substations

## Connection to Earth Grid
- GI or copper flat conductors
- Buried connections protected from corrosion
- Test points at accessible locations
- Documentation of electrode locations`
  },
  {
    index: 37,
    name: "Earth Pit",
    alt: "Inspection view of an earth pit showing the electrode connection and cover, facilitating easy maintenance and resistance testing.",
    description: "Inspection view of an earth pit showing the electrode connection and cover, facilitating easy maintenance and resistance testing.",
    slug: "earth-pit",
    url: "/diagrams/earth pit.jpg",
    detailedContent: `An earth pit provides accessible inspection and connection points for grounding electrodes, facilitating maintenance and resistance testing.

## Earth Pit Components
- **Chamber**: Concrete or brick construction
- **Cover**: CI or concrete lid with identification
- **Electrode**: Pipe, rod, or plate connection point
- **Conductor**: GI or copper flat to earth grid

## Design Features
- Waterproof construction above water table
- Drainage provisions in wet areas
- Clear identification and labeling
- Accessible location for testing

## Maintenance Activities
- Visual inspection of connections
- Earth resistance measurement
- Tightening of bolted connections
- Soil treatment if resistance increases

## Standards
- IS 3043 for earthing practice
- IEEE 81 for earth resistance testing
- Local utility specifications`
  },
  {
    index: 38,
    name: "Earth Rod",
    alt: "Copper-bonded earth rod installation detail, driven deep into the soil to reach low-resistivity strata for effective grounding.",
    description: "Copper-bonded earth rod installation detail, driven deep into the soil to reach low-resistivity strata for effective grounding.",
    slug: "earth-rod",
    url: "/diagrams/earth rod at 220kV (2).jpg",
    detailedContent: `Copper-bonded earth rods are driven into soil to provide low-resistance grounding paths for substation electrical systems.

## Earth Rod Specifications
- **Core**: High-strength steel
- **Coating**: Electroplated copper (min 0.25mm)
- **Diameter**: 14mm to 20mm typical
- **Length**: 1.5m to 3m standard sections

## Installation Methods
- **Driving**: Pneumatic or manual hammering
- **Coupling**: Threaded connections for extension
- **Depth**: Until desired resistance achieved
- **Protection**: Rod cap during driving

## Connection Details
- Compression clamps or exothermic welds
- Above-ground connection in inspection pit
- Protection from mechanical damage
- Corrosion prevention at soil line

## Performance
- Target resistance: <1 ohm for substations
- Parallel rods for lower resistance
- Soil treatment for high-resistivity areas`
  },
  {
    index: 39,
    name: "Earth Rod 220KV",
    alt: "Specialized earth rod configuration for a 220kV substation, engineered to handle high fault currents typical of high-voltage transmission.",
    description: "Specialized earth rod configuration for a 220kV substation, engineered to handle high fault currents typical of high-voltage transmission.",
    slug: "earth-rod-220kv",
    url: "/diagrams/earth rod at 220kV.jpg",
    detailedContent: `Earth rod configurations for 220kV substations are designed for high fault current handling and enhanced safety requirements.

## High-Voltage Considerations
- **Fault current**: Designed for 40kA or higher
- **Step voltage**: Limited by grid design
- **Touch voltage**: Equipment grounding critical
- **GPR**: Ground potential rise management

## Design Features
- Multiple rod electrodes in grid pattern
- Heavy-gauge conductor connections
- Exothermic welded joints
- Concrete inspection chambers

## Standards Compliance
- IEEE 80 for grounding design
- IEC 61936 for installation requirements
- IS 3043 for Indian installations

## Testing Requirements
- Fall-of-potential method
- Step and touch voltage measurements
- Current injection testing
- Annual resistance verification`
  },
  {
    index: 40,
    name: "Multi Tier Cable Tray Support System",
    alt: "EPS-0155 designated multi-tier cable tray support system, optimizing support for dense cabling requirements in limited spaces.",
    description: "EPS-0155 designated multi-tier cable tray support system, optimizing support for dense cabling requirements in limited spaces.",
    slug: "multi-tier-cable-tray-support-system",
    url: "/diagrams/EPS-0155.jpg",
    detailedContent: `Multi-tier cable tray support systems maximize cable routing capacity in space-constrained environments by stacking trays vertically.

## Configuration Features
- **Multiple tiers**: 2 to 6 levels depending on requirements
- **Vertical spacing**: 300-500mm between tiers
- **Load distribution**: Engineered for cumulative cable weight
- **Cable segregation**: Power, control, and communication separation

## Structural Design
- Pre-fabricated modular frames
- Hot-dip galvanized steel construction
- Bolted or welded base connections
- Seismic bracing where required

## Installation Advantages
- Reduced floor space requirement
- Organized cable segregation
- Easy future expansion
- Simplified maintenance access

## Standards
- NEMA VE 1 for cable tray systems
- IEEE 525 for substation cables
- IEC 61537 for cable management`
  },
  {
    index: 41,
    name: "Equipment Earthing",
    alt: "Direct equipment earthing connection ensuring that non-current-carrying metal parts are safely bonded to ground potential.",
    description: "Direct equipment earthing connection ensuring that non-current-carrying metal parts are safely bonded to ground potential.",
    slug: "equipment-earthing",
    url: "/diagrams/Equipment Earthing.jpg",
    detailedContent: `Equipment earthing ensures all non-current-carrying metallic parts of electrical equipment are bonded to the ground system for personnel safety and fault protection.

## Purpose
- Prevents dangerous touch voltages
- Provides fault current return path
- Enables protective device operation
- Reduces electromagnetic interference

## Connection Methods
- Direct bolted connections with lugs
- Braided flexible connectors for vibrating equipment
- Exothermic welding for permanent bonds

## Standards
- IEEE 80 for substation grounding
- IEC 60364 for electrical installations
- IS 3043 for earthing practice`
  },
  {
    index: 42,
    name: "FD Fan Body Earth",
    alt: "Body earthing detail for a Forced Draft (FD) fan, critical for preventing static buildup and ensuring personnel safety.",
    description: "Body earthing detail for a Forced Draft (FD) fan, critical for preventing static buildup and ensuring personnel safety.",
    slug: "fd-fan-body-earth",
    url: "/diagrams/FD fan Body earth.jpg",
    detailedContent: `Forced Draft (FD) fan body earthing protects personnel from electrical shock and prevents static discharge that could damage bearings or cause sparks.

## Earthing Requirements
- Motor frame grounded directly to earth grid
- Fan casing bonded to motor frame
- Shaft earthing brush for static discharge
- Control panel earthing

## Installation Details
- Heavy gauge copper conductor (minimum 16 sq mm)
- Short, direct path to earth electrode
- Flexible braids for vibrating equipment
- Regular inspection of connections`
  },
  {
    index: 43,
    name: "FO Treatment Area",
    alt: "Fuel Oil (FO) treatment area infrastructure showing layout of pumps, separators, and associated safety grounding systems.",
    description: "Fuel Oil (FO) treatment area infrastructure showing layout of pumps, separators, and associated safety grounding systems.",
    slug: "fo-treatment-area",
    url: "/diagrams/FO treatment area.jpg",
    detailedContent: `A substation fuel oil treatment area houses equipment for filtering, heating, and purifying insulating oil used in power transformers and related equipment.

## Components
- Oil filtration and purification units
- Heating systems for viscosity control
- Pumps and transfer equipment
- Storage tanks and day tanks

## Safety Features
- Fire suppression systems
- Containment for oil spills
- Grounding of all metallic equipment
- Ventilation for fume control

## Design Standards
- IEEE C57.106 for oil maintenance
- IEC 60422 for insulating oil supervision
- Local fire safety regulations`
  },
  {
    index: 44,
    name: "Underground Cable Duct Bank",
    alt: "Construction of an underground cable duct bank offering robust protection for cables crossing roadways or high-traffic areas.",
    description: "Construction of an underground cable duct bank offering robust protection for cables crossing roadways or high-traffic areas.",
    slug: "underground-cable-duct-bank",
    url: "/diagrams/underground-cable-duct-bank.jpg",
    detailedContent: `An underground cable duct bank is a structured conduit system used to route and protect electrical cables beneath the ground in substations and utility corridors.

## Key Features
- **Conduit Types**: PVC, HDPE, or RGS (Rigid Galvanized Steel)
- **Configuration**: Arranged in horizontal and vertical tiers
- **Concrete encasement**: Protects against mechanical damage
- **Access points**: Manholes or handholes for cable pulling

## Design Standards
- IEEE Std. 525-2007 for cable systems
- IS 1255 for power cable installation
- CEA Guidelines for underground systems

## Advantages
- Protection from physical damage and moisture
- Extended cable life with reduced maintenance
- Improved safety and fault containment
- Eliminates overhead clutter`
  },
  {
    index: 45,
    name: "Well Glass Luminaire Lamp",
    alt: "Explosion-proof well glass luminaire installation providing reliable illumination in hazardous industrial environments.",
    description: "Explosion-proof well glass luminaire installation providing reliable illumination in hazardous industrial environments.",
    slug: "well-glass-luminaire-lamp",
    url: "/diagrams/well-glass-luminaire-lamp.jpg",
    detailedContent: `A Well Glass Luminaire Lamp is a rugged, enclosed lighting fixture designed for industrial environments, offering high durability, energy efficiency, and protection against dust, moisture, and impact.

## Key Features
- **Housing**: High-pressure die-cast aluminum with toughened glass
- **Protection**: IP65 rating, flameproof options available
- **Efficiency**: LED variants offer 120 lm/W
- **Temperature Range**: -20°C to +55°C operating range

## Applications
- Substations and switchyards
- Oil & gas facilities
- Chemical plants and dusty environments
- Outdoor industrial areas

## Benefits
- Energy savings up to 50% vs HPSV/MH
- Long lifespan with minimal maintenance
- Safety rated for hazardous zones`
  },
  {
    index: 46,
    name: "Galvanized Iron (GI) pipe clamp",
    alt: "Durable Galvanized Iron (GI) pipe clamp used for securely fixing conduits or pipes to support structures, preventing vibration and movement.",
    description: "Durable Galvanized Iron (GI) pipe clamp used for securely fixing conduits or pipes to support structures, preventing vibration and movement.",
    slug: "galvanized-iron-gi-pipe-clamp",
    url: "/diagrams/galvanized-iron-gi-pipe-clamp.jpg",
    detailedContent: `A Galvanized Iron (GI) pipe clamp is a corrosion-resistant metal fastener used to securely hold and support pipes in electrical, plumbing, and industrial installations.

## Specifications
- **Material**: Galvanized Iron (zinc-coated)
- **Sizes**: 20mm to 50mm common sizes
- **Thickness**: 1-2mm depending on duty
- **Finish**: Silver, corrosion-resistant

## Applications
- Electrical conduit support
- Plumbing pipe mounting
- Industrial pipe installations
- HVAC duct support

## Benefits
- Corrosion resistance in outdoor environments
- Cost-effective alternative to stainless steel
- Easy installation with standard tools`
  },
  {
    index: 47,
    name: "GI Pipe Support Clamp",
    alt: "Standard GI pipe support clamp assembly demonstrating a secure fastening method for piping runs along walls or ceilings.",
    description: "Standard GI pipe support clamp assembly demonstrating a secure fastening method for piping runs along walls or ceilings.",
    slug: "gi-pipe-support-clamp",
    url: "/diagrams/gi-pipe-support-clamp.jpg",
    detailedContent: `GI pipe support clamps provide secure mounting for conduits and pipes along walls, ceilings, or structural elements.

## Mounting Options
- Wall-mounted using bolts or screws
- Ceiling-suspended with threaded rods
- Beam clamped for structural mounting

## Features
- Prevents pipe movement and vibration
- Supports pipe weight and thermal expansion
- Corrosion-resistant galvanized finish

## Installation Guidelines
- Space supports per pipe size and material
- Use rubber lining for noise reduction
- Ensure proper alignment and level`
  },
  {
    index: 48,
    name: "Earth Flat Joint Connection",
    alt: "Welded/bolted earth flat joint connection ensuring a low-resistance path in the strip earthing network.",
    description: "Welded/bolted earth flat joint connection ensuring a low-resistance path in the strip earthing network.",
    slug: "earth-flat-joint-connection",
    url: "/diagrams/earth-flat-joint-connection.jpg",
    detailedContent: `Substation earth flat joint connections bond earthing conductors to ensure a continuous, low-resistance path to ground.

## Joint Types
- **Bolted Joint**: Overlapping strips with bolts and washers
- **Welded Joint**: Thermite or arc welding
- **Exothermic Weld**: Chemical fusion for permanent bond
- **Riveted Joint**: For older installations

## Installation Guidelines
- Clean contact surfaces before joining
- Overlap length: 75-100mm for flat strips
- Use stainless steel or galvanized bolts
- Apply corrosion protection for buried joints

## Standards
- IS 3043 for earthing practice
- IEC 60364 for grounding systems`
  },
  {
    index: 49,
    name: "Cable Tray Support System",
    alt: "Modular cable tray support system offering flexibility in installation height and tray width accommodation.",
    description: "Modular cable tray support system offering flexibility in installation height and tray width accommodation.",
    slug: "cable-tray-support-system",
    url: "/diagrams/cable-tray-support-system.jpg",
    detailedContent: `A cable tray support system is a structural framework used to securely mount and route electrical cables in industrial and commercial facilities.

## Components
- **Ladder trays**: For heavy-duty power cables
- **Perforated trays**: For control and communication cables
- **Support structures**: Cantilever arms, trapeze hangers, floor stands
- **Fasteners**: Splice plates, clamps, and bonding jumpers

## Design Considerations
- Load capacity for cable weight plus environmental loads
- Support spacing: 1.5 to 3 meters
- Cable fill per NEC 392 or IEC 61537
- Hot-dip galvanizing for outdoor use

## Benefits
- Improved safety with organized routing
- Easy maintenance and cable replacement
- Cost-effective compared to conduit systems`
  },
  {
    index: 50,
    name: "Transformer Base Earthing Connection",
    alt: "Transformer base earthing detail connecting the main tank and structural base to the substation earth grid.",
    description: "Transformer base earthing detail connecting the main tank and structural base to the substation earth grid.",
    slug: "transformer-base-earthing-connection",
    url: "/diagrams/transformer-base-earthing-connection.jpg",
    detailedContent: `Transformer base earthing connection grounds the metallic base and frame of a power transformer to the substation's earth grid for safety and fault protection.

## Purpose
- Personnel safety by maintaining tank at earth potential
- Provides low-resistance fault current path
- Works with surge arresters for lightning protection
- Ensures equipotential bonding

## Installation
- GI or copper flat (50x6mm or 75x10mm typical)
- Bolted lugs or exothermic welding
- Multiple connection points on large transformers
- Spring washers and anti-corrosive paste

## Standards
- IEEE 80 for substation grounding
- IEC 60076 for transformer specifications
- IS 2026 for Indian installations`
  },
  {
    index: 51,
    name: "Lattice Tower Foundation with Cable Duct",
    alt: "Lattice tower foundation featuring integrated cable ducts for clean entry of transmission line control and sensing cables.",
    description: "Lattice tower foundation featuring integrated cable ducts for clean entry of transmission line control and sensing cables.",
    slug: "lattice-tower-foundation-with-cable-duct",
    url: "/diagrams/lattice-tower-foundation-with-cable-duct.jpg",
    detailedContent: `A lattice tower foundation with cable duct integrates structural support for transmission towers with embedded pathways for power and control cables.

## Foundation Types
- **Pad & Chimney**: Common for lattice towers
- **Pile Foundation**: For poor soil conditions
- **Raft Foundation**: For uniform load distribution

## Cable Duct Integration
- PVC or RCC ducts embedded in foundation
- Ducts run to control rooms or cable trenches
- Bends and junction boxes for cable pulling

## Design Considerations
- Load-bearing for vertical, lateral, and uplift forces
- Thermal and electromagnetic separation
- Drainage provisions
- Manholes for cable inspection`
  },
  {
    index: 52,
    name: "Roof Earth Flat Connection",
    alt: "Roof-mounted earth flat connection part of the lightning protection system, diverting strike energy safely to ground.",
    description: "Roof-mounted earth flat connection part of the lightning protection system, diverting strike energy safely to ground.",
    slug: "roof-earth-flat-connection",
    url: "/diagrams/roof-earth-flat-connection.jpg",
    detailedContent: `Substation roof earth flat connections bond metallic roof components to the main earthing grid for lightning protection and equipotential bonding.

## Purpose
- Safely channels lightning strikes to ground
- Prevents voltage differences between roof structures
- Protects personnel during maintenance
- Ensures system integrity

## Installation
- GI or copper flats (25x3mm to 50x6mm)
- Bonded to roof steel and lightning arresters
- Connected via vertical down conductors
- Bolted lugs or exothermic welding

## Testing
- Continuity and earth resistance checks
- Regular visual inspections
- Post-storm verification`
  },
  {
    index: 53,
    name: "Cable and Pipe Rack Support Structure",
    alt: "Combined cable and pipe rack support structure showcasing efficient use of shared infrastructure supports in a process plant.",
    description: "Combined cable and pipe rack support structure showcasing efficient use of shared infrastructure supports in a process plant.",
    slug: "cable-and-pipe-rack-support-structure",
    url: "/diagrams/cable-and-pipe-rack-support-structure.jpg",
    detailedContent: `A substation cable and pipe rack support structure is a steel framework designed to organize, elevate, and protect power cables and piping systems.

## Key Components
- **Main Frame**: Galvanized steel with vertical posts and cross-bracing
- **Cable Tray Integration**: Multi-tier configurations
- **Pipe Supports**: U-bolts, saddle clamps, roller supports
- **Foundation**: Isolated concrete footings or plinth beams

## Design Considerations
- Load capacity for cables, pipes, and environmental loads
- Vertical tier spacing: 300-500mm
- Hot-dip galvanization for outdoor use
- Grounding of all metallic parts

## Benefits
- Organized routing prevents clutter
- Reduced risk of damage and faults
- Easy modification for future upgrades`
  },
  {
    index: 54,
    name: "Underground Cable Duct Bank",
    alt: "Secondary view of an underground cable duct bank emphasizing the concrete encasement for mechanical protection of conduits.",
    description: "Secondary view of an underground cable duct bank emphasizing the concrete encasement for mechanical protection of conduits.",
    slug: "underground-cable-duct-bank-1",
    url: "/diagrams/underground-cable-duct-bank-1.jpg",
    detailedContent: `Underground cable duct banks provide protected routing for electrical cables beneath the ground, with concrete encasement for durability.

## Components
- PVC, HDPE, or RCC conduits
- Concrete encasement with spacers
- Manholes and pull boxes
- Warning tape above ducts

## Design Standards
- IEEE Std. 525 for cable systems
- IS 1255 for power cable installation
- Load rating for surface traffic

## Installation
- Trenches excavated to required depth
- Conduits laid on spacers before concrete
- Proper backfilling and compaction`
  },
  {
    index: 55,
    name: "Underground Cable Trench Layout",
    alt: "Planned layout of an underground cable trench system with accessible covers for maintenance and cable addition.",
    description: "Planned layout of an underground cable trench system with accessible covers for maintenance and cable addition.",
    slug: "underground-cable-trench-layout",
    url: "/diagrams/underground-cable-trench-layout.jpg",
    detailedContent: `Underground cable trench layouts define the structured routing of cables beneath the ground with accessible covers for maintenance.

## Layout Planning
- Routes between equipment and control rooms
- Separation of power and control cables
- Junction boxes at intersections
- Manholes for cable pulling access

## Construction
- Reinforced concrete with precast covers
- Drainage provisions with sloped base
- Fire barriers at building penetrations
- Clear labeling and documentation`
  },
  {
    index: 56,
    name: "Cable Riser Arrangement",
    alt: "Systematic cable riser arrangement using specialized clamps/cleats to support the vertical weight of heavy cables.",
    description: "Systematic cable riser arrangement using specialized clamps/cleats to support the vertical weight of heavy cables.",
    slug: "cable-riser-arrangement",
    url: "/diagrams/cable-riser-arrangement.jpg",
    detailedContent: `Cable riser arrangements support vertical cable runs using specialized clamps and cleats to bear the weight of heavy power cables.

## Components
- Cable cleats and clamps
- Vertical mounting rails
- Intermediate supports
- Top and bottom termination points

## Design Considerations
- Cable weight per meter
- Support intervals (typically 1-2m)
- Thermal expansion allowance
- Fire stopping at floor penetrations`
  },
  {
    index: 57,
    name: "Indoor Cable Tray",
    alt: "Neat indoor cable tray installation routed above false ceilings or along walls in a commercial or control building.",
    description: "Neat indoor cable tray installation routed above false ceilings or along walls in a commercial or control building.",
    slug: "indoor-cable-tray",
    url: "/diagrams/indoor-cable-tray.jpg",
    detailedContent: `Indoor cable trays provide organized routing for power and control cables within buildings, typically above false ceilings or along walls.

## Features
- Perforated or ladder type construction
- Galvanized or powder-coated finish
- Fire-resistant options available
- Easy cable access and maintenance

## Installation Guidelines
- Support at regular intervals
- Proper cable separation
- Grounding of all metallic parts
- Fire barriers at wall penetrations`
  },
  {
    index: 58,
    name: "Indoor Transformer",
    alt: "Compact indoor dry-type transformer installation suitable for placement inside buildings near load centers.",
    description: "Compact indoor dry-type transformer installation suitable for placement inside buildings near load centers.",
    slug: "indoor-transformer",
    url: "/diagrams/indoor-transformer.jpg",
    detailedContent: `Indoor dry-type transformers are designed for installation inside buildings, providing safe voltage transformation close to load centers.

## Advantages
- No oil, reduced fire risk
- Suitable for indoor installation
- Low maintenance requirements
- Quiet operation

## Typical Applications
- Commercial buildings
- Hospitals and data centers
- Industrial plants
- Underground installations

## Safety Features
- Enclosures with IP ratings
- Temperature sensors
- Forced air cooling options`
  },
  {
    index: 59,
    name: "Lightning Rod",
    alt: "Standard lightning rod (air terminal) mounted on a high point to capture lightning strikes and protect the structure below.",
    description: "Standard lightning rod (air terminal) mounted on a high point to capture lightning strikes and protect the structure below.",
    slug: "lightning-rod",
    url: "/diagrams/lightning-rod.jpg",
    detailedContent: `Lightning rods (air terminals) are mounted on high points of structures to capture lightning strikes and safely conduct the energy to ground.

## Components
- Air terminal (lightning rod)
- Down conductor
- Earth termination system
- Bonding connections

## Design Standards
- IEC 62305 for lightning protection
- IS/IEC 62305 for Indian installations
- NFPA 780 for building protection

## Protection Principles
- Rolling sphere method for coverage
- Multiple air terminals for large areas
- Direct bonding of metallic systems`
  },
  {
    index: 60,
    name: "Outdoor Power Transformer Yard",
    alt: "Expansive outdoor power transformer yard housing large oil-filled transformers and switchgear for regional power distribution.",
    description: "Expansive outdoor power transformer yard housing large oil-filled transformers and switchgear for regional power distribution.",
    slug: "outdoor-power-transformer-yard",
    url: "/diagrams/outdoor-power-transformer-yard.jpg",
    detailedContent: `An outdoor power transformer yard is a designated area within a substation that houses large power transformers for voltage transformation and distribution.

## Key Components
- Power transformers on concrete plinths
- HV and LV bushings with connections
- Cooling systems (radiators, fans)
- Oil containment pits with fire walls

## Safety Features
- Fire suppression systems
- Security fencing and access control
- Proper clearances per IEEE/IEC
- Comprehensive earthing system

## Design Considerations
- Adequate spacing between units
- Access for maintenance vehicles
- Oil drainage and collection systems`
  },
  {
    index: 61,
    name: "Main Plant Area Cable Routing",
    alt: "Grid-like main plant area cable routing ensuring orderly distribution of power throughout the facility.",
    description: "Grid-like main plant area cable routing ensuring orderly distribution of power throughout the facility.",
    slug: "main-plant-area-cable-routing",
    url: "/diagrams/main-plant-area-cable-routing.jpg",
    detailedContent: `Main plant area cable routing provides organized pathways for power distribution throughout industrial facilities.

## Routing Methods
- Elevated cable trays and racks
- Underground cable trenches
- Direct buried cables
- Conduit systems

## Design Principles
- Shortest practical routes
- Separation of voltage classes
- Access for maintenance
- Future expansion provisions`
  },
  {
    index: 62,
    name: "Storage area",
    alt: "Designated material storage area with organized racking for electrical spares and construction materials.",
    description: "Designated material storage area with organized racking for electrical spares and construction materials.",
    slug: "storage-area",
    url: "/diagrams/storage-area.jpg",
    detailedContent: `A designated material storage area houses electrical spares, construction materials, and equipment in an organized manner for efficient project execution.

## Storage Requirements
- Covered areas for sensitive equipment
- Proper shelving and racking
- Clear labeling and inventory control
- Security and access control

## Material Categories
- Cables and accessories
- Panel components and relays
- Structural materials
- Safety equipment`
  },
  {
    index: 63,
    name: "Outdoor transformer",
    alt: "Stand-alone outdoor transformer installation on a concrete plinth, complete with oil containment and safety fencing.",
    description: "Stand-alone outdoor transformer installation on a concrete plinth, complete with oil containment and safety fencing.",
    slug: "outdoor-transformer",
    url: "/diagrams/Indoor transformer.jpg",
    detailedContent: `Outdoor transformers are installed on concrete plinths with comprehensive safety measures including oil containment and fencing.

## Installation Features
- RCC foundation with oil pit
- Fire barriers (for multi-unit yards)
- Security fencing with locked gates
- Approach roads for maintenance

## Protection Systems
- Buchholz relay for internal faults
- Oil level and temperature gauges
- Pressure relief device
- Fire detection and suppression

## Earthing
- Tank body earthing
- Neutral earthing
- Surge arrester grounding`
  },
  {
    index: 64,
    name: "Pane Earthing in Swyd Control Building",
    alt: "Panel earthing detail within a Switchyard (SWYD) control building, showing bonding of control panels to the room earth bar.",
    description: "Panel earthing detail within a Switchyard (SWYD) control building, showing bonding of control panels to the room earth bar.",
    slug: "pane-earthing-in-swyd-control-building",
    url: "/diagrams/Lightning rod.jpg",
    detailedContent: `Panel earthing in switchyard control buildings ensures all control panels are properly bonded to the room's earth bar for safety and signal integrity.

## Purpose
- Personnel safety during fault conditions
- Noise-free reference for electronics
- EMI/EMC compliance
- Protective device coordination

## Connection Method
- Copper earth bar mounted on insulators
- Individual panel connections via braided copper
- Star or daisy-chain topology
- Connection to main earth grid`
  },
  {
    index: 65,
    name: "Pane Earthing in SWYD Control Building",
    alt: "Alternative view of panel earthing connections in the SWYD control building, ensuring reference ground stability for sensitive electronics.",
    description: "Alternative view of panel earthing connections in the SWYD control building, ensuring reference ground stability for sensitive electronics.",
    slug: "pane-earthing-in-swyd-control-building-2",
    url: "/diagrams/LTL SDC13248 (2).JPG",
    detailedContent: `Panel earthing provides stable reference ground for sensitive electronics in control buildings, essential for SCADA and protection systems.

## Key Elements
- Main earth bus bar in control room
- Individual equipment earth connections
- Signal reference ground (SRG) mesh if required
- Clean earth for instrumentation

## Testing
- Continuity verification
- Ground resistance measurement
- Periodic inspection schedule`
  },
  {
    index: 66,
    name: "Emergency Telephone Installation in Industrial Area",
    alt: "Field-mounted emergency telephone installation for rapid communication during safety incidents in remote industrial areas.",
    description: "Field-mounted emergency telephone installation for rapid communication during safety incidents in remote industrial areas.",
    slug: "emergency-telephone-installation-industrial-area",
    url: "/diagrams/Main Plant area cable routing -5.jpg",
    detailedContent: `Emergency telephone installations provide rapid communication capability in industrial areas for safety incidents and emergencies.

## Features
- Weatherproof enclosure (IP65+)
- Direct dial to control room
- Hands-free operation option
- Clearly visible signage

## Applications
- Remote substation areas
- Transformer yards
- High-voltage switchyards
- Hazardous zones`
  },
  {
    index: 67,
    name: "Emergency Communication and Fire Safety Setup",
    alt: "Combined emergency communication and fire safety station featuring call points and fire extinguishers.",
    description: "Combined emergency communication and fire safety station featuring call points and fire extinguishers.",
    slug: "emergency-communication-fire-safety-setup",
    url: "/diagrams/Oil storage area.jpg",
    detailedContent: `Emergency communication and fire safety stations combine multiple safety features in a centralized location for rapid response.

## Components
- Emergency telephone or intercom
- Manual fire alarm call point
- Fire extinguishers (appropriate type)
- First aid kit storage
- Emergency lighting

## Location Requirements
- Visible and accessible locations
- Near high-risk areas
- Along escape routes
- Per fire safety codes`
  },
  {
    index: 68,
    name: "Emergency Telephone Point",
    alt: "Clearly marked emergency telephone point with weatherproof housing for reliable operation in outdoor conditions.",
    description: "Clearly marked emergency telephone point with weatherproof housing for reliable operation in outdoor conditions.",
    slug: "emergency-telephone-point",
    url: "/diagrams/Outdoor transformer.jpg",
    detailedContent: `Emergency telephone points provide dedicated communication in outdoor and hazardous areas for safety and emergency response.

## Specifications
- Heavy-duty weatherproof housing
- Bright visible color (yellow/orange)
- Hardwired or wireless connection
- Push-to-talk or auto-answer

## Installation
- Mounted at comfortable height
- Protected from weather and impact
- Clear approach path
- Regular testing schedule`
  },
  {
    index: 69,
    name: "Cable Tray Raiser Along Boiler Column",
    alt: "Vertical cable tray raiser routed along a boiler structural column, utilizing existing steelwork for support.",
    description: "Vertical cable tray raiser routed along a boiler structural column, utilizing existing steelwork for support.",
    slug: "cable-tray-raiser-along-boiler-column",
    url: "/diagrams/pane earthing in swyd control building.jpg",
    detailedContent: `Cable tray risers along boiler columns route power and control cables vertically using existing structural steelwork for support.

## Design Features
- Attachment to existing columns
- Minimal additional structures
- Fire-resistant materials where required
- Thermal expansion provisions

## Cable Types
- Power cables to motors and drives
- Control cables for instruments
- Fiber optic for communication`
  },
  {
    index: 70,
    name: "LAPT Transformer Bus Duct",
    alt: "Bus duct connection for a Large Auxiliary Power Transformer (LAPT), providing a high-current, low-loss power link.",
    description: "Bus duct connection for a Large Auxiliary Power Transformer (LAPT), providing a high-current, low-loss power link.",
    slug: "lapt-transformer-bus-duct",
    url: "/diagrams/pane earthing in swyd control building1.jpg",
    detailedContent: `Bus duct connections for Large Auxiliary Power Transformers (LAPT) provide high-current, low-loss power links between transformers and switchgear.

## Features
- Segregated or non-segregated phase design
- Aluminum or copper conductors
- Weatherproof enclosure for outdoor sections
- Expansion joints for thermal movement

## Ratings
- Current: Up to 6000A
- Voltage: 6.6kV, 11kV typical
- Short circuit withstand per IEEE standards`
  },
  {
    index: 71,
    name: "NGR Bus Duct Connection",
    alt: "Neutral Grounding Resistor (NGR) bus duct connection used to limit ground fault currents in electrical systems.",
    description: "Neutral Grounding Resistor (NGR) bus duct connection used to limit ground fault currents in electrical systems.",
    slug: "ngr-bus-duct-connection",
    url: "/diagrams/ngr-bus-duct-connection.jpg",
    detailedContent: `Neutral Grounding Resistor (NGR) bus duct connections limit ground fault currents to safe levels while allowing fault detection.

## Purpose
- Limits ground fault current
- Prevents transient overvoltages
- Allows sensitive earth fault protection
- Reduces equipment damage

## Specifications
- Resistance value per system design
- Current rating for fault duration
- Stainless steel resistor elements
- Temperature monitoring and alarms`
  },
  {
    index: 72,
    name: "Cable Gallery Below Control Room",
    alt: "Walkable cable gallery located below the control room, allowing easy inspection and modification of control cables.",
    description: "Walkable cable gallery located below the control room, allowing easy inspection and modification of control cables.",
    slug: "cable-gallery-below-control-room",
    url: "/diagrams/cable-gallery-below-control-room.jpg",
    detailedContent: `Cable galleries below control rooms provide accessible spaces for routing, inspecting, and modifying large cable installations.

## Features
- Walkway access for personnel
- Multi-tier cable tray arrangements
- Fire detection and suppression
- Lighting and ventilation

## Design Considerations
- Adequate height for standing
- Fire barriers at intervals
- Drainage provisions
- Emergency exits`
  },
  {
    index: 73,
    name: "Cable Tray From SWGR Room",
    alt: "Main cable tray headers exiting the Switchgear (SWGR) room, distributing power to various plant loads.",
    description: "Main cable tray headers exiting the Switchgear (SWGR) room, distributing power to various plant loads.",
    slug: "cable-tray-from-swgr-room",
    url: "/diagrams/cable-tray-from-swgr-room.jpg",
    detailedContent: `Cable trays exiting switchgear rooms distribute power from main switchboards to various plant loads via organized routing.

## Configuration
- Multiple tiers for voltage separation
- Power and control cable segregation
- Hot-dip galvanized construction
- Fire barriers at room penetration

## Installation
- Supports at regular intervals
- Cable ties and markers
- Grounding continuity maintained`
  },
  {
    index: 74,
    name: "Cable Tray Raiser To SWGR Room",
    alt: "Inbound cable tray raiser carrying feeder cables into the Switchgear room from field transformers.",
    description: "Inbound cable tray raiser carrying feeder cables into the Switchgear room from field transformers.",
    slug: "cable-tray-raiser-to-swgr-room",
    url: "/diagrams/cable-tray-raiser-to-swgr-room.jpg",
    detailedContent: `Cable tray risers bring incoming feeder cables from field transformers into the switchgear room for termination.

## Features
- Vertical transition from outdoor to indoor
- Fire stopping at wall penetration
- Weatherproofing at outdoor sections
- Support for heavy cable loads

## Installation
- Adequate bend radius maintained
- Cable cleats at intervals
- Grounding of metallic parts`
  },
  {
    index: 75,
    name: "Cable Tray And Cabling To Panel",
    alt: "Final cable drops from overhead trays into individual control panels, showing neat bundling and dressing.",
    description: "Final cable drops from overhead trays into individual control panels, showing neat bundling and dressing.",
    slug: "cable-tray-and-cabling-to-panel",
    url: "/diagrams/cable-tray-and-cabling-to-panel.jpg",
    detailedContent: `Cable drops from overhead trays to control panels require neat bundling and dressing for a professional installation.

## Best Practices
- Cable ties at regular intervals
- Service loops at termination points
- Clear labeling at both ends
- Proper gland plates and entries

## Cable Dressing
- Cables bundled by function
- Correct bend radius maintained
- No crossing of cable bundles
- Strain relief provisions`
  },
  {
    index: 76,
    name: "Trays Above the Substation Control Panel Room",
    alt: "Dense layering of cable trays installed in the ceiling void above a substation control panel room.",
    description: "Dense layering of cable trays installed in the ceiling void above a substation control panel room.",
    slug: "trays-above-substation-control-panel-room",
    url: "/diagrams/trays-above-the-substation-control-panel-room.jpg",
    detailedContent: `Cable trays above control rooms provide organized routing for the dense cabling required in substation control systems.

## Layout Features
- Multiple tiers for cable separation
- Power, control, and communication segregation
- Access hatches for maintenance
- Fire detection systems

## Design Standards
- NEC/IEC for cable fill limits
- Fire rating requirements
- Proper support intervals`
  },
  {
    index: 77,
    name: "Vertical Cable Trays In Boiler Area",
    alt: "Extensive vertical cable tray runs servicing the multiple levels of a boiler structure.",
    description: "Extensive vertical cable tray runs servicing the multiple levels of a boiler structure.",
    slug: "vertical-cable-trays-in-boiler-area",
    url: "/diagrams/vertical-cable-trays-in-boiler-area.jpg",
    detailedContent: `Vertical cable trays in boiler areas service multiple levels with power and control cables for various equipment.

## Challenges
- High temperature environment
- Vibration from equipment
- Limited access for maintenance
- Fire protection requirements

## Solutions
- Fire-resistant cable types
- Anti-vibration mounts
- Adequate spacing for heat dissipation`
  },
  {
    index: 78,
    name: "Cable Tray Raiser From ESP Area",
    alt: "Cable tray riser originating from the Electrostatic Precipitator (ESP) area, routing data and power to control rooms.",
    description: "Cable tray riser originating from the Electrostatic Precipitator (ESP) area, routing data and power to control rooms.",
    slug: "cable-tray-raiser-from-esp-area",
    url: "/diagrams/cable-tray-raiser-from-esp-area.jpg",
    detailedContent: `Cable tray risers from ESP areas route power and data cables to control rooms for monitoring and control of precipitator systems.

## Cable Types
- High-voltage power cables
- Control and instrumentation cables
- Communication and networking cables

## Installation
- EMI shielding where required
- Separation from high-voltage
- Fire barriers at building entries`
  },
  {
    index: 79,
    name: "Cable Tray Raiser To ESP Area",
    alt: "Supply cable tray riser feeding power to the high-voltage transformers and rafters of the ESP area.",
    description: "Supply cable tray riser feeding power to the high-voltage transformers and rafters of the ESP area.",
    slug: "cable-tray-raiser-to-esp-area",
    url: "/diagrams/cable-tray-raiser-to-esp-area.jpg",
    detailedContent: `Cable tray risers to ESP areas supply power for high-voltage transformers and precipitator systems.

## Power Requirements
- HV supply for ESP transformer-rectifier sets
- Control power for rappers and cleaning systems
- Instrumentation for opacity and emissions monitoring

## Installation
- Heavy-gauge cables for high currents
- Fire-resistant routing near hot areas
- EMI protection for control cables`
  },
  {
    index: 80,
    name: "Field Control Box with Industrial Telephone",
    alt: "Local field control box equipped with an industrial telephone for operator communication at the machinery location.",
    description: "Local field control box equipped with an industrial telephone for operator communication at the machinery location.",
    slug: "field-control-box-with-industrial-telephone",
    url: "/diagrams/field-control-box-with-industrial-telephone.jpg",
    detailedContent: `Field control boxes with industrial telephones provide local control and communication capabilities at remote equipment locations.

## Features
- Start/stop controls for local equipment
- Status indication lamps
- Emergency stop button
- Industrial telephone for operator communication

## Applications
- Remote pump stations
- Fan control locations
- Conveyor drive points`
  },
  {
    index: 81,
    name: "Industrial Tower with CCTV Camera and PA System",
    alt: "Multi-purpose industrial tower mast supporting CCTV cameras for security and a Public Address (PA) system for announcements.",
    description: "Multi-purpose industrial tower mast supporting CCTV cameras for security and a Public Address (PA) system for announcements.",
    slug: "industrial-tower-with-cctv-camera-and-pa-system",
    url: "/diagrams/industrial-tower-with-cctv-camera-and-pa-system.jpg",
    detailedContent: `Industrial towers support CCTV cameras and PA systems for security monitoring and emergency announcements in substation areas.

## Components
- CCTV cameras with PTZ capability
- PA loudspeakers and horn speakers
- Lighting for night visibility
- Surge protection for electronics

## Coverage
- High vantage point for wide area monitoring
- Audio coverage for emergency announcements
- Integration with security systems`
  },
  {
    index: 82,
    name: "Overhead Cable Tray and Duct System",
    alt: "Hybrid overhead support system carrying both cable trays and HVAC ducts, coordinately routed to avoid clashes.",
    description: "Hybrid overhead support system carrying both cable trays and HVAC ducts, coordinately routed to avoid clashes.",
    slug: "overhead-cable-tray-and-duct-system",
    url: "/diagrams/overhead-cable-tray-and-duct-system.jpg",
    detailedContent: `Hybrid overhead systems carry cable trays and HVAC ducts on shared supports, requiring careful coordination.

## Coordination Requirements
- Avoid thermal interference
- Maintain access for maintenance
- Structural load distribution
- Fire separation where required

## Design Approach
- 3D modeling for clash detection
- Phased installation sequence
- Clear labeling and color coding`
  },
  {
    index: 83,
    name: "Outdoor Pipe Rack",
    alt: "Major outdoor pipe rack artery carrying process piping and cable trays between different plant units.",
    description: "Major outdoor pipe rack artery carrying process piping and cable trays between different plant units.",
    slug: "outdoor-pipe-rack",
    url: "/diagrams/outdoor-pipe-rack.jpg",
    detailedContent: `Outdoor pipe racks serve as major arteries carrying process piping and cable trays between plant units.

## Structure
- Multi-tier steel framework
- Foundation on concrete piers
- Expansion joints for thermal movement
- Access platforms and ladders

## Contents
- Process and utility piping
- Power and control cable trays
- Instrumentation tubing`
  },
  {
    index: 84,
    name: "EOT Crane with Control Panel and Wiring",
    alt: "Electric Overhead Traveling (EOT) crane electrical installation showing the control panel and festoon cable wiring.",
    description: "Electric Overhead Traveling (EOT) crane electrical installation showing the control panel and festoon cable wiring.",
    slug: "eot-crane-with-control-panel-and-wiring",
    url: "/diagrams/eot-crane-with-control-panel-and-wiring.jpg",
    detailedContent: `EOT crane electrical installations include control panels and festoon cable systems for power and control distribution.

## Components
- Control panel with starters and VFDs
- Festoon cable system or cable reels
- Pendant or radio remote control
- Limit switches and safety devices

## Wiring
- Flexible cables for moving parts
- Proper strain relief and protection`
  },
  {
    index: 85,
    name: "Substation Battery Backup System",
    alt: "Critical substation battery backup system (UPS) ensuring control power availability during grid outages.",
    description: "Critical substation battery backup system (UPS) ensuring control power availability during grid outages.",
    slug: "substation-battery-backup-system",
    url: "/diagrams/substation-battery-backup-system.jpg",
    detailedContent: `Substation battery backup systems provide uninterrupted DC power for protection, control, and SCADA systems during grid outages.

## System Components
- Battery bank (lead-acid or lithium)
- Battery charger with float/boost modes
- DC distribution panel
- Monitoring and alarms

## Sizing
- Autonomy based on outage duration
- Load calculation for all DC loads
- IEEE 485 for sizing guidelines`
  },
  {
    index: 86,
    name: "Gas Turbine Power Plant Structure",
    alt: "Overview of a Gas Turbine Power Plant structure showing the integration of major mechanical and electrical components.",
    description: "Overview of a Gas Turbine Power Plant structure showing the integration of major mechanical and electrical components.",
    slug: "gas-turbine-power-plant-structure",
    url: "/diagrams/gas-turbine-power-plant-structure.jpg",
    detailedContent: `Gas turbine power plant structures integrate mechanical equipment with comprehensive electrical systems for power generation.

## Key Electrical Systems
- Generator and excitation systems
- Step-up transformer and HV connections
- Auxiliary power systems
- Control and protection panels

## Cable Routing
- High-temperature rated cables near turbine
- Cable trays with fire protection
- Instrumentation and control cables`
  },
  {
    index: 87,
    name: "Power Substation Yard",
    alt: "Wide-angle view of a power substation yard illustrating the layout of gantries, breakers, and transformers.",
    description: "Wide-angle view of a power substation yard illustrating the layout of gantries, breakers, and transformers.",
    slug: "power-substation-yard",
    url: "/diagrams/power-substation-yard.jpg",
    detailedContent: `A power substation yard layout integrates gantries, circuit breakers, transformers, and supporting infrastructure for power transmission.

## Major Components
- Gantry structures for busbar and line support
- Circuit breakers and isolators
- Power transformers with oil containment
- Current and voltage transformers

## Design Standards
- IEEE 80 for grounding
- IEC 61936 for clearances
- IS 5613 for Indian substations`
  },
  {
    index: 88,
    name: "Rooftop",
    alt: "Industrial facility rooftop view showing HVAC units, cable tray runs, and lightning protection grid.",
    description: "Industrial facility rooftop view showing HVAC units, cable tray runs, and lightning protection grid.",
    slug: "rooftop",
    url: "/diagrams/Pipe rack.JPG",
    detailedContent: `Industrial rooftops house HVAC equipment, cable trays, and lightning protection systems in an organized layout.

## Components
- HVAC units and ventilation systems
- Cable tray runs for power distribution
- Lightning protection grid and down conductors
- Access walkways and platforms

## Safety Features
- Guardrails and safety lines
- Proper lighting for maintenance
- Emergency access routes`
  },
  {
    index: 89,
    name: "Electrical Control Panel and Switching System",
    alt: "Integrated electrical control panel and switching system for complex automated process control.",
    description: "Integrated electrical control panel and switching system for complex automated process control.",
    slug: "electrical-control-panel-switching-system",
    url: "/diagrams/QD0012004.JPG",
    detailedContent: `Integrated control panels combine switching equipment with automation systems for complex process control applications.

## Features
- PLC or DCS integration
- Motor starters and VFDs
- SCADA interface
- Safety interlocks

## Applications
- Industrial process control
- Power plant auxiliaries
- Water treatment systems`
  },
  {
    index: 90,
    name: "Cable Termination and Jointing",
    alt: "Precision cable termination and jointing work on high-voltage cables, using heat-shrink or cold-shrink kits.",
    description: "Precision cable termination and jointing work on high-voltage cables, using heat-shrink or cold-shrink kits.",
    slug: "cable-termination-and-jointing",
    url: "/diagrams/QD0012031.JPG",
    detailedContent: `High-voltage cable termination and jointing requires precision workmanship using specialized heat-shrink or cold-shrink technology.

## Termination Types
- Indoor terminations
- Outdoor terminations with weather sealing
- GIS/transformer terminations

## Jointing
- Transition joints between cable types
- Straight-through joints for cable extension
- Proper stress control and insulation restoration`
  },
  {
    index: 91,
    name: "Underground Cable Laying",
    alt: "Process of laying underground cables in a prepared trench, ensuring proper spacing and bedding protection.",
    description: "Process of laying underground cables in a prepared trench, ensuring proper spacing and bedding protection.",
    slug: "underground-cable-laying",
    url: "/diagrams/underground-cable-laying.jpg",
    detailedContent: `Underground cable laying involves careful preparation and installation to ensure cable protection and longevity.

## Process Steps
- Trench excavation to required depth
- Sand bedding layer installation
- Cable laying with proper spacing
- Covering with sand and protective tiles
- Backfilling and compaction

## Standards
- IS 1255 for cable installation
- Minimum depth per voltage level`
  },
  {
    index: 92,
    name: "Cable Trench Excavation",
    alt: "Excavation phase for a cable trench, showing the depth and width required for the planned cable bank.",
    description: "Excavation phase for a cable trench, showing the depth and width required for the planned cable bank.",
    slug: "cable-trench-excavation",
    url: "/diagrams/cable-trench-excavation.jpg",
    detailedContent: `Cable trench excavation prepares the pathway for underground cable installations with proper depth and width.

## Excavation Requirements
- Depth based on cable voltage and number
- Width for cable spacing and future additions
- Proper sloping for stable sides
- Dewatering if water table is high

## Safety
- Shoring for deep excavations
- Barrier and signage for open trenches`
  },
  {
    index: 93,
    name: "Industrial Rooftop Structure",
    alt: "Heavy-duty industrial rooftop structure supporting various utility equipment and accessible walkways.",
    description: "Heavy-duty industrial rooftop structure supporting various utility equipment and accessible walkways.",
    slug: "industrial-rooftop-structure",
    url: "/diagrams/roof top.webp",
    detailedContent: `Industrial rooftop structures provide platforms for utility equipment with safe access for maintenance personnel.

## Features
- Steel framework with load capacity
- Gratings and walkways
- Handrails and safety barriers
- Equipment mounting provisions

## Support For
- HVAC and cooling equipment
- Antenna and communication systems
- Solar panel arrays`
  },
  {
    index: 94,
    name: "Tabouk Spare Cable Tray 001",
    alt: "Inventory view of Tabouk spare cable tray section 001, kept for maintenance replacements or system extensions.",
    description: "Inventory view of Tabouk spare cable tray section 001, kept for maintenance replacements or system extensions.",
    slug: "tabouk-spare-cable-tray-001",
    url: "/diagrams/Tabouk spare cable trays 001.jpg",
    detailedContent: `Spare cable trays stored for maintenance and system extensions ensure quick replacement and project continuity.

## Inventory Management
- Proper storage to prevent damage
- Digital tracking of quantities
- Matching specifications with installed trays

## Specifications
- Material and coating type
- Width and rung spacing
- Load capacity ratings`
  },
  {
    index: 95,
    name: "Tabouk Spare Cable Tray 002",
    alt: "Tabouk spare cable tray 002, featuring perforated rung design for cable ventilation and securing.",
    description: "Tabouk spare cable tray 002, featuring perforated rung design for cable ventilation and securing.",
    slug: "tabouk-spare-cable-tray-002",
    url: "/diagrams/Tabouk spare cable trays 002.jpg",
    detailedContent: `Perforated rung designs in cable trays offer enhanced features for cable management and installation efficiency.

## Design Benefits
- Improved air circulation around cables (derating factor)
- Multiple anchor points for cable ties
- Reduced weight compared to solid bottom
- Drainage of moisture and debris

## Applications
- Instrumentation cables
- Control wiring bundles
- Moderate load power cables`
  },
  {
    index: 96,
    name: "Tabouk Spare Cable Tray 003",
    alt: "Tabouk spare cable tray 003, showing the side profile and coupling holes for joining tray sections.",
    description: "Tabouk spare cable tray 003, showing the side profile and coupling holes for joining tray sections.",
    slug: "tabouk-spare-cable-tray-003",
    url: "/diagrams/Tabouk spare cable trays 003.jpg",
    detailedContent: `The side rail profile and coupling holes are critical for the structural integrity and continuity of cable tray systems.

## Coupling Features
- Pre-punched splice holes for alignment
- Standardized holing pattern (NEMA/IEC)
- Electrical continuity bonding
- Rapid installation with splice plates

## Structural Role
- Side rails carry the longitudinal load
- Flange shape provides bending resistance`
  },
  {
    index: 97,
    name: "Tabouk Spare Cable Tray 004",
    alt: "Tabouk spare cable tray 004, heavy-duty ladder type tray capable of carrying high linear loads.",
    description: "Tabouk spare cable tray 004, heavy-duty ladder type tray capable of carrying high linear loads.",
    slug: "tabouk-spare-cable-tray-004",
    url: "/diagrams/Tabouk spare cable trays 004.jpg",
    detailedContent: `Heavy-duty ladder cable trays are designed to support high linear loads over long spans, typical in industrial plants.

## Load Characteristics
- High NEMA load class rating (e.g., 20C)
- Deflection limits under full cable load
- Point load capacity for maintenance access
- Safety factor considerations

## Use Cases
- Main power distribution feeders
- Long outdoor spans on pipe racks
- Heavy armored cable runs`
  },
  {
    index: 98,
    name: "Tabouk Spare Cable Tray 005",
    alt: "Tabouk spare cable tray 005, galvanized finish for corrosion resistance in harsh industrial environments.",
    description: "Tabouk spare cable tray 005, galvanized finish for corrosion resistance in harsh industrial environments.",
    slug: "tabouk-spare-cable-tray-005",
    url: "/diagrams/Tabouk spare cable trays 005.jpg",
    detailedContent: `Hot-dip galvanizing provides essential corrosion protection for steel cable trays in harsh industrial environments.

## Protection Mechanism
- Metallurgical bond between zinc and steel
- Sacrificial anode protection
- Edge protection ("self-healing" effect)
- Long service life (20-50 years)

## Specifications
- ASTM A123 / ISO 1461 standards
- Minimum coating thickness requirements
- Visual inspection criteria`
  },
  {
    index: 99,
    name: "Tabouk Spare Cable Tray 006",
    alt: "Tabouk spare cable tray 006, stacked and ready for deployment in plant expansion projects.",
    description: "Tabouk spare cable tray 006, stacked and ready for deployment in plant expansion projects.",
    slug: "tabouk-spare-cable-tray-006",
    url: "/diagrams/Tabouk spare cable trays 006.jpg",
    detailedContent: `Strategic stockpiling of cable trays ensures material availability for rapid deployment during plant expansions or maintenance.

## Logistics
- Just-in-time vs. bulk buffering
- Handling equipment requirements
- Weather protection for long-term storage
- Material traceability

## Expansion Readiness
- Matching specifications with existing plant
- Rapid mobilization for turnaround projects
- Pre-approved vendor lists`
  },
  {
    index: 100,
    name: "Tabouk Spare Cable Tray 008",
    alt: "Tabouk spare cable tray 008, showcasing standard width and flange height specifications for the project.",
    description: "Tabouk spare cable tray 008, showcasing standard width and flange height specifications for the project.",
    slug: "tabouk-spare-cable-tray-008",
    url: "/diagrams/Tabouk spare cable trays 008.jpg",
    detailedContent: `Standardization of cable tray dimensions (width and flange height) is key to efficient plant engineering and inventory control.

## Standard Dimensions
- Widths: 150, 300, 450, 600, 750, 900 mm
- Rung spacing: 225 mm or 300 mm
- Side rail heights: 100 mm, 150 mm
- Length: 3m or 6m standard sections

## Benefits
- Interchangeability of parts
- Simplified support design
- Reduced design complexity`
  },
  {
    index: 101,
    name: "Tabouk Spare Cable Tray 009",
    alt: "Tabouk spare cable tray 009, detailed view of the rung welding and structural integrity.",
    description: "Tabouk spare cable tray 009, detailed view of the rung welding and structural integrity.",
    slug: "tabouk-spare-cable-tray-009",
    url: "/diagrams/Tabouk spare cable trays 009.jpg",
    detailedContent: `The structural integrity of a cable tray depends heavily on the quality of the rung-to-siderail welds.

## Fabrication Quality
- Continuous or intermittent fillet welds
- Prevention of weld burn-through
- Smooth finish to prevent cable damage
- Structural load testing

## Safety Factors
- Resistance to twisting and torsion
- Rung pull-out strength
- Vibration resistance`
  },
  {
    index: 102,
    name: "Tabouk Spare Cable Tray 010",
    alt: "Tabouk spare cable tray 010, stored with protective spacers to prevent damage during handling.",
    description: "Tabouk spare cable tray 010, stored with protective spacers to prevent damage during handling.",
    slug: "tabouk-spare-cable-tray-010",
    url: "/diagrams/Tabouk spare cable trays 010.jpg",
    detailedContent: `Proper handling and storage protocols, such as using spacers, prevent damage to the galvanized coating of cable trays.

## Storage Best Practices
- Use of wood dunnage or spacers
- Preventing metal-on-metal contact (white rust)
- Angle stacking for drainage
- Handling with nylon slings

## Quality Control
- Pre-installation visual inspection
- Repair of minor coating damage with zinc-rich paint
- Verification of straightness`
  },
  {
    index: 103,
    name: "Tabouk Spare Cable Tray 016",
    alt: "Tabouk spare cable tray 016, wide-span tray designed for main feeder routes requiring high cable capacity.",
    description: "Tabouk spare cable tray 016, wide-span tray designed for main feeder routes requiring high cable capacity.",
    slug: "tabouk-spare-cable-tray-016",
    url: "/diagrams/Tabouk spare cable trays 016.jpg",
    detailedContent: `Wide-span cable trays are utilized for main feeder routes where high cable capacity and longer support spans are required.

## Advantages
- Accommodates large number of cables
- Reduces number of support structures needed
- Efficient use of space in pipe racks
- Future reserve capacity

## Considerations
- Increased weight loading on supports
- Cable fill calculation is critical
- Side rail height sufficient for cable depth`
  },
  {
    index: 104,
    name: "Tabouk Spare Cable Tray 020",
    alt: "Tabouk spare cable tray 020, fitting or accessory piece used for custom tray configurations.",
    description: "Tabouk spare cable tray 020, fitting or accessory piece used for custom tray configurations.",
    slug: "tabouk-spare-cable-tray-020",
    url: "/diagrams/Tabouk spare cable trays 020.jpg",
    detailedContent: `Fittings and accessories are essential for customizing cable tray configurations to match complex plant layouts.

## Common Accessories
- Horizontal and vertical bends
- Reducers (straight, left, right)
- Tees and crosses
- Dropouts and end plates

## Installation
- Bolt-on connection compatibility
- Maintaining bend radius integrity
- Support placement near fittings`
  },
  {
    index: 105,
    name: "Transformer Handling Operation",
    alt: "Complex transformer handling operation involving heavy-lift cranes and specialized transport trailers.",
    description: "Complex transformer handling operation involving heavy-lift cranes and specialized transport trailers.",
    slug: "transformer-handling-operation",
    url: "/diagrams/Transformer handling.jpg",
    detailedContent: `Transformer handling operations require heavy-lift equipment and specialized procedures for safe transport and installation.

## Equipment Required
- Heavy-lift mobile or gantry cranes
- Hydraulic trailers for transport
- Jacking and skidding equipment
- Lifting beams and slings

## Safety Procedures
- Detailed lift plans
- Ground bearing capacity verification
- Weather monitoring during operations
- Personnel exclusion zones`
  },
  {
    index: 106,
    name: "Transformer Wheel Lock Mechanism",
    alt: "Close-up of the transformer wheel lock mechanism ensuring the unit remains stationary on its foundation rails.",
    description: "Close-up of the transformer wheel lock mechanism ensuring the unit remains stationary on its foundation rails.",
    slug: "transformer-wheel-lock-mechanism",
    url: "/diagrams/Transformer wheel lock.jpg",
    detailedContent: `Transformer wheel locks secure large transformers on foundation rails, preventing movement during operation and seismic events.

## Features
- Mechanical locking mechanism
- Adjustable for wheel positioning
- Corrosion-resistant materials
- Easy release for maintenance

## Installation
- Secure to foundation rails
- Engage after final positioning
- Regular inspection for function`
  },
  {
    index: 107,
    name: "Trenches Transformer Yard",
    alt: "Cable trenches in the transformer yard, routed to carry control and protection cables to the relay house.",
    description: "Cable trenches in the transformer yard, routed to carry control and protection cables to the relay house.",
    slug: "trenches-transformer-yard",
    url: "/diagrams/Trenches - Transformer yard-5.jpg",
    detailedContent: `Cable trenches in transformer yards route control, protection, and power cables between transformers and the relay house.

## Design Features
- RCC construction with removable covers
- Drainage slope and sump provisions
- Fire barriers at building entries
- Multiple cable tiers for separation

## Cable Types
- Protection and control cables
- SCADA and communication cables
- Transformer auxiliary power cables`
  },
];
