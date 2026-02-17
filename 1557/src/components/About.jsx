import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col flex-grow">
      <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 flex-grow">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Who we are
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to <span className="font-bold text-muzz-red">Muzz</span> — where music meets friends, fun, and good vibes.
            We built this little corner of the internet because we were tired of
            jamming alone. So we made a place where you can{" "}
            <span className="font-semibold">
              listen together, chat together, and vibe together
            </span>{" "}
            — all in real time.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Whether it’s hosting a mini virtual concert, joining a room full of
            your favorite tracks, or discovering an artist with your squad, Muzz
            keeps the energy high and the music loud.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            We believe music is better when shared — so let’s make every beat a
            shared memory.
          </p>

           

         
          <div>
            <Link
  to="/contact"
  className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition transform hover:scale-[1.02]"
>
  Say hi to us
</Link>

          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src="https://i.pinimg.com/1200x/52/67/d4/5267d4279700b5716652fbf756062e4e.jpg"
            alt="Friends listening to music"
            className="rounded-2xl shadow-xl w-full max-w-sm lg:max-w-md object-cover"
          />
        </div>
      </section>

      <section className="text-center py-16 bg-gray-50 border-t border-b border-gray-200">
        <p className="text-2xl font-semibold text-gray-700">
          “Life’s too short for bad playlists.”
        </p>
        <p className="mt-4 text-gray-500 text-sm">— The Muzz Team</p>
      </section>
    </div>
  );
};

export default About;
