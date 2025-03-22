
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, link, delay = 0 }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-xl p-6 hover-lift glass-panel dark:glass-panel-dark"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-studio-blue/10 text-studio-blue">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-pretty">
          {description}
        </p>
        <Link
          to={link}
          className="inline-flex items-center text-studio-blue font-medium group"
        >
          Learn more
          <ChevronRight 
            className={`ml-1 h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
          />
        </Link>
      </div>
      
      <div 
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-studio-blue to-studio-accent transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" 
      />
    </div>
  );
};

export default ServiceCard;
