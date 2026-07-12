// review section of the code

/* =========================================
   REVIEW SECTION
========================================= */

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
    },
    {
      text: "Amazing service and great attention to detail. My home looked beautiful after the cleaning.",
      name: "Client",
      link: "https://share.google/M2wn4FrmEMrD9HuFE"
    },
    {
      text: "They were on time, professional, and left everything spotless.",
      name: "Client",
      link: "https://share.google/M2wn4FrmEMrD9HuFE"
    },
    {
      text: "Super happy with the results. I will definitely be booking again.",
      name: "Client",
      link: "https://share.google/M2wn4FrmEMrD9HuFE"
    },
    {
      text: "Excellent communication and very thorough cleaning.",
      name: "Client",
      link: "https://share.google/M2wn4FrmEMrD9HuFE"
    },
    {
      text: "Friendly team and amazing results. The whole place felt fresh and clean.",
      name: "Client",
      link: "https://share.google/M2wn4FrmEMrD9HuFE"
    },
    {
      text: "Highly recommend Simply Jens Cleaning. Great experience from start to finish.",
      name: "Client",
      link: "https://share.google/M2wn4FrmEMrD9HuFE"
    }
  ];

  let currentIndex = 0;
  const reviewsPerPage = 3;

  function renderReviews() {
    reviewsContainer.innerHTML = "";

    const visibleReviews = reviews.slice(
      currentIndex,
      currentIndex + reviewsPerPage
    );

    visibleReviews.forEach(review => {
      const bubble = document.createElement("div");
      bubble.className = "bubble";

      bubble.innerHTML = `
        <div class="reviews">
          <div class="review-stars">★★★★★</div>

          <p class="text_reviews">
            "${review.text}"
          </p>

          <p class="review-name">
            – ${review.name}
          </p>

          <a
            href="${review.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="review-link"
          >
            Read More
          </a>
        </div>
      `;

      reviewsContainer.appendChild(bubble);
    });

    prevBtn.disabled = currentIndex === 0;

    nextBtn.disabled =
      currentIndex + reviewsPerPage >= reviews.length;

    prevBtn.style.opacity =
      currentIndex === 0 ? "0.5" : "1";

    nextBtn.style.opacity =
      currentIndex + reviewsPerPage >= reviews.length
        ? "0.5"
        : "1";
  }

  nextBtn.addEventListener("click", function () {
    if (currentIndex + reviewsPerPage < reviews.length) {
      currentIndex += reviewsPerPage;
      renderReviews();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex - reviewsPerPage >= 0) {
      currentIndex -= reviewsPerPage;
      renderReviews();
    }
  });

  renderReviews();
}