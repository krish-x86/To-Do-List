const task = document.getElementById("inputbox");
const contain = document.getElementById("contain");

function add(){
    if(inputbox.value === ''){
        alert("Kuch toh likhle ");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        contain.appendChild(li);
        let cross = document.createElement("cross");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
    }
    inputbox.value = "";
    saveData();
}

contain.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "CROSS"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", contain.innerHTML);
}

function showtask(){
    contain.innerHTML = localStorage.getItem("data");
}

showtask();