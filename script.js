const wirdContent = [
    { text: "أَعُوذُ بِاللهِ السَّمِيعِ العَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ", repeat: 1 },
    { text: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ", repeat: 3 },
    { text: "وَمَا تُقَدِّمُواْ لِأَنفُسِكُم مِّنْ خَيْرٖ تَجِدُوهُ عِندَ اَ۬للَّهِ هُوَ خَيْراٗ وَأَعْظَمَ أَجْراٗۖ وَاسْتَغْفِرُواْ اُ۬للَّهَۖ إِنَّ اَ۬للَّهَ غَفُورٞ رَّحِيمٞۖ", repeat: 1, quran: true },
    { text: "أَسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لَا إِلٰهَ إِلَّا هُوَ الحَيُّ القَيُّومُ وَأَتُوبُ إِلَيْهِ", repeat: 33 },
    { text: "اِنَّ اَ۬للَّهَ وَمَلَٰٓئِكَتَهُۥ يُصَلُّونَ عَلَى اَ۬لنَّبِےٓءِۖ يَٰٓأَيُّهَا اَ۬لذِينَ ءَامَنُواْ صَلُّواْ عَلَيْهِ وَسَلِّمُواْ تَسْلِيماًۖ", repeat: 1, quran: true },
    { text: "اللَّهُمَّ صَلِّ عَلَى سَيِِّنَا مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ النَّبِيِّ الأُمِّيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ تَسْلِيمًا", repeat: 33 },
    { text: "فَاعْلَمَ اَنَّهُۥ لَآ إِلَٰهَ إِلَّا اَ۬للَّهُ", repeat: 1, quran: true },
    { text: "لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ المُلْكُ وَلَهُ الحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", repeat: 33 },
    { text: "سُورَةُ الإِخْلَاصِ", repeat: 3, surah: true },
    { text: "سُورَةُ الفَاتِحَةِ", repeat: 1, surah: true },
    { text: "سُورَةُ الفَتْحِ", repeat: 1, surah: true }
];

function createWirdItem(item, index) {
    const div = document.createElement('div');
    div.className = 'wird-item';
    
    const text = document.createElement('p');
    text.textContent = item.text;
    if (item.quran) text.classList.add('quran');
    div.appendChild(text);

    if (item.surah) {
        const surahText = document.createElement('p');
        surahText.classList.add('quran', 'full-surah');
        surahText.style.display = 'none';
        div.appendChild(surahText);

        if (item.text === "سُورَةُ الفَتْحِ") {
            getSuratAlFath().then(fullText => {
                surahText.textContent = fullText;
            });
        } else {
            surahText.textContent = getSurahText(item.text);
        }

        text.addEventListener('click', (e) => {
            e.stopPropagation();
            if (surahText.style.display === 'none') {
                surahText.style.display = 'block';
                text.style.display = 'none';
            } else {
                surahText.style.display = 'none';
                text.style.display = 'block';
            }
        });
    }

    if (item.repeat > 1) {
        const counter = createCounter(item.repeat, index);
        div.appendChild(counter);
    }

    return div;
}

function getSurahText(surahName) {
    const surahTexts = {
        "سُورَةُ الإِخْلَاصِ": "قُلْ هُوَ اَ۬للَّهُ أَحَدٌۖ ١ اِ۬للَّهُ اُ۬لصَّمَدُۖ ٢ لَمْ يَلِدْ وَلَمْ يُولَدْۖ ٣ وَلَمْ يَكُن لَّهُۥ كُفُؤاً اَحَدٞۖ ٤",
        "سُورَةُ الفَاتِحَةِ": "بِسْمِ اِ۬للَّهِ اِ۬لرَّحْمَٰنِ اِ۬لرَّحِيمِ اِ۬لْحَمْدُ لِلهِ رَبِّ اِ۬لْعَٰلَمِينَ ١ اَ۬لرَّحْمَٰنِ اِ۬لرَّحِيمِ ٢مَلِكِ يَوْمِ اِ۬لدِّينِۖ ٣ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُۖ ٤ اُ۪هْدِنَا اَ۬لصِّرَٰطَ اَ۬لْمُسْتَقِيمَ ٥ صِرَٰطَ اَ۬لذِينَ أَنْعَمْتَ عَلَيْهِمْ ٦ غَيْرِ اِ۬لْمَغْضُوبِ عَلَيْهِمْ وَلَا اَ۬لضَّآلِّينَۖ ",
    };
    return surahTexts[surahName] || (surahName === "سُورَةُ الفَتْحِ" ? getSuratAlFath() : "Texte de la sourate non disponible");
}

function getSuratAlFath() {
    return fetch('SuratAlFath.json')
        .then(response => response.json())
        .then(data => {
            return data.verses.map(verse => `${verse.text}`).join('\n\n');
        })
        .catch(error => {
            console.error('Erreur lors du chargement de Surat Al-Fath:', error);
            return "Erreur lors du chargement de Surat Al-Fath";
        });
}

function createCounter(maxCount, index) {
    const counter = document.createElement('div');
    counter.className = 'counter';
    
    const countDisplay = document.createElement('span');
    countDisplay.className = 'count-display';
    
    let currentCount = parseInt(localStorage.getItem(`wirdCount_${index}`)) || 0;
    let isInitial = localStorage.getItem(`wirdMaxCount_${index}`) === null;
    maxCount = parseInt(localStorage.getItem(`wirdMaxCount_${index}`)) || maxCount;

    function updateCount() {
        countDisplay.textContent = currentCount + '/' + maxCount;
        if (currentCount === maxCount) {
            counter.classList.add('completed');
        } else {
            counter.classList.remove('completed');
        }
        localStorage.setItem(`wirdCount_${index}`, currentCount);
        localStorage.setItem(`wirdMaxCount_${index}`, maxCount);
    }

    function showOptions() {
        const options = [11, 33, 99, 100];
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'counter-options';
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => {
                const oldMaxCount = maxCount;
                maxCount = option;
                updateCount();
                optionsContainer.remove();
                isInitial = false;

                if (oldMaxCount === 33) {
                    document.querySelectorAll('.counter').forEach((otherCounter, otherIndex) => {
                        const otherCountDisplay = otherCounter.querySelector('.count-display');
                        if (otherCountDisplay.textContent === '0/33') {
                            otherCounter.maxCount = option;
                            otherCountDisplay.textContent = '0/' + option;
                            localStorage.setItem(`wirdMaxCount_${otherIndex}`, option);
                        }
                    });
                }
            });
            optionsContainer.appendChild(button);
        });
        counter.appendChild(optionsContainer);
    }

    counter.addEventListener('click', (event) => {
        event.stopPropagation();
        if (isInitial && maxCount === 33) {
            showOptions();
        } else if (currentCount < maxCount) {
            currentCount++;
            updateCount();
        } else {
            currentCount = 0;
            updateCount();
        }
    });

    updateCount();
    counter.appendChild(countDisplay);
    return counter;
}

