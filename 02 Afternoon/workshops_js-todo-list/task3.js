/*
## Step 3

Add a new button which when clicked loops through the array of daily todos and adds them as list items to the unordered list.
*/

{
  const dailyToDos = [
    "Wash Up",
    "Clean Teeth",
    "Eat Breakfast",
    "Eat Lunch",
    "Eat Dinner",
  ];

  const button = document.createElement("button");
  button.textContent = "Add preset todos";

  button.addEventListener("click", () => {
    const frag = document.createDocumentFragment();
    const ul = document.querySelector("ul");

    for (const toDo of dailyToDos) {
      const li = document.createElement("li");
      li.textContent = toDo;
      frag.appendChild(li);
    }

    ul.appendChild(frag);
  });

  document.body.appendChild(button);
}
