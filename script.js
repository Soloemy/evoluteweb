function togglePasswordVisibility() {
    const passwordField = document.getElementById("toggler");
    const eyeIcon = document.querySelector(".toggle-password");


    if(passwordField.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = 'url("./images/open.png")'; 
    }else{
        passwordInput.type='password';
        toggleIcon.textContent ='url("./images/close.png")';
    }
};

var passwordInput = document.getElementById(toggler);
var passwordRequirements = document.getElementById("password-requirement");
passwordInput.addEventListener("input", function (){
    var password = passwordInput.Value;
    // password requirements
    var minlength = 8;
    var hasUppercase = /[A-Z]/.test(password);
    var hasLowercase = /[a-z]/.test(password);
    var hasDigit = /\d/.test(password);
    var hasSpecial = /[!@#$%^&*()_+{\[\]:;<>,.?~\\/-]/.test(password);
    // update reuirements status
    document.getElementById("req-length").classList.toggle("met-requirement", password.length >= minlength);
    document.getElementById("req-upper").classList.toggle("met-requirement", hasUppercase);
    document.getElementById("req-lower").classList.toggle("met-requirement", hasLowercase);
    document.getElementById("req-digit").classList.toggle("met-requirement", hasDigit);
    document.getElementById("req-special").classList.toggle("met-requirement", hasSpecial);
    //check all password meet all requirements
    var meetsRequirements = password.length >= minlength &&  hasUppercase && hasLowercase && hasDigit && hasSpecial;
    if (meetsRequirements) {
        passwordRequirements.style.display = "none";
    }else{
        passwordRequirements.style.display = "block";
    }
});