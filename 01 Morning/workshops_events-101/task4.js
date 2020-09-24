/*
## Task 4 - different events

👉 Listen to the `mouseenter` event on the `img` element and change the color of the `h1` to `hotpink`

👉 Listen to the `mouseleave` event on the `img` element and change the color of the `h1` back to `initial`
*/
{
  const img = document.querySelector("img");
  const h1 = document.querySelector("h1");

  img.addEventListener("mouseenter", () => {
    h1.style.color = "hotpink";
  });

  img.addEventListener("mouseleave", () => {
    h1.style.color = "initial";
  });
}
