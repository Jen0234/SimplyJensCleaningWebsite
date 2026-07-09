console.log("SJC JavaScript loaded");

document.addEventListener("DOMContentLoaded", function () {

  /* Business type selection */
  const serviceSelect = document.getElementById("serviceSelect");
  const residentialFields = document.getElementById("residentialFields");
  const commercialFields = document.getElementById("commercialFields");

  if (serviceSelect && residentialFields && commercialFields) {
    const residentialServices = ["standard", "deep", "move", "housekeeping", "airbnb"];
    const commercialServices = ["commercial"];

    serviceSelect.addEventListener("change", function () {
      if (residentialServices.includes(this.value)) {
        residentialFields.style.display = "block";
        commercialFields.style.display = "none";
      } else if (commercialServices.includes(this.value)) {
        residentialFields.style.display = "none";
        commercialFields.style.display = "block";
      } else {
        residentialFields.style.display = "none";
        commercialFields.style.display = "none";
      }
    });
  }

  const businessType = document.getElementById("businessType");
  const otherBusinessField = document.getElementById("otherBusinessField");

  if (businessType && otherBusinessField) {
    businessType.addEventListener("change", function () {
      otherBusinessField.style.display = this.value === "other" ? "block" : "none";
    });
  }

  /* Reveal animations */
  const reveals = document.querySelectorAll(".reveal");

  if (reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    reveals.forEach(el => observer.observe(el));
  }

  /* Mini contact buttons */
  document.querySelectorAll(".person-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const options = this.nextElementSibling;
      if (options) {
        options.style.display = options.style.display === "flex" ? "none" : "flex";
      }
    });
  });

  /* Counters */
  const counters = document.querySelectorAll(".counter");

  if (counters.length > 0) {
    const runCounter = (counter) => {
      const target = Number(counter.dataset.target);
      const suffix = counter.dataset.suffix || "";
      let current = 0;
      const increment = target / 60;

      const update = () => {
        current += increment;

        if (current < target) {
          counter.textContent = Math.ceil(current) + suffix;
          requestAnimationFrame(update);
        } else {
          counter.textContent = target + suffix;
        }
      };

      update();
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
          entry.target.classList.add("counted");
          runCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  /* Reviews */
  const reviewsContainer = document.getElementById("reviewsContainer");
  const nextBtn = document.getElementById("nextReviews");
  const prevBtn = document.getElementById("prevReviews");

  if (reviewsContainer && nextBtn && prevBtn) {
    const reviews = [
      {
        text: "Simply Jens did an amazing job. Every room feels brighter and fresher! Highly recommended!",
        name: "Client",
        link: "https://share.google/M2wn4FrmEMrD9HuFE"
      },
      {
        text: "Very professional and detailed. The place looked spotless when they were done.",
        name: "Client",
        link: "https://share.google/M2wn4FrmEMrD9HuFE"
      },
      {
        text: "Reliable, friendly, and easy to work with. I would definitely book again.",
        name: "Client",
        link: "https://share.google/M2wn4FrmEMrD9HuFE"
      }
    ];

    let currentIndex = 0;
    const reviewsPerPage = 3;

    function renderReviews() {
      reviewsContainer.innerHTML = "";

      const visibleReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

      visibleReviews.forEach(review => {
        const bubble = document.createElement("div");
        bubble.className = "bubble";

        bubble.innerHTML = `
          <div class="reviews">
            <div class="review-stars">★★★★★</div>
            <p class="text_reviews">"${review.text}"</p>
            <p class="review-name">– ${review.name}</p>
            <a href="${review.link}" target="_blank" class="review-link">Read More</a>
          </div>
        `;

        reviewsContainer.appendChild(bubble);
      });

      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex + reviewsPerPage >= reviews.length;
    }

    nextBtn.addEventListener("click", () => {
      if (currentIndex + reviewsPerPage < reviews.length) {
        currentIndex += reviewsPerPage;
        renderReviews();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex - reviewsPerPage >= 0) {
        currentIndex -= reviewsPerPage;
        renderReviews();
      }
    });

    renderReviews();
  }

  /* FAQ */
  document.querySelectorAll(".faq").forEach(faq => {
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
  });

  /* Business Hours */
  const status = document.getElementById("businessStatus");
  const hours = document.getElementById("businessHoursText");
  const dot = document.querySelector(".status-dot");

  if (status && hours && dot) {
    const now = new Date();
    const currentTime = now.getHours() + now.getMinutes() / 60;
    const openTime = 9.5;
    const closeTime = 20.5;

    if (currentTime >= openTime && currentTime < closeTime) {
      status.textContent = "🟢 Open Now";
      hours.textContent = "Until 8:30 PM • Same-Day Response";
      dot.style.background = "#22c55e";
    } else {
      status.textContent = "🔴 Closed";
      hours.textContent = currentTime < openTime
        ? "Opens Today at 9:30 AM"
        : "Opens Tomorrow at 9:30 AM";
      dot.style.background = "#ef4444";
    }
  }

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

});