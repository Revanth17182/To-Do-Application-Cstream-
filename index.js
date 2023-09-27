const inp = document.getElementById("input-here");
const list = document.getElementById("lists");
const messageElement = document.getElementById("message");

var array = [];

function check(){
    if(count === 0)
    messageElement.style.display = "block";
    else messageElement.style.display = "none";
}

let count = 0;

function add(){
    count++;
    if(inp.value === '') {alert("Nothing to Add!");}
    else{
        let li = document.createElement("li");
        li.innerHTML = inp.value;
        list.appendChild(li);
        check();
        array.push(li.innerHTML);
        check();
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inp.value = "";
    saveData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        count--;
        if(count === 0) 
        messageElement.style.display="block";
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function show(){
    list.innerHTML = localStorage.getItem("data");
}
show();