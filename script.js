document.addEventListener("DOMContentLoaded", function() {
    // GSAP Animation for Header Text
    gsap.from("h1", { opacity: 0, y: -50, duration: 1 });

    // Animate Feature List
    gsap.from("#features li", { opacity: 0, x: -20, duration: 1, stagger: 0.2 });
    // Animate features section on load
    let features = document.getElementById("features");
    features.style.opacity = "0";
    features.style.transform = "scale(0.8)";

    setTimeout(() => {
        features.style.transition = "all 0.5s ease-in-out";
        features.style.opacity = "1";
        features.style.transform = "scale(1)";
    }, 500);
});

