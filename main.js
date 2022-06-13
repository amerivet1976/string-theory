
const prompt = require('prompt-sync')({sigint: true});
let  message = prompt("Write something: ");
let a = message.length;
let newMessage = "x";
let exclam 
let m 
let text
let mess

function xify(){
for( let i=1; i<a; i++){

    newMessage = newMessage.concat("x");

}
console.log(newMessage)
}



function yellingChars(){
    for (let i=0; i<a; i ++){
      m = message.charAt(i);
      exclam = m.concat("!");   
          text = text + exclam;
    }
    console.log(text)
}
   
function indexedChars(){
for(let i=0; i<a; i++){
    ind = message.charAt(i);
    ind = ind.concat(i)
    text = text + ind
}

console.log(text);
}


function exclam() {
let result = message.replaceAll("?", "!")
result = result.replaceAll(".","!")
console.log(result);

}



for(let i=0; i<15; i++){
    ind =message.charAt(i);
    text = text +ind;
    length = message.length -15;
}

console.log(text);
console.log(length);


