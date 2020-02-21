function palindrome(mystr){
    newstr = ''
    mytab = Array.from(mystr);
    mytab.forEach(element => {
        newstr = element + newstr;
    });
    return newstr;
}

var mystr = 'anna'
var result = palindrome(mystr);

if(mystr == result){
    console.log('La chaine " ' + mystr + ' " est un palindrome')
}
else{
    console.log('La chaine <' + mystr + '> n\'est pas  un palindrome')
    console.log(result + ' vs ' + mystr)
}


