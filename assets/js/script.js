// assets/js/script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Link Bio de Jose Ángel cargado correctamente.");

    // Ejemplo: Enlace con confirmación de redirección (opcional)
    const links = document.querySelectorAll(".link-item");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            // Puedes agregar aquí tracking o analíticas si lo deseas
            // console.log(`Redireccionando a: ${link.href}`);
        });
    });

    // Puedes añadir más lógica si decides extender tu link bio en el futuro
});
