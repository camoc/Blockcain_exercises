function palindrome(mystr){
    newstr = ''
    mytab = Array.from(mystr);
    mytab.forEach(element => {
        newstr = element + newstr;
    });
    if(mystr == result){
        return true
    }
    else{
        return false
    }
}

var mystr = 'ESOPE RESTE ICI ET SE REPOSE'
var result = palindrome(mystr);
console.log(result)


