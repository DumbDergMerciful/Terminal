var input = "";
const enter = "Enter"
const backspace = "Backspace"
document.addEventListener('keyup', (event) => { 
if(event.key == backspace) {
        input.slice(0, -1);
    }
}, false);
function update(){

}
document.addEventListener('keypress', (event1) => {
if (event1.key == enter){
  comamnd()
}else {
    document.getElementById("input").value = input+=event1.key;
}
var command
}, false);
function comamnd(){
    switch (input) {
        case 'help':
          console.log('Help command has been ran!');
             break;
        case 'resources':
          console.log('Resources:');
             break;
        case 'discord': console.log("Discord");
            break;
        case 'github': console.log("Github");
            break;
        case 'contact': console.log("Contact me!")
            break;
        default:
          console.log("Error: unknown command!");
      }
      




}