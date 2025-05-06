import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import ServiceCard from "@/components/services/service-card"
import FramerShowcase from "@/components/services/framer-showcase"

export default function ServicesPage() {
  const services = [
    {
      title: "Website & Web App Development",
      subtitle: "Build Fast. Convert Faster.",
      description:
        "We craft lightning-fast websites and progressive web apps tailored to maximize lead generation, user engagement, and real-time automation.",
      icon: "Globe",
      features: [
        "Responsive design for all devices",
        "SEO optimization",
        "Performance-focused development",
        "Lead generation optimization",
        "Real-time data integration",
      ],
    },
    {
      title: "Custom CRM Solutions",
      subtitle: "Your Sales, Streamlined.",
      description:
        "End-to-end CRM platforms with pipeline tracking, client lifecycle automation, real-time analytics, and AI-enhanced sales forecasting — fully customizable.",
      icon: "Briefcase",
      features: [
        "Pipeline tracking and management",
        "Client lifecycle automation",
        "Real-time analytics dashboard",
        "AI-enhanced sales forecasting",
        "Integration with existing tools",
      ],
    },
    {
      title: "AI-Powered Business Automation",
      subtitle: "Eliminate Repetition. Unlock Growth.",
      description:
        "Automate internal workflows, client onboarding, report generation, and repetitive logic with intelligent AI agents and low-code automation frameworks.",
      icon: "Bot",
      features: [
        "Workflow automation",
        "Client onboarding systems",
        "Automated report generation",
        "Low-code automation frameworks",
        "AI agent integration",
      ],
    },
    {
      title: "Document Intelligence Systems",
      subtitle: "Read. Understand. Automate.",
      description:
        "Turn unstructured data (PDFs, Word docs, scanned images) into structured, actionable insights using NLP + OCR + LLM tech. Zero human effort.",
      icon: "FileText",
      features: [
        "OCR for document scanning",
        "NLP for text understanding",
        "LLM for content analysis",
        "Automated data extraction",
        "Document classification",
      ],
    },
    {
      title: "Email Marketing Automation",
      subtitle: "Smarter Emails. Better ROI.",
      description:
        "Behavior-triggered email flows, follow-up sequences, newsletters, and integration with CRMs — all controlled by drag-and-drop logic and AI prompts.",
      icon: "Mail",
      features: [
        "Behavior-triggered email flows",
        "Automated follow-up sequences",
        "Newsletter management",
        "CRM integration",
        "Performance analytics",
      ],
    },
    {
      title: "E-Commerce Automation Infrastructure",
      subtitle: "Scale Orders Without Scaling Chaos.",
      description:
        "Manage inventory, orders, vendors, and customer experience with AI-backed dashboards and APIs for Shopify, WooCommerce, and custom stacks.",
      icon: "ShoppingCart",
      features: [
        "Inventory management",
        "Order processing automation",
        "Vendor relationship management",
        "Customer experience optimization",
        "Multi-platform integration",
      ],
    },
    {
      title: "E-Sign & Contract Automation",
      subtitle: "Paperwork Meets AI.",
      description:
        "Generate, manage, and track e-contracts and legal documents using pre-trained models, templates, and smart versioning tools.",
      icon: "FileSignature",
      features: [
        "E-signature integration",
        "Contract generation",
        "Document tracking",
        "Template management",
        "Version control",
      ],
    },
    {
      title: "Client Portals & Dashboards",
      subtitle: "Let Your Customers Self-Serve.",
      description:
        "Custom-built dashboards for your users to view transactions, generate reports, raise support tickets, and access resources 24/7.",
      icon: "LayoutDashboard",
      features: [
        "Custom dashboard development",
        "Transaction viewing",
        "Report generation",
        "Support ticket system",
        "Resource access management",
      ],
    },
    {
      title: "Security & Compliance AI",
      subtitle: "Detect Threats Before They Become Incidents.",
      description:
        "Automated GDPR/ISO27001 checks, vulnerability detection, and activity heatmaps using behavioral AI and encrypted storage practices.",
      icon: "Shield",
      features: [
        "GDPR compliance automation",
        "ISO27001 compliance checks",
        "Vulnerability detection",
        "Activity monitoring",
        "Encrypted storage solutions",
      ],
    },
    {
      title: "Real-Time Business Analytics",
      subtitle: "Insight That Moves With You.",
      description:
        "Custom BI dashboards powered by your live data: visualized, summarized, and auto-shared across teams using Slack/Teams integrations.",
      icon: "BarChart",
      features: [
        "Custom BI dashboard development",
        "Real-time data visualization",
        "Automated reporting",
        "Team collaboration tools",
        "Integration with communication platforms",
      ],
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Comprehensive automation solutions to help your business scale efficiently
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      {/* Add Framer Showcase section */}
      <div className="mt-24">
        <FramerShowcase />
      </div>

      <div className="mt-20">
        <h2 className="mb-10 text-center text-3xl font-bold">Why Choose PanEura Automations?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our team brings years of experience in automation, AI integration, and digital transformation across
                various industries.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Specialized technical knowledge</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Industry-specific solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Proven track record</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We don't believe in one-size-fits-all solutions. Every service we provide is tailored to your specific
                business needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Personalized approach</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Scalable solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Adaptable to changing needs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our relationship doesn't end with implementation. We provide ongoing support to ensure your systems run
                smoothly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Responsive technical support</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Regular updates and maintenance</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>Training and knowledge transfer</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
