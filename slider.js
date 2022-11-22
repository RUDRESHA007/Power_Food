const image = document.querySelector(".image");
const img = document.querySelector("img");
const back = document.getElementById("back");
const forword = document.getElementById("forword");
let len = image.children.length;

setInterval(() => {
  const date = new Date();
  const second = date.getSeconds() ;
  console.log(second);
  
}, 1000);

back.addEventListener("click", () => {
  let c = image.children[0].classList.contains("unactive");

  if (c == false) {
    image.prepend(image.children[len - 1]);
    forword.style.display = "block";

  }
  else {
    back.style.display = "none";
  }
});

forword.addEventListener("click", () => {
  let a = image.children[1].classList.contains("active");
console.log(a)

  if (a == false) {
    let app = image.append(image.children[0]);

    back.style.display = "block";
  }
  
  else {
      forword.style.display = "none";
  
  }

});





