//**********SELECTORS***************

//resimler
const rockImage = document.getElementById("rock");
const paperImage = document.getElementById("paper");

const scissorImage = document.getElementById("scissor");

//secılen elemanların tasıyıcıları
const yourChoiceDiv = document.getElementById("your-choice");
//div in içinde element oldu. anlamak ıcın bu sekıl ısımlendırdık

//**********VARİABLES***************

//**********EVENT LİSTENERS**********
rockImage.addEventListener("click", () => {
  yourChoiceDiv.innerHTML = `<img src="./assets/rock.png" alt="rock">`;
});

paperImage.addEventListener("click", () => {
  yourChoiceDiv.innerHTML = `<img src="./assets/paper.png" alt="paper">`;
});
scissorImage.addEventListener("click", () => {
  yourChoiceDiv.innerHTML = `<img src="./assets/scissor.png" alt="scissor">`;
});
//**********FUNCTİONS***************
