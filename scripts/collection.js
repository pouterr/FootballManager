document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let draggedCard = null;

    // Enable dragging for each card
    cards.forEach(card => {
        card.addEventListener('dragstart', (e) => {
            draggedCard = card;
            setTimeout(() => card.classList.add('dragging'), 0);
        });

        card.addEventListener('dragend', () => {
            draggedCard = null;
            card.classList.remove('dragging');
        });
    });

    const dropZones = document.querySelectorAll('.drop-zone');

    // Enable each drop zone to accept cards
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault(); // Necessary to allow dropping
            zone.classList.add('hover');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('hover');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedCard && zone.children.length === 0) { // Check if the zone is empty
                zone.appendChild(draggedCard);
                zone.classList.remove('hover');
            }
        });
    });  
});