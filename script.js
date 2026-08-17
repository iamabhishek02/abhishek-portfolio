const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = menuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = menuBtn.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("contactForm").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    alert(`Thank you, ${name}! Your message form is ready. Connect a backend/email service to receive messages.`);
    event.target.reset();
});
