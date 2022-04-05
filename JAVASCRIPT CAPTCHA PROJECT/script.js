var allvalue = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0']
var cVal1 = allvalue[Math.floor(Math.random()*allvalue.length)];
var cVal2 = allvalue[Math.floor(Math.random()*allvalue.length)];
var cVal3 = allvalue[Math.floor(Math.random()*allvalue.length)];
var cVal4 = allvalue[Math.floor(Math.random()*allvalue.length)];
var cVal5 = allvalue[Math.floor(Math.random()*allvalue.length)];
var cVal6 = allvalue[Math.floor(Math.random()*allvalue.length)];

var cValue = cVal1+cVal2+cVal3+cVal4+cVal5+cVal6;
//alert(cValue)

captchaValue.innerHTML = cValue;

thisValue = "";
inputCaptcha.addEventListener('change', function(){
    thisValue = inputCaptcha.value;
    //alert(thisValue)
})

submitBtn.addEventListener('click', function(){
    if(cValue == thisValue){
        alert('valid Captcha');
        document.LogForm.SUBMIT();
    }else if(inputCaptcha.value == ""){
        alert('Invalid Captcha');
    }else{
        alert('Invalid Captcha');
    }
})