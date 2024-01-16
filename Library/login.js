const loginModal = document.getElementById('loginModal');
const closeLoginModal = document.querySelector('.close-icon-login');
const loginButton = document.getElementById('loginButton');
const emailInputOrCardNumber = document.getElementById('emailInputOrCurdNumber');
const loginButton2 = document.getElementById('loginButton2');
const loginButton3 = document.getElementById('loginButton3');
const passwordInputLogin = document.getElementById('passwordInputLogin');


registerLoginButton.addEventListener('click', () => {
    registerModal.classList.remove('register-active');
    loginModal.classList.add('login-active');
    modalOverlay.style.display = 'block';
});


loginButton.addEventListener('click', () => {
  loginModal.classList.add('login-active');
  modalOverlay.style.display = 'block';
});



loginButton2.addEventListener('click', () => {
    loginModal.classList.add('login-active');
    modalOverlay.style.display = 'block';
});

closeLoginModal.addEventListener('click', () => {
    loginModal.classList.remove('login-active');
    modalOverlay.style.display = 'none';
});

loginButton3.addEventListener('click', () => {

    const inputEmailOrCard = emailInputOrCardNumber.value.trim();
    const inputPassword = passwordInputLogin.value.trim();

    if (inputEmailOrCard === '' || inputPassword === '') {
        alert('Please fill in all fields');
        return;
    }


    if (passwordInputLogin.value.trim().length < 8) {
        alert('Password should be at least 8 characters long');
        return;
    }

    const users = getUsersFromLocalStorage();
    const authenticatedUser = users.find(user => {
        return (user.email === inputEmailOrCard || user.cardNumber === inputEmailOrCard) &&
               user.password === inputPassword;
    });



    if (authenticatedUser) {
       
        // loginCounter++;
        authenticatedUser.visitsCounter++;
        alert('Successfully logged in');
        setCurrentUser(authenticatedUser);
        loginModal.classList.remove('login-active');
        modalOverlay.style.display = 'none';
        profileIcon.title = `${currentUser.firstName} ${currentUser.lastName}`;
        updateProfileIcon(authenticatedUser.firstName, authenticatedUser.lastName, authenticatedUser.cardNumber);
        localStorage.setItem('loggedOut', 'false');
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


        buyButtons.forEach((button) => {
          const buttonId = button.getAttribute('data-button-id');
  
          // Если кнопка включена в массив bookName, блокируем ее
          if (currentUser.bookName.includes(buttonId)) {
              button.disabled = true;
              button.textContent = 'Own';
              button.classList.add('own-button');
          }
      });

        // updateVisitsCounter(loginCounter);
        // localStorage.setItem('loginCounter', loginCounter);
        updateVisitsCounter(authenticatedUser.visitsCounter);
        

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

  const users = getUsersFromLocalStorage();
        const updatedUsers = users.map(user => {
            if (user.email === authenticatedUser.email) {
                return authenticatedUser;
            }
            return user;
        });
        saveUsersToLocalStorage(updatedUsers);

    } else {
        alert('Invalid credentials');
    }
});




