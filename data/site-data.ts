// ===== Type Definitions =====

export interface Stat {
  value: string;
  label: string;
  icon: string;
  highlight?: boolean;
}

export interface Service {
  number: string;
  id: string;
  title: string;
  description: string;
  tags: string[];
  features: string[];
}

export interface Capability {
  icon: string;
  title: string;
  description: string;
}

export interface TechItem {
  name: string;
  icon?: string;
}

export interface TechCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  items: TechItem[];
}

export interface TechPrinciple {
  icon: string;
  title: string;
  description: string;
}

export interface Brand {
  name: string;
}

export interface EngagementModel {
  title: string;
  subtitle: string;
  features: string[];
}

export interface AIService {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface AIStat {
  value: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  items: string[];
}

export interface AIPrinciple {
  icon: string;
  title: string;
  description: string;
}

// ===== Homepage Stats =====

export const stats: Stat[] = [
  { value: "70+", label: "Product Engineers across all domains", icon: "👥" },
  { value: "50+", label: "Scalable platforms shipped to production", icon: "🚀" },
  { value: "AI-First", label: "LLM, RAG & AI Agents integrated into products", icon: "🤖", highlight: true },
  { value: "3", label: "Global markets served EU · AU · US", icon: "🌍" },
];

export const heroTags: string[] = [
  "Ecommerce",
  "Social Platforms",
  "High-Concurrency Infra",
  "Applied AI",
];

// ===== Services =====

export const services: Service[] = [
  {
    number: "01",
    id: "ecommerce",
    title: "Ecommerce Platforms",
    description:
      "High-traffic, multi-country commerce systems built for brands that sell globally. We handle architecture, migration, scaling, and long-term platform health.",
    tags: ["Magento", "Shopify", "Drupal"],
    features: [
      "Multi-country storefronts & localization",
      "Platform migration & integration (ERP, SAP, CRM)",
      "Headless & composable commerce builds",
    ],
  },
  {
    number: "02",
    id: "product-engineering",
    title: "Scalable Product Engineering",
    description:
      "Custom web & mobile platforms with cloud-native architecture designed to grow from day one. We build the technical backbone of your product.",
    tags: ["React", "React Native", "Node.js"],
    features: [
      "Full-stack web & mobile platforms",
      "High-performance backend systems",
      "Microservices & cloud-native architecture",
    ],
  },
  {
    number: "03",
    id: "ai-driven",
    title: "AI-Driven Enhancements",
    description:
      "LLM, RAG, and intelligent automation applied directly inside your product — not as a side experiment, but as a core competitive advantage.",
    tags: ["LLM", "RAG", "ML"],
    features: [
      "AI agents & workflow automation",
      "AI-enhanced search & personalization",
      "Fine-tuned open-source models",
    ],
  },
];

// ===== Detailed Service Sections (for Services page) =====

export const serviceDetails = {
  ecommerce: {
    heroText:
      "We design, build, and maintain high-traffic ecommerce platforms for brands that sell globally. Whether you're launching from scratch, migrating from one platform to another, or scaling an existing store to handle millions of concurrent users — we've done it.",
    subtitle:
      "Our ecommerce engineers are specialists in Magento, Shopify, and Drupal Commerce, with deep experience in multi-country, multi-currency, and multi-language storefronts.",
    capabilities: [
      {
        icon: "🌐",
        title: "Multi-Country Stores",
        description: "Multi-currency, localized checkout, and regional tax compliance built in across multiple countries.",
      },
      {
        icon: "⚡",
        title: "High-Traffic Infrastructure",
        description: "Redis caching, CDN integration, and auto-scaling for flash sales and sustained high-concurrency.",
      },
      {
        icon: "🔄",
        title: "Platform Migration",
        description:
          "Migrate from legacy systems with zero data loss. Integrate ERP, SAP, CRM, payment gateways, and logistics providers seamlessly.",
      },
    ],
  },
  productEngineering: {
    heroText:
      "We build the technical backbone of your digital product — from custom web applications and mobile platforms to high-concurrency backend systems that power millions of users.",
    subtitle:
      "Our engineers are experienced across the full stack, choosing the right technology for each layer of your system rather than forcing a one-size-fits-all approach.",
    capabilities: [
      {
        icon: "💻",
        title: "Full-Stack Development",
        description: "Full-stack development for web and mobile built with React, React Native, and modern JavaScript frameworks.",
      },
      {
        icon: "🔧",
        title: "Backend Systems",
        description: "NestJS, Golang, and PHP backends optimized for throughput, with Kafka and RabbitMQ for messaging.",
      },
      {
        icon: "☁️",
        title: "Cloud-Native DevOps",
        description: "Microservices on Kubernetes, full CI/CD pipelines, infrastructure as code, and auto-scaling configuration.",
      },
    ],
  },
  aiDriven: {
    heroText:
      "Applied AI is no longer a future investment — it's a competitive requirement. We integrate AI capabilities directly into your product: intelligent search, personalized recommendations, automated workflows, and conversational interfaces.",
    subtitle:
      "We work with both open-source and proprietary models, fine-tuning where necessary and building the retrieval infrastructure (RAG) that makes AI outputs reliable and relevant.",
    capabilities: [
      {
        icon: "🤖",
        title: "AI Agents & Workflow Automation",
        description: "Autonomous agents that handle complex multi-step processes, reducing manual work and operational costs.",
      },
      {
        icon: "🧠",
        title: "LLM & RAG Implementation",
        description: "Large language model integration with retrieval-augmented generation for accurate, context-aware AI responses.",
      },
      {
        icon: "🔍",
        title: "AI-Enhanced Search & Personalization",
        description: "Semantic search, visual search, and personalized content delivery powered by embedding models.",
      },
      {
        icon: "🎯",
        title: "Fine-tuned Open-Source Models",
        description: "Domain-specific fine-tuning of open-source LLMs for specialized tasks without vendor lock-in.",
      },
      {
        icon: "📊",
        title: "Recommendation Systems",
        description: "Collaborative filtering, content-based filtering, and hybrid recommendation engines for ecommerce and social.",
      },
    ],
  },
};

// ===== Capabilities =====

export const capabilities: Capability[] = [
  {
    icon: "👥",
    title: "Agile Squads",
    description: "2–20 engineers per team, scaling flexibly. We adapt quickly to changing requirements.",
  },
  {
    icon: "🛒",
    title: "Ecommerce & Social",
    description: "Deep expertise in commerce platforms and applied AI for social and matching applications.",
  },
  {
    icon: "📊",
    title: "Recommendation Systems",
    description: "Graph databases, collaborative filtering, and ML models that drive real user engagement.",
  },
  {
    icon: "⚡",
    title: "Real-time Infrastructure",
    description: "Messaging systems and high-concurrency backends built for millions of simultaneous users.",
  },
  {
    icon: "🏗️",
    title: "Scalable Architecture",
    description: "Kafka, Kubernetes, and microservices designed for unlimited horizontal growth.",
  },
  {
    icon: "☁️",
    title: "Cloud-Native",
    description: "AWS, GCP, OVH with Kubernetes-first deployments, IaC, and zero-downtime pipelines.",
  },
];

// ===== Technology Stack =====

export const techCategories: TechCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend & Mobile",
    description: "Modern frameworks for fast, responsive user interfaces.",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Vue.js" },
    ],
  },
  {
    id: "ecommerce-tech",
    number: "02",
    title: "Ecommerce Platforms",
    description: "Battle-tested commerce platforms for global scale.",
    items: [
      { name: "Magento" },
      { name: "Shopify" },
      { name: "Drupal Commerce" },
      { name: "WooCommerce" },
      { name: "Stripe" },
      { name: "PayPal" },
    ],
  },
  {
    id: "backend",
    number: "03",
    title: "Backend & Cloud",
    description: "Scalable infrastructure and backend systems.",
    items: [
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "Golang" },
      { name: "PHP / Laravel" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Kafka" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "AWS" },
      { name: "GCP" },
    ],
  },
  {
    id: "applied-ai",
    number: "04",
    title: "Applied AI",
    description: "Production-grade AI and ML tooling.",
    items: [
      { name: "OpenAI / GPT" },
      { name: "Claude / Anthropic" },
      { name: "LangChain" },
      { name: "Pinecone" },
      { name: "Elasticsearch" },
      { name: "Hugging Face" },
      { name: "Python / FastAPI" },
      { name: "TensorFlow" },
    ],
  },
];

