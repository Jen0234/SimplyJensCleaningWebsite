

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