// Use deployed URL.

let myFun=async()=>{
    event.preventDefault();
    let name=document.getElementById("name").value
    let price=+document.getElementById("price").value
    let desc=document.getElementById("description").value
    let date=document.getElementById("delivery").value
    let image=document.getElementById("image").value
    let id=Date.now();
    let data={name,price,desc,date,image,id};
    console.log(data)
    document.getElementById("name").value=null;
    document.getElementById("price").value=null;
    document.getElementById("description").value=null;
    document.getElementById("delivery").value=null;
    document.getElementById("image").value=null;
    let res=await fetch("https://polar-ocean-05054.herokuapp.com/api/product",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
        },
    })
    getData(); 
}
document.querySelector("form").addEventListener("submit",myFun)


window.addEventListener("load",()=>{
    getData();
 })
 
 let getData=async()=>{
     let res=await fetch("https://polar-ocean-05054.herokuapp.com/api/product")
     res=await res.json();
     append(res)
 }
 
 let append=(data)=>{
     document.getElementById("container").innerHTML=null;
 data.forEach((el)=>{
     let img=document.createElement("img")
     let h4=document.createElement("h4")
     let p1=document.createElement("p")
     let p2=document.createElement("p")
     let p3=document.createElement("p")
     let btn1=document.createElement("button")
     let btn2=document.createElement("button")
     let div=document.createElement("div")

     div.setAttribute("class","item")
     p1.setAttribute("class","product_price")
     p3.setAttribute("class","product_delivery")
     btn1.setAttribute("class","update_price")
     btn2.setAttribute("class","remove_item")

 
     img.src=el.image;
     h4.innerText=el.name;
     p1.innerText=el.price;
     p2.innerText=el.desc;
     p3.innerText= "Delivery by:"+el.date;
 
     btn1.innerText="Update";
     btn1.addEventListener("click",()=>{
         edit(el.id)
     })
     btn2.innerText="Remove";
     btn2.addEventListener("click",()=>{
         remove(el.id)
     })
     div.append(img,h4,p1,p2,p3,btn1,btn2);
     document.getElementById("container").append(div)
 
 })
 }
 
 
 let edit=async(id)=>{
     let item= await fetch(`https://polar-ocean-05054.herokuapp.com/api/product/${id}`);
     let new_price= +window.prompt("Enter new price");
     let data={price:new_price||item.price};
     let res=await fetch(`https://polar-ocean-05054.herokuapp.com/api/product/${id}`,{
         method:"PATCH",
         body:JSON.stringify(data),
         headers:{
             "Content-Type":"application/json",
         },
     })
     getData()
 }
 
 let remove=async(id)=>{
     let res=await fetch(`https://polar-ocean-05054.herokuapp.com/api/product/${id}`,{
         method:"DELETE",
     
         headers:{
             "Content-Type":"application/json",
         },
     })
     getData()
 }
 
 let ltoh=async()=>{
    
     let res=await fetch("https://polar-ocean-05054.herokuapp.com/api/product?_sort=price&_order=asc")
     res=await res.json();
     append(res)
 }

 let htol=async()=>{
    let res=await fetch("https://polar-ocean-05054.herokuapp.com/api/product?_sort=price&_order=desc")
    res=await res.json();
    append(res)
}
 
 let filterG=async()=>{
     
     let res=await fetch("https://polar-ocean-05054.herokuapp.com/api/product?price_gte=4000")
     res=await res.json();
     append(res)
 }

 let filterL=async()=>{
     
    let res=await fetch("https://polar-ocean-05054.herokuapp.com/api/product?price_lte=4000")
    res=await res.json();
    append(res)
}
 



