import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Building2, Home } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="https://pbs.twimg.com/media/GpaQJvnbIAAZXQc?format=jpg&name=small"
                alt="PanEura Automations Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-xl font-bold">PanEura Automations</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We help small businesses scale big, generate revenue, provide online recognition and identity through
              intelligent digital infrastructure and automation solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://x.com/PaneuraAutomat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://www.reddit.com/user/Individual_Set5597/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Reddit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="2" />
                  <path d="M18.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M5.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M20 8a14.5 14.5 0 0 0-7-1.5A14.5 14.5 0 0 0 4 8" />
                  <path d="M15 13v6a3 3 0 0 1-6 0v-6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground transition-colors hover:text-primary">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Custom CRM Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  AI-Powered Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Business Analytics
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Get In Touch</h3>
            
            {/* Email Addresses */}
            <div className="mb-4">
              <h4 className="mb-2 text-sm font-medium text-foreground">Email</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Mail className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <a 
                    href="mailto:solutions@paneura.site"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    solutions@paneura.site
                  </a>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <a 
                    href="mailto:paneura.automations247@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    paneura.automations247@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <a 
                    href="mailto:paneura.automations@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    paneura.automations@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Phone Numbers */}
            <div className="mb-4">
              <h4 className="mb-2 text-sm font-medium text-foreground">Phone</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+917456886877"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-7456886877
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+919672538062"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-9672538062
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+919537253552"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-9537253552
                  </a>
                </li>
              </ul>
            </div>

            {/* Addresses */}
            <div>
              <h4 className="mb-2 text-sm font-medium text-foreground">Locations</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <Building2 className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-medium text-foreground mb-1">Office</div>
                    <span className="text-muted-foreground">
                      Sector 16, OffizSquare, Noida, U.P., India
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Home className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-medium text-foreground mb-1">Operations</div>
                    <span className="text-muted-foreground">
                      Sector 66, SKY HOMES, Noida, Uttar Pradesh, India
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} PanEura Automations. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
