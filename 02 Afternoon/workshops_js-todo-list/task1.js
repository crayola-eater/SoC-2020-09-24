/*
## Step 1

Create a text input, a button and an unordered list in index.html as well as linking the JS and CSS files. Give the input placeholder attribute a value of "to do...".
*/

{
  const input = document.createElement("input");
  input.placeholder = "to do...";
  document.body.appendChild(input);

  const button = document.createElement("button");
  button.textContent = "Add item";
  document.body.appendChild(button);

  const ul = document.createElement("ul");
  document.body.appendChild(ul);
}
