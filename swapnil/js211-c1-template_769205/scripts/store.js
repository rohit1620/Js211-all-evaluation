
let data= JSON.parse(localStorage.getItem("mobile_data"))


let append=(data)=>{
    document.getElementById("mobile_list").innerHTML=null;
    data.forEach((el,index)=>{
        let img=document.createElement("img");
        let h4=document.createElement("h4");
        let p1=document.createElement("p");
        let p2=document.createElement("p");
        let btn=document.createElement("button");
        let div=document.createElement("div");

        img.src=el.image;
        h4.innerText=el.brand;
        p1.innerText=el.name;
        p2.innerText=el.price;
        btn.innerText="remove";
        btn.addEventListener("click",()=>{
            remove(el,index)
        })
        div.append(img,h4,p1,p2,btn);
        document.getElementById("mobile_list").append(div)
    })
   
}
 
let remove=(el,index)=>{
    console.log("rohit")
    data.splice(index,1);
    localStorage.setItem("mobile_data",JSON.stringify(data))
    window.location.reload();
}

append(data);

let lth=()=>{
    data.sort((a,b)=>{
       return a.price-b.price;
    })
    append(data)
    
}

let htl=()=>{
    data.sort((a,b)=>{
       return b.price-a.price;
    })
    append(data)
    
}

let filter=()=>{
    let select= document.getElementById("select_filter").value
    let filter=data.filter((el)=>{
        if(el.brand==select){
            
            return el;
        }
        else if(el.brand==select){
        
            return el;
        }
        else if (el.brand==select){
        
           return el;
        }
    })
    
    append(filter);
}
