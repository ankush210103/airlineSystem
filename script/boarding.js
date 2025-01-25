
console.log("Airline js conect..")
let forward=false;

function agecheck(){var radio=document.forms[0]
    if(radio[5].value==""){
        radio[5].focus()
        document.getElementById("error").innerHTML="Age required";
        document.getElementById("error").style.backgroundColor="rgb(214, 92, 92)"
        return false;
    }
    else{
        document.getElementById("error").innerHTML="Age OK";
        document.getElementById("error").style.backgroundColor="rgb(28, 128, 45)"
        age=radio[5].value;
        return true;
    }
}

function classcheck(){var radio=document.forms[0]

    console.log(radio[7].value)
    if(radio[7].value==""){
        radio[7].focus()
        document.getElementById("error").innerHTML="Flight class required";
        document.getElementById("error").style.backgroundColor="rgb(214, 92, 92)";
        return false;

    }
    else{
        document.getElementById("error").innerHTML="Flight class OK";
        document.getElementById("error").style.backgroundColor="rgb(28, 128, 45)"
        classname=radio[7].value;
        return true;
    }
}
function fnumcheck(){
    var radio=document.forms[0]
    if(radio[8].value==""){
        radio[8].focus()
        document.getElementById("error").innerHTML="Flight number required";
        document.getElementById("error").style.backgroundColor="rgb(214, 92, 92)";
        return false;

    }
    else{
        document.getElementById("error").innerHTML="Flight number OK";
        document.getElementById("error").style.backgroundColor="rgb(28, 128, 45)"
        flight=radio[8].value;
        return true;
    }
}
function datecheck(){
    var radio=document.forms[0]
    if(radio[9].value==""){
        radio[9].focus()
        document.getElementById("error").innerHTML="Flight Date required";
        document.getElementById("error").style.backgroundColor="rgb(214, 92, 92)"
        return false;
    }
    else{
        document.getElementById("error").innerHTML="Flight Date OK";
        document.getElementById("error").style.backgroundColor="rgb(28, 128, 45)"
        date=radio[9].value;
        return true;
    }
}
function fromcheck(){
    var radio=document.forms[0]
    if(radio[10].value==""){
        radio[10].focus()
        document.getElementById("error").innerHTML="Flight source required";
        document.getElementById("error").style.backgroundColor="rgb(214, 92, 92)"
        return false;
    }
    else{
        document.getElementById("error").innerHTML="Flight Source OK";
        document.getElementById("error").style.backgroundColor="rgb(28, 128, 45)"
        from=radio[10].value;
        return true;
    }
}

function tocheck(){
    var radio=document.forms[0]
    if(radio[11].value==""){
        radio[11].focus()
        document.getElementById("error").innerHTML="Flight Destination required";
        document.getElementById("error").style.backgroundColor="rgb(214, 92, 92)";
        return false;

    }
    else{
        document.getElementById("error").innerHTML="Flight Destination OK";
        document.getElementById("error").style.backgroundColor="rgb(28, 128, 45)"
        to=radio[11].value;
        return true;

    }
}
function gatecheck(){
    var radio=document.forms[0]

    if(radio[12].value==""){
        radio[12].focus()
        document.getElementById("error").innerHTML="Entry Gate Number is required";
        document.getElementById("error").style.backgroundColor="rgb(214, 92, 92)"
        return false;
    }
    else{
        document.getElementById("error").innerHTML="Entry Gate Number OK";
        document.getElementById("error").style.backgroundColor="rgb(28, 128, 45)";
        gate=radio[12].value;
        return true;
    }
}
function seatcheck(){
    var radio=document.forms[0]

    if(radio[13].value==""){
        radio[13].focus()
        document.getElementById("error").innerHTML="Flight seat Number is required";
        document.getElementById("error").style.backgroundColor="rgb(214, 92, 92)";
        return false;
    }
    else{
        document.getElementById("error").innerHTML="Flight Seat Number OK";
        document.getElementById("error").style.backgroundColor="rgb(28, 128, 45)";
        seat=radio[13].value;
        return true;
    }
}
function timecheck(){
    var radio=document.forms[0]

    if(radio[14].value==""){
        radio[14].focus()
        document.getElementById("error").innerHTML="Flight Departure time is required";
        document.getElementById("error").style.backgroundColor="rgb(214, 92, 92)"
        return false;
    }
    else{
        document.getElementById("error").innerHTML="Flight Time OK";
        document.getElementById("error").style.backgroundColor="rgb(28, 128, 45)"
        time=radio[14].value;
        return true;
    }
}
function remcheck(){
    var radio=document.forms[0]

    if(radio[15].value==""){
        radio[15].focus()
        document.getElementById("error").innerHTML="Flight remarks is required";
        document.getElementById("error").style.backgroundColor="rgb(214, 92, 92)"
        return false;
    }
    else{
        document.getElementById("error").innerHTML="Flight remarks OK";
        document.getElementById("error").style.backgroundColor="rgb(28, 128, 45)"
        remarks=radio[15].value;
        return true;
    }
}
function obscheck(){
    var radio=document.forms[0]

    if(radio[16].value==""){
        radio[16].focus()
        document.getElementById("error").innerHTML="Flight observation is required";
        document.getElementById("error").style.backgroundColor="rgb(214, 92, 92)"
        return false;
    }
    else{
        document.getElementById("error").innerHTML="Flight observation OK";
        document.getElementById("error").style.backgroundColor="rgb(28, 128, 45)"
        obs=radio[16].value;
        return true;
    }
}


