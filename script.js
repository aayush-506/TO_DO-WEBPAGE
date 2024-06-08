const DateinputBox = document.getElementById("enterDate");
const jsAccordion = document.getElementById("jsAccordion");

function addDate() {
  if (DateinputBox.value === "") {
    alert("Please Enter the Date of the Task");
  } else {
    let button = document.createElement("Button");
    button.innerHTML = DateinputBox.value;
    button.classList.add("accordion");
    jsAccordion.appendChild(button);

    let panel = document.createElement("div");
    panel.classList.add("panel");
    jsAccordion.appendChild(panel);

    let ul = document.createElement("ul");
    ul.classList.add("list-container");
    ul.style.padding = "9px";
    panel.appendChild(ul);

    let li_div = document.createElement("div");
    li_div.classList.add("li-div");
    ul.appendChild(li_div);

    let form = document.createElement("form");
    form.classList.add("new_task_form");
    li_div.appendChild(form);

    let task_input = document.createElement("input");
    task_input.classList.add("new_task_input");
    task_input.type = "text";
    task_input.placeholder = "Enter a New Task";
    form.appendChild(task_input);

    let task_btn = document.createElement("button");
    task_btn.classList.add("new_task_input_btn");
    task_btn.type = "submit";
    form.appendChild(task_btn);

    button.addEventListener("click", function () {
      button.classList.toggle("active");
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });

    let inline = document.createElement("div");
    inline.classList.add("inline");
    li_div.appendChild(inline);

    DateinputBox.value = "";

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (task_input.value === "") {
        alert("Please Enter the Task before pressing ADD");
      } else {
        let bullet_icon = document.createElement("div");
        bullet_icon.classList.add("bullet-icon");
        inline.appendChild(bullet_icon);

        let task = document.createElement("div");
        task.classList.add("task");
        inline.appendChild(task);

        let li_checked = document.createElement("li");
        li_checked.classList.add("checked");
        task.appendChild(li_checked);
        li_checked.innerHTML = task_input.value;

        ///////////////////////switch//////

        let switchLabel = document.createElement("label");
        switchLabel.classList.add("switch");
        inline.appendChild(switchLabel); 

        let switchInput = document.createElement("input");
        switchInput.type = "checkbox";
        switchLabel.appendChild(switchInput);

        let slider = document.createElement("div");
        slider.classList.add("slider");
        switchLabel.appendChild(slider); 

        let circle = document.createElement("div");
        circle.classList.add("circle");
        slider.appendChild(circle);

        let crossSVG = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        crossSVG.setAttribute("class", "cross");
        crossSVG.setAttribute("xml:space", "preserve");
        crossSVG.setAttribute("style", "enable-background: new 0 0 512 512");
        crossSVG.setAttribute("viewBox", "0 0 365.696 365.696");
        crossSVG.setAttribute("y", "0");
        crossSVG.setAttribute("x", "0");
        crossSVG.setAttribute("height", "6");
        crossSVG.setAttribute("width", "6");
        crossSVG.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        crossSVG.setAttribute("version", "1.1");
        crossSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        circle.appendChild(crossSVG);

        let gElement = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "g"
        );
        let pathElement = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        pathElement.setAttribute("data-original", "#000000");
        pathElement.setAttribute("fill", "currentColor");
        pathElement.setAttribute(
          "d",
          "M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
        );
        gElement.appendChild(pathElement);
        crossSVG.appendChild(gElement);

        
        let svgElement = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        svgElement.setAttribute("class", "checkmark");
        svgElement.setAttribute("xml:space", "preserve");
        svgElement.setAttribute("style", "enable-background: new 0 0 512 512");
        svgElement.setAttribute("viewBox", "0 0 24 24");
        svgElement.setAttribute("y", "0");
        svgElement.setAttribute("x", "0");
        svgElement.setAttribute("height", "10");
        svgElement.setAttribute("width", "10");
        svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        svgElement.setAttribute("version", "1.1");
        svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        let g2Element = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "g"
        );
        let path2Element = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        pathElement.setAttribute("class", "");
        pathElement.setAttribute("data-original", "#000000");
        pathElement.setAttribute("fill", "currentColor");
        pathElement.setAttribute(
          "d",
          "M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
        );
        g2Element.appendChild(path2Element);
        svgElement.appendChild(g2Element);        
        circle.appendChild(svgElement); 

                  //  have to sart from here  //

        task_input.value = "";
      }
    });
  }
}

// var acc = document.getElementsByClassName("accordion");
// var i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     /* Toggle between adding and removing the "active" class,
//         to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// button.addEventListener("click", function () {
//   let ul_pannel = document.createElement("ul");
//   ul_pannel.classList.add("list-container");
//   panel.appendChild(ul_pannel);
// });
