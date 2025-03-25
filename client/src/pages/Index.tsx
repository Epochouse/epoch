import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Mic,
  Music,
  Users,
  Play,
  Waves,
  PhoneIcon,
  MailIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AudioPlayer from "@/components/AudioPlayer";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import TestimonialSlider from "@/components/TestimonialSlider";
import CreativeDirector from "@/components/CreativeDirector";
import ServiceCarousel from "@/components/ServiceCarousel";
import YouTubeVideo from "@/components/YouTubeVideo";
import { Helmet } from "react-helmet";

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const studioImagesRef = useRef<HTMLDivElement>(null);
  const creativeDirectorRef = useRef<HTMLDivElement>(null);

  const sampleTracks = [
    {
      id: "1",
      title: "Ambient Dreams",
      artist: "Epochouse Productions",
      audioUrl:
        "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
      coverUrl:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const studioImages = [
    {
      id: "1",
      url: "https://res.cloudinary.com/dts134dyc/image/upload/v1729171209/WhatsApp_Image_2024-10-17_at_14.13.03_842b6113_yhhozd.jpg",
      title: "Vocal Recording Booth",
      description:
        "Our primary vocals recording space with state-of-the-art equipment",
    },
    {
      id: "2",
      url: "https://res.cloudinary.com/dts134dyc/image/upload/v1729171206/WhatsApp_Image_2024-10-17_at_14.12.55_a77a9964_ivq287.jpg",
      title: "Control Room",
      description: "Featuring our custom mixing console and monitoring system",
    },
    {
      id: "3",
      url: "https://res.cloudinary.com/dts134dyc/image/upload/v1729168571/Photoroom-20241017_130149_4_xoz0y5.webp",
      title: "Drum Isolation Booth",
      description: "Perfect acoustic environment for capturing drum tracks",
    },
    {
      id: "4",
      url: "https://res.cloudinary.com/dts134dyc/image/upload/v1729171206/WhatsApp_Image_2024-10-17_at_14.12.58_00ece464_ox9ifr.jpg",
      title: "Live Room",
      description: "Spacious area for recording bands and ensembles",
    },
  ];

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

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (studioImagesRef.current) observer.observe(studioImagesRef.current);
    if (creativeDirectorRef.current)
      observer.observe(creativeDirectorRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-studio-dark">
      <Helmet>
        <title>Home | Epochouse Studio</title>
        <meta
          name="description"
          content="Welcome to Epochouse Studios, home to professional music production, recording, and audio engineering services."
        />
      </Helmet>
      <Navbar />
      <Hero />

      <section
        id="services"
        ref={servicesRef}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto opacity-0"
      >
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <span className="px-3 py-1 text-xs font-medium bg-studio-gold/10 text-studio-gold rounded-full mb-4">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional Studio Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            We offer a complete range of music production services to help bring
            your creative vision to life, from show production and live
            recording to professional background singers.
          </p>
        </div>

        <ServiceCarousel />

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-studio-gold text-white hover:bg-studio-gold-dark transition duration-300 shadow-sm hover:shadow-glow"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Creative Director Section */}
      <section
        ref={creativeDirectorRef}
        className="my-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto opacity-0"
      >
        <CreativeDirector />
      </section>

      {/* Studio Images Section */}

      <section
        ref={portfolioRef}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto opacity-0 bg-gray-50 dark:bg-gray-900 rounded-3xl my-16"
      >
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <span className="px-3 py-1 text-xs font-medium bg-studio-blue/10 text-studio-gold rounded-full mb-4">
              Our Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See & Hear Our Productions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Check out samples from our portfolio showcasing our production
            quality across video and audio formats.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* YouTube Video */}
            <div className="glass-panel dark:glass-panel-dark rounded-xl p-4">
              <h3 className="text-xl font-bold mb-4">Video</h3>
              <YouTubeVideo
                videoId="mPhbiSKcWMs?si=jT__Vb4VrhPPipGL"
                title="Studio Recording Session"
              />
            </div>

            {/* Audio Sample */}
            <div className="glass-panel dark:glass-panel-dark rounded-xl p-4">
              <h3 className="text-xl font-bold mb-4">Audio</h3>
              <AudioPlayer tracks={sampleTracks} />
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-studio-gold text-white hover:bg-studio-gold/90 transition duration-300 shadow-sm hover:shadow-glow"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto opacity-0"
      >
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <span className="px-3 py-1 text-xs font-medium bg-studio-gold/10 text-studio-gold rounded-full mb-4">
              Client Feedback
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Don't just take our word for it — hear from the artists and
            producers who have worked with us.
          </p>
        </div>

        <TestimonialSlider />
      </section>

      <section
        ref={contactRef}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto opacity-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex">
              <span className="px-3 py-1 text-xs font-medium bg-studio-gold/10 text-studio-gold rounded-full mb-4">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-pretty">
              Whether you're looking for live recording services, need
              background singers, or want to discuss a custom project, we're
              here to help bring your vision to life.
            </p>

            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-studio-gold/10 flex items-center justify-center text-studio-gold">
                  <PhoneIcon size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us at</p>
                  <p className="font-medium">+234 803 623 7544</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-studio-gold/10 flex items-center justify-center text-studio-gold">
                  <MailIcon size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email us at</p>
                  <p className="font-medium">epochouse@gmail.com</p>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-studio-gold text-studio-golde hover:bg-studio-gold hover:text-white transition duration-300"
            >
              View Our Studio Location
            </Link>
          </div>

          <div className="glass-panel dark:glass-panel-dark rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
