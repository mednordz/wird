// Contenu du livre en arabe
const contenuLivre = [
    {
        titre: "الفصل الأول",
        texte: "هذا هو نص الفصل الأول من الكتاب."
    },
    {
        titre: "الفصل الثاني",
        texte: "هذا هو نص الفصل الثاني من الكتاب."
    },
    // Ajoutez d'autres chapitres ici
];

// Fonction pour afficher le contenu du livre
function afficherContenuLivre() {
    const contenuElement = document.getElementById('livre-contenu');
    contenuLivre.forEach(chapitre => {
        const chapitreElement = document.createElement('div');
        chapitreElement.classList.add('chapitre');
        
        const titreElement = document.createElement('h3');
        titreElement.textContent = chapitre.titre;
        
        const texteElement = document.createElement('p');
        texteElement.textContent = chapitre.texte;
        
        chapitreElement.appendChild(titreElement);
        chapitreElement.appendChild(texteElement);
        contenuElement.appendChild(chapitreElement);
    });
}

// Fonction pour basculer entre les sections
function basculerSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Gestionnaires d'événements pour la navigation
document.addEventListener('DOMContentLoaded', () => {
    const liens = document.querySelectorAll('nav a');
    liens.forEach(lien => {
        lien.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = lien.getAttribute('href').substring(1);
            basculerSection(sectionId);
            if (sectionId === 'contenu') {
                afficherContenuLivre();
            }
        });
    });
    
    // Afficher la section d'accueil par défaut
    basculerSection('accueil');
});
