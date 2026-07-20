/**
 * Central content file.
 *
 * Everything on the site is driven from this file so it can be edited
 * without touching any page or component code. Update the values below and
 * the whole site updates. Placeholders / items to confirm are marked TODO.
 */

export const profile = {
  name: "Oliver Godwin",
  role: "Go-To-Market Leader",
  targetCompany: "Cognition",
  headline:
    "Building and scaling high-performing revenue teams for category-defining technology.",
  summary:
    "Highly motivated sales leader with a proven record of exceeding revenue targets through strategic net-new growth. President's Club winner and top-5% global sales manager at Datadog, skilled at building high-performing in-region teams, territory planning, and strategic selling — now focused on helping Cognition take Devin to market.",
  location: "Sydney, Australia",
  email: "o.godwin@outlook.com",
  phone: "0425 201 895",
  linkedin: "https://www.linkedin.com/in/oliver-godwin/", // TODO: confirm exact URL
  // Optional: put a PDF in /public and set e.g. "/oliver-godwin-cv.pdf".
  resumeUrl: "",
  availability: "Interviewing for the GTM leadership role at Cognition",
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "CV", href: "/cv" },
  { label: "30 / 60 / 90", href: "/plan" },
  { label: "GTM Plan", href: "/gtm" },
  { label: "Management", href: "/management" },
  { label: "Contact", href: "/contact" },
];

/** High-level impact metrics surfaced on the homepage. */
export const metrics: { value: string; label: string }[] = [
  { value: "152%", label: "FY25 quota attainment at Datadog" },
  { value: "#5 / ~150", label: "Global ranking of my sales team" },
  { value: "President's Club", label: "Winner, 2025" },
  { value: "75", label: "New customers acquired in FY25" },
];

/** Short highlights shown on the homepage. */
export const highlights: { title: string; body: string }[] = [
  {
    title: "Overachievement, consistently",
    body: "152% attainment in FY25 and President's Club recognition — a sustained record of exceeding target across every role.",
  },
  {
    title: "Builds high-performing teams",
    body: "Hires, coaches, and develops in-region acquisition teams — currently leading eight AEs across ANZ.",
  },
  {
    title: "Net-new growth specialist",
    body: "Founds new territories from zero and turns strategic account planning into repeatable, high-quality pipeline.",
  },
];

/** Signature strengths (from CV highlights). */
export const strengths: string[] = [
  "High-performance team building",
  "Proven record of overachievement",
  "Acquisition / velocity new-logo growth",
  "Technical aptitude",
  "Coaching and mentoring",
  "Strategic selling & pipeline generation",
  "MEDDIC / MEDDPICC frameworks",
  "C-level engagement",
  "Territory planning",
  "Forecasting accuracy",
];

/** Work experience — About & Experience pages. */
export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  achievements: string[];
};

