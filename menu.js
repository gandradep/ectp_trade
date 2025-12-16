const toggleBtn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    toggleBtn.textContent = sidebar.classList.contains("active") ? "✕" : "☰";
});