export const techPrinciples: TechPrinciple[] = [
  {
    icon: "🎯",
    title: "Fit-for-Purpose",
    description: "We evaluate technology choices against your specific use case, scale requirements, and team capabilities.",
  },
  {
    icon: "🔓",
    title: "No Vendor Lock-in",
    description: "We favor open standards, open-source tools, and portable architectures.",
  },
  {
    icon: "👁️",
    title: "Observable & Maintainable",
    description: "Production systems are instrumented with logging, metrics, and tracing from day one.",
  },
  {
    icon: "🛡️",
    title: "Security First",
    description: "OWASP-compliant code, dependency auditing, secret management, and vulnerability scanning in CI/CD.",
  },
  {
    icon: "🏎️",
    title: "Performance by Design",
    description: "Database indexing, query optimization, caching strategy, and CDN configuration are core parts of delivery.",
  },
  {
    icon: "🤖",
    title: "AI-Augmented Delivery",
    description: "Our team uses AI-assisted coding, automated testing, and AI code review to deliver faster.",
  },
];

// ===== Trusted Brands =====

export const trustedBrands: Brand[] = [
  { name: "GLAMIRA" },
  { name: "MEKTOUKE" },
  { name: "ASTEK GROUP" },
  { name: "TOYOTA" },
];

