/* FAQ section */

document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach(function (faq) {
    faq.addEventListener("click", function () {
      this.classList.toggle("active");

      const response = this.nextElementSibling;

      if (!response) return;

      if (response.style.maxHeight) {
        response.style.maxHeight = null;
      } else {
        response.style.maxHeight = response.scrollHeight + "px";
      }
    });
  })});
