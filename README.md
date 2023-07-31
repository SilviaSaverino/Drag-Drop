# Drag & Drop
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
#### Line 18 
```
function dragStart() {
    console.log('drag start')
    this.className += ' hold'
    setTimeout(()=> this.className = 'invisible', 0)
}
```
- Inside the setTimeout function, the code sets the className of the element to 'invisible' to visually hide the element. Even with a delay of 0 milliseconds, using setTimeout is crucial in this scenario. When the browser encounters the setTimeout function, it places the code inside the setTimeout function at the end of the current event loop. This allows the browser to complete its current tasks, including updating the DOM with the newly added 'hold' class, before executing the code inside the setTimeout function.
- Without using the setTimeout function, if the 'invisible' class were applied directly after adding the 'hold' class, the element would become invisible during the 'hold' process. This would lead to a poor user experience (UX) as the user won't be able to see the selected image anymore.