// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let film=JSON.parse(localStorage.getItem("movie"))

let img=document.createElement("img");
let h4=document.createElement("h4");

img.src=film.Poster;
h4.innerText=film.Title;

document.getElementById("movie").append(img,h4)

let price=localStorage.getItem("amount");
document.getElementById("wallet").innerText=price;

let myFun=()=>{
    let name=document.getElementById("user_name").value
    let sit=+document.getElementById("number_of_seats").value
    if(sit*100<=price){
        alert("Booking successful!")
        price=price-sit*100;
        console.log(price)
       localStorage.setItem("amount",price)
       document.getElementById("wallet").innerText=price;
    }
    else{
        alert("Insufficient Balance!")
    }
    document.getElementById("user_name").value=null;
    document.getElementById("number_of_seats").value=null;
}

