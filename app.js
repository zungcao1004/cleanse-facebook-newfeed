var postCount = 0
var reelCount = 0
var sponCount = 0

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
  if (scrollPercentage >= 30) {
    removePosts();
    removeReels();
    removeSponsoreds();
  }

  if (scrollPercentage>=75) {
    console.log(postCount,reelCount,sponCount)
  }

});

function removePosts() {
  // Get all <span> elements on the page
  const spanElements = document.getElementsByTagName("span");

  // Loop through all <span> elements and check their content
  for (let i = 0; i < spanElements.length; i++) {
    const spanContent = spanElements[i].textContent;

    // Check if the content of the <span> element matches "Gợi ý cho bạn"
    // You can edit this to match with your language
    if (spanContent === "Suggested for you") {
      // Do something with the matching <span> element
      let currentElement = spanElements[i];
      while (currentElement.className != "x1lliihq") {
        currentElement = currentElement.parentElement;
      }
      //   console.log(currentElement.className);
      currentElement.remove();
      postCount++;
    }
  }
}

function removeReels() {
  const spanElements = document.getElementsByTagName("span");
  for (let i = 0; i < spanElements.length; i++) {
    const spanContent = spanElements[i].textContent;

    if (spanContent === "Reels and short videos") {
      // Do something with the matching <span> element
      let currentElement = spanElements[i];
      while (currentElement.className != "x78zum5 x1n2onr6 xh8yej3") {
        currentElement = currentElement.parentElement;
      }
      //   console.log(currentElement.className);
      currentElement.remove();
      reelCount++;
    }
  }
}


function removeSponsoreds(){
  var addsblockElements = document.querySelectorAll('div[addsblock*="true"]');
  addsblockElements.forEach((el)=>{
    el.remove();
    sponCount++;
  });
}