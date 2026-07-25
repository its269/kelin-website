"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import "./admin.css";

function formatTime(value) {
  if (!value) return "";
  return new Date(value).toLocaleString("en-PH", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function StatBar({ label, count, max }) {
  const width = max > 0 ? Math.max(8, Math.round((count / max) * 100)) : 0;
  return (
    <div className="stat-bar-row">
      <div className="stat-bar-meta">
        <span>{label}</span>
        <strong>{count}</strong>
      </div>
      <div className="stat-bar-track">
        <div className="stat-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export default function KgsAdminClient() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);
  const [exportPrompt, setExportPrompt] = useState(false);
  const [status, setStatus] = useState("all");
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [syncNote, setSyncNote] = useState("");
  const [selected, setSelected] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");
  const [replyStatus, setReplyStatus] = useState("");
  const [showExportModal, setShowExportModal] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [stats, setStats] = useState(null);
  const [statsLoading, setStatsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / 20)), [total]);
  const maxType = useMemo(
    () => Math.max(1, ...(stats?.byType || []).map((row) => Number(row.count || 0))),
    [stats]
  );
  const maxSource = useMemo(
    () => Math.max(1, ...(stats?.bySource || []).map((row) => Number(row.count || 0))),
    [stats]
  );

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

  async function loadInquiries({ silent = false, skipRefreshFlag = false } = {}) {
    if (!skipRefreshFlag) {
      if (silent) setRefreshing(true);
      else setLoading(true);
    }
    try {
      const params = new URLSearchParams({
        status,
        q,
        page: String(page),
        limit: "20",
      });
      if (unreadOnly) params.set("unread", "1");
      const res = await fetch(`/api/inquiries/?${params.toString()}`);
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to load");
      setItems(data.items || []);
      setTotal(data.total || 0);
      setPendingCount(data.pendingCount || 0);
      setUnreadCount(data.unreadCount || 0);
      setExportPrompt(Boolean(data.exportPrompt));
      if (data.exportPrompt) setShowExportModal(true);
    } catch (error) {
      console.error(error);
    } finally {
      if (!skipRefreshFlag) {
        setLoading(false);
        setRefreshing(false);
      }
    }
  }

  async function loadStats() {
    setStatsLoading(true);
    try {
      const res = await fetch("/api/inquiries/stats/");
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to load stats");
      setStats(data.stats);
    } catch (error) {
      console.error(error);
    } finally {
      setStatsLoading(false);
    }
  }

  async function openInquiry(id, { keepCompose = false } = {}) {
    const res = await fetch(`/api/inquiries/${id}/`);
    const data = await res.json();
    if (res.ok && data.ok) {
      setSelected(data.item);
      setMessages(data.messages || []);
      if (!keepCompose) {
        setReply("");
        setReplyStatus("");
      }
      loadInquiries({ silent: true });
    }
  }

  async function syncGmailReplies() {
    try {
      const res = await fetch("/api/inquiries/sync-mail/", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setSyncNote(data.error || "Gmail sync failed");
        return data;
      }
      if (data.imported > 0) {
        setSyncNote(`Imported ${data.imported} Gmail reply${data.imported === 1 ? "" : "ies"}`);
      } else {
        setSyncNote("Gmail checked — no new replies");
      }
      return data;
    } catch (error) {
      setSyncNote(error.message || "Gmail sync failed");
      return null;
    }
  }

  async function refreshAll() {
    setRefreshing(true);
    try {
      await syncGmailReplies();
      await loadInquiries({ silent: true, skipRefreshFlag: true });
      if (selected?.id) await openInquiry(selected.id, { keepCompose: true });
      if (showStats) await loadStats();
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) loadInquiries();
  }, [user, status, page, unreadOnly]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, selected?.id]);

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
    setMessages([]);
    setStats(null);
    setShowStats(false);
  }

  async function sendReply(e) {
    e.preventDefault();
    if (!selected) return;
    const draft = reply.trim();
    if (!draft) return;

    setReplyStatus("sending");
    try {
      const res = await fetch(`/api/inquiries/${selected.id}/reply/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reply: draft }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Reply failed");

      // Prefer API messages; fall back to optimistic bubble so CMS always reflects the send
      if (Array.isArray(data.messages) && data.messages.length > 0) {
        setMessages(data.messages);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `local-${Date.now()}`,
            sender_type: "admin",
            sender_name: user?.username || "Kelin Support",
            body: draft,
            created_at: new Date().toISOString(),
          },
        ]);
      }

      setReply("");
      setReplyStatus(data.emailSent === false ? "saved-no-email" : "success");
      await openInquiry(selected.id, { keepCompose: true });
      await loadInquiries({ silent: true });
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
      loadInquiries({ silent: true });
    } catch (error) {
      alert(error.message || "Export failed");
    }
  }

  async function toggleStats() {
    const next = !showStats;
    setShowStats(next);
    if (next && !stats) await loadStats();
  }

  if (checkingAuth) {
    return (
      <div className="kgs-shell">
        <div className="kgs-login-card">Checking secure session…</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="kgs-shell kgs-login-shell">
        <form className="kgs-login-card" onSubmit={handleLogin}>
          <div className="kgs-brand-mark">KGS</div>
          <h1>Kelin Admin Console</h1>
          <p>Private inquiry workspace for authorized staff only.</p>
          <label>
            Username
            <input
              value={loginForm.username}
              onChange={(e) => setLoginForm((prev) => ({ ...prev, username: e.target.value }))}
              required
              autoComplete="username"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm((prev) => ({ ...prev, password: e.target.value }))}
              required
              autoComplete="current-password"
            />
          </label>
          {loginError && <div className="kgs-error">{loginError}</div>}
          <button type="submit">Sign in</button>
          <small>Session stays active until you intentionally sign out.</small>
        </form>
      </div>
    );
  }

  return (
    <div className="kgs-shell">
      <header className="kgs-topbar">
        <div className="kgs-topbar-left">
          <div className="kgs-brand-mark compact">KGS</div>
          <div>
            <h1>Inquiry Console</h1>
            <p>Signed in as {user.username}</p>
          </div>
        </div>
        <div className="kgs-top-actions">
          <button type="button" className="icon-btn" onClick={refreshAll} title="Refresh inquiries & chats" aria-label="Refresh">
            <svg className={refreshing ? "spin" : ""} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 1 1-2.6-6.3" />
              <polyline points="21 3 21 9 15 9" />
            </svg>
          </button>
          <button type="button" className={showStats ? "active" : ""} onClick={toggleStats}>
            {showStats ? "Hide Analytics" : "Show Analytics"}
          </button>
          <button type="button" onClick={exportInquiries}>Export CSV</button>
          <button type="button" className="ghost" onClick={handleLogout}>Sign out</button>
        </div>
      </header>

      <section className="kgs-metric-row">
        <div className="kgs-metric"><span>Total</span><strong>{total}</strong></div>
        <div className="kgs-metric accent"><span>Unread</span><strong>{unreadCount}</strong></div>
        <div className="kgs-metric"><span>Pending export</span><strong>{pendingCount}</strong></div>
        <div className="kgs-metric"><span>Export ready</span><strong>{exportPrompt ? "Yes" : "No"}</strong></div>
      </section>

      {showStats && (
        <section className="kgs-stats-panel">
          <div className="kgs-stats-header">
            <h2>Advanced Inquiry Analytics</h2>
            <button type="button" className="ghost" onClick={loadStats} disabled={statsLoading}>
              {statsLoading ? "Refreshing…" : "Refresh stats"}
            </button>
          </div>
          {!stats || statsLoading ? (
            <p className="muted">Loading analytics…</p>
          ) : (
            <div className="kgs-stats-grid">
              <div className="kgs-stat-card">
                <h3>Activity</h3>
                <div className="mini-stats">
                  <div><span>Last 7 days</span><strong>{stats.totals.last_7_days}</strong></div>
                  <div><span>Last 30 days</span><strong>{stats.totals.last_30_days}</strong></div>
                  <div><span>Avg reply time</span><strong>{stats.totals.avg_hours_to_reply == null ? "—" : `${stats.totals.avg_hours_to_reply}h`}</strong></div>
                  <div><span>Replied</span><strong>{stats.totals.replied_count}</strong></div>
                </div>
              </div>
              <div className="kgs-stat-card">
                <h3>By inquiry type</h3>
                {(stats.byType || []).map((row) => (
                  <StatBar key={row.label} label={row.label} count={Number(row.count)} max={maxType} />
                ))}
              </div>
              <div className="kgs-stat-card">
                <h3>By page source</h3>
                {(stats.bySource || []).map((row) => (
                  <StatBar key={row.label} label={row.label} count={Number(row.count)} max={maxSource} />
                ))}
              </div>
              <div className="kgs-stat-card">
                <h3>Daily volume (14 days)</h3>
                <div className="daily-bars">
                  {(stats.daily || []).map((row) => {
                    const maxDaily = Math.max(1, ...(stats.daily || []).map((d) => Number(d.count || 0)));
                    const height = Math.max(8, Math.round((Number(row.count) / maxDaily) * 100));
                    return (
                      <div key={row.day} className="daily-col" title={`${row.day}: ${row.count}`}>
                        <div className="daily-fill" style={{ height: `${height}%` }} />
                        <span>{String(row.day).slice(5)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      <section className="kgs-toolbar">
        <input
          placeholder="Search name, email, company, subject…"
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
        <label className="unread-toggle">
          <input
            type="checkbox"
            checked={unreadOnly}
            onChange={(e) => { setPage(1); setUnreadOnly(e.target.checked); }}
          />
          Unread only
        </label>
        <button type="button" onClick={() => { setPage(1); loadInquiries(); }}>Search</button>
      </section>

      <div className="kgs-layout">
        <aside className="kgs-list-panel">
          <div className="panel-title">
            <h2>Inbox</h2>
            <span>{loading ? "Loading…" : `${items.length} shown`}</span>
          </div>
          <div className="kgs-list-scroll">
            {!loading && items.length === 0 ? <p className="muted empty-state">No inquiries found.</p> : null}
            {items.map((item) => {
              const unread = Number(item.unread_for_admin) === 1;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`inquiry-row ${selected?.id === item.id ? "active" : ""} ${unread ? "unread" : ""}`}
                  onClick={() => openInquiry(item.id)}
                >
                  <div className="row-main">
                    <div className="row-top">
                      <strong>#{item.id} {item.name}</strong>
                      <span className={`read-pill ${unread ? "is-unread" : "is-read"}`}>
                        {unread ? "Unread" : "Read"}
                      </span>
                    </div>
                    <span className="row-email">{item.email}</span>
                    <span className="row-preview">{item.subject}</span>
                  </div>
                  <div className="row-side">
                    <em>{item.status}</em>
                    <small>{formatTime(item.last_message_at || item.created_at)}</small>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="kgs-pagination">
            <button type="button" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>Prev</button>
            <span>Page {page} / {totalPages}</span>
            <button type="button" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
          </div>
        </aside>

        <section className="kgs-chat-panel">
          {!selected ? (
            <div className="chat-empty">
              <h2>Select an inquiry</h2>
              <p>Open a conversation to view the messenger thread and reply.</p>
            </div>
          ) : (
            <>
              <div className="chat-header">
                <div>
                  <h2>#{selected.id} — {selected.subject}</h2>
                  <p>{selected.name} · {selected.email} · {selected.country_code} {selected.phone}</p>
                </div>
                <div className="chat-header-meta">
                  <span className={`read-pill ${Number(selected.unread_for_admin) === 1 ? "is-unread" : "is-read"}`}>
                    {Number(selected.unread_for_admin) === 1 ? "Unread" : "Read"}
                  </span>
                  <button type="button" className="icon-btn" onClick={refreshAll} title="Refresh chat & sync Gmail" disabled={refreshing}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-2.6-6.3" />
                      <polyline points="21 3 21 9 15 9" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="chat-details">
                <span><b>Company</b> {selected.company}</span>
                <span><b>Address</b> {selected.address}</span>
                <span><b>Type</b> {selected.inquiry_type}</span>
                <span><b>Source</b> {selected.page_source || "N/A"}</span>
              </div>

              <div className="chat-thread">
                <div className="chat-info-bubble" role="note">
                  <div className="chat-info-icon" aria-hidden="true">i</div>
                  <div className="chat-info-content">
                    <strong>How this conversation syncs</strong>
                    <p>
                      Replies you send here are emailed to the inquirer and shown in this chat.
                      When the inquirer replies in Gmail (Reply / Reply All), use <em>Refresh</em> to import
                      those messages into this conversation.
                    </p>
                    <p>
                      The <em>Continue conversation</em> link in your email still works too — messages from that
                      page appear here automatically.
                    </p>
                    {syncNote ? <p className="sync-note">{syncNote}</p> : null}
                  </div>
                </div>

                {messages.length === 0 && (
                  <p className="muted empty-state">No messages in this conversation yet.</p>
                )}
                {messages.map((msg) => {
                  const isAdmin = String(msg.sender_type || "").toLowerCase() === "admin";
                  return (
                    <div key={msg.id} className={`chat-bubble ${isAdmin ? "from-admin" : "from-visitor"}`}>
                      <div className="bubble-meta">
                        <strong>{isAdmin ? (msg.sender_name || "Kelin Support") : (msg.sender_name || selected.name)}</strong>
                        <span>{formatTime(msg.created_at)}</span>
                      </div>
                      <p>{msg.body}</p>
                    </div>
                  );
                })}
                <div ref={chatEndRef} />
              </div>

              <form onSubmit={sendReply} className="chat-compose">
                <textarea
                  rows={3}
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  required
                  placeholder="Type your reply… The inquirer can continue this chat from their email link."
                />
                <div className="compose-actions">
                  {replyStatus === "success" && <span className="kgs-success">Reply sent</span>}
                  {replyStatus === "saved-no-email" && (
                    <span className="kgs-success">Saved in chat (email delivery failed)</span>
                  )}
                  {replyStatus && !["sending", "success", "saved-no-email"].includes(replyStatus) && (
                    <span className="kgs-error">{replyStatus}</span>
                  )}
                  <button type="submit" disabled={replyStatus === "sending"}>
                    {replyStatus === "sending" ? "Sending…" : "Send Reply"}
                  </button>
                </div>
              </form>
            </>
          )}
        </section>
      </div>

      {showExportModal && (
        <div className="export-modal-overlay">
          <div className="export-modal">
            <h2>Export inquiries</h2>
            <p>
              You have <strong>{pendingCount}</strong> inquiries waiting for export.
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
