/*
## Task 3 - different events

There are [many different kinds of events](https://developer.mozilla.org/en-US/docs/Web/Events) other than click.

Event.target is a reference to the element that fired the event. If we clicked on a button the target would be that button, in this case we are listening to a text input.

👉 Select the input with id `#title-changer`

👉 Write a function that takes in an event object as a parameter

👉 When that function is called, read the value from the `value` property, which is nested in an object on the `target` property of the event. Set the text in the `h1` tag to be that value

👉 add an event listener to the input which listens to the `keyup` event and calls your function
*/

{
  const input = document.querySelector("#title-changer");

  input.addEventListener("keyup", (event) => {
    const h1 = document.querySelector("h1");
    h1.textContent = event.target.value;
  });
}
