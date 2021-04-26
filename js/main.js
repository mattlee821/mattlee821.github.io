(function () {
window.onpageshow = function(event) {
if (event.persisted) {
window.location.reload();
}
};
})();

/* <!-- PAGE loader cookie - only show once a day --> */
document.addEventListener("DOMContentLoaded", function(event) { 
  // get a reference to the page wrapper
  const pageWrapper = document.querySelector(".page-wrapper");
  // get a reference to the loading wrapper
  const loadingWrapper = document.querySelector('.page-load__wrap');

  // get the 'seenAnimation' cookie and store in a seenAnimation variable
  const seenAnimation = Cookies.get('seenAnimation');
  // if the 'seenAnimation' cookie is undefined
  if(!seenAnimation){
    // display the loading-wrapper 
    loadingWrapper.style.display = "flex";
    // show the page-wrapper 
    // after a set duration of 3000 milliseconds
    // (the time it takes to show the loading-wrapper in this case)
    setTimeout(()=>{
      pageWrapper.style.display = "block";
    }, 5000);
    // set the 'seenAnimation' cookie 
    Cookies.set('seenAnimation', 1, { expires: 1 });
  }
  else{
    // else if the 'seenAnimation' cookie exists
    // the user has already seen the animation
    // and so
    // hide the loading-wrapper
    loadingWrapper.style.visibility = "hidden";
    // show the page-wrapper 
    pageWrapper.style.display = "block";
}

//This is for the "Clear my 24 hour cookie" button on this Hacks template
// this is not needed on your live site

  // when .clear-cookie is clicked 
  $('.clear-cookie').click(()=>{
    // remove the 'seenGif' cookie
    // the animation can now play again since
    //'seenAnimation' becomes undefined
    Cookies.remove('seenAnimation');
  });
});

// Copyright start
// © Code by T.RICKS, https://www.tricksdesign.com/
// You have the license to use this code in your projects but not redistribute it to others

// Find all text with .tricks class and break each letter into a span
var tricksWord = document.getElementsByClassName("tricks");
for (var i = 0; i < tricksWord.length; i++) {

var wordWrap = tricksWord.item(i);
wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="tricksword">$2</span>');

}


var tricksLetter = document.getElementsByClassName("tricksword");
for (var i = 0; i < tricksLetter.length; i++) {

   var letterWrap = tricksLetter.item(i);
   letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

}
// Copyright end



// Slide In Animation
var slideIn = anime.timeline({
  loop: false,
  autoplay: false,
});

slideIn
  .add({
    targets: '.slide-in .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
 }).add({
    targets: '.slide-in',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  

// Slide Up Animation
var slideUp = anime.timeline({
  loop: false,
  autoplay: false,
});

slideUp
    .add({
    targets: '.slide-up .letter',
    translateY: ["1.1em", 0],
    opacity: [0,1],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.slide-up',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  
  
// Fade Up Animation
var fadeUp = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUp 
  .add({
    targets: '.fade-up .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.fade-up .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });
  
  
  // Fade Down Project Title Animation
var fadeDown = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeDown 
  .add({
    targets: '.fade-down .tricksword',
    translateY: [0,220],
    translateZ: 0,
    opacity: [1,1],
    easing: "easeOutExpo",
    duration: 500,
    delay: (el, i) => 0 + 0 * i
  });


// Play your animation with these
fadeUp.play();
slideUp.play();
slideIn.play();



// Wait before playing animation
setTimeout(() => {  
	// Put the play below this line
  fadeUp.play();
}, 300);


// Play animaton when something is clicked
$( ".link__project-wrap" ).click(function() {
	// Put the play below this line
  fadeDown.play();
});


// Play animaton when hovered in
$( ".your-button-class" ).mouseenter(function() {
		// Put the play below this line
});

// Play animation when scrolled into view
$('#heading-container').on('inview', function(event, isInView) {
  if (isInView) {
		// Put the play below this line
  } else {
  }
});

//var mobilevideo = document.getElementsByTagName("video__bg")[0];
//mobilevideo.setAttribute("playsinline", "");
//mobilevideo.setAttribute("muted", "");