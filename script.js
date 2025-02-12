document.addEventListener("DOMContentLoaded", function () {
    // Hide all content sections initially
    let contentSections = document.querySelectorAll(".section");
    contentSections.forEach(section => section.style.display = "none");

    // Function to show the clicked section
    window.showSection = function (sectionId) {
        contentSections.forEach(section => section.style.display = "none"); // Hide all sections
        let targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = "block"; // Show selected section
        }
    };

    // Function to toggle dropdown menus
    window.toggleDropdown = function (submenuId) {
        let submenu = document.getElementById(submenuId);
        if (submenu.style.display === "block") {
            submenu.style.display = "none"; // Hide submenu if already open
        } else {
            submenu.style.display = "block"; // Show submenu if hidden
        }
    };
});
