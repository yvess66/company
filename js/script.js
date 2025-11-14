// ===== NAVBAR SHADOW ON SCROLL =====
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shadow-md", "bg-white/90", "backdrop-blur");
  } else {
    header.classList.remove("shadow-md", "bg-white/90", "backdrop-blur");
  }
});

// ===== SMOOTH SCROLL FOR INTERNAL LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== BACK TO TOP BUTTON =====
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆️";
topBtn.className = "fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg opacity-0 transition-all duration-300";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("opacity-100");
  } else {
    topBtn.classList.remove("opacity-100");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
