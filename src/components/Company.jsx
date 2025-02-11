import logo1 from "../assets/Company/claimcore-logo-revamp.png";
import logo2 from "../assets/Company/dobi.png";
import logo3 from "../assets/Company/jetclean.png";
import logo4 from "../assets/Company/manqoosh.png";
import logo5 from "../assets/Company/risros.png";

const Company = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-center text-lg font-medium mb-16">
          TRUSTED BY STARTUPS AND FORTUNE 500 COMPANIES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          <div className="flex items-center justify-center">
            <img
              src={logo1}
              alt="ClaimCore"
              className="object-contain brightness-0 invert h-8 md:h-16"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={logo2}
              alt="Dobi"
              className="object-contain brightness-0 invert h-13 md:h-16"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={logo3}
              alt="JetClean"
              className="object-contain brightness-0 invert h-12 md:h-16"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={logo4}
              alt="Manqoosh"
              className="object-contain brightness-0 invert h-12 md:h-16"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={logo5}
              alt="Risros"
              className="object-contain brightness-0 invert h-12 md:h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
