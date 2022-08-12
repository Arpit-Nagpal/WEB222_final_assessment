// Name: Arpit Nagpal
// Student ID: 152047213
// Email: anagpal7@myseneca.ca 

// To get the pay rate
let hiringRadioButton = document.getElementById('hiring');
let questionRadioButton = document.getElementById('question');
let commentRadioButton = document.getElementById('comment');

// variable to print the contact form only once
var noOfClick = 0;

// Event listeners
questionRadioButton.addEventListener('click', function() {
    if (noOfClick > 0) {
        deletePayRateInput();
        noOfClick = 0;
    }
});

commentRadioButton.addEventListener('click', function() {
    if (noOfClick > 0) {
        deletePayRateInput();
        noOfClick = 0;
    }
});

hiringRadioButton.addEventListener('click', function() {
    if (noOfClick == 0) {
        generatePayRateInput();
        noOfClick++;
    }
});

// Function for generating the pay rate input field
function generatePayRateInput() {
    let flag1 = document.createElement('br');
    flag1.id = 'f1';
    let flag2 = document.createElement('br');
    flag2.id = 'f2';
    let flag3 = document.createElement('br');
    flag3.id = 'f3';

    // Label creation
    const label1 = document.createElement("label");
    const textNode = document.createTextNode("Expected Hourly Rate: ");
    label1.appendChild(textNode);
    label1.id = 'hiring-label';

    // Input Field Creation
    const label2 = document.createElement("input");
    label2.id = 'hiring-input';
    label2.type = 'number';
    label2.step = '0.1';
    label2.placeholder = 'Enter Hourly Rate';
    label2.classList.add('format')

    document.querySelector(".radio-btns").appendChild(flag1);
    document.querySelector(".radio-btns").appendChild(flag2);
    document.querySelector(".radio-btns").appendChild(label1);
    document.querySelector(".radio-btns").appendChild(flag3);
    document.querySelector(".radio-btns").appendChild(label2);
}

// Function for deleting the pay rate input field
function deletePayRateInput() {
    let label = document.getElementById('hiring-rate');
    let input = document.getElementById('hiring-rate-input');
    let div = document.querySelector(".radio-btns");
    let f1 = document.getElementById('f1');
    let f2 = document.getElementById('f2');
    let f3 = document.getElementById('f3');

    div.removeChild(f1);
    div.removeChild(f2);
    div.removeChild(f3);
    div.removeChild(input);
    div.removeChild(label);
}

// Form Validation
let messages = [];
const form = document.getElementById('contactme-form');
const errorElement = document.getElementById('problem');

form.addEventListener('submit', (e) => {
    messages = [];

    // Function calling
    validateName();
    validateEmail();
    validateAddress();
    validateCity();
    validatePostalCode();
    validateMessage();

    // Error Display
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = `
        <h3>Incorrect Inputs Provided:</h3>
        <pre>${messages.join('\r\n')}</pre>
        `;
    }

    if (clicked > 0) {
        payRateValidation();
    }
})

//Reset Button 
form.addEventListener('reset', (e) => {
    messages = [];
    errorElement.innerHTML = '';
})

// Validating Name
function validateName() {
    const inputName = document.getElementById('name');
    if(nullChecker(inputName, 'Name')) {
        areAlphabets(inputName, '- Enter valid name (alphabets only)');
    }
}

// Validating email address
function validateEmail() {
    const email = document.getElementById('email');
    if (nullChecker(email, 'Email')) {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!(email.value.match(validRegex))) {
            messages.push("- Email Address is Invalid");
        }
    }    
}

// Validating address
function validateAddress() {
    const address = document.getElementById('address');
    if (nullChecker(address, 'Address')) {
        if (address.value.length < 10) {
            messages.push("- Enter valid address (atleast 10 characters)");
        }
    }
}

// Validating City
function validateCity() {
    const city = document.getElementById('city');
    if(nullChecker(city, 'City')) {
        areAlphabets(city, '- Enter valid city name (alphabets only)');
    }
}

// Validating postal code
function validatePostalCode() {
    let postalCode = document.getElementById('pCode');
    let validRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!(postalCode.value.match(validRegex))) {
        messages.push("- Enter valid Postal Code");
    }
}

// Validating message
function validateMessage() {
    const message = document.getElementById('message');
    if (nullChecker(message, 'Message')) {
        if (address.value.length < 10) {
            messages.push("- Message should be atleast 10 characters long");
        }
    }
}

// Validating pay rate
function payRateValidation() {
    let payRateInput = document.getElementById('hiring-rate-input');
    if (payRateInput.value <= 0) {
        messages.push("- Enter valid hourly rate")
    }
}

function nullChecker(element, elementName) {
    result = true;
    if (element.value === '' || element.value == null) {
        messages.push(`- ${elementName} is required`);
        result = false;
    }

    return result;
}

function areAlphabets(element, message) {
    let validRegex = /^[A-Za-z\s]+$/;
    if (!(element.value.match(validRegex))) {
        messages.push(message);
    }
}