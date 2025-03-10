document.addEventListener("DOMContentLoaded", function () {
    // GSAP Animation for Header Text
    gsap.from("h1", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });

    // Animate Feature List with Staggering Effect
    gsap.from("#features li", { opacity: 0, x: -30, duration: 1, stagger: 0.2, ease: "power2.out" });

    // Animate features section on load
    let features = document.getElementById("features");
    features.style.opacity = "0";
    features.style.transform = "scale(0.8)";

    setTimeout(() => {
        features.style.transition = "all 0.5s ease-in-out";
        features.style.opacity = "1";
        features.style.transform = "scale(1)";
    }, 500);

    // Button Animation on Hover
    let buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, { scale: 1.1, duration: 0.2 });
        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { scale: 1, duration: 0.2 });
        });
    });

    // Button Click Effect
    function showMore() {
        gsap.to("#info", { opacity: 1, y: 0, duration: 0.5 });
    }
    document.getElementById("learnMoreBtn").addEventListener("click", showMore);

    // Dark Mode Toggle
    let darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
