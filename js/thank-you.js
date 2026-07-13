document.addEventListener("DOMContentLoaded", function () {
  const clientFullName =
    localStorage.getItem("clientFullName");

  const heading =
    document.getElementById("thankYouHeading");

  const message =
    document.getElementById("thankYouMessage");

  if (clientFullName && heading && message) {
    heading.textContent =
      `Thank You, ${clientFullName}!`;

    message.textContent =
      `Your cleaning quote request has been successfully received, ${clientFullName}.`;

    localStorage.removeItem("clientFullName");
  }
});