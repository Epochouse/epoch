import { useState, useEffect, useRef } from "react";
import { PlayCircle, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import AudioPlayer from "@/components/AudioPlayer";
import YouTubeVideo from "@/components/YouTubeVideo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SpotifyEmbed from "@/components/SpotifyEmbed";

interface Project {
  id: string;
  genre: string;
  services: string[];
  audioUrl: string;
  featured?: boolean;
}

interface VideoProject {
  id: string;
  videoId: string;
  title: string;
  artist: string;
  genre: string;
  description: string;
  featured?: boolean;
}

const PortfolioItem = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="glass-panel dark:glass-panel-dark rounded-xl overflow-hidden hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Services:</p>
          <div className="flex flex-wrap gap-2">
            {project.services.map((service, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 dark:bg-gray-800 py-1 px-2 rounded"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
        <SpotifyEmbed
          tracks={[
            {
              id: project.id,
              audioUrl: project.audioUrl,
            },
          ]}
        />
        {/* <AudioPlayer
          tracks={[
            {
              id: project.id,
              title: project.title,
              artist: project.artist,
              audioUrl: project.audioUrl,
              coverUrl: project.coverUrl,
            },
          ]}
        /> */}
      </div>
    </div>
  );
};

const VideoPortfolioItem = ({ video }: { video: VideoProject }) => {
  return (
    <div className="glass-panel dark:glass-panel-dark rounded-xl overflow-hidden hover-lift">
      <div className="aspect-video w-full">
        <YouTubeVideo videoId={video.videoId} title={video.title} />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-xl">{video.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{video.artist}</p>
          </div>
          <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 py-1 px-2 rounded">
            {video.genre}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-pretty">
          {video.description}
        </p>
        {video.featured && (
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">Featured Project</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [contentType, setContentType] = useState("video");
  const headerRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  // Sample portfolio projects (audio)
  const projects: Project[] = [
    {
      id: "1",
      genre: "Gospel",
      services: ["Production", "Mixing", "Mastering"],
      audioUrl: "3k1zwory6KDYlniS9aCDl2",
      featured: true,
    },

    {
      id: "2",
      genre: "Gospel",
      services: ["Beat Production", "Mixing", "Recording"],
      audioUrl: "03uKZRESVz1N7Nf2eFsOBi",
      featured: true,
    },

    {
      id: "3",
      genre: "Gospel",
      services: ["Recording", "Mixing", "Session Musicians"],
      audioUrl: "7d1tK1JLVfmFLlETSXgxlu",
    },

    {
      id: "4",
      genre: "Gospel",
      services: ["Production", "Sound Design", "Mastering"],
      audioUrl: "6ag2zPVMCFpOZtV2BlsZ3c",
    },

    {
      id: "5",
      genre: "Gospel",
      services: ["Recording", "Mixing", "Session Musicians"],
      audioUrl: "3zqbBAK6WlP2L5jCORs3As",
    },

    {
      id: "6",
      genre: "Gospel",
      services: ["Recording", "Production", "Mixing"],
      audioUrl: "1Tu1c4NnJLYFaDb5gaITHt",
    },
  ];

  // Sample video projects
  const videoProjects: VideoProject[] = [
    {
      id: "v1",
      videoId: "SGVby8r57Xc?si=9AlnijD3Pu0Gmx-a",
      title: "SMOKE AND MIRRORS CHOIR PERFORMANCE",
      artist: "Epoch House",
      genre: "Pop",
      description:
        "Highlights from our state-of-the-art production and vocal performances.",
      featured: true,
    },
    {
      id: "v2",
      videoId: "hPQq2zZDGrM?si=ga3yuQxtYBWJAQsY",
      title: "The Epoch House on Live In This Way - PentHouse",
      artist: "The Epoch House",
      genre: "R&B",
      description:
        "Behind-the-scenes footage of an immersive studio recording session with talented Background singers.",
      featured: false,
    },
    {
      id: "v3",
      videoId: "mPhbiSKcWMs?si=aH8YVkNy57fFV2Id",
      title: "BETTER CHOIR PERFORMANCE",
      artist: "The Epoch House",
      genre: "Electronic",
      description:
        "Produced with cutting-edge visual effects and cinematography.",
      featured: true,
    },
    {
      id: "v4",
      videoId: "aY3_JPEF6bs?si=MhPTe3Mm6tnwEYQ-",
      title: "BORIS CHOIR PERFORMANCE",
      artist: "The Epoch House",
      genre: "Folk",
      description:
        "Produced with cutting-edge visual effects and cinematography.",
      featured: true,
    },
    {
      id: "v5",
      videoId: "zpDJdy-1pdI?si=_vKzQ-OGelgx-tbd",
      title: "DREAMS CHOIR PERFORMANCE",
      artist: "The Epoch House",
      genre: "Rock",
      description:
        "Short documentary following the band's creative process and live performances.",
      featured: true,
    },
    {
      id: "v6",
      videoId: "1k-9-tPUVqY?si=EqUnSWEhcw2Jc1Dj",
      title: "GRATEFUL CHOIR PERFORMANCE",
      artist: "The Epoch House",
      genre: "Various",
      description: "Highlights from our recording performances.",
      featured: true,
    },
    // New Videos
    {
      id: "v7",
      videoId: "HyWrj18TalE?si=-0vd1ElRAOQBb53N",
      title: "New Song Release - Official Music Video",
      artist: "Epoch House",
      genre: "Soul",
      description:
        "An emotional performance capturing the essence of the song.",
      featured: false,
    },
    {
      id: "v8",
      videoId: "pAXjBdy4Ilk",
      title: "Live Performance - Acoustic Session",
      artist: "Epoch House",
      genre: "Acoustic",
      description: "An intimate live performance with acoustic instrumentals.",
      featured: true,
    },
    {
      id: "v9",
      videoId: "NDdyuH0kjYw",
      title: "Behind the Scenes - Studio Session",
      artist: "Epoch House",
      genre: "Documentary",
      description:
        "A behind-the-scenes look at the making of our latest track.",
      featured: false,
    },
    {
      id: "v10",
      videoId: "UkjXaixlcJs",
      title: "Choir Rehearsal Highlights",
      artist: "Epoch House",
      genre: "Gospel",
      description:
        "A powerful rehearsal session with the Epoch House Choir in preparation for their live performance.",
      featured: true,
    },
    {
      id: "v11",
      videoId: "0m7jSabbRRw",
      title: "Exclusive Music Video Premiere",
      artist: "Epoch House",
      genre: "Pop",
      description:
        "Watch the exclusive premiere of our latest music video with vibrant visuals and storytelling.",
      featured: true,
    },
  ];

  // Filter projects based on selected filter
  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.genre.toLowerCase() === filter);

  // Filter video projects
  const filteredVideoProjects =
    filter === "all"
      ? videoProjects
      : filter === "featured"
      ? videoProjects.filter((video) => video.featured)
      : videoProjects.filter((video) => video.genre.toLowerCase() === filter);

  // Setup intersection observer for animations
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

    // Observe sections
    if (headerRef.current) observer.observe(headerRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-studio-dark">
      <Helmet>
        <title>Portfolio | Epochouse Studio</title>
        <meta
          name="description"
          content="Discover the creative works of Epochouse Studio. Explore our portfolio featuring exceptional music productions, artist collaborations, and immersive audio experiences."
        />
      </Helmet>

      <Navbar />

      {/* Header */}
      <div
        ref={headerRef}
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center opacity-0"
      >
        <div className="flex justify-center">
          <span className="px-3 py-1 text-xs font-medium bg-studio-gold/10 text-studio-gold rounded-full mb-4">
            Our Work
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Portfolio & Media
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
          Explore our diverse portfolio of music production work across various
          genres and styles, showcasing our expertise in video production,
          recording, mixing, and mastering.
        </p>
      </div>

      {/* Portfolio Tabs */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <Tabs
          defaultValue="video"
          value={contentType}
          onValueChange={setContentType}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="video" className="px-8">
                Video
              </TabsTrigger>
              <TabsTrigger value="audio" className="px-8">
                Audio
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === "all"
                  ? "bg-studio-gold text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === "featured"
                  ? "bg-studio-gold text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setFilter("pop")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === "pop"
                  ? "bg-studio-gold text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Pop
            </button>
            <button
              onClick={() => setFilter("hip hop")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === "hip hop"
                  ? "bg-studio-gold text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Hip Hop
            </button>
            <button
              onClick={() => setFilter("rock")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === "rock"
                  ? "bg-studio-gold text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Rock
            </button>
            <button
              onClick={() => setFilter("electronic")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === "electronic"
                  ? "bg-studio-gold text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Electronic
            </button>
          </div>

          <TabsContent value="video" className="mt-0">
            <div
              ref={portfolioRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
            >
              {filteredVideoProjects.map((video) => (
                <VideoPortfolioItem key={video.id} video={video} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audio" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <PortfolioItem key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 dark:bg-gray-900 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <span className="px-3 py-1 text-xs font-medium bg-studio-blue/10 text-studio-gold rounded-full mb-4">
                Client Feedback
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We take pride in our work and the impact it has on our clients'
              musical journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-panel dark:glass-panel-dark rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "Working with Epoch House was incredible. Their attention to
                detail and ability to capture the essence of my music exceeded
                all expectations."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Independent Artist</p>
                </div>
              </div>
            </div>

            <div className="glass-panel dark:glass-panel-dark rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "The mixing and mastering services transformed our raw tracks
                into a professional album that sounds amazing on every system."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <p className="font-medium">The Amplifiers</p>
                  <p className="text-sm text-gray-500">Rock Band</p>
                </div>
              </div>
            </div>

            <div className="glass-panel dark:glass-panel-dark rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "Their team of session musicians added the perfect elements to
                complete our project. Fast, professional, and incredibly
                talented."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <p className="font-medium">Marcus Rivera</p>
                  <p className="text-sm text-gray-500">Producer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-studio-gold text-white hover:bg-studio-gold/90 transition duration-300 shadow-sm hover:shadow-glow"
            >
              Work With Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
