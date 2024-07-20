

////////////LINEAR EQUATION FUNCTION//////////


function solveLinearEquation(a, b) {
    if (a === 0) {
        throw new Error("Coefficient 'a' cannot be zero for a linear equation");
    }
    return -b / a;
}


/////////STRING REVERSAL FUNCTION/////////
function reverseString(str) {
    return str.split('').reverse().join('');
}



/////////CHECK ELEMENTS IN ARRAY FUNCTION//////////
function contains(arr, element) {
    return arr.includes(element);
}



//////////////////EMAIL VALIDATION FUNCTION////////////
// Function to validate an email address
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && !email.includes(' ');
}



////////////////CHECK OBJECT PROPERTY FUNCTION////////////////////
function hasProperty(obj, property) {
    return obj.hasOwnProperty(property);
}