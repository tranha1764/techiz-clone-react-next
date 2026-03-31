export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  results: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "glamira-ecommerce",
    title: "Global Multi-Country Jewelry Commerce Platform",
    client: "GLAMIRA",
    category: "Ecommerce",
    description:
      "Rebuilt the entire ecommerce infrastructure to support 30+ country storefronts with localized pricing, currencies, and checkout flows.",
    challenge:
      "The existing Magento monolith couldn't handle flash sale traffic spikes of 50,000+ concurrent users, and adding new countries required weeks of manual configuration.",
    solution:
      "Migrated to a headless architecture with Next.js frontend and Magento 2 backend via GraphQL. Implemented auto-scaling infrastructure on AWS with Redis caching and CDN-first asset delivery.",
    techStack: ["Magento 2", "Next.js", "GraphQL", "AWS", "Redis", "Elasticsearch"],
    results: [
      "Page load time reduced from 4.2s to 1.1s",
      "99.9% uptime during peak sales events",
      "New country launch time reduced from 3 weeks to 2 days",
      "35% increase in mobile conversion rate",
    ],
  },
  {
    id: "mektouke-social",
    title: "AI-Powered Social Matching Platform",
    client: "MEKTOUKE",
    category: "Social",
    description:
      "Built a real-time social platform with AI-driven matching, supporting millions of users across multiple regions with sub-second message delivery.",
    challenge:
      "The client needed a matching algorithm that went beyond simple filters — it had to learn from user behavior and improve over time, while handling 500K+ daily active users.",
    solution:
      "Designed a hybrid recommendation engine combining collaborative filtering with content-based signals. Built on a microservices architecture with Kafka for event streaming and WebSocket gateways for real-time messaging.",
    techStack: ["React Native", "Node.js", "Kafka", "Redis", "PostgreSQL", "Python", "TensorFlow"],
    results: [
      "Match quality score improved by 45%",
      "Message delivery latency under 200ms at peak load",
      "500K+ DAU with 99.95% uptime",
      "User engagement increased 60% quarter-over-quarter",
    ],
  },
  {
    id: "astek-ai-automation",
    title: "Enterprise Workflow Automation with AI Agents",
    client: "ASTEK GROUP",
    category: "AI",
    description:
      "Deployed AI-powered workflow automation across the organization's project management, HR ticketing, and client onboarding processes.",
    challenge:
      "Manual processing of 2,000+ weekly tickets, emails, and form submissions was consuming 40% of operations staff time with frequent misrouting and delays.",
    solution:
      "Built an AI agent system using LLMs with RAG for context-aware classification and routing. Integrated with Jira, Notion, and their internal CRM. Added configurable approval gates for sensitive actions.",
    techStack: ["Python", "FastAPI", "LangChain", "OpenAI GPT-4", "Pinecone", "N8N", "PostgreSQL"],
    results: [
      "Processing time reduced by 72%",
      "Ticket misrouting dropped from 23% to 3%",
      "Operations team capacity freed up by 35%",
      "ROI achieved within 60 days of deployment",
    ],
  },
  {
    id: "toyota-voice-ai",
    title: "Multilingual Voice AI for Customer Service",
    client: "TOYOTA",
    category: "AI",
    description:
      "Developed a multilingual voice assistant for dealer service centers, handling appointment scheduling, service inquiries, and parts availability in real-time.",
    challenge:
      "Service centers received 3,000+ calls daily across 5 languages, with 40% of calls being routine inquiries that consumed technician time.",
    solution:
      "Built a Voice AI system with real-time speech recognition, natural language understanding, and integration with the dealer management system. The voice agent handles routine queries and schedules appointments autonomously.",
    techStack: ["Python", "FastAPI", "Whisper", "GPT-4", "Twilio", "Redis", "PostgreSQL"],
    results: [
      "60% reduction in routine call volume to human agents",
      "Average call handling time reduced from 4 minutes to 45 seconds",
      "Supports 5 languages with 95% intent recognition accuracy",
      "24/7 availability including holidays and off-hours",
    ],
  },
  {
    id: "saas-analytics-platform",
    title: "Real-Time SaaS Analytics Dashboard",
    client: "Confidential",
    category: "SaaS",
    description:
      "Built a real-time analytics platform processing 10M+ events per day with live dashboards, custom reports, and anomaly detection for a B2B SaaS company.",
    challenge:
      "The client's existing analytics relied on batch processing with 24-hour reporting delays, making it impossible to react to trends or issues in real-time.",
    solution:
      "Architected a streaming analytics pipeline with Kafka for ingestion, ClickHouse for real-time OLAP queries, and a Next.js dashboard with Server-Sent Events for live updates.",
    techStack: ["Next.js", "TypeScript", "Kafka", "ClickHouse", "Kubernetes", "Grafana", "Go"],
    results: [
      "Reporting latency reduced from 24 hours to under 5 seconds",
      "Handles 10M+ events/day with horizontal auto-scaling",
      "Custom dashboard load time under 800ms",
      "Anomaly detection catches issues 95% faster than manual monitoring",
    ],
  },
];

// ===== Helper Functions =====

export function getAllPortfolioItems(): PortfolioItem[] {
  return portfolioItems;
}

export function getPortfolioByCategory(category: string): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}

export function getAllPortfolioCategories(): string[] {
  return [...new Set(portfolioItems.map((item) => item.category))];
}
