import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Singer-Songwriter",
    company: "Independent Artist",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    content:
      "Working with Epochouse was a game-changer for my career. The team's attention to detail and commitment to capturing the essence of my music exceeded all expectations. From the moment I stepped into the studio, I felt like my vision was understood and valued.",
  },
  {
    id: "2",
    name: "Sophia Martinez",
    role: "Producer",
    company: "Harmony Records",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    content:
      "The mixing and mastering services at Epochouse are absolutely top-notch. Their engineers have an incredible ear for detail and brought out elements in our tracks we didn't even know were there. Professional, efficient, and worth every penny.",
  },
  {
    id: "3",
    name: "Marcus Williams",
    role: "Film Director",
    company: "Horizon Pictures",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    content:
      "Epochouse's sound design team created an incredible sonic landscape for our indie film. Their creativity and technical expertise transformed our project, adding emotional depth through sound that we couldn't have achieved elsewhere. Highly recommend!",
  },
  {
    id: "4",
    name: "Elena Chen",
    role: "Lead Vocalist",
    company: "Echo Ensemble",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    content:
      "The recording environment at Epochouse is perfect for vocalists. The acoustic treatment, microphone selection, and engineer expertise helped me deliver my best performances. They have a special way of making artists feel comfortable and inspired.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto advance
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white dark:bg-studio-gold/60 rounded-2xl shadow-lg p-8 relative">
                <div className="absolute top-8 left-8 text-studio-blue opacity-20">
                  <Quote size={48} />
                </div>
                <div className="relative z-10">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-pretty">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-studio-blue hover:text-white hover:border-studio-blue transition-colors duration-300"
          disabled={isAnimating}
        >
          <ChevronLeft size={18} />
        </button>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setCurrentIndex(index);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? "bg-studio-gold"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
          />
        ))}
        <button
          onClick={next}
          className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-studio-blue hover:text-white hover:border-studio-blue transition-colors duration-300"
          disabled={isAnimating}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
