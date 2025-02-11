// data array containing card information
const Visiondata = [
  {
    title: "Build Your Team",
    description: "Hire a dedicated developer or build the whole dream team to work exclusively on your project.",
    image: {
      src: "https://cdn.prod.website-files.com/6489396f0421491be30aa786/648bf7ac5ba5eec896d7b77b_Tech%20team%20txlabz.png",
      alt: "Team working together on laptops",
    },
    button: {
      text: "Build my team",
      action: "build-team",
    },
  },
  {
    title: "Project Based Work",
    description:
      "Reduce your time-to-market with our fully-managed and cost-efficient project delivery for a new MVP or existing product update.",
    image: {
      src: "https://cdn.prod.website-files.com/6489396f0421491be30aa786/648bfa9155e9a75ff815fb5d_Fixed%20price%20project%20txlabz.png",
      alt: "Laptop showing code",
    },
    button: {
      text: "Develop my project",
      action: "develop-project",
    },
  },
]

// Card component for individual cards
function VisionCard({ card }) {
  return (
    <div className="relative group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-blue-400">
      <div className="aspect-[4/3] mb-6 overflow-hidden rounded-lg">
        <img src={card.image.src || "/placeholder.svg"} alt={card.image.alt} className="object-cover w-full h-full" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-3">{card.title}</h2>
      <p className="text-zinc-400 mb-6">{card.description}</p>
      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300"
        onClick={() => console.log(`Clicked: ${card.button.action}`)}
      >
        {card.button.text} <span className="ml-2">→</span>
      </button>
    </div>
  )
}

// Main component
export default function Vision() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">What suits your vision?</h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl w-full">
        {Visiondata.map((card, index) => (
          <VisionCard key={index} card={card} />
        ))}
      </div>
    </div>
  )
}

