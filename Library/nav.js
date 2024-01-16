// const burgerButton = document.getElementById('burgerButton');
// const burgerModal = document.getElementById('burgerModal');
// const burgerModalIcon = document.getElementById('burgerModalIcon');
// const closeBurgerModal = document.getElementById('closeBurgerModal');
// const profileIcon = document.querySelector('.profile-icon');
// const profileMenu = document.querySelector('.profile-menu-no-auth');
// const profileMenuTrigger = document.querySelector('.profile-menu-trigger');
// const registerButton = document.getElementById('registerButton');
// const registerButton2 = document.getElementById('registerButton2');
// const registerModal = document.querySelector('.modal-register');
// const modalOverlay = document.getElementById('modalOverlay');
// const closeRegisterModal = document.getElementById('closeRegisterModal');

// document.addEventListener('DOMContentLoaded', () => {
//   registerModal.classList.remove('register-active');
// });

// registerButton.addEventListener('click', () => {
//   modalOverlay.style.display = 'block';
//   registerModal.classList.toggle('register-active');
// });

// registerButton2.addEventListener('click', () => {
//   modalOverlay.style.display = 'block';
//   registerModal.classList.toggle('register-active');
// });

// closeRegisterModal.addEventListener('click', () => {
//   modalOverlay.style.display = 'none';
//   registerModal.classList.remove('register-active');
// });

// modalOverlay.addEventListener('click', () => {
//   modalOverlay.style.display = 'none';
//   registerModal.classList.remove('register-active');
// });

// burgerButton.addEventListener('click', (event) => {
//   event.stopPropagation();
//   burgerButton.classList.toggle('hidden');
//   closeBurgerModal.classList.toggle('show');
//   burgerModal.classList.toggle('show');
//   burgerModalIcon.classList.toggle('show');
//   profileMenuTrigger.classList.remove('profile-active');
//   document.body.classList.toggle('modal-open');
// });

// burgerModal.addEventListener('click', (event) => {
//   event.stopPropagation();
//   if (event.target.classList.contains('modal-nav-link')) {
//     burgerButton.classList.remove('hidden');
//     closeBurgerModal.classList.remove('show');
//     burgerModal.classList.remove('show');
//     burgerModalIcon.classList.remove('show');
//     document.body.classList.remove('modal-open');
//   }
// });



// closeBurgerModal.addEventListener('click', () => {
//   burgerButton.classList.toggle('hidden');
//   closeBurgerModal.classList.toggle('show');
//   burgerModal.classList.remove('show');
//   burgerModalIcon.classList.remove('show');
// });

// document.addEventListener('click', (event) => {
//   if (!burgerButton.contains(event.target) && !burgerModal.contains(event.target)) {
//     burgerButton.classList.remove('hidden');
//     closeBurgerModal.classList.remove('show');
//     burgerModal.classList.remove('show');
//     burgerModalIcon.classList.remove('show');
//     document.body.classList.remove('modal-open');
//   }
// });


// profileIcon.addEventListener('click', (event) => {
//   burgerButton.classList.remove('hidden'); 
//   closeBurgerModal.classList.remove('show');
//   burgerModal.classList.remove('show');
//   burgerModalIcon.classList.remove('show');
//   document.body.classList.remove('modal-open');
//   profileMenuTrigger.classList.toggle('profile-active');
// });

// document.addEventListener('click', (event) => {
//   if (!profileIcon.contains(event.target) && !profileMenu.contains(event.target)) {
//     profileMenuTrigger.classList.remove('profile-active');
//   }
// });


