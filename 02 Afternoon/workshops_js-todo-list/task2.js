/*
## Step 2

Add an event listener to the button which calls a function. This function should add the current value of the text input to a new new list item and add that list item to the unordered list. After this, set the value of the input back to an empty string. If the input field is empty, the function should return early.
*/

{
  const ul = document.querySelector("ul");
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    const input = document.querySelector("input");
    const value = input.value.trim();

    if (value.length === 0) {
      return;
    }

    const li = document.createElement("li");
    li.textContent = value;

    ul.appendChild(li);
    input.value = "";
  });
}
