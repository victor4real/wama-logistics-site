import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "./assets/logo.jpg";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg p-4 shadow ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const Navbar = () => (
  <nav className="flex flex-col sm:flex-row justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
    <div className="flex items-center space-x-3 mb-2 sm:mb-0">
      <img src={logo} alt="WAMA Logo" className="h-10 w-10 object-contain" />
      <h1 className="text-lg sm:text-xl font-bold text-blue-900">WAMA Logistics Bond Ltd</h1>
    </div>
    <div className="space-x-4 text-blue-700 text-sm sm:text-base">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About Us</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="bg-blue-50 py-12 px-6 text-center">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Delivering Excellence in Logistics & Infrastructure
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">
        WAMA Logistics Bond Limited is a Nigerian logistics and infrastructure solutions provider,
        specializing in military supplies, mining, agriculture, and road construction.
      </p>
      <a href="mailto:wamalogisticsbond@outlook.com" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition-all">
        Get in Touch
      </a>
    </motion.div>
  </section>
);

const Services = () => (
  <section className="bg-white py-10 px-6">
    <h3 className="text-2xl font-semibold text-center text-blue-900 mb-6">Our Core Services</h3>
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-gray-800">
      {[
        "Military & Paramilitary Supplies",
        "Logistics & Delivery",
        "Mining & Exploration",
        "Equipment Supply",
        "Political, Digital & Educational Materials",
        "Agricultural Development",
        "Construction & Road Maintenance",
        "Diesel & Machinery Supply",
        "General Contracting"
      ].map((service, index) => (
        <Card key={index} className="text-center">
          <CardContent>{service}</CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="bg-gray-50 py-10 px-6">
    <h3 className="text-2xl font-semibold text-center text-blue-900 mb-6">Why Choose Us</h3>
    <ul className="max-w-3xl mx-auto space-y-2 text-gray-700 list-disc list-inside">
      <li>Registered with Corporate Affairs Commission (CAC)</li>
      <li>Experienced and disciplined workforce</li>
      <li>Proven track record in logistics and infrastructure</li>
      <li>Strong commitment to client satisfaction</li>
      <li>Security-conscious and compliant with safety protocols</li>
    </ul>
  </section>
);

const Home = () => (
  <>
    <HeroSection />
    <Services />
    <WhyChooseUs />
  </>
);

const About = () => (
  <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="p-6 max-w-4xl mx-auto space-y-4">
    <h2 className="text-2xl font-semibold text-blue-900">About WAMA Logistics Bond Ltd</h2>
    <p className="text-gray-700 leading-relaxed">
      WAMA Logistics Bond Limited is a Nigerian private company incorporated under the Corporate Affairs Commission,
      operating in logistics, supply chain management, military/paramilitary supply, infrastructure development,
      mining, and agriculture. We bring a combination of strategic planning, operational expertise,
      and a highly dedicated workforce to deliver superior services to clients in both public and private sectors.
    </p>
    <p className="text-gray-700 leading-relaxed">
      With a registered capital of ₦1,000,000, our company has proven capacity and commitment to execute
      government and corporate projects across the country. We prioritize professionalism,
      security, and sustainability in all operations.
    </p>
  </motion.div>
);

const Contact = () => (
  <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="p-6 max-w-xl mx-auto space-y-4">
    <h2 className="text-2xl font-semibold text-blue-900">Contact Us</h2>
    <p className="text-gray-700">We'd love to hear from you. Click below to reach us by email.</p>
    <a
      href="mailto:wamalogisticsbond@outlook.com"
      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300"
    >
      Email Us
    </a>
  </motion.div>
);

const Footer = () => (
  <footer className="text-center py-4 border-t text-gray-600 mt-auto bg-gray-100">
    <p className="text-sm">&copy; {new Date().getFullYear()} WAMA Logistics Bond Limited. All rights reserved.</p>
  </footer>
);

const Sitemap = () => (
  <div className="p-6 max-w-md mx-auto text-sm text-gray-700 mt-8">
    <h3 className="font-semibold mb-2">Sitemap</h3>
    <ul className="list-disc list-inside space-y-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Sitemap />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
