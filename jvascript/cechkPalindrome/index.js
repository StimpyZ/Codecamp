function palindrome(str) {
    var str1 = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    var str2 = str1.split('').reverse().join('');
    if (str1 === str2) {
        return true;
    }
    return false;
}

palindrome("eye");
