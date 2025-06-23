const CreativeSupport = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Creative Support for Your Business</h2>
            <p className="text-gray-600 mb-6">
              We offer a wide range of creative services to help your business stand out. From UI/UX design to branding
              and marketing, we've got you covered.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>UI/UX Design</li>
              <li>Branding</li>
              <li>Marketing</li>
              <li>Content Creation</li>
            </ul>
          </div>
          <div>
            <img
              src="/images/ui-ux-design-agency.png"
              alt="UI/UX Design Agency - Modern interface design with floating elements"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreativeSupport
