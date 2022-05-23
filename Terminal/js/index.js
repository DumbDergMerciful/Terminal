var input = "";
const enter = "Enter"
const backspace = "Backspace"
document.addEventListener('keyup', (event) => { 
    document.getElementById("main").style.visibility = "visible";
if(event.key == backspace) {
        input.slice(0, -1);
    }
}, false);
function update(){

}
document.addEventListener('keypress', (event1) => {
if (event1.key == enter){
  comamnd() //typo UwU
}else {
    document.getElementById("input").value = input+=event1.key;
}
var command
}, false);
function comamnd(){
    //Commands allowed by user
    switch (input) {
        case 'help':
          console.log('Help command has been ran!');
             break;
        case 'resources':
          console.log('Resources:');
             break;
        case 'discord': discord();
            break;
        case 'github': console.log("Github");
            break;
        case 'contact': console.log("Contact me!")
            break;
        case '': noInput();
            break;
        case 'simple': console.log("Goes to the alternative website for Merciful.dev");
            break;
        case 'reload': console.log("Reloads the website");
            break;
        default: error();
          
      }
      



//Command functions
}
function discord(){
    let div = document.createElement('div');
    div.id = 'command';
    div.innerHTML = '<p>'+input+'</p><p>Discord Link: <a target="_blank" href="https://discord.gg/jjx8YDN4sA">Merciful\'s Discord</a>';
    document.body.appendChild(div);
    input="";
    let div2 = document.createElement('div');
    div2.id = "input"
    div2.innerHTML = '<output class="userinput"></output><span class="type">|</span>'
    document.body.appendChild(div2)
document.getElementById("input").remove()
}
function error(){
    let div = document.createElement('div');
    div.id = 'command';
    div.innerHTML = '<p>'+input+'</p><p>Error: Unknown Command</p>';
    document.body.appendChild(div);
    input="";
    let div2 = document.createElement('div');
    div2.id = "input"
    div2.innerHTML = '<output class="userinput"></output><span class="type">|</span>'
    document.body.appendChild(div2)
document.getElementById("input").remove()
}
function noInput(){
    let div = document.createElement('div');
    div.id = 'command';
    div.innerHTML = '<p>'+input+'</p><p>Error: Please Enter in a Command!</p>';
    document.body.appendChild(div);
    input="";
    let div2 = document.createElement('div');
    div2.id = "input"
    div2.innerHTML = '<output class="userinput"></output><span class="type">|</span>'
    document.body.appendChild(div2)
document.getElementById("input").remove()
}
