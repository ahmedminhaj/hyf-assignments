const $ = (selector) => document.querySelector.bind(document)(selector);
const $$ = (selector) => document.querySelectorAll.bind(document)(selector);
const createEl = (element) => document.createElement.bind(document)(element);

const houses = [
  {
    name: "Gryffindor",
    image: "./assets/greyffindor.jpeg"
  },
  {
    name: "Slytherin",
    image: "./assets/Slytherin.webp"
  },
  {
    name: "Ravenclaw",
    image: "./assets/Ravenclaw.webp"
  },
  {
    name: "Hufflepuff",
    image: "./assets/Hufflepuff.webp"
  }
];

const main = () => {
    const nameInput = createEl("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Enter your name");
    nameInput.setAttribute("id", "name-input");
    nameInput.required = true;

    const submitButton = createEl("button");
    submitButton.textContent = "Submit";
    submitButton.classList.add("button");
    submitButton.disabled = true;

    const resultContainer = createEl("div");
    
    const tryAgainButton = createEl("button");
    tryAgainButton.textContent = "Try Again";
    tryAgainButton.classList.add("button");
    tryAgainButton.style.display = "none";
    
    const checkEmptyInput = () => submitButton.disabled = nameInput.value.trim() === "";
    nameInput.addEventListener("input", checkEmptyInput);
    
    const generateHouse = () => {
        const randomHouse = houses[Math.floor(Math.random() * houses.length)];

        resultContainer.innerHtml = "";

        const hogwartsHouse = createEl("h3");
        hogwartsHouse.textContent = `${nameInput.value} belongs in ${randomHouse.name}`;
        
        nameInput.style.display = "none";
        submitButton.style.display = "none";
        tryAgainButton.style.display = "block";
        
        const houseImage = createEl("img");
        
        houseImage.src = randomHouse.image
        houseImage.alt = randomHouse.name
        houseImage.id = "house-img"

        resultContainer.append(hogwartsHouse, houseImage);
    }

    const tryAgain = () => {
        nameInput.value = "";
        submitButton.disabled = true;

        resultContainer.innerHTML = "";

        nameInput.style.display = "block";
        submitButton.style.display = "block";
        tryAgainButton.style.display = "none";
    }
    
    submitButton.addEventListener("click", generateHouse);
    tryAgainButton.addEventListener("click", tryAgain);
    
    document.body.append(nameInput, submitButton, resultContainer, tryAgainButton);
}

main();