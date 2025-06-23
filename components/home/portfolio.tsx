import { HealthcareShowcase } from "@/components/portfolio/healthcare-showcase"

const portfolioItems = [
  {
    title: "MediCio",
    description: "A comprehensive platform for managing patient records and appointments.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
    link: "#",
  },
  {
    title: "Health Cart E-commerce",
    description: "An e-commerce platform specializing in health and wellness products.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
    link: "#",
  },
  {
    title: "Health Cart Platform",
    description: "A platform connecting healthcare providers with patients.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center",
    link: "#",
  },
  {
    title: "Fitness Tracker App",
    description: "A mobile app for tracking fitness activities and health metrics.",
    image: "https://images.unsplash.com/photo-1518611012114-b69039ce5e91?w=800&h=600&fit=crop&crop=center",
    link: "#",
  },
  {
    title: "Mental Wellness Platform",
    description: "A platform providing resources and support for mental wellness.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&crop=center",
    link: "#",
  },
  {
    title: "Nutrition App",
    description: "A mobile app for tracking nutrition and meal planning.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&crop=center",
    link: "#",
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <a href={item.link} className="mt-4 inline-block text-blue-500 hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Healthcare Projects Showcase */}
        <div className="mt-16">
          <HealthcareShowcase />
        </div>

        <div className="text-center mt-12">
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
