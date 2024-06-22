'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


///////////////////////////////////////////////

// Smooth Scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener("click", (e) => {
  const s1coords = section1.getBoundingClientRect();

  // old way disponible in most browsers
  window.scrollTo({
    top: s1coords.top + window.scrollY,
    left: s1coords.left + window.scrollX,
    behavior: "smooth",
  });

  // new way not disponible in older browsers
  // * section1.scrollIntoView({behavior: "smooth"});
  
});

//////////////////////////////////////////////

// Cookie message

// * const header = document.querySelector("header");

// * const message = document.createElement('div');

// * message.classList.add("cookie-message");

// * message.innerHTML = `We use cookies for improved 
// * functionality and analytcs. <button 
// * class = 'btn btn--close-cookie'>Got it</button>`;


// * header.append(message);


// * document.querySelector('.btn--close-cookie')
// * .addEventListener('click', () =>
// * message.remove()
// * )

// * message.style.backgroundColor = '#37383';

// * message.style.width = '104%';

// * message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//////////////////////////////////////////////


// TABBED COMPONENT

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener("click", function(e) {
  const clicked = e.target.closest('.operations__tab');
    
  // Guard Clause - for the times clicked doesn't exist,
  // when the parent component is clicked but not one of the buttons
  if(!clicked) return;

  // could use the tabs variable above...
  // * [...this.children].forEach(el => {
    // * if (el != clicked) el.classList.remove('operations__tab--active');
    // * else el.classList.add('operations__tab--active');
  // * })

  // remove from all the buttons the active class to then give it to the right button
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  // * clicked.classList.add('operations__tab--active');


  // remove from all the contents the active class to then give it to the right content
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');


});


//////////////////////////////////////////////////////////////////

// MENU FADE ANIMATION

const nav = document.querySelector('.nav');

const handleHover = function (e) 
{
  // the this keyword now isn't the element being interacted,
  // but the argument passed by the bind method

  // confirms if the mouse entered or exited a nav__link element
  if (!e.target.classList.contains("nav__link")) return; // if not, return
  
  // link shall be the target - a nav__link element
  const link = e.target;
  // the siblings will be all the nav__link elements
  const siblings = link.closest('.nav')
  .querySelectorAll('.nav__link');
  // logo is the only img withing the nav
  const logo = link.closest('.nav').querySelector('img');

  // all the siblings that aren't the link will have they
  // opacity changed - the moused over element doesn't actually
  // change opacity
  siblings.forEach(el => {
    if (el != link) el.style.opacity = this;
  });
  // and the logo
  logo.style.opacity = this;
}

// Passing "argument" to handler function - the argument will be the this keywork 
// within the function
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// functional cleaner example, second way of finishing it
// this would be replaced with this
// * nav.addEventListener('mouseover', function(e) {
  // * handleHover(e, 0.5);
// * });
// * nav.addEventListener('mouseout', function(e) {
  // * handleHover(e, 1);
// * });

// First way of finishing it

// * nav.addEventListener('mouseover', function(e) {
  // * if (!e.target.classList.contains('nav__link')) return;
  
  // * const link = e.target;
  // * const siblings = link.closest('.nav')
  // * .querySelectorAll('.nav__link');
  // * const logo = link.closest('.nav').querySelector('img');

  // * console.log(siblings)
  // * siblings.forEach(el => {
    // * console.log('sibling el = ', el);
    // * console.log('the link = ', link);
    // * if (el != link) el.style.opacity = 0.5;
  // * })

  // * logo.style.opacity = 0.5;

// * })
// * nav.addEventListener('mouseout', function(e) {
  // * if (!e.target.classList.contains('nav__link')) return;

  // * [...nav.querySelectorAll('.nav__link')].forEach(el => el.style.opacity = 1);
  // * logo.style.opacity = 1;

  /*
    first Solution from the class:
    if (!e.target.classList.contains('nav__link')) return;
  
    const link = e.target;
    const siblings = link.closest('.nav')
    .querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    console.log(siblings)
    siblings.forEach(el => {
      // * console.log('sibling el = ', el);
      // * console.log('the link = ', link);
      if (el != link) el.style.opacity = 1;
    })

    logo.style.opacity = 1;
  */
// * })


//////////////////////////////////////////////////////////////////////



// STICKY NAVIGATION

// not the most efficient way...
// * const sect1coords = section1.getBoundingClientRect();

// * window.addEventListener('scroll', function (e) {
  // * console.log(window.scrollY);

  // * if (this.scrollY > sect1coords.top) nav.classList.add('sticky');
  // * else nav.classList.remove('sticky');

