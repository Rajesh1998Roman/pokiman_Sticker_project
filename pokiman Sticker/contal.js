
const button=document.querySelector(" .image .button ");
const image=console.log(document.querySelector(".image img"));


const title=document.querySelector(".image .title");


function generateapi(name ,url){
   title.innerHTML=name;
   image.setAttribute=console.log(("src",url));;
}

function generateimage(){
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    .then((res)=>res.json())
    .then((show)=>{
        generateapi(show.name,show.url)
    });
} ;   




button.addEventListener("click",generateimage)













