"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import "./admin.css";

export default function AdminInquiriesClient() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [exportPrompt, setExportPrompt] = useState(false);
  const [status, setStatus] = useState("all");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [reply, setReply] = useState("");
  const [replyStatus, setReplyStatus] = useState("");
  const [showExportModal, setShowExportModal] = useState(false);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / 20)), [total]);

  async function checkAuth() {
    setCheckingAuth(true);
    try {
      const res = await fetch("/api/admin/me/");
      const data = await res.json();
      if (res.ok && data.ok) setUser(data.user);
      else setUser(null);
    } catch {
      setUser(null);
    } finally {
      setCheckingAuth(false);
    }
  }

  async function loadInquiries() {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        status,
        q,
        page: String(page),
        limit: "20",
      });
      const res = await fetch(`/api/inquiries/?${params.toString()}`);
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to load");
      setItems(data.items || []);
      setTotal(data.total || 0);
      setPendingCount(data.pendingCount || 0);
      setExportPrompt(Boolean(data.exportPrompt));
      if (data.exportPrompt) setShowExportModal(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) loadInquiries();
  }, [user, status, page]);

  async function handleLogin(e) {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch("/api/admin/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setLoginError(data.error || "Login failed");
        return;
      }
      setUser(data.user);
    } catch {
      setLoginError("Login failed");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout/", { method: "POST" });
    setUser(null);
    setItems([]);
    setSelected(null);
  }

  async function openInquiry(id) {
    const res = await fetch(`/api/inquiries/${id}/`);
    const data = await res.json();
    if (res.ok && data.ok) {
      setSelected(data.item);
      setReply(data.item.admin_reply || "");
      setReplyStatus("");
      loadInquiries();
    }
  }

  async function sendReply(e) {
    e.preventDefault();
    if (!selected) return;
    setReplyStatus("sending");
    try {
      const res = await fetch(`/api/inquiries/${selected.id}/reply/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reply }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Reply failed");
      setReplyStatus("success");
      openInquiry(selected.id);
    } catch (error) {
      setReplyStatus(error.message || "error");
    }
  }

  async function exportInquiries() {
    try {
      const res = await fetch("/api/inquiries/export/");
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Export failed");
      }
      const blob = await res.blob();
      const disposition = res.headers.get("Content-Disposition") || "";
      const match = disposition.match(/filename=\"(.+)\"/);
      const fileName = match?.[1] || `inquiries-export-${Date.now()}.csv`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
      setShowExportModal(false);
      loadInquiries();
    } catch (error) {
      alert(error.message || "Export failed");
    }
  }

  if (checkingAuth) {
    return <div className="admin-shell"><div className="admin-card">Checking session...</div></div>;
  }

  if (!user) {
    return (
      <div className="admin-shell">
        <form className="admin-card admin-login" onSubmit={handleLogin}>
          <h1>Kelin Inquiry CMS</h1>
          <p>Sign in to manage website inquiries.</p>
          <label>
            Username
            <input
              value={loginForm.username}
              onChange={(e) => setLoginForm((prev) => ({ ...prev, username: e.target.value }))}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm((prev) => ({ ...prev, password: e.target.value }))}
              required
            />
          </label>
          {loginError && <div className="admin-error">{loginError}</div>}
          <button type="submit">Sign in</button>
          <Link href="/" className="admin-back">← Back to website</Link>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <div>
          <h1>Inquiry CMS</h1>
          <p>Signed in as {user.username}</p>
        </div>
        <div className="admin-top-actions">
          <button type="button" onClick={exportInquiries}>Export CSV</button>
          <button type="button" className="ghost" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <section className="admin-stats">
        <div className="stat-card"><span>Total shown</span><strong>{total}</strong></div>
        <div className="stat-card"><span>Pending export</span><strong>{pendingCount}</strong></div>
        <div className="stat-card"><span>Export ready</span><strong>{exportPrompt ? "Yes" : "No"}</strong></div>
      </section>

      <section className="admin-toolbar">
        <input
          placeholder="Search name, email, company, subject..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setPage(1);
              loadInquiries();
            }
          }}
        />
        <select value={status} onChange={(e) => { setPage(1); setStatus(e.target.value); }}>
          <option value="all">All statuses</option>
          <option value="new">New</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
          <option value="archived">Archived</option>
        </select>
        <button type="button" onClick={() => { setPage(1); loadInquiries(); }}>Search</button>
      </section>

      <div className="admin-layout">
        <div className="admin-card admin-list">
          {loading ? <p>Loading...</p> : null}
          {!loading && items.length === 0 ? <p>No inquiries found.</p> : null}
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`inquiry-row ${selected?.id === item.id ? "active" : ""}`}
              onClick={() => openInquiry(item.id)}
            >
              <div>
                <strong>#{item.id} {item.name}</strong>
                <span>{item.email}</span>
              </div>
              <div>
                <em>{item.status}</em>
                <small>{new Date(item.created_at).toLocaleString()}</small>
              </div>
            </button>
          ))}

          <div className="admin-pagination">
            <button type="button" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>Prev</button>
            <span>Page {page} / {totalPages}</span>
            <button type="button" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
          </div>
        </div>

        <div className="admin-card admin-detail">
          {!selected ? (
            <p>Select an inquiry to view and reply.</p>
          ) : (
            <>
              <h2>#{selected.id} — {selected.subject}</h2>
              <div className="detail-grid">
                <p><strong>Name:</strong> {selected.name}</p>
                <p><strong>Email:</strong> {selected.email}</p>
                <p><strong>Phone:</strong> {selected.country_code} {selected.phone}</p>
                <p><strong>Company:</strong> {selected.company}</p>
                <p><strong>Address:</strong> {selected.address}</p>
                <p><strong>Type:</strong> {selected.inquiry_type}</p>
                <p><strong>Product:</strong> {selected.product_name || "N/A"}</p>
                <p><strong>Source:</strong> {selected.page_source || "N/A"}</p>
              </div>
              <div className="message-box">
                <h3>Message</h3>
                <p>{selected.message}</p>
              </div>
              <form onSubmit={sendReply} className="reply-form">
                <label>
                  Reply to inquirer
                  <textarea
                    rows={6}
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    required
                    placeholder="Write your reply. This will be emailed to the inquirer."
                  />
                </label>
                <button type="submit" disabled={replyStatus === "sending"}>
                  {replyStatus === "sending" ? "Sending..." : "Send Reply"}
                </button>
                {replyStatus === "success" && <div className="admin-success">Reply sent.</div>}
                {replyStatus && replyStatus !== "sending" && replyStatus !== "success" && (
                  <div className="admin-error">{replyStatus}</div>
                )}
              </form>
            </>
          )}
        </div>
      </div>

      {showExportModal && (
        <div className="export-modal-overlay">
          <div className="export-modal">
            <h2>Export inquiries</h2>
            <p>
              You have <strong>{pendingCount}</strong> inquiries waiting for export.
              Export them now to keep your CMS archive clean.
            </p>
            <div className="export-actions">
              <button type="button" onClick={exportInquiries}>Export to CSV</button>
              <button type="button" className="ghost" onClick={() => setShowExportModal(false)}>Later</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
