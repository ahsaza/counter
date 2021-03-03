const number = document.getElementById("number");
const count = document.getElementById("count");
const reset = document.getElementById("reset");
let countNumber = 0;

const initiateCounting = () => (number.innerText = countNumber);

const addCount = () => {
	countNumber++;
	initiateCounting();
};

const resetCount = () => {
	countNumber = 0;
	initiateCounting();
};

count.addEventListener("click", addCount);
reset.addEventListener("click", resetCount);

initiateCounting();
