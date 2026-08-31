

function init() {
    const page = checkPage();
    // nightModeEvent();
    
   
    

   
}

function changeCoffeeNumber() {
    let counter = 0;
    const coffeeImage = document.getElementById("coffeeImage");
    const coffeCounter = setInterval(() => {
        const element = document.getElementById("coffee_text");
        
        element.innerHTML = counter;
        counter++;  
        if (counter >= 1400) {
            
            clearInterval(coffeCounter);
            element.innerHTML =`${counter}+`;
            coffeeImage.classList.add("pulse");

        }
    }, 5);


    
}

function checkPage() {
    const currentPage = decodeURIComponent(window.location.pathname.includes("om-meg"));
    
    
    if (!currentPage) {
        
        changeCoffeeNumber();
    }
}

function programmingSlider() {
    const container = createElement("div");

}

function nightModeEvent() {
    const element = document.getElementById("lightModeButton");
    

    element.addEventListener("click", changeLight);
}

function changeLight(e) {
    const element = document.getElementById("lightModeButton");
    const body = document.body;
    const image = document.getElementById("lightModeButton");

    const root = "/øving1/images/icons";
    nightmode = true;
    body.classList.toggle("nightmode");
    if (element.src === "http://localhost/%C3%B8ving1/images/icons/sun.png") {
        element.src = root + "/moon.png";
    } else {
        element.src = root + "/sun.png";
    }
}

init();

