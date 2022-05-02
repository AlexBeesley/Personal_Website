console.log("JavaScript loaded");

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode-body");
    document.getElementById("profile-pic").classList.toggle("dark-mode-profile-pic");
    document.getElementById("aboutmecard").classList.toggle("dark-mode-card");
    document.getElementById("contactcard").classList.toggle("dark-mode-card");
    document.getElementById("photocard").classList.toggle("dark-mode-card");
    document.getElementById("timelinecard").classList.toggle("dark-mode-card");
    document.getElementById("dark-mode-toggle-light").classList.toggle("dark-mode-active-toggle");
    document.getElementById("indicator").classList.toggle("dark-mode-indicator");
    
    console.log("Dark Mode toggled");
  }

