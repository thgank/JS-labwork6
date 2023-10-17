let str = prompt("enter string: ");
let letter = prompt("enter letter: ");
let exists = false;
if (str.length >= 4) {
    for (i = 1; i <= 3; i++) {
        if (str.charAt(i) === letter) {
            exists = true;
            break;
        }
    }
    if (exists) {
        alert("true");
    }
    else {
        alert("false");
    }
}
else{
    alert("invalid string");
}
