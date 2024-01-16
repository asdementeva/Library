const profileIcon = document.querySelector('.profile-icon');
const profileMenu = document.querySelector('.profile-menu-no-auth');
const profileMenuTrigger = document.querySelector('.profile-menu-trigger');

function updateProfileIcon(firstName, lastName, cardNumber) {
  const initials = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  profileIcon.textContent = initials;
  profileIcon.style.backgroundColor = '#FFF';
  profileIcon.style.color = '#BB945F';
    profileIcon.style.display = 'flex';
    profileIcon.style.justifyContent = 'center';
    profileIcon.style.alignItems = 'center';
    profileIcon.style.fontSize = '15px';

    const profileCardNumber = document.querySelector('.profile-card-number');
    profileCardNumber.textContent = cardNumber;
    profileCardNumber.style.fontSize = '13px';
}

profileIcon.addEventListener('click', (event) => {
    burgerButton.classList.remove('hidden'); 
    closeBurgerModal.classList.remove('show');
    burgerModal.classList.remove('show');
    burgerModalIcon.classList.remove('show');
    document.body.classList.remove('modal-open');
    profileMenuTrigger.classList.toggle('profile-active');
  });
  



  
  profileMenuTrigger.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('profile-button')) {
      profileMenuTrigger.classList.remove('profile-active');
    }
  });
