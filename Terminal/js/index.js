var input = "";
const enter = "Enter"
const backspace = "Backspace"
document.addEventListener('keyup', (event) => { 
    document.getElementById("main").style.visibility = "visible";
if(event.key == backspace) {
       input = input.slice(0, -1);
       document.getElementById("userinput").value = input;
    }
}, false);
function update(){

}
document.addEventListener('keypress', (event1) => {
if (event1.key == enter){
  comamnd() //typo UwU
}else {
    document.getElementById("userinput").value = input+=event1.key;
}
var command
}, false);
function comamnd(){
    //Commands allowed by user
    switch (input) {
        case 'help': help();
             break;
        case 'resources': resources();
             break;
        case 'discord': discord();
            break;
        case 'github': github();
            break;
        case '': noInput();
            break;
        case 'altwebsite': altwebsite();
            break;
        case 'reload': reload();
            break;
        case 'src': src();
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
    div2.innerHTML = '<output id="userinput" class="userinput"></output><span>|</span><footer></footer>'
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
    div2.innerHTML = '<output id="userinput" class="userinput"></output><span>|</span><footer></footer>'
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
    div2.innerHTML = '<output id="userinput" class="userinput"></output><span>|</span><footer></footer>'
    document.body.appendChild(div2)
    document.getElementById("input").remove()
}
function help(){
    let div = document.createElement('div');
    div.id = 'command';
    div.innerHTML = '<p>'+input+'</p>'+'<p>Available Commands:</p><p>- help</p><p>- discord</p><p>- github</p><p>- altwebsite</p><p>- resources</p><p>- reload</p><p>- src</p>';
    document.body.appendChild(div);
    input="";
    let div2 = document.createElement('div');
    div2.id = "input"
    div2.innerHTML = '<output id="userinput" class="userinput"></output><span>|</span><footer></footer>'
    document.body.appendChild(div2)
    document.getElementById("input").remove()
}
function github(){
    let div = document.createElement('div');
    div.id = 'command';
    div.innerHTML = '<p>'+input+'</p><p>Github: <a target="_blank" href="https://github.com/DumbDergMerciful">Merciful\'s Github</a>';
    document.body.appendChild(div);
    input="";
    let div2 = document.createElement('div');
    div2.id = "input"
    div2.innerHTML = '<output id="userinput" class="userinput"></output><span>|</span><footer></footer>'
    document.body.appendChild(div2)
    document.getElementById("input").remove()
}
function reload(){
    window.location.reload();
}
function resources(){
    let div = document.createElement('div');
    div.id = 'command';
    div.innerHTML = '<p>'+input+'</p><p>Password Generator: <a target="_blank" href="https://passwordgenerator.merciful.dev/">Password Generator</a><p>Spigot Resources: <a target="_blank" href="https://www.spigotmc.org/resources/authors/mercifuldragon.1253419/">Merciful\'s Spigot</a>';
    document.body.appendChild(div);
    input="";
    let div2 = document.createElement('div');
    div2.id = "input"
    div2.innerHTML = '<output id="userinput" class="userinput"></output><span>|</span><footer></footer>'
    document.body.appendChild(div2)
    document.getElementById("input").remove()
}
function altwebsite() {
    window.open("../altWebsite/alt.html", "_self");
}
function src() {
    let div = document.createElement('div');
    div.id = 'command';
    div.innerHTML = '<p>'+input+'</p><p>Source Code: <a target="_blank" href="https://github.com/DumbDergMerciful/Terminal">Terminal Website</a>';
    document.body.appendChild(div);
    input="";
    let div2 = document.createElement('div');
    div2.id = "input"
    div2.innerHTML = '<output id="userinput" class="userinput"></output><span>|</span><footer></footer>'
    document.body.appendChild(div2)
    document.getElementById("input").remove()
}