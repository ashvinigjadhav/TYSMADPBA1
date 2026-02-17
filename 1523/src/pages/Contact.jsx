import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      setSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div
        style={{
          padding: 20,
          background: "rgba(255,255,255,0.02)",
          borderRadius: 12,
        }}
      >
        Thank you — your message has been sent.  
        We’ll reply to <strong>{form.email}</strong> soon.
      </div>
    );
  }

  return (
    <section>
      <h2>Contact</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 }}>
        <form
          onSubmit={handleSubmit}
          style={{
            padding: 20,
            background: "rgba(255,255,255,0.02)",
            borderRadius: 12,
          }}
        >
          <label className="label">Name</label>
          <input
            name="name"
            className="input"
            value={form.name}
            onChange={handleChange}
          />

          <label className="label">Email</label>
          <input
            name="email"
            className="input"
            value={form.email}
            onChange={handleChange}
          />

          <label className="label">Message</label>
          <textarea
            name="message"
            className="input"
            rows={6}
            value={form.message}
            onChange={handleChange}
          />

          {error && (
            <div style={{ color: "#ff6b6b", marginTop: 10 }}>
              {error}
            </div>
          )}

          <div style={{ marginTop: 12 }}>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        <aside style={{ padding: 16 }}>
          <div style={{ fontWeight: 700 }}>Studio</div>
          <div style={{ color: "var(--muted)" }}>
            C/o 42, Shukrawar Peth, Pune 411002, Maharashtra, India
          </div>
          <div style={{ color: "var(--muted)", marginTop: 8 }}>
            Phone: +91-98765-43210
          </div>
          <div style={{ color: "var(--muted)", marginTop: 8 }}>
            Email: poonawalaibrahim9@gmail.com
          </div>
        </aside>
      </div>
    </section>
  );
}