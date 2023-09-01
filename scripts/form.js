

function sendForm(){
    const activeModal = document.querySelector("#success-modal")
    activeModal.classList.add("open-modal")
    
}

function closeModal(){
    const activeModal = document.querySelector("#success-modal")
    activeModal.classList.remove("open-modal")
}


// validación email

const validateEmail = document.querySelector("#email")
const helpTextEmail = document.querySelector("#help-text-mail")

validateEmail.addEventListener("keyup", validationMail)

let mailValidate = false

function validationMail(){
    let mailValue = validateEmail.value
    let Atposition = mailValue.indexOf("@")
    let dotPosition = mailValue.lastIndexOf(".")

    helpTextEmail.textContent = ""

    if(mailValue.length == 0){
        mailValidate = false
        helpTextEmail.textContent = "Please write an email"
        helpTextEmail.style.color = "red"
    }else if(Atposition == -1){
        mailValidate = false
        helpTextEmail.textContent = "It must have a @"
        helpTextEmail.style.color = "red"
    }else if(Atposition != mailValue.lastIndexOf("@")){
        mailValidate = false
        helpTextEmail.textContent = "It cannot be more than one @"
        helpTextEmail.style.color = "red"
    }else if(mailValue.charAt(Atposition + 1) == ""){
        mailValidate = false
        helpTextEmail.textContent = "It must be something after the @"
        helpTextEmail.style.color = "red"
    }else if(dotPosition == -1){
        mailValidate = false
        helpTextEmail.textContent = "It must be a dot after the @"
        helpTextEmail.style.color = "red"
    }else if(Atposition > dotPosition){
        mailValidate = false
        helpTextEmail.textContent = "The dot must be after the @"
        helpTextEmail.style.color = "red"
    }else if(mailValue.charAt(dotPosition + 1) == ""){
        mailValidate = false
        helpTextEmail.textContent = "It must be something after the dot"
        helpTextEmail.style.color = "red"
    }else{
        mailValidate = true
        helpTextEmail.textContent = "Correct"
        helpTextEmail.style.color = "green"
    }
    validateForm()
}

//validación nombre
nameValidation()
let nameValidate = false
function nameValidation(){
const validateName = document.querySelector("#name")
const helpTextName = document.querySelector("#help-text-name")

validateName.addEventListener("keyup", validationName)



function containsNumbers(str) {
    return /\d/.test(str);
  }

function validationName(){
    let nameValue = validateName.value

    helpTextName.textContent = ""

    if(nameValue.trim().length == 0){
        nameValidate = false
        helpTextName.textContent = "You must write a name"
        helpTextName.style.color = "red"
    } else if (containsNumbers(nameValue)){ 
        nameValidate = false
        helpTextName.textContent = "Your name cannot contain numbers"
        helpTextName.style.color = "red"
    } else {
        nameValidate = true
        helpTextName.textContent = "Correct"
        helpTextName.style.color = "green"
    }

    validateForm()
}
}
//validación apellido
lastNameValidation()
let lastNameValidate = false
function lastNameValidation(){
const validateLastName = document.querySelector("#last-name")
const helpTextLastName = document.querySelector("#help-text-last-name")

validateLastName.addEventListener("keyup", validationLastName)



function containsNumbers(str) {
    return /\d/.test(str);
  }

function validationLastName(){
    let lastNameValue = validateLastName.value

    helpTextLastName.textContent = ""

    if(lastNameValue.trim().length == 0){
        lastNameValidate = false
        helpTextLastName.textContent = "You must write a last name"
        helpTextLastName.style.color = "red"
    } else if (containsNumbers(lastNameValue)){ 
        lastNameValidate = false
        helpTextLastName.textContent = "Your last name cannot contain numbers"
        helpTextLastName.style.color = "red"
    } else {
        lastNameValidate = true
        helpTextLastName.textContent = "Correct"
        helpTextLastName.style.color = "green"
    }

    validateForm()
}
}
// validación general

numberValidation()
let numberValidate = false
function numberValidation(){
const validateNumber = document.querySelector("#phone")
const helpTextNumber = document.querySelector("#help-text-phone")

validateNumber.addEventListener("keyup", validationLastName)



function containsNumbers(str) {
    return /\d/.test(str);
  }

function validationLastName(){
    let numberValue = validateNumber.value

    helpTextNumber.textContent = ""

    if(numberValue.trim().length != 9){
        numberValidate = false
        helpTextNumber.textContent = "The number must contain 9 digits"
        helpTextNumber.style.color = "red"
    } else if (isNaN(numberValue)){ 
        numberValidate = false
        helpTextNumber.textContent = "Your phone can only contain numbers"
        helpTextNumber.style.color = "red"
    } else {
        numberValidate = true
        helpTextNumber.textContent = "Correct"
        helpTextNumber.style.color = "green"
    }

    validateForm()
}
}


validateForm()

function validateForm(){
    const checkBox = document.querySelector("#agree")
    const submitBtn = document.querySelector("#submit-form")
    if (mailValidate == true && nameValidate == true && lastNameValidate == true && numberValidate == true && checkBox.checked){
        submitBtn.disabled = false
    } else {
        submitBtn.disabled = true
        // submitBtn.style.opacity = "0.6"
    }
}

