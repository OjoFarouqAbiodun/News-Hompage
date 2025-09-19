
  const showMenuBtn = document.querySelector(".showMenu");
  const hideMenuBtn = document.querySelector(".hideMenu");
  const mobileLinks = document.querySelector(".mobile-links");
  const overlay = document.querySelector(".overlay");

  // Open menu
  showMenuBtn.addEventListener("click", () => {
    mobileLinks.style.display = "flex";
    overlay.style.display = "block";
  });

  // Close menu
  hideMenuBtn.addEventListener("click", () => {
    mobileLinks.style.display = "none";
    overlay.style.display = "none";
  });

  // Close menu if user clicks overlay
  overlay.addEventListener("click", () => {
    mobileLinks.style.display = "none";
    overlay.style.display = "none";
  });

