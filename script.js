document.addEventListener("DOMContentLoaded", function () {
    // Hide all sections initially
    let contentSections = document.querySelectorAll(".section");
    contentSections.forEach(section => section.style.display = "none");

    // Function to show selected section
    window.showSection = function (sectionId) {
        contentSections.forEach(section => section.style.display = "none"); // Hide all sections
        let targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = "block"; // Show the clicked section
        }
    };

    // Ensure mobile tap registers properly
    let menuItems = document.querySelectorAll(".sidebar ul li");
    menuItems.forEach(item => {
        item.addEventListener("touchstart", function () {
            let targetId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            showSection(targetId);
        });
    });

    // Toggle submenu for Basic Documents
    window.toggleDropdown = function (submenuId) {
        let submenu = document.getElementById(submenuId);
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    };
});