// * });


// intersection observer API

// const obsCallback = function(entries, observer) {
// *   entries.forEach(entry => {
//     // * console.log(entry);
//     // * if(entry.isIntersecting && entry.boundingClientRect.top >= section1.getBoundingClientRect().top) nav.classList.toggle('sticky');
  
// *   });

// * };

// * const obsOptions = {
// *  root: null,
// *  threshold: 0.1,
// * };

// observer created and set to observe an element
// * const observer = new IntersectionObserver(obsCallback, obsOptions);
// * observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries, observer) {
  entries.forEach(entry => {
    // * console.log(entry);
    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");

    // * nav.classList.toggle('sticky');
  });
};

const headerObsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(stickyNav, headerObsOptions);
headerObserver.observe(header);

///////////////////////////////////////////////////////////////////

// REVEAL SECTION

// All the sections are attributed to the allSections array variable
const allSections = document.querySelectorAll('section');
// * console.log(allSections);

// function responsible
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // * console.log(entry, ' and ', entries);
  // * console.log(entry.target === allSections[1]);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const revealSectionOpt = {
  root: null,
  threshold: 0.10,
};

// new Intersection Observer that calls the revealSection function based of the options in the
// revealSectionOpt object
const sectionObserver = new 
IntersectionObserver(revealSection,revealSectionOpt);

// added the class section hidden to hide and move downward a little all the sections
// and make the Intersection Observer observe each section
allSections.forEach(section => {
  // * section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

///////////////////////////////////////////////////////////////////////////


// LAZY LOADING IMAGES

const imgTargets = document.querySelectorAll('img[data-src]');

const imgObserverOpt = {
  root: null,
  threshold: 0,
  // without the code bellow it will not
  // "lazy load" in advance
  // * rootMargin: '200px'
}

const loadImages = function (entries, observer) {
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  const img = entry.target;

  // * console.log(entry);
  // * console.log(entry.target);

  // could be img.src = img.dataset.src as well, in that case doesn't make a difference
  img.setAttribute("src", img.dataset.src);

  // The right way, change the blur only when the new image loads - makes a difference when using slower
  // internet connections.
  img.addEventListener('load', () => img.classList.remove('lazy-img'));

  observer.unobserve(img);
};

const lazyImgObserver = new IntersectionObserver(loadImages, imgObserverOpt);
imgTargets.forEach(img => lazyImgObserver.observe(img));


//////////////////////////////////////////////////////////////////

//MAKING THE SLIDE
const sliders = function () {
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");
  const sliderBtnRight = document.querySelector(".slider__btn--right");
  const sliderBtnLeft = document.querySelector(".slider__btn--left");

  // My initial solution: 

  // * let curSlide = 0;
  // * const maxSlides = slides.length - 1;

  // * slider.style.overflow = "visible";
  // * slider.style.transform = "scale(0.4) translateX(-1200px)";

  // * const goToSlider = function(e) {
  //   * if (curSlide === maxSlides && this === "right") curSlide = 0;
  //   * else if (curSlide === 0 && this === "left") curSlide = maxSlides;
  //   * else if (this === "right") curSlide++;
  //   * else curSlide--;

  //   * slides.forEach((s, i) => {
  //     * s.style.transform = `translate(${100 * (i - curSlide)}%)`;
  //   * });  
  // * };

  // * slides.forEach((s, i) => {
  //   * s.style.transform = `translate(${100 * i}%)`;
  // * });

  // * sliderBtnRight.addEventListener("click", goToSlider.bind("right"));
  // * sliderBtnLeft.addEventListener("click", goToSlider.bind("left"));

  // Course solution - and the complete solution:

  let curSlide = 0;
  const maxSlide = slides.length;
  const dotContainer = document.querySelector('.dots');

  // create dots
  const createDots = function () {
    slides.forEach(function(_, i) {
      dotContainer.insertAdjacentHTML('beforeend', `<button class = "dots__dot" data-slide=${i}></button>`)
    })
  };

  // * slider.style.overflow = "visible";
  // * slider.style.transform = "scale(0.4) translateX(-1200px)";
  // slides.forEach((s, i) => {
  //   s.style.transform = `translate(${100 * i}%)`;
  // });

  // Functions
  const activateDot = function(slide) {
    document.querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
    // * [...dotContainer.children].forEach(dot => dot.classList.remove("dots__dot--active"));
    // * e.target.classList.add("dots__dot--active");
  };

  // main function that changes the translation
  // of the images to change the slides pages
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // previous slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  }

  // Init, preparing the slide and creating/setting the dots
  const init = function() {
    goToSlide(0);
    createDots();
    activateDot(0);
  }()

  // Event Handlers
  sliderBtnRight.addEventListener("click", nextSlide);
  sliderBtnLeft.addEventListener("click", prevSlide);

  // changing the page with key arrows
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
    activateDot(curSlide);
  })

  // selecting the page with the dots
  dotContainer.addEventListener("click", function(e) {
    if(!e.target.classList.contains("dots__dot")) return;
    // dataset has .slide within, using {slide} syntax works
    const {slide} = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  })
}
sliders();





