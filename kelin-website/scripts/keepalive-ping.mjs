const KEEPALIVE_URL = process.env.KEEPALIVE_URL;
const TIMEOUT_MS = Number(process.env.KEEPALIVE_TIMEOUT_MS || 15000);

if (!KEEPALIVE_URL) {
  console.error("KEEPALIVE_URL is required.");
  process.exit(1);
}

const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

try {
  const response = await fetch(KEEPALIVE_URL, {
    method: "GET",
    headers: {
      "User-Agent": "kelin-website-keepalive/1.0",
      Accept: "application/json",
    },
    signal: controller.signal,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`HTTP ${response.status}: ${body.slice(0, 300)}`);
  }

  const json = await response.json().catch(() => null);
  if (!json?.ok) {
    throw new Error("Ping completed but API returned ok=false");
  }

  console.log(
    JSON.stringify(
      {
        ok: true,
        ping: json?.ping ?? null,
        latencyMs: json?.latencyMs ?? null,
        provider: json?.provider ?? null,
      },
      null,
      2
    )
  );
} catch (error) {
  console.error("Keep-alive ping failed:", error?.message || error);
  process.exit(1);
} finally {
  clearTimeout(timeout);
}
