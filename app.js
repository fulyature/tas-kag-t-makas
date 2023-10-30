//**********SELECTORS***************
//?cupturing yöntemi parenttan sınırsız event kontrol etmek;

const selectionArticle = document.querySelector(".selection");

// //resimler
// //----ilkel yontem
// const rockImage = document.getElementById("rock");
// const paperImage = document.getElementById("paper");

// const scissorImage = document.getElementById("scissor");

//secılen elemanların tasıyıcıları
const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");
//div in içinde element oldu. anlamak ıcın bu sekıl ısımlendırdık

//message
const messagePar = document.querySelector(".message");

//scorecard
const scoreCardSection = document.querySelector(".score-card");

//**********VARİABLES***************
let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");

//colors
const YELLOW = "#ffc538";
const RED = "#f5415c";
const GREEN = "#5ab781";

//**********EVENT LİSTENERS**********
selectionArticle.addEventListener("click", (e) => {
  // console.log(e.target.id)
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImg);
    createPcSelection();
  }
});

const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.alt = pcRandom;
  pcChoiceDiv.appendChild(pcSelectImg);
  calculateResult();
};

const calculateResult = () => {
  //   console.log(userSelectImg);
  //eşitlik;
  if (userSelectImg.alt === pcSelectImg.alt) {
    draw();
  } else {
    if (userSelectImg.alt === "rock") {
      pcRandom === "paper" ? youLost() : youWin();
    }
  }
};

const draw = () => {
  messagePar.textContent = "its a draw";
  scoreCardSection.style.color = YELLOW;
  messagePar.style.backgroundColor = YELLOW;
};
// rockImage.addEventListener("click", () => {
//   yourChoiceDiv.innerHTML = `<img src="./assets/rock.png" alt="rock">`;
// });

// paperImage.addEventListener("click", () => {
//   yourChoiceDiv.innerHTML = `<img src="./assets/paper.png" alt="paper">`;
// });
// scissorImage.addEventListener("click", () => {
//   yourChoiceDiv.innerHTML = `<img src="./assets/scissor.png" alt="scissor">`;
// });
//**********FUNCTİONS***************
