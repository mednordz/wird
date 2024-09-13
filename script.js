// Contenu du livre en arabe avec les prières et leurs répétitions
const contenuLivre = [
    {
        titre: "الوِرْدُ اليَوْمِي",
        texte: "",
        repetitions: 1
    },
    {
        titre: "أَعُوذُ بِاللهِ السَّمِيعِ العَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        texte: "",
        repetitions: 1
    },
    {
        titre: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ",
        texte: "",
        repetitions: 3
    },
    {
        titre: "وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللهِ هُوَ خَيْرًا وَأَعْظَمَ أَجْرًا وَاسْتَغْفِرُوا اللهَ إِنَّ اللهَ غَفُورٌ رَّحِيمٌ",
        texte: "",
        repetitions: 1
    },
    {
        titre: "أَسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لَا إِلٰهَ إِلَّا هُوَ الحَيُّ القَيُّومُ وَأَتُوبُ إِلَيْهِ",
        texte: "",
        repetitions: 33
    },
    {
        titre: "إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا",
        texte: "",
        repetitions: 1
    },
    {
        titre: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ النَّبِيِّ الأُمِّيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ تَسْلِيمًا",
        texte: "",
        repetitions: 33
    },
    {
        titre: "فَاعْلَمْ أَنَّهُ لَا إِلٰهَ إِلَّا اللهُ",
        texte: "",
        repetitions: 1
    },
    {
        titre: "لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ المُلْكُ وَلَهُ الحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        texte: "",
        repetitions: 33
    },
    {
        titre: "سُورَةُ الإِخْلَاصِ",
        texte: "قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾",
        repetitions: 3
    },
    {
        titre: "سُورَةُ الفَاتِحَةِ",
        texte: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾",
        repetitions: 1
    },
    {
        titre: "سُورَةُ الفَتْحِ",
        texte: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا ﴿١﴾ لِّيَغْفِرَ لَكَ اللَّهُ مَا تَقَدَّمَ مِن ذَنبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعْمَتَهُ عَلَيْكَ وَيَهْدِيَكَ صِرَاطًا مُّسْتَقِيمًا ﴿٢﴾ وَيَنصُرَكَ اللَّهُ نَصْرًا عَزِيزًا ﴿٣﴾",
        repetitions: 1
    }
];

// Fonction pour afficher le contenu du livre de manière interactive
function afficherContenuLivre() {
    const contenuElement = document.getElementById('livre-contenu');
    contenuElement.innerHTML = ''; // Effacer le contenu existant
    contenuLivre.forEach((chapitre, index) => {
        const chapitreElement = document.createElement('div');
        chapitreElement.classList.add('chapitre');
        
        const titreElement = document.createElement('h3');
        titreElement.textContent = chapitre.titre;
        
        const texteElement = document.createElement('p');
        texteElement.textContent = chapitre.texte;
        
        chapitreElement.appendChild(titreElement);
        chapitreElement.appendChild(texteElement);
        
        if (chapitre.repetitions > 1) {
            const repetitionsElement = document.createElement('p');
            repetitionsElement.textContent = `عدد المرات: ${chapitre.repetitions}`;
            
            const compteurElement = document.createElement('p');
            compteurElement.textContent = `العدد الحالي: 0`;
            
            const boutonElement = document.createElement('button');
            boutonElement.textContent = 'قراءة';
            boutonElement.onclick = () => incrementerCompteur(index, compteurElement);
            
            chapitreElement.appendChild(repetitionsElement);
            chapitreElement.appendChild(compteurElement);
            chapitreElement.appendChild(boutonElement);
        }
        
        contenuElement.appendChild(chapitreElement);
    });
}

// Fonction pour incrémenter le compteur de lecture
function incrementerCompteur(index, compteurElement) {
    let compteur = parseInt(compteurElement.textContent.split(': ')[1]);
    if (compteur < contenuLivre[index].repetitions) {
        compteur++;
        compteurElement.textContent = `العدد الحالي: ${compteur}`;
    }
    if (compteur === contenuLivre[index].repetitions) {
        compteurElement.style.color = 'green';
    }
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
