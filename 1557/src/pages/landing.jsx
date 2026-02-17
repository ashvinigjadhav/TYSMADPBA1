import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      
    
      <section className="flex flex-col lg:flex-row items-center justify-between flex-1 px-6 sm:px-12 lg:px-20 py-16">
        
       
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Music for everyone.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
            Stream your favorite artists, discover new tracks, and feel every beat — anywhere, anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
           <Link
  to="/login"
  className="bg-black text-white font-semibold py-2 px-4 rounded-lg text-sm hover:bg-gray-800 transition duration-300 w-fit mx-auto lg:mx-0"
>
  Try it free
</Link>

            <a
              href="#features"
              className="text-gray-800 font-medium text-sm sm:text-base hover:text-black underline-offset-4 hover:underline transition"
            >
              Learn more
            </a>
          </div>
        </div>
        
        
        <div className="w-full lg:w-1/2 relative flex justify-center items-center scale-[0.9] sm:scale-100 min-h-[350px] lg:min-h-[400px] mt-8 lg:mt-0"> 

         
          <img
            src="https://stories.freepiklabs.com/api/vectors/recording/amico/render?color=&background=complete"
            alt="Artist Card Left"
            className="absolute left-0 -bottom-8 w-24 sm:w-36 md:w-48 rounded-xl shadow-lg rotate-[-5deg] hover:rotate-0 transition-all duration-300 z-10"
          />

          
          <img
            src="https://stories.freepiklabs.com/api/vectors/music/rafiki/render?color=&background=complete&hide="
            alt="Artist Illustration"
            className="w-48 sm:w-64 md:w-80 lg:w-[22rem] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 z-20"
          />

           
          <img
            src="https://stories.freepiklabs.com/api/vectors/recording/rafiki/render?color=&background=complete&hide="
            alt="Artist Card Right"
            className="absolute right-0 -top-8 w-24 sm:w-36 md:w-48 rounded-xl shadow-lg rotate-[5deg] hover:rotate-0 transition-all duration-300 z-10"
          />

          
          <div className="absolute -bottom-20 -left-10 sm:-bottom-24 sm:-left-20 bg-white shadow-2xl rounded-lg p-3 w-40 sm:w-60 lg:w-80 rotate-2 hover:rotate-0 transition-transform duration-300 z-30">
            <img
              src="https://stories.freepiklabs.com/api/vectors/recording/amico/render?color=&background=complete"
              alt="Artist Card detail"
              className="rounded-md mb-2"
            />
            <h3 className="font-semibold text-sm sm:text-lg text-gray-900">
              Today's Country
            </h3>
            <p className="text-xs text-gray-500 mb-1">Apple Music Country</p>
            <small className="text-[10px] sm:text-xs text-gray-600">
              Discover all the ways you can showcase content on Music.
            </small>
          </div>
        </div>
      </section> 

      
      <section id="features" className="px-6 sm:px-12 lg:px-24 py-16 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Why You'll Love Muzz
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {[
            { title: "Ad-Free Listening", desc: "Enjoy music without interruptions — focus on your vibe." },
            { title: "Offline Mode", desc: "Download and play your tracks anytime, anywhere." },
            { title: "Personalized Playlists", desc: "AI-curated mixes that match your taste perfectly." },
            { title: "High-Quality Audio", desc: "Crystal-clear sound that brings every note to life." },
            { title: "Multi-Device Sync", desc: "Start a song on mobile, continue on desktop instantly." },
            { title: "Discover Artists", desc: "Find fresh new voices and explore genres from all over." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-md transition duration-300"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
 
       
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          What Our Listeners Say
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8 px-6 sm:px-12">
          {[
            { name: "Aarav Mehta", text: "I use Muzz every day — it’s the perfect mix of Spotify and Apple Music." },
            { name: "Sanya Patel", text: "Love how smooth and clean the UI is. Music discovery is 🔥!" },
            { name: "Rohan Das", text: "Offline mode is a lifesaver during long commutes. Totally recommend it!" },
          ].map((user, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md w-full sm:w-80">
              <p className="text-gray-700 italic mb-4">“{user.text}”</p>
              <h4 className="font-semibold text-gray-900">{user.name}</h4>
            </div>
          ))}
        </div>
      </section>
      
      
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">
          Start your musical journey today 🎵
        </h2>
        <p className="text-gray-300 mb-8">
          Join millions of users and explore a world of sound without limits.
        </p>
        <Link
          to="/signup"
          className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:scale-105 transition-transform"
        >
          Get Started
        </Link>
      </section>

       
      <section className="px-6 sm:px-12 lg:px-24 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "Is Muzz free to use?", a: "Yes! You can stream for free, or go premium for ad-free listening." },
            { q: "Can I download songs?", a: "Offline mode is available for premium users only." },
            { q: "Does it work on all devices?", a: "Yes, Muzz is available on web, Android, and iOS." },
          ].map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-4">
              <h4 className="font-semibold text-gray-900">{faq.q}</h4>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
 
      
    </div>
  );
};

export default Landing;