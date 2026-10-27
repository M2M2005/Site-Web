const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Lire l'image et la convertir en base64
const imagePath = path.resolve(__dirname, '../public/img/cyprien.jpg');
const imageBase64 = fs.readFileSync(imagePath).toString('base64');
const imageDataUri = `data:image/jpeg;base64,${imageBase64}`;

// Traductions FR/EN
const translations = {
  fr: {
    lang: 'fr',
    title: 'Ingenieur QA | Test Automation',
    subtitle: 'Alternance ITESOFT | Master Cybersecurite et Reseaux - CNAM Montpellier',
    location: 'Montpellier (34)',
    license: 'Permis B',
    experiencesTitle: 'Experiences Professionnelles',
    exp1Title: 'Alternance - Developpeur QA',
    exp1Date: 'Sept 2025 - Present',
    exp1Company: 'ITESOFT - Aimargues (30)',
    exp1Tasks: [
      'Tests automatises avec Selenium pour applications web entreprise',
      'Identification de bugs mineurs et problemes de matching',
      'Etablissement des bonnes pratiques d\'automatisation pour l\'equipe QA'
    ],
    exp2Title: 'Stage - Developpeur QA',
    exp2Date: 'Fev - Mars 2025',
    exp2Company: 'Orchestra - TravelSoft - Paris (75)',
    exp2Tasks: [
      '22 tests automatises crees avec Cypress',
      'Industrialisation CI/CD avec n8n, reduction du testing manuel de 75%',
      'Detection de 2-3 bugs par semaine via tests automatiques',
      'Application des methodes Agile pour garantir la qualite continue'
    ],
    skillsTitle: 'Competences Techniques',
    skillAutomation: 'Test Automation',
    skillLanguages: 'Langages',
    skillTools: 'Outils',
    skillMethodologies: 'Methodologies',
    educationTitle: 'Formations',
    edu1Title: 'Master Informatique - Cybersecurite et Reseaux',
    edu1School: 'CNAM Montpellier',
    edu1Date: '2026 - 2028 (en cours)',
    edu2Title: 'BUT Informatique',
    edu2School: 'IUT Montpellier-Sete',
    edu2Date: '2023 - 2026',
    edu3Title: 'BAC STI2D - Mention Assez Bien',
    edu3School: 'Lycee Emmanuel d\'Alzon, Nimes',
    edu3Date: '2019 - 2023',
    projectsTitle: 'Projets',
    proj1Title: 'Application de votes',
    proj1Desc: 'Application Java de vote a distance avec tests TestFX',
    proj2Title: 'Cypress E-Commerce',
    proj2Desc: 'Tests automatiques E2E sur site e-commerce',
    languagesTitle: 'Langues',
    langFr: 'Francais',
    langFrLevel: '- Langue maternelle',
    langEn: 'Anglais',
    langEnLevel: '- Technique et professionnel'
  },
  en: {
    lang: 'en',
    title: 'QA Engineer | Test Automation',
    subtitle: 'Work-Study at ITESOFT | Master Cybersecurity & Networks - CNAM Montpellier',
    location: 'Montpellier, France',
    license: 'Driver\'s License',
    experiencesTitle: 'Professional Experience',
    exp1Title: 'Work-Study - QA Developer',
    exp1Date: 'Sept 2025 - Present',
    exp1Company: 'ITESOFT - Aimargues, France',
    exp1Tasks: [
      'Automated testing with Selenium for enterprise web applications',
      'Identification of minor bugs and matching issues',
      'Establishing automation best practices for the QA team'
    ],
    exp2Title: 'Internship - QA Developer',
    exp2Date: 'Feb - Mar 2025',
    exp2Company: 'Orchestra - TravelSoft - Paris, France',
    exp2Tasks: [
      '22 automated tests created with Cypress',
      'CI/CD industrialization with n8n, 75% reduction in manual testing',
      'Detection of 2-3 bugs per week via automated tests',
      'Application of Agile methods to ensure continuous quality'
    ],
    skillsTitle: 'Technical Skills',
    skillAutomation: 'Test Automation',
    skillLanguages: 'Languages',
    skillTools: 'Tools',
    skillMethodologies: 'Methodologies',
    educationTitle: 'Education',
    edu1Title: 'Master in Computer Science - Cybersecurity & Networks',
    edu1School: 'CNAM Montpellier',
    edu1Date: '2026 - 2028 (ongoing)',
    edu2Title: 'Bachelor in Computer Science (BUT)',
    edu2School: 'IUT Montpellier-Sete',
    edu2Date: '2023 - 2026',
    edu3Title: 'High School Diploma STI2D - With Honors',
    edu3School: 'Lycee Emmanuel d\'Alzon, Nimes',
    edu3Date: '2019 - 2023',
    projectsTitle: 'Projects',
    proj1Title: 'Voting Application',
    proj1Desc: 'Java remote voting application with TestFX tests',
    proj2Title: 'Cypress E-Commerce',
    proj2Desc: 'E2E automated tests on e-commerce website',
    languagesTitle: 'Languages',
    langFr: 'French',
    langFrLevel: '- Native',
    langEn: 'English',
    langEnLevel: '- Technical & Professional'
  }
};

