
document.getElementById("btnCheck").addEventListener("click", runTest);
let alertBox = document.getElementById("alert").classList;
let msg = document.getElementById("msg");
let alertHeading = document.getElementById("alertHeading");

function runTest(){
    let phrase = document.getElementById("userPhrase").value;

    // Get phrase in lowercase with spaces and special characters removed
    phrase = phrase.toLowerCase();
    let regrex = /[^a-z0-9]/gi;
    phrase = phrase.replace(regrex, "");

    // Reverse phrase and store in variable temp
    let temp = "";
    for(let i = phrase.length-1; i >= 0; i--){
        temp += phrase[i];
    }

    // Compare characters of phrase and reversed phrase
    for(let j = 0; j < phrase.length; j++){
        if(phrase[j] != temp[j]){
            alertBox.remove("alert-success");
            alertBox.add("alert-danger");
            alertHeading.innerHTML = "Sorry! Your phrase is not a palindrome";
            msg.innerHTML = `${phrase} is not a palindrome`;
            alertBox.remove("invisible");
            return;
        }    
    }

    msg.innerHTML = `Your phrase ${phrase} is a palindrome.`;
    alertBox.remove("invisible");
    alertHeading.innerHTML = "Terrific! Your phrase is a <strong>Palindrome</strong>"; 
}