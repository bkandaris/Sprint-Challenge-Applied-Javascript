// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector(".header-container");

function Header() {
  // Creating our elements
  const headerDiv = document.createElement("div");
  const firstSpan = document.createElement("span");
  const h1 = document.createElement("h1");
  const secondSpan = document.createElement("span");

  // Add Context to our elements

  firstSpan.textContent = "SMARCH 28, 2019";
  h1.textContent = "Lambda Times";
  secondSpan.textContent = "98°";

  // Adding classes to our elements
  headerDiv.classList.add("header");
  firstSpan.classList.add("date");
  secondSpan.classList.add("temp");

  // Appending our elements
  headerContainer.appendChild(headerDiv);
  headerDiv.appendChild(firstSpan);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(secondSpan);

  return headerDiv;
}
// Call the function to get it on the page
Header();
