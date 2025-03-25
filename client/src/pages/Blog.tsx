import { useEffect, useRef, useState } from "react";
import { Search, Calendar, User, Tag, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  featured?: boolean;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const headerRef = useRef<HTMLDivElement>(null);
  const blogSectionRef = useRef<HTMLDivElement>(null);

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "10 Tips for Recording Vocals Like a Pro",
      excerpt:
        "Learn the secrets to capturing studio-quality vocal recordings with these essential techniques.",
      content:
        "Recording vocals like a pro requires attention to detail, the right equipment, and proper technique. Here are 10 essential tips to help you capture professional-quality vocals: 1. Choose the Right Microphone Use a large-diaphragm condenser mic (e.g., Neumann U87, AKG C414) for studio vocals. Dynamic mics (e.g., Shure SM7B) work well for louder or grittier performances. Test different mics to find the best match for the singer’s voice. 2. Set Up a Good Recording Environment Record in a treated space (acoustic panels, bass traps) to minimize reflections. Use a reflection filter or portable vocal booth if recording in an untreated room. Eliminate background noise (fans, HVAC, outside sounds). 3. Mic Placement Matters Position the mic 6–12 inches from the singer (adjust for tone and dynamics). Angle the mic slightly off-axis to reduce plosives and sibilance. Use a pop filter (2–4 inches away) to minimize `p` and `b` pops. 4. Control Gain Staging Set the preamp gain so vocals peak around -12dB to -6dB (avoid clipping). Use a high-quality preamp (e.g., Universal Audio, Neve, Focusrite) for warmth and clarity. 5. Encourage a Strong Performance Have the singer warm up (vocal exercises, hydration). Ensure they’re comfortable with lyrics and melody before recording. Record multiple emotional takes for variety. 6. Use Headphones (Closed-Back Preferred) Provide the singer with closed-back headphones to prevent bleed. Keep the headphone mix balanced (enough vocal, but not too loud). 7. Double-Track & Comp Harmonies Record multiple takes of the main vocal and comp the best parts. Add harmonies and ad-libs for depth (pan them slightly for width). 8. Monitor & Fix Issues Early Listen for plosives, sibilance, and pitch issues while recording. Re-record problem sections immediately rather than fixing them later. 9. Keep the Singer Engaged Give positive feedback to boost confidence. Take breaks to prevent vocal fatigue. 10. Edit & Process Thoughtfully Comp the best vocal takes into a seamless performance. Use light pitch correction (e.g., Melodyne, Auto-Tune) if needed. Apply subtle EQ, compression, and reverb during mixing (avoid over-processing). Bonus Tip: Experiment with different mic positions (e.g., recording slightly off-axis or farther back for a more natural tone). By following these steps, you’ll capture clean, professional vocals that sit perfectly in your mix. 🎤🎶",
      author: "Itunu Joe",
      date: "Jan 5, 2025",
      readTime: "5 min read",
      category: "Recording",
      coverImage:
        "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      featured: true,
    },
    {
      id: "2",
      title: "Understanding Audio Compression",
      excerpt:
        "Demystifying one of the most powerful yet misunderstood tools in audio production.",
      content: `
      Audio compression is one of the most essential tools in music production and sound engineering. It helps control the dynamic range of audio signals by reducing the volume of loud sounds and amplifying quieter ones. While often perceived as a complex tool, understanding its components and applications can significantly improve the quality of your mixes.

      **What is Audio Compression?**  
      Compression reduces the dynamic range between the loudest and quietest parts of an audio signal. This makes tracks sound more balanced and polished, ensuring no part of the sound is too loud or too soft.

      **Key Parameters of a Compressor:**  
      - **Threshold:** The level above which the compressor starts to reduce the signal's volume.  
      - **Ratio:** Determines how much the sound is reduced once it crosses the threshold.  
      - **Attack:** Controls how quickly the compressor reacts to sound exceeding the threshold.  
      - **Release:** Determines how long the compressor continues to reduce the volume.  
      - **Makeup Gain:** Restores volume after compression.

      **Why Use Compression?**  
      - Control Peaks  
      - Add Punch and Presence  
      - Glue Tracks Together  

      Mastering the art of compression takes time, but with practice, it becomes a powerful tool in your mixing arsenal.
    `,
      author: "Itunu Joe",
      date: "Feb 2, 2025",
      readTime: "8 min read",
      category: "Mixing",
      coverImage:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "3",
      title: "The Evolution of Music Production Software",
      excerpt:
        "A look at how digital audio workstations have transformed the music industry over the past decades.",
      content: `
      The world of music production has come a long way from reel-to-reel tape machines and analog consoles. Today, digital audio workstations (DAWs) are at the heart of modern music creation, offering limitless possibilities to producers, engineers, and artists.

      **The Dawn of DAWs**  
      In the late 1970s and early 80s, digital recording systems began to emerge. Early innovators introduced digital audio editing, but the hardware was expensive and inaccessible to most musicians.

      **The Rise of Popular DAWs:**  
      - **Pro Tools (1989)**: A standard in professional studios for recording, mixing, and mastering.  
      - **Cubase (1989)**: Known for its MIDI sequencing capabilities, used in electronic and orchestral music.  
      - **FL Studio (1997)**: Popular in EDM with an intuitive interface and extensive sound library.  
      - **Ableton Live (2001)**: Revolutionized live performances with real-time arrangement and looping.

      **Key Features That Changed Music Production:**  
      - Virtual Instruments and Plugins  
      - MIDI Sequencing  
      - Sampling and Looping  
      - Collaboration Tools  

      As AI-powered plugins and immersive audio formats emerge, music production will continue to break creative boundaries.
    `,
      author: "David Chen",
      date: "Feb 10, 2025",
      readTime: "6 min read",
      category: "Technology",
      coverImage:
        "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "4",
      title: "Working with Session Musicians: A Producer's Guide",
      excerpt:
        "How to effectively communicate and collaborate with session musicians to elevate your productions.",
      content: `
      Session musicians are an invaluable asset to music producers. They bring their unique talents and experience to recordings, adding authenticity and life to a project. Working effectively with session musicians requires clear communication, preparation, and an understanding of their creative process.

      **Preparing for a Session:**  
      - Know your vision and have a clear idea of the sound and style you want.  
      - Provide references and examples to help the musician understand your direction.  
      - Share detailed charts, lead sheets, or rough demos.

      **Communicating Effectively:**  
      - Be Clear and Respectful: Offer constructive feedback and articulate your expectations.  
      - Encourage Creativity: Allow musicians to add their own ideas.  
      - Provide Context: Explain how their performance will fit in the final track.

      **During the Session:**  
      - Start with a relaxed environment.  
      - Record multiple takes for variety.  
      - Take notes for efficient editing.

      **Post-Session Tips:**  
      - Express Gratitude: A simple thank-you or a shout-out goes a long way.  
      - Prompt Payment: Ensure fair and timely compensation.  
      - Provide Feedback: Help musicians grow through constructive feedback.

      Working with session musicians can add professionalism and creativity to your project, leading to truly exceptional results.
    `,
      author: "Itunu Joe",
      date: "March 14, 2025",
      readTime: "7 min read",
      category: "Production",
      coverImage:
        "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const categories = [
    "All",
    "Recording",
    "Mixing",
    "Mastering",
    "Production",
    "Technology",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

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

    if (headerRef.current) observer.observe(headerRef.current);
    if (blogSectionRef.current) observer.observe(blogSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-studio-dark">
      <Helmet>
        <title>Blog | Epochouse Studio</title>
        <meta
          name="description"
          content="Explore the latest music production tips, industry insights, artist stories, and behind-the-scenes moments from Epochouse Studio. Stay inspired and informed with our blog."
        />
      </Helmet>

      <Navbar />

      <div
        ref={headerRef}
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center opacity-0"
      >
        <div className="flex justify-center">
          <span className="px-3 py-1 text-xs font-medium bg-studio-gold/10 text-studio-gold rounded-full mb-4">
            Our Blog
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Music Production Insights
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
          Stay updated with the latest trends, tips, and techniques in the world
          of music production.
        </p>
      </div>

      <div
        ref={blogSectionRef}
        className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto opacity-0 space-y-12 pb-20"
      >
        {/* Featured Post */}
        {featuredPost && (
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <div className="absolute inset-0">
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            </div>
            <div className="relative p-8 sm:p-12 flex flex-col h-full min-h-[400px] justify-end">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-studio-gold text-white mb-3 w-max">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {featuredPost.title}
              </h2>
              <p className="text-gray-200 mb-6 max-w-3xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-gray-200 text-sm">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {featuredPost.readTime}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-studio-gold text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)
          ) : (
            <div className="col-span-full py-12 text-center">
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 text-pretty">
            Get the latest articles, tutorials, and industry insights delivered
            straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <button className="px-6 py-2 rounded-md bg-studio-gold text-white hover:bg-studio-gold/90 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
