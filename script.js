// complete the given function

function palindrome(str)
{
    let remChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    // Reverse remChar for comparison
    let checkPalindrome = remChar.split('').reverse().join('');

    // Check to see if str is a Palindrome
    if(remChar === checkPalindrome)
    {
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = palindrome
