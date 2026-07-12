const quoteForm = document.querySelector("form");

if (quoteForm) {

    quoteForm.addEventListener("submit", function () {

        const firstName = document.getElementById("firstName").value.trim();

        localStorage.setItem("clientName", firstName);

    });

}