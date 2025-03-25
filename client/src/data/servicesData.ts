import {
  Mic,
  Music,
  Users,
  Settings2,
  Headphones,
  UserPlus,
} from "lucide-react";
import React from "react";

export interface ServiceData {
  title: string;
  description: string;
  icon: React.ComponentType;
  className?: string;
  image: string;
  slug: string;
  features?: string[];
}

export const servicesData: ServiceData[] = [
  {
    title: "Background Singers",
    description:
      "Professional vocalists to enhance your recordings with perfect harmonies and backing vocals.",
    icon: Mic,
    className: "h-6 w-6",
    image:
      "https://res.cloudinary.com/dts134dyc/image/upload/v1729171209/WhatsApp_Image_2024-10-17_at_14.13.02_6094d813_cb1zvw.jpg",
    slug: "background-singers",
    features: [
      "Experienced vocalists across all genres",
      "Perfect harmonies and blending",
      "Male and female voices available",
      "Multi-part arrangements",
      "Quick turnaround for remote sessions",
    ],
  },
  {
    title: "Show Production",
    description:
      "Complete production services for live performances, concerts, and events with state-of-the-art equipment.",
    icon: Music,
    className: "h-6 w-6",
    image:
      "https://res.cloudinary.com/dts134dyc/image/upload/v1729168570/Photoroom-20241017_130149_1_vlxq8a.webp",
    slug: "show-production",
    features: [
      "Professional sound engineering",
      "Lighting design and operation",
      "Stage design and management",
      "Video production and projection",
      "Technical direction and coordination",
    ],
  },
  {
    title: "Live Recording",
    description:
      "Capture the energy and atmosphere of live performances with our mobile professional recording setup.",
    icon: Users,
    className: "h-6 w-6",
    image:
      "https://res.cloudinary.com/dts134dyc/image/upload/v1729168571/Photoroom-20241017_130149_4_xoz0y5.webp",
    slug: "live-recording",
    features: [
      "High-quality multitrack recording",
      "Professional mobile recording setup",
      "Experienced live sound engineers",
      "Post-production mixing and mastering",
      "Audio for video synchronization",
    ],
  },
  {
    title: "Music Production",
    description:
      "Full-scale music production from concept to final master with professional producers and engineers.",
    icon: Settings2,
    className: "h-6 w-6",
    image:
      "https://res.cloudinary.com/dts134dyc/image/upload/v1729171209/WhatsApp_Image_2024-10-17_at_14.13.00_1fb433af_ni39vj.jpg",
    slug: "music-production",
    features: [
      "Industry-standard production techniques",
      "Professional producers and engineers",
      "End-to-end music creation",
      "Mixing and mastering services",
    ],
  },
  {
    title: "Session Musicians",
    description:
      "Talented instrumentalists and vocalists available to enhance your recordings and live performances.",
    icon: UserPlus,
    className: "h-6 w-6",
    image:
      "https://res.cloudinary.com/dts134dyc/image/upload/v1729171204/WhatsApp_Image_2024-10-17_at_14.12.52_d9c920a0_wqivdp.jpg",
    slug: "session-musicians",
    features: [
      "Professional instrumentalists",
      "Vocalists for different styles",
      "Available for studio and live sessions",
    ],
  },
  {
    title: "Mixing & Mastering",
    description:
      "Professional mixing and mastering services to give your music the polished, radio-ready sound.",
    icon: Headphones,
    className: "h-6 w-6",
    image:
      "https://res.cloudinary.com/dts134dyc/image/upload/v1731867975/Rectangle_280-min_ojg9et.jpg",
    slug: "mixing-mastering",
    features: [
      "High-end audio processing",
      "Advanced mixing techniques",
      "Mastering for streaming and radio",
    ],
  },
  {
    title: "Remote Broadcast",
    description:
      "Seamlessly stream live events, shows, or performances with crystal-clear audio and video from any location. Our remote broadcasting service ensures professional-quality production, engaging your audience in real time.",
    icon: Headphones,
    className: "h-6 w-6",
    image:
      "https://res.cloudinary.com/dts134dyc/image/upload/v1742903190/IMG_3115_ouuzdo.jpg",
    slug: "remote-broadcasting",
    features: [
      "High-definition audio and video streaming",
      "Real-time audio mixing and mastering",
      "Professional broadcast-level sound quality",
      "Remote collaboration with multiple hosts or guests",
      "Support for live music, podcasts, and events",
      "Reliable low-latency streaming solutions",
      "Multi-platform distribution (YouTube, Facebook, Twitch, etc.)",
      "Custom overlays and real-time graphics integration",
    ],
  },
];
