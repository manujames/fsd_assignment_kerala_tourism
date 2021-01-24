// This function check whether the specified input field is empty or not
// Return true if input have some value in it
function basicValidation(input,messageId){
    let = validationMessage = document.getElementById(messageId);
    if(input.value.trim().length === 0){
        validationMessage.innerHTML = '<i class="far fa-times-circle"></i> This field can\'t be empty';
        validationMessage.style.color = 'red';
        return false;
    }
    validationMessage.innerHTML = '<i class="far fa-check-circle"></i>';
    validationMessage.style.color = 'green';
    return true;
}

function phoneValidation(input,messageId){
    let = validationMessage = document.getElementById(messageId);
    let regExp1 = /^([0-9]{10})$/;                                              //eg: 0123456789
    let regExp2 = /^([0-9]{3})([\ .-]{1})([0-9]{3})([\ .-]{1})([0-9]{4})$/;     //eg: 012-345-6789, 012.345.6789, 012 345 6789
    if(input.value.length === 10 && regExp1.test(input.value)){
        validationMessage.innerHTML = '<i class="far fa-check-circle"></i>';
        validationMessage.style.color = 'green';
        return true;
    }
    else if(regExp2.test(input.value)){
        validationMessage.innerHTML = '<i class="far fa-check-circle"></i>';
        validationMessage.style.color = 'green';
        return true;
    }
    else if(input.value.trim().length===0){
        validationMessage.innerHTML = '<i class="far fa-times-circle"></i> This field can\'t be empty';
        validationMessage.style.color = 'red';
        return false;
    }
    else{
        validationMessage.innerHTML = '<i class="far fa-times-circle"></i> Enter a valid 10 digit phone number';
        validationMessage.style.color = 'red';
        return false;
    }
}

function emailValidation(input,messageId){
    let = validationMessage = document.getElementById(messageId);
    // Username can include a-z, A-Z, 0-9, . and -
    // Fisrt character should be alphanumeric
    // No consecutive . or - are allowed
    // @ seperates username and domain name
    // domain name can include a-z, A-Z, 0-9 and -
    // . seoerates domain name and primary extension
    // Extension can include a-z and A-Z
    // Extension should have 2 or 3 characters
    // Secondary extension is optional
    // . seperates primary and secondary extensions
    let regExp = /^(?!.*\.{2})(?!.*\-{2})([a-zA-Z0-9]{1})([a-zA-Z0-9\.-]+)?\@([a-zA-Z0-9\-]+)\.([a-zA-Z]{2,3})(\.[a-zA-Z]{2,3})?$/;
    if(regExp.test(input.value)){
        console.log(1);
        validationMessage.innerHTML = '<i class="far fa-check-circle"></i>';
        validationMessage.style.color = 'green';
        return true;
    }
    else if(input.value.trim().length===0){
        console.log(2);
        validationMessage.innerHTML = '<i class="far fa-times-circle"></i> This field can\'t be empty';
        validationMessage.style.color = 'red';
        return false;
    }
    else{
        console.log(3);
        validationMessage.innerHTML = '<i class="far fa-times-circle"></i> Enter a valid e-mail id';
        validationMessage.style.color = 'red';
        return false;
    }
}