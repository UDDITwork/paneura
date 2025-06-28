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
                src="/paneuralogo.png"
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
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/paneura-automations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* Twitter/X */}
              <a
                href="https://x.com/PaneuraAutomat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/paneura1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* Reddit */}
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
                  fill="currentColor"
                >
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
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
