
import { sideBar } from "../component/navbar.js";

document.getElementById("sidebar").innerHTML=sideBar();
let local=JSON.parse(localStorage.getItem("user"));

let img=document.getElementById("user_image");
        let h3=document.getElementById("user_name");
        let p1=document.getElementById("user_email");
        let p2=document.getElementById("user_country");
         img.src=local.image; 
        h3.innerText=local.name; 
        p1.innerText=local.email;
        p2.innerText=local.country;

document.getElementById("search_box").addEventListener("search",()=>{
    
      getData()
})

let getData=async()=>{
    let query=document.getElementById("search_box").value
   let url=`https://masai-mock-api-2.herokuapp.com/news?q=${query}`;
   let res=await fetch(url);
   let data=await res.json();
   document.getElementById("search_box").value=null;
   console.log(data.articles)
   append(data.articles)
}


document.getElementById("in").addEventListener("click",()=>{
    let  value=document.getElementById("in").value;
      console.log(value)
        getBtn(value)
})
document.getElementById("us").addEventListener("click",()=>{
    
   let value=document.getElementById("us").value;
    getBtn(value)
})
document.getElementById("ch").addEventListener("click",()=>{
   let value=document.getElementById("ch").value;
    getBtn(value)
})
document.getElementById("uk").addEventListener("click",()=>{
   let value=document.getElementById("uk").value;
    getBtn(value)
})
document.getElementById("nz").addEventListener("click",()=>{
   let value=document.getElementById("nz").value;
    getBtn(value)
})


let getBtn=async(value)=>{
    let code;
    if(value=="in"){
        code=value;
    }
    else if(value=="us"){
        code=value;
        console.log(code)
    }
    else if(value=="ch"){
        code=value;
    }
    else if(value=="uk"){
        code=value;
    }
    else if(value=="nz"){
        code=value;
    }else{
         code=local.country;
    }
    let url=`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${code}`;
    let res=await fetch(url);
    let data=await res.json();
    console.log(data.articles)
     append(data.articles)
}
let loc = JSON.parse(localStorage.getItem("news"));
let append=(data)=>{
    document.getElementById("news_result").innerHTML=null;
    data.forEach((el)=>{
        let img=document.createElement("img");
        let h3=document.createElement("h3");
        let p=document.createElement("p");
        let div=document.createElement("div");
        
        img.src=el.urlToImage 
        h3.innerText=el.title 
        p.innerText=el.author 
        div.append(img,h3,p);
        div.addEventListener("click",()=>{
            addData(el)
        })
        document.getElementById("news_result").append(div)
})
}

getBtn();

let addData=(el)=>{
   
  localStorage.setItem("news",JSON.stringify(el));
  window.location.href="news.html"
}