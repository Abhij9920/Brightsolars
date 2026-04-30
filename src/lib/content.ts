// ============================================================
// content.ts — Single source of truth for all website content
// Brightsolars | Victoria, Australia
// Update any text, numbers, or data here — no need to touch components
// ============================================================

// ─── COMPANY INFO ────────────────────────────────────────────
export const COMPANY = {
  name: "Brightsolars",
  tagline: "Victoria's Solar Experts",
  phone: "1300 XXX XXX",
  email: "info@brightsolars.com.au",
  address: "Victoria, Australia",
  abn: "66 591 610 1",
  accreditation: "CEC Accredited Installer",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};

// ─── NAVBAR ──────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Our Services", href: "/service" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

// ─── HOME PAGE ───────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    image: "/images/carousel-1.jpg",
    heading: "Victoria's Trusted Solar Experts",
    subheading:
      "CEC accredited residential and commercial solar installations across Melbourne and regional Victoria.",
    cta: { label: "Get a Free Quote", href: "/quote" },
    ctaSecondary: { label: "Our Products", href: "/products" },
  },
  {
    image: "/images/carousel-2.jpg",
    heading: "Solar Panels, Batteries & EV Charging",
    subheading:
      "We supply and install Australia's leading brands — Jinko, Tesla Powerwall, Fronius, Sungrow and more.",
    cta: { label: "Our Services", href: "/service" },
    ctaSecondary: { label: "Learn More", href: "/about" },
  },
  {
    image: "/images/carousel-3.jpg",
    heading: "Start Saving Within 30 Days",
    subheading:
      "From consultation to installation, our team handles everything so you can enjoy clean energy fast.",
    cta: { label: "Get a Free Quote", href: "/quote" },
    ctaSecondary: { label: "How It Works", href: "/about#how-it-works" },
  },
];

export const STATS = [
  { value: "500+", label: "Happy Customers" },
  { value: "200+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "97%", label: "Customer Satisfaction" },
];

export const BRAND_LOGOS = [
  "Jinko Solar",
  "Canadian Solar",
  "Trina Solar",
  "Tesla Powerwall",
  "Sungrow",
  "Fronius",
  "SMA",
  "Goodwe",
  "BYD",
  "LG",
  "SolarEdge",
  "Enphase",
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "We evaluate your needs",
    description:
      "Our team reviews your energy usage, property layout, and goals to design a tailored solar plan.",
  },
  {
    step: "02",
    title: "We provide a quote",
    description:
      "A clear, competitive proposal outlining costs, expected savings, and installation timelines.",
  },
  {
    step: "03",
    title: "We install your system",
    description:
      "Our CEC-accredited installers handle everything — panels, inverter, battery, and grid connection.",
  },
  {
    step: "04",
    title: "Start saving immediately",
    description:
      "Enjoy reduced electricity bills from day one with clean, renewable solar power.",
  },
];

// ─── ABOUT PAGE ──────────────────────────────────────────────
export const ABOUT = {
  heading: "10+ Years Experience In Solar & Renewable Energy",
  body: "Brightsolars is a CEC accredited solar installer servicing homes and businesses across Victoria. We specialise in residential and commercial solar panels, battery storage, inverters and EV charging — supplying only the most trusted brands in the industry including Jinko, Canadian Solar, Tesla Powerwall, Fronius and Sungrow.",
  bullets: [
    "CEC Accredited Installers",
    "Premium brands — Jinko, Fronius, Tesla Powerwall",
    "Full installation and aftercare support",
    "Servicing all of Victoria",
  ],
  image: "/images/about.jpg",
  whyChooseUs: {
    heading: "Why Choose Brightsolars?",
    subheading: "Complete Commercial & Residential Solar Solutions",
    body: "From your first consultation to ongoing maintenance, we are with you every step of the way. Our in-house team of CEC accredited engineers and installers ensure your system is designed and built to last.",
    points: [
      { label: "Quality", sublabel: "Products" },
      { label: "Expert", sublabel: "Workers" },
      { label: "Free", sublabel: "Consultation" },
      { label: "Customer", sublabel: "Support" },
    ],
  },
};

