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
    content: `Recording vocals like a pro requires attention to detail, the right equipment, and proper technique. Here are 10 essential tips to help you capture professional-quality vocals:\n\n
1. **Choose the Right Microphone**\n
Use a large-diaphragm condenser mic (e.g., Neumann U87, AKG C414) for studio vocals.\n
Dynamic mics (e.g., Shure SM7B) work well for louder or grittier performances.\n
Test different mics to find the best match for the singer’s voice.\n\n

2. **Set Up a Good Recording Environment**\n
Record in a treated space (acoustic panels, bass traps) to minimize reflections.\n
Use a reflection filter or portable vocal booth if recording in an untreated room.\n
Eliminate background noise (fans, HVAC, outside sounds).\n\n

3. **Mic Placement Matters**\n
Position the mic 6–12 inches from the singer (adjust for tone and dynamics).\n
Angle the mic slightly off-axis to reduce plosives and sibilance.\n
Use a pop filter (2–4 inches away) to minimize 'p' and 'b' pops.\n\n

4. **Control Gain Staging**\n
Set the preamp gain so vocals peak around -12dB to -6dB (avoid clipping).\n
Use a high-quality preamp (e.g., Universal Audio, Neve, Focusrite) for warmth and clarity.\n\n

5. **Encourage a Strong Performance**\n
Have the singer warm up (vocal exercises, hydration).\n
Ensure they’re comfortable with lyrics and melody before recording.\n
Record multiple emotional takes for variety.\n\n

6. **Use Headphones (Closed-Back Preferred)**\n
Provide the singer with closed-back headphones to prevent bleed.\n
Keep the headphone mix balanced (enough vocal, but not too loud).\n\n

7. **Double-Track & Comp Harmonies**\n
Record multiple takes of the main vocal and comp the best parts.\n
Add harmonies and ad-libs for depth (pan them slightly for width).\n\n

8. **Monitor & Fix Issues Early**\n
Listen for plosives, sibilance, and pitch issues while recording.\n
Re-record problem sections immediately rather than fixing them later.\n\n

9. **Keep the Singer Engaged**\n
Give positive feedback to boost confidence.\n
Take breaks to prevent vocal fatigue.\n\n

10. **Edit & Process Thoughtfully**\n
Comp the best vocal takes into a seamless performance.\n
Use light pitch correction (e.g., Melodyne, Auto-Tune) if needed.\n
Apply subtle EQ, compression, and reverb during mixing (avoid over-processing).\n\n

**Bonus Tip:**\n
Experiment with different mic positions (e.g., recording slightly off-axis or farther back for a more natural tone).\n
By following these steps, you’ll capture clean, professional vocals that sit perfectly in your mix. 🎤🎶`,
    author: "Itunu Joe",
    date: "Jan 5, 2025",
    readTime: "5 min read",
    category: "Recording",
    coverImage:
      "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    featured: true,
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
