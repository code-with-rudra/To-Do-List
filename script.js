const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // li.style.listStyle='none';
    }
    inputBox.value='';
    saveData();
}
function remove(){
    listContainer.innerHTML='';
}
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
   listContainer.innerHTML =localStorage.getItem("data");
}
showTask();