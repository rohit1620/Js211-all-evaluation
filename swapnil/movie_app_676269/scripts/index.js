// Store the wallet amount to your local storage with key "amount"
 
//  document.getElementById("wallet").innerText=price;


let amount=()=>{
    let select=+document.getElementById("amount").value;
    sum=sum+select;
    
    localStorage.setItem("amount",sum);
     price=JSON.parse(localStorage.getItem("amount"));
    // document.getElementById("wallet").innerHTML=null;
    document.getElementById("wallet").innerText=price;

    
    console.log(sum)
    
    
    document.getElementById("amount").value=null;
   
}
let sum=0;
let price=JSON.parse(localStorage.getItem("amount"))||[];

document.getElementById("wallet").innerText=price;



 
   
    


let book=()=>{
    window.location.href="movies.html"
}