//////////////////////////////////////////////////////////////////

// PAGINATION

// * const links = document.querySelectorAll('.nav__link');
// * console.log('links: ', links);

// NOT THE MOST EFFICIENT WAY TO SOLVE THIS PROBLEM - every element will have a function, we can
// use event delegation with the event propagation to improve the performance...
// * links.forEach(el => el.addEventListener("click", function(e) {
  // * e.preventDefault(); // prevent the anchor default effect
  // * const id = this.getAttribute("href"); // the ID of the element that the anchor points to
  // console.log(id);
  // * const desrElementRect = document.querySelector(id).getBoundingClientRect(); // bounding client rect of the element 
  // (size and position).

  // old and more supportive way of scrolling smoothly to the target
  // * window.scrollTo({
  // *  top: desrElementRect.top + window.scrollY,
  // *  left: desrElementRect.left + window.scrollX,
  // *  behavior: "smooth",
  // * });

// * }))

// Parent component of the links
const linksContainer = document.querySelector('.nav__links');

// event listener
linksContainer.addEventListener("click", function(e) {
  e.preventDefault(); // default prevented

  // checking if the target of the event is the corresponding one - 
  // if it's one of the links within the links container that has this
  // particular class
  // MATCHING STRATEGY
  if (e.target.classList.contains('nav__link')) {  

    // old standart way of scrolling smoothly
    const id = e.target.getAttribute("href");
    const desrElementRect = document.querySelector(id).getBoundingClientRect();

    window.scrollTo({
      top: desrElementRect.top + window.scrollY,
      left: desrElementRect.left + window.scrollX,
      behavior: "smooth",
    });
  }
});



////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// SELECTING ELEMENTS

// returns the entire HTML, since the documentElement
// is the element of the document
// * console.log(document.documentElement)

// returns the body of the document to the console log
// * console.log(document.body);

// returns the head of the document to the console log
// * console.log(document.head);

// returns the element with the header 
// classe of the page
// * const header = document.querySelector('.header');

// declares and initializes a const variable that contains
// all the elements with the section class in a node list 
// * const allSections = document.querySelectorAll('.section');

// returns the element with the id section--1
// * document.getElementById('.section--1');

// returns the HTMLCollection with all the elements
// with the button tag
// * const buttons = document.getElementsByTagName('button');

// HTML collections are live that updates automatically, that doesn't
// happen to node lists
// querySelector returns a node list, while get ELement(s)By...
// returns HTML collections

// returns a HTML collection with all the elements with
// a btn class
// * document.getElementsByClassName('btn');

// CREATING AND INSERTING ELEMENTS
// .insertAdjacentHTML

// This creates a DOM object but doesn't insert it 
// on the page. It's now within the message variable,
// as an object that represents the DOM element
// * const message = document.createElement('div');

// It's similar to this, the document.querySelector('#section--1')
// returns an object that represents a DOM element
// * document.querySelector('#section--1');

// Like all objects, the message may have methods withing it's content
// or other objects - the classList object has the add method that 
// adds a class to the DOM element object as the textContent property
// will change the textContent of the DOM element
// * message.classList.add("cookie-message");
// * message.textContent = `We use cookies for improved functionality 
// * and analytics`;
// to build it more objectively from scratch we may use
// the innerHTML property - setting it as we may judge fit
// * message.innerHTML = `We use cookies for improved 
// * functionality and analytcs. <button 
// * class = 'btn btn--close-cookie'>Got it</button>`;

// append inserts it as the last child element,
// while the prepend inserts it as the first element
// * header.append(message);
// * header.prepend(message);
// * header.append(message);

// message is a live element, therefor, can't be on multiple 
// places at the same time - that's the reason the element moves
// instead of being cloned there 
// A DOM element is unique, can't be in two places
// at the same time, but there are ways to clone they

// * header.append(message.cloneNode(true));
// Above the node is cloned - the true argument
// makes the child elements be copy as well

