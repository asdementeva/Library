const registerButton = document.getElementById('registerButton');
const registerButton2 = document.getElementById('registerButton2');
const registerModal = document.getElementById('registerModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeRegisterModal = document.getElementById('closeRegisterModal');
const registerButton3 = document.getElementById('registerButton3');
const firstNameInput = document.getElementById('FirstNameInput');
const lastNameInput = document.getElementById('LastNameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const registerLoginButton = document.getElementById('registerLoginButton');
const loginRegisterButton = document.getElementById('loginRegisterButton');
const cardButton1 = document.getElementById('cardButton');
const cardsProfileDigital = document.getElementById('cardsProfileDigital');
const cardSubtitle = document.getElementById('cardSubtitle');
const cardSubtitle2 = document.getElementById('cardSubtitle2');
const accessSubtitle = document.getElementById('accessSubtitle');
const accessSubtitle2 = document.getElementById('accessSubtitle2');
const accessText = document.getElementById('accessText');
const accessText2 = document.getElementById('accessText2');
const accessButtons = document.getElementById('accessButtons');
const accessButtons2 = document.getElementById('accessButtons2');
const MyProfile2 = document.getElementById('MyProfile2');
const readerNameInput1 = document.getElementById('readerNameInput1');
const cardNumberInput1 = document.getElementById('cardNumberInput1');






function handleDOMContentLoaded() {
  const users = getUsersFromLocalStorage();
  const loggedOut = localStorage.getItem('loggedOut');

  if (loggedOut === 'true') {
    profileIcon.title = ''; 
    profileIcon.textContent = ''; 
    profileIcon.style.backgroundColor = 'initial'; 
    profileIcon.style.color = 'initial'; 

    const imgProfileIcon = document.createElement('img');
    imgProfileIcon.className = 'img-profile-icon';
    imgProfileIcon.src = './assets/images/Subtract.svg';
    imgProfileIcon.alt = 'Profile Icon';

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
    profileIcon.appendChild(imgProfileIcon);

  } else {
      const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));

      if (storedCurrentUser) {
          currentUser = storedCurrentUser;

          buyButtons.forEach((button) => {
            const buttonId = button.getAttribute('data-button-id');
    
            // Если кнопка включена в массив bookName, блокируем ее
            if (currentUser.bookName.includes(buttonId)) {
                button.disabled = true;
                button.textContent = 'Own';
                button.classList.add('own-button');
            }
        });

        cardButton1.classList.add('card-block-nonactive');
        cardsProfileDigital.classList.remove('card-block-nonactive');
        cardSubtitle.classList.add('card-block-nonactive');
        cardSubtitle2.classList.remove('card-block-nonactive');
        accessSubtitle.classList.add('card-block-nonactive');
        accessSubtitle2.classList.remove('card-block-nonactive');
        accessText.classList.add('card-block-nonactive');
        accessText2.classList.remove('card-block-nonactive');
        accessButtons.classList.add('card-block-nonactive');
        accessButtons2.classList.remove('card-block-nonactive');
        document.querySelector('.visits-counter-auth').textContent = currentUser.visitsCounter;
        document.querySelector('.books-counter-auth').textContent = currentUser.booksCounter;
        readerNameInput1.value = `${currentUser.firstName} ${currentUser.lastName}`;
        cardNumberInput1.value = currentUser.cardNumber;
        // Применяем стили к элементу readerNameInput1
readerNameInput1.style.color = '#BB945F';
readerNameInput1.style.fontFamily = 'Forum';
readerNameInput1.style.fontSize = '30px';
readerNameInput1.style.fontStyle = 'normal';
readerNameInput1.style.fontWeight = '400';
readerNameInput1.style.lineHeight = '50px';
readerNameInput1.style.letterSpacing = '0.6px';
readerNameInput1.style.paddingLeft = '20px';
readerNameInput1.style.width = '500px';


// Применяем стили к элементу cardNumberInput1
cardNumberInput1.style.color = '#BB945F';
cardNumberInput1.style.fontFamily = 'Forum';
cardNumberInput1.style.fontSize = '30px';
cardNumberInput1.style.fontStyle = 'normal';
cardNumberInput1.style.fontWeight = '400';
cardNumberInput1.style.lineHeight = '50px';
cardNumberInput1.style.letterSpacing = '0.6px';
cardNumberInput1.style.paddingLeft = '20px';
cardNumberInput1.style.width = '500px';

          loginCounter = parseInt(localStorage.getItem('loginCounter')) || 0;

          requestAnimationFrame(() => {
              localStorage.setItem('loggedOut', 'false');
              updateProfileIcon(currentUser.firstName, currentUser.lastName, currentUser.cardNumber);
              profileIcon.title = `${currentUser.firstName} ${currentUser.lastName}`;
              
              profileIcon.addEventListener('click', (event) => {
                burgerButton.classList.remove('hidden'); 
                closeBurgerModal.classList.remove('show');
                burgerModal.classList.remove('show');
                burgerModalIcon.classList.remove('show');
                document.body.classList.remove('modal-open');
                profileMenu.classList.remove('profile-active')
                profileMenuAuth.classList.toggle('profile-active');      
              });
        
              document.addEventListener('click', (event) => {
                if (!profileIcon.contains(event.target) && !profileMenuAuth.contains(event.target)) {
                  profileMenuTrigger.classList.remove('profile-active');
                }
              });
              
              profileMenuAuth.addEventListener('click', (event) => {
                event.stopPropagation();
                if (event.target.classList.contains('profile-button')) {
                  profileMenuAuth.classList.remove('profile-active');
                }
              });


          });

          
      } else {
        
    }
      }
  };





