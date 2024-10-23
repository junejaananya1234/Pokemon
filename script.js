const body = document.querySelector("#parent");

let limit = 100;
let offset = 0;
window.addEventListener("load", async ()=>{
         const apiData =  await getDatafromApi(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}.`);
        //  console.log(apiData.results);

        apiData.results.forEach ( async(pokemon)=> {
            const result = await getDatafromApi(pokemon.url)
             console.log(result)
             const div = document.createElement("div");
             div.classList.add("child", "p-4", "bg-slate-500", "rounded-lg", "shadow-md", "m-4", "text-center","font-semibold", "uppercase", "text-white","border-solid","shadow-current");
               // Create a separate element for the name
                const nameElement = document.createElement("p");
                  nameElement.innerText = result.name;

    
           
             const image = document.createElement("img");
             image.src = result.sprites.other.dream_world.front_default;
             image.classList.add("w-32", "h-32", "mx-auto", "mt-2");
             
                  // Create a separate element for the type
               const typeElement = document.createElement("p");
             typeElement.innerText = `Type: ${result.types[0].type.name}`;
             typeElement.classList.add("text-blue-800", "lowercase", "font-bold")

             const knowMore = document.createElement("button")
             knowMore.innerText = "Know More";
             knowMore.classList.add("rounded-md","border-2","border-slate-400","p-1","hover:scale-105", "hover:bg-[#0077b6]", "transition", "ease-in-out","delay-10")
           

             div.appendChild(nameElement);
             div.appendChild(typeElement);

            div.appendChild(image);
            div.appendChild(knowMore);
            body.appendChild(div); 
    });
} )
 
 
 
 
 async function  getDatafromApi(url){
    const response = await fetch(url);
     const data =  await response.json();
     return data;
}
// getDatafromApi();