document.addEventListener("DOMContentLoaded", function () {

    const clientFullName = localStorage.getItem("clientFullName");

    const heading = document.getElementById("thankYouHeading");

    const message = document.getElementById("thankYouMessage");

    if (clientFullName) {

        heading.textContent = `Thank You, ${clientFullName}!`;

        message.textContent =
            `We've successfully received your quote request, ${clientFullName}.`;

        localStorage.removeItem("clientName");

    }

});

document.addEventListener("DOMContentLoaded", () => {

    const clientFullName = localStorage.getItem("clientFullName");

    const heading = document.getElementById("thankYouHeading");
    const message = document.getElementById("thankYouMessage");

    if (clientFullName) {

        heading.textContent = `Thank You, ${clientFullName}!`;

        message.innerHTML = `
            We've successfully received your quote request,
            <strong>${clientFullName}</strong>.
        `;

        localStorage.removeItem("clientFullName");

    }

});