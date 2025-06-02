// JavaScript for enhancing interactivity on the Insurance Policy Management website

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Highlight navigation links on scroll
    const sections = document.querySelectorAll("main section");
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));

    // Form submission alert
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for reaching out! We will get back to you soon.");
            contactForm.reset();
        });
    }
});
