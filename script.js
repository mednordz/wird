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
    contenuElement.innerHTML = ''; // Effacer le contenu existant
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

// Fonction pour basculer entre les sections avec animation
function basculerSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
            setTimeout(() => {
                section.style.opacity = '1';
            }, 50);
        } else {
            section.style.opacity = '0';
            setTimeout(() => {
                section.style.display = 'none';
            }, 300);
        }
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

    // Ajout de la gestion du défilement fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optimisation pour les appareils mobiles
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
});

// Fonction pour ajuster la taille du texte
function ajusterTailleTexte(taille) {
    document.body.style.fontSize = taille + 'px';
}

// Ajout des boutons pour ajuster la taille du texte
const boutonsPlusGrand = document.createElement('button');
boutonsPlusGrand.textContent = 'A+';
boutonsPlusGrand.onclick = () => ajusterTailleTexte(parseInt(getComputedStyle(document.body).fontSize) + 2);

const boutonsPlusPetit = document.createElement('button');
boutonsPlusPetit.textContent = 'A-';
boutonsPlusPetit.onclick = () => ajusterTailleTexte(parseInt(getComputedStyle(document.body).fontSize) - 2);

document.querySelector('header').appendChild(boutonsPlusGrand);
document.querySelector('header').appendChild(boutonsPlusPetit);
