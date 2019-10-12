// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function CreateTab(info) {
  // Grabbing our div to attach tabs to
  const topicsDiv = document.querySelector(".topics");
  // Creating a new div element
  const tab = document.createElement("div");
  // Adding our class
  tab.classList.add("tab");
  // Adding our content
  tab.textContent = info;
  // Appending our new tab
  topicsDiv.appendChild(tab);
}

// Using axios to get our API
axios
  // Get the data
  .get("https://lambda-times-backend.herokuapp.com/topics")
  // What we want to do with the data
  .then(response => {
    // looping through the data to put in our function
    response.data.topics.forEach(topic => {
      CreateTab(topic);
    });
  })
  // If there is an error getting the data
  .catch(err => {
    return console.log(err);
  });
