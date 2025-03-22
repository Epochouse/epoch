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
      content: "Full content of the article would go here...",
      author: "Sarah Johnson",
      date: "June 15, 2023",
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
      content: "Full content of the article would go here...",
      author: "Michael Rivera",
      date: "May 28, 2023",
      readTime: "8 min read",
      category: "Mixing",
      coverImage:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "3",
      title: "The Evolution of Music Production Software",
      excerpt:
        "A look at how digital audio workstations have transformed the music industry over the past decades.",
      content: "Full content of the article would go here...",
      author: "David Chen",
      date: "April 10, 2023",
      readTime: "6 min read",
      category: "Technology",
      coverImage:
        "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "4",
      title: "Working with Session Musicians: A Producer's Guide",
      excerpt:
        "How to effectively communicate and collaborate with session musicians to elevate your productions.",
      content: "Full content of the article would go here...",
      author: "Emily Rodriguez",
      date: "March 22, 2023",
      readTime: "7 min read",
      category: "Production",
      coverImage:
        "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
