const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");


function validateform() {
    event.preventDefault();

    if (checkLength(name.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (checkLength(subject.value, 5) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkLength(phone.value, 8) === true) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block";
    }


    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    

    

}

form.addEventListener("submit", validateform);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const matches = regEx.test(email);
    return matches;
}
