// - make a button that will clear the whole list
{
  const button = document.createElement("button");
  button.textContent = "Remove all todos";
  button.addEventListener("click", () => {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
  });
  document.body.appendChild(button);
}
