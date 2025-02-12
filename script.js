document.addEventListener("DOMContentLoaded", function () {
    // Hide all sections initially
    let contentSections = document.querySelectorAll(".section");
    contentSections.forEach(section => section.style.display = "none");

    // Function to show a section when clicked
    window.showSection = function (sectionId) {
        // Hide all sections first
        contentSections.forEach(section => section.style.display = "none");

        // Show the selected section
        let targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = "block";
        }
    };

    // Function to toggle dropdown submenu
    window.toggleDropdown = function (submenuId) {
        let submenu = document.getElementById(submenuId);
        if (submenu) {
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        }
    };

    // Ensure menu items work properly
    let menuItems = document.querySelectorAll(".sidebar ul li:not(.dropdown)");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            let targetId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            showSection(targetId);
        });
    });

    // Fix submenu clicks in mobile view
    let submenuToggles = document.querySelectorAll(".dropdown");
    submenuToggles.forEach(item => {
        item.addEventListener("click", function () {
            let targetSubmenu = item.querySelector(".submenu");
            if (targetSubmenu) {
                targetSubmenu.style.display = targetSubmenu.style.display === "block" ? "none" : "block";
            }
        });
    });
});
