import { Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/pages/Blog";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full glass-panel dark:glass-panel-dark border border-gray-100 dark:border-gray-800">
      <div className="aspect-video overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-studio-gold/10 text-studio-gold">
            {post.category}
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          <Link
            to={`/blog/${post.id}`}
            className="hover:text-studio-blue transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-pretty line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-800 text-sm">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Calendar className="w-4 h-4 mr-1" />
            {post.date}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
