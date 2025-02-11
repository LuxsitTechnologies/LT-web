// App.js
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Rating/Testimonials";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Company from "./components/Company";
import VideoSection from "./components/video/VideoSection";
import ProfileTimeline from "./components/ProfileTimeline";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <section id="Home" className="py-16">
      <Hero/>
      </section>
     
      <Company />
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-16">
        <Portfolio />
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <Services />
      </section>
      <VideoSection />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <Testimonials />
      </section>
      <ProfileTimeline/>

      <Footer />
    </div>
  );
}

export default App;
