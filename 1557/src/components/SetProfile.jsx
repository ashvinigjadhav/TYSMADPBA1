// SetProfile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AVATARS = [
  "https://i.pinimg.com/736x/00/9f/c0/009fc09a302e18d5cb0c1ecc75d728e5.jpg",
  "https://i.pinimg.com/736x/6e/8f/9d/6e8f9df9a785c7867fc638ee0e334707.jpg",
  "https://i.pinimg.com/1200x/ed/7d/dd/ed7ddd6aaa95850c4c7105a656a10edc.jpg",
  "https://i.pinimg.com/736x/d4/3c/19/d43c19b9fdb4f555a7939dafe0f7fc48.jpg",
   
];

export default function SetProfile() {
  const nav = useNavigate();
  const [selected, setSelected] = useState(AVATARS[0]);
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [genre, setGenre] = useState("Chill");
  const [instagram, setInstagram] = useState("");
  const [snapchat, setSnapchat] = useState("");

  const saveProfile = () => {
  if (!displayName.trim()) return;

  const profile = {
    profilePic: selected,
    displayName: displayName.trim(),
    bio,
    genre,
    instagram,
    snapchat,
  };

  
  localStorage.setItem("MUZZ_PROFILE", JSON.stringify(profile));

   
  nav("/home");
};

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Set Your Profile</h2>

         
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mb-6">
          {AVATARS.map((a) => (
            <button
              key={a}
              onClick={() => setSelected(a)}
              className={`rounded-xl overflow-hidden border-2 ${
                selected === a ? "border-purple-600" : "border-transparent"
              } hover:border-purple-400 transition`}
            >
              <img src={a} className="w-full h-20 object-cover" />
            </button>
          ))}
        </div>

         
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Display Name</label>
            <input
              className="w-full bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Favourite Genre</label>
            <select
              className="w-full bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              {["Chill", "Party", "Lo-Fi", "Hip-Hop", "EDM", "Pop", "Indie"].map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-600">Bio</label>
            <textarea
              className="w-full bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={2}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Say something about your music taste…"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Instagram</label>
            <input
              className="w-full bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder="@yourhandle"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Snapchat</label>
            <input
              className="w-full bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={snapchat}
              onChange={(e) => setSnapchat(e.target.value)}
              placeholder="your.snap.id"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-3 justify-end">
          <button
            onClick={saveProfile}
            className="px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
            disabled={!displayName}
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
