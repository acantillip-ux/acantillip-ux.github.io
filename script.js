// ---- Sparkles (your existing code) ----
for (let i = 0; i < 20; i++) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.animationDelay = Math.random() * 2 + "s";
  sparkle.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(sparkle);
}

// ---- Timer (only runs on timer.html) ----
if (document.getElementById("timer")) {
  const startDate = new Date("January 25, 2026 03:18:00").getTime();

  function updateTimer() {
    const now = Date.now();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
      `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

  setInterval(updateTimer, 1000);
  updateTimer();
}