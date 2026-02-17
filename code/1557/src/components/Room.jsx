import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Room() {
  const { id } = useParams();
  const roomName = id || "General";

  const [searchQuery, setSearchQuery] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks = [
    { title: "Song 1 (Playing)", artist: "Artist Name", duration: "3:45" },
    { title: "Song 2", artist: "Another Artist", duration: "2:50" },
    { title: "Morning Breeze", artist: "Lo-Fi Beats", duration: "3:10" },
    { title: "Ocean Eyes", artist: "Billie Wave", duration: "4:00" },
  ];

  const filteredTracks = tracks.filter(
    (track) =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <div className="room-page-container h-screen w-screen flex flex-col bg-[#f8f9fb] overflow-hidden">

      
      <div className="bg-white rounded-xl p-4 shadow m-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search tracks..."
          className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg w-80"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
         
      </div>

      <div className="main-app-container grid grid-cols-[1fr_280px] gap-4 px-4 overflow-y-auto flex-grow">

        
        <div className="player-content-area">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">
            Room: {roomName}
          </h2>

          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="music-card bg-white rounded-xl p-4 shadow relative">
              <p className="text-gray-500 text-sm">28 Tracks</p>
              <h4 className="font-semibold text-lg">Release Radar</h4>
              <img
                src="https://stories.freepiklabs.com/api/vectors/edit-photo/cuate/render"
                className="absolute bottom-0 right-0 w-32 opacity-70"
              />
            </div>

            <div className="music-card bg-white rounded-xl p-4 shadow relative">
              <p className="text-gray-500 text-sm">12 Tracks</p>
              <h4 className="font-semibold text-lg">Daily Mix</h4>
              <img
                src="https://stories.freepiklabs.com/api/vectors/profile-pic/bro/render"
                className="absolute bottom-0 right-0 w-32 opacity-70"
              />
            </div>
          </div>

         
          <div className="grid grid-cols-2 gap-4">

            
            <div className="bg-white p-4 rounded-xl shadow">
              <h4 className="font-semibold mb-3">Genres</h4>
              <div className="flex flex-wrap gap-2">
                {["Classic", "House", "Minimal", "Hip-Hop", "Chillout", "Country", "Techno"].map((g) => (
                  <button key={g} className="px-3 py-1 bg-gray-100 rounded-full">
                    {g}
                  </button>
                ))}
              </div>
            </div>

             
            <div className="bg-white p-4 rounded-xl shadow">
              <h4 className="font-semibold mb-3">Playlist / Queue</h4>
              <ul>
                {filteredTracks.map((track, index) => (
                  <li key={index} className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
                    <img
                      src="https://stories.freepiklabs.com/api/vectors/profile-pic/bro/render"
                      className="w-12 h-12 rounded-lg"
                    />
                    <div className="ml-3 flex-grow">
                      <p className="font-medium">{track.title}</p>
                      <p className="text-sm text-gray-500">{track.artist}</p>
                    </div>
                    <span className="text-sm text-gray-500">{track.duration}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

         
        <div className="friends-panel bg-white p-4 rounded-xl shadow sticky top-4">
          <h4 className="font-semibold mb-3">Friends Activity</h4>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
            <img
              src="https://stories.freepiklabs.com/api/vectors/profile-pic/rafiki/render"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">Amber Holmes</p>
              <p className="text-sm text-gray-500">Dutch Kiss - Inner Mix</p>
            </div>
          </div>
        </div>

      </div>

       
      <div className="shared-player-bar bg-white/80 backdrop-blur-md h-20 flex items-center justify-between px-6 border-t shadow">
        <div className="flex text-xl gap-4">
          <button>◀</button>
          <button onClick={togglePlayPause}>
            {isPlaying ? "⏸" : "▶️"}
          </button>
          <button>▶</button>
        </div>
      </div>
    </div>
  );
}
