# Drag & Drop
Simple web application that allows users to drag and drop images onto different boxes.

Link to live site: https://silviasaverino.github.io/Drag-Drop/

## Drag Events in Web Development
The drag events are a set of interactions related to Drag-and-Drop functionality in web development. They enable you to create interactive user interfaces, allowing elements to be moved around with user interactions. Below are the main drag events and their default behaviors:

### Drag Start:
 - What it does: Fired when an element is grabbed and starts being dragged.
 - Default behavior: The dragged element displays a "ghost image" following the cursor or touch position.

### Drag Over:
 - What it does: Fired continuously while the dragged element is moved over a valid drop target.
 - Default behavior: Allows the dragged element to be dropped on the target, but no visual or behavioral changes happen by default.

### Drag Enter:
 - What it does: Fired when the dragged element enters a valid drop target.
 - Default behavior: No significant visual or behavioral changes by default; you typically use it in combination with other events to provide custom feedback.

### Drag Leave:
 - What it does: Fired when the dragged element leaves a valid drop target.
 - Default behavior: No significant visual or behavioral changes by default; commonly used in combination with other events to provide custom feedback.

### Drag End:
 - What it does: Fired when the dragging operation is ended (e.g., when the mouse click is released).
 - Default behavior: The dragged element will revert to its original position or disappear from view, depending on the browser and platform.


## JS Notes
#### Line 18: 
```
function dragStart() {
    console.log('drag start')
    this.className += ' hold'
    setTimeout(()=> this.className = 'invisible', 0)
}
```
- Inside the setTimeout function, the code sets the className of the element to 'invisible' to visually hide the element. Even with a delay of 0 milliseconds, using setTimeout is crucial in this scenario. When the browser encounters the setTimeout function, it places the code inside the setTimeout function at the end of the current event loop. This allows the browser to complete its current tasks, including updating the DOM with the newly added 'hold' class, before executing the code inside the setTimeout function.
- Without using the setTimeout function, if the 'invisible' class were applied directly after adding the 'hold' class, the element would become invisible during the 'hold' process. This would lead to a poor user experience (UX) as the user won't be able to see the selected image anymore.

#### Line 3:
```
const fill = document.querySelectorAll('.fill');
const boxes = document.querySelectorAll('.box');
const images = Array.from(fill);
```
- The original code used querySelectorAll to select all elements with the class "fill" and "box". However, the querySelectorAll returns a NodeList, which cannot be directly manipulated like an array. To fix this, the code creates an array images using Array.from(fill), which allows us to work with the images as an array.

#### Line 6:
```
fill.forEach((fill, index) => {
    fill.addEventListener('dragstart', (e) => dragStart(e, index));
    fill.addEventListener('dragend', dragEnd);
});
```
- The dragStart function needed to know which image was being dragged, but the original code did not provide that information. To address this, the code now uses the forEach method with the index to add the index information as an argument to the dragStart function.

#### Line 17:
```
function dragStart(e, index) {
    console.log('drag start');
    draggedIndex = index;
    this.className += ' hold';
    setTimeout(() => this.classList.add('invisible'), 0);
}

```
- The dragStart function was updated to receive the event (e) and the index of the image being dragged. The function sets the draggedIndex variable to the index to keep track of the image being dragged. It also adds the 'hold' and 'invisible' classes to the dragged image.

#### Line 46:
```
function Drop() {
    console.log('drag drop');
    if (draggedIndex !== null) {
        const draggedImage = images[draggedIndex];
        this.append(draggedImage);
        draggedIndex = null;
        this.classList.remove('hovered');
    }
}
```
- The Drop function was modified to handle the drop event properly. It checks if draggedIndex is not null, meaning an image is being dragged. Then, it gets the dragged image from the images array using the draggedIndex and appends it to the dropped box. Finally, it resets the draggedIndex to null.