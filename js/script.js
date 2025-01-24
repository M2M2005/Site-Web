const API_KEY = "AIzaSyCTdn9QwIBop7xelDyXuaOmtT1Qwi2hppY";
const SHEET_ID = "1BXhP5J1tHUlvA_l8hit_4NZScHQOrTWrGBuT1j2iL-Q";

async function buttonFeuille() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.sheets || data.sheets.length === 0) {
            document.getElementById("results").innerText = "Aucune feuille trouvée.";
            return;
        }

        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "";

        // Feuille spécifique "RG"
        const filteredSheetsRG = data.sheets
            .map(sheet => sheet.properties.title)
            .filter(name => name === "RG");

        if (filteredSheetsRG.length > 0) {
            createSheetButton(filteredSheetsRG[0], resultsContainer, "F2:H202");
        }

        // Feuilles commençant par "U" avec plus de 2 caractères
        const filteredSheetsU = data.sheets
            .map(sheet => sheet.properties.title)
            .filter(name => name.startsWith("U") && name.length > 2);

        filteredSheetsU.forEach(sheetName => {
            createSheetButton(sheetName, resultsContainer, "EG7:EI32");
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        document.getElementById("results").innerText = "Erreur lors de la récupération des données.";
    }
}

function createSheetButton(sheetName, container, range) {
    const sheetContainer = document.createElement("div");
    sheetContainer.className = "sheet-container";

    const button = document.createElement("button");
    if (sheetName === "RG") {
        button.innerHTML = `► Résultat général`;
    } else {
        button.innerHTML = `► ${sheetName}`;
    }
    button.className = "sheet-button";
    button.onclick = () => sheetDataResultat(sheetName, button, sheetContainer, range);

    const resultDiv = document.createElement("div");
    resultDiv.className = "sheet-results";
    resultDiv.style.display = "none"; // Masqué par défaut

    sheetContainer.appendChild(button);
    sheetContainer.appendChild(resultDiv);
    container.appendChild(sheetContainer);
}

async function sheetDataResultat(sheetName, button, container, range) {
    const resultDiv = container.querySelector(".sheet-results");

    if (resultDiv.style.display === "none") {
        if (sheetName === "RG") {
            button.innerHTML = `▼ Résultat général`;
        } else {
            button.innerHTML = `▼ ${sheetName}`;
        }
        resultDiv.style.display = "block";

        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}!${range}?key=${API_KEY}`;
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (!data.values || data.values.length === 0) {
                resultDiv.innerText = "Aucune donnée trouvée.";
                return;
            }

            const table = document.createElement("table");

            data.values.forEach(row => {
                if (row[1]) { // Vérifie si la deuxième colonne est remplie
                    const tr = document.createElement("tr");
                    row.forEach(cell => {
                        const td = document.createElement("td");
                        td.textContent = cell;
                        tr.appendChild(td);
                    });
                    table.appendChild(tr);
                }
            });

            resultDiv.innerHTML = "";
            resultDiv.appendChild(table);
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
            resultDiv.innerText = "Erreur lors de la récupération des données.";
        }
    } else {
        if (sheetName === "RG") {
            button.innerHTML = `► Résultat général`;
        } else {
            button.innerHTML = `► ${sheetName}`;
        }
        resultDiv.style.display = "none";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    buttonFeuille();
});

async function generatePDF() {
    const sheetName = "Topo";
    const range = "A1:F65"; // Plage des données
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}!${range}?key=${API_KEY}`;

    try {
        // Récupérer les données depuis Google Sheets
        const response = await fetch(url);
        const data = await response.json();

        if (!data.values || data.values.length === 0) {
            console.error("Aucune donnée trouvée.");
            return;
        }

        // Préparer le corps du tableau
        const body = [
            [
                { text: "COULOIR", rowSpan: 2, style: "tableHeader", margin: [0, 10, 0, 10] },
                { text: "COULEUR", rowSpan: 2, style: "tableHeader", margin: [0, 10, 0, 10] },
                { text: "COTATION", rowSpan: 2, style: "tableHeader", margin: [0, 10, 0, 10] },
                { text: "POINTS", colSpan: 2, style: "tableHeader" },
                {},
                { text: "JUGE", rowSpan: 2, style: "tableHeader", margin: [0, 10, 0, 10] },
            ],
            [
                "",
                "",
                "",
                { text: "ZONE", style: "tableHeader" },
                { text: "TOP", style: "tableHeader" },
                "",
            ],
        ];

        // Ajouter les lignes du tableau avec les données
        const rows = data.values.slice(1); // Ignorer les en-têtes de la feuille Google Sheets
        rows.forEach(row => {
            body.push(row);
        });

        // Définir le document PDF
        const docDefinition = {
            content: [
                { text: "Challenge 2025", style: "header" },
                {
                    table: {
                        headerRows: 2,
                        widths: ["*", "*", "*", "*", "*", "*"],
                        body: body,
                    },
                },
            ],
            styles: {
                header: {
                    fontSize: 20,
                    bold: true,
                    margin: [0, 10, 0, 10],
                    alignment: "center",
                },
                tableHeader: {
                    bold: true,
                    alignment: "center",
                    fillColor: "#f2f2f2",
                },
            },
        };

        pdfMake.createPdf(docDefinition).download("topo_escalade.pdf");
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}


