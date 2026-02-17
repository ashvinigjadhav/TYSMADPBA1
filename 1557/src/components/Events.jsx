import React from "react";

export default function Events() {
  const eventList = [
    {
      title: "DJ Night Party",
      date: "Nov 19",
      img: "https://stories.freepiklabs.com/api/vectors/music-festival/bro/render?color=&background=complete",
    },
    {
      title: "The Mission",
      date: "Nov 19",
      img: "https://stories.freepiklabs.com/api/vectors/dancing/rafiki/render?color=&background=complete",
    },
    {
      title: "Planet Ibiza",
      date: "Nov 19",
      img: "https://stories.freepiklabs.com/api/vectors/recording/bro/render?color=&background=complete",
    },
  ];

  return (
    <section className="py-20 bg-[#0d0d0d] text-white text-center min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[4px] mb-12 text-red-500">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {eventList.map((event, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden bg-[#1e1e1e] shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-sm"
            >
              <div className="relative group">
                <img
                  src={event.img}
                  alt={event.title}
                  className="rounded-2xl w-full h-[280px] object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-md text-sm font-semibold self-start">
                    {event.date}
                  </span>
                  <h5 className="text-lg font-semibold mt-3 mb-1">
                    {event.title}
                  </h5>
                  <p className="text-sm text-gray-300">
                    Don’t miss the night vibes
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
