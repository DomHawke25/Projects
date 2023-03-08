// Get header
const header = document.getElementById("header");

// Create Icon
const createIcon = (iconLocation, iconAlt, iconLink) => {
    const div = document.createElement("div");
    const link = document.createElement("a");
    const icon = document.createElement("img");

    icon.setAttribute("src", iconLocation);
    icon.setAttribute("alt", iconAlt);

    link.setAttribute("href", iconLink);

    div.classList.add("headerIcon");

    link.appendChild(icon);
    div.appendChild(link);
    header.appendChild(div);
}

//Create back Icon
createIcon("https://domhawke25.github.io/Projects/images/icons8-left-arrow-100.png", "left icon by icons8.com", "https://domhawke25.github.io/Projects/")
document.getElementsByClassName("headerIcon")[0].classList.add("back");

// Create View Code text
const viewCodeLabel = document.createElement("a");
viewCodeLabel.innerHTML = "View Code";
viewCodeLabel.setAttribute("id", "viewCode")
header.appendChild(viewCodeLabel);

// Create Github Icon
createIcon("https://domhawke25.github.io/Projects/images/icons8-github-96.png", "github icon by icons8.com", "https://github.com/DomHawke25");
// Create Linked In Icon
createIcon("https://domhawke25.github.io/Projects/images/icons8-linkedin-96.png", "Linked In icon by icons8.com", "https://www.linkedin.com/in/dominic-hawke/");