function initializeWird() {
    const wirdContainer = document.getElementById('wird');
    wirdContent.forEach((item, index) => {
        const wirdItem = createWirdItem(item, index);
        wirdContainer.appendChild(wirdItem);
    });

    document.querySelectorAll('.wird-item').forEach((item, index) => {
        const counter = item.querySelector('.counter');
        if (counter) {
            item.addEventListener('click', () => {
                counter.click();
            });
        }
    });
}

// Ajoutez cette fonction pour réinitialiser les compteurs
function resetAllCounters() {
    wirdContent.forEach((_, index) => {
        localStorage.removeItem(`wirdCount_${index}`);
        localStorage.removeItem(`wirdMaxCount_${index}`);
    });
    location.reload(); // Recharge la page pour réinitialiser l'affichage
}

document.addEventListener('DOMContentLoaded', initializeWird);

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('animation-overlay');
    const img = overlay.querySelector('img');

    // Afficher l'image avec une animation
    setTimeout(() => {
        img.style.opacity = '1';
        img.style.transform = 'scale(1) rotate(0deg)';
    }, 300);

    // Faire disparaître l'overlay après 4 secondes
    setTimeout(() => {
        overlay.classList.add('fade-out');
    }, 4000);

    // Supprimer complètement l'overlay après la fin de l'animation
    overlay.addEventListener('transitionend', function(e) {
        if (e.propertyName === 'opacity' && this.classList.contains('fade-out')) {
            this.remove();
        }
    });
});

// Supprimez ou commentez ces lignes si elles existent
// document.getElementById('count-button').addEventListener('click', () => {
//     incrementWirdCount(currentWirdId);
//     updateWirdDisplay(currentWirdId);
// });

document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const shortText = document.querySelector('.short-text');
    const fullText = document.querySelector('.full-text');

    showMoreBtn.addEventListener('click', function() {
        if (fullText.style.display === 'none') {
            fullText.style.display = 'inline';
            shortText.style.display = 'none';
            showMoreBtn.textContent = 'عرض أقل';
        } else {
            fullText.style.display = 'none';
            shortText.style.display = 'inline';
            showMoreBtn.textContent = 'عرض المزيد';
        }
    });
});

// Ajoutez un bouton de réinitialisation
const resetButton = document.createElement('button');
resetButton.textContent = 'إعادة تعيين جميع العدادات';
resetButton.id = 'resetButton';
resetButton.addEventListener('click', resetAllCounters);
document.body.appendChild(resetButton);
