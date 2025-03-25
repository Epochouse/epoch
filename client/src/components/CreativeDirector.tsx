import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mic, Music, Award } from "lucide-react";

const CreativeDirector = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 rounded-3xl">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-studio-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-studio-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative rounded-xl overflow-hidden shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://res.cloudinary.com/dts134dyc/image/upload/v1742907223/3D9A5920_1_llhakx.jpg"
              alt="Itunu Joe"
              className={`w-full aspect-[3/4] object-cover transition-transform duration-700 ${
                isHovered ? "scale-105" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70"></div>
          </div>

          <div>
            <div className="flex">
              <span className="px-3 py-1 text-xs font-medium bg-studio-gold/10 text-studio-gold rounded-full mb-4">
                Meet Our Creative Director
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Itunu Joe</h2>
            <h3 className="text-xl text-studio-gold mb-4">
              Creative Director & Lead Producer
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-pretty">
              Itunu Joe, the creative force behind The Epoch House, is a skilled
              drummer, composer, music producer, and audio engineer. Starting as
              a studio assistant after college, he has built a thriving career
              in the music industry. While leading a globally touring band, he
              also directs a 50-member church choir. His background in
              engineering enhances his precision and creativity, allowing him to
              craft music with passion and excellence
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1 w-10 h-10 rounded-full bg-studio-gold/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-studio-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">
                    Award-Winning Producer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-pretty">
                    Recipient of multiple industry awards for outstanding
                    production work.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 w-10 h-10 rounded-full bg-studio-gold/10 flex items-center justify-center">
                  <Mic className="h-5 w-5 text-studio-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">
                    Vocal Production Specialist
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-pretty">
                    Known for bringing out the best in vocalists through
                    specialized techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 w-10 h-10 rounded-full bg-studio-gold/10 flex items-center justify-center">
                  <Music className="h-5 w-5 text-studio-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Multi-Genre Expertise</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-pretty">
                    Versatile producer with credits spanning Gospel, R&B, rock,
                    and Afropop.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center text-studio-gold hover:underline group"
            >
              Work with Itunu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeDirector;
