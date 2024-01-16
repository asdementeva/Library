let currentUser = null;
const logOutButton = document.getElementById('logOutButton');
const profileMenuAuth = document.querySelector('.profile-menu-auth');
const imgProfileIcon = document.getElementById('imgProfileIcon');



logOutButton.addEventListener('click', () => {

    buyButtons.forEach((button) => {
        button.disabled = false; // Сделать кнопку неактивной
        button.textContent = 'Buy';
        button.classList.remove('own-button');
    });

    cardButton1.classList.remove('card-block-nonactive');
    cardsProfileDigital.classList.add('card-block-nonactive');
    cardSubtitle.classList.remove('card-block-nonactive');
    cardSubtitle2.classList.add('card-block-nonactive');
    accessSubtitle.classList.remove('card-block-nonactive');
    accessSubtitle2.classList.add('card-block-nonactive');
    accessText.classList.remove('card-block-nonactive');
    accessText2.classList.add('card-block-nonactive');
    accessButtons.classList.remove('card-block-nonactive');
    accessButtons2.classList.add('card-block-nonactive');
    readerNameInput1.value = '';
    cardNumberInput1.value = '';


    setCurrentUser(null);

    localStorage.setItem('loggedOut', 'true');
    // loginCounter = 0;
  
    profileIcon.title = ''; 
    profileIcon.textContent = ''; 
    profileIcon.style.backgroundColor = 'initial'; 
    profileIcon.style.color = 'initial'; 

    const imgProfileIcon = document.createElement('img');
    imgProfileIcon.className = 'img-profile-icon';
    imgProfileIcon.src = './assets/images/Subtract.svg';
    imgProfileIcon.alt = 'Profile Icon';

   
    profileIcon.appendChild(imgProfileIcon);
    profileIcon.addEventListener('click', (event) => {
        burgerButton.classList.remove('hidden'); 
        closeBurgerModal.classList.remove('show');
        burgerModal.classList.remove('show');
        burgerModalIcon.classList.remove('show');
        document.body.classList.remove('modal-open');
        profileMenuAuth.classList.remove('profile-active');
        profileMenuTrigger.classList.toggle('profile-active');
      });

});


document.addEventListener('click', (event) => {
    if (!profileIcon.contains(event.target) && !profileMenuAuth.contains(event.target)) {
        profileMenuAuth.classList.remove('profile-active');
    }
  });