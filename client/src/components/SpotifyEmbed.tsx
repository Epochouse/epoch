import { useState, useEffect } from "react";
import { Play } from "lucide-react";

interface Track {
  id: string;
  title: string;
  artist: string;
  audioUrl: string;
  coverUrl: string;
}

interface SpotifyEmbedProps {
  tracks: Track[];
}

const SpotifyEmbed = ({ tracks }: SpotifyEmbedProps) => {
  if (tracks.length === 0) return null; // Handle empty tracks array

  const track = tracks[0]; // Assuming one track is displayed at a time

  return (
    <div className="spotify-player-wrapper group">
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div
            className="w-14 h-14 rounded overflow-hidden mr-4 flex-shrink-0"
            style={{
              backgroundImage: `url(${track.coverUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div>
            <h4 className="font-medium mb-1 line-clamp-1">{track.title}</h4>
            <p className="text-muted-foreground text-sm">{track.artist}</p>
          </div>
        </div>

        {/* Spotify Embed */}
        <iframe
          src={`https://open.spotify.com/embed/track/${track.audioUrl}?utm_source=generator`}
          width="100%"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifyEmbed;