export const TEAM = [
  {
    name: "James Carter",
    role: "Managing Director",
    image: "/images/team-1.jpg",
    bio: "15+ years in the solar industry. CEC accredited engineer and founder of Brightsolars.",
  },
  {
    name: "Sarah Mitchell",
    role: "Lead Solar Engineer",
    image: "/images/team-2.jpg",
    bio: "Specialises in commercial solar system design and large-scale installations across Victoria.",
  },
  {
    name: "David Nguyen",
    role: "Head of Installations",
    image: "/images/team-3.jpg",
    bio: "CEC accredited installer with over 300 residential and commercial installations completed.",
  },
  {
    name: "Emily Tran",
    role: "Customer Success Manager",
    image: "/images/team-3.jpg",
    bio: "Dedicated to ensuring every customer has a smooth experience from quote to installation.",
  },
];

// ─── SERVICES PAGE ───────────────────────────────────────────
export const SERVICES = [
  {
    id: "residential-solar",
    title: "Residential Solar Installation",
    image: "/images/img1.jpg",
    shortDesc:
      "Rooftop solar systems designed and installed for Victorian homes.",
    fullDesc:
      "We design, supply and install complete residential solar systems tailored to your home's energy needs. From initial assessment through to grid connection and government rebate paperwork, our CEC accredited team handles everything. We use only Tier 1 panels from brands like Jinko, Canadian Solar and Trina to ensure maximum output and long-term reliability.",
    features: [
      "Free on-site consultation and energy assessment",
      "Tier 1 panels — Jinko, Canadian Solar, Trina, REC, Longi",
      "CEC accredited installation team",
      "Full grid connection and rebate assistance",
      "10-year workmanship warranty",
    ],
  },
  {
    id: "commercial-solar",
    title: "Commercial Solar Installation",
    image: "/images/img2.jpg",
    shortDesc:
      "High-output solar systems for businesses, warehouses and industrial sites.",
    fullDesc:
      "Reduce your business operating costs with a commercial solar system from Brightsolars. We work with businesses of all sizes across Victoria — from small retail premises to large industrial warehouses. Our commercial systems are designed to maximise ROI and qualify for all available government incentives.",
    features: [
      "Commercial-grade panels and inverters",
      "System design for maximum ROI",
      "STCs and LGC rebate assistance",
      "Minimal disruption during installation",
      "Ongoing monitoring and maintenance",
    ],
  },
  {
    id: "battery-storage",
    title: "Battery Storage Solutions",
    image: "/images/img3.jpg",
    shortDesc:
      "Store your solar energy with Tesla Powerwall, Sungrow and BYD systems.",
    fullDesc:
      "A solar battery lets you store the excess energy your panels generate during the day and use it at night or during blackouts. We supply and install the most trusted battery brands in Australia including the Tesla Powerwall, Sungrow SBR, BYD Battery-Box and Alpha ESS. Our team will recommend the right battery size based on your household energy usage.",
    features: [
      "Tesla Powerwall, Sungrow, BYD, Alpha ESS, LG Chem",
      "Blackout protection and off-grid capability",
      "Compatible with existing solar systems",
      "Real-time monitoring via app",
      "SA Home Battery Scheme and VIC rebate support",
    ],
  },
  {
    id: "ev-charging",
    title: "EV Charger Installation",
    image: "/images/img4.jpg",
    shortDesc:
      "Home and commercial EV charger installation paired with your solar system.",
    fullDesc:
      "Charge your electric vehicle using your own solar power and drive on sunshine for free. We supply and install home EV chargers compatible with all major EV brands including Tesla, Hyundai, Kia, BMW and more. Pair your charger with a solar battery for completely free overnight charging.",
    features: [
      "Compatible with all major EV brands",
      "Solar-integrated smart charging",
      "7kW and 22kW charger options",
      "Level 2 AC home charger installation",
      "Commercial multi-bay EV charging available",
    ],
  },
  {
    id: "inverters",
    title: "Inverter Supply & Installation",
    image: "/images/img5.jpg",
    shortDesc:
      "Fronius, SMA, Goodwe and SolarEdge inverters — the heart of your solar system.",
    fullDesc:
      "The inverter is the most critical component of your solar system, converting DC power from your panels into usable AC electricity. We supply and install only the most reliable inverter brands — Fronius, SMA, Goodwe, SolarEdge and Enphase. We also supply hybrid inverters for battery-ready systems.",
    features: [
      "Fronius, SMA, Goodwe, SolarEdge, Enphase, Sungrow",
      "String inverters and micro-inverters",
      "Hybrid inverters for battery-ready setups",
      "Remote monitoring and fault detection",
      "Inverter upgrades and replacements",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Repairs",
    image: "/images/img6.jpg",
    shortDesc:
      "Servicing existing solar systems across Melbourne and regional Victoria.",
    fullDesc:
      "A well-maintained solar system performs better and lasts longer. Our maintenance team services all brands and system sizes across Victoria. Whether you have a faulty inverter, damaged panels, or just want a system health check, we can help. We also offer annual maintenance plans to keep your system running at peak efficiency.",
    features: [
      "Fault diagnosis and repair — all brands",
      "Panel cleaning and inspection",
      "Inverter replacement and upgrades",
      "System performance audits",
      "Annual maintenance plans available",
    ],
  },
];

// ─── PRODUCTS PAGE ───────────────────────────────────────────
export const PRODUCT_CATEGORIES = [
  {
    id: "solar-panels",
    label: "Solar Panels",
    description:
      "We supply only Tier 1 solar panels from the world's most trusted manufacturers. All panels carry full product and performance warranties.",
    products: [
      {
        brand: "Jinko Solar",
        model: "Tiger Neo Series",
        image: "/images/img1.jpg",
        type: "Monocrystalline",
        efficiency: "Up to 22.3%",
        warranty: "25 years product / 30 years performance",
        tags: ["Residential", "Commercial"],
        description:
          "Jinko Solar is the world's largest solar panel manufacturer. The Tiger Neo series uses N-type TOPCon technology for industry-leading efficiency and low degradation.",
      },
      {
        brand: "Canadian Solar",
        model: "HiHero Series",
        image: "/images/img2.jpg",
        type: "Monocrystalline HJT",
        efficiency: "Up to 22.8%",
        warranty: "25 years product / 30 years performance",
        tags: ["Residential", "Commercial"],
        description:
          "Canadian Solar's HiHero panels use Heterojunction Technology (HJT) for exceptional performance in high temperatures — ideal for Australian conditions.",
      },
      {
        brand: "Trina Solar",
        model: "Vertex S+ Series",
        image: "/images/img3.jpg",
        type: "Monocrystalline PERC",
        efficiency: "Up to 21.8%",
        warranty: "25 years product / 30 years performance",
        tags: ["Residential"],
        description:
          "Trina Solar is a globally recognised Tier 1 manufacturer. The Vertex S+ series delivers reliable performance and excellent value for residential installations.",
      },
      {
        brand: "REC Group",
        model: "Alpha Pure-R",
        image: "/images/img4.jpg",
        type: "Monocrystalline HJT",
        efficiency: "Up to 22.3%",
        warranty: "25 years product / 25 years performance",
        tags: ["Residential", "Premium"],
        description:
          "REC Alpha panels are among the most efficient and durable available. Made in Singapore with European engineering, they're the premium choice for demanding installations.",
      },
      {
        brand: "Longi Solar",
        model: "Hi-MO 6 Series",
        image: "/images/img5.jpg",
        type: "Monocrystalline HPBC",
        efficiency: "Up to 22.0%",
        warranty: "25 years product / 30 years performance",
        tags: ["Residential", "Commercial"],
        description:
          "Longi is the world's leading monocrystalline solar manufacturer. The Hi-MO 6 uses proprietary HPBC cell technology for excellent low-light performance.",
      },
      {
        brand: "Q CELLS",
        model: "Q.PEAK DUO BLK ML-G10+",
        image: "/images/img6.jpg",
        type: "Monocrystalline PERC",
        efficiency: "Up to 21.4%",
        warranty: "25 years product / 25 years performance",
        tags: ["Residential", "Premium"],
        description:
          "Q CELLS are popular in Australia for their sleek all-black design and German engineering. Excellent choice for aesthetics-conscious homeowners.",
      },
    ],
  },
  {
    id: "batteries",
    label: "Battery Storage",
    description:
      "Store your solar energy and use it day or night. Our battery storage solutions give you energy independence, blackout protection, and maximum savings.",
    products: [
      {
        brand: "Tesla",
        model: "Powerwall 3",
        image: "/images/img1.jpg",
        capacity: "13.5 kWh",
        power: "11.5 kW continuous",
        warranty: "10 years",
        tags: ["Residential", "Popular"],
        description:
          "The Tesla Powerwall 3 is the most popular home battery in Australia. It includes an integrated inverter, supports whole-home backup, and is managed via the Tesla app.",
      },
      {
        brand: "Sungrow",
        model: "SBR HV Series",
        image: "/images/img2.jpg",
        capacity: "9.6 – 25.6 kWh (modular)",
        power: "5 kW continuous",
        warranty: "10 years",
        tags: ["Residential", "Commercial"],
        description:
          "Sungrow's modular SBR battery can be expanded as your energy needs grow. A highly reliable and cost-effective option backed by one of the world's largest inverter manufacturers.",
      },
      {
        brand: "BYD",
        model: "Battery-Box Premium HVS",
        image: "/images/img3.jpg",
        capacity: "5.1 – 20.4 kWh (modular)",
        power: "5 kW continuous",
        warranty: "10 years",
        tags: ["Residential", "Commercial"],
        description:
          "BYD is one of the world's largest battery manufacturers. The Battery-Box HVS is a stackable, modular lithium iron phosphate battery with an excellent safety record.",
      },
      {
        brand: "Alpha ESS",
        model: "Storion SMILE5",
        image: "/images/img4.jpg",
        capacity: "5.7 – 22.8 kWh (modular)",
        power: "5 kW continuous",
        warranty: "10 years",
        tags: ["Residential"],
        description:
          "Alpha ESS offers one of the best value battery systems on the Australian market. The Storion SMILE5 is compact, modular and compatible with most solar inverters.",
      },
      {
        brand: "LG Chem",
        model: "RESU Prime",
        image: "/images/img5.jpg",
        capacity: "9.6 kWh / 16 kWh",
        power: "5 kW continuous",
        warranty: "10 years",
        tags: ["Residential", "Premium"],
        description:
          "LG Chem RESU batteries are trusted for their compact design, safety and long cycle life. The RESU Prime is compatible with most major hybrid inverters.",
      },
    ],
  },
  {
    id: "inverters",
    label: "Inverters",
    description:
      "The inverter converts solar power into usable electricity for your home or business. We supply and install only the most reliable and efficient inverters available.",
    products: [
      {
        brand: "Fronius",
        model: "Primo Gen24 Plus",
        image: "/images/img1.jpg",
        type: "Hybrid Inverter",
        warranty: "10 years standard (extendable)",
        tags: ["Residential", "Popular"],
        description:
          "Fronius is an Austrian inverter brand renowned for quality and reliability. The Primo Gen24 Plus is a hybrid inverter — battery-ready out of the box with a built-in backup interface.",
      },
      {
        brand: "SMA",
        model: "Sunny Boy",
        image: "/images/img2.jpg",
        type: "String Inverter",
        warranty: "10 years",
        tags: ["Residential", "Commercial"],
        description:
          "SMA is a German inverter manufacturer with a 40-year track record. The Sunny Boy range is known for exceptional durability and industry-leading efficiency.",
      },
      {
        brand: "Goodwe",
        model: "DNS Series",
        image: "/images/img3.jpg",
        type: "Hybrid Inverter",
        warranty: "10 years",
        tags: ["Residential"],
        description:
          "Goodwe DNS is a popular hybrid inverter offering battery compatibility, smart home energy management and excellent value. One of the best-selling inverters in Australia.",
      },
      {
        brand: "SolarEdge",
        model: "Home Hub Inverter",
        image: "/images/img4.jpg",
        type: "Hybrid Inverter with Optimisers",
        warranty: "12 years (extendable to 25)",
        tags: ["Residential", "Premium"],
        description:
          "SolarEdge uses module-level power optimisers to maximise output from every panel — ideal for shaded or complex roof layouts. The Home Hub includes battery and EV charger integration.",
      },
      {
        brand: "Enphase",
        model: "IQ8 Microinverters",
        image: "/images/img5.jpg",
        type: "Microinverter",
        warranty: "25 years",
        tags: ["Residential", "Premium"],
        description:
          "Enphase microinverters are installed on each individual panel, eliminating single-point failure and maximising output in shaded conditions. The IQ8 can operate as a standalone power island during blackouts.",
      },
      {
        brand: "Sungrow",
        model: "SH Series Hybrid",
        image: "/images/img6.jpg",
        type: "Hybrid Inverter",
        warranty: "10 years",
        tags: ["Residential", "Commercial"],
        description:
          "Sungrow is the world's largest inverter manufacturer. The SH Series hybrid inverter is compatible with the Sungrow SBR battery and features built-in EV charger integration.",
      },
    ],
  },
  {
    id: "ev-chargers",
    label: "EV Chargers",
    description:
      "Charge your electric vehicle using your own solar power. We supply and install home and commercial EV chargers compatible with all major EV brands.",
    products: [
      {
        brand: "Tesla",
        model: "Wall Connector Gen 3",
        image: "/images/img1.jpg",
        power: "Up to 22 kW",
        connector: "Type 2",
        warranty: "4 years",
        tags: ["Residential", "Popular"],
        description:
          "The Tesla Wall Connector is sleek, fast and solar-integrated. Works with all EV brands via Type 2 connector and supports solar surplus charging via the Tesla app.",
      },
      {
        brand: "Fronius",
        model: "Wattpilot Home 11J",
        image: "/images/img2.jpg",
        power: "11 kW",
        connector: "Type 2",
        warranty: "3 years",
        tags: ["Residential"],
        description:
          "The Fronius Wattpilot integrates directly with Fronius solar inverters for intelligent solar-powered EV charging. Surplus solar energy is automatically directed to your car first.",
      },
    ],
  },
];

// ─── GALLERY PAGE ────────────────────────────────────────────
export const GALLERY_ITEMS = [
  { image: "/images/gallery-1.jpg", title: "Residential Install — Melbourne", category: "Residential" },
  { image: "/images/gallery-2.jpg", title: "Commercial Rooftop — Geelong", category: "Commercial" },
  { image: "/images/gallery-3.jpg", title: "Tesla Powerwall Install — Ballarat", category: "Battery" },
  { image: "/images/gallery-4.jpg", title: "6.6kW System — Werribee", category: "Residential" },
  { image: "/images/gallery-5.jpg", title: "Warehouse System — Dandenong", category: "Commercial" },
  { image: "/images/gallery-6.jpg", title: "EV Charger + Solar — Brighton", category: "EV Charging" },
  { image: "/images/img1.jpg", title: "13.3kW Rooftop — Bendigo", category: "Residential" },
  { image: "/images/img2.jpg", title: "Battery + Solar — St Kilda", category: "Battery" },
  { image: "/images/img3.jpg", title: "School Solar System — Frankston", category: "Commercial" },
];

export const GALLERY_FILTERS = ["All", "Residential", "Commercial", "Battery", "EV Charging"];

// ─── TESTIMONIALS ────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Melbourne, VIC",
    image: "/images/testimonial-1.jpg",
    rating: 5,
    quote:
      "The Brightsolars team made the whole process incredibly easy. From quote to installation took less than 2 weeks, and our electricity bill dropped by over 70% in the first month.",
  },
  {
    name: "James T.",
    location: "Geelong, VIC",
    image: "/images/testimonial-2.jpg",
    rating: 5,
    quote:
      "We had 3 quotes before going with Brightsolars. They were the most professional and transparent. The Fronius inverter they installed has been flawless — couldn't be happier.",
  },
  {
    name: "Angela K.",
    location: "Ballarat, VIC",
    image: "/images/testimonial-3.jpg",
    rating: 5,
    quote:
      "Brilliant service from start to finish. The Tesla Powerwall they recommended means we're almost entirely off the grid now. Worth every cent.",
  },
];

