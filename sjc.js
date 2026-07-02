console.log("Analytics loaded");

/* business type selection */

const serviceSelect = document.getElementById("serviceSelect");
const residentialFields = document.getElementById("residentialFields");
const commercialFields = document.getElementById("commercialFields");

const businessType = document.getElementById("businessType");
const otherBusinessField = document.getElementById("otherBusinessField");

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

businessType.addEventListener("change", function () {
  if (this.value === "other") {
    otherBusinessField.style.display = "block";
  } else {
    otherBusinessField.style.display = "none";
  }
});

// process section of the code


const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
});

reveals.forEach(el => observer.observe(el));


// mini contact form code


document.querySelectorAll('.person-btn').forEach(btn => {
  btn.addEventListener('click', function(){
    const options = this.nextElementSibling;
    options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
  });
});

// badge section of the code 

document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll(".counter");

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

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        entry.target.classList.add("counted");
        runCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));

});


// review section of the code

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

const reviewsContainer = document.getElementById("reviewsContainer");
const nextBtn = document.getElementById("nextReviews");
const prevBtn = document.getElementById("prevReviews");

let currentIndex = 0;
const reviewsPerPage = 3;

function renderReviews() {
    reviewsContainer.innerHTML = "";

    const visibleReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

    visibleReviews.forEach((review, index) => {
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

    prevBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";
    nextBtn.style.opacity = currentIndex + reviewsPerPage >= reviews.length ? "0.5" : "1";
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

// payment trusted section of the code

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

/* FAQ section of the code  */

var acc = document.getElementsByClassName("faq");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var response = this.nextElementSibling;
    if (response.style.maxHeight) {
      response.style.maxHeight = null;
    } else {
      response.style.maxHeight = response.scrollHeight + "px";
    } 
  });
}


// footer of the code 


function updateStatus() {
  const status = document.querySelector('.footer-status');
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();

  // Convert time to decimal (e.g. 9:30 = 9.5)
  const currentTime = hour + minutes / 60;

  const openTime = 9.5;   // 9:30 AM
  const closeTime = 20.5; // 8:30 PM

  if (currentTime >= openTime && currentTime < closeTime) {
    status.classList.add('open');
    status.classList.remove('closed');
    status.innerHTML = '<span></span> Open Now';
  } else {
    status.classList.add('closed');
    status.classList.remove('open');
    status.innerHTML = '<span></span> Closed';
    status.innerHTML = '<span></span> Open • Closes at 8:30 PM';
    status.innerHTML = '<span></span> Closed • Opens at 9:30 AM';
  }
}

updateStatus();

// pop-up code 


window.addEventListener("load", function () {
  const popup = document.getElementById("promoPopup");
  const closeBtn = document.getElementById("closePopup");

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
});

// prevent from copying code from the website

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

