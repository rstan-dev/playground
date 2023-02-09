//from Udemy course: https:www.udemy.com/course/html-css-javascript-projects-for-beginners/learn/lecture/34705910#overview
//toggling 2 icons - https://stackoverflow.com/questions/46625249/toggling-innerhtml-in-javascript

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
console.log(list);

list.forEach(task => {
    toDoList(task);
})




formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    // console.log(inputEl.value)  check ist working

    toDoList();

})

function toDoList(task) {
    let newTask = inputEl.value;

    if (task) {
        newTask = task.name
    }

    const liEl = document.createElement("li");

    if (task && task.checked) {
        liEl.classList.add("checked");
    };


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
        updateLocalStorage();

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
        updateLocalStorage();
    });

    updateLocalStorage();

}

//______________________________________________________

function updateLocalStorage() {
    const liEls = document.querySelectorAll("li");
    list = [];

    liEls.forEach(liEl => {
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        });
    });

    localStorage.setItem("list", JSON.stringify(list))


}