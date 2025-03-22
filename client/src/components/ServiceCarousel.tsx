import {
  Mic,
  Music,
  Users,
  Settings2,
  Headphones,
  UserPlus,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import ServiceItem from "./ServiceItem";
import { servicesData } from "@/data/servicesData";

const ServiceCarousel = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {servicesData.map((service, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 h-full"
          >
            <div className="p-1 h-full">
              <ServiceItem {...service} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-8">
        <CarouselPrevious className="relative static mr-2 h-10 w-10 border-studio-gold text-studio-gold hover:bg-studio-gold hover:text-white" />
        <CarouselNext className="relative static ml-2 h-10 w-10 border-studio-gold text-studio-gold hover:bg-studio-gold hover:text-white" />
      </div>
    </Carousel>
  );
};

export default ServiceCarousel;
