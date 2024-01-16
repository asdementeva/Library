const burgerButton = document.getElementById('burgerButton');
const burgerModal = document.getElementById('burgerModal');
const burgerModalIcon = document.getElementById('burgerModalIcon');
const closeBurgerModal = document.getElementById('closeBurgerModal');

burgerButton.addEventListener('click', (event) => {
    event.stopPropagation();
    burgerButton.classList.toggle('hidden');
    closeBurgerModal.classList.toggle('show');
    burgerModal.classList.toggle('show');
    burgerModalIcon.classList.toggle('show');
    profileMenuTrigger.classList.remove('profile-active');
    profileMenuAuth.classList.remove('profile-active');
    document.body.classList.toggle('modal-open');
  });
  
  burgerModal.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('modal-nav-link')) {
      burgerButton.classList.remove('hidden');
      closeBurgerModal.classList.remove('show');
      burgerModal.classList.remove('show');
      burgerModalIcon.classList.remove('show');
      document.body.classList.remove('modal-open');
    }
  });
  
  
  
  closeBurgerModal.addEventListener('click', () => {
    burgerButton.classList.toggle('hidden');
    closeBurgerModal.classList.toggle('show');
    burgerModal.classList.remove('show');
    burgerModalIcon.classList.remove('show');
  });
  
  document.addEventListener('click', (event) => {
    if (!burgerButton.contains(event.target) && !burgerModal.contains(event.target)) {
      burgerButton.classList.remove('hidden');
      closeBurgerModal.classList.remove('show');
      burgerModal.classList.remove('show');
      burgerModalIcon.classList.remove('show');
      document.body.classList.remove('modal-open');
    }
  });