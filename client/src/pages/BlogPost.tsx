import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  Calendar,
  User,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogPost as BlogPostType } from "./Blog";

const sampleBlogPosts: BlogPostType[] = [
  {
    id: "1",
    title: "10 Tips for Recording Vocals Like a Pro",
    excerpt:
      "Learn the secrets to capturing studio-quality vocal recordings with these essential techniques.",
    content: `
      <p>Recording vocals is an art form that combines technical expertise with creative finesse. Whether you're a seasoned producer or just starting out, these ten tips will help you achieve professional-quality vocal recordings every time.</p>
      
      <h2>1. Start with the Room</h2>
      <p>Your recording environment is just as important as your microphone or preamp. Treat your space with acoustic panels to minimize reflections and standing waves. If a fully treated room isn't available, try creating a makeshift vocal booth using blankets, mattresses, or professional portable solutions.</p>
      
      <h2>2. Choose the Right Microphone</h2>
      <p>Different voices work better with different microphones. Large-diaphragm condensers are the studio standard for vocals, but don't overlook dynamics or ribbons for certain voices or styles. Test several options to find what complements your vocalist's unique timbre.</p>
      
      <h2>3. Proper Microphone Placement</h2>
      <p>Position the microphone 6-8 inches from the singer, slightly above mouth level and angled down. Use a pop filter placed 3-4 inches from the mic to reduce plosives. Experiment with distance—closer for intimacy, further for room ambience.</p>
      
      <h2>4. Set Appropriate Gain Levels</h2>
      <p>Record at an average level of -18dB to -12dB to leave headroom for dynamics and prevent clipping. Digital recording doesn't benefit from "hot" signals the way analog tape did.</p>
      
      <h2>5. Monitor Mix for the Vocalist</h2>
      <p>Create a comfortable headphone mix for your vocalist with light reverb and appropriate volume. Their performance will improve dramatically when they can hear themselves clearly.</p>
      
      <h2>6. Capture Multiple Takes</h2>
      <p>Always record more takes than you think you'll need. This gives you options during editing and allows you to compile the best performance from multiple attempts.</p>
      
      <h2>7. Maintain Consistent Distance</h2>
      <p>Train your vocalist to maintain a consistent distance from the microphone throughout the session. For dynamic sections, they should back away slightly rather than changing their volume dramatically.</p>
      
      <h2>8. Stay Hydrated and Rested</h2>
      <p>Remind vocalists to drink water throughout the session and take breaks when needed. Vocal fatigue is real and can significantly impact recording quality.</p>
      
      <h2>9. Create the Right Atmosphere</h2>
      <p>Adjust lighting, temperature, and overall studio vibe to help your vocalist feel comfortable and inspired. The psychological aspects of recording are just as important as the technical ones.</p>
      
      <h2>10. Keep the Signal Chain Simple</h2>
      <p>A quality microphone, preamp, and converter are all you need for tracking. Save the heavy processing for mixing—a clean recording gives you more options later.</p>
      
      <p>Remember that vocal recording is ultimately about capturing emotion and expression. Technical perfection means nothing if the performance lacks feeling. Focus on creating an environment where your vocalist can deliver their best performance, and the technical aspects will fall into place.</p>
    `,
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
    content: "Full content would go here...",
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
    content: "Full content would go here...",
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
    content: "Full content would go here...",
    author: "Emily Rodriguez",
    date: "March 22, 2023",
    readTime: "7 min read",
    category: "Production",
    coverImage:
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Find the post by id
    const foundPost = sampleBlogPosts.find((post) => post.id === id);
    if (foundPost) {
      setPost(foundPost);
    }

    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-studio-dark flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h2 className="text-2xl font-bold">Post not found</h2>
          <Link
            to="/blog"
            className="text-studio-gold hover:underline mt-4 inline-block"
          >
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-studio-dark">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center text-studio-gold hover:underline mb-8"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to all articles
        </Link>

        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-studio-gold text-white">
              {post.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar className="w-3 h-3 mr-1" />
                  {post.date}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400 mr-1">
                Share:
              </span>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div
          ref={contentRef}
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related Posts (Placeholder) */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleBlogPosts
              .filter((relatedPost) => relatedPost.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="aspect-video rounded-lg overflow-hidden mb-3">
                    <img
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-medium line-clamp-2 group-hover:text-studio-blue transition-colors">
                    {relatedPost.title}
                  </h4>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
