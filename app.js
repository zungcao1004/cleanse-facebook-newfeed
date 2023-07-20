var postCount = 0;
var reelCount = 0;
var sponCount = 0;
var reelPostCount = 0;

window.addEventListener("scroll", function () {
  var scrollPosition = window.pageYOffset;

  var pageHeight = document.documentElement.scrollHeight;

  var viewportHeight = window.innerHeight;

  var scrollPercentage = ((scrollPosition + viewportHeight) / pageHeight) * 100;

  if (scrollPercentage >= 30) {
    removePosts();
    removeReels();
    removeSponsoreds();
	  removeStoryPosts();
  }

  if (scrollPercentage>=75) {
    console.log(postCount,reelCount,sponCount, reelPostCount)
  }

});

function removePosts() {
  const spanElements = document.getElementsByTagName("span");

  for (let i = 0; i < spanElements.length; i++) {
    const spanContent = spanElements[i].textContent;

    if (spanContent === "Suggested for you") {
      let currentElement = spanElements[i];
      while (currentElement.className != "x1lliihq") {
        currentElement = currentElement.parentElement;
      }
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
      let currentElement = spanElements[i];
      while (currentElement.className != "x78zum5 x1n2onr6 xh8yej3") {
        currentElement = currentElement.parentElement;
      }
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

function removeStoryPosts(){
  const spanElements = document.getElementsByTagName("span");

  for (let i = 0; i < spanElements.length; i++) {
    const spanContent = spanElements[i].textContent;

    if (spanContent === "Reel") {
      let currentElement = spanElements[i];
      while (currentElement.className != "x1lliihq") {
        currentElement = currentElement.parentElement;
      }
      currentElement.remove();
      reelPostCount++;
    }
  }
}
