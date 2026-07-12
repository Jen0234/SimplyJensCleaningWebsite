  /* Popup */
  const popup = document.getElementById("promoPopup");
  const closeBtn = document.getElementById("closePopup");

  if (popup && closeBtn) {
    setTimeout(function () {
      popup.style.display = "flex";
    }, 2000);

    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });

    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  }