// ===== Engagement Models =====

export const engagementModels: EngagementModel[] = [
  {
    title: "Project-Based Development",
    subtitle: "Ideal for defined product builds or upgrades",
    features: [
      "Fixed-scope delivery with clear deliverables",
      "Clear milestones & timelines upfront",
      "Dedicated project manager and lead engineer",
      "Regular progress reporting & demos",
      "Post-launch support period included",
    ],
  },
  {
    title: "Dedicated Engineering Team",
    subtitle: "Long-term collaboration model",
    features: [
      "Scalable agile squads — 2 to 20 engineers",
      "Seamless extension of your internal team",
      "Full transparency with your tools & processes",
      "Flexible team composition adjustments",
      "Long-term partnership commitment",
    ],
  },
];

// ===== Development Approaches =====

export const devApproaches = {
  traditional: {
    title: "Traditional Software Development",
    badge: "Proven",
    items: [
      "Agile methodologies",
      "Clear sprint planning & backlog management",
      "Peer code reviews",
      "Security & QA processes",
      "CI/CD & DevOps best practices",
      "Enterprise-grade documentation",
    ],
  },
  aiAugmented: {
    title: "AI-Augmented Development",
    badge: "AI-Enhanced",
    items: [
      "AI-assisted coding (e.g., Claude Code)",
      "Faster prototyping & iteration",
      "Automated test generation",
      "AI-supported code review & optimization",
      "AI-supported vulnerable code detection",
      "Optimization of AI-related cost and resource usage",
    ],
  },
};

// ===== AI Service Page =====

export const aiStats: AIStat[] = [
  { value: "2x", description: "Average output increase across automated workflows" },
  { value: "70%", description: "Reduction in cycle time with AI routing & classification" },
  { value: "90 days", description: "First measurable return from a single automated workflow" },
  { value: "24/7", description: "Autonomous operation — no sick days, no shift gaps" },
];

