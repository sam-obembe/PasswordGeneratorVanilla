
const passwordNumberInputId = "numOfPasswords";
const passwordLengthInputId = "lengthOfPasswords";
const passwordListId = "passwordList"
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789£$%^&*()_-+={}[]@#~:;/?>.<,!";


let passwords = [];
let numOfPasswords = 0;
let lenOfPasswords = 0

const numberOfPasswordsInput = document.getElementById(passwordNumberInputId);
const lengthOfPasswordsInput = document.getElementById(passwordLengthInputId);
const passwordList = document.getElementById(passwordListId);



const generatePasswords = () => {
    if (passwords.length > 0) {
        clearPasswords();
    }
    for (let i = 0; i < numberOfPasswordsInput.value; i++) {
        let password = generatePassword(lengthOfPasswordsInput.value);
        passwords.push(password);

    }

    updatePasswordDisplay();
}

const generatePassword = (len) => {
    let password = "";
    for (let i = 0; i < len; i++) {
        let characterIndex = Math.ceil(Math.random() * characters.length - 1);
        password += characters[characterIndex];

    }
    return password;
}


const updatePasswordDisplay = () => {
    passwords.forEach(password => {
        let elem = document.createElement('li');
        elem.innerText = password;
        passwordList.appendChild(elem);
    })
}


const clearPasswords = () => {
    while (passwordList.lastChild) {
        passwordList.removeChild(passwordList.lastChild)
    }

    passwords = [];
}