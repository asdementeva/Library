const seasonRadios = document.querySelectorAll('.radio-buttons input[type="radio"]');
const bookLists = document.querySelectorAll('.book-list');

seasonRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedSeason = radio.value;
        
        bookLists.forEach(bookList => {
            if (bookList.classList.contains(selectedSeason)) {
                bookList.classList.add('visible');
            } else {
                bookList.classList.remove('visible'); 
            }
        });
    });
});
