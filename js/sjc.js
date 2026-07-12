/* =========================================
   SIMPLY JENS CLEANING
   Global JavaScript
========================================= */

console.log("Simply Jens Cleaning Loaded");

/* =========================================
   REVEAL ANIMATIONS
========================================= */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}


/* =========================================
   MINI CONTACT BUTTONS
========================================= */

document.querySelectorAll(".person-btn").forEach(button => {

    button.addEventListener("click", function () {

        const options = this.nextElementSibling;

        if (!options) return;

        options.style.display =
            options.style.display === "flex"
                ? "none"
                : "flex";

    });

});


/* =========================================
   BUSINESS HOURS
========================================= */

const businessStatus =
document.getElementById("businessStatus");

const businessHours =
document.getElementById("businessHoursText");

const statusDot =
document.querySelector(".status-dot");

if (businessStatus && businessHours && statusDot) {

    const now = new Date();

    const currentTime =
        now.getHours() +
        now.getMinutes() / 60;

    const openTime = 9.5;
    const closeTime = 20.5;

    if (
        currentTime >= openTime &&
        currentTime < closeTime
    ) {

        businessStatus.textContent =
            "🟢 Open Now";

        businessHours.textContent =
            "Until 8:30 PM • Same-Day Response";

        statusDot.style.background =
            "#22c55e";

    } else {

        businessStatus.textContent =
            "🔴 Closed";

        if (currentTime < openTime) {

            businessHours.textContent =
                "Opens Today at 9:30 AM";

        } else {

            businessHours.textContent =
                "Opens Tomorrow at 9:30 AM";

        }

        statusDot.style.background =
            "#ef4444";

    }

}


/* =========================================
   POPUP
========================================= */

const popup =
document.getElementById("promoPopup");

const closePopup =
document.getElementById("closePopup");

if (popup && closePopup) {

    window.addEventListener("load", () => {

        setTimeout(() => {

            popup.style.display = "flex";

        }, 2000);

    });

    closePopup.addEventListener("click", () => {

        popup.style.display = "none";

    });

    popup.addEventListener("click", function (e) {

        if (e.target === popup) {

            popup.style.display = "none";

        }

    });

}


/* =========================================
   COPYRIGHT YEAR
========================================= */

const year =
document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================
   DISABLE RIGHT CLICK
========================================= */

document.addEventListener("contextmenu", function (e) {

    e.preventDefault();

});


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target =
        document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backToTop =
document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}