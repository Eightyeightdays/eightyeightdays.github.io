const objects = [
    {
        title: "Random Grid Generator",
        description: "Upload an image and specify grid dimensions to create and save a new image based on the original colour palette.",
        link1: "https://github.com/Eightyeightdays/random-grid-generator",
        link2: "https://eightyeightdays.github.io/random-grid-generator/",
        colour: "#364cae",
        images: [
            "/assets/Grid Generator.png", "/assets/Grid Generator - Ipad.png", "/assets/grid(27).png" 
        ]
    },
    {
        title: "VeryVegan",
        description: "A sample website for a company that proposes a unique restaurant dining experience.",
        link1: "https://github.com/Eightyeightdays/VeryVegan",
        link2: "https://eightyeightdays.github.io/VeryVegan/",
        colour: "#659246",
        images: [
            "/assets/VeryVegan.png", "/assets/VeryVegan - 2.png", "/assets/VeryVegan - 3.png"
        ]
    },
    {
        title: "Lister",
        description: "A Firefox extension that allow users to create and share anonymous YouTube playlists without needing an account.",
        link1: "https://github.com/Eightyeightdays/lister",
        link2: "",
        colour: "gold",
        images: [
            "/assets/Lister - 4.png", "/assets/Lister - 2.png", "/assets/Lister - 3.png"
        ]
    },
    {
        title: "The Bonehead Social Network",
        description: "A full-stack social media application for sharing images and text.",
        link1: "https://github.com/Eightyeightdays/bsm",
        link2: "https://bonehead-social-media-app.vercel.app/",
        colour: "#ffd7d7",
        images: [
            "/assets/BSM (1).png", "/assets/BSM (2).png", "/assets/BSM (3).png"
        ]
    }
];

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
    document.querySelectorAll(".link-icon").forEach(item =>{ item.style.fill = object.colour})
}

let count = 0;
let flag = true;
let direction;
function scroll(index){
    if(flag === false){
        return
    }
    flag = false;

    if(index < 0 || index > 3){
        return
    }

    if(index > count){
        count++;
        direction = "forwards";
    }else{
        count--;
        direction = "backwards"
    }

    displayButtons()

    let id = `scroll-content-${count}`;
    let current = document.getElementById(id)
    let allItems = document.querySelectorAll(".scroll-content")
    
    if(direction === "forwards"){
        allItems.forEach(item =>{
            if(item === current){
                current.style.display = "block"
                setTimeout(()=>{
                    current.style.opacity = "1"; 
                }, 200)
            }else{
                item.style.opacity = "0"
                setTimeout(()=>{
                    item.style.display = "none"
                }, 200)
            }
         })
    }else{
        allItems.forEach(item =>{
            if(item === current){
                setTimeout(()=>{
                    current.style.display = "block"
                }, 200)
                setTimeout(()=>{
                    current.style.opacity = "1"; 
                }, 300)
            }else{
                item.style.opacity = "0"
                setTimeout(()=>{
                    item.style.display = "none"
                }, 200)
            }
         })
    }
    showDetails(objects[count])
    
    setTimeout(()=>{
        flag = true;
    }, 500)
}

const scrollButton = document.getElementById("scroll-forwards")
const scrollButton2 = document.getElementById("scroll-backwards")

function displayButtons(){
    if(count === 0){
        scrollButton2.style.display = "none"
        scrollButton.style.display = "block"
    }else if(count === 3){
        scrollButton.style.display = "none"
        scrollButton2.style.display = "block"
    }else{
        scrollButton.style.display = "block"
        scrollButton2.style.display = "block"
    }
}

function displayModal(){
    let currentModal = document.querySelectorAll(".modal")[count]
    
    if(count === 2){
        currentModal.style.flexDirection = "column"
    }else{
        currentModal.style.flexDirection = "row"
    }
    currentModal.style.display = "flex";
    currentModal.style.animationPlayState = "running"
    document.getElementById("main-container").style.display = "none"
    document.getElementById("sidebar").style.display = "none"
}

function closeModal(){
    let currentModal = document.querySelectorAll(".modal")[count]
    currentModal.style.display = "none"
    document.getElementById("main-container").style.display = "flex"
    document.getElementById("sidebar").style.display = "flex"
}

document.getElementById("contact-link").textContent = "Contact"
document.getElementById("contact-link").href= "mailto: x@eightyeightdays.com"

document.querySelectorAll(".scroll-image").forEach(item=>{item.addEventListener("click", displayModal)})
document.querySelectorAll(".modal-button").forEach(item=>{item.addEventListener("click", closeModal)})

scrollButton.addEventListener("click", ()=>{scroll(count+1)})
scrollButton2.addEventListener("click", ()=>{scroll(count-1)})

document.addEventListener("load", showDetails(objects[0]))

