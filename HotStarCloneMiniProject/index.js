let movies = [
  {
    name: "falcon and the winter soldier",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "hotstarslideimg/slider2.png",
  },
  {
    name: "loki",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "hotstarslideimg/slider1.png",
  },
  {
    name: "wanda vision",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "hotstarslideimg/slider3.png",
  },
  {
    name: "raya and the last dragon",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "hotstarslideimg/slider4.png",
  },
  {
    name: "luca",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "hotstarslideimg/slider5.png",
  },
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2) //Checks if there are elements in the sliders array and calculates the margin-left property for the first slide in the carousel. This calculation is used to position the slides within the carousel.
    }px)`;
  }
};

//The code then enters a loop that calls the createSlide function three times to initially populate the carousel with movie slides.
for (let i = 0; i < 3; i++) {
  createSlide();
}

//setInterval(() => { ... }, 3000);: Sets up an interval that calls the createSlide function every 3000 milliseconds (3 seconds), creating a rotating carousel effect.
setInterval(() => {
  createSlide();
}, 3000);

//video cards
//const videoCards = [...document.querySelectorAll(".video-card")];: This code selects all elements with the class "video-card" on the page and stores them in an array called videoCards.
const videoCards = [...document.querySelectorAll(".video-card")];

//videoCards.forEach((item) => { ... });: It iterates through each element in the videoCards array.
videoCards.forEach((item) => {
  //item.addEventListener("mouseover", () => { ... });: For each "video-card" element, it adds a mouseover event listener. When the mouse hovers over a "video-card," the code inside the callback function is executed
  item.addEventListener("mouseover", () => {
    //let video = item.children[1];: This line selects the second child of the "video-card" element, assuming it's an HTML5 video element. The assumption is based on the code structure where a video element is the second child of each "video-card."
    let video = item.children[1];
    //video.play();: When the mouse hovers over a "video-card," it plays the video associated with that card by calling the play() method of the video element.
    video.play();
  });
  //item.addEventListener("mouseleave", () => { ... });: Similarly, it adds a mouseleave event listener. When the mouse leaves the "video-card," the code inside the callback function is executed.
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    //video.pause();: It pauses the video associated with the card by calling the pause() method of the video element.
    video.pause();
  });
});

//card slide
//let cardContainers = [...document.querySelectorAll(".card-container")];: This code selects all elements with the class "card-container" on the page and stores them in an array called cardContainers. These elements likely represent containers for sets of cards.
let cardContainers = [...document.querySelectorAll(".card-container")];

//let preBtns = [...document.querySelectorAll(".pre-btn")];: It selects all elements with the class "pre-btn" and stores them in an array called preBtns. These elements are likely previous navigation buttons for scrolling the card containers.
let preBtns = [...document.querySelectorAll(".pre-btn")];

//let nxtBtns = [...document.querySelectorAll(".nxt-btn")];: Similarly, it selects all elements with the class "nxt-btn" and stores them in an array called nxtBtns. These elements are likely next navigation buttons for scrolling the card containers.
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

//let nxtBtns = [...document.querySelectorAll(".nxt-btn")];: Similarly, it selects all elements with the class "nxt-btn" and stores them in an array called nxtBtns. These elements are likely next navigation buttons for scrolling the card containers.
cardContainers.forEach((item, i) => {
  //let containerDimensions = item.getBoundingClientRect();: This line calculates the dimensions and position of the "card-container" element relative to the viewport using the getBoundingClientRect() method.
  let containerDimensions = item.getBoundingClientRect();
  //let containerWidth = containerDimensions.width;: It extracts the width of the "card-container" from the calculated dimensions.
  let containerWidth = containerDimensions.width;


  //nxtBtns[i].addEventListener("click", () => { ... });: For each "next" button associated with a container, it adds a click event listener. When the button is clicked, the code inside the callback function is executed.
  nxtBtns[i].addEventListener("click", () => {
    //item.scrollLeft += containerWidth - 200;: This line increases the horizontal scroll position of the "card-container" by subtracting 200 pixels from its width. This typically scrolls the container's content to the right, showing more cards.
    item.scrollLeft += containerWidth - 200;
  });

  //preBtns[i].addEventListener("click", () => { ... });: For each "previous" button associated with a container, it adds a click event listener. When the button is clicked, the code inside the callback function is executed.
  preBtns[i].addEventListener("click", () => {

    //item.scrollLeft -= containerWidth + 200;: This line decreases the horizontal scroll position of the "card-container" by adding 200 pixels to its width. This typically scrolls the container's content to the left, showing previous cards.
    item.scrollLeft -= containerWidth + 200;
  });
});
