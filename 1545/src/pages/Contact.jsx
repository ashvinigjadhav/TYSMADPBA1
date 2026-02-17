import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="contact-container">

      {/* Hero Title */}
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>
          Contact <span>Game Hub</span> 🎮
        </h1>
        <p>We’re here to help you connect, play & grow!</p>
      </motion.div>

      <div className="contact-content">
        
        {/* Left Box - Info */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3>Reach Out</h3>
          <p>Let’s talk gaming, ideas or support!</p>

          <div className="info-line">
            <Phone /> <a href="tel:+91XXXXXXXXXX">+91 9309208325</a>
          </div>
          <div className="info-line">
            <Mail /> <a href="mailto:yourmail@example.com">prathmeshwaghmare289@gmail.com</a>
          </div>
          <div className="info-line">
            <MapPin /> Pune, Maharashtra, India
          </div>

          <motion.a
            href="tel:+91XXXXXXXXXX"
            className="call-btn"
            whileHover={{ scale: 1.05 }}
          >
            <MessageSquare /> Let's Connect
          </motion.a>
        </motion.div>

        {/* Right Box - Form */}
        <motion.form 
          className="contact-form"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3>Drop a Message</h3>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Write your message..." rows={4} required />

          <motion.button 
            className="send-btn"
            whileHover={{ scale: 1.05 }}
          >
            Send &nbsp;<Send size={18}/>
          </motion.button>
        </motion.form>
      </div>

    </div>
  );
}
