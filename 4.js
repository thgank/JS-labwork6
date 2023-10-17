function replaceNextChar(str){
    function incrChar(char){
        if(char ==='z'){
            return 'a';
        } else if(char === 'Z'){
            return 'A';
        } else if(/[a-yA-Y]/.test(char)){
            return String.fromCharCode(char.charCodeAt(0) + 1);
        } else {
            return char;
        }
    }

    return str.split('').map(incrChar).join('');
}

function display(){
    const str = prompt("enter string: ");
    if(str === null || str === ""){
        alert("no input");
    } else{
        const newstr = replaceNextChar(str);
        alert("new string: " + newstr);
    }
}