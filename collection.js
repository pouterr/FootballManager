document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let draggedCard = null;

    cards.forEach(card => {
        card.addEventListener('dragstart', () => {
            draggedCard = card;
            setTimeout(() => card.classList.add('dragging'), 0);
        });

        card.addEventListener('dragend', () => {
            draggedCard = null;
            card.classList.remove('dragging');
        });
    });

    const dropZones = document.querySelectorAll('.drop-zone');
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault();
            zone.classList.add('hover');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('hover');
        });

        zone.addEventListener('drop', () => {
            if (draggedCard) {
                zone.innerHTML = ''; // Optional: Remove existing card
                zone.appendChild(draggedCard);
                zone.classList.remove('hover');
            }
        });
    });
});
