import { useState } from "react";
import { sendEmail } from "../../services/emailjs";

const css = `
  .cf-label {
    color: rgba(255,255,255,0.3);
    font-size: 10px;
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 6px;
    font-family: 'Courier New', monospace;
  }
  .cf-input {
    width: 100%;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 12px 14px;
    color: #f1f5f9;
    font-size: 13px;
    font-family: 'Courier New', monospace;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    margin-bottom: 14px;
    display: block;
    box-sizing: border-box;
  }
  .cf-input:focus {
    border-color: #6366f1;
    background: rgba(99,102,241,0.06);
  }
  .cf-input::placeholder { color: rgba(255,255,255,0.2); }
  .cf-textarea {
    resize: vertical;
    min-height: 110px;
  }
  .cf-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #6366f1, #38bdf8);
    border: none;
    border-radius: 12px;
    color: #fff;
    font-weight: 800;
    font-size: 14px;
    letter-spacing: 0.05em;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    transition: all 0.25s ease;
    margin-top: 4px;
  }
  .cf-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(99,102,241,0.45);
  }
  .cf-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .cf-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  @media (max-width: 600px) {
    .cf-row {
      grid-template-columns: 1fr;
      gap: 0;
    }
    .cf-input {
      font-size: 14px; /* prevent iOS zoom on focus */
      padding: 13px 14px;
    }
    .cf-btn {
      font-size: 13px;
      padding: 15px;
    }
  }
`;

export default function ContactForm() {
  const [form,   setForm]   = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await sendEmail(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <style>{css}</style>
      <div>
        <div style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: 10,
          letterSpacing: "0.16em",
          marginBottom: 18,
          fontFamily: "'Courier New', monospace",
        }}>
          // SEND A MESSAGE
        </div>

        {/* Name + Email side by side on desktop, stacked on mobile */}
        <div className="cf-row">
          <div>
            <label className="cf-label">NAME</label>
            <input
              className="cf-input"
              type="text"
              name="name"
              value={form.name}
              onChange={handle}
              placeholder="Ekaanksh Patil"
              autoComplete="name"
            />
          </div>
          <div>
            <label className="cf-label">EMAIL</label>
            <input
              className="cf-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handle}
              placeholder="you@email.com"
              autoComplete="email"
            />
          </div>
        </div>

        <label className="cf-label">MESSAGE</label>
        <textarea
          className="cf-input cf-textarea"
          name="message"
          rows={5}
          value={form.message}
          onChange={handle}
          placeholder="Hey Ekaanksh, I'd love to talk about..."
        />

        <button
          className="cf-btn"
          onClick={submit}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message →"}
        </button>

        {status === "success" && (
          <p style={{
            color: "#10b981", fontSize: 12, textAlign: "center",
            marginTop: 14, fontFamily: "'Courier New', monospace",
          }}>
            ✓ Message sent! I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p style={{
            color: "#ef4444", fontSize: 12, textAlign: "center",
            marginTop: 14, fontFamily: "'Courier New', monospace",
            lineHeight: 1.6,
          }}>
            Something went wrong. Email me directly at{" "}
            <a href="mailto:patilekanksh487@gmail.com" style={{ color: "#6366f1" }}>
              patilekanksh487@gmail.com
            </a>
          </p>
        )}
      </div>
    </>
  );
}
