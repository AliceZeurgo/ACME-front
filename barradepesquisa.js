document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');

    function performSearch() {
        const searchTerm = searchInput.value;
        
        searchResults.innerHTML = `<p>Resultados da pesquisa para: ${searchTerm}</p>`;
    }

    searchButton.addEventListener('click', function () {
        performSearch();
    });

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});