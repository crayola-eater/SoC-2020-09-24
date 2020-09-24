/*
## Step 4

Write a function that will take in an event object and change the color of the event.target to `lightgreen`. Remember that the target of the event is the element which the event comes from.

When creating a new list item in step 2, add a listener to each new item that listens to the click event. When the item is clicked, call the function that you've just written.
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

    li.addEventListener("click", (event) => {
      event.target.style.backgroundColor = "lightgreen";
    });

    ul.appendChild(li);
    input.value = "";
  });
}
