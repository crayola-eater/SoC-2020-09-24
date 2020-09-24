/*
## Task 2 - adding an event listener

There is a button with a class of `.task-2`

👉 Select the button with `querySelector` and store in a variable called `flowerButton`

👉 Write a function that changes the title of the document to be these flower emojis `💐🌷🌼`

👉 Add an event listener to the `flowerButton` which listens to the `click` event and calls your function from the previous step
*/

{
  const flowerButton = document.querySelector(".task-2");
  flowerButton.addEventListener("click", () => {
    document.title = "💐🌷🌼";
  });
}