function generateCvHtml(t) {
  return `
<!DOCTYPE html>
<html lang="${t.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CV - Cyprien Bons</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      font-size: 11px;
      line-height: 1.4;
      color: #ffffff;
      background: #0a0a0a;
    }

    .cv-page {
      width: 210mm;
      min-height: 297mm;
      padding: 10mm 12mm;
      background: #0a0a0a;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .header-info h1 {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 4px;
      color: #ffffff;
    }

    .header-info .title {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 6px;
    }

    .header-info .subtitle {
      font-size: 10px;
      color: rgba(255, 255, 255, 0.6);
    }

    .photo {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.3);
      object-fit: cover;
    }

    .contact-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 10px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .contact-bar a {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
    }

    section {
      margin-bottom: 12px;
    }

    h2 {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;
    }

    .experience-item {
      background: rgba(255, 255, 255, 0.05);
      padding: 10px 12px;
      border-radius: 12px;
      border-left: 2px solid rgba(255, 255, 255, 0.4);
      margin-bottom: 10px;
    }

    .experience-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
    }

    .experience-header strong {
      font-size: 11px;
      color: #ffffff;
    }

    .experience-header .date {
      font-size: 10px;
      color: rgba(255, 255, 255, 0.6);
    }

    .experience-company {
      font-size: 10px;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 6px;
    }

    .experience-list {
      margin: 0;
      padding-left: 16px;
      font-size: 10px;
      color: rgba(255, 255, 255, 0.8);
    }

    .experience-list li {
      margin-bottom: 2px;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .skill-item {
      background: rgba(255, 255, 255, 0.05);
      padding: 10px 12px;
      border-radius: 12px;
      border-left: 2px solid rgba(255, 255, 255, 0.4);
    }

    .skill-item strong {
      color: rgba(255, 255, 255, 0.6);
      font-size: 9px;
      text-transform: uppercase;
      display: block;
      margin-bottom: 4px;
    }

    .skill-item span {
      font-size: 10px;
      color: #ffffff;
    }

    .two-columns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 12px;
    }

    .formation-item, .project-item {
      background: rgba(255, 255, 255, 0.05);
      padding: 8px 10px;
      border-radius: 12px;
      margin-bottom: 8px;
    }

    .formation-item strong, .project-item strong {
      font-size: 10px;
      display: block;
      color: #ffffff;
      margin-bottom: 2px;
    }

    .formation-item .details, .project-item .details {
      font-size: 9px;
      color: rgba(255, 255, 255, 0.6);
    }

    .formation-item .date, .project-item .tech {
      font-size: 9px;
      color: rgba(255, 255, 255, 0.5);
    }

    .languages {
      display: flex;
      gap: 16px;
    }

    .language-item {
      background: rgba(255, 255, 255, 0.05);
      padding: 6px 12px;
      border-radius: 12px;
      font-size: 10px;
    }

    .language-item strong {
      color: #ffffff;
    }

    .language-item span {
      color: rgba(255, 255, 255, 0.6);
      margin-left: 4px;
    }
  </style>
</head>
<body>
  <div class="cv-page">
    <!-- Header -->
    <div class="header">
      <div class="header-info">
        <h1>CYPRIEN BONS</h1>
        <p class="title">${t.title}</p>
        <p class="subtitle">${t.subtitle}</p>
      </div>
      <img src="${imageDataUri}" alt="Cyprien Bons" class="photo" />
    </div>

    <!-- Contact Bar -->
    <div class="contact-bar">
      <span>contact@cyprienbons.com</span>
      <span>07 68 51 20 06</span>
      <span>${t.location}</span>
      <span>${t.license}</span>
      <a href="https://linkedin.com/in/cyprien-bons">linkedin.com/in/cyprien-bons</a>
      <a href="https://cyprienbons.com">cyprienbons.com</a>
    </div>

    <!-- Experiences -->
    <section>
      <h2>${t.experiencesTitle}</h2>
      <div class="experience-item">
        <div class="experience-header">
          <strong>${t.exp1Title}</strong>
          <span class="date">${t.exp1Date}</span>
        </div>
        <p class="experience-company">${t.exp1Company}</p>
        <ul class="experience-list">
          ${t.exp1Tasks.map(task => `<li>${task}</li>`).join('\n          ')}
        </ul>
      </div>
      <div class="experience-item">
        <div class="experience-header">
          <strong>${t.exp2Title}</strong>
          <span class="date">${t.exp2Date}</span>
        </div>
        <p class="experience-company">${t.exp2Company}</p>
        <ul class="experience-list">
          ${t.exp2Tasks.map(task => `<li>${task}</li>`).join('\n          ')}
        </ul>
      </div>
    </section>

    <!-- Skills -->
    <section>
      <h2>${t.skillsTitle}</h2>
      <div class="skills-grid">
        <div class="skill-item">
          <strong>${t.skillAutomation}</strong>
          <span>Selenium, Cypress, TestFX</span>
        </div>
        <div class="skill-item">
          <strong>${t.skillLanguages}</strong>
          <span>Java, JavaScript, SQL, PHP, C, Bash</span>
        </div>
        <div class="skill-item">
          <strong>${t.skillTools}</strong>
          <span>Git/GitHub, Linux, JetBrains, n8n</span>
        </div>
        <div class="skill-item">
          <strong>${t.skillMethodologies}</strong>
          <span>Agile, Scrum, CI/CD</span>
        </div>
      </div>
    </section>

    <!-- Formations + Projets -->
    <div class="two-columns">
      <section>
        <h2>${t.educationTitle}</h2>
        <div class="formation-item">
          <strong>${t.edu1Title}</strong>
          <p class="details">${t.edu1School}</p>
          <p class="date">${t.edu1Date}</p>
        </div>
        <div class="formation-item">
          <strong>${t.edu2Title}</strong>
          <p class="details">${t.edu2School}</p>
          <p class="date">${t.edu2Date}</p>
        </div>
        <div class="formation-item">
          <strong>${t.edu3Title}</strong>
          <p class="details">${t.edu3School}</p>
          <p class="date">${t.edu3Date}</p>
        </div>
      </section>
      <section>
        <h2>${t.projectsTitle}</h2>
        <div class="project-item">
          <strong>${t.proj1Title}</strong>
          <p class="details">${t.proj1Desc}</p>
          <p class="tech">Java, JavaFX, Cryptographie</p>
        </div>
        <div class="project-item">
          <strong>${t.proj2Title}</strong>
          <p class="details">${t.proj2Desc}</p>
          <p class="tech">Cypress, JavaScript, Node.js</p>
        </div>
      </section>
    </div>

    <!-- Langues -->
    <section>
      <h2>${t.languagesTitle}</h2>
      <div class="languages">
        <div class="language-item">
          <strong>${t.langFr}</strong>
          <span>${t.langFrLevel}</span>
        </div>
        <div class="language-item">
          <strong>${t.langEn}</strong>
          <span>${t.langEnLevel}</span>
        </div>
      </div>
    </section>
  </div>
</body>
</html>
`;
}

async function generateCV() {
  console.log('Generating CV PDFs (FR & EN)...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Generate French CV
  const frHtml = generateCvHtml(translations.fr);
  await page.setContent(frHtml, { waitUntil: 'domcontentloaded' });
  const frOutputPath = path.resolve(__dirname, '../public/docs/CV_Cyprien_Bons_FR.pdf');
  await page.pdf({
    path: frOutputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  console.log(`CV FR generated: ${frOutputPath}`);

  // Generate English CV
  const enHtml = generateCvHtml(translations.en);
  await page.setContent(enHtml, { waitUntil: 'domcontentloaded' });
  const enOutputPath = path.resolve(__dirname, '../public/docs/CV_Cyprien_Bons_EN.pdf');
  await page.pdf({
    path: enOutputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  console.log(`CV EN generated: ${enOutputPath}`);

  await browser.close();
  console.log('All CVs generated successfully!');
}

generateCV().catch(console.error);
