import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import NeuralNetworkAnimation from "@/components/about/neural-network-animation"

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 min-h-screen">
      {/* Hero Section with Neural Network Animation */}
      <section className="relative h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <NeuralNetworkAnimation />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl text-slate-900 dark:text-white">
              We're{" "}
              <span className="text-primary relative">
                PanEura
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/70 rounded-full"></span>
              </span>
            </h1>
            <p className="mx-auto text-xl md:text-2xl font-light mb-8 text-slate-700 dark:text-slate-300">
              Bridging small businesses to the digital future
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-medium">
                10,000+ Businesses Empowered
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-medium">
                92% Client Growth Rate
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-medium">
                Digital-First Approach
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900 dark:to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 border-2 border-primary rounded-lg transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10 rounded-lg transform -rotate-3"></div>
              <Image
                src="https://pbs.twimg.com/media/GpazjCUbEAA78LX?format=jpg&name=4096x4096"
                alt="PanEura "
                width={500}
                height={500}
                className="rounded-lg relative z-10 object-cover shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full"></div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center text-slate-900 dark:text-white">
              <span className="w-12 h-1 bg-primary mr-4"></span>
              Our Origin Story
            </h2>
            <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
              PanEura began in 2018 when our founders witnessed countless small businesses struggling to navigate the
              digital landscape. Working from a small apartment with three passionate developers, we created our first
              automation solution for a local bakery that helped them manage online orders during the pandemic.
            </p>
            <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
              That single solution saved the bakery from closing its doors and sparked our mission: to democratize
              digital technology for businesses of all sizes. What started as a small project has now evolved into a
              company that has transformed thousands of MSMEs across the country.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-slate-600 dark:text-slate-400">
              "Every business deserves the tools to thrive in the digital age. Technology shouldn't be a luxury, but a
              pathway to growth."
              <footer className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-500">— Core Belief</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission & Impact Section */}
      <section className="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/20 dark:to-primary/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Our Mission in Action</h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300">
              Every day, we witness the transformative power of digital adoption. Here are the stories that drive us
              forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "A Small Farm's Global Reach",
                content:
                  "We helped an organic farm cooperative build an e-commerce platform that connected them directly to international markets, increasing their revenue by 340% in just 18 months.",
              },
              {
                icon: "🛠️",
                title: "The Artisan Revolution",
                content:
                  "A collective of traditional artisans was losing business to mass production. Our digital marketplace solution helped them showcase their craftsmanship to the world, preserving cultural heritage while boosting livelihoods.",
              },
              {
                icon: "📚",
                title: "Education Without Borders",
                content:
                  "A rural tutoring service transformed into a digital learning platform with our help, now reaching students in 12 countries and employing three times the number of local teachers.",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="p-1 bg-gradient-to-r from-primary/70 to-primary"></div>
                <div className="p-8">
                  <div className="text-4xl mb-4">{story.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">{story.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{story.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Interactive Cards */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-medium text-sm mb-4">
            OUR CORE VALUES
          </span>
          <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">What Drives Us Every Day</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300">
            These principles guide every solution we create and every relationship we build.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "People-First Innovation",
              content:
                "We don't create technology for technology's sake. Every innovation we develop starts with understanding the human needs behind business challenges.",
              color: "from-blue-500/20 to-blue-600/20",
              icon: "👥",
            },
            {
              title: "Accessible Excellence",
              content:
                "We believe that world-class digital solutions should be accessible to businesses of all sizes. Sophistication doesn't have to mean complexity or high costs.",
              color: "from-green-500/20 to-green-600/20",
              icon: "🌟",
            },
            {
              title: "Growth Partnership",
              content:
                "Your success is our success. We don't just deliver solutions—we become growth partners invested in your long-term prosperity and digital evolution.",
              color: "from-amber-500/20 to-amber-600/20",
              icon: "🤝",
            },
            {
              title: "Cultural Sensitivity",
              content:
                "We understand that businesses operate within unique cultural contexts. Our solutions respect and adapt to diverse business environments.",
              color: "from-purple-500/20 to-purple-600/20",
              icon: "🌍",
            },
            {
              title: "Sustainable Digitalization",
              content:
                "We create digital solutions that not only drive growth today but establish sustainable foundations for future technological advancement.",
              color: "from-teal-500/20 to-teal-600/20",
              icon: "♻️",
            },
            {
              title: "Learning Ecosystem",
              content:
                "We build solutions that grow smarter with your business, creating ecosystems of continuous improvement and adaptation.",
              color: "from-rose-500/20 to-rose-600/20",
              icon: "🧠",
            },
          ].map((value, index) => (
            <div key={index} className="group">
              <Card className="h-full border-none shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-slate-800">
                <div className={`h-2 w-full bg-gradient-to-r ${value.color}`}></div>
                <CardContent className="p-8">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{value.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{value.content}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-4">
              OUR METHODOLOGY
            </span>
            <h2 className="text-4xl font-bold mb-6 text-white">How We Transform Businesses</h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-300">
              Our proven four-step approach has helped thousands of businesses make the digital leap with confidence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Deep Discovery",
                content:
                  "We immerse ourselves in your business reality—understanding your operations, challenges, customers, and aspirations beyond surface level.",
              },
              {
                number: "02",
                title: "Strategic Design",
                content:
                  "We craft digital solutions that address both your immediate pain points and long-term growth objectives, creating a roadmap for transformation.",
              },
              {
                number: "03",
                title: "Agile Implementation",
                content:
                  "We build and deploy solutions in stages, allowing for real-world testing, feedback integration, and quick adaptation to changing needs.",
              },
              {
                number: "04",
                title: "Growth Acceleration",
                content:
                  "We continuously optimize your digital assets, measure outcomes against business goals, and identify new opportunities for digital leverage.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="border border-white/10 dark:border-primary/30 rounded-xl p-8 h-full bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
                  <span className="text-5xl font-bold text-primary/70 mb-6 block">{step.number}</span>
                  <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                  <p className="text-slate-300">{step.content}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6H38M38 6L33 1M38 6L33 11" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Impact Map */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Our Digital Footprint</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300">
            From rural handicraft producers to urban service providers, we've helped businesses across diverse sectors
            embrace digital transformation.
          </p>
        </div>

        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-slate-200/50 dark:bg-slate-700/50 z-10 flex items-center justify-center">
            <div className="text-center p-8 bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-lg max-w-lg">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Impact By The Numbers</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <p className="text-4xl font-bold text-primary">10,000+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Businesses Transformed</p>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <p className="text-4xl font-bold text-primary">25+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Industries Served</p>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <p className="text-4xl font-bold text-primary">78%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Average Revenue Growth</p>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <p className="text-4xl font-bold text-primary">13M+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Lives Positively Impacted</p>
                </div>
              </div>
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Read Success Stories
              </button>
            </div>
          </div>
          <Image
            src="https://pbs.twimg.com/media/Gpa1YarXkAAZSHR?format=jpg&name=large"
            alt="PanEura Global Impact Map"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent dark:from-primary/30 dark:via-primary/20 dark:to-slate-900/50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Ready to Join the Digital Revolution?
              </h2>
              <p className="text-lg mb-8 text-slate-700 dark:text-slate-300">
                Whether you're taking your first digital steps or looking to scale your existing online presence, we're
                here to guide your journey. Let's write your digital success story together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
                  Start Your Digital Journey
                </button>
                <button className="px-8 py-4 bg-white dark:bg-slate-800 text-primary border border-primary rounded-lg font-medium hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                  Explore Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Glimpse */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">The Minds Behind PanEura</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300">
            A diverse team of technologists, designers, and business strategists united by the mission to democratize
            digital transformation.
          </p>
        </div>

        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl group">
          <Image
            src="https://pbs.twimg.com/media/Gpa30iHXMAERssD?format=jpg&name=large"
            alt="PanEura Team"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end">
            <div className="p-8 text-white">
              <p className="text-xl font-medium mb-2">Join Our Team</p>
              <p className="max-w-md">
                We're always looking for passionate individuals who believe in the power of technology to transform
                businesses and communities.
              </p>
              <button className="mt-4 px-6 py-2 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors">
                View Careers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation Journey */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
            Your Digital Transformation Journey
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300">
            See how businesses like yours have evolved with our guidance
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-primary/20 dark:bg-primary/40 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-24">
            {[
              {
                stage: "Starting Point",
                title: "Traditional Business Challenges",
                description:
                  "Limited customer reach, manual processes draining resources, competition from digital natives threatening market share.",
                result: "Businesses feeling left behind in the digital revolution",
                icon: "🏪",
              },
              {
                stage: "Transformation",
                title: "Digital Infrastructure Development",
                description:
                  "Building customized digital solutions, automating core processes, establishing online presence, training team members.",
                result: "Businesses operating with newfound efficiency and reach",
                icon: "⚙️",
              },
              {
                stage: "Growth",
                title: "Market Expansion & Optimization",
                description:
                  "Leveraging data insights, refining digital strategy, expanding to new markets, innovating product offerings.",
                result: "Businesses experiencing exponential growth and recognition",
                icon: "📈",
              },
              {
                stage: "Leadership",
                title: "Digital Innovation Leaders",
                description:
                  "Setting industry standards, pioneering new approaches, mentoring other businesses, continuous evolution.",
                result: "Businesses leading their industries into the future",
                icon: "🏆",
              },
            ].map((journey, index) => (
              <div key={index} className="relative md:grid md:grid-cols-2 gap-8 items-center">
                <div
                  className={`bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg ${index % 2 === 1 ? "md:col-start-2" : ""}`}
                >
                  <span className="inline-block mb-3 text-4xl">{journey.icon}</span>
                  <h3 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">{journey.stage}</h3>
                  <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{journey.title}</h4>
                  <p className="mb-4 text-slate-600 dark:text-slate-400">{journey.description}</p>
                  <div className="px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary font-medium inline-block">
                    {journey.result}
                  </div>
                </div>

                <div className="hidden md:block absolute left-1/2 top-1/2 w-12 h-12 bg-primary text-white rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary/5 dark:bg-primary/15 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-medium text-sm mb-4">
              SUCCESS STORIES
            </span>
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Voices of Transformation</h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300">
              Hear directly from the entrepreneurs whose businesses evolved with our support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Amit Verma"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Amit Verma</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">March 12, 2023</p>
                </div>
              </div>
              <blockquote className="italic text-slate-700 dark:text-slate-300">
                "I was skeptical about going digital - my family business had operated the same way for 40 years. Now I
                can't imagine how we survived without these tools. Our customer base has tripled!"
              </blockquote>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
                    alt="Priya Mehta"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Priya Mehta</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">CEO, Cosmos IP</p>
                </div>
              </div>
              <blockquote className="italic text-slate-700 dark:text-slate-300">
                "PanEura's IP management system revolutionized how we handle patent applications. The AI-powered
                analytics have helped us identify valuable opportunities we would have otherwise missed. Our efficiency
                has improved by 65% since implementation."
              </blockquote>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop&crop=face"
                    alt="Rajiv Kapoor"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Rajiv Kapoor</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">CTO, KIPPS</p>
                </div>
              </div>
              <blockquote className="italic text-slate-700 dark:text-slate-300">
                "The custom automation solution PanEura built for our manufacturing processes has cut production time by
                40%. Their team's deep understanding of both technology and business operations made the transition
                seamless. We're now expanding to three new markets thanks to the increased capacity."
              </blockquote>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Read More Stories
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
