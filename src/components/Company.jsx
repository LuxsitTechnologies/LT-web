const Company = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-center text-2xl md:text-3xl font-bold mb-12 uppercase tracking-wide">
          Trusted by Top Companies, Proven by Success.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center pt-6">
          <div className="flex items-center justify-center">
            <img
              src="/Company/claimcore-logo-revamp.png"
              alt="ClaimCore Logo"
              className="object-contain h-14 md:h-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/Company/dobi.png"
              alt="Dobi Logo"
              className="object-contain h-14 md:h-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/Company/jetclean.png"
              alt="JetClean Logo"
              className="object-contain h-14 md:h-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/Company/manqoosh.png"
              alt="Manqoosh Logo"
              className="object-contain h-14 md:h-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/Company/risros.png"
              alt="Risros Logo"
              className="object-contain h-14 md:h-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/Company/nordic-logo.webp"
              alt="Nordic Logo"
              className="object-contain h-14 md:h-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/Company/get xm.png"
              alt="GET XM"
              className="object-contain h-14 md:h-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/Company/logo.png"
              alt="Pixel Tech "
              className="object-contain h-14 md:h-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Company;