// * document.querySelector('.btn--close-cookie')
// * .addEventListener('click', () =>
  // * message.remove()
  // * message.parentElement.removeChild(message);
  // above there is the old way of removing, the remove
  // method is recent
  // the old way acess the parent element to use the method
  // removechild - then pass the child object
// * )




  // STYLES

  // it sets style attribute as inline styles - directly in the DOM
  // * message.style.backgroundColor = '#37383';
  // * message.style.width = '104%';

  // Bellow it's possible to see that the style
  // attribute of the object message only acess the inline style,
  // as such, it can't show styles that are within classes, for example
  // *console.log(message.style.color);
  // * console.log(message.style.backgroundColor);
  
  // For that, there is a way to obtain the style
  // even when it's whitin classes - the getComputedStyle method

  // * console.log(getComputedStyle(message).color);
  // * console.log(getComputedStyle(message).width);
  // As it's possible to observe, getComputedStyle(message) returns
  // all the styles computed in the object, having them as object properties
  // capable of change

  // here the inline style height is being set based in the numbers
  // from the string that contains it computed height + a int value + a string
  // , thus concatenating it
  // * message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

  // ATTRIBUTES

  // The object responsible for the DOM element also has
  // the properties of the tag, as the alt and src for a img tag.
  // these are stored as properties within the object, as such, can be
  // acessed and altered as such
  // * const logo = document.querySelector('.nav__logo');
  // * console.log(logo.alt);
  // * console.log(logo.src);
  // * console.log(logo.className);

  // Non-standart - these properties are the default ones,
  // to get non-standart properties it's needed to call the getAttribute method
  // with the attribute name as it's argument
  // * console.log(logo.designer); // doesn't work as it's not a default property for this tag
  // * console.log(logo.getAttribute('designer')); // it can't be altered as a property since it's a
  // function that returns a value

  // to alter a tag with function within the DOM object...
  // * logo.setAttribute('company', 'Bankist');
  // * logo.setAttribute('designer', 'Mandias');
  // it can change a attribute as well as create a new one.
  // the first argument determines the attribute key, the second
  // determines the value assigned to it

  // There is also a distinction between getting a href
  // from the getAttribute and the property of the object, being
  // the first one a absolute path as the former shows it relatively
  // to the document
  // * console.log(logo.src); // https:// ... /img/logo.png
  // * console.log(logo.getAttribute('src')); // img/logo.png 
  
  // * const link = document.querySelector('.nav__link--btn'); 
  // * console.log(link.href); // https:// ... /index.html#
  // * console.log(link.getAttribute('href')); // #

  // DATA ATTRIBUTES

  // special attributes that start with the word 'data'
  // data-... - in the DOM the nav img has a data-version-number attribute
  // IMPORTANT NOTE: while getting attributes the - must become _ (transform into camelcase)

  // obtaining a data attribute
  // * console.log(logo.dataset.versionNumber); // for some reason the intelisense doesn't work with it
  
  // CLASSES

  // * logo.classList.add('c'); // adds
  // * logo.classList.remove('c'); // removes
  // * logo.classList.toggle('c'); // removes if it does have it
  // and adds if it doesn't has
  // * logo.classList.contains('c'); // returns if it has a class

  // Don't use
  // * logo.className = "testing"; 
  // it changes the class name, replacing all the classes
  // for it's content



  // SMOOTH SCROLL
  // * const btnScrollTo = document.querySelector('.btn--scroll-to');
  // * const section1 = document.querySelector('#section--1');

  // * btnScrollTo.addEventListener('click', function(e) {
    // getBoundingClientRect returns a DOMRect object with the informations
    // of the size of an element and it's position relative to the viewport
    // * const s1coords = section1.getBoundingClientRect();
    // * console.log('section 1 bounding client rec: ', s1coords);
    // * console.log('event bounding client rec: ',e.target.getBoundingClientRect());
  
    // as it shows, the height and width of the viewport is obtained
    // * console.log(
    // *  "Height/width viewport: ",
    // *  document.documentElement.clientHeight,
    // *  document.documentElement.clientWidth
    // * );

    // Global function scrollTo receives coordinates to move the scrollbar
    // to - it has a horizontal scroll and vertical, meaning it sets both values
    // accordingly to the arguments passed
    // * window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);
    // the code above passes the viewport relative difference between the top and left of the
    // section element we want the button scroll to plus the actual scroll position, meaning
    // it will scroll always to the correct position

    // To make it smooth, it's possible with:
    // * window.scrollTo({
    // *  top: s1coords.top + window.scrollY,
    // *  left: s1coords.left + window.scrollX,
    // *  behavior: 'smooth',
    // *});
    // passing it all as a object with one of it's properties
    // being set as the behavior expectated

    // there is a more modern way that may not function in less modern browsers
    // * section1.scrollIntoView({behavior: 'smooth'});
    // since a way that works for more browser is better to implement in my
    // percpetion, the old way will be the default for this application
  
  // * });


  // EVENTS

  // mouse enter event
  // * const h1 = document.querySelector('h1');

  // This event will be listened to alert whenever the mouse enter the area of it's element
  // * h1.addEventListener('mouseenter', (e) => {
  // *  alert("addEventListener: Great! You're reading the heading");
  // * });

  // Old school way of adding a event listener - for each event listener
  // has the property in the DOM element, and it has the same advantage as the
  // className property - it overwrites the property, only accepting one event listening, in that case
  // * h1.onmouseenter = () => alert("That's the second alert!");

  // a function expression alertH1 is created receiving an event as argument
  // * const alertH1 = function (e) {
    // * alert("addEventListener: Great! You're reading the heading");
    // * h1.removeEventListener('mouseenter', alertH1);
    // in that case, the event listener is removed onde it's called
  // * }

  // the h1 dom object receives a event listener with the function expression
  // above being it's second argument
  // * h1.addEventListener('mouseenter', alertH1);

  // It's possible to add eventListener in the old js way, putting
  // "onClick = 'alert(`ALERT`)'" for example


  //rgb(255, 255, 255);

  // Way to generate a random integer:
  // * const randomInt = (min, max) =>
  // *  Math.floor(Math.random() * (max - min +1) + min);

  // This function expression generates random color rgb based making use of the randomInt function above  
  // * const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

  // The event propagation occurs in three fases, being the first the capture fase, the second the target and
  // the third being the bubbling fase
  // during the capture fase the event comes from the document and goes all the way trough the childs elements until it
  // reaches the target
  // Once it gets to the target, the eventListener is called and the bubbling fase beggins, making it go back passing for
  // each parent node until it gets to the document. 
  // During the bubbling fase the same event is listened by the eventListener of the parent elements
  // It's possible to make a eventListener listen to a event in the capture fase setting it's third parameter to true, commonly
  // the listener will only respond in the second and third fase of the propagation

  // *document.querySelector('.nav__link').addEventListener('click', function (e) {
    // * this.style.backgroundColor = randomColor();
    // * console.log('LINK ', e.target, e.currentTarget);

    // the This keyword present in this function responds to the element target, and the e parameter to the event
    // logically, the e.target is always equal to the this keyword, but the e.currentTarget may be diffetent if the event
    // came from a child component first

    // Method passed to stop the propagation of the event to parent components - not usually safe
    // * e.stopPropagation():
    //*});
  
  // the third parameter is set to false by default
  // * document.querySelector('.nav__links').addEventListener('click', function (e) {
  // * this.style.backgroundColor = randomColor();
  // * console.log('CONTAINER ', e.target, e.currentTarget);
  // * }, false);
  
  // In that case, this event Listener shall wait for an event in the capture and target fase - no usual, but possible for
  // historical reasons since 
  // *document.querySelector('.nav').addEventListener('click', function (e) {
  // *   this.style.backgroundColor = randomColor();
  // *   console.log('NAV ', e.target, e.currentTarget);
  // *}, true);


  // MOVING INTO THE DOM

  // * const h1 = document.querySelector('h1');
  // Going downwards: child
  // * console.log(h1.querySelectorAll('.highlight'));
  // * console.log(h1.childNodes);
  // * console.log(h1.children);
  // * h1.firstElementChild.style.color = 'white';
  // * h1.lastElementChild.style.color = 'orangered';

  // Going upwards: parents
  // * console.log(h1.parentNode);
  // * console.log(h1.parentElement);

  // The closest method works as the querySelectorAll, generating
  // all the upward elements or nodes
  // * h1.closest('.header').style.background = 'var(--gradient-secondary)';
  // * h1.closest('h1').style.background = 'var(--gradient-primary)';

  // Going sideways: siblings
  // * console.log(h1.previousElementSibling);
  // * console.log(h1.nextElementSibling);

  // * console.log(h1.nextSibling);
  // * console.log(h1.previousSibling);

  // * console.log(h1.parentElement.children);

  // an awesome use of the spread operator to return an array from the HTML collection
  // (to then use the forEach method in it)
  // * [...h1.parentElement.children].forEach(el => {
    // * if (el != h1) el.style.transform = 'scale(0.5)'
  // * });