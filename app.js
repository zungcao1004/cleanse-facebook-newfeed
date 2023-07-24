var postCount = 0;
var reelCount = 0;
var sponCount = 0;
var reelPostCount = 0;

window.addEventListener("scroll", function () {
  var scrollPosition = window.pageYOffset;

  var pageHeight = document.documentElement.scrollHeight;

  var viewportHeight = window.innerHeight;

  var scrollPercentage = ((scrollPosition + viewportHeight) / pageHeight) * 100;

  if (scrollPercentage >= 1) {
    	removeSponsoreds();
	remove();
	console.log(postCount,reelCount,sponCount, reelPostCount);
  }
});

function remove(){
	var allPosts = document.querySelectorAll(".x1lliihq");
	for (let post of allPosts) {
		if (post.textContent.includes("Suggested for you")){
			post.remove();
			postCount++;
		} else if (post.textContent.includes("Reels")){
			post.remove();
			reelPostCount++;
		} else if (post.textContent.includes("Reels and short videos")){
                        post.remove();
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

