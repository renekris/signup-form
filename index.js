function checkPasswords() {
    const passwordPrimary = document.getElementById('user-password');
    const passwordSecondary = document.getElementById('user-password-confirm');

    if (passwordPrimary.value === passwordSecondary.value) return true;
    return false
}
