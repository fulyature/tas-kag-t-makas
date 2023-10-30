//**********SELECTORS***************
//?cupturing yöntemi parenttan sınırsız event kontrol etmek;

const selectionArticle = document.querySelector(".selection");

// //resimler
// const rockImage = document.getElementById("rock");
// const paperImage = document.getElementById("paper");

// const scissorImage = document.getElementById("scissor");

//secılen elemanların tasıyıcıları
const yourChoiceDiv = document.getElementById("your-choice");
//div in içinde element oldu. anlamak ıcın bu sekıl ısımlendırdık

//**********VARİABLES***************
let userSelectImg = document.createElement("img");
//**********EVENT LİSTENERS**********
selectionArticle.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImg);
  }
});
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
