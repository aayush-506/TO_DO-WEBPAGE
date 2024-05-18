// let ai= document.getElementsByClassName("accordion")
// ai.addEventListener("click",function(){
//   document.getElementsByClassName("accordion").innerHTML =
// })

// document.getElementById("acc0").addEventListener("click", function() {
//   document.getElementById("acc0").innerHTML = ` <h4> <input type="checkbox">Today Tasks:</h5>`;
// });










var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


document.getElementById("acc0").addEventListener("click", function() {
  document.getElementById("acc0").innerHTML = ` <h4> <input type="checkbox">Today Tasks:</h5>`;
});