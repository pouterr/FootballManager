document.addEventListener('DOMContentLoaded', function() {
    setupCountryFilter();
    setupPagination();
    paginateCards();
});

function filterCardsByCountry() {
    const selectedCountry = document.getElementById('countryFilter').value.toLowerCase();
    const cards = document.querySelectorAll('#marketCards .card');

    cards.forEach(card => {
        const country = card.dataset.country.toLowerCase();
        card.style.display = selectedCountry === '' || country === selectedCountry ? '' : 'none';
    });
}

function sortCards() {
    const container = document.getElementById('marketCards');
    let cards = Array.from(container.getElementsByClassName('card'));
    const sortBy = document.getElementById('sortSelect').value;

    cards.sort((a, b) => {
        const aValue = sortBy === 'name' ? a.getAttribute('data-name') : parseInt(a.getAttribute('data-value'));
        const bValue = sortBy === 'name' ? b.getAttribute('data-name') : parseInt(b.getAttribute('data-value'));
        return aValue > bValue ? 1 : -1;
    });

    cards.forEach(card => container.appendChild(card)); // Re-append cards in sorted order
    paginateCards(); // Repaginate after sorting
}

function filterCards() {
    const filterValue = document.getElementById('filterInput').value.toLowerCase();
    const cards = document.querySelectorAll('#marketCards .card, #userCollection .card');

    cards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        card.style.display = name.includes(filterValue) ? '' : 'none';
    });
    paginateCards(); // Repaginate after filtering
}

document.addEventListener('DOMContentLoaded', function() {
    setupPagination();
    paginateCards();
});

let currentPage = 1;
const cardsPerPage = 5; // Adjust as needed

function setupPagination() {
    document.getElementById('prevPage').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            paginateCards();
        }
    });

    document.getElementById('nextPage').addEventListener('click', function() {
        const totalCards = document.querySelectorAll('#marketCards .card').length;
        const totalPages = Math.ceil(totalCards / cardsPerPage);

        if (currentPage < totalPages) {
            currentPage++;
            paginateCards();
        }
    });
}

function paginateCards() {
    const cards = document.querySelectorAll('#marketCards .card');
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    // Update the display of all cards
    cards.forEach(card => card.style.display = 'none');
    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    for (let i = start; i < end && i < cards.length; i++) {
        cards[i].style.display = '';
    }

    // Update current page display
    document.getElementById('currentPage').textContent = currentPage;

    // Optionally disable Prev/Next buttons based on current page
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
}