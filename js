document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('projectsBtn');
    const title = document.getElementById('main-title');

    // Petit effet au clic sur le bouton
    btn.addEventListener('click', () => {
        alert("Chargement de vos projets mathématiques et web...");
    });

    // Animation subtile du titre au mouvement de la souris
    document.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 25;
        let y = (window.innerHeight / 2 - e.pageY) / 25;
        title.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});
