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
    this.className = 'fill'
}

function dragOver(e) {
    console.log('drag over')
    e.preventDefault()
}

function dragEnter(e) {
    console.log('drag enter')
    e.preventDefault()
}

function dragLeave() {
    console.log('drag leave')
}

function Drop() {
    console.log('drag drop')
    this.className = 'box'
    this.append(fill)
}
