document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const totalItems = 7; // Nombre total d'éléments
    const itemsData = [
        { title: 'Titre de l’événement 1', date: '22/03/2029 / 12h30mn', description: 'Avant de pouvoir partager un cours, il va falloir faire une demande à l’admin, qui va à son tour étudier et valider ou non la demande.' },
        { title: 'Titre de l’événement 2', date: '15/04/2029 / 14h00mn', description: 'Inscrivez-vous à ce séminaire pour apprendre les dernières techniques de développement web. Places limitées.' },
        { title: 'Titre de l’événement 3', date: '30/05/2029 / 10h00mn', description: 'Rejoignez-nous pour une session de réseautage avec des professionnels de l’industrie. Un excellent moyen de faire des contacts.' },
        { title: 'Titre de l’événement 4', date: '12/06/2029 / 16h00mn', description: 'Participez à notre atelier interactif sur la gestion de projet agile. Apprenez de nouvelles compétences pratiques.' },
        { title: 'Titre de l’événement 5', date: '25/07/2029 / 18h30mn', description: 'Assistez à notre conférence annuelle sur l’innovation technologique. Écoutez des intervenants de renom et explorez les nouvelles tendances.' },
        { title: 'Titre de l’événement 6', date: '08/08/2029 / 11h00mn', description: 'Découvrez les meilleures pratiques pour le développement durable lors de notre symposium écologique. Un événement à ne pas manquer.' },
        { title: 'Titre de l’événement 7', date: '20/09/2029 / 09h00mn', description: 'Participez à notre conférence sur les nouvelles tendances du marketing digital et apprenez des experts du secteur.' }
    ];

    itemsData.forEach(item => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        
        carouselItem.innerHTML = `
            <div class="evenbox">
                <p>${item.title}<br><br>${item.date}</p>
            </div>
            <button class="evebtn">Voir plus</button>
            <p class="eventex">${item.description}</p>
        `;
        
        carousel.appendChild(carouselItem);
    });

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * (300 + 25);
        carousel.style.transform = `translateX(${offset}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1; 
        }
        updateCarousel();
    });
});
