
const form = document.querySelector("form");
form.onsubmit = confirmation;

function clearContent() {
    const removeNews=document.querySelector(".latestNews");
    removeNews.innerHTML="";
    const removeHow=document.querySelector(".howItWorks");
    removeHow.innerHTML="";
    const part1 = document.querySelector(".section1");
    part1.remove();
    const part2 = document.querySelector(".section2");
    part2.remove();
    const part3 = document.querySelector(".section3");
    part3.remove();
    const footerPart = document.querySelector(".footer");
    footerPart.remove();
}

function addConfirmation() {
    const checkMark = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    checkMark.classList.add("checkMarkA");
    checkMark.setAttribute("viewBox", "0 0 24 24");
    checkMark.style.display = "block";
    checkMark.style.margin = "auto";
    checkMark.style.width = "300px";
    checkMark.style.height = "300px";
  
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M6,12l4,4L18,6");
    path.style.fill = "none";
    path.style.stroke = "green";
    path.style.strokeWidth = "6"; // Adjust the stroke width as desired
    path.style.strokeLinecap = "round";
    path.style.strokeLinejoin = "round";
    checkMark.appendChild(path);
    document.body.appendChild(checkMark);
  
    // Animate the checkmark drawing effect using JavaScript
    const animate = () => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
  
      // Trigger reflow to apply the updated styles
      path.getBoundingClientRect();
  
      path.style.strokeDashoffset = "0";
      path.style.transition = "stroke-dashoffset 1s ease";
      path.style.strokeDashoffset = "0";
    };
    requestAnimationFrame(animate);
  
    const message1 = document.createElement("h1");
    message1.textContent = "Your bill has been successfully submitted.";
    message1.style.fontSize = "45px";
    document.body.appendChild(message1);
    message1.style.display = "block";
    message1.style.textAlign = "center";
  
    const message2 = document.createElement("h1");
    message2.textContent =
      "Next, you will have your qualification call with the specialist, who will be in touch with you at your scheduled appointment time.";
    document.body.appendChild(message2);
    message2.style.display = "block";
    message2.style.textAlign = "center";
    message2.style.fontSize = "25px";
  }

function confirmation(event) {
    event.preventDefault(); // Prevent the default form submission

    clearContent();
    addConfirmation();

    // Additional form submission actions can be performed here if needed

    return false; // Prevent the form from submitting and refreshing the page
    
}