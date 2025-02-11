const services = [
    {
      id: "01",
      title: "Automations",
      description: "We automate your workflows for highly profitable scale, custom and done-for-you.",
      icon: "https://cdn.prod.website-files.com/6489396f0421491be30aa786/648939700421491be30aa9dc_EFB6AC06-B22C-42F1-B402-CF24DEF2A34D.webp",
    },
    {
      id: "02",
      title: "Web Apps",
      description: "We build modern, secure and scalable web applications to simplify business processes for you.",
      icon: "https://cdn.prod.website-files.com/6489396f0421491be30aa786/648939700421491be30aa9df_02073CC0-207B-4079-9DA5-BBFDA837CE50.webp",
    },
    {
      id: "03",
      title: "Mobile Apps",
      description: "Our fast, responsive and highly scalable mobile app development will help you get ahead in no time!",
      icon: "https://cdn.prod.website-files.com/6489396f0421491be30aa786/648939700421491be30aa9de_048579A7-9748-4357-A675-BF76610495E7.webp",
    },
    {
      id: "04",
      title: "AI Solutions",
      description: "We build and deploy custom AI solutions that CEOs and founders brag about.",
      icon: "https://cdn.prod.website-files.com/6489396f0421491be30aa786/648939700421491be30aa9dd_D579D1FF-97FE-42E0-803A-33634CB722AD.webp",
    },
  ];
  
  const Services = () => {
    return (
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2">Our Services</h2>
          <p className="text-xl text-center mb-12">AI-driven digital acceleration</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-lg border-2 border-[#1d1d1d] bg-[url('https://cdn.prod.website-files.com/6489396f0421491be30aa786/648939700421491be30aa9da_noise.webp')] bg-[800px_800px] bg-repeat"
              >
                <div className="flex justify-center">
                  <img
                    src={service.icon || "/placeholder.svg"}
                    alt={`${service.title} icon`}
                    width={74}
                    height={74}
                    className="mb-4"
                  />
                </div>
                <div className="text-blue-400 mb-2">{service.id}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;