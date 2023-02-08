//from Udemy course: https:www.udemy.com/course/html-css-javascript-projects-for-beginners/learn/lecture/34705910#overview

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");




formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    // console.log(inputEl.value)  check ist working

    toDoList();

})

function toDoList() {
    let newTask = inputEl.value;

    const liEl = document.createElement("li");

    liEl.innerText = newTask;

    ulEl.appendChild(liEl);
    inputEl.value = "";

    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `
        <i class="fa-regular fa-square"></i>  
    `;
    liEl.appendChild(checkBtnEl);

    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `
        <i class="fa-solid fa-trash-can"></i>
    `;
    liEl.appendChild(trashBtnEl);

    checkBtnEl.addEventListener("click", () => {
        liEl.classList.toggle("checked");

        if (liEl.className === "checked") {
            checkBtnEl.innerHTML = `
        <i class="fa-sharp fa-solid fa-square-check"></i>  
    `;
        } else {
            checkBtnEl.innerHTML = `
            <i class="fa-regular fa-square"></i>  
    `;
        };

    });

    trashBtnEl.addEventListener("click", () => {
        liEl.remove();
    });

}

//______________________________________________________