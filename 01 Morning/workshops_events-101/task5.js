/*
## Task 5 - inline listener and toggle

This function should be declared inline, meaning it is declared as an argument to the `addEventListener` function. This function will not need a name and will not be able to be invoked elsewhere in our code.

To toggle is to switch between two states. In this task we will be toggling a class on an element. This means when the function is first called we should add the class, when the function is next called, remove the class. See [this page for more context](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).

👉 Add an event listener to the checkbox input, listen to the `change` event and declare an inline function that toggles a class of `.funky` on the `h1` element.
*/
{
  const checkbox = document.querySelector("#check-box");
  checkbox.addEventListener("change", () => {
    document.querySelector("h1").classList.toggle("funky");
  });
}
