import React, { useEffect, useState } from "react";

const ROOMS_KEY = "MUZZ_ROOMS";

export default function Rooms() {
  const profile = JSON.parse(localStorage.getItem("MUZZ_PROFILE") || "{}");
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [friend, setFriend] = useState("");

  useEffect(() => {
    const r = JSON.parse(localStorage.getItem(ROOMS_KEY) || "[]");
    setRooms(r);
  }, []);

  const saveRooms = (next) => {
    setRooms(next);
    localStorage.setItem(ROOMS_KEY, JSON.stringify(next));
  };

  const createRoom = () => {
    if (!roomName) return;
    const newRoom = {
      id: crypto.randomUUID(),
      name: roomName,
      owner: profile.displayName || "You",
      members: [{ name: profile.displayName || "You", status: "owner" }],
      requests: [],
    };
    saveRooms([newRoom, ...rooms]);
    setRoomName("");
  };

  const addFriend = (roomId) => {
    if (!friend) return;

    const next = rooms.map((r) =>
      r.id === roomId
        ? {
            ...r,
            requests: [...r.requests, { name: friend, status: "pending" }],
          }
        : r
    );

    saveRooms(next);
    setFriend("");
  };

  const approve = (roomId, name) => {
    const next = rooms.map((r) =>
      r.id === roomId
        ? {
            ...r,
            requests: r.requests.filter((x) => x.name !== name),
            members: [...r.members, { name, status: "member" }],
          }
        : r
    );

    saveRooms(next);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] p-6">
      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-2xl shadow p-4 mb-6 flex items-center gap-4">
          <img
            src={profile.profilePic || "https://placehold.co/100x100?text=User"}
            className="w-14 h-14 rounded-full border-2 border-purple-500 object-cover"
          />
          <div>
            <p className="font-semibold">{profile.displayName || "Your Name"}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 mb-6">
          <h3 className="font-semibold mb-3">Create a Room</h3>
          <div className="flex gap-2">
            <input
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Room name"
              className="flex-grow bg-gray-100 rounded-lg px-3 py-2"
            />
            <button
              onClick={createRoom}
              className="px-4 py-2 rounded-lg bg-purple-600 text-white"
            >
              Create
            </button>
          </div>
        </div>

        {rooms.map((room) => (
          <div key={room.id} className="bg-white rounded-2xl shadow p-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold">{room.name}</h4>
                <p className="text-sm text-gray-500">Owner: {room.owner}</p>
              </div>

              <div className="flex gap-2">
                <input
                  value={friend}
                  onChange={(e) => setFriend(e.target.value)}
                  placeholder="Friend name"
                  className="bg-gray-100 rounded-lg px-3 py-2"
                />
                <button
                  onClick={() => addFriend(room.id)}
                  className="px-3 py-2 border border-purple-600 text-purple-600 rounded-lg"
                >
                  Invite
                </button>
              </div>
            </div>

            <div className="mt-2 flex gap-2 flex-wrap">
              {room.members.map((m, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {m.name} {m.status === "owner" && "👑"}
                </span>
              ))}
            </div>

            {room.requests.length > 0 && (
              <div className="mt-3">
                <p className="font-semibold text-sm">Requests</p>
                {room.requests.map((rq, i) => (
                  <div key={i} className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full">
                    <span className="text-sm">{rq.name}</span>
                    <button
                      className="bg-green-600 text-white px-2 py-1 rounded text-xs"
                      onClick={() => approve(room.id, rq.name)}
                    >
                      Approve
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {rooms.length === 0 && (
          <p className="text-center text-gray-500">No rooms yet...</p>
        )}

      </div>
    </div>
  );
}
