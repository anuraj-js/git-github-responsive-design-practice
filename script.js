const menuIcon = document.querySelector('.menu-icon');
const rightContractIcon = document.querySelector('.right-contract-icon');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const sidebarLinks = document.querySelectorAll('.sidebar a');

function hideSidebar() {
    menuIcon.style.visibility = 'visible';
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
}

menuIcon.addEventListener('click', ()=> {
    menuIcon.style.visibility = 'hidden';
    sidebar.style.display = 'flex';
    overlay.style.display = 'block';
});

rightContractIcon.addEventListener('click', hideSidebar);

overlay.addEventListener('click', hideSidebar);

for (let i = 0; i < sidebarLinks.length; i++) {
    sidebarLinks[i].addEventListener('click', hideSidebar);
}

window.addEventListener('resize', function () {
    if (window.innerWidth > 1000) {
        hideSidebar(); // Close the sidebar automatically
    }
});


