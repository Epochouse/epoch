import { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Video } from "lucide-react";

const initialVideos = [
  {
    id: "v1",
    videoId: "9bZkp7q19f0",
    title: "Live Concert Highlights",
    artist: "Global Stadium Tour",
    genre: "Pop",
    description: "Highlights from the sold-out stadium tour.",
    featured: true,
  },
  // Add more initial videos if needed
];

export default function PortfolioAdmin() {
  const [videos, setVideos] = useState(initialVideos);
  const [newVideo, setNewVideo] = useState({
    title: "",
    videoId: "",
    artist: "",
    genre: "",
    description: "",
    featured: false,
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVideo({ ...newVideo, [name]: value });
  };

  const handleAddOrUpdateVideo = () => {
    if (editingId) {
      setVideos(
        videos.map((video) =>
          video.id === editingId ? { ...newVideo, id: editingId } : video
        )
      );
      setEditingId(null);
    } else {
      setVideos([...videos, { ...newVideo, id: `v${Date.now()}` }]);
    }
    setNewVideo({
      title: "",
      videoId: "",
      artist: "",
      genre: "",
      description: "",
      featured: false,
    });
  };

  const handleEditVideo = (id) => {
    const video = videos.find((v) => v.id === id);
    setNewVideo(video);
    setEditingId(id);
  };

  const handleDeleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  return (
    <TabsContent value="portfolio">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel dark:glass-panel-dark rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Manage Video Projects</h2>
            <Button
              onClick={() => setEditingId(null)}
              variant="default"
              className="bg-studio-gold hover:bg-studio-gold-dark"
            >
              Add New
            </Button>
          </div>
          <div className="space-y-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-md shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 text-studio-gold" />
                  <span>
                    {video.title} ({video.artist})
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => handleEditVideo(video.id)}
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1"
                  >
                    <Pencil className="h-4 w-4" /> Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteVideo(video.id)}
                    size="sm"
                    variant="destructive"
                    className="flex items-center gap-1"
                  >
                    <Trash2 className="h-4 w-4" /> Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-4">
            {Object.keys(newVideo).map((key) => (
              <div key={key} className="flex flex-col">
                <label className="block text-sm font-medium mb-1">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type={key === "featured" ? "checkbox" : "text"}
                  name={key}
                  className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                  placeholder={`Enter ${key}`}
                  value={newVideo[key]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <Button
              onClick={handleAddOrUpdateVideo}
              variant="default"
              className="w-full bg-studio-gold hover:bg-studio-gold-dark"
            >
              {editingId ? "Update" : "Add"} Video
            </Button>
          </div>
        </div>
      </div>
    </TabsContent>
  );
}