function setCurrentUser(user) {
  currentUser = user;
  localStorage.setItem('currentUser', JSON.stringify(user));
}


function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

  function getUsersFromLocalStorage() {
    const usersJSON = localStorage.getItem('users');
    return usersJSON ? JSON.parse(usersJSON) : [];
  }
  

  function saveUsersToLocalStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  function generateCardNumber() {
    const randomHex = Math.floor(Math.random() * 1000000000).toString(16).toUpperCase();
    return randomHex.padStart(9, '0');
  }

  document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);


  
  registerButton.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
    registerModal.classList.add('register-active');
  });
  
  registerButton2.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
    registerModal.classList.toggle('register-active');
  });
  
  closeRegisterModal.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    registerModal.classList.remove('register-active');
  });
  
  modalOverlay.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    registerModal.classList.remove('register-active');
    loginModal.classList.remove('login-active');
    modalProfile.classList.remove('modal-frofile-active');
    modalByCard.classList.remove('modal-buy-card-active');

  });

  loginRegisterButton.addEventListener('click', () => {
    loginModal.classList.remove('login-active');
    registerModal.classList.add('register-active');
    modalOverlay.style.display = 'block';
});

function showProfileForRegistration() {
  cardButton1.classList.add('card-block-nonactive');
  cardsProfileDigital.classList.remove('card-block-nonactive');
  cardSubtitle.classList.add('card-block-nonactive');
  cardSubtitle2.classList.remove('card-block-nonactive');
  accessSubtitle.classList.add('card-block-nonactive');
  accessSubtitle2.classList.remove('card-block-nonactive');
  accessText.classList.add('card-block-nonactive');
  accessText2.classList.remove('card-block-nonactive');
  accessButtons.classList.add('card-block-nonactive');
  accessButtons2.classList.remove('card-block-nonactive');
  document.querySelector('.visits-counter-auth').textContent = currentUser.visitsCounter;
  document.querySelector('.books-counter-auth').textContent = currentUser.booksCounter;
  readerNameInput1.value = `${currentUser.firstName} ${currentUser.lastName}`;
  cardNumberInput1.value = currentUser.cardNumber;
  
  // Применяем стили к элементу readerNameInput1
  readerNameInput1.style.color = '#BB945F';
  readerNameInput1.style.fontFamily = 'Forum';
  readerNameInput1.style.fontSize = '30px';
  readerNameInput1.style.fontStyle = 'normal';
  readerNameInput1.style.fontWeight = '400';
  readerNameInput1.style.lineHeight = '50px';
  readerNameInput1.style.letterSpacing = '0.6px';
  readerNameInput1.style.paddingLeft = '20px';
  readerNameInput1.style.width = '500px';

  // Применяем стили к элементу cardNumberInput1
  cardNumberInput1.style.color = '#BB945F';
  cardNumberInput1.style.fontFamily = 'Forum';
  cardNumberInput1.style.fontSize = '30px';
  cardNumberInput1.style.fontStyle = 'normal';
  cardNumberInput1.style.fontWeight = '400';
  cardNumberInput1.style.lineHeight = '50px';
  cardNumberInput1.style.letterSpacing = '0.6px';
  cardNumberInput1.style.paddingLeft = '20px';
  cardNumberInput1.style.width = '500px';
}

  registerButton3.addEventListener('click', () => {
    
    const newEmail = emailInput.value.trim();
    localStorage.setItem('loggedOut', 'false');


    if (
      firstNameInput.value.trim() === '' ||
      lastNameInput.value.trim() === '' ||
      emailInput.value.trim() === '' ||
      passwordInput.value.trim() === ''
    ) {
      alert('Please fill in all fields');
      return; 
    }

    if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
      }

    if (passwordInput.value.trim().length < 8) {
        alert('Password should be at least 8 characters long');
        return; 
    }

    loginCounter++;
//     cardButton1.classList.add('card-block-nonactive');
//         cardsProfileDigital.classList.remove('card-block-nonactive');
//         cardSubtitle.classList.add('card-block-nonactive');
//         cardSubtitle2.classList.remove('card-block-nonactive');
//         accessSubtitle.classList.add('card-block-nonactive');
//         accessSubtitle2.classList.remove('card-block-nonactive');
//         accessText.classList.add('card-block-nonactive');
//         accessText2.classList.remove('card-block-nonactive');
//         accessButtons.classList.add('card-block-nonactive');
//         accessButtons2.classList.remove('card-block-nonactive');
//         document.querySelector('.visits-counter-auth').textContent = currentUser.visitsCounter;
//         document.querySelector('.books-counter-auth').textContent = currentUser.booksCounter;
//         readerNameInput1.value = `${currentUser.firstName} ${currentUser.lastName}`;
//         cardNumberInput1.value = currentUser.cardNumber;
//         Применяем стили к элементу readerNameInput1
// readerNameInput1.style.color = '#BB945F';
// readerNameInput1.style.fontFamily = 'Forum';
// readerNameInput1.style.fontSize = '30px';
// readerNameInput1.style.fontStyle = 'normal';
// readerNameInput1.style.fontWeight = '400';
// readerNameInput1.style.lineHeight = '50px';
// readerNameInput1.style.letterSpacing = '0.6px';
// readerNameInput1.style.paddingLeft = '20px';
// readerNameInput1.style.width = '500px';


// // Применяем стили к элементу cardNumberInput1
// cardNumberInput1.style.color = '#BB945F';
// cardNumberInput1.style.fontFamily = 'Forum';
// cardNumberInput1.style.fontSize = '30px';
// cardNumberInput1.style.fontStyle = 'normal';
// cardNumberInput1.style.fontWeight = '400';
// cardNumberInput1.style.lineHeight = '50px';
// cardNumberInput1.style.letterSpacing = '0.6px';
// cardNumberInput1.style.paddingLeft = '20px';
// cardNumberInput1.style.width = '500px';


    const users = getUsersFromLocalStorage();
    const existingUser = users.find(user => user.email === newEmail);
    if (existingUser) {
        alert('User with this email already exists');
        return;
    }

    const newUser = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        cardNumber: generateCardNumber(),
        visitsCounter: 1,
        libraryCard: "no",
        booksCounter: 0,
        bookName: [],
      };


    setCurrentUser(newUser);
    users.push(newUser);
    saveUsersToLocalStorage(users);   
    profileIcon.title = `${newUser.firstName} ${newUser.lastName}`;
    // loginCounter = 1;
    updateProfileIcon(newUser.firstName, newUser.lastName, newUser.cardNumber);

    registerModal.classList.remove('register-active');
    modalOverlay.style.display = 'none';


    profileIcon.addEventListener('click', (event) => {
      burgerButton.classList.remove('hidden'); 
      closeBurgerModal.classList.remove('show');
      burgerModal.classList.remove('show');
      burgerModalIcon.classList.remove('show');
      document.body.classList.remove('modal-open');
      profileMenu.classList.remove('profile-active')
      profileMenuAuth.classList.toggle('profile-active');      
    });
  });

  // cardButton1.addEventListener('click', () => {
  //   const users = getUsersFromLocalStorage();
  //   const authenticatedUser = users.find(user => {
  //     return user.cardNumber === cardNumberInput1.value;
  //   });
  
  //   if (
  //     // readerNameInput1.value === `${storedCurrentUser.firstName} ${storedCurrentUser.lastName}` &&
  //     cardNumberInput1.value === authenticatedUser.cardNumber
  //   ) {
  //     setTimeout(() => {
  //       cardButton1.classList.add('card-block-nonactive');
  //       cardsProfileDigital.classList.remove('card-block-nonactive');
  //       cardSubtitle.classList.add('card-block-nonactive');
  //       cardSubtitle2.classList.remove('card-block-nonactive');
  //       accessSubtitle.classList.add('card-block-nonactive');
  //       accessSubtitle2.classList.remove('card-block-nonactive');
  //       accessText.classList.add('card-block-nonactive');
  //       accessText2.classList.remove('card-block-nonactive');
  //       accessButtons.classList.add('card-block-nonactive');
  //       accessButtons2.classList.remove('card-block-nonactive');
  //       document.querySelector('.visits-counter-auth').textContent = authenticatedUser.visitsCounter;
  //       document.querySelector('.books-counter-auth').textContent = authenticatedUser.booksCounter;
  //       readerNameInput1.value = `${authenticatedUser.firstName} ${authenticatedUser.lastName}`;
  //       cardNumberInput1.value = authenticatedUser.cardNumber;
  
  //       // Применяем стили к элементам readerNameInput1 и cardNumberInput1
  //       readerNameInput1.style.color = '#BB945F';
  //       readerNameInput1.style.fontFamily = 'Forum';
  //       readerNameInput1.style.fontSize = '30px';
  //       readerNameInput1.style.fontStyle = 'normal';
  //       readerNameInput1.style.fontWeight = '400';
  //       readerNameInput1.style.lineHeight = '50px';
  //       readerNameInput1.style.letterSpacing = '0.6px';
  //       readerNameInput1.style.paddingLeft = '20px';
  //       readerNameInput1.style.width = '500px';
  
  //       cardNumberInput1.style.color = '#BB945F';
  //       cardNumberInput1.style.fontFamily = 'Forum';
  //       cardNumberInput1.style.fontSize = '30px';
  //       cardNumberInput1.style.fontStyle = 'normal';
  //       cardNumberInput1.style.fontWeight = '400';
  //       cardNumberInput1.style.lineHeight = '50px';
  //       cardNumberInput1.style.letterSpacing = '0.6px';
  //       cardNumberInput1.style.paddingLeft = '20px';
  //       cardNumberInput1.style.width = '500px';
  //     }, 10000);
  //   } else {
  //     // Введенные данные не совпали с данными из локального хранилища
  //     // Здесь можно вывести сообщение об ошибке
  //     alert('Invalid credentials. Please check your Reader\'s name and Card number.');
  //   }
  // });
  

            
  