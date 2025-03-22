import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when changing routes
    setIsMobileMenuOpen(false);
    // Scroll to top when changing routes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Link color logic
  const getLinkColorClass = () => {
    if (isHomePage) {
      if (isScrolled) {
        return "text-gray-800 dark:text-gray-200 hover:text-studio-gold dark:hover:text-studio-gold-light";
      } else {
        return "text-white hover:text-gray-200";
      }
    } else {
      return "text-gray-800 dark:text-gray-200 hover:text-studio-gold dark:hover:text-studio-gold-light";
    }
  };

  const getActiveColorClass = () => {
    if (isHomePage) {
      if (isScrolled) {
        return "text-studio-gold dark:text-studio-gold-light";
      } else {
        return "text-white font-bold";
      }
    } else {
      return "text-studio-gold dark:text-studio-gold-light";
    }
  };

  const getLinkClass = (path: string) => {
    return `nav-link ${getLinkColorClass()} ${
      isActive(path) ? getActiveColorClass() : ""
    }`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-studio-dark/90"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <span
                className={`${
                  isScrolled || !isHomePage ? "text-gradient" : "text-white"
                }`}
              >
                {" "}
                <img
                  src="/Epoch-Logo.png"
                  alt="Epoch-Logo"
                  className="h-16 w-16"
                />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link to="/services" className={getLinkClass("/services")}>
              Services
            </Link>
            <Link to="/portfolio" className={getLinkClass("/portfolio")}>
              Portfolio
            </Link>
            <Link to="/blog" className={getLinkClass("/blog")}>
              Blog
            </Link>
            <Link to="/contact" className={getLinkClass("/contact")}>
              Consultation
            </Link>
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-md ${
                isScrolled || !isHomePage
                  ? "bg-studio-gold text-white hover:bg-studio-gold-dark"
                  : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              } transition duration-300 shadow-sm hover:shadow-gold-glow`}
            >
              Book a Session
            </Link>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className={`${
                isScrolled || !isHomePage
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-white"
              } hover:text-studio-gold focus:outline-none`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden bg-white/95 dark:bg-studio-dark/95 backdrop-blur-md`}
      >
        <div className="px-4 py-4 space-y-4">
          <Link
            to="/"
            className={`block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-studio-gold ${
              isActive("/")
                ? "text-studio-gold dark:text-studio-gold-light"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-studio-gold ${
              isActive("/services")
                ? "text-studio-gold dark:text-studio-gold-light"
                : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className={`block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-studio-gold ${
              isActive("/portfolio")
                ? "text-studio-gold dark:text-studio-gold-light"
                : ""
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className={`block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-studio-gold ${
              isActive("/blog")
                ? "text-studio-gold dark:text-studio-gold-light"
                : ""
            }`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`block px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-studio-gold ${
              isActive("/contact")
                ? "text-studio-gold dark:text-studio-gold-light"
                : ""
            }`}
          >
            Consultaion
          </Link>
          <Link
            to="/contact"
            className="block w-full text-center px-5 py-2.5 rounded-md bg-studio-gold text-white hover:bg-studio-gold-dark transition duration-300"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
