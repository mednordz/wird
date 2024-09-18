const wirdContent = [
    { text: "أَعُوذُ بِاللهِ السَّمِيعِ العَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ", repeat: 1 },
    { text: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ", repeat: 3 },
    { text: "وَمَا تُقَدِّمُواْ لِأَنفُسِكُم مِّنْ خَيْرٖ تَجِدُوهُ عِندَ اَ۬للَّهِ هُوَ خَيْراٗ وَأَعْظَمَ أَجْراٗۖ وَاسْتَغْفِرُواْ اُ۬للَّهَۖ إِنَّ اَ۬للَّهَ غَفُورٞ رَّحِيمٞۖ", repeat: 1, quran: true },
    { text: "أَسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لَا إِلٰهَ إِلَّا هُوَ الحَيُّ القَيُّومُ وَأَتُوبُ إِلَيْهِ", repeat: 33 },
    { text: "اِنَّ اَ۬للَّهَ وَمَلَٰٓئِكَتَهُۥ يُصَلُّونَ عَلَى اَ۬لنَّبِےٓءِۖ يَٰٓأَيُّهَا اَ۬لذِينَ ءَامَنُواْ صَلُّواْ عَلَيْهِ وَسَلِّمُواْ تَسْلِيماًۖ", repeat: 1, quran: true },
    { text: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ النَّبِيِّ الأُمِّيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ تَسْلِيمًا", repeat: 33 },
    { text: "فَاعْلَمَ اَنَّهُۥ لَآ إِلَٰهَ إِلَّا اَ۬للَّهُ", repeat: 1, quran: true },
    { text: "لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ المُلْكُ وَلَهُ الحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", repeat: 33 },
    { text: "سُورَةُ الإِخْلَاصِ", repeat: 3, surah: true },
    { text: "سُورَةُ الفَاتِحَةِ", repeat: 1, surah: true },
    { text: "سُورَةُ الفَتْحِ", repeat: 1, link: "surah-al-fath.html" }
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
        surahText.textContent = getSurahText(item.text);
        surahText.classList.add('quran');
        div.appendChild(surahText);
    }

    if (item.link) {
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = 'اقرأ السورة كاملة';
        div.appendChild(link);
    }

    if (item.repeat > 1) {
        const counter = createCounter(item.repeat);
        div.appendChild(counter);
    }

    return div;
}

function getSurahText(surahName) {
    // Ici, vous devriez ajouter le texte complet des sourates
    // Pour cet exemple, je vais juste retourner un texte placeholder
    return "بِسْمِ اِ۬للَّهِ اِ۬لرَّحْمَٰنِ اِ۬لرَّحِيمِ قُلْ هُوَ اَ۬للَّهُ أَحَدٌۖ ١ اِ۬للَّهُ اُ۬لصَّمَدُۖ ٢ لَمْ يَلِدْ وَلَمْ يُولَدْۖ ٣ وَلَمْ يَكُن لَّهُۥ كُفُؤاً اَحَدٞۖ ٤";
}

function createCounter(maxCount) {
    const counter = document.createElement('div');
    counter.className = 'counter';
    
    const countDisplay = document.createElement('span');
    countDisplay.className = 'count-display';
    countDisplay.textContent = '0/' + maxCount;
    counter.appendChild(countDisplay);

    let currentCount = 0;
    let isInitial = true;

    function updateCount() {
        countDisplay.textContent = currentCount + '/' + maxCount;
        if (currentCount === maxCount) {
            counter.classList.add('completed');
        } else {
            counter.classList.remove('completed');
        }
    }

    function showOptions() {
        const options = [11, 33, 99, 100];
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'counter-options';
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => {
                maxCount = option;
                updateCount();
                optionsContainer.remove();
                isInitial = false;
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

    return counter;
}

function initializeWird() {
    const wirdContainer = document.getElementById('wird');
    wirdContent.forEach((item, index) => {
        const wirdItem = createWirdItem(item, index);
        wirdContainer.appendChild(wirdItem);
    });

    // Modifiez cette partie pour rendre les éléments wird cliquables
    document.querySelectorAll('.wird-item').forEach(item => {
        const counter = item.querySelector('.counter');
        if (counter) {
            item.addEventListener('click', () => {
                counter.click();
            });
        }
    });
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
