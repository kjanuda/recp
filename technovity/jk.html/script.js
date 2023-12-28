var allValue = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var cVal1 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal2 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal3 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal4 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal5 = allValue[Math.floor(Math.random() * allValue.length)];
var cVal6 = allValue[Math.floor(Math.random() * allValue.length)];

var cValue = cVal1 + cVal2 + cVal3 + cVal4 + cVal5 + cVal6;

// Display the generated captcha value
document.getElementById('captchaValue').innerHTML = cValue;

var thisValue = "";
var inputCaptcha = document.getElementById('inputCaptcha');
var submitBtn = document.getElementById('submitBtn');

inputCaptcha.addEventListener('input', function() {
    thisValue = inputCaptcha.value;
});

submitBtn.addEventListener('click', function() {
    if (cValue === thisValue) {
        alert('Valid');
        document.logForm.submit();
    } else if (inputCaptcha.value === "") {
        alert('Please enter the captcha');
    } else {
        alert('Invalid Captcha');
    }
});
