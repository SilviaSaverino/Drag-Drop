# Drag & Drop

### JS Notes
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