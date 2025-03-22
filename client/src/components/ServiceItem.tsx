import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  slug: string;
}

const ServiceItem = ({
  title,
  description,
  icon: Icon,
  image,
  slug,
}: ServiceItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/services/${slug}`}
      className="group relative overflow-hidden rounded-xl hover-lift h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
      </div>

      <div className="p-6 glass-panel dark:glass-panel-dark rounded-b-xl flex-grow flex flex-col">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-studio-gold/10 text-studio-gold">
          <Icon />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-pretty">
          {description}
        </p>
        <div className="inline-flex items-center text-studio-gold font-medium group">
          Learn more
          <ChevronRight
            className={`ml-1 h-4 w-4 transition-transform duration-300 ${
              isHovered ? "translate-x-1" : ""
            }`}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-studio-gold to-studio-gold-light transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
    </Link>
  );
};

export default ServiceItem;
