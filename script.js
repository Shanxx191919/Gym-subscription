document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo");
    
    // Adding a slight delay for the animation
    setTimeout(() => {
        logo.classList.add("animate");
    }, 500); // 500ms delay
});
