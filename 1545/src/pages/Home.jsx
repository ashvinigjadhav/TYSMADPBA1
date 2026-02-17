import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

// ✅ Game list with category(level)
const games = [
  { 
    id: 1, 
    name: "Tic Tac Toe", 
    level: "Beginner", 
    price: 0, 
    description: "Classic 3x3 strategy board game.", 
    img: "https://img.gamedistribution.com/abebecfa89b646448c834963627b325d-512x512.jpeg",
    link: "https://playtictactoe.org/"
  },
  { 
    id: 2, 
    name: "Chess", 
    level: "Advanced", 
    price: 99, 
    description: "Strategic board game to test intelligence.", 
    img: "https://static.vecteezy.com/system/resources/previews/018/871/720/original/king-and-soldier-chess-pieces-on-transparent-background-leadership-concept-png.png",
    link: "https://www.chess.com/play"
  },
  { 
    id: 3, 
    name: "Number Puzzle", 
    level: "Intermediate", 
    price: 49, 
    description: "Brain-boosting number puzzle challenge.", 
    img: "https://tse4.mm.bing.net/th/id/OIP.34XhO9kOhDaGy3ah4n5K0wHaHa?pid=Api&P=0&h=180",
    link: "https://www.proprofsgames.com/puzzle/number/"
  },
  { 
    id: 4, 
    name: "Brain Games", 
    level: "Intermediate", 
    price: 79, 
    description: "Fun mind training & reasoning puzzles.", 
    img: "https://www.besttechie.com/content/images/wordpress/2020/05/brain-games.jpeg",
    link: "https://brain-games.org/"
  },
  { 
    id: 5, 
    name: "Cricket Game", 
    level: "Beginner", 
    price: 0, 
    description: "Virtual cricket match challenge.", 
    img: "https://tse4.mm.bing.net/th/id/OIP.e2P3ReDBMC5G87UnoHrt3wHaEM?pid=Api&P=0&h=180",
    link: "https://www.cricketgames.me/"
  },
  { 
    id: 6, 
    name: "Car Racing", 
    level: "Advanced", 
    price: 149, 
    description: "High-speed racing game.", 
    img: "https://www.lifewire.com/thmb/XHzuQbQEoT8sBwl91xYF6UyWsrU=/1920x1080/filters:no_upscale():max_bytes(150000):strip_icc()/offlinecars-asphalt8-5bf393bb46e0fb002650eb20.jpg",
    link: "https://www.carsimulator.games/"
  },
  { 
    id: 7, 
    name: "Memory Match", 
    level: "Beginner", 
    price: 39, 
    description: "Enhance your memory with fun card matches.", 
    img: "https://img.gamedistribution.com/854fd8048c814acaa86b0faffe364290-512x512.jpeg",
    link: "https://memory-game-online.freecodecamp.org/"
  },
  { 
    id: 8, 
    name: "Sudoku", 
    level: "Advanced", 
    price: 89, 
    description: "Classic number placement logic puzzle.", 
    img: "https://wallpaperaccess.com/full/9692889.png",
    link: "https://sudoku.com/"
  },
];


export default function Home() {
  const [search, setSearch] = useState("");
  const [filterLevel, setFilterLevel] = useState("All");

 // ✅ Add to My Games (Cart System)
const addToMyGames = (game) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.find(item => item.id === game.id);

  if (exists) {
    exists.qty += 1; // Increase quantity
  } else {
    cart.push({ ...game, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${game.name} added to My Games ✅`);
};


  // ✅ Filter + Search logic
  const filteredGames = games.filter(g => 
    g.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterLevel === "All" || g.level === filterLevel)
  );

  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.section 
        className="hero hero-orange"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="hero-title">
          Welcome to <span className="hub-title">GameHub 🎮</span>
        </h1>
        <p className="hero-sub">Play. Learn. Compete. Level Up ⚡</p>

        {/* Search */}
        <div className="search-box">
          <Search size={20} />
          <input 
            type="text"
            placeholder="Search games..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <select className="filter-select" onChange={(e) => setFilterLevel(e.target.value)}>
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </motion.section>

      {/* Game Display */}
      <section className="game-section container">
        <h2 className="section-heading text-center fw-bold mb-4">🚗 Game Garage</h2>

        <div className="masonry-grid">
          {filteredGames.map((g, i) => (
            <motion.article
              key={g.id}
              className={`mag-card mag-${i % 3}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <img src={g.img} alt={g.name} />
              <div className="mag-body">
                <h4>{g.name}</h4>
                <p className="excerpt">{g.description}</p>
                <span className="level-tag">{g.level}</span>

                <div className="mag-actions">
<Link 
  to={`/game/${g.id}`} 
  state={g}
  className="mag-play"
>
  Play ▶
</Link>

<span className="price-tag">
  {g.price === 0 ? "Free" : `₹${g.price}`}
</span>
                  <button className="mag-add-btn" onClick={() => addToMyGames(g)}>
                    + My Games
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="hub-banner">
        🎯 Level-Up Your Mind With Fun Learning Games 🚀
      </section>
    </div>
  );
}
