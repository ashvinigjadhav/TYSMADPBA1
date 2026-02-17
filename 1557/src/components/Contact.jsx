import { useState, useEffect } from "react";

export default function Contact() {
  const LOCAL_KEY = "MUZZ_CONTACT_FORM";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Load saved form data from localStorage when page opens
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (saved) {
      setFormData(saved);
    }
  }, []);

  // ✅ Update form data in localStorage whenever user types
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updated = { ...formData, [name]: value };
    setFormData(updated);

    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
  };

  // ✅ Save final message (optional) and clear fields
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thanks for reaching out! 🎶");

    // ✅ Clear the form
    const empty = { name: "", email: "", message: "" };
    setFormData(empty);

    // ✅ Remove from localStorage
    localStorage.removeItem(LOCAL_KEY);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-10">
      <div className="max-w-md w-full bg-white/70 backdrop-blur-lg shadow-xl rounded-3xl p-8 border border-white/30">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-center mb-8">
          We'd love to hear from you! Drop your message and we’ll reply soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-md"
          >
            Send Message
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Prefer direct contact? Email us at{" "}
          <a
            href="mailto:support@muzz.com"
            className="text-indigo-600 font-medium hover:underline"
          >
            support@muzz.com
          </a>
        </p>
      </div>
    </div>
  );
}
