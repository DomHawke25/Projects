// When the user clicks on the sidebar, toggles between hiding and showing sidebar content.
let sidebar = document.getElementById("sidebar");

sidebar.onclick = () => {
    sidebar.classList.toggle("sidebarActive");
    document.getElementById("arrow").classList.toggle("leftArrow")
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = (event) => {
    if (!event.target.matches([".sidebar", ".sidebarArrow", ".arrow", ".sidebarMain", ".sidebarMain h1"])) {
        if (sidebar.classList.contains("sidebarActive")) {
            sidebar.classList.remove("sidebarActive");
            document.getElementById("arrow").classList.remove("leftArrow");
        }
    }
}