document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript Loaded: Script is working!");

    // **1️⃣ Hide all sections initially**
    let contentSections = document.querySelectorAll(".section");
    contentSections.forEach(section => {
        section.style.display = "none";
    });

    // **2️⃣ Function to show a section**
    window.showSection = function (sectionId) {
        console.log("🔹 Showing Section:", sectionId);

        // Hide all sections first
        contentSections.forEach(section => {
            section.style.display = "none";
        });

        // Show only the selected section
        let targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = "block";
        } else {
            console.error("❌ Error: Section not found -", sectionId);
        }
    };

    // **3️⃣ Function to toggle submenu dropdown**
    window.toggleDropdown = function (submenuId) {
        console.log("🔻 Toggling Dropdown:", submenuId);
        let submenu = document.getElementById(submenuId);
        if (submenu) {
            submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
        }
    };

    // **4️⃣ Attach event listeners for menu items**
    let menuItems = document.querySelectorAll(".sidebar ul li:not(.dropdown)");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            let targetId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            showSection(targetId);
        });
    });

    // **5️⃣ Attach event listeners for dropdown menus**
    let dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(item => {
        item.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents closing the menu accidentally
            let targetSubmenu = this.querySelector(".submenu");
            if (targetSubmenu) {
                targetSubmenu.style.display = (targetSubmenu.style.display === "block") ? "none" : "block";
            }
        });
    });

    console.log("✅ Event Listeners Attached!");
});
