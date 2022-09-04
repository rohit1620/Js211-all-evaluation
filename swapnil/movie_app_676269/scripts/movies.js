// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let price=localStorage.getItem("amount");
document.getElementById("wallet").innerText=price;
let search=async()=>{
     let movie=document.getElementById("search").value
    let url= `https://www.omdbapi.com/?s=${movie}&apikey=c105466b`;
    let res=await fetch(url);
    let data= await res.json();
    console.log(data.Search);
    append(data.Search)
    document.getElementById("search").value=null;
}


let film=JSON.parse(localStorage.getItem("movie"))
let append=(data)=>{
    data.forEach((el)=>{
        let img=document.createElement("img");
        let h4=document.createElement("h4");
        let div=document.createElement("div");
        let btn=document.createElement("button");
         
        img.src=el.Poster;
        h4.innerText=el.Title;
        btn.innerText="Book Movie";
        btn.addEventListener("click",()=>{

            movies(el);
        })
        div.append(img,h4,btn)
        document.getElementById("movies").append(div)
    })
}

let movies=(el)=>{
    localStorage.setItem("movie",JSON.stringify(el))
    console.log(el)
     window.location.href="checkout.html";
}
