  /* Mini contact buttons */
  document.querySelectorAll(".person-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const options = this.nextElementSibling;
      if (options) {
        options.style.display = options.style.display === "flex" ? "none" : "flex";
      }
    });
  });