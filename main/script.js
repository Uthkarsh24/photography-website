// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.querySelector(".response-message").innerText = "Thank you for your message! I'll get back to you soon.";
    } else {
        document.querySelector(".response-message").innerText = "Please fill in all fields.";
    }
});

// Lightbox Gallery (optional)
document.querySelectorAll(".gallery-item").forEach((img) => {
    img.addEventListener("click", () => {
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
        document.body.appendChild(lightbox);
        lightbox.addEventListener("click", () => {
            lightbox.remove();
        });
    });
});
