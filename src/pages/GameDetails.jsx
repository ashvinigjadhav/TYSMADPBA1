import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function GameDetails() {
  const { state: game } = useLocation();
  const navigate = useNavigate();

  const handleAddToGames = () => {
    let library = JSON.parse(localStorage.getItem("myGames")) || [];
    
    // prevent duplicate
    if (!library.find(g => g.id === game.id)) {
      library.push(game);
      localStorage.setItem("myGames", JSON.stringify(library));
      alert(`${game.name} added to My Games ✅`);
    } else {
      alert("Already added ✔");
    }
  };

  return (
    <motion.div 
      className="game-details-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <img src={game.img} alt={game.name} className="details-img" />

      <h1 className="details-title">{game.name}</h1>
      <p className="details-desc">
        Get ready to dive into <b>{game.name}</b>! This game enhances focus,
        reaction skills, and strategic thinking. Enjoy and level up your mind!
      </p>

      <ul className="details-features">
        <li>✅ Fun & Engaging</li>
        <li>⚡ Improves Focus & Reflex</li>
        <li>🎯 Suitable for all ages</li>
        <li>🌍 Play anytime, anywhere</li>
      </ul>

      <div className="details-btn-group">
      <button 
  onClick={() => window.open(game.link, "_blank")}
  className="play-now-btn"
>
  Play Now ▶
</button>


        <button onClick={handleAddToGames} className="play-now-btn">
          + Add to My Games
        </button>

        <button onClick={() => navigate(-1)} className="back-btn">
          ⬅ Back
        </button>
      </div>
    </motion.div>
  );
}
