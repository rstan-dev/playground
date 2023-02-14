//from Udemy course: https:www.udemy.com/course/html-css-javascript-projects-for-beginners/learn/lecture/34705910#overview
//toggling 2 icons - https://stackoverflow.com/questions/46625249/toggling-innerhtml-in-javascript

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
console.log(list);

list.forEach((task) => toDoList(task));

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(task) {
  const liEl = document.createElement("li");
  let newTask = inputEl.value;

  if (task) newTask = task.name;
  if (task && task.checked) liEl.classList.add("checked");

  liEl.innerText = newTask;

  ulEl.appendChild(liEl);
  inputEl.value = "";

  const checkBtnEl = document.createElement("div");

  liEl.className === "checked" ?
    (checkBtnEl.innerHTML = `<i class="fa-sharp fa-solid fa-square-check"></i>`) :
    (checkBtnEl.innerHTML = `<i class="fa-regular fa-square"></i>`);

  liEl.appendChild(checkBtnEl);

  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  liEl.appendChild(trashBtnEl);

  const barsEl = document.createElement("div");
  barsEl.innerHTML = `<i class="fas fa-bars"></i>`;
  liEl.appendChild(barsEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();

    liEl.className === "checked" ?
      (checkBtnEl.innerHTML = `<i class="fa-sharp fa-solid fa-square-check"></i>`) :
      (checkBtnEl.innerHTML = `<i class="fa-regular fa-square"></i>`);
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

//______________________________________________________

function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
  list = [];

  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),
    });
  });

  localStorage.setItem("list", JSON.stringify(list));

  updateCounter();

  updateTickCounter();

  calculatePercentage();
}

//____________________________________________________

//////////////////
// Update Counter function
//////////////////

function updateCounter() {
  const count = document.getElementById('count-of-items')
  let totalItems = JSON.parse(localStorage.list).length
  count.innerText = totalItems
  // console.log(totalItems)

}
/////////////////////
// Update Items Done Counter Function
/////////////////////

function updateTickCounter() {
  const totalDone = document.getElementById('total-done');

  let data = localStorage.getItem("list");

  let dataArray = JSON.parse(data);
  // console.log(dataArray)

  function countValue(value, dataArray, key) {
    return dataArray.reduce(function (count, item) {
      return count + (item[key] === value);
    }, 0);
  }

  let countTicks = countValue(true, dataArray, "checked");
  totalDone.textContent = countTicks;

  // console.log(countTicks);

}


/////////////////////
// Update % Complete Counter
// support from: https://www.w3schools.com/jsref/jsref_round.asp
// stackoverflow: https://stackoverflow.com/questions/8093625/localstorage-count-how-many-values-in-key-when-using-stringify
/////////////////////

function calculatePercentage() {
  const percentComplete = document.getElementById("percent-complete")

  let data = localStorage.getItem("list");

  let dataArray = JSON.parse(data);
  // console.log(dataArray)

  function countValue(value, dataArray, key) {
    return dataArray.reduce(function (count, item) {
      return count + (item[key] === value);
    }, 0); //chatGPT answer
  }

  let countTicks = countValue(true, dataArray, "checked");

  let totalItems = JSON.parse(localStorage.list).length

  let percentCalc = Math.round(countTicks / totalItems * 100)
  console.log(percentCalc)

  percentComplete.textContent = percentCalc

}

/////////////////////
//  Draggable code
/////////////////////
// const item = document.querySelector('.draggable');

// let isDragging = false;
// let currentX;
// let currentY;
// let initialX;
// let initialY;
// let xOffset = 0;
// let yOffset = 0;

// item.addEventListener("mousedown", dragStart);
// item.addEventListener("mouseup", dragEnd);
// item.addEventListener("mouseout", dragEnd);
// item.addEventListener("mousemove", drag);

// function dragStart(e) {
//   initialX = e.clientX - xOffset;
//   initialY = e.clientY - yOffset;

//   isDragging = true;
// }

// function dragEnd(e) {
//   isDragging = false;
// }

// function drag(e) {
//   if (isDragging) {
//     e.preventDefault();
//     currentX = e.clientX - initialX;
//     currentY = e.clientY - initialY;

//     xOffset = currentX;
//     yOffset = currentY;

//     setTranslate(currentX, currentY, item);
//   }
// }

// function setTranslate(xPos, yPos, el) {
//   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
// }


// function countTrue(dataArray) {
//   return dataArray.reduce(function (count, item) {
//     return count + (item === true);
//   }, 0);
// }

// let count = countTrue(dataArray);
// console.log(count)



//////////////



/*
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(function (seat) {
      return [...seats].indexOf(seat);
  }); //this function gets the indexed seats from the node list and capturs in an array

  // console.log(seatsIndex);  shows the index of each selected seat working in the console

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  // stores this data in the application window even when browser is refreshed

  const selectedSeatsCount = selectedSeats.length;
  // console.log(selectedSeatsCount); - shows the selection count is working in the console
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice
  // updates the HTML text for count and total to reflect on screen

};

*/