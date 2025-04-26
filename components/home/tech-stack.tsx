"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TechLogo } from "@/components/ui/tech-logo"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const techLogos = [
    { name: "HTML5", url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS3", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "JavaScript", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", url: "https://nodejs.org/static/images/logo.svg" },
    { name: "Python", url: "https://www.python.org/static/community_logos/python-logo.png" },
    { name: "Django", url: "https://www.djangoproject.com/m/img/logos/django-logo-positive.png" },
    { name: "Flask", url: "https://flask.palletsprojects.com/en/stable/_static/flask-horizontal.png" },
    { name: "Angular", url: "https://angular.io/assets/images/logos/angular/angular.svg" },
    { name: "Vue.js", url: "https://vuejs.org/images/logo.png" },
    { name: "TypeScript", url: "https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" },
    { name: "MongoDB", url: "https://www.mongodb.com/assets/images/global/favicon.ico" },
    { name: "MySQL", url: "https://www.mysql.com/common/logos/mysql-logo.svg" },
    { name: "PostgreSQL", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { name: "Git", url: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
    { name: "Docker", url: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" },
    { name: "AWS", url: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" },
    { name: "Firebase", url: "https://firebase.google.com/images/brand-guidelines/logo-standard.png" },
    { name: "GraphQL", url: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" },
    { name: "Tailwind CSS", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Next.js", url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "Express.js", url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
    { name: "Redux", url: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" },
    { name: "Sass", url: "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" },
    { name: "Bootstrap", url: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" },
    { name: "Vite", url: "https://vitejs.dev/logo.svg" },
    { name: "Material UI", url: "https://mui.com/static/logo.png" },
    { name: "GraphQL Yoga", url: "https://avatars.githubusercontent.com/u/13142323?s=200&v=4" },
    { name: "AWS Amplify", url: "https://docs.amplify.aws/assets/logo-dark.svg" },
    { name: "Prisma", url: "https://avatars.githubusercontent.com/u/17219288?s=200&v=4" },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 py-16 md:py-24">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.05),transparent_50%)]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Technology Stack</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            We leverage cutting-edge technologies to build robust, scalable, and efficient solutions for our clients.
          </p>
        </ScrollReveal>

        <div ref={ref} className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {techLogos.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <TechLogo name={tech.name} imageUrl={tech.url} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
