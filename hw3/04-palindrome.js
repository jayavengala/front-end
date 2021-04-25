// Enter your code here

function search() {
    document.getElementById("result").innerHTML = "<span style='color: red;'>No. Try again.</span>";
    console.log("check")
    var value = document.getElementById("number").value;
    var input = parseInt(value);
    var rev ;
    // var remainder ;
    var final = 0;
    if(isNumber(input)) {
        console.log(input)
        // while (input != 0) {
        //     remainder = input % 10;
        //     console.log(remainder)
        //     reverse = reverse * 10 + remainder;
        //     console.log(reverse)
        //     input /= 10;
        // } this is for number palindrome
        rev = input.toString();
        rev = rev.split("").reverse().join("");
        final = parseInt(rev);
        console.log(final)
        if(input === final) {
            console.log("palindrome")
            document.getElementById("result").innerHTML = "<span style='color: green;'>Yes! This a palindrome.</span>";
        }
    }
    
}

    
function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
    }

