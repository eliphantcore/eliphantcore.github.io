// script.js
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.stars span'); // Selecciona todas las estrellas
    stars.forEach(star => {
        star.addEventListener('click', function () {
            const value = this.getAttribute('data-value'); // Obtiene el valor de la estrella clickeada
            stars.forEach((s, index) => {
                if (index < value) {
                    s.classList.add('active'); // Añade la clase 'active' a las estrellas anteriores
                } else {
                    s.classList.remove('active'); // Remueve la clase 'active' de las estrellas siguientes
                }
            });
        });
    });
});