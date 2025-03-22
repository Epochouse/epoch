import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

const BlogManager = ({
  blogPosts,
  newBlogTitle,
  selectedBlogPost,
  setNewBlogTitle,
  handleAddBlogPost,
  handleEditBlogPost,
  handleDeleteBlogPost,
  handleUpdateBlogPost,
}) => {
  return (
    <div className="glass-panel dark:glass-panel-dark rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
      <div className="mb-6 space-y-4">
        {selectedBlogPost && (
          <div>
            <div className="flex flex-col mb-4">
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                value={newBlogTitle}
                onChange={(e) => setNewBlogTitle(e.target.value)}
              />
            </div>
            <Button
              onClick={handleUpdateBlogPost}
              variant="default"
              className="w-full bg-studio-gold hover:bg-studio-gold-dark"
            >
              Update Blog Post
            </Button>
          </div>
        )}
      </div>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-md shadow-sm"
          >
            <span>{post.title}</span>
            <div className="flex space-x-2">
              <Button
                onClick={() => handleEditBlogPost(post.id)}
                size="sm"
                variant="outline"
                className="flex items-center gap-1"
              >
                <Pencil className="h-4 w-4" />
                Edit
              </Button>
              <Button
                onClick={() => handleDeleteBlogPost(post.id)}
                size="sm"
                variant="destructive"
                className="flex items-center gap-1"
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="flex flex-col mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            placeholder="Enter blog post title"
            value={newBlogTitle}
            onChange={(e) => setNewBlogTitle(e.target.value)}
          />
        </div>
        <Button
          onClick={handleAddBlogPost}
          variant="default"
          className="w-full bg-studio-gold hover:bg-studio-gold-dark"
        >
          Add New Blog Post
        </Button>
      </div>
    </div>
  );
};

export default BlogManager;
