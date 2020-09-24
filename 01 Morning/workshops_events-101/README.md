# Events

## Task 1 - the event object

In `main.js` you will find some code that looks like this...

```js
const button = document.querySelector("#click-me");

function handleClick(event) {
  // code goes here!
}

button.addEventListener("click", handleClick);
```

We have stored a reference to the button with id `#click-me` in the `button` variable, and have added an event listener to listen for when the button is pressed. When the button is pressed, the function `handleClick` will be called.

👉 If the `shiftKey` property of the event is `true`, then change the inner text of the button to be `"NAILED IT!!"`

## Task 2 - adding an event listener

There is a button with a class of `.task-2`

👉 Select the button with `querySelector` and store in a variable called `flowerButton`

👉 Write a function that changes the title of the document to be these flower emojis `💐🌷🌼`

👉 Add an event listener to the `flowerButton` which listens to the `click` event and calls your function from the previous step

## Task 3 - different events

There are [many different kinds of events](https://developer.mozilla.org/en-US/docs/Web/Events) other than click.

Event.target is a reference to the element that fired the event. If we clicked on a button the target would be that button, in this case we are listening to a text input.

👉 Select the input with id `#title-changer`

👉 Write a function that takes in an event object as a parameter

👉 When that function is called, read the value from the `value` property, which is nested in an object on the `target` property of the event. Set the text in the `h1` tag to be that value

👉 add an event listener to the input which listens to the `keyup` event and calls your function

## Task 4 - different events

👉 Listen to the `mouseenter` event on the `img` element and change the color of the `h1` to `hotpink`

👉 Listen to the `mouseleave` event on the `img` element and change the color of the `h1` back to `initial`

## Task 5 - inline listener and toggle

This function should be declared inline, meaning it is declared as an argument to the `addEventListener` function. This function will not need a name and will not be able to be invoked elsewhere in our code.

To toggle is to switch between two states. In this task we will be toggling a class on an element. This means when the function is first called we should add the class, when the function is next called, remove the class. See [this page for more context](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).

👉 Add an event listener to the checkbox input, listen to the `change` event and declare an inline function that toggles a class of `.funky` on the `h1` element.

## Task 6 - keep practicing

👉 Delete and repeat any tasks you struggled with
👉 Find more events and listen to them.
