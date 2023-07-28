const fill = document.querySelectorAll('.fill')
const boxes = document.querySelectorAll('.box')

fill.forEach(fill => {
    fill.addEventListener('dragstart', dragStart);
});
fill.forEach(fill => {
    fill.addEventListener('dragend', dragEnd);
});

for(const box of boxes){
    box.addEventListener('dragover', dragOver),
    box.addEventListener('dragenter', dragEnter),
    box.addEventListener('dragleave', dragLeave),
    box.addEventListener('drop', Drop)
}

function dragStart() {
    console.log('drag start')
    this.className += ' hold'
    setTimeout(()=> this.className = 'invisible', 0)
}
    

function dragEnd() {
    console.log('drag end')
}

function dragOver() {
    console.log('drag over')
}

function dragEnter() {
    console.log('drag enter')
}

function dragLeave() {
    console.log('drag leave')
}

function Drop() {
    console.log('drag drop')
}
