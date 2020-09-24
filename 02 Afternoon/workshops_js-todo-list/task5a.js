/*
## Step 5 - Experiment

- see what other features you can add...
  - have the todo added when the enter key is pressed
*/
{
  const ul = document.querySelector("ul");
  const button = document.querySelector("button");

  const maybeCreateListItem = () => {
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
  };

  button.addEventListener("click", maybeCreateListItem);
  document.querySelector("input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      maybeCreateListItem();
    }
  });
}
