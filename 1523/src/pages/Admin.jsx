console.log("Fetching /api/messages");

import React, { useEffect, useState } from "react";

export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  async function fetchMessages() {
    try {
      const res = await fetch("/api/messages");
      const data = await res.json();

      if (!res.ok) {
        throw new Error("Failed to load messages");
      }

      // Backend returns an array directly
      setMessages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  fetchMessages();
}, []);

  if (loading) return <p>Loading messages...</p>;
  if (error) return <p style={{ color: "#ff6b6b" }}>{error}</p>;

  return (
    <section>
      <h2>Admin — Contact Messages</h2>

      {messages.length === 0 && (
        <p style={{ color: "var(--muted)" }}>No messages yet.</p>
      )}

      <div style={{ marginTop: 20 }}>
        {messages.map((msg) => (
          <div
            key={msg._id}
            style={{
              padding: 16,
              marginBottom: 12,
              borderRadius: 12,
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div style={{ fontWeight: 700 }}>{msg.name}</div>
            <div style={{ color: "var(--muted)" }}>{msg.email}</div>
            <p style={{ marginTop: 8 }}>{msg.message}</p>
            <div style={{ marginTop: 8, fontSize: 12, color: "var(--muted)" }}>
              {new Date(msg.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}