// ─── BLOG POSTS ──────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    id: "solar-rebates-victoria-2025",
    title: "Solar Rebates in Victoria 2025: Everything You Need to Know",
    slug: "solar-rebates-victoria-2025",
    date: "April 10, 2025",
    author: "James Carter",
    category: "Rebates & Incentives",
    image: "/images/carousel-1.jpg",
    excerpt:
      "Victoria offers some of the best solar rebates in Australia. Here's a complete guide to the Solar Homes Program, STCs, and what you can claim in 2025.",
    content: `
## What rebates are available for solar in Victoria?

Victorian homeowners installing solar panels can take advantage of several government incentive programs that significantly reduce the upfront cost of going solar.

### 1. Small-scale Technology Certificates (STCs)
STCs are a federal government incentive available to all Australians installing solar. The number of certificates you receive depends on your system size and location. In Victoria, a 6.6kW system typically generates around 80–90 STCs, worth approximately $3,000–$4,000 at current prices. Your installer (us) handles the paperwork and applies this as an upfront discount on your quote.

### 2. Solar Homes Program — Solar Panel Rebate
The Victorian Government's Solar Homes Program provides eligible homeowners with a rebate of up to $1,400 for a solar panel system. To be eligible, your household income must be below $210,000 per year and the property must be owner-occupied. The rebate is applied as a point-of-sale discount, so you never need to handle the money yourself.

### 3. Solar Battery Loan
The Solar Homes Program also offers an interest-free loan of up to $8,800 to eligible Victorian households for the purchase and installation of a solar battery. This is in addition to, not instead of, the solar panel rebate.

### 4. Solar for Apartments (2025 Update)
From 2025, apartment residents in Victoria can now access a new shared solar rebate scheme. Body corporates can apply for a rebate of up to $2,800 for shared solar systems installed on apartment buildings.

## How much can I save in total?

For a typical 6.6kW residential solar system in Victoria, the combined value of STCs plus the Solar Homes rebate can reduce your installation cost by $4,000–$5,400 depending on current STC prices.

## How do I apply?

You don't need to do anything. Brightsolars handles all rebate applications on your behalf. We'll confirm your eligibility during the free consultation and factor all applicable rebates into your quote so you see a clear, final price.

Contact us today for a free quote and rebate assessment.
    `.trim(),
  },
  {
    id: "how-many-solar-panels-do-i-need",
    title: "How Many Solar Panels Do I Need for My Home?",
    slug: "how-many-solar-panels-do-i-need",
    date: "March 22, 2025",
    author: "Sarah Mitchell",
    category: "Buying Guide",
    image: "/images/carousel-2.jpg",
    excerpt:
      "One of the most common questions we get asked. The answer depends on your electricity usage, roof space, and whether you're adding a battery. Here's how to work it out.",
    content: `
## The short answer

For an average Australian home using around 20kWh per day, a 6.6kW solar system (typically 16–18 panels) is the most common recommendation. But your ideal system size depends on several factors.

## Step 1: Check your electricity bill

Look at your quarterly electricity bill and find your daily average consumption in kilowatt-hours (kWh). In Victoria, the average household uses between 15–25 kWh per day.

## Step 2: Understand how solar generation works

In Melbourne, a 1kW solar system generates approximately 3.5–4 kWh of electricity per day on average across the year. So:

- **3kW system** → ~10–12 kWh/day
- **6.6kW system** → ~23–26 kWh/day  
- **10kW system** → ~35–40 kWh/day

## Step 3: Factor in your goals

Are you trying to eliminate your bill entirely? Add an EV charger? Or just offset the bulk of your usage? This changes the recommended system size significantly.

If you're adding a battery, you may want a slightly larger system to ensure you fill the battery daily and still have excess to export.

## Step 4: Check your roof space

A standard 400W solar panel is approximately 1.7m x 1.1m. A 6.6kW system using 400W panels requires 16–17 panels, needing around 25–30 square metres of usable north-facing roof space.

## The most popular system sizes in Victoria

| System Size | Panels (400W) | Est. Daily Output | Best For |
|---|---|---|---|
| 6.6kW | 16–17 | 23–26 kWh | Average household |
| 10kW | 25 | 35–40 kWh | Large family or EV |
| 13.3kW | 33 | 46–53 kWh | Large home + battery |

## Get a personalised recommendation

Every home is different. The best way to know exactly what you need is a free consultation with our team. We'll review your bills, inspect your roof, and give you a recommendation based on your actual energy profile — not a generic estimate.
    `.trim(),
  },
  {
    id: "tesla-powerwall-3-review-australia",
    title: "Tesla Powerwall 3 Review: Is It Worth It in Australia?",
    slug: "tesla-powerwall-3-review-australia",
    date: "February 14, 2025",
    author: "David Nguyen",
    category: "Product Reviews",
    image: "/images/carousel-3.jpg",
    excerpt:
      "The Tesla Powerwall 3 launched in Australia in late 2024. We've installed dozens of them. Here's our honest take on whether it's the right battery for you.",
    content: `
## What is the Tesla Powerwall 3?

The Tesla Powerwall 3 is the third generation of Tesla's home battery system, launched in Australia in late 2024. It's a wall-mounted lithium iron phosphate battery with a built-in inverter — meaning you don't need a separate solar inverter, which simplifies installation and reduces cost.

## Key specs

- **Capacity:** 13.5 kWh usable
- **Power output:** 11.5 kW continuous (30 kW peak)
- **Integrated inverter:** Yes (up to 6 strings, 20kW solar input)
- **Backup:** Yes — whole-home or partial backup
- **Monitoring:** Tesla app
- **Warranty:** 10 years (70% capacity retention guarantee)
- **Installed cost in Victoria:** ~$13,000–$16,000 depending on system size

## What's improved over the Powerwall 2?

The Powerwall 3 is a significant upgrade. The integrated inverter eliminates the need for a separate solar inverter, which reduces both cost and complexity. Power output has increased from 5kW to 11.5kW continuous — enough to run an air conditioner, oven, and EV charger simultaneously during a blackout.

## What we like

**Whole-home backup** is the standout feature. Unlike some batteries that only back up a few circuits, the Powerwall 3 can seamlessly take over your entire home when the grid goes down — in milliseconds.

**The Tesla app** is genuinely excellent. You can see real-time solar generation, battery state, grid imports/exports, and set custom charging schedules. It's the most polished battery monitoring experience available.

**No separate inverter needed** means simpler wiring, one less point of failure, and lower overall system cost for new installations.

## What to consider

The Powerwall 3 only works with Tesla's own gateway hardware, which makes it less flexible if you want to change components later. It's also one of the more expensive battery options upfront, though the integrated inverter partially offsets this for new installations.

## Our verdict

If you're installing a new solar system and want the most capable, best-supported home battery on the market — the Powerwall 3 is our top recommendation. If you already have a solar system with an existing inverter, you may get better value from the Sungrow SBR or BYD Battery-Box.

Contact us for a free battery consultation and we'll match you with the right product for your situation.
    `.trim(),
  },
  {
    id: "commercial-solar-roi-victoria",
    title: "Commercial Solar ROI: How Fast Do Victorian Businesses Break Even?",
    slug: "commercial-solar-roi-victoria",
    date: "January 30, 2025",
    author: "James Carter",
    category: "Commercial Solar",
    image: "/images/about.jpg",
    excerpt:
      "Commercial solar has a faster payback period than most business owners expect. Here's how to calculate your ROI and what a typical Victorian business can expect.",
    content: `
## Why commercial solar makes financial sense

For Victorian businesses, solar is one of the highest-return capital investments available. Unlike residential solar where most savings come from self-consumption and feed-in tariffs, commercial systems benefit from high daytime energy usage that aligns perfectly with solar generation hours.

## Typical commercial solar payback in Victoria

For a Victorian business with daytime operations, payback periods are typically:

| System Size | Approx Cost (after incentives) | Annual Savings | Payback Period |
|---|---|---|---|
| 30kW | ~$25,000 | ~$8,000–$12,000 | 2.5–3.5 years |
| 100kW | ~$75,000 | ~$28,000–$40,000 | 2–3 years |
| 250kW | ~$170,000 | ~$70,000–$100,000 | 1.7–2.5 years |

## Government incentives for businesses

Commercial solar systems above 100kW generate Large-scale Generation Certificates (LGCs) rather than STCs. LGCs have a higher value and are sold annually, providing ongoing income in addition to electricity savings.

Businesses can also claim the solar system as a depreciable asset and may be eligible for instant asset write-off under the ATO's small business tax concessions.

## Factors that affect your ROI

- **Daytime energy usage** — the more electricity you use during daylight hours, the faster the payback
- **Current electricity tariff** — businesses paying above 25c/kWh see faster returns
- **Roof orientation and shade** — north-facing, unshaded roofs produce the most energy
- **System quality** — Tier 1 panels degrade slower, maintaining output for longer

## Getting a commercial assessment

Every commercial solar assessment we do includes a full financial analysis — system cost, incentives, projected annual savings, payback period and 25-year ROI — so you can make a fully informed investment decision.

Contact our commercial team for a free site assessment.
    `.trim(),
  },
];

