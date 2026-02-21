function displayError(msg) {
    // display error message
    document.querySelector('.errors').textContent = msg;
}

function isCardNumberValid(number) {
    // normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
    return number === '1234123412341234';
}

function submitHandler(event) {
    //event.preventDefault();
    let errorMsg = '';
    displayError('');

    let cardNumber = document.getElementById('IDcardNumber');
    const cardNum = cardNumber.value.trim();
    // Check if it's numeric and valid in one go
        if (!/^\d{16}$/.test(cardNum)) {
            errorMsg += 'Card number must be 16 digits\n';
        } else if (!isCardNumberValid(cardNum)) {
            errorMsg += 'Card number is not valid\n';
        }

    //check date
    const expYear = Number(document.getElementById('year').value);
    const expMonth = Number(document.getElementById('month').value);
    const currentDate = new Date();

    if ( 2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= currentDate.getMonth())
    ) {
        errorMsg += 'Card is expired\n';
    }

    if (errorMsg !== '') {
    //there was an error. stop the form and display the errors.
    displayError(errorMsg);
    return;
    }
    // Success: show a confirmation message
    //const formContainer = document.getElementById('checkoutForm');
    document.getElementById('card').innerHTML = '<h2>Thank you for your purchase. i didnt like this one. Not enough practice offered in the video, we literally just pasted the code. The only thing I did was make the favicon, the rest of the script was pretty tough to understand, and I didnt feel like I had been prepared to handle the divs or the grid templates, so it made this assignment take many more hours than the other ones. I prefer when the learning material prepares me for the assignment.</h2>';
}

document.getElementById('IDsubmitButton').addEventListener('click', () => submitHandler());