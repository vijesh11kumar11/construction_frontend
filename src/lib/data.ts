export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Equipment", href: "#equipment" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 28, suffix: "+", label: "Years of Excellence" },
  { value: 420, suffix: "+", label: "Projects Delivered" },
  { value: 180, suffix: "+", label: "Earth Movers in Fleet" },
  { value: 96, suffix: "%", label: "Repeat Clients" },
];

export const SERVICES = [
  {
    title: "Government Infrastructure",
    desc: "Highways, bridges, public buildings and large-scale civic infrastructure built to the highest national standards.",
    icon: "Landmark",
  },
  {
    title: "Private & Commercial Builds",
    desc: "Premium commercial complexes, industrial facilities, and bespoke private developments delivered on time.",
    icon: "Building2",
  },
  {
    title: "Earth Mover Leasing",
    desc: "A 180+ strong fleet of excavators, bulldozers, loaders and graders available for daily, monthly and project leases.",
    icon: "Truck",
  },
  {
    title: "Site Preparation & Excavation",
    desc: "End-to-end site clearance, grading, and large-scale excavation engineered for any terrain.",
    icon: "Mountain",
  },
  {
    title: "Project Management",
    desc: "Senior PMs orchestrate timelines, vendors and compliance — full accountability from blueprint to handover.",
    icon: "Briefcase",
  },
  {
    title: "Sustainable Engineering",
    desc: "LEED-aligned designs, low-emission machinery and waste-reduction protocols on every job site.",
    icon: "Leaf",
  },
];

