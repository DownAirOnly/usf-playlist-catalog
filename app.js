const newYorkSection = document.getElementById("new-york");

if (newYorkSection) {
  const title = newYorkSection.querySelector(".area-title");

  if (title) {
    title.textContent = "New York Area (JS is controlling this)";
  }
}
