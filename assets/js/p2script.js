//-----------------------------------------------------
// P2: Draggable List functionality
const draggable_list = document.getElementById('draggable-list');

const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffet',
    'Mark Zuckerberg',
    'Larry Page',
    'Michael Bloomberg',
];

// P2: Store list Items
const listItems = [];

let dragStartIndex;

createList();

//P2: Insert list items into DOM
function createList() {
    [...richestPeople]
    .forEach((person, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
        `;

        listItems.push(listItem);

        draggable_list.appendChild(listItem);
    });

    addEventListeners();
};

// P2 Drag & Drop functions

function dragStart() {
    // console.log('Event:', 'dragstart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');

}

function dragEnter() {
    // console.log('Event:', 'dragenter');
    this.classList.add('over');
}

function dragOver(e) {
    // console.log('Event:', 'dragover');
    e.preventDefault();
}

function dragDrop() {
    //  console.log('Event:', 'drop');
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);

}


function dragLeave() {
    // console.log('Event:', 'dragleave');
    this.classList.remove('over');
}



function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    })

    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    })

};