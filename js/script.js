// Burger menu
const burgerMenu = document.getElementById('burger-menu');
const burgerNav = document.getElementById('burger-nav');
burgerMenu.addEventListener('click', () => {
    burgerNav.classList.toggle('active');
    burgerMenu.classList.toggle('open');
});

// CV - Compétences et Page de contact
document.addEventListener('DOMContentLoaded', () => {
    const projectDetailButtons = document.querySelectorAll('.open-project-modal');
    const modalContainer = document.getElementById('projectModalContainer');
    const modalCloseButton = document.getElementById('closeModalBtn');

    const modalTitle = document.getElementById('modalProjectTitle');
    const modalCategory = document.getElementById('modalProjectCategory');
    const modalDescription = document.getElementById('modalProjectDescription');
    const modalTechnologies = document.getElementById('modalProjectTech');
    const modalLinksSection = document.getElementById('modalLinksContainer');
    const carouselDisplay = document.getElementById('modalImageDisplay');
    const carouselDotsNav = document.getElementById('carouselNav');
    const prevImageButton = document.getElementById('prevImageBtn');
    const nextImageButton = document.getElementById('nextImageBtn');

    const contributionsTitle = document.getElementById('apportsTitle');
    const projectContributionsList = document.getElementById('modalProjectApports');

    let currentProjectImages = [];
    let currentImageDisplayIndex = 0;

    function openProjectModal(event) {
        const button = event.currentTarget;
        const title = button.dataset.title;
        const category = button.dataset.category;
        const descriptionRaw = button.dataset.description;
        const tech = button.dataset.tech;
        const images = button.dataset.images ? button.dataset.images.split(',') : [];
        const githubLink = button.dataset.githubLink;
        const webLink = button.dataset.webLink;
        const driveLink = button.dataset.driveLink;
        const documentLink = button.dataset.documentLink;
        const youtubeLink = button.dataset.youtubeLink;
        const contributions = button.dataset.apports ? button.dataset.apports.split('||').map(item => item.trim()) : [];

        const formattedDescription = descriptionRaw ? descriptionRaw.split('||').map(p => `<p>${p.trim()}</p>`).join('') : '';

        modalTitle.textContent = title;
        modalCategory.textContent = category;
        modalDescription.innerHTML = formattedDescription;
        modalTechnologies.textContent = tech;

        projectContributionsList.innerHTML = '';
        if (contributions.length > 0 && contributions[0] !== "") {
            contributionsTitle.style.display = 'block';
            projectContributionsList.style.display = 'block';
            contributions.forEach(contribution => {
                const li = document.createElement('li');
                li.textContent = contribution;
                projectContributionsList.appendChild(li);
            });
        } else {
            contributionsTitle.style.display = 'none';
            projectContributionsList.style.display = 'none';
        }

        modalLinksSection.innerHTML = '';
        if (githubLink) {
            const githubBtn = document.createElement('a');
            githubBtn.href = githubLink;
            githubBtn.target = "_blank";
            githubBtn.classList.add('form-btn', 'project-link-btn', 'github');
            githubBtn.innerHTML = '<ion-icon name="logo-github"></ion-icon><span>Voir sur GitHub</span>';
            modalLinksSection.appendChild(githubBtn);
        }
        if (webLink) {
            const webBtn = document.createElement('a');
            webBtn.href = webLink;
            webBtn.target = "_blank";
            webBtn.classList.add('form-btn', 'project-link-btn', 'website');
            webBtn.innerHTML = '<ion-icon name="globe-outline"></ion-icon><span>Voir le Site Web</span>';
            modalLinksSection.appendChild(webBtn);
        }
        if (driveLink) {
            const driveBtn = document.createElement('a');
            driveBtn.href = driveLink;
            driveBtn.target = "_blank";
            driveBtn.classList.add('form-btn', 'project-link-btn', 'drive');
            driveBtn.innerHTML = '<ion-icon name="folder-open-outline"></ion-icon><span>Voir sur Drive</span>';
            modalLinksSection.appendChild(driveBtn);
        }
        if (documentLink) {
            const documentBtn = document.createElement('a');
            documentBtn.href = documentLink;
            documentBtn.target = "_blank";
            documentBtn.classList.add('form-btn', 'project-link-btn', 'document');
            documentBtn.innerHTML = '<ion-icon name="document-text-outline"></ion-icon><span>Document</span>';
            modalLinksSection.appendChild(documentBtn);
        }
        if (youtubeLink) {
            const youtubeBtn = document.createElement('a');
            youtubeBtn.href = youtubeLink;
            youtubeBtn.target = "_blank";
            youtubeBtn.classList.add('form-btn', 'project-link-btn', 'youtube');
            youtubeBtn.innerHTML = '<ion-icon name="logo-youtube"></ion-icon><span>YouTube</span>';
            modalLinksSection.appendChild(youtubeBtn);
        }

        currentProjectImages = images;
        currentImageDisplayIndex = 0;
        updateImageCarousel();
        setupImageNavigationButtons();

        modalContainer.classList.add('active');
    }

    function updateImageCarousel() {
        carouselDisplay.innerHTML = '';
        carouselDotsNav.innerHTML = '';

        if (currentProjectImages && currentProjectImages.length > 0) {
            currentProjectImages.forEach((imageSrc, index) => {
                const img = document.createElement('img');
                img.src = imageSrc.trim();
                img.alt = `Image du projet ${index + 1}`;
                img.classList.add('carousel-image');
                if (index === currentImageDisplayIndex) {
                    img.classList.add('active');
                }
                carouselDisplay.appendChild(img);

                const dot = document.createElement('span');
                dot.classList.add('carousel-nav-dot');
                if (index === currentImageDisplayIndex) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    currentImageDisplayIndex = index;
                    updateImageCarousel();
                });
                carouselDotsNav.appendChild(dot);
            });
        } else {
            const noImageDiv = document.createElement('div');
            noImageDiv.textContent = 'Aucune image disponible';
            noImageDiv.style.cssText = 'color: #888; font-size: 1.2em; text-align: center; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;';
            carouselDisplay.appendChild(noImageDiv);
        }

        prevImageButton.style.display = currentProjectImages.length > 1 ? 'block' : 'none';
        nextImageButton.style.display = currentProjectImages.length > 1 ? 'block' : 'none';
    }

    function setupImageNavigationButtons() {
        prevImageButton.onclick = () => {
            currentImageDisplayIndex = (currentImageDisplayIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
            updateImageCarousel();
        };

        nextImageButton.onclick = () => {
            currentImageDisplayIndex = (currentImageDisplayIndex + 1) % currentProjectImages.length;
            updateImageCarousel();
        };
    }

    projectDetailButtons.forEach(button => {
        button.addEventListener('click', openProjectModal);
    });

    modalCloseButton.addEventListener('click', () => {
        modalContainer.classList.remove('active');
    });

    document.getElementById('overlay').addEventListener('click', () => {
        modalContainer.classList.remove('active');
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalContainer.classList.contains('active')) {
            modalContainer.classList.remove('active');
        }
    });

    const burgerMenu = document.getElementById('burger-menu');
    const burgerNav = document.getElementById('burger-nav');

    if (burgerMenu && burgerNav) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            burgerNav.classList.toggle('active');
        });
    }

    const skillCircles = document.querySelectorAll('.skill-circle');

    function animateSkillCircles() {
        skillCircles.forEach(circle => {
            const percent = parseInt(circle.dataset.percent);
            const circumference = 2 * Math.PI * 45;
            const strokeDashoffset = circumference - (percent / 100) * circumference;

            let currentOffset = circumference;
            let animationStartTime = null;
            const animationDuration = 1000;

            function animate(currentTime) {
                if (!animationStartTime) animationStartTime = currentTime;
                const progress = (currentTime - animationStartTime) / animationDuration;

                if (progress < 1) {
                    currentOffset = circumference - (percent / 100) * circumference * progress;
                    circle.style.background = `conic-gradient(
                        #0050FF 0deg,
                        #7f3bcf ${360 * progress}deg,
                        #eee ${360 * progress}deg,
                        #eee 360deg
                    )`;
                    requestAnimationFrame(animate);
                } else {
                    circle.style.background = `conic-gradient(#0050FF 0deg, #7f3bcf ${percent * 3.6}deg, #eee ${percent * 3.6}deg, #eee 360deg)`;
                }
            }
            requestAnimationFrame(animate);
        });
    }

    if (skillCircles.length > 0) {
        animateSkillCircles();
    }

    // Gestion du formulaire de contact
    const contactForm = document.querySelector('[data-form]');
    if (contactForm) {
        const formInputs = contactForm.querySelectorAll('[data-form-input]');
        const submitButton = contactForm.querySelector('[data-form-btn]');
        const formStatus = contactForm.querySelector('.form-status');

        // Fonction pour vérifier si tous les champs sont valides
        function checkFormValidity() {
            let allValid = true;
            formInputs.forEach(input => {
                if (!input.value.trim() || (input.type === 'email' && !input.validity.valid)) {
                    allValid = false;
                }
            });
            submitButton.disabled = !allValid;
        }

        // Écouter les changements sur chaque champ
        formInputs.forEach(input => {
            input.addEventListener('input', checkFormValidity);
            input.addEventListener('blur', checkFormValidity);
        });

        // Gérer la soumission du formulaire
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            submitButton.disabled = true;
            submitButton.textContent = 'Envoi en cours...';

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.textContent = 'Message envoyé avec succès !';
                    formStatus.style.color = '#28a745';
                    formStatus.style.display = 'block';
                    contactForm.reset();
                    submitButton.disabled = true;
                    submitButton.textContent = 'Envoyer';
                } else {
                    formStatus.textContent = 'Une erreur est survenue. Veuillez réessayer.';
                    formStatus.style.color = '#dc3545';
                    formStatus.style.display = 'block';
                    submitButton.disabled = false;
                    submitButton.textContent = 'Envoyer';
                }
            } catch (error) {
                formStatus.textContent = 'Erreur de connexion. Veuillez réessayer.';
                formStatus.style.color = '#dc3545';
                formStatus.style.display = 'block';
                submitButton.disabled = false;
                submitButton.textContent = 'Envoyer';
            }
        });
    }
});