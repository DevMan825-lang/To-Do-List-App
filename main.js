document.getElementById("closebtn").onclick = function() {
    document.getElementById("task").style.display = "none";
}

const myContainer = document.getElementById("myTaskContainer"); 
const inputField = document.getElementById("task's");

document.getElementById("btn").addEventListener("click", () =>{
    const newitem = document.createElement('strong'); 
    const divnewitem = document.createElement('div'); 
    const spanitem = document.createElement('span'); 
        const textValue = inputField.value; 
        if(textValue.trim() !== " "){
        newitem.innerHTML = textValue;
        newitem.style.display = "block"; 
        newitem.style.color = "#fff"; 
        spanitem.innerHTML = "&times;"; 
        spanitem.style.float = "right"; 
        spanitem.style.fontSize = "20px"; 
        spanitem.style.marginTop = "-23px"; 
        spanitem.style.color = "#fff"; 
        divnewitem.appendChild(newitem);
        divnewitem.appendChild(spanitem); 
        myContainer.appendChild(divnewitem); 
        divnewitem.style.width = "260px"; 
        divnewitem.style.height = "45px"; 
        divnewitem.style.backgroundColor = "#457f9a";
        divnewitem.style.boxShadow = "0 4px 6px rgba(0,0,0,.4), 0 4px 8px rgba(0,0,0,.18)"; 
        divnewitem.style.marginBottom = "20px"; 
        divnewitem.style.padding = "8px"; 
        divnewitem.style.borderRadius = "4px"; 
    }

divnewitem.addEventListener("click", ()=>{
        newitem.style.textDecoration = "line-through"; 
}); 

spanitem.addEventListener("click", ()=>{
        divnewitem.style.display = "none"; 
}); 
}); 





// There are 3 types of keyword we use in javascript 
// 1. var
// Ex : var x = 10; 
// 2. let 
// Ex : let x = 10; 
// 3. const 
// Ex : const x = 10; 

// var myAge = 20; 
// myAge = 40; 
// console.log(myAge);

// const myAge = 20; 
// myAge = 10; 
// console.log(myAge); 
// ECMASCRIPT 

// Hello  World
// span, strong, small (inline tag )

// line1
// line2