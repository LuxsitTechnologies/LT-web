import logo1 from "../assets/Company/claimcore-logo-revamp.png";
import logo2 from "../assets/Company/dobi.png";
import logo3 from "../assets/Company/jetclean.png";
import logo4 from "../assets/Company/manqoosh.png";
import logo5 from "../assets/Company/risros.png";

const Company = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-center text-2xl md:text-3xl font-bold mb-12 uppercase tracking-wide">
        Trusted by Top Companies, Proven by Success.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center pt-6">
          {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Company Logo ${index + 1}`}
                className="object-contain h-14 md:h-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;
