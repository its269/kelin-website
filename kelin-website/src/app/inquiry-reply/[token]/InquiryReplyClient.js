"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import "./reply.css";

function formatTime(value) {
  if (!value) return "";
  return new Date(value).toLocaleString("en-PH", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function InquiryReplyClient() {
  const params = useParams();
  const token = params?.token;
  const [inquiry, setInquiry] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const endRef = useRef(null);

  async function loadConversation() {
    if (!token) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/inquiry-reply/${token}/`);
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Conversation not found");
      setInquiry(data.inquiry);
      setMessages(data.messages || []);
    } catch (err) {
      setError(err.message || "Failed to load conversation");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadConversation();
  }, [token]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus("");
    try {
      const res = await fetch(`/api/inquiry-reply/${token}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to send");
      setMessages(data.messages || []);
      setMessage("");
      setStatus("Message sent. Our team will continue this conversation soon.");
    } catch (err) {
      setStatus(err.message || "Failed to send message");
    } finally {
      setSending(false);
    }
  }

  if (loading) {
    return <div className="reply-shell"><div className="reply-card">Loading conversation…</div></div>;
  }

  if (error || !inquiry) {
    return <div className="reply-shell"><div className="reply-card error">{error || "Conversation not found"}</div></div>;
  }

  return (
    <div className="reply-shell">
      <div className="reply-card">
        <header className="reply-header">
          <div>
            <p className="eyebrow">Kelin Graphics System</p>
            <h1>{inquiry.subject}</h1>
            <p>Conversation with {inquiry.name}</p>
          </div>
          <button type="button" className="refresh-btn" onClick={loadConversation} aria-label="Refresh conversation">
            ↻ Refresh
          </button>
        </header>

        <div className="reply-thread">
          {messages.map((msg) => {
            const isAdmin = msg.sender_type === "admin";
            return (
              <div key={msg.id} className={`bubble ${isAdmin ? "admin" : "visitor"}`}>
                <div className="meta">
                  <strong>{isAdmin ? "Kelin Support" : inquiry.name}</strong>
                  <span>{formatTime(msg.created_at)}</span>
                </div>
                <p>{msg.body}</p>
              </div>
            );
          })}
          <div ref={endRef} />
        </div>

        <form className="reply-compose" onSubmit={handleSubmit}>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Type your reply to Kelin Support…"
          />
          <div className="actions">
            {status && <span className="status">{status}</span>}
            <button type="submit" disabled={sending}>
              {sending ? "Sending…" : "Send Reply"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
