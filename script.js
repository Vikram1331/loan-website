document.addEventListener("DOMContentLoaded", function () {
    // Hide all content sections initially
    let contentSections = document.querySelectorAll(".content-section");
    contentSections.forEach(section => section.style.display = "none");

    // Add event listener for each main menu item
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            // Hide all sections
            contentSections.forEach(section => section.style.display = "none");

            // Get the target content ID from the clicked menu item
            let targetId = this.getAttribute("data-target");
            let targetSection = document.getElementById(targetId);

            // Show the selected section
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });

    // Handle submenu toggling
    let submenuToggles = document.querySelectorAll(".submenu-toggle");
    submenuToggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            let submenu = this.nextElementSibling;
            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        });
    });

    // Ensure that clicking a submenu item also triggers content display
    let submenuItems = document.querySelectorAll(".submenu-item");
    submenuItems.forEach(submenuItem => {
        submenuItem.addEventListener("click", function () {
            // Hide all sections
            contentSections.forEach(section => section.style.display = "none");

            // Get the target content ID from the clicked submenu item
            let targetId = this.getAttribute("data-target");
            let targetSection = document.getElementById(targetId);

            // Show the selected section
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });
});