/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

let local=JSON.parse(localStorage.getItem("user"))

let myFun=()=>{
    event.preventDefault()
  
   let image=document.getElementById("user_pic").value
   let name=document.getElementById("user_name").value
   let email=document.getElementById("user_email").value
   let country=document.getElementById("user_country").value
   let data={image,name,email,country};
   console.log(data)
   localStorage.setItem("user",JSON.stringify(data));
   document.getElementById("user_pic").value=null;
   document.getElementById("user_name").value=null;
   document.getElementById("user_email").value=null;
   document.getElementById("user_country").value=null;

}

document.querySelector("form").addEventListener("submit",myFun)