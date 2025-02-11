import StarRating from "./StarRating"

const testimonials = [
  {
    id: 1,
    author: {
      name: "Sarah Mitchell",
      title: "Founder, TechCorp",
      image: "/placeholder.svg?height=64&width=64",
    },
    company: {
      name: "TechCorp",
      logo: "/placeholder.svg?height=32&width=100",
    },
    content:
      "Their team provides great design and has a great sense of user experience and aesthetics. They deliver on time and are excellent communicators.",
    rating: 3.5,
  },
  {
    id: 2,
    author: {
      name: "Michael Chen",
      title: "Co-founder, InnovateLabs",
      image: "/placeholder.svg?height=64&width=64",
    },
    company: {
      name: "InnovateLabs",
      logo: "/placeholder.svg?height=32&width=100",
    },
    content:
      "Amazing developers with an eye for aesthetics. We had pretty vigorous requests and they hit every single one.",
    rating: 4,
  },
  {
    id: 3,
    author: {
      name: "Emma Thompson",
      title: "Medical Director, HealthTech",
      image: "/placeholder.svg?height=64&width=64",
    },
    company: {
      name: "HealthTech",
      logo: "/placeholder.svg?height=32&width=100",
    },
    content:
      "They exceeded our expectations. Super easy to work with their engineering team, incredibly intelligent, and perceptive.",
    rating: 3.5,
  },
  {
    id: 4,
    author: {
      name: "David Wilson",
      title: "Co-founder, CloudSys",
      image: "/placeholder.svg?height=64&width=64",
    },
    company: {
      name: "CloudSys",
      logo: "/placeholder.svg?height=32&width=100",
    },
    content:
      "Working with them has been great! We've been working together for over 2 years now and the experience is just out of this planet.",
    rating: 5,
  },
  {
    id: 5,
    author: {
      name: "Rachel Adams",
      title: "Managing Director, DataFlow",
      image: "/placeholder.svg?height=64&width=64",
    },
    company: {
      name: "DataFlow",
      logo: "/placeholder.svg?height=32&width=100",
    },
    content:
      "They are clearly the best dev agency I have worked with. The project went smoothly, and we're happy with the outcome!",
    rating: 4.5,
  },
  {
    id: 6,
    author: {
      name: "James Lee",
      title: "Co-Founder, TechVision",
      image: "/placeholder.svg?height=64&width=64",
    },
    company: {
      name: "TechVision",
      logo: "/placeholder.svg?height=32&width=100",
    },
    content:
      "Excellent development services! I recently had the pleasure of working with them on a fintech project, and I am thoroughly impressed.",
    rating: 2.5,
  },
  {
    id: 7,
    author: {
      name: "Anna Martinez",
      title: "Principal Product Designer",
      image: "/placeholder.svg?height=64&width=64",
    },
    company: {
      name: "DesignCo",
      logo: "/placeholder.svg?height=32&width=100",
    },
    content:
      "It doesn't feel like an external team, it feels like we're just working together. One team with one goal. Super happy!",
    rating: 5,
  },
  {
    id: 8,
    author: {
      name: "Robert Kim",
      title: "Founder, WebAgency",
      image: "/placeholder.svg?height=64&width=64",
    },
    company: {
      name: "WebAgency",
      logo: "/placeholder.svg?height=32&width=100",
    },
    content: "They have an incredible remote culture. It really makes working together easy and efficient.",
    rating: 4,
  },
]

const Testimonials = () => {
  return (
    <div className="bg-black px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Dont take our words for it</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center text-center">
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 text-gray-300">{testimonial.content}</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={testimonial.author.image || "/placeholder.svg"} alt="" className="h-12 w-12 rounded-full" />
                <div className="text-left">
                  <div className="font-semibold text-white">{testimonial.author.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.author.title}</div>
                </div>
                <img
                  src={testimonial.company.logo || "/placeholder.svg"}
                  alt={testimonial.company.name}
                  className="ml-auto h-8"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials

