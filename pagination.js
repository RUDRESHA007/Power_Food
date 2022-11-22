
const fooditems = document.querySelector(".items").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const page = document.querySelector(".page-num");
const maxItem = 12; // maximum items in the page
let index = 1; // first 
let lnth = fooditems.length;

const pagination = Math.ceil(lnth / maxItem); //ex : 20/8=2.5 --> ceil = 2
console.log(pagination)

prev.addEventListener("click", () => {
	index--;
	btn_disablity();
	showItems();
})
next.addEventListener("click", () => {
	index++;
	btn_disablity();
	showItems();
})


//buttons disability 

let btn_disablity = () => {
	if (index == pagination) {
		next.classList.add("disabled");
	}
	else {
		next.classList.remove("disabled");
	}

	if (index == 1) {
		prev.classList.add("disabled");
	}
	else {
		prev.classList.remove("disabled");
	}
}


//calculation part


let showItems = () => {
	for (let i = 0; i < fooditems.length; i++) {
		fooditems[i].classList.remove("show");
		fooditems[i].classList.add("hide");
		if (i >= (index * maxItem) - maxItem && i < index * maxItem) {
			// ex : (1*8)-8=0 if index=2 then (2*8)-8=8
			fooditems[i].classList.remove("hide");
			fooditems[i].classList.add("show");
		}
		page.innerHTML = index;
	}


}

window.onload = () => {
	showItems();
}