export const aiServices: AIService[] = [
  {
    icon: "💬",
    title: "AI Chatbot & Support Automation",
    description:
      "Your customers get instant, accurate answers — day or night, across every channel. The chatbot handles up to 70% of inbound queries autonomously, escalating only what needs a human.",
    features: [
      "Responds instantly across chat, WhatsApp, voice, and web widget",
      "Handles FAQs, order tracking, returns, and ticket creation",
      "Plugs into CRM, Zendesk, Freshdesk, and custom APIs",
      "Understands and replies in 30+ languages out of the box",
    ],
  },
  {
    icon: "📈",
    title: "AI Recommendation Engine",
    description:
      "Every visitor sees different products — ranked by what they're most likely to buy. The engine learns from clicks, purchases, and browsing patterns to improve continuously.",
    features: [
      "Personalized ranking for every user in real time (<100ms response)",
      "Combines collaborative filtering and content-based signals",
      "Built-in A/B testing so you can measure impact directly",
      "Proven in ecommerce, social, and content platforms at scale",
    ],
  },
  {
    icon: "🎙️",
    title: "Voice AI for High-Volume Environments",
    description:
      "A voice assistant that listens, understands, and responds — live, in any language. Built for environments where staff can't keep up with demand.",
    features: [
      "Real-time speech recognition with under 500ms response latency",
      "Pulls live data: flight status, gate changes, delays, wayfinding",
      "Operates 24/7 at kiosks, mobile apps, and web portals",
      "Handles 30+ languages with natural conversation flow",
    ],
  },
  {
    icon: "⚙️",
    title: "AI Workflow Automation",
    description:
      "Every email, ticket, or form submission is read, classified, and routed automatically — no human triage required. Processing time drops by 70% on day one.",
    features: [
      "Reads unstructured inputs and converts them to structured, assigned tasks",
      "Integrates with CRM, Notion, Jira, N8N, and custom backends",
      "Configurable approval gates and escalation rules",
      "Full audit trail — every action logged and reportable",
    ],
  },
];

export const aiProcessSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Audit & Prioritize",
    items: ["Map workflows & bottlenecks", "Rank automation opportunities", "ROI projection per use case"],
  },
  {
    number: "02",
    title: "Design the System",
    items: ["Define use cases & data flows", "Scope integration points", "Agree spec before code starts"],
  },
  {
    number: "03",
    title: "Build & Integrate",
    items: ["LLMs, RAG & APIs wired in", "Zero-downtime deployment", "Full documentation handover"],
  },
  {
    number: "04",
    title: "Measure & Scale",
    items: ["Track accuracy & cost savings", "Retrain on real usage data", "Expand to next use case"],
  },
];

export const aiPrinciples: AIPrinciple[] = [
  { icon: "🎯", title: "Outcome-first, not model-first", description: "We define the business goal — then work backwards to the right AI." },
  { icon: "🚀", title: "Live in weeks, not quarters", description: "First system ships in 3–6 weeks. Results fund the next phase." },
  { icon: "🔧", title: "Your stack stays intact", description: "AI layered on top of your CRM, ERP, and databases — nothing replaced." },
  { icon: "🎨", title: "Custom-built, not templated", description: "Trained on your data and workflows — not a generic off-the-shelf model." },
  { icon: "📈", title: "Engineered to run at scale", description: "Serving millions in production across e-commerce, enterprise, and SaaS." },
];

// ===== Contact Page =====

export const contactInfo = {
  email: "mail123@gmail.com",
  website: "opentechiz.com",
  markets: "Europe · Australia · United States",
  responseTime: "Within 1 business day",
};

export const contactSteps = [
  "We review your message and assign the right engineering expert for your domain.",
  "We schedule a 30-minute discovery call to understand your requirements in depth.",
  "We prepare a tailored technical proposal and engagement recommendation for your review.",
];
