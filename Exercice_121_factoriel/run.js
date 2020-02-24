//let nombre = window.prompt("Merci de saisir un nombre entier!")

function factoriel(n){
    var fact = 1;
    if(n==0 | n== 1){
        return fact
    }
    else{
        for (var i = 2; i <= n; i++) {
            fact *=i          
        }
    }

    return fact;
}

var n = 5
console.log('Factoriel de ',n, '=', factoriel(n))