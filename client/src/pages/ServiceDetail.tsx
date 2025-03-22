import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ServiceData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  process: { title: string; description: string }[];
  image: string;
  icon: React.ReactNode;
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Mock service data - in a real app, this would come from an API
  const servicesData: Record<string, ServiceData> = {
    "background-singers": {
      slug: "background-singers",
      title: "Background Singers",
      description:
        "Professional vocalists to enhance your recordings with perfect harmonies and backing vocals.",
      longDescription:
        "Our professional background singers bring depth and dimension to your music with their exceptional vocal talents. Whether you need subtle harmonies or powerful backing vocals, our team of experienced singers will elevate your production to the next level.",
      features: [
        "Experienced vocalists across all genres",
        "Perfect harmonies and blending",
        "Male and female voices available",
        "Multi-part arrangements",
        "Quick turnaround for remote sessions",
      ],
      process: [
        {
          title: "Consultation",
          description:
            "We discuss your project needs, musical style, and vocal arrangement requirements.",
        },
        {
          title: "Vocal Arrangement",
          description:
            "Our team creates custom vocal arrangements tailored to your song.",
        },
        {
          title: "Recording Session",
          description:
            "Our vocalists record high-quality harmonies and backing vocals in our studio.",
        },
        {
          title: "Editing & Delivery",
          description:
            "We edit and process the vocals to fit perfectly with your mix.",
        },
      ],
      image:
        "https://res.cloudinary.com/dts134dyc/image/upload/v1729168571/Photoroom-20241017_130149_2_fkdvnp.webp",
      icon: null,
    },
    "show-production": {
      slug: "show-production",
      title: "Show Production",
      description:
        "Complete production services for live performances, concerts, and events with state-of-the-art equipment.",
      longDescription:
        "From intimate venues to large-scale concerts, our show production services ensure your live performance looks and sounds exceptional. We handle every aspect of technical production so you can focus on delivering an unforgettable performance.",
      features: [
        "Professional sound engineering",
        "Lighting design and operation",
        "Stage design and management",
        "Video production and projection",
        "Technical direction and coordination",
      ],
      process: [
        {
          title: "Event Planning",
          description:
            "We collaborate with you to understand your vision, venue, and technical requirements.",
        },
        {
          title: "Technical Design",
          description:
            "Our team creates a comprehensive production plan tailored to your show.",
        },
        {
          title: "Setup & Rehearsal",
          description:
            "We handle all technical setup and ensure everything is perfect during rehearsals.",
        },
        {
          title: "Show Execution",
          description:
            "Our experienced technicians manage all aspects of production during your performance.",
        },
      ],
      image:
        "https://res.cloudinary.com/dts134dyc/image/upload/v1729168570/Photoroom-20241017_130149_1_vlxq8a.webp",
      icon: null,
    },
    "live-recording": {
      slug: "live-recording",
      title: "Live Recording",
      description:
        "Capture the energy and atmosphere of live performances with our mobile recording setup.",
      longDescription:
        "Our live recording services capture the authentic energy and atmosphere of your performance with pristine audio quality. Using professional mobile recording equipment, we document your live shows for release, archiving, or promotional purposes.",
      features: [
        "High-quality multitrack recording",
        "Professional mobile recording setup",
        "Experienced live sound engineers",
        "Post-production mixing and mastering",
        "Audio for video synchronization",
      ],
      process: [
        {
          title: "Pre-Production Planning",
          description:
            "We assess the venue, create a recording plan, and prepare the technical setup.",
        },
        {
          title: "Equipment Setup",
          description:
            "Our team arrives early to set up and test all recording equipment.",
        },
        {
          title: "Live Recording",
          description:
            "We capture your performance with multiple microphones and direct inputs.",
        },
        {
          title: "Post-Production",
          description:
            "Our engineers mix and master the recordings to achieve optimal sound quality.",
        },
      ],
      image:
        "https://res.cloudinary.com/dts134dyc/image/upload/v1729168571/Photoroom-20241017_130149_4_xoz0y5.webp",
      icon: null,
    },
    "music-production": {
      slug: "music-production",
      title: "Music Production",
      description:
        "Full-scale music production from concept to final master with professional producers and engineers.",
      longDescription:
        "Our music production services cover every aspect of the creative and technical process. From songwriting and arrangement to recording, mixing, and mastering, our experienced producers will help you craft a polished, professional sound that stands out in today's competitive music landscape.",
      features: [
        "Professional producers and engineers",
        "Comprehensive song development",
        "Access to top-tier instruments and equipment",
        "State-of-the-art recording facility",
        "Creative arrangement and production guidance",
      ],
      process: [
        {
          title: "Creative Meeting",
          description:
            "We discuss your musical vision, influences, and goals for the project.",
        },
        {
          title: "Pre-Production",
          description:
            "We develop arrangements, demos, and production plans before full recording.",
        },
        {
          title: "Recording Sessions",
          description:
            "Professional recording of all instruments and vocals in our studio.",
        },
        {
          title: "Mixing & Mastering",
          description:
            "We meticulously mix and master your tracks to industry standards.",
        },
      ],
      image:
        "https://res.cloudinary.com/dts134dyc/image/upload/v1729171209/WhatsApp_Image_2024-10-17_at_14.13.00_1fb433af_ni39vj.jpg",
      icon: null,
    },
    "session-musicians": {
      slug: "session-musicians",
      title: "Session Musicians",
      description:
        "Talented instrumentalists and vocalists available to enhance your recordings and live performances.",
      longDescription:
        "Our roster of professional session musicians brings expertise across a wide range of instruments and musical styles. Whether you need a full band, a string section, or a single instrumentalist to complete your project, our musicians deliver high-quality performances that elevate your music.",
      features: [
        "Extensive roster of professional musicians",
        "Expertise across diverse musical genres",
        "Quick learning and adaptation to your style",
        "Remote or in-studio session options",
        "High-quality instruments and equipment",
      ],
      process: [
        {
          title: "Musician Selection",
          description:
            "We help you choose the perfect musicians for your project needs.",
        },
        {
          title: "Session Preparation",
          description:
            "Musicians study your material and prepare for efficient recording.",
        },
        {
          title: "Recording Session",
          description:
            "Professional performance and recording of instrumental and vocal parts.",
        },
        {
          title: "Review & Refinement",
          description:
            "We ensure all performances meet your expectations and project needs.",
        },
      ],
      image:
        "https://res.cloudinary.com/dts134dyc/image/upload/v1729171204/WhatsApp_Image_2024-10-17_at_14.12.52_d9c920a0_wqivdp.jpg",
      icon: null,
    },
    "mixing-mastering": {
      slug: "mixing-mastering",
      title: "Mixing & Mastering",
      description:
        "Professional mixing and mastering services to give your music the polished, radio-ready sound.",
      longDescription:
        "Our mixing and mastering services transform your recordings into professional, industry-standard tracks ready for distribution. Our experienced engineers use top-tier equipment and techniques to create balanced, dynamic, and competitive mixes that sound great on any playback system.",
      features: [
        "Professional mixing engineers with years of experience",
        "Industry-standard equipment and software",
        "Meticulous attention to sonic detail",
        "Competitive loudness for streaming platforms",
        "Comprehensive quality control process",
      ],
      process: [
        {
          title: "Project Evaluation",
          description:
            "We assess your tracks and discuss your sonic goals and references.",
        },
        {
          title: "Mixing Process",
          description:
            "Our engineers balance, enhance, and refine each element of your tracks.",
        },
        {
          title: "Revision Round",
          description:
            "We implement your feedback to perfect the mix to your satisfaction.",
        },
        {
          title: "Final Mastering",
          description:
            "We provide the finishing touches to optimize your tracks for distribution.",
        },
      ],
      image:
        "https://res.cloudinary.com/dts134dyc/image/upload/v1731867975/Rectangle_280-min_ojg9et.jpg",
      icon: null,
    },
  };

  const service = servicesData[slug || ""];

  // Get all services for sidebar navigation
  const allServices = Object.values(servicesData);

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
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  // Scroll to top when service changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-studio-dark flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Link to="/services" className="text-studio-gold hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-studio-dark">
      <Navbar />

      <div className="relative pt-20">
        {/* Hero Image */}
        <div className="w-full h-[50vh] relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />

          <div
            ref={headerRef}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 opacity-0"
          >
            <div className="max-w-3xl mx-auto text-center">
              <Link
                to="/services"
                className="inline-flex items-center text-white mb-6 hover:underline"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                {service.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 opacity-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Other Services */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 glass-panel dark:glass-panel-dark rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Our Services</h3>
                <div className="space-y-3">
                  {allServices.map((otherService) => (
                    <Link
                      key={otherService.slug}
                      to={`/services/${otherService.slug}`}
                      className={`flex items-center p-2 rounded-md transition-colors ${
                        otherService.slug === service.slug
                          ? "bg-studio-gold/10 text-studio-gold"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {otherService.slug === service.slug && (
                        <div className="w-1 h-6 bg-studio-gold rounded-full mr-2"></div>
                      )}
                      <span>{otherService.title}</span>
                      {otherService.slug !== service.slug && (
                        <ChevronRight className="ml-auto h-4 w-4" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Service Description */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6">
                  {service.title} Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-pretty">
                  {service.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Features</h3>
                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-studio-gold flex-shrink-0 mt-0.5 mr-3" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-panel dark:glass-panel-dark rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Our Process</h3>
                    <div className="space-y-6">
                      {service.process.map((step, index) => (
                        <div key={index} className="relative pl-8">
                          <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-studio-gold/10 flex items-center justify-center text-studio-gold text-sm font-bold">
                            {index + 1}
                          </div>
                          <h4 className="font-bold">{step.title}</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-pretty">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Elevate Your Project?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact us today to discuss how our{" "}
                  {service.title.toLowerCase()} services can bring your vision
                  to life.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-studio-gold text-white hover:bg-studio-gold-dark transition duration-300 shadow-sm hover:shadow-gold-glow"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
