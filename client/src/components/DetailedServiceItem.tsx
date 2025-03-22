import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ServiceData } from "@/data/servicesData";

interface DetailedServiceItemProps extends ServiceData {
  reversed?: boolean;
}

const DetailedServiceItem = ({
  title,
  description,
  features,
  image,
  icon: Icon,
  slug,
  reversed = false,
}: DetailedServiceItemProps) => {
  return (
    <div className="py-16 border-b border-gray-200 dark:border-gray-800">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className={`${reversed ? "lg:order-2" : ""}`}>
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-studio-gold/10 text-studio-gold">
            <Icon />
          </div>
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-pretty">
            {description}
          </p>
          {features && features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">What We Offer</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-studio-gold mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Link
            to={`/services/${slug}`}
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-studio-gold text-white hover:bg-studio-gold-dark transition duration-300"
          >
            Learn More <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className={`${reversed ? "lg:order-1" : ""}`}>
          <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedServiceItem;
