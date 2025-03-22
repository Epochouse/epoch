import React from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, LucideIcon } from "lucide-react";

interface PlatformLinkProps {
  name: string;
  url: string;
  className?: string;
  icon?: LucideIcon;
  logoComponent?: string;
}

const PlatformLink: React.FC<PlatformLinkProps> = ({
  name,
  url,
  className,
  icon: Icon,
  logoComponent,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20",
        "hover:bg-white/20 transition-all duration-300 flex flex-col",
        "transform hover:-translate-y-1 hover:shadow-lg",
        className
      )}
      style={{
        animationDelay: `${
          ["Fiverr", "AirGigs", "SoundBetter"].indexOf(name) * 0.1 + 0.2
        }s`,
      }}
    >
      <div className="flex flex-col items-start mb-3">
        {/* <h3 className="text-xl font-display font-medium">{name}</h3> */}
        <div className="flex items-center justify-between w-full">
          {logoComponent ? (
            <img
              src={logoComponent}
              alt={`${name} logo`}
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-32"
            />
          ) : Icon ? (
            <Icon className="h-10 w-10 mt-1 text-foreground/80" />
          ) : null}
          <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <div className="mt-auto">
        <span className="text-xs uppercase tracking-wider font-medium inline-flex items-center">
          Visit{" "}
          <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </span>
      </div>
    </a>
  );
};

export default PlatformLink;
