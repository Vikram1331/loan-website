function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

function toggleDropdown(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}