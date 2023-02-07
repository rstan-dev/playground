// from youtube tutorial: https://www.youtube.com/watch?v=jfYWwQrtzzY //

const draggables = document.querySelectorAll('.p3-draggable');
const containers = document.querySelectorAll('.p3-container');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        console.log('drag start');
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        console.log('drag end');
        draggable.classList.remove('dragging');
    });
});

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        console.log('drag over');
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        console.log(afterElement);
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
    });
});



// const afterElement = getDragAfterElement(container, e.clientY)
// 
// 


function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.p3-draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        // console.log(box)
        const offset = y - box.top - box.height / 2
        console.log(offset)
        if (offset < 0 && offset > closest.offset) {
            return {
                offset: offset,
                element: child
            }
        } else {
            return closest
        }

    }, {
        offset: Number.NEGATIVE_INFINITY
    }).element
}

//     

//     
//         const box = child.getBoundingClientRect()
//         const offset = y - box.top - box.height / 2
//         console.log(offset)

//     }, 
//     })
// }

// https://www.youtube.com/watch?v=jfYWwQrtzzY got to 21:03 - head is fried!!!