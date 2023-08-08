// LOGIN PHP


const togglePassword = button => {
    button.classList.toggle("showing");

    const input = document.getElementById("pass");
    
    input.type = (input.type === "password")? "text" : "password";
};


// Espera a que el DOM se haya cargado
document.addEventListener("DOMContentLoaded", function() {
  // Selecciona el elemento al que deseas aplicar el scrollTrigger
    var container = document.querySelector(".container");

  // Crea un timeline de GSAP
    var timeline = gsap.timeline();

  // Agrega una animación a tu timeline
    timeline.from(container, {
        opacity: 0,
        y: 50,
        duration: 2
    });

  // Crea un scrollTrigger
    ScrollTrigger.create({
    trigger: container, // El elemento que activará el scrollTrigger
    animation: timeline, // La animación que se reproducirá
    start: "top 80%", // Punto de inicio de la animación relativo al trigger
    end: "bottom 80%", // Punto de finalización de la animación relativo al trigger
    scrub: true, // Permite que la animación se ajuste al desplazamiento del usuario
    markers: true // Muestra marcadores para depurar el scrollTrigger
    });

    // Selecciona el elemento h2 con la clase .typing-animation
    var typingElement = document.querySelector(".typing-animation");

  // Crea una animación de GSAP
    gsap.fromTo(
        typingElement,
        { opacity: 50 },
        { opacity: 1, duration: 1, delay: 0.1 }
    );
});






