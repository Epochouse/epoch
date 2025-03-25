import { useState, useEffect } from "react";
import { Play } from "lucide-react";

interface Track {
  id: string;
  audioUrl: string;
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
        {/* Spotify Embed */}
        <iframe
          src={`https://open.spotify.com/embed/track/${track.audioUrl}?utm_source=generator`}
          width="100%"
          height="250"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifyEmbed;
