
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length ===  4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    //display pin
    const displayPin = document.getElementById('pin-display');
   displayPin.value = pin;

})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typedNumber');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newtypedNumber = previousTypedNumber + number;
        typedNumberField.value = newtypedNumber;
    }

})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('pin-display');
    const currentPin = displayPinField.value;
    const typedNumberField = document.getElementById('typedNumber');
    const typedNumber = typedNumberField.value;
    const correctMessage = document.getElementById('pin-success');
    const failureMessage = document.getElementById('pin-failed');
    if(typedNumber === currentPin){
       
        correctMessage.style.display = 'block';
        failureMessage.style.display = 'none';
    }
    else{
     
        failureMessage.style.display = 'block';
        correctMessage.style.display = 'none';
    }
})

