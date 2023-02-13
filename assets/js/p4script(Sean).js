//from Udemy course: https:www.udemy.com/course/html-css-javascript-projects-for-beginners/learn/lecture/34705910#overview
//toggling 2 icons - https://stackoverflow.com/questions/46625249/toggling-innerhtml-in-javascript

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

const onPageLoad = () => renderList(getLocalStorage());
onPageLoad();

/////////////////////////
// Event Listeners - responsible for listening for events and calling functions
/////////////////////////

/**
 * Function is called when the form is submitted
 * it creates a new list item object and adds it to local storage
 * it then calls the renderList function to re-render the list to the page
 * it also calls the clearInput function to clear the input field
 * @param {*} event
 * @returns {void}
 */
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const newItem = {
    id: Date.now(),
    title: inputEl.value,
    checked: false,
  };

  addListItem(newItem);
  renderList(getLocalStorage());
  clearInput();
});

/////////////////////////
// Render Functions - responsible for rendering the list and items to the page
/////////////////////////

/**
 * Function renders a list of items to the page
 * for each item in the list, it calls the listItem function
 * @param {*} list
 * @returns {void}
 */
function renderList(list) {
  ulEl.innerHTML = "";
  list.forEach((task) => {
    listItem(task);
  });
}

/**
 * Function renders a single list item to the page
 * it creates the li element, adds the text, and adds the buttons
 * it also adds event listeners to the buttons to toggle the checked state
 * @params task
 * @returns {void}
 */
function listItem(task) {
  const liEl = document.createElement("li");
  ulEl.appendChild(liEl);

  liEl.innerText = task.title;

  const checkBtnEl = document.createElement("div");

  task.checked ?
    (checkBtnEl.innerHTML = `<i class="fa-sharp fa-solid fa-square-check"></i>`) && (liEl.classList.add("checked")) :
    (checkBtnEl.innerHTML = `<i class="fa-regular fa-square"></i>`);

  liEl.appendChild(checkBtnEl);

  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  liEl.appendChild(trashBtnEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    if (task.checked) {
      task.checked = false;
      checkBtnEl.innerHTML = `<i class="fa-regular fa-square"></i>`;
    } else {
      task.checked = true;
      checkBtnEl.innerHTML = `<i class="fa-sharp fa-solid fa-square-check"></i>`;
    }
    updateListItemById(task.id, task);
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    removeListItemById(task.id);
  });
}

/////////////////////////
// Local Storage Functions - utility functions responsible for interacting with local storage
/////////////////////////

// get list items from local storage
function getLocalStorage() {
  return localStorage.getItem("list") ?
    JSON.parse(localStorage.getItem("list")) : [];
}

// get list item from local storage by id
function getListItemById(id) {
  const list = getLocalStorage();
  return list.find((item) => item.id === id);
}

// add list item to local storage
function addListItem(item) {
  const list = getLocalStorage();
  list.push(item);
  localStorage.setItem("list", JSON.stringify(list));
}

// remove list items from local storage
function removeListItemById(id) {
  const list = getLocalStorage();
  const updatedList = list.filter((item) => item.id !== id);
  localStorage.setItem("list", JSON.stringify(updatedList));
}

// update list item in local storage by id
function updateListItemById(id, updatedItem) {
  const list = getLocalStorage();
  const updatedList = list.map((item) => {
    if (item.id === id) {
      return updatedItem;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(updatedList));
}

/////////////////////////
// Helper Functions - responsible for helping other functions
/////////////////////////

function clearInput() {
  inputEl.value = "";
}

//////////////////
//Update Counter function
//////////////////

function updateCounter() {

}


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