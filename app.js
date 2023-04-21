window.addEventListener("scroll", function () {
  // Get the current scroll position
  var scrollPosition = window.pageYOffset;

  // Get the height of the page
  var pageHeight = document.documentElement.scrollHeight;

  // Get the height of the viewport
  var viewportHeight = window.innerHeight;

  // Calculate the distance between the bottom of the viewport and the bottom of the page
  var scrollPercentage = ((scrollPosition + viewportHeight) / pageHeight) * 100;

  // If the user has scrolled close to the bottom of the page
  if (scrollPercentage >= 60) {
    // Change 90 to the desired percentage
    // Call your function here
    removePosts();
  }
});

function removePosts() {
  // Get all <span> elements on the page
  let count = 0;
  const spanElements = document.getElementsByTagName("span");

  // Loop through all <span> elements and check their content
  for (let i = 0; i < spanElements.length; i++) {
    const spanContent = spanElements[i].textContent;

    // Check if the content of the <span> element matches "Gợi ý cho bạn"
    // You can edit this to match with your language
    if (spanContent === "Gợi ý cho bạn") {
      // Do something with the matching <span> element
      let currentElement = spanElements[i];
      while (currentElement.className != "x1lliihq") {
        currentElement = currentElement.parentElement;
      }
      //   console.log(currentElement.className);
      currentElement.remove();
      count++;
    }
  }
  console.log("removed posts: " + count);
}
