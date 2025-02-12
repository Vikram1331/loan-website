document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded: JavaScript is working!");

    // Hide all sections initially
    let contentSections = document.querySelectorAll(".section");
    contentSections.forEach(section => {
        section.style.display = "none";
    });

    // Function to show a section
    window.showSection = function (sectionId) {
        console.log("Clicked on: " + sectionId);
        
        // Hide all sections
        contentSections.forEach(section => {
            section.style.display = "none";
        });

        // Show the selected section
        let targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = "block";
        } else {
            console.log("Error: Section not found!");
        }
    };

    // Function to toggle dropdown submenu
    window.toggleDropdown = function (submenuId) {
        console.log("Toggling dropdown: " + submenuId);
        let submenu = document.getElementById(submenuId);
        if (submenu) {
            submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
        }
    };

    // Attach event listeners for main menu
    let menuItems = document.querySelectorAll(".sidebar ul li:not(.dropdown)");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            let targetId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            showSection(targetId);
        });
    });

    // Attach event listener for dropdowns
    let submenuToggles = document.querySelectorAll(".dropdown");
    submenuToggles.forEach(item => {
        item.addEventListener("click", function () {
            let targetSubmenu = item.querySelector(".submenu");
            if (targetSubmenu) {
                targetSubmenu.style.display = (targetSubmenu.style.display === "block") ? "none" : "block";
            }
        });
    });

    console.log("Event Listeners Attached!");
});
