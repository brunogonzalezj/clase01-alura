const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const passwordInput = document.getElementById('password');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const copyMessage = document.getElementById('copyMessage');

function generatePassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

function updatePassword() {
    const length = lengthSlider.value;
    passwordInput.value = generatePassword(length);
}

lengthSlider.addEventListener('input', function() {
    lengthValue.textContent = this.value;
    updatePassword();
});

generateBtn.addEventListener('click', updatePassword);

copyBtn.addEventListener('click', function() {
    passwordInput.select();
    document.execCommand('copy');
    copyMessage.classList.remove('hidden');
    setTimeout(() => copyMessage.classList.add('hidden'), 2000);
});

    // Generate initial password
updatePassword();

