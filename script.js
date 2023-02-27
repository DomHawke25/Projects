// When the user clicks on the sidebar, toggles between hiding and showing sidebar content.
let sidebar = document.getElementById("sidebar");
let touchStart, touchEnd;

sidebar.onclick = () => {
    sidebar.classList.toggle("sidebarActive");
    document.getElementById("arrow").classList.toggle("leftArrow");
    document.getElementById("overlay").classList.toggle("overlay");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = (event) => {
    if (!event.target.matches([".sidebar", ".sidebarArrow", ".arrow", ".sidebarMain", ".sidebarMain h1"])) {
        if (sidebar.classList.contains("sidebarActive")) {
            sidebar.classList.remove("sidebarActive");
            document.getElementById("arrow").classList.remove("leftArrow");
            document.getElementById("overlay").classList.remove("overlay");
        }
    }
}

// Open and Close sidebar upon Swipe event
document.addEventListener("touchstart", (event) => {
    touchStart = event.changedTouches[0].screenX;
});

document.addEventListener("touchend", (event) => {
    touchEnd = event.changedTouches[0].screenX;
    // Swiping Left
    if (touchStart > touchEnd && touchStart - touchEnd > 200) {
        sidebar.classList.remove("sidebarActive");
        document.getElementById("arrow").classList.remove("leftArrow");
        document.getElementById("overlay").classList.remove("overlay");
    }
    //Swiping Right
    if (touchStart < touchEnd && touchEnd - touchStart > 200) {
        sidebar.classList.add("sidebarActive");
        document.getElementById("arrow").classList.add("leftArrow");
        document.getElementById("overlay").classList.add("overlay");
    }
});