import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="DevTask Logo" className="w-35" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Features", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-white">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">
            {["Home", "Features", "Pricing", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-800 space-y-3">
              <a href="https://devtask-client.vercel.app/">
                <button className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200">
                  Sign In
                </button>
              </a>
              <a href="https://devtask-client.vercel.app/signup">
                <button className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 rounded-lg font-semibold text-white">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
