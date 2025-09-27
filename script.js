// ============================
// NAVBAR - Hamburger Menu
// ============================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
});

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    hamburger.textContent = "☰";
  });
});


// ============================
// OVERLAY NAV (open/close)
// ============================
function openNav() {
  document.getElementById("myNav").style.width = "70%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
window.openNav = openNav;
window.closeNav = closeNav;


// ============================
// ACCORDION
// ============================
document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
    btn.classList.toggle("active");
  });
});


// ============================
// MODAL
// ============================
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

if (openModalBtn && closeModalBtn && modal) {
  openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}


// ============================
// TOAST
// ============================
function showToast(message = "This is a toast message") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.style.display = "block";
  setTimeout(() => toast.style.display = "none", 3000);
}

// Example auto-toast after 2s
setTimeout(() => showToast("Welcome to the UI Showcase!"), 2000);


// ============================
// SIMPLE CHART (Chart.js)
// ============================
if (document.getElementById("chart")) {
  const ctx = document.getElementById("chart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [{
        label: "Sales",
        data: [12, 19, 3, 10, 7],
        backgroundColor: "#4a90e2"
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}