export const experience: Role[] = [
  {
    company: "Datadog",
    title: "Commercial & Mid-Market Sales Manager",
    period: "Sep 2024 — Present",
    location: "Sydney, NSW",
    summary:
      "Leading and developing a team of eight Account Executives driving revenue and new-logo growth across the commercial and mid-market segment in Australia and New Zealand.",
    achievements: [
      "President's Club winner, 2025.",
      "152% attainment in FY25 — ranked #5 of ~150 sales teams globally at Datadog.",
      "Team acquired 75 new customers in FY25.",
      "Lead, mentor, and coach high-performing AEs to quarterly and annual targets.",
      "Own territory planning, pipeline generation, and forecasting using MEDDIC.",
      "Partner with Sales Engineering, Customer Success, Marketing, and Product to align on customer success and deal execution.",
      "Support the team through complex deal cycles, C-level negotiations, and expansion.",
    ],
  },
  {
    company: "Splunk",
    title: "Regional Sales Manager",
    period: "Oct 2022 — Sep 2024",
    location: "North Sydney, NSW",
    summary:
      "Led a core sales territory and team responsible for all net-new accounts across NSW Commercial & Enterprise.",
    achievements: [
      "Founded a new, entirely net-new acquisition territory for Splunk in NSW.",
      "Built and executed go-to-market strategy, pipeline-generation programs, and marketing events to grow the NSW business.",
      "Orchestrated the wider team — BDRs, account managers, technical resources, customer success, renewals, and business value.",
      "Ran the hiring process including interviews and roleplays; mentored aligned BDRs on quarterly targets and career development.",
      "Built strong C-level relationships with frequent executive cadence and presentations.",
      "MEDDPICC trained; owned accurate quarterly forecasting and weekly deal reviews with leadership.",
    ],
  },
  {
    company: "Splunk",
    title: "Enterprise Account Manager",
    period: "Dec 2021 — Oct 2022",
    location: "North Sydney, NSW",
    summary:
      "Dedicated net-new business account manager for NSW, positioning Splunk's broad portfolio against diverse customer use cases.",
    achievements: [
      "Q1 FY23: 125% MBO attainment; Q2 FY23: 125%; Q3 FY23: 105%.",
      "Used a trusted-advisor, advisory-selling model to fit Splunk to specific customer needs.",
      "Partnered with the aligned RSM to uncover and convert new opportunities.",
      "Built meaningful relationships with senior stakeholders including C-suite, IT managers, and partners.",
    ],
  },
  {
    company: "Dell Technologies (EMC)",
    title: "Enterprise Data Centre Account Manager",
    period: "Dec 2020 — Dec 2021",
    location: "Sydney, NSW",
    summary:
      "Owned high-value accounts across acquisition, government, education, mid-market, and enterprise, selling Storage, Data Protection, and Cloud Services consultatively.",
    achievements: [
      "H1 FY22: 103% quota attainment.",
      "H2 FY22: on track to exceed target with $2.5M+ AUD forecast to close in Q4 at time of departure.",
      "Generated 20+ net-new opportunities YTD.",
      "Developed territory, strategic account, and partner business plans executed against defined metrics.",
    ],
  },
  {
    company: "Dell Technologies (EMC)",
    title: "Enterprise Inside Sales Representative",
    period: "Jan 2020 — Dec 2020",
    location: "Sydney, NSW",
    summary:
      "Prospected and converted new customers across NSW and Victoria for the Education and Government sectors.",
    achievements: [
      "Prospected 50 leads per week; consistent top performer driving 15+ opportunities to the storage business each quarter.",
      "Awarded for driving top-line revenue growth and sustained achievement.",
      "Led multi-channel outreach (LinkedIn, Sales Navigator, 6sense, Lusha, email) to generate pipeline.",
      "Maintained detailed account records and contact logs in Salesforce.",
    ],
  },
  {
    company: "Sektor",
    title: "Sales Support Specialist (NSW, VIC)",
    period: "Jul 2019 — Jan 2020",
    location: "Rosehill, NSW",
    summary: "Sales support across the NSW and VIC territories.",
    achievements: [],
  },
  {
    company: "Resolution Services Group",
    title: "Account Manager",
    period: "Jan 2015 — Aug 2019",
    location: "Sydney, NSW",
    summary:
      "Founded the sales motion at RSG — building the account territory and running commercial processes on behalf of the founder.",
    achievements: [
      "Created account territory and managed outbound lead generation.",
      "Managed pipeline through CRM software and negotiated profitable client contracts.",
      "Used cold calling and networking to sell products and services.",
    ],
  },
];

/** Education & certifications for the CV page. */
export const education: { institution: string; detail: string }[] = [
  {
    institution: "University of Technology Sydney (UTS)",
    detail: "Bachelor of Business Management (Business)",
  },
  {
    institution: "UTS Insearch, Sydney",
    detail: "Diploma of Business",
  },
];

export const certifications: string[] = [
  "Energy for Purpose — Mental Health in the Workplace (Explore Performance)",
  "Microsoft Azure Infrastructure Fundamentals Certified",
  "AWS Cloud Certification",
  "VMware Sales Professional Accredited",
  "CASI Level 2 Instructor License",
  "UTS Business School Alumni",
];

export const skills: string[] = [
  "GTM strategy",
  "Sales leadership",
  "Net-new acquisition",
  "Territory planning",
  "Pipeline generation",
  "Forecasting",
  "MEDDIC / MEDDPICC",
  "Team building & coaching",
  "C-level engagement",
  "Cross-functional partnership",
];

/** 30 / 60 / 90 day plan. */
export type PlanPhase = {
  window: string;
  theme: string;
  objectives: string[];
};