// ─── CONTACT PAGE ────────────────────────────────────────────
export const CONTACT = {
  heading: "Get In Touch",
  subheading:
    "Have a question or ready to get started? Our team is here to help. We'll respond within 24 hours.",
  address: "Victoria, Australia",
  phone: COMPANY.phone,
  email: COMPANY.email,
  hours: "Mon – Fri: 8:00am – 5:00pm | Sat: 9:00am – 1:00pm",
  mapEmbedUrl: "", // Add Google Maps embed URL when available
};

// ─── QUOTE PAGE ──────────────────────────────────────────────
export const QUOTE_STEPS = [
  {
    step: 1,
    title: "Property Type",
    description: "Tell us about the property",
  },
  {
    step: 2,
    title: "Energy Needs",
    description: "Help us size your system",
  },
  {
    step: 3,
    title: "Products",
    description: "What are you interested in?",
  },
  {
    step: 4,
    title: "Your Details",
    description: "So we can get back to you",
  },
];

export const QUOTE_FIELDS = {
  propertyTypes: ["Residential Home", "Commercial / Business", "Industrial", "Farm / Rural"],
  roofTypes: ["Tin / Colorbond", "Tile", "Flat / Concrete", "Other"],
  billRanges: [
    "Under $300/quarter",
    "$300 – $600/quarter",
    "$600 – $1,000/quarter",
    "$1,000 – $2,000/quarter",
    "Over $2,000/quarter",
  ],
  systemInterests: [
    "Solar Panels Only",
    "Solar Panels + Battery",
    "Solar Panels + EV Charger",
    "Solar Panels + Battery + EV Charger",
    "Battery Only (I already have solar)",
    "EV Charger Only",
  ],
  timeframes: [
    "As soon as possible",
    "Within 1 month",
    "Within 3 months",
    "Just researching for now",
  ],
  states: ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT", "NT"],
};

// ─── FOOTER ──────────────────────────────────────────────────
export const FOOTER = {
  description:
    "CEC accredited solar installers servicing homes and businesses across Victoria. Residential and commercial solar panels, battery storage, inverters and EV charging.",
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/service" },
    { label: "Our Products", href: "/products" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Residential Solar", href: "/service#residential-solar" },
    { label: "Commercial Solar", href: "/service#commercial-solar" },
    { label: "Battery Storage", href: "/service#battery-storage" },
    { label: "EV Charging", href: "/service#ev-charging" },
    { label: "Inverters", href: "/service#inverters" },
    { label: "Maintenance", href: "/service#maintenance" },
  ],
  copyright: `© ${new Date().getFullYear()} Brightsolars Pty Ltd. All Rights Reserved. | CEC Accredited Installer | ABN 66 591 610 1`,
};
