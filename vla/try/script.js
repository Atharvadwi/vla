// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 800);
});

// Theme toggle with save
const btn = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){
  document.body.classList.add("light");
  btn.textContent = "☀";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    localStorage.setItem("theme", "light");
    btn.textContent = "☀";
  } else {
    localStorage.setItem("theme", "dark");
    btn.textContent = "🌙";
  }
});