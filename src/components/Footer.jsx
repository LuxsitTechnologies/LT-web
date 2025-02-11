const Footer = () => {
    return (
      <footer className="bg-black text-white py-16 relative">
        {/* Content Container with higher z-index */}
        <div className="container mx-auto px-4 relative z-10 text-[0.9375rem]">
          {/* Main Footer Links */}
          <div className="flex justify-items-start  md:justify-end">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 w-[50%]">
              {/* Services Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-6">Services</h3>
                <div className="space-y-3 text-gray-400">
                  <p>UX/UI Design</p>
                  <p>MVP Development</p>
                  <p>Web Development</p>
                  <p>Mobile Development</p>
                  <p>Custom Software</p>
                </div>
              </div>
  
              {/* Technologies Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-6">Technologies</h3>
                <div className="space-y-3 text-gray-400">
                  <p>React</p>
                  <p>Laravel</p>
                  <p>Flutter</p>
                  <p>Python</p>
                  <p>.NET</p>
                  <p>AI/ML</p>
                </div>
              </div>
  
              {/* Resources Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-6">Resources</h3>
                <div className="space-y-3 text-gray-400">
                  <p>YouTube</p>
                  <p>Affiliates</p>
                </div>
              </div>
  
              {/* Company Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-6">Company</h3>
                <div className="space-y-3 text-gray-400">
                  <p>Case Studies</p>
                  <p>Portfolio</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Offices Section */}
          <div className="pt-16 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div className="mb-8 md:mb-0">
                <h2 className="text-lg mb-4">
                  Offices — <span className="text-gray-400">US TR AU PK</span>
                </h2>
                <div className="space-y-2 text-gray-400">
                  <p>Got a question?</p>
                  <p>Email to hello@.com</p>
                  <p>Greater Boston, USA</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <img
                  src=""
                  alt="Google Cloud Partner"
                  className="h-8"
                />
                <img
                  src=""
                  alt="awwwards"
                  className="h-8"
                />
                <img
                  src=""
                  alt="Microsoft"
                  className="h-8"
                />
              </div>
            </div>
          </div>
  
          {/* Copyright and Legal */}
          <div className="pt-8 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2023  LLC. All rights reserved.
              </p>
              <div className="flex gap-6 text-gray-400">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Partnerships</p>
              </div>
            </div>
          </div>
  
          {/* Social Links */}
          <div className="pt-8 mt-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">Connect with us</p>
              <div className="flex gap-6 text-gray-400">
                <p>LinkedIn</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Behance</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  