function namefun(){
    console.log("Passanger name")
    var name=document.getElementById("name");
    if(name.value.length<1){
        document.getElementById("error").innerHTML="Name cannot be left BLANK";
        document.getElementById("error").style.backgroundColor="rgb(214, 92, 92)"
        name.focus();
        forward=false;
        return false;
    }
    else{
        document.getElementById("error").innerHTML="Name OK";
        document.getElementById("error").style.backgroundColor="rgb(28, 128, 45)"
        passname=name.value;
        return true;
    }
}
function gencheck(){
    var radio=document.forms[0]
    var i;
    for(i=2;i<5;i++)
    {   
        console.log(radio[i])
        if(radio[i].checked==false){
            console.log("Unchecked")
            document.getElementById("error").innerHTML="Gender must be SELECTED !";
            document.getElementById("error").style.backgroundColor="rgb(214, 92, 92)"
        }
        else{
            document.getElementById("error").innerHTML="Gender OK";
            document.getElementById("error").style.backgroundColor="rgb(28, 128, 45)"
            gender=radio[i].value;
            return true;
        }
    }

    return false;
}

function generatepass(){
    console.log("Validation check")
    if(!namefun())
    {
        return;
    }
    if(!gencheck())
    {
        return;
    }
    if(!agecheck())
    {
        return;
    }if(!classcheck())
    {
        return;
    }if(!fnumcheck())
    {
        return;
    }if(!datecheck())
    {
        return;
    }if(!fromcheck())
    {
        return;
    }if(!tocheck())
    {
        return;
    }if(!gatecheck())
    {
        return;
    }if(!seatcheck())
    {
        return;
    }if(!timecheck())
    {
        return;
    }if(!remcheck())
    {
        return;
    }if(!obscheck())
    {
        return;
    }
    generate()
}

function generate(){
    var ok=confirm(`Generate Boarding Pass:\nName: ${passname}\nGender: ${gender}\nAge: ${age}\nFlight Class: ${classname}\nFlight No: ${flight}\nFlight Date: ${date}\nSource: ${from}\nDestination: ${to}\nGate: ${gate}\nSeat: ${seat}\nFlight time: ${time}\nRemarks: ${remarks}\nObservation: ${obs}\n`)
    if(ok){
        alert("Boarding pass Generated Successfully");
        document.forms[0].submit();
    }

}

function mouseDown(obj)
{
    obj.style.borderBottom="2.5px solid #C5012D";
}
function mouseUp(obj){
    obj.style.borderBottom="1.5px solid #C5012D";
}
let passname;
let gender;
let age;
let classname;
let flight;
let date
let from;
let to;
let gate;
let seat;
let time;
let remarks;
let obs;