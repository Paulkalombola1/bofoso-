	// script.js

// Animation fade in automatique (déjà via CSS)
// Bouton retour en haut

const backToTop = document.getElementById("backToTop");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "slow" });
};