export const EQUIPMENT = [
  {
    name: "CAT 390F Excavator",
    category: "Heavy Excavator",
    specs: ["90-ton class", "1,150 HP", "5.0 m³ bucket"],
    available: 12,
    image: "/images/earth_movers/earth_movers1.jpeg",
  },
  {
    name: "Komatsu D375A Bulldozer",
    category: "Crawler Dozer",
    specs: ["71-ton class", "610 HP", "22 m³ blade"],
    available: 8,
    image: "/images/earth_movers/earth_movers2.jpeg",
  },
  {
    name: "Volvo L350H Wheel Loader",
    category: "Wheel Loader",
    specs: ["54-ton class", "540 HP", "9.2 m³ bucket"],
    available: 14,
    image: "/images/earth_movers/earth_movers3.jpeg",
  },
  {
    name: "CAT 24M Motor Grader",
    category: "Motor Grader",
    specs: ["62-ton class", "533 HP", "7.3 m blade"],
    available: 6,
    image: "/images/earth_movers/earth_movers4.jpeg",
  },
  {
    name: "Liebherr LTM 1750",
    category: "Mobile Crane",
    specs: ["750-ton lift", "9-axle chassis", "154 m boom"],
    available: 4,
    image: "/images/earth_movers/earth_movers1.jpeg",
  },
  {
    name: "Hitachi EH5000AC-3",
    category: "Mining Truck",
    specs: ["296-ton payload", "2,850 HP", "AC drive"],
    available: 10,
    image: "/images/earth_movers/earth_movers2.jpeg",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Government" | "Private";
  location: string;
  year: string;
  image: string;
  tagline: string;
  client: string;
  duration: string;
  scale: string;
  value: string;
  hero: string;
  story: {
    challenge: string;
    approach: string;
    impact: string;
  };
  highlights: string[];
  gallery: string[];
  metrics: { label: string; value: string }[];
  quote: { text: string; author: string; role: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "national-expressway-corridor",
    title: "National Expressway Corridor",
    category: "Government",
    location: "Karnataka, India",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2400&q=80",
    tagline:
      "A 184-km lifeline connecting two of India’s fastest-growing economic regions — built without disturbing a single protected forest grove.",
    client: "National Highways Authority of India",
    duration: "32 months",
    scale: "184 km · 6 lanes · 9 interchanges",
    value: "₹4,820 Cr",
    story: {
      challenge:
        "When the Ministry awarded us the corridor, the brief was uncompromising: connect two booming industrial belts across rugged Western Ghats terrain, navigate three protected biodiversity zones, and shorten the existing 9-hour drive to under 4 — all without delaying a single rural commute.",
      approach:
        "We mobilised 47 earth movers within 11 days. Senior engineers re-routed 22 km of alignment to skirt the forest reserves entirely. Night-only blasting windows protected wildlife corridors. We built temporary bypasses through every village before excavation began, so daily life never paused.",
      impact:
        "Delivered three weeks ahead of contractual handover. The corridor now carries 38,000 vehicles a day, has cut freight costs for 1,200+ MSMEs by 31%, and earned a Ministry citation for zero-incident environmental compliance.",
    },
    highlights: [
      "47 heavy earth movers deployed in 11 days",
      "Zero protected trees felled across 184 km",
      "Delivered 3 weeks ahead of schedule",
      "1,200+ local jobs created during construction",
      "Class-A safety record — zero lost-time incidents",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1600&q=80",
    ],
    metrics: [
      { label: "Length", value: "184 km" },
      { label: "Travel time saved", value: "5 hrs" },
      { label: "Daily vehicles", value: "38k+" },
      { label: "Local jobs", value: "1,200+" },
    ],
    quote: {
      text: "Griha understood that an expressway isn’t just asphalt — it’s the spine of a region’s economy. They delivered with a discipline we rarely see in public works.",
      author: "Sh. R. Venkatesh",
      role: "Project Director, NHAI",
    },
  },
  {
    slug: "skyline-business-tower",
    title: "Skyline Business Tower",
    category: "Private",
    location: "Mumbai, India",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=80",
    tagline:
      "A 42-storey landmark rising from one of Mumbai’s most constrained plots — handed over three weeks ahead of schedule.",
    client: "Skyline Developers",
    duration: "28 months",
    scale: "42 floors · 1.8M sq.ft · LEED Platinum",
    value: "₹1,640 Cr",
    story: {
      challenge:
        "A 0.6-acre plot in the heart of BKC, surrounded on three sides by operational office towers, demanded a build that could go vertical without ever closing a neighbouring street. Air-rights, vibration limits and Mumbai’s monsoon were all on the table.",
      approach:
        "We engineered a top-down construction sequence — basements and superstructure rising simultaneously. A custom hydraulic climbing formwork shaved 9 days per floor. Vibration sensors on neighbouring buildings reported live to a war-room dashboard the client could see at any time.",
      impact:
        "Handed over three weeks ahead of schedule. The tower achieved LEED Platinum on its first audit and is now anchored by three Fortune 500 tenants. Skyline reported a 17% premium on per-sq-ft rentals against the BKC average.",
    },
    highlights: [
      "Top-down construction shaved 4 months off the timeline",
      "Zero complaints from 14 surrounding buildings",
      "LEED Platinum certified on first audit",
      "9 days saved per floor with custom formwork",
      "100% monsoon-proofed work calendar",
    ],
    gallery: [
      "/images/bedroom/bedroom1.jpeg",
      "/images/kitchen_interiors/kitchen3.jpeg",
      "/images/cupboards/bedroom_cup1.jpeg",
    ],
    metrics: [
      { label: "Height", value: "182 m" },
      { label: "Floors", value: "42" },
      { label: "Built-up area", value: "1.8M sqft" },
      { label: "Schedule", value: "−21 days" },
    ],
    quote: {
      text: "Griha delivered our 42-storey tower three weeks ahead of schedule. Their precision and discipline are unmatched in the industry.",
      author: "Aarav Mehta",
      role: "CEO, Skyline Developers",
    },
  },
  {
    slug: "coastal-port-expansion",
    title: "Coastal Port Expansion",
    category: "Government",
    location: "Chennai, India",
    year: "2023",
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=2400&q=80",
    tagline:
      "Doubling a 70-year-old port’s capacity while keeping every existing berth fully operational, every single day.",
    client: "Chennai Port Authority",
    duration: "41 months",
    scale: "2 deep-water berths · 1.4 km breakwater · 92-acre yard",
    value: "₹2,950 Cr",
    story: {
      challenge:
        "The port was already running at 110% capacity. A six-month closure would have cost the regional economy ₹8,000 Cr. We had to add two deep-water berths, a 1.4 km breakwater and an entire container yard — all while ships kept docking on schedule.",
      approach:
        "Marine works ran on a strict tide-based 18-hour cycle, choreographed with the harbour master. We deployed three of our largest mining trucks and a Liebherr 750-ton crane to pre-fabricate caissons offshore. Land works happened only between berthing windows, tracked minute-by-minute.",
      impact:
        "Capacity doubled to 2.4M TEUs annually. The expansion paid for itself in 4.2 years against a 7-year plan. Not a single ship was turned away during construction.",
    },
    highlights: [
      "Zero operational downtime over 41 months",
      "1.4 km breakwater built in 14 months",
      "Capacity doubled to 2.4M TEUs/year",
      "Pre-fabricated caisson method — first in India",
      "Payback period reduced from 7 to 4.2 years",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
    ],
    metrics: [
      { label: "New berths", value: "2" },
      { label: "Breakwater", value: "1.4 km" },
      { label: "Capacity", value: "2.4M TEU" },
      { label: "Downtime", value: "0 days" },
    ],
    quote: {
      text: "An impossible brief delivered impossibly well. Griha respected our daily operations as much as their own deadlines.",
      author: "Cdr. (Retd.) Manoj Pillai",
      role: "Chairman, Chennai Port Authority",
    },
  },
  {
    slug: "heritage-civic-center",
    title: "Heritage Civic Center",
    category: "Government",
    location: "Hyderabad, India",
    year: "2023",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=2400&q=80",
    tagline:
      "Restoring a 140-year-old Nizam-era civic hall and seamlessly fusing it with a modern 4-storey administrative wing.",
    client: "Government of Telangana",
    duration: "26 months",
    scale: "Heritage restoration · 240,000 sq.ft new build",
    value: "₹680 Cr",
    story: {
      challenge:
        "The original limestone façade had cracks dating to the 1908 floods. The brief: preserve every original stone, integrate modern HVAC, fire safety and accessibility, and add a contemporary wing that paid quiet respect to its older neighbour.",
      approach:
        "We digitally scanned every stone, hand-numbered 11,400 of them, and sourced matching limestone from the original quarry — still operational two centuries later. Master craftsmen from Rajasthan worked alongside our structural engineers. The new wing was clad in patinated brass to age gracefully alongside the heritage block.",
      impact:
        "Reopened to citizens in October 2023 with a 40-year structural warranty on the heritage block. The civic center now hosts 2,400 visitors daily and won the State Architecture Award for Adaptive Reuse.",
    },
    highlights: [
      "11,400 original limestone blocks preserved",
      "Master craftsmen from 4 Indian states",
      "40-year structural warranty on heritage wing",
      "State Architecture Award 2024 — Adaptive Reuse",
      "Fully accessible per WCAG / RPwD norms",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1600&q=80",
    ],
    metrics: [
      { label: "Heritage age", value: "140 yrs" },
      { label: "Stones preserved", value: "11.4k" },
      { label: "Daily visitors", value: "2,400" },
      { label: "Awards", value: "3" },
    ],
    quote: {
      text: "They treated our heritage as if it were their own. Every cornice, every cornice stone — restored with reverence.",
      author: "Smt. Lakshmi Reddy",
      role: "Principal Secretary, GAD Telangana",
    },
  },
  {
    slug: "aurum-residences",
    title: "Aurum Residences",
    category: "Private",
    location: "Pune, India",
    year: "2025",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=80",
    tagline:
      "A 312-unit ultra-luxury residential community where every apartment was personalised before the foundation was poured.",
    client: "Aurum Group",
    duration: "34 months",
    scale: "5 towers · 312 units · 14-acre podium",
    value: "₹1,210 Cr",
    story: {
      challenge:
        "Aurum’s buyers had bought into a promise: no two homes alike. That meant 312 unique floor-plate variations, custom finishes, and bespoke smart-home configurations — all within a single coordinated build program with zero handover delays.",
      approach:
        "We built a digital twin of the entire community in BIM. Every buyer walked through their actual apartment in VR, signed off finishes 18 months before pouring. A dedicated client-relations engineer was assigned to every 12 units. MEP runs were pre-mapped to accommodate any future personalisation.",
      impact:
        "All 312 units handed over within a 9-day window — a record for ultra-luxury in India. Resale values are already trending 22% above launch price; Aurum reported a 4.9/5 average client satisfaction across 287 surveys.",
    },
    highlights: [
      "312 unique apartment configurations",
      "VR walkthroughs 18 months pre-handover",
      "All units delivered in a 9-day window",
      "4.9/5 average buyer satisfaction",
      "22% appreciation within 6 months of handover",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    ],
    metrics: [
      { label: "Units", value: "312" },
      { label: "Towers", value: "5" },
      { label: "Satisfaction", value: "4.9/5" },
      { label: "Appreciation", value: "+22%" },
    ],
    quote: {
      text: "From the first walkthrough to handover, every interaction felt curated. Griha is the gold standard of construction.",
      author: "Isabella Cruz",
      role: "Principal Architect, Cruz & Vega",
    },
  },
  {
    slug: "industrial-logistics-park",
    title: "Industrial Logistics Park",
    category: "Private",
    location: "Gujarat, India",
    year: "2022",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    hero: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2400&q=80",
    tagline:
      "A 420-acre Grade-A logistics park brought to operational readiness in 14 months — half the industry standard.",
    client: "Nexus Industries",
    duration: "14 months",
    scale: "420 acres · 24 warehouses · 6.2M sq.ft",
    value: "₹2,100 Cr",
    story: {
      challenge:
        "Nexus had pre-leased 80% of the park to global e-commerce tenants who needed go-live for the festive season. The site was 420 acres of saline marshland, 38 km from the nearest concrete plant, with monsoon arriving in 90 days.",
      approach:
        "We airlifted in 14 of our largest dozers and graders. A mobile concrete batching plant was commissioned on-site within 17 days. We worked 22-hour shifts behind floodlights through monsoon, with elevated platforms keeping crews dry. Tenant fit-outs began in unfinished bays under controlled environments.",
      impact:
        "Park went operational 14 months after groundbreaking — versus a 28-month industry benchmark. All 24 warehouses leased before completion. Nexus reported the project delivered 19% above projected ROI.",
    },
    highlights: [
      "14-month delivery vs. 28-month benchmark",
      "On-site mobile batching plant in 17 days",
      "100% pre-leased before completion",
      "19% above projected ROI",
      "1.4 million man-hours, zero fatalities",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1600&q=80",
    ],
    metrics: [
      { label: "Land", value: "420 ac" },
      { label: "Warehouses", value: "24" },
      { label: "Built-up", value: "6.2M sqft" },
      { label: "Speed", value: "2× faster" },
    ],
    quote: {
      text: "We leased 14 excavators across two states. Zero downtime, immaculate maintenance, and operators who knew the job inside-out.",
      author: "Priya Nair",
      role: "Operations Director, BuildCore Ltd.",
    },
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Griha delivered our 42-storey tower three weeks ahead of schedule. Their precision and discipline are unmatched in the industry.",
    name: "Aarav Mehta",
    role: "CEO, Skyline Developers",
  },
  {
    quote:
      "We leased 14 excavators across two states. Zero downtime, immaculate maintenance, and operators who knew the job inside-out.",
    name: "Priya Nair",
    role: "Operations Director, BuildCore Ltd.",
  },
  {
    quote:
      "A genuinely premium partner. The team handled federal compliance, environmental audits and community liaison flawlessly.",
    name: "Rajesh Kulkarni",
    role: "Director, Public Works Department",
  },
  {
    quote:
      "From the first walkthrough to handover, every interaction felt curated. Griha is the gold standard of construction.",
    name: "Isabella Cruz",
    role: "Principal Architect, Cruz & Vega",
  },
];

export const CLIENTS = [
  "Ministry of Infrastructure",
  "Skyline Developers",
  "BuildCore Ltd.",
  "PWD",
  "Aurum Group",
  "Nexus Industries",
  "Coastal Authority",
  "Cruz & Vega",
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery & Vision",
    desc: "We sit down with stakeholders to map ambition, budget and constraints into a single clear brief.",
  },
  {
    step: "02",
    title: "Engineering & Design",
    desc: "Senior engineers and architects translate vision into precision blueprints and 3D walkthroughs.",
  },
  {
    step: "03",
    title: "Mobilization",
    desc: "Crews, machinery and materials are deployed with military-grade logistics and safety standards.",
  },
  {
    step: "04",
    title: "Build & Handover",
    desc: "Transparent reporting, weekly walkthroughs, and a polished handover that exceeds expectations.",
  },
];
