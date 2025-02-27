let info=[];
fetch(`https://randomuser.me/api/`)
.then(res => res.json())
.then(data => {
    info.push(data);
    console.log(data)
    document.getElementById("parte5").innerHTML +=`
    <img id="img" src="${data.results[0].picture.large}">
    `
    document.getElementById("texto").addEventListener("click", ver)
    function ver(){
        document.getElementById("data")
    }
})

function view(){
    document.getElementById("texto").innerHTML=`
    <p>My name is</p>
    <p id="letrita">${info[0].results[0].login.username}
    `
}
function view2(){
    document.getElementById("texto").innerHTML=`
    <p>My email address is</p>
    <p id="letrita">${info[0].results[0].email}
    `
}
function view3(){
    document.getElementById("texto").innerHTML=`
    <p>My birthday is</p>
    <p id="letrita">${info[0].results[0].dob.date}
    `
}
function view4(){
    document.getElementById("texto").innerHTML=`
    <p>My address is</p>
    <p id="letrita">${info[0].results[0].location.street.number}  ${info[0].results[0].location.street.name}
    `
}
function view5(){
    document.getElementById("texto").innerHTML=`
    <p>My phone number is</p>
    <p id="letrita">${info[0].results[0].phone}
    `
}
function view6(){
    document.getElementById("texto").innerHTML=`
    <p>My password is</p>
    <p id="letrita">${info[0].results[0].login.password}
    `
}
