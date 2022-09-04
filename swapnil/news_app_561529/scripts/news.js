import { sideBar } from "../component/navbar.js";

document.getElementById("sidebar").innerHTML=sideBar();
let local=JSON.parse(localStorage.getItem("user"));
let loc = JSON.parse(localStorage.getItem("news"));
let img1=document.getElementById("user_image");
        let h3=document.getElementById("user_name");
        let p1=document.getElementById("user_email");
        let p2=document.getElementById("user_country");
        img1.src=local.image; 
        h3.innerText=local.name; 
        p1.innerText=local.email;
        p2.innerText=local.country;


        let img=document.createElement("img");
        let h31=document.createElement("h3");
        let h4=document.createElement("h4");
        let div=document.createElement("div");

        img.src=loc.urlToImage 
        h31.innerText=loc.title 
        h4.innerText=loc.description 
        div.append(img,h31,h4);

        document.getElementById("detailed_news").append(div)