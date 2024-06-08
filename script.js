const DateinputBox = document.getElementById("enterDate");
const jsAccordion = document.getElementById("jsAccordion");
const panel = document.getElementById("panel");

function addDate(){
  if(DateinputBox.value ===''){
    alert("Please Enter the Date of the Task");
  }
  else{
      let button = document.createElement("Button");
      button.innerHTML = DateinputBox.value;
      button.classList.add("accordion");
      jsAccordion.appendChild(button);
  }
  DateinputBox.value = "";
}

button.addEventListener("click",function(){
  let ul_pannel = document.createElement("ul");
  ul_pannel.classList.add("list-container");
  panel.appendChild(ul_pannel);
})






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
