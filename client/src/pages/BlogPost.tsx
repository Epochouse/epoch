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
