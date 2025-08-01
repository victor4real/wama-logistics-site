import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "./assets/logo.jpg"; // Ensure this path is correct and logo exists

// Card component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg p-4 shadow ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

// Navbar
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

// Home
const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 max-w-5xl mx-auto space-y-6">
    <h2 className="text-2xl font-semibold text-blue-900">Welcome to WAMA Logistics Bond Ltd</h2>
    <p className="text-gray-700 leading-relaxed">
      We specialize in logistics, supply, and infrastructure services across various industries in Nigeria.
      Our mission is to provide reliable, efficient, and innovative solutions to meet our clients' diverse needs.
    </p>
    <Card>
      <CardContent>
        <h3 className="text-xl font-medium mb-2 text-blue-800">Our Services</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Military and Paramilitary Supplies</li>
          <li>Logistics and Delivery</li>
          <li>Mining and Transportation</li>
          <li>Equipment Supply and Exploration</li>
          <li>Political, Digital, and Educational Items</li>
          <li>Agricultural Services</li>
          <li>Construction and Road Maintenance</li>
          <li>Diesel and Machinery Supply</li>
          <li>General Contracting</li>
        </ul>
      </CardContent>
    </Card>
  </motion.div>
);

// About
const About = () => (
  <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="p-6 max-w-4xl mx-auto space-y-4">
    <h2 className="text-2xl font-semibold text-blue-900">About Us</h2>
    <p className="text-gray-700 leading-relaxed">
      WAMA Logistics Bond Limited is a Nigerian private company with diverse operations focused on logistics,
      supply chain solutions, and infrastructure development. Our expertise spans military and paramilitary equipment,
      deliveries, mining logistics, agricultural products, road construction, and more. With a registered capital of
      ₦1,000,000 and a team of dedicated professionals, we are committed to excellence and client satisfaction.
    </p>
  </motion.div>
);

// Contact
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

// Sitemap with spacing fix
const Sitemap = () => (
  <div className="px-6 pb-6 pt-12 max-w-md mx-auto text-sm text-gray-700">
    <h3 className="font-semibold mb-2">Sitemap</h3>
    <ul className="list-disc list-inside space-y-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
);

// Footer
const Footer = () => (
  <footer className="text-center py-4 border-t text-gray-600 mt-auto bg-gray-50">
    <p className="text-sm">&copy; {new Date().getFullYear()} WAMA Logistics Bond Limited. All rights reserved.</p>
  </footer>
);

// App wrapper
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
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
