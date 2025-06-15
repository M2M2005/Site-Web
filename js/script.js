// Burger menu
const burgerMenu = document.getElementById('burger-menu');
const burgerNav = document.getElementById('burger-nav');
burgerMenu.addEventListener('click', () => {
    burgerNav.classList.toggle('active');
    burgerMenu.classList.toggle('open');
});

// CV - Compétences et Page de contact
document.addEventListener('DOMContentLoaded', function() {

    const skillCircles = document.querySelectorAll('.skill-circle');
    skillCircles.forEach(circle => {
        const percent = parseInt(circle.dataset.percent);
        const maskAngle = percent * 3.6;
        circle.style.setProperty('--mask-angle', `${maskAngle}deg`);
    });

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

    // Modal des projets
    const projectModalContainer = document.getElementById('projectModalContainer');
    const overlay = document.getElementById('overlay');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const openModalButtons = document.querySelectorAll('.open-project-modal');

    const modalImageDisplay = document.getElementById('modalImageDisplay');
    const carouselNav = document.getElementById('carouselNav');
    const prevImageBtn = document.getElementById('prevImageBtn');
    const nextImageBtn = document.getElementById('nextImageBtn');

    const modalProjectTitle = document.getElementById('modalProjectTitle');
    const modalProjectCategory = document.getElementById('modalProjectCategory');
    const modalProjectDescription = document.getElementById('modalProjectDescription');
    const modalProjectTech = document.getElementById('modalProjectTech');
    const modalLinksContainer = document.getElementById('modalLinksContainer');

    let currentImageIndex = 0;
    let projectImages = [];

    const updateCarousel = () => {
        if (projectImages.length === 0) {
            modalImageDisplay.innerHTML = '<p style="text-align:center; padding:20px; color:#666;">Aucune image disponible pour ce projet.</p>';
            carouselNav.innerHTML = '';
            prevImageBtn.style.display = 'none';
            nextImageBtn.style.display = 'none';
            return;
        }

        modalImageDisplay.innerHTML = '';
        const img = document.createElement('img');
        img.src = projectImages[currentImageIndex];
        img.alt = modalProjectTitle.textContent + ' - Image ' + (currentImageIndex + 1);
        modalImageDisplay.appendChild(img);

        carouselNav.innerHTML = '';
        if (projectImages.length > 1) {
            projectImages.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('carousel-nav-dot');
                if (index === currentImageIndex) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    currentImageIndex = index;
                    updateCarousel();
                });
                carouselNav.appendChild(dot);
            });
            prevImageBtn.style.display = 'block';
            nextImageBtn.style.display = 'block';
        } else {
            prevImageBtn.style.display = 'none';
            nextImageBtn.style.display = 'none';
        }
    };

    const goToNextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % projectImages.length;
        updateCarousel();
    };

    const goToPrevImage = () => {
        currentImageIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
        updateCarousel();
    };

    const openModal = (e) => {
        const button = e.currentTarget;

        const title = button.dataset.title || 'Titre non disponible';
        const category = button.dataset.category || 'Catégorie non spécifiée';
        const description = button.dataset.description || 'Aucune description détaillée n\'est disponible pour ce projet.';
        const tech = button.dataset.tech || 'Technologies non spécifiées.';
        const githubLink = button.dataset.githubLink;
        const driveLink = button.dataset.driveLink;
        const webLink = button.dataset.webLink;
        const imagesData = button.dataset.images;

        projectImages = imagesData ? imagesData.split(',') : [];
        currentImageIndex = 0;

        modalProjectTitle.textContent = title;
        modalProjectCategory.textContent = category;
        modalProjectDescription.textContent = description;
        modalProjectTech.textContent = tech;

        updateCarousel();

        modalLinksContainer.innerHTML = '';

        if (githubLink) {
            const githubBtn = document.createElement('a');
            githubBtn.href = githubLink;
            githubBtn.target = '_blank';
            githubBtn.classList.add('form-btn', 'github');
            githubBtn.innerHTML = '<ion-icon name="logo-github"></ion-icon><span>Voir sur GitHub</span>';
            modalLinksContainer.appendChild(githubBtn);
        }
        if (driveLink) {
            const driveBtn = document.createElement('a');
            driveBtn.href = driveLink;
            driveBtn.target = '_blank';
            driveBtn.classList.add('form-btn', 'drive');
            driveBtn.innerHTML = '<ion-icon name="folder-open"></ion-icon><span>Voir sur Drive</span>';
            modalLinksContainer.appendChild(driveBtn);
        }
        if (webLink) {
            const webBtn = document.createElement('a');
            webBtn.href = webLink;
            webBtn.target = '_blank';
            webBtn.classList.add('form-btn', 'website');
            webBtn.innerHTML = '<ion-icon name="globe-outline"></ion-icon><span>Voir le Site Web</span>';
            modalLinksContainer.appendChild(webBtn);
        }

        projectModalContainer.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        projectModalContainer.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    openModalButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    closeModalBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    prevImageBtn.addEventListener('click', goToPrevImage);
    nextImageBtn.addEventListener('click', goToNextImage);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModalContainer.classList.contains('active')) {
            closeModal();
        }
    });
});