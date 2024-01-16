const modalProfile = document.getElementById('modalProfile');
const closeProfileModal = document.getElementById('closeProfileModal');
const MyProfile = document.getElementById('MyProfile');
const modalProfileIcon = document.getElementById('modalProfileIcon');
const profileName = document.querySelector('.prifile-name');
let loginCounter = 0;
let libraryCard = "no";
let bookName;
const visitsCounter = document.getElementById('visitsCounter');
const booksCounter = document.getElementById('booksCounter');
const rentedBooks = document.getElementById('rentedBooks');



function updateVisitsCounter(count) {
    loginCounter = count;
    if (visitsCounter) {
    visitsCounter.innerText = count;
} else {
    console.error('Элемент с классом .visits-counter не найден.');
}
localStorage.setItem('loginCounter', count);
};



    
closeProfileModal.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    modalProfile.classList.remove('modal-frofile-active');
  });

  function updateModalProfileIcon(firstName, lastName, cardNumber, visitsCounter, booksCounter) {
    const initials = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
    modalProfileIcon.textContent = initials;
    modalProfileIcon.style.backgroundColor = '#FFF';
    modalProfileIcon.style.color = '#BB945F';
    modalProfileIcon.style.display = 'flex';
    modalProfileIcon.style.justifyContent = 'center';
    modalProfileIcon.style.alignItems = 'center';
    modalProfileIcon.style.fontSize = '20px';
    profileName.textContent = `${firstName}${' '}${lastName}`;



    const rentedItems = document.querySelector('.rented-items');
    rentedItems.innerHTML = '';

    // Переберите книги в currentUser.bookName и добавьте их в список
    for (const bookId of currentUser.bookName) {
        const bookInfo = getBookInfoById(bookId); // Получите информацию о книге по её ID
        if (bookInfo) {
            const listItem = document.createElement('li');
            listItem.classList.add('rented-item');
            listItem.textContent = `${bookInfo.title}, ${bookInfo.author}`;
            listItem.setAttribute('data-book-name-id', bookId);
            listItem.setAttribute('data-author-name-id', bookId);
            rentedItems.appendChild(listItem);
        }
    }


    updateVisitsCounter(visitsCounter);
    
   
    const profileCardNumber = document.querySelector('.card-number-number');
    profileCardNumber.textContent = cardNumber;

    const profilebooksCount = document.querySelector('.book-counter');
    profilebooksCount.textContent = booksCounter;

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('loginCounter', loginCounter);
  })};


  MyProfile.addEventListener('click', () => {
    profileMenuAuth.classList.remove('profile-active');
    modalProfile.classList.add('modal-frofile-active');
    modalOverlay.style.display = 'block';
    updateModalProfileIcon(currentUser.firstName, currentUser.lastName, currentUser.cardNumber, currentUser.visitsCounter, currentUser.booksCounter);
    
});
MyProfile2.addEventListener('click', () => {
    modalProfile.classList.add('modal-frofile-active');
    modalOverlay.style.display = 'block';
    updateModalProfileIcon(currentUser.firstName, currentUser.lastName, currentUser.cardNumber, currentUser.visitsCounter, currentUser.booksCounter);
    
});



const cardNumberIconCopy = document.querySelector('.card-number-icon-copy');

cardNumberIconCopy.addEventListener('click', () => {
    const cardNumberText = document.querySelector('.card-number-number').textContent; 

   
    const tempInput = document.createElement('input');
    tempInput.setAttribute('type', 'text');
    tempInput.setAttribute('value', cardNumberText);


    document.body.appendChild(tempInput);

   
    tempInput.select();

   
    document.execCommand('copy');

    
    document.body.removeChild(tempInput);

   
    alert('Card number copied to clipboard!');
});
