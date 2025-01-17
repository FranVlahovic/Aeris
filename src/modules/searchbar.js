const searchbar = document.querySelector('.search-bar');
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

const openSearchbar = () => {
    searchInput.style.display = 'block';
    searchbar.classList.add('search-open');
    searchInput.focus();
};

const closeSearchbar = () => {
    searchInput.style.display = 'none';
    searchbar.classList.remove('search-open');
};

export const toggleSearchbar = () => {
    searchBtn.addEventListener('click', () => {
        if (searchInput.style.display === 'none') {
            openSearchbar();
        } else {
            closeSearchbar();
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchbar.contains(e.target)) {
            closeSearchbar();
            searchInput.value = '';
        }
    });

    searchbar.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Enter') {
            closeSearchbar();
            searchInput.value = '';
        }
    });
};
