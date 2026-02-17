// Profile.jsx
import React, { useEffect, useState } from "react";

const AVATARS = [
 
  "https://i.pinimg.com/736x/f1/8c/8f/f18c8f0a9f6e03b2f2f9a6111e3a8d7e.jpg",
  "https://i.pinimg.com/736x/e7/11/6d/e7116d6f7a9a8a3b1ab2d9a6f7e5a0b1.jpg",
  "https://i.pinimg.com/736x/1e/63/3a/1e633a7a5a6a3f3cbe6d2b0fa2f9c26b.jpg",
  "https://i.pinimg.com/736x/2a/06/8c/2a068c8c51b37c31c2d9b7d0d0d9a601.jpg",
  "https://i.pinimg.com/736x/af/15/2e/af152e4b9f9a87d0b0e3ecb1d1a0d61a.jpg",
  "https://i.pinimg.com/736x/62/50/81/6250814b1e718454f8e20a0d0e8c6d6f.jpg",
  "https://i.pinimg.com/736x/ce/98/14/ce9814b2dbe7d21d195a7f9d6a8e3a37.jpg",
  "https://i.pinimg.com/736x/9c/7f/18/9c7f1836d1dce8b8dcfce10a2b4cf0e2.jpg",
];

export default function Profile() {
  const [form, setForm] = useState({
    profilePic: "",
    displayName: "",
    bio: "",
    genre: "Chill",
    instagram: "",
    snapchat: "",
  });

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem("MUZZ_PROFILE") || "{}");
    setForm({
      profilePic: p.profilePic || AVATARS[0],
      displayName: p.displayName || "",
      bio: p.bio || "",
      genre: p.genre || "Chill",
      instagram: p.instagram || "",
      snapchat: p.snapchat || "",
    });
  }, []);

  const save = () => {
    localStorage.setItem("MUZZ_PROFILE", JSON.stringify(form));
    alert("Profile updated!");
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] p-6 flex justify-center">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Edit Profile</h2>

        
        <div className="flex items-center gap-4 mb-6">
          <img src={form.profilePic} className="w-16 h-16 rounded-full border-2 border-purple-500 object-cover" />
          <div>
            <p className="font-semibold">{form.displayName || "Your Name"}</p>
            <p className="text-sm text-gray-500">{form.instagram || "@instagram"}</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-2">Choose Avatar</p>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mb-6">
          {AVATARS.map((a) => (
            <button
              key={a}
              onClick={() => setForm({ ...form, profilePic: a })}
              className={`rounded-xl overflow-hidden border-2 ${
                form.profilePic === a ? "border-purple-600" : "border-transparent"
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
              className="w-full bg-gray-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              value={form.displayName}
              onChange={(e) => setForm({ ...form, displayName: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Favourite Genre</label>
            <select
              className="w-full bg-gray-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              value={form.genre}
              onChange={(e) => setForm({ ...form, genre: e.target.value })}
            >
              {["Chill", "Party", "Lo-Fi", "Hip-Hop", "EDM", "Pop", "Indie"].map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-600">Bio</label>
            <textarea
              rows={2}
              className="w-full bg-gray-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Instagram</label>
            <input
              className="w-full bg-gray-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              value={form.instagram}
              onChange={(e) => setForm({ ...form, instagram: e.target.value })}
              placeholder="@yourhandle"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Snapchat</label>
            <input
              className="w-full bg-gray-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              value={form.snapchat}
              onChange={(e) => setForm({ ...form, snapchat: e.target.value })}
              placeholder="your.snap.id"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button onClick={save} className="px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
