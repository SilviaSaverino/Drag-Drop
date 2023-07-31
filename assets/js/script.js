const fill = document.querySelectorAll('.fill');
const boxes = document.querySelectorAll('.box');
const images = Array.from(fill);

fill.forEach((fill, index) => {
    fill.addEventListener('dragstart', (e) => dragStart(e, index));
    fill.addEventListener('dragend', dragEnd);
});

for (const box of boxes) {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', Drop);
}

function dragStart(e, index) {
    console.log('drag start');
    draggedIndex = index;
    this.classList.add('hold');
    setTimeout(() => this.classList.add('invisible'), 0);
}

function dragEnd() {
    console.log('drag end');
    this.classList.remove('invisible');
    this.classList.remove('hold');
}

function dragOver(e) {
    console.log('drag over');
    e.preventDefault();
}

function dragEnter(e) {
    console.log('drag enter');
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    console.log('drag leave');
    this.classList.remove('hovered');
}

function Drop() {
    console.log('drag drop');
    if (draggedIndex !== null) {
        const draggedImage = images[draggedIndex];
        this.append(draggedImage);
        draggedIndex = null;
    }
}