export const plan: PlanPhase[] = [
  {
    window: "First 30 Days",
    theme: "Listen, learn, and diagnose",
    objectives: [
      "Meet every member of the GTM team and key partners across product, engineering, and the founding team.",
      "Learn Devin, the buyer, and the current sales motion end-to-end.",
      "Audit the funnel, pipeline, and data to establish a clear baseline.",
      "Review current messaging, pricing, and competitive positioning.",
      "Identify quick wins and the biggest constraints to growth.",
    ],
  },
  {
    window: "First 60 Days",
    theme: "Align and build the plan",
    objectives: [
      "Present findings and a prioritised GTM plan to leadership.",
      "Define the ICP, segmentation, and a repeatable sales playbook.",
      "Establish core metrics, forecasting cadence, and reporting.",
      "Begin closing gaps in process, tooling, and enablement.",
      "Build tight feedback loops between the field and product.",
    ],
  },
  {
    window: "First 90 Days",
    theme: "Execute and show momentum",
    objectives: [
      "Roll out the refined playbook and onboard the team to it.",
      "Deliver early proof points — pipeline, wins, or conversion gains.",
      "Set the hiring plan and org design for the next phase of scale.",
      "Lock in a quarterly operating rhythm and OKRs.",
      "Present a 12-month roadmap for durable, repeatable growth.",
    ],
  },
];

/** Go-to-market plan sections. */
export const gtm = {
  intro:
    "A point of view on how I'd help Cognition scale Devin's go-to-market — grounded in selling technical, category-defining products to demanding buyers.",
  sections: [
    {
      title: "Market & ICP",
      body: "Define the ideal customer profile and the segments where Devin creates the clearest, fastest value — prioritising where pain is acute, budget exists, and adoption spreads.",
      points: [
        "Segment by team size, engineering maturity, and use-case fit.",
        "Identify champions and economic buyers in each segment.",
        "Map the competitive and status-quo alternatives.",
      ],
    },
    {
      title: "Positioning & Messaging",
      body: "Make the value of an autonomous AI engineer obvious and quantifiable — tailored to both practitioners and executives.",
      points: [
        "Lead with outcomes: velocity, capacity, and cost.",
        "Prove value through demos, benchmarks, and customer stories.",
        "Address trust, security, and workflow-fit objections directly.",
      ],
    },
    {
      title: "Sales Motion",
      body: "Design a motion that matches how technical buyers actually buy — product-led exploration feeding a high-signal, consultative sales process.",
      points: [
        "Blend PLG signals with targeted outbound to key accounts.",
        "Create a crisp pilot / evaluation framework with success criteria.",
        "Instrument the funnel with MEDDIC discipline end-to-end.",
      ],
    },
    {
      title: "Pricing & Packaging",
      body: "Align pricing with value delivered and how customers consume the product, keeping expansion natural as usage grows.",
      points: [
        "Test value metrics that scale with customer success.",
        "Design land-and-expand packaging.",
        "Reduce friction to first value.",
      ],
    },
    {
      title: "Team & Enablement",
      body: "Hire for curiosity and technical credibility, and enable the team to have genuinely valuable conversations with engineering audiences.",
      points: [
        "Hire sellers who earn the trust of technical buyers.",
        "Build enablement, playbooks, and a shared knowledge base.",
        "Create tight feedback loops with product and engineering.",
      ],
    },
    {
      title: "Metrics & Operating Rhythm",
      body: "Run the business on a small set of metrics that matter, with a cadence that keeps the team focused and accountable.",
      points: [
        "Define a north-star metric and leading indicators.",
        "Establish forecasting and pipeline hygiene.",
        "Review and iterate on a weekly / monthly / quarterly rhythm.",
      ],
    },
  ],
};

/** Management style — placeholder to be filled out later. */
export const management = {
  intro:
    "How I lead teams — my principles, operating style, and what people can expect working with me. More detail and examples coming soon.",
  principles: [
    {
      title: "High performance, high support",
      body: "Ambitious targets paired with real coaching, roleplay, and removal of blockers — the model that produced President's Club and top-5% global results.",
    },
    {
      title: "Coach and develop people",
      body: "Weekly cadence, career development, and hands-on mentoring so every seller grows. — TODO: add a specific example.",
    },
    {
      title: "Build a winning culture",
      body: "Collaborative, inclusive, and performance-driven — people who own outcomes, not just tasks. — TODO: expand.",
    },
    {
      title: "Lead with data and discipline",
      body: "MEDDIC/MEDDPICC rigour, accurate forecasting, and evidence-based decisions under uncertainty. — TODO: expand.",
    },
  ],
};

/** "Why Cognition" note for the homepage / about page. */
export const whyCognition =
  "Cognition is building something genuinely new. I've spent my career taking technical products — observability, security, infrastructure — to market and winning net-new business against the status quo. Helping engineering teams adopt Devin is exactly the kind of category-defining GTM challenge I want to lead.";
