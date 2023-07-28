const fill = document.querySelectorAll('.fill')
const box = document.querySelectorAll('.box')

fill.forEach(fill => {
    fill.addEventListener('dragstart', dragStart);
});
fill.forEach(fill => {
    fill.addEventListener('dragend', dragEnd);
});

function dragStart() {
    console.log('drag start')
}

function dragEnd() {
    console.log('drag end')
}

function dragHover() {
    console.log('drag hover')
}

function dragDrop() {
    console.log('drag drop')
}

function dragEnter() {
    console.log('drag enter')
}

function dragLeave() {
    console.log('drag leave')
}