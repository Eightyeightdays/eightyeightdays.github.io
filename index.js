let count=0;
let objects = [
    {
        title: "Random Grid Generator",
        description: "Upload an image and specify grid dimensions to create and save a new image based on the original colour palette.",
        link1: "https://github.com/Eightyeightdays/random-grid-generator",
        link2: "https://eightyeightdays.github.io/random-grid-generator/"
    },
    {
        title: "VeryVegan",
        description: "A sample website for a company that proposes a unique restaurant dining experience.",
        link1: "https://github.com/Eightyeightdays/VeryVegan",
        link2: "https://eightyeightdays.github.io/VeryVegan/"
    },
    {
        title: "Lister",
        description: "A Firefox extension that allow users to create and share anonymous YouTube playlists.",
        link1: "https://github.com/Eightyeightdays/lister",
        link2: ""
    },
    {
        title: "The Bonehead Social Network",
        description: "A full-stack social media application for sharing images and text.",
        link1: "https://github.com/Eightyeightdays/bsm",
        link2: "https://bonehead-social-media-app.vercel.app/"
    }
]


function scroll(){
    let items = document.querySelectorAll(".scroll-content")
    
    if(count >= items.length-1){
        count = 0;
    }else{
        count++
    }
    
    items[count].scrollIntoView({behavior: "smooth"})
    showDetails(objects[count])
}

function showDetails(object){
    if(object.link2 === ""){
        document.getElementById("link-2").style.display = "none"
    }else{
        document.getElementById("link-2").style.display = "block"
    }
    document.getElementById("title-container").textContent = object.title;
    document.getElementById("link-1").href = object.link1;
    document.getElementById("link-2").href = object.link2;
    document.getElementById("description").textContent = object.description;
}

document.addEventListener("load", showDetails(objects[0]))















document.querySelector(".scroll").addEventListener("click", scroll)