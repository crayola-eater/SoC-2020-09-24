// - make a dropdown using the select tag and add a priority to the todo, change the color accordingly
{
  const options = [
    {
      priority: "",
    },
    {
      priority: "High",
      class: "red",
    },
    {
      priority: "Medium",
      class: "yellow",
    },
    {
      priority: "Low",
      class: "green",
    },
  ];

  const select = document.createElement("select");
  for (const o of options) {
    const option = document.createElement("option");
    option.value = o.priority;
    option.textContent = o.priority;
    select.appendChild(option);
  }

  const button = document.querySelector("button");
  button.parentNode.insertBefore(select, button);

  const ul = document.querySelector("ul");

  const maybeCreateListItem = () => {
    const input = document.querySelector("input");
    const value = input.value.trim();
    const priority = document.querySelector("select").value.toLowerCase();

    if (value.length === 0 || priority.length === 0) {
      return;
    }

    const li = document.createElement("li");
    li.textContent = value;
    li.classList.add(priority);

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
