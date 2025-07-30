document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menuOpen');
    const nav = document.getElementById('navwrap');

    menu.addEventListener('click', function(event) {
        nav.classList.toggle('active');
        event.stopPropagation(); // prevent triggering the document click
    });

    document.addEventListener('click', function(event) {
        const clickedInsideNav = nav.contains(event.target);
        const clickedMenuIcon = menu.contains(event.target);

        if (!clickedInsideNav && !clickedMenuIcon) {
        nav.classList.remove('active');
        }
    });
});