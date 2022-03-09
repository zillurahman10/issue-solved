const emailCheck = () => {
    const emailInput = document.getElementById('email-input')
    const validation = /[@].*[.].*[.com]/.test(emailInput.value)
    if (validation) {
        document.getElementById('valid-msg').style.display = 'block'
        document.getElementById('invalid-msg').style.display = 'none'
    }
    else {
        document.getElementById('valid-msg').style.display = 'none'
        document.getElementById('invalid-msg').style.display = 'block'
    }
    emailInput.value = '';
}