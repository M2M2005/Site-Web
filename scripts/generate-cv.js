const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Lire l'image et la convertir en base64
const imagePath = path.resolve(__dirname, '../public/img/cyprien.jpg');
const imageBase64 = fs.readFileSync(imagePath).toString('base64');
const imageDataUri = `data:image/jpeg;base64,${imageBase64}`;

const cvHtml = `
<!DOCTYPE html>
<html lang="fr">
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
        <p class="title">Ingenieur QA | Test Automation</p>
        <p class="subtitle">Alternance ITESOFT | Master Cybersecurite et Reseaux - CNAM Montpellier</p>
      </div>
      <img src="${imageDataUri}" alt="Cyprien Bons" class="photo" />
    </div>

    <!-- Contact Bar -->
    <div class="contact-bar">
      <span>contact@cyprienbons.com</span>
      <span>07 68 51 20 06</span>
      <span>Montpellier (34)</span>
      <span>Permis B</span>
      <a href="https://linkedin.com/in/cyprien-bons">linkedin.com/in/cyprien-bons</a>
      <a href="https://cyprienbons.com">cyprienbons.com</a>
    </div>

    <!-- Experiences -->
    <section>
      <h2>Experiences Professionnelles</h2>
      <div class="experience-item">
        <div class="experience-header">
          <strong>Alternance - Developpeur QA</strong>
          <span class="date">Sept 2025 - Present</span>
        </div>
        <p class="experience-company">ITESOFT - Aimargues (30)</p>
        <ul class="experience-list">
          <li>Tests automatises avec Selenium pour applications web entreprise</li>
          <li>Identification de bugs mineurs et problemes de matching</li>
          <li>Etablissement des bonnes pratiques d'automatisation pour l'equipe QA</li>
        </ul>
      </div>
      <div class="experience-item">
        <div class="experience-header">
          <strong>Stage - Developpeur QA</strong>
          <span class="date">Fev - Mars 2025</span>
        </div>
        <p class="experience-company">Orchestra - TravelSoft - Paris (75)</p>
        <ul class="experience-list">
          <li>22 tests automatises crees avec Cypress</li>
          <li>Industrialisation CI/CD avec n8n, reduction du testing manuel de 75%</li>
          <li>Detection de 2-3 bugs par semaine via tests automatiques</li>
          <li>Application des methodes Agile pour garantir la qualite continue</li>
        </ul>
      </div>
    </section>

    <!-- Skills -->
    <section>
      <h2>Competences Techniques</h2>
      <div class="skills-grid">
        <div class="skill-item">
          <strong>Test Automation</strong>
          <span>Selenium, Cypress, TestFX</span>
        </div>
        <div class="skill-item">
          <strong>Langages</strong>
          <span>Java, JavaScript, SQL, PHP, C, Bash</span>
        </div>
        <div class="skill-item">
          <strong>Outils</strong>
          <span>Git/GitHub, Linux, JetBrains, n8n</span>
        </div>
        <div class="skill-item">
          <strong>Methodologies</strong>
          <span>Agile, Scrum, CI/CD</span>
        </div>
      </div>
    </section>

    <!-- Formations + Projets -->
    <div class="two-columns">
      <section>
        <h2>Formations</h2>
        <div class="formation-item">
          <strong>Master Informatique - Cybersecurite et Reseaux</strong>
          <p class="details">CNAM Montpellier</p>
          <p class="date">2026 - 2028 (en cours)</p>
        </div>
        <div class="formation-item">
          <strong>BUT Informatique</strong>
          <p class="details">IUT Montpellier-Sete</p>
          <p class="date">2023 - 2026</p>
        </div>
        <div class="formation-item">
          <strong>BAC STI2D - Mention Assez Bien</strong>
          <p class="details">Lycee Emmanuel d'Alzon, Nimes</p>
          <p class="date">2019 - 2023</p>
        </div>
      </section>
      <section>
        <h2>Projets</h2>
        <div class="project-item">
          <strong>Application de votes</strong>
          <p class="details">Application Java de vote a distance avec tests TestFX</p>
          <p class="tech">Java, JavaFX, Cryptographie</p>
        </div>
        <div class="project-item">
          <strong>Cypress E-Commerce</strong>
          <p class="details">Tests automatiques E2E sur site e-commerce</p>
          <p class="tech">Cypress, JavaScript, Node.js</p>
        </div>
      </section>
    </div>

    <!-- Langues -->
    <section>
      <h2>Langues</h2>
      <div class="languages">
        <div class="language-item">
          <strong>Francais</strong>
          <span>- Langue maternelle</span>
        </div>
        <div class="language-item">
          <strong>Anglais</strong>
          <span>- Technique et professionnel</span>
        </div>
      </div>
    </section>
  </div>
</body>
</html>
`;

async function generateCV() {
  console.log('Generating CV PDF...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.setContent(cvHtml, {
    waitUntil: 'networkidle0'
  });

  const outputPath = path.resolve(__dirname, '../public/docs/CV_Cyprien_Bons.pdf');

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();

  console.log(`CV PDF generated: ${outputPath}`);
}

generateCV().catch(console.error);
