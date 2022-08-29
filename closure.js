function getPasswordChecker(passRight) {
    return function checkPass(passCheck) {
        const pass = passRight;
        result = pass == passCheck;
        return result;      
    }
    
} 
const answ1 = getPasswordChecker(333);
console.log(answ1(111))
console.log(answ1(1112))
console.log(answ1(333))
