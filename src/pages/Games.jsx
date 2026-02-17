import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // ✅ added navigate

const gamesList = [
  { id: 1, name: "Dino Run", level: "Beginner", price: 0, description: "Run & dodge obstacles!", img: "https://tse4.mm.bing.net/th/id/OIP.vpWkiSO-Ljn0K0nuilCAFAHaEK?pid=Api&P=0&h=180", link: "https://t-rex-runner.com/" },
  { id: 2, name: "Flappy Bird", level: "Intermediate", price: 49, description: "Tap & fly through pipes!", img: "https://flappy-bird.com/wp-content/uploads/2024/02/flappy-bird-start-screen.jpg", link: "https://flappybird.io/" },
  { id: 3, name: "2048 Puzzle", level: "Advanced", price: 59, description: "Join numbers & reach 2048!", img: "https://tse2.mm.bing.net/th/id/OIP.lo74lDyhfY6cYA88QiKTfwHaHa?pid=Api&P=0&h=180", link: "https://play2048.co/" },
  { id: 4, name: "Tic Tac Toe", level: "Beginner", price: 0, description: "3×3 classic challenge!", img: "https://img.gamedistribution.com/abebecfa89b646448c834963627b325d-512x512.jpeg", link: "https://playtictactoe.org/" },
  { id: 5, name: "Chess", level: "Advanced", price: 129, description: "Master the board strategy!", img: "https://static.vecteezy.com/system/resources/previews/018/871/720/original/king-and-soldier-chess-pieces-on-transparent-background-leadership-concept-png.png", link: "https://www.chess.com/play/online" },
  { id: 6, name: "Number Puzzle", level: "Intermediate", price: 39, description: "Train logic & memory!", img: "https://tse4.mm.bing.net/th/id/OIP.34XhO9kOhDaGy3ah4n5K0wHaHa?pid=Api&P=0&h=180", link: "https://sudoku.com/" },
  { id: 7, name: "Brain Games", level: "Intermediate", price: 69, description: "Boost thinking power!", img: "https://www.besttechie.com/content/images/wordpress/2020/05/brain-games.jpeg", link: "https://memory.puzzle.games/" },
  { id: 8, name: "Cricket Game", level: "Beginner", price: 0, description: "Hit & score like a pro!", img: "https://tse4.mm.bing.net/th/id/OIP.e2P3ReDBMC5G87UnoHrt3wHaEM?pid=Api&P=0&h=180", link: "https://gamepix.com/t/cricket" },
];

export default function Games() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // ✅

  const filteredGames = gamesList.filter(game =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToMyGames = (game) => {
    // ✅ Original login check (unchanged)
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // ✅ Added fix: also check for gameHubLoggedIn key used in Navbar/Login
    const isActuallyLoggedIn =
      isLoggedIn === "true" ||
      localStorage.getItem("gameHubLoggedIn") === "true";

    // ✅ For paid games, block if not logged in
    if (game.price > 0 && !isActuallyLoggedIn) {
      alert("⚠️ Login required to add paid games!");

      // ✅ Save attempted item
      localStorage.setItem("pendingCheckout", JSON.stringify([game]));

      navigate("/login");
      return;
    }

    // ✅ Your original logic (untouched)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find(item => item.id === game.id);

    if (exists) {
      exists.qty += 1;
    } else {
      cart.push({ ...game, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${game.name} added to My Games ✅`);
  };

  return (
    <div className="games-page container">
      <h1 className="games-title text-center">🎮 Explore All Games</h1>
      <p className="games-sub text-center">Find your next favorite game!</p>

      {/* Search */}
      <div className="games-search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="games-grid">
        {filteredGames.map((g, idx) => (
          <motion.div key={idx} className="game-card" whileHover={{ scale: 1.06 }}>
            <img src={g.img} alt={g.name} className="game-card-img" />

            <h4>{g.name}</h4>
            <span className="level-tag">{g.level}</span>
            <p className="price-tag">{g.price === 0 ? "Free" : `₹${g.price}`}</p>

            <p className="game-desc">{g.description}</p>

            <div className="game-btn-group">
              <Link to={`/game/${g.id}`} state={g} className="play-now-btn">
                Play ▶
              </Link>

              <button className="add-cart-btn" onClick={() => handleAddToMyGames(g)}>
                + My Games
              </button>
            </div>
          </motion.div>
        ))}

        {filteredGames.length === 0 && <p>No games found 😢</p>}
      </div>
    </div>
  );
}
