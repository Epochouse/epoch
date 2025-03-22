import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";
import Modal from "./ui/Modal";

interface PortfolioVideo {
  id: string;
  title: string;
  videoId: string;
  artist: string;
  genre: string;
  description: string;
  featured: boolean;
}

interface PortfolioManagerProps {
  videos: PortfolioVideo[];
  newVideoTitle: string;
  newVideoId: string;
  selectedVideo: string;
  setNewVideoTitle: Dispatch<SetStateAction<string>>;
  setNewVideoId: Dispatch<SetStateAction<string>>;
  handleAddVideo: (video: PortfolioVideo) => void;
  handleEditVideo: (id: string) => void;
  handleDeleteVideo: (id: string) => void;
  handleUpdateVideo: (video: PortfolioVideo) => void;
}

const PortfolioManager: React.FC<PortfolioManagerProps> = ({
  videos,
  newVideoTitle,
  newVideoId,
  selectedVideo,
  setNewVideoTitle,
  setNewVideoId,
  handleAddVideo,
  handleEditVideo,
  handleDeleteVideo,
  handleUpdateVideo,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<PortfolioVideo | null>(null);

  const openEditModal = (video: PortfolioVideo) => {
    setCurrentVideo(video);
    setIsEditModalOpen(true);
  };

  const openAddModal = () => {
    setCurrentVideo({
      id: "",
      title: "",
      videoId: "",
      artist: "",
      genre: "",
      description: "",
      featured: false,
    });
    setIsAddModalOpen(true);
  };

  return (
    <div className="glass-panel h-full dark:glass-panel-dark rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Manage Videos</h2>

      <div>
        <h3 className="text-lg font-semibold mb-4">YouTube Videos</h3>
        <div className="space-y-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-md shadow-sm"
            >
              <span className="text-gray-900 dark:text-white">
                {video.title}
              </span>
              <div className="flex space-x-2">
                <Button
                  onClick={() => openEditModal(video)}
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <Pencil className="h-4 w-4" />
                  Edit
                </Button>
                <Button
                  onClick={() => handleDeleteVideo(video.id)}
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

        <Button
          onClick={openAddModal}
          className="w-full bg-studio-gold hover:bg-studio-gold-dark text-white px-4 py-2 rounded-md mt-6"
        >
          Add Video
        </Button>
      </div>

      {(isEditModalOpen || isAddModalOpen) && currentVideo && (
        <Modal
          isOpen={isEditModalOpen || isAddModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setIsAddModalOpen(false);
          }}
        >
          <h2 className="text-xl font-bold mb-4">
            {isEditModalOpen ? "Edit Video" : "Add Video"}
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-white"
              placeholder="Enter video title"
              value={currentVideo.title}
              onChange={(e) =>
                setCurrentVideo({ ...currentVideo, title: e.target.value })
              }
            />
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-white"
              placeholder="Enter video ID"
              value={currentVideo.videoId}
              onChange={(e) =>
                setCurrentVideo({ ...currentVideo, videoId: e.target.value })
              }
            />
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-white"
              placeholder="Enter artist name"
              value={currentVideo.artist}
              onChange={(e) =>
                setCurrentVideo({ ...currentVideo, artist: e.target.value })
              }
            />
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-white"
              placeholder="Enter genre"
              value={currentVideo.genre}
              onChange={(e) =>
                setCurrentVideo({ ...currentVideo, genre: e.target.value })
              }
            />
            <textarea
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-white"
              placeholder="Enter description"
              value={currentVideo.description}
              onChange={(e) =>
                setCurrentVideo({
                  ...currentVideo,
                  description: e.target.value,
                })
              }
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={currentVideo.featured}
                onChange={(e) =>
                  setCurrentVideo({
                    ...currentVideo,
                    featured: e.target.checked,
                  })
                }
              />
              <span>Featured</span>
            </label>
            <Button
              onClick={() => {
                if (isEditModalOpen) {
                  handleUpdateVideo(currentVideo);
                } else {
                  handleAddVideo(currentVideo);
                }
                setIsEditModalOpen(false);
                setIsAddModalOpen(false);
              }}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              {isEditModalOpen ? "Save Changes" : "Add Video"}
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PortfolioManager;
