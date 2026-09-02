// Visitor counter backed by the /api/visitor-count Netlify Function.
(function () {
  const el = document.getElementById("visitor-count");
  if (!el) return;

  const cached = localStorage.getItem("visitCount");
  if (cached) el.textContent = Number(cached).toLocaleString();

  // Count a visitor once per browser session, not on every page navigation.
  if (sessionStorage.getItem("visitCounted")) return;
  sessionStorage.setItem("visitCounted", "1");

  fetch("/api/visitor-count")
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((data) => {
      if (typeof data.count === "number") {
        el.textContent = data.count.toLocaleString();
        localStorage.setItem("visitCount", String(data.count));
      }
    })
    .catch(() => { /* function unavailable (e.g. local preview) — keep cached value */ });
})();
