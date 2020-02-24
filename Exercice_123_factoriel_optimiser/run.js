function factorielSmart(n, acc)
{
    if (n == 0 || n == 1) return acc; 
    else return factorielSmart(n-1, acc*n); 
}


console.log(factorielSmart(5,1))