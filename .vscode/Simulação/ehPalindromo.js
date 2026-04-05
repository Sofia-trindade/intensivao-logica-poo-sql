function ehPalindromo(str) {
  // seu código

  let invertida = '';
  
    
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];  
    }
    
    for (let i = 0; i < str.length; i++) {

        if (invertida === str) {
            return true;
        }else{
           return false;
        }
    }
   
}



console.log(ehPalindromo("arara")); // true
console.log(ehPalindromo("banana")); // false