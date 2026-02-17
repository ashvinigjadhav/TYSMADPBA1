import React from "react";
 

const allSongs = [
  {
    title: "Calm Breeze",
    artist: "Lofi Beats",
    cover: "https://i.pinimg.com/736x/42/f3/06/42f3064a04984474a160da1828ba5ea8.jpg",
  },
  {
    title: "Night Drive",
    artist: "Synthwave Boy",
    cover: "https://i.pinimg.com/736x/63/55/f0/6355f0a937949cd3f5a2f980793546e5.jpg",
  },
  {
    title: "Ocean Eyes",
    artist: "Billie Wave",
    cover: "https://i.pinimg.com/736x/17/08/61/170861ab731b6d7dce5ac1001f04003b.jpg",
  },
  {
    title: "Sunset Walk",
    artist: "Chillhop",
    cover: "https://i.pinimg.com/1200x/d1/61/09/d1610908d62a28f6b057429f85cb53f8.jpg",
  },
  {
    title: "Falling Star",
    artist: "Dreamy",
    cover: "https://i.pinimg.com/736x/6f/9e/f9/6f9ef905cc4c8aba5de36344819ca6a7.jpg",
  },
  {
    title: "Lost Memories",
    artist: "Soft Piano",
    cover: "https://i.pinimg.com/1200x/42/31/d4/4231d4d6b2f74ca437004023c3376f5d.jpg",
  },
];

const topMusicImages = [
  "https://i.pinimg.com/736x/17/b1/be/17b1be2fc796b1cd0207ea53a086781d.jpg",
  "https://i.pinimg.com/736x/b8/1e/76/b81e76bd165ca157c7574e40412af941.jpg",
  "https://i.pinimg.com/736x/df/00/41/df00418267c3fef91fc87be092aa93a4.jpg",
  "https://i.pinimg.com/1200x/bd/ee/77/bdee77c904740ad309307160f42fecfc.jpg",
  "https://i.pinimg.com/736x/32/e0/3b/32e03b621492901d13dfe4c645544d0b.jpg",
];

const newestImages = [
  "https://i.pinimg.com/736x/58/9f/67/589f67a8775acfb204206049b56d9964.jpg",
  "https://i.pinimg.com/736x/58/9f/67/589f67a8775acfb204206049b56d9964.jpg",
  "https://i.pinimg.com/736x/58/9f/67/589f67a8775acfb204206049b56d9964.jpg",
];

const playlistImages = [
  "https://i.pinimg.com/1200x/a5/c4/2e/a5c42e4253b927ec1a89c3c447f0e3f1.jpg",
  "https://i.pinimg.com/736x/50/1b/28/501b2817c355831bff34d8f32779aadd.jpg",
  "https://i.pinimg.com/736x/24/41/82/244182673f486ba9246b192fb516cfee.jpg",
  "https://i.pinimg.com/1200x/f1/ea/0e/f1ea0e5a2583e805928d597a418728ac.jpg",
];

export default function HomePage() {
  const profile = JSON.parse(localStorage.getItem("MUZZ_PROFILE") || "{}");
  const [query, setQuery] = React.useState("");

  const filteredSongs = allSongs.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-gray-900">

       

      <div className="flex">

         
        <aside className="w-64 bg-white shadow-lg p-6 flex flex-col gap-6 border-r border-gray-200">
          <nav className="flex flex-col gap-4 text-gray-700 text-[0.95rem]">
            <a className="font-semibold text-purple-600 text-xl">Home</a>
            <a className="hover:text-purple-600 transition">Artists</a>
            <a className="hover:text-purple-600 transition">Albums</a>
            <a className="hover:text-purple-600 transition">Genres</a>
            <a className="hover:text-purple-600 transition">Playlists</a>
          </nav>

          <div className="mt-4 border-t pt-4 flex flex-col gap-3">
            <a className="hover:text-purple-600 transition">Favourites</a>
            <a className="hover:text-purple-600 transition">Downloads</a>
            <a className="hover:text-purple-600 transition">My Playlists</a>
          </div>
        </aside>

         
        <main className="flex-grow p-6 overflow-y-auto">

          
          <div className="flex justify-between items-center bg-white shadow p-3 rounded-xl mb-6">
            <input
              type="text"
              placeholder="Search music..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-gray-200 px-4 py-2 rounded-lg w-80 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <img
              src={profile.profilePic || "https://placehold.co/100x100?text=User"}
              className="w-12 h-12 rounded-full border-2 border-purple-500 object-cover cursor-pointer"
              alt="Profile"
            />
          </div>

               
          {query && (
            <div className="bg-white rounded-xl shadow p-4 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                Search Results for: "{query}"
              </h3>

              {filteredSongs.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {filteredSongs.map((song, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer"
                    >
                      <img
                        src={song.cover}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                      <div className="ml-4 flex-grow">
                        <p className="font-semibold">{song.title}</p>
                        <p className="text-sm text-gray-500">{song.artist}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No songs found.</p>
              )}
            </div>
          )}

         
          <section>
            <h2 className="text-xl font-semibold mb-3">Top Music</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {topMusicImages.map((img, i) => (
                <div
                  key={i}
                  className="w-56 h-72 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
                >
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </section>

                
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Newest</h2>
            <div className="flex flex-col gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                >
                  <img
                    src={newestImages[i - 1]}
                    className="rounded-lg w-16 h-16 object-cover"
                  />
                  <div className="ml-4 flex-grow">
                    <h4 className="font-semibold">Song {i}</h4>
                    <p className="text-sm text-gray-500">Artist Name</p>
                  </div>
                  <span>3:20</span>
                </div>
              ))}
            </div>
          </section>

           
          <section className="mt-8">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Playlists</h2>
              <button className="text-purple-600 hover:underline">
                View All
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {playlistImages.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow bg-white cursor-pointer hover:shadow-lg transition"
                >
                  <img src={img} className="w-full h-36 object-cover" />
                  <p className="p-3 font-medium">
                    {["Chill", "Party", "Rainy Day", "Driving"][i]}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
