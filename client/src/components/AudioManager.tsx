import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Headphones } from "lucide-react";
import Modal from "./ui/Modal";

interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  genre: string;
  description: string;
  services: string[];
  audioUrl: string;
  coverUrl: string;
  featured: boolean;
}

interface AudioManagerProps {
  tracks: AudioTrack[];
  newTrackTitle: string;
  newTrackArtist: string;
  newTrackUrl: string;
  selectedTrack: string;
  setNewTrackTitle: React.Dispatch<React.SetStateAction<string>>;
  setNewTrackArtist: React.Dispatch<React.SetStateAction<string>>;
  setNewTrackUrl: React.Dispatch<React.SetStateAction<string>>;
  handleAddTrack: () => void;
  handleEditTrack: (id: string) => void;
  handleUpdateTrack: () => void;
  handleDeleteTrack: (id: string) => void;
}

const AudioManager = ({
  tracks,
  handleAddTrack,
  handleUpdateTrack,
  handleDeleteTrack,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>(null);

  const openEditModal = (track: AudioTrack) => {
    setCurrentTrack(track);
    setIsEditModalOpen(true);
  };

  const openAddModal = () => {
    setCurrentTrack({
      id: "",
      title: "",
      artist: "",
      genre: "",
      description: "",
      services: [],
      audioUrl: "",
      coverUrl: "",
      featured: false,
    });
    setIsAddModalOpen(true);
  };

  return (
    <div className="glass-panel dark:glass-panel-dark rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Manage Audio Tracks</h2>
        <Button
          onClick={openAddModal}
          className="bg-studio-gold hover:bg-studio-gold-dark"
        >
          Add New
        </Button>
      </div>

      <div className="space-y-4">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-md shadow-sm"
          >
            <div className="flex items-center gap-3">
              <Headphones className="h-5 w-5 text-studio-gold" />
              <span>
                {track.title} - {track.artist}
              </span>
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={() => openEditModal(track)}
                size="sm"
                variant="outline"
                className="flex items-center gap-1"
              >
                <Pencil className="h-4 w-4" /> Edit
              </Button>
              <Button
                onClick={() => handleDeleteTrack(track.id)}
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

      {/* Modal for Add/Edit */}
      {(isEditModalOpen || isAddModalOpen) && currentTrack && (
        <Modal
          isOpen={isEditModalOpen || isAddModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setIsAddModalOpen(false);
          }}
        >
          <h2 className="text-xl font-bold mb-4">
            {isEditModalOpen ? "Edit Track" : "Add Track"}
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-white"
              placeholder="Enter track title"
              value={currentTrack.title}
              onChange={(e) =>
                setCurrentTrack({ ...currentTrack, title: e.target.value })
              }
            />

            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-white"
              placeholder="Enter artist name"
              value={currentTrack.artist}
              onChange={(e) =>
                setCurrentTrack({ ...currentTrack, artist: e.target.value })
              }
            />

            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-white"
              placeholder="Enter genre"
              value={currentTrack.genre}
              onChange={(e) =>
                setCurrentTrack({ ...currentTrack, genre: e.target.value })
              }
            />

            <textarea
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-white"
              placeholder="Enter description"
              value={currentTrack.description}
              onChange={(e) =>
                setCurrentTrack({
                  ...currentTrack,
                  description: e.target.value,
                })
              }
            />

            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-white"
              placeholder="Enter audio URL"
              value={currentTrack.audioUrl}
              onChange={(e) =>
                setCurrentTrack({ ...currentTrack, audioUrl: e.target.value })
              }
            />

            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-900 dark:text-white"
              placeholder="Enter cover URL"
              value={currentTrack.coverUrl}
              onChange={(e) =>
                setCurrentTrack({ ...currentTrack, coverUrl: e.target.value })
              }
            />

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={currentTrack.featured}
                onChange={(e) =>
                  setCurrentTrack({
                    ...currentTrack,
                    featured: e.target.checked,
                  })
                }
              />
              <span>Featured</span>
            </label>

            <Button
              onClick={() => {
                if (isEditModalOpen) {
                  handleUpdateTrack(currentTrack);
                } else {
                  handleAddTrack(currentTrack);
                }
                setIsEditModalOpen(false);
                setIsAddModalOpen(false);
              }}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              {isEditModalOpen ? "Save Changes" : "Add Track"}
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AudioManager;
