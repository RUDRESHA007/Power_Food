
   let nav = document.querySelector(".navbar .navlists");
   let btn1 = document.querySelector("#show")
 
   let btn2 = document.querySelector("#hide");
 
 
 
 
 
 
   btn1.addEventListener("click",  () => {
     btn1.style.visibility = "hidden";
     btn2.style.visibility = "visible";
     nav.style.right=" 0rem";

 
   })
 
   btn2.addEventListener("click",  () => {
     btn1.style.visibility = "visible";
     btn2.style.visibility = "hidden";
     nav.style.right=" -100rem";

 
   })
 
 
 
 
 
 