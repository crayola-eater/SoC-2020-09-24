/*
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
*/
{
  const button = document.querySelector("#click-me");
  button.addEventListener("click", (event) => {
    if (event.shiftKey) {
      button.innerText = "NAILED IT!!";
    }
  });
}
