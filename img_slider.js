

const slide_image = document.querySelector(".slider_box");

setInterval(() => {

     slide_image.append(slide_image.children[0]);

}, 3000);

console.log(slide_image.children[1])



