console.log("Add passenger connected..")
console.log("Table")
console.log(document.getElementsByClassName("table"))
console.log(document.getElementsByClassName("table")["__proto__"].item.length)
let count=1;




function addPass(){
    if(document.getElementById("name").value.length<=0){
        alert("Enter the passanger name.")
        return;
    }
    if(document.getElementById("age").value==undefined){
        alert("Enter the passanger age.");
        return;
    }
    let name=document.getElementById("name").value;
    let gender;
    if(document.getElementById("male").checked){
        gender="Male"
    }
    if(document.getElementById("female").checked){
        gender="Female"
    }
    if(document.getElementById("other").checked){
        gender="Other"
    }
    let age=document.getElementById("age").value;
    console.log(name+"   "+ gender+"  "+age)
    count++;
    let table=document.getElementById("ftable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = count;
    cell2.innerHTML = name;
    cell3.innerHTML =gender;
    cell4.innerHTML = age;
    
}