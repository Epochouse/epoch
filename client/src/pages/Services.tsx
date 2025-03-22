import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DetailedServiceItem from "@/components/DetailedServiceItem";
import { servicesData } from "@/data/servicesData";
import { Helmet } from "react-helmet";

const Services = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "-100px 0px",
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-studio-dark">
      <Helmet>
        <title>Services | Epochouse Studio</title>
        <meta
          name="description"
          content="Unlock your musical potential with Epochouse Studio's professional services, including music production, recording, mixing, mastering, and session musician support. Let's bring your sound to life."
        />
      </Helmet>

      <Navbar />

      <div
        ref={headerRef}
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center opacity-0"
      >
        <div className="flex justify-center">
          <span className="px-3 py-1 text-xs font-medium bg-studio-gold/10 text-studio-gold rounded-full mb-4">
            Our Services
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Professional Music Production
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
          From background vocals to show production and live recording, we offer
          comprehensive services to bring your musical vision to life with
          expert precision.
        </p>
      </div>

      <div
        ref={servicesRef}
        className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto opacity-0"
      >
        {servicesData.slice(0, 3).map((service, index) => (
          <DetailedServiceItem
            key={service.slug}
            {...service}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 text-pretty">
            Let's collaborate to bring your musical vision to life. Contact us
            today to discuss your project and book your first session.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-studio-gold text-white hover:bg-studio-gold-dark transition duration-300 shadow-sm hover:shadow-glow"
          >
            Book a Consultation
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
