import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Play, ChevronDown } from "lucide-react";
import PlatformLink from "./PlatformLink";
import Fiverr from "../assets/Fiverr.svg";
import Airgigs from "../assets/AirGigs.svg";
import SoundBetter from "../assets/SoundBetter.svg";

const platforms = [
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/itunujoe",
    logoComponent: Fiverr,
  },
  {
    name: "AirGigs",
    url: "https://www.airgigs.com/user/itunujoe",
    logoComponent: Airgigs,
  },
  {
    name: "SoundBetter",
    url: "https://soundbetter.com/profiles/127026-itunu-joe",
    logoComponent: SoundBetter,
  },
];

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes after component mounts for entrance animations
    setTimeout(() => {
      if (headingRef.current) {
        headingRef.current.classList.add("animate-slide-down");
      }

      setTimeout(() => {
        if (subheadingRef.current) {
          subheadingRef.current.classList.add("animate-slide-down");
        }

        setTimeout(() => {
          if (buttonsRef.current) {
            buttonsRef.current.classList.add("animate-fade-in");
          }
        }, 200);
      }, 200);
    }, 100);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 hero-gradient z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dts134dyc/video/upload/v1742604382/videoplayback_otd4rt.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white opacity-0 text-balance"
        >
          Bringing Your <span className="text-gradient">Sound</span> to Life
        </h1>
        <p
          ref={subheadingRef}
          className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto opacity-0 text-balance"
        >
          Professional Music Production & Recording Studio in the Heart of the
          City
        </p>

        <div
          ref={buttonsRef}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto flex-none px-6 py-3 rounded-md bg-studio-gold text-white hover:bg-studio-gold-dark transition duration-300 shadow-md hover:shadow-glow text-lg"
          >
            Book a Session
          </Link>
          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto flex-none px-6 py-3 rounded-md border border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition duration-300 text-lg flex items-center justify-center gap-2"
          >
            <Play size={18} />
            Explore Services
          </button>
        </div>
      </div>

      <div className="absolute sm:mt-4 hidden sm:grid bottom-28 w-1/2 pt-10 md:grid-cols-3 gap-4 md:gap-6">
        {platforms.map((platform) => (
          <PlatformLink
            key={platform.name}
            name={platform.name}
            url={platform.url}
            logoComponent={platform.logoComponent}
            className="animate-fade-in-up"
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-pulse-subtle">
        <button
          onClick={scrollToServices}
          className="text-white flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
