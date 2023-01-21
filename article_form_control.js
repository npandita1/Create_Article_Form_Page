let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regPhone = /^\d{10}$/;
let regName = /^[A-Za-z\s]+$/;

function validateTitle() {
    let title = getTitle();
    if ( title.value.trim().length < 3 ) {
        document.getElementById("title-error").innerHTML = "Please enter a valid Title";
        document.getElementById("title-error").style.display = "block";
        title.style.border = "0.2vh solid red";
        return false;
    }
    document.getElementById("title-error").style.display = "none";
    title.style.border = "0.2vh solid #dee2e6";
    return true;
}

function getTitle() {
    return document.getElementById('title');

}

function validateContent() {
    let content = getContent();
    if (content.value.trim().length < 10) {
        document.getElementById("content-error").innerHTML = "Please enter a valid Content";
        document.getElementById("content-error").style.display = "block";
        content.style.border = "0.2vh solid red";
        return false;
    }
    document.getElementById("content-error").style.display = "none";
    content.style.border = "0.2vh solid #dee2e6";
    return true;
}

function getContent() {
    return document.getElementById('content');
}

function validateUser() {
    let user = getUser();
    let username = ["denson@84", "rohit@84", "niharika@84", "taniya@84"]
    if (username.includes(user.value)) {
        document.getElementById("user-error").style.display = "none";
        user.style.border = "0.2vh solid #dee2e6";
        return true;
    }
    document.getElementById("user-error").innerHTML = "Please enter a valid Content";
    document.getElementById("user-error").style.display = "block";
    user.style.border = "0.2vh solid red";
    return false;
}

function getUser() {
    return document.getElementById('user');
}

function validateName() {
    let name = getName();
    if (name.value.trim().length < 3 || !regName.test(name.value) ) {
        document.getElementById("name-error").innerHTML = "Please enter a valid Name";
        document.getElementById("name-error").style.display = "block";
        name.style.border = "0.2vh solid red";
        return false;
    }
    document.getElementById("name-error").style.display = "none";
    name.style.border = "0.2vh solid #dee2e6";
    return true;
}

function getName() {
    return document.getElementById('name');
}

function validateEmail() {
    let email = getEmail();
    if (email.value.trim().length < 10 || !regEmail.test(email.value) ) {
        document.getElementById("email-error").innerHTML = "Please enter a valid Email";
        document.getElementById("email-error").style.display = "block";
        email.style.border = "0.2vh solid red";
        return false;
    }
    document.getElementById("email-error").style.display = "none";
    email.style.border = "0.2vh solid #dee2e6";
    return true;
}

function getEmail() {
    return document.getElementById('email');
}

function validateNumber() {
    let number = getNumber();
    if (number.value.trim().length != 10 || !regPhone.test(number.value) ) {
        document.getElementById("number-error").innerHTML = "Please enter a valid Email";
        document.getElementById("number-error").style.display = "block";
        number.style.border = "0.2vh solid red";
        return false;
    }
    document.getElementById("number-error").style.display = "none";
    number.style.border = "0.2vh solid #dee2e6";
    return true;
}

function getNumber() {
    return document.getElementById('number');
}

function showPopup() {

}

