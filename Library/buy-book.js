const modalByCard = document.getElementById('modalByCard');
const closeModalByCard = document.getElementById('closeModalByCard');
const buyButtons  = document.querySelectorAll('.buy-button');
const cardNumberInput = document.getElementById('cardNumberInput');
const expirationCodeInput1 = document.getElementById('expirationCodeInput1'); // Изменено на ID вашего input элемента для кода
const expirationCodeInput2 = document.getElementById('expirationCodeInput2'); // Изменено на ID вашего input элемента для кода
const cvcInput = document.getElementById('cvcInput');
const cardholderNameInput = document.getElementById('cardholderNameInput');
const postalCodeInput = document.getElementById('postalCodeInput');
const cityInput = document.getElementById('cityInput');
const buyButton = document.querySelector('.button-form-buy-card');

buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (!storedCurrentUser) {
            loginModal.classList.add('login-active');
            modalOverlay.style.display = 'block';
        } else {
            const buttonId = button.getAttribute('data-button-id');
            const currentUser = storedCurrentUser;

            if (currentUser.libraryCard === 'yes') {
                if (!currentUser.bookName.includes(buttonId)) {
                    currentUser.bookName.push(buttonId);
                    currentUser.booksCounter++; 
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    console.log(`Added buttonId ${buttonId} to bookName array.`);
                }

                button.disabled = true;
                button.textContent = 'Own';
                button.classList.add('own-button');

                localStorage.setItem('currentUser', JSON.stringify(currentUser));

                // Обновление текущего пользователя и сохранение в хранилище
                setCurrentUser(currentUser);
                const users = getUsersFromLocalStorage();
                const updatedUsers = users.map(user => {
                    if (user.email === currentUser.email) {
                        return currentUser;
                    }
                    return user;
                });
                saveUsersToLocalStorage(updatedUsers);
                alert('The book was purchased successfully!');

                // Добавьте код для обновления интерфейса здесь, если это необходимо
            } else {
                modalByCard.classList.add('modal-buy-card-active');
                modalOverlay.style.display = 'block';
            }
        }
    });
});









closeModalByCard.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    modalByCard.classList.remove('modal-buy-card-active');
});


function isValidCardNumber(cardNumber) {
    
    const cardNumberWithoutSpaces = cardNumber.replace(/\s+/g, '');

    
    if (!/^\d{16}$/.test(cardNumberWithoutSpaces)) {
        return false;
    }

    return true;
}

function areExpirationCodesValid(expirationCode1, expirationCode2) {
    if (/^\d{2}$/.test(expirationCode1) && /^\d{2}$/.test(expirationCode2)) {
        return true;
    }
    return false;
}

function isValidCVC(cvc) {
    
    return /^\d{3}$/.test(cvc);
}



function handleBuyButtonClick() {
    const cardNumberValue = cardNumberInput.value.trim();
    const expirationCodeValue1 = expirationCodeInput1.value.trim();
    const expirationCodeValue2 = expirationCodeInput2.value.trim();
    const cvcValue = cvcInput.value.trim();
    const cardholderNameValue = cardholderNameInput.value.trim();
    const postalCodeValue = postalCodeInput.value.trim();
    const cityValue = cityInput.value.trim();

    
    const anyFieldEmpty = (
        cardNumberValue === '' ||
        expirationCodeValue1 === '' ||
        expirationCodeValue2 === '' ||
        cvcValue === '' ||
        cardholderNameValue === '' ||
        postalCodeValue === '' ||
        cityValue === ''
    );

    const isCardNumberValid = isValidCardNumber(cardNumberValue);
    const areExpirationCodesValidResult = areExpirationCodesValid(expirationCodeValue1, expirationCodeValue2);
    const isCVCValid = isValidCVC(cvcValue);

   
   if (anyFieldEmpty) {
    alert('Please fill in all fields.');
} else if (!isCardNumberValid) {
    alert('Please provide a valid card number.');
} else if (!areExpirationCodesValidResult) {
    alert('Please provide a valid Expiration code.');
} else if (!isCVCValid) {
    alert('Please provide a valid CVC.');
} else {
    if (currentUser) {
        
        currentUser.libraryCard = 'yes';

        setCurrentUser(currentUser);
       
        const users = getUsersFromLocalStorage();
        const updatedUsers = users.map(user => {
            if (user.email === currentUser.email) {
                return currentUser;
            }
            return user;
        });
        saveUsersToLocalStorage(updatedUsers);

        

        alert('Purchase successful!');
        modalByCard.classList.remove('modal-buy-card-active');
        modalOverlay.style.display = 'none';
}
}};


buyButton.addEventListener('click', handleBuyButtonClick);

const booksInfo = {
    1: {
        title: "The Book Eaters",
        author: "Sunyi Dean",
    },
    2: {
        title: "Cackle",
        author: "Rachel Harrison",
    },
    3: {
        title: "Dante: Poet of the Secular World",
        author: "Erich Auerbach",
    },
    4: {
        title: "The Last Queen",
        author: "Clive Irving",
    },
    5: {
        title: "The Body",
        author: "Stephen King",
    },
    6: {
        title: "Carry: A Memoir of Survival on Stolen Land",
        author: "Toni Jenson",
    },
    7: {
        title: "Days of Distraction",
        author: "Alexandra Chang",
    },
    8: {
        title: "Dominicana",
        author: "Angie Cruz",
    },
    9: {
        title: "Crude: A Memoir",
        author: "Pablo Fajardo & ​​Sophie Tardy-Joubert",
    },
    10: {
        title: "Let My People Go Surfing",
        author: "Yvon Chouinard",
    },
    11: {
        title: "The Octopus Museum: Poems",
        author: "Brenda Shaughnessy",
    },
    12: {
        title: "Shark Dialogues: A Novel",
        author: "Kiana Davenport",
    },
    13: {
        title: "Casual Conversation",
        author: "Renia White",
    },
    14: {
        title: "The Great Fire",
        author: "Lou Ureneck",
    },
    15: {
        title: "Rickey: The Life and Legend",
        author: "Howard Bryant",
    },
    16: {
        title: "Slug: And Other Stories",
        author: "Megan Milks",
    },
};

