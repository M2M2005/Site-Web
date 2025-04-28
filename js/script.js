// Burger menu
const burgerMenu = document.getElementById('burger-menu');
const burgerNav = document.getElementById('burger-nav');
burgerMenu.addEventListener('click', () => {
    burgerNav.classList.toggle('active');
    burgerMenu.classList.toggle('open');
});

// CV - Compétences
document.addEventListener('DOMContentLoaded', function() {

    // Animation des cercles de compétences
    const skillCircles = document.querySelectorAll('.skill-circle');

    skillCircles.forEach(circle => {
        const percent = parseInt(circle.dataset.percent);
        const maskAngle = percent * 3.6; // Multiplier par 3.6 pour obtenir l'angle en degrés (100% = 360deg)
        circle.style.setProperty('--mask-angle', `${maskAngle}deg`);
    });

    // Page de contact
    const form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");
    const formStatus = document.querySelector(".form-status");

    if (form && formInputs.length > 0 && formBtn && formStatus) {
        formInputs.forEach(input => {
            input.addEventListener("input", function () {
                const errorSpan = this.nextElementSibling;

                if (this.validity.valueMissing) {
                    this.classList.add("invalid");
                    if (errorSpan && errorSpan.classList.contains('error-message')) {
                        errorSpan.textContent = "Veuillez renseigner ce champ.";
                    }
                } else if (this.validity.typeMismatch && this.type === 'email') {
                    this.classList.add("invalid");
                    if (errorSpan && errorSpan.classList.contains('error-message')) {
                        errorSpan.textContent = "Veuillez saisir une adresse e-mail valide.";
                    }
                } else if (this.validity.tooShort) {
                    this.classList.add("invalid");
                    if (errorSpan && errorSpan.classList.contains('error-message')) {
                        errorSpan.textContent = `Ce champ doit contenir au moins ${this.minLength} caractères.`;
                    }
                } else {
                    this.classList.remove("invalid");
                    if (errorSpan && errorSpan.classList.contains('error-message')) {
                        errorSpan.textContent = "";
                    }
                }

                formBtn.disabled = !form.checkValidity();
            });
        });

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            formBtn.disabled = true;
            formStatus.style.display = "none";
            formStatus.textContent = "Envoi en cours...";
            formStatus.style.color = "var(--light-gray)";
            formStatus.style.display = "block";


            const formData = new FormData(form);
            const formAction = form.getAttribute("action");

            fetch(formAction, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
                .then(response => {
                    if (response.ok) {
                        formStatus.innerHTML = "Merci ! Votre message a été envoyé.";
                        formStatus.style.color = "var(--orange-yellow-crayola)";
                        form.reset();
                        formInputs.forEach(input => input.classList.remove('invalid'));
                        formBtn.disabled = true;
                    } else {
                        return response.json().then(data => {
                            let errorMessage = "Oups ! Une erreur s'est produite.";
                            if (data && data.errors) {
                                errorMessage = data.errors.map(error => error.message).join(", ");
                            }
                            throw new Error(errorMessage);
                        }).catch(() => {
                            throw new Error("Oups ! Une erreur serveur s'est produite.");
                        });
                    }
                })
                .catch(error => {
                    formStatus.innerHTML = error.message || "Oups ! Une erreur réseau s'est produite.";
                    formStatus.style.color = "var(--bittersweet-shimmer)";
                    formBtn.disabled = false;
                })
                .finally(() => {
                    formStatus.style.display = "block";
                    if (form.checkValidity()) {
                        formBtn.disabled = false;
                    }
                    if (formStatus.textContent.includes("Merci")) {
                        formBtn.disabled = true;
                    }
                });
        });
    }
});