//================================================
// DO NOT MODIFY THIS CONSTANT VARIABLE
//================================================
const stars_dataset = [
  {
    "Ryan Gosling": [
      "sm_bg_ryan.jpg",
      "I'm going to make a movie about 'Hey Girl.'",
      "https://en.wikipedia.org/wiki/Ryan_Gosling",
    ],
    "Zac Efron": [
      "sm_bg_zac.jpg",
      "A girl can tell I like her when I blush or start telling bad jokes.",
      "https://en.wikipedia.org/wiki/Zac_Efron",
    ],
    Eminem: [
      "sm_bg_eminem.jpg",
      "I am whatever you say I am; if I wasn't, then why would you say I am.",
      "https://en.wikipedia.org/wiki/Eminem",
    ],
  },
  {
    "Irina Shayk": [
      "sm_bg_irina.jpg",
      "I am trying to concentrate on books. You know, I love Dostoevsky. He's my favorite writer.",
      "https://en.wikipedia.org/wiki/Irina_Shayk",
    ],
    "Anna Kendrick": [
      "sm_bg_anna.jpg",
      "An actor should always let humility outweigh ambition.",
      "https://en.wikipedia.org/wiki/Anna_Kendrick",
    ],
    "Taylor Swift": [
      "sm_bg_taylor.jpg",
      "I'm intimidated by the fear of being average.",
      "https://en.wikipedia.org/wiki/Taylor_Swift",
    ],
  },
];

// [TODO] IMPLEMENT THIS FUNCTION
// When the webpage loads, the web browser will call this function.
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {
  // YOUR CODE GOES HERE
  // Look for "[IMPORTANT]" inside challenge10.html file.
  // It tells you what elements need to be updated by JavaScript functions.
  // [IMPORTANT] Buttons

  var gender = ["Male", "Female"];
  var randomGender = gender[Math.round(Math.random())];

  if (randomGender == "Male") {
    show_male_stars();
  } else {
    show_female_stars();
  }

  //
  // When displaying "male" stars:
  //  - "Show Male Stars" button must be "disabled" (the user cannot click on it)
  //  - "Show Female Stars" button must be activated (the user should be able to click on it)
  //
  // When displaying "female" stars:
  //  - "Show Male Stars" button must be activated (the user should be able to click on it)
  //  - "Show Female Stars" button must be "disabled" (the user cannot click on it)
}

// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Male Stars" button is clicked, the web browser calls this function.
function show_male_stars() {
  // YOUR CODE GOES HERE
  var wiki1 = document.getElementById("wiki1");
  var wiki2 = document.getElementById("wiki2");
  var wiki3 = document.getElementById("wiki3");

  var image1 = document.getElementById("image1");
  var image2 = document.getElementById("image2");
  var image3 = document.getElementById("image3");

  var slideheading1 = document.getElementById("slide_heading1");
  var slideheading2 = document.getElementById("slide_heading2");
  var slideheading3 = document.getElementById("slide_heading3");

  var slidetitle1 = document.getElementById("slide_title1");
  var slidetitle2 = document.getElementById("slide_title2");
  var slidetitle3 = document.getElementById("slide_title3");

  var maleBtn = document.getElementById("male_button");
  var femaleBtn = document.getElementById("female_button");

  maleBtn.disabled = true;
  femaleBtn.disabled = false;

  image1.src = "images/sm_bg_ryan.jpg";
  slideheading1.innerText = "Ryan Gosling";
  slidetitle1.innerText = stars_dataset[0][slideheading1.innerText][1];
  wiki1.innerText = slideheading1.innerText;
  wiki1.href = stars_dataset[0][slideheading1.innerText][2];

  image2.src = "images/sm_bg_zac.jpg";
  slideheading2.innerText = "Zac Efron";
  slidetitle2.innerText = stars_dataset[0][slideheading2.innerText][1];
  wiki2.innerText = slideheading2.innerText;
  wiki2.href = stars_dataset[0][slideheading2.innerText][2];

  image3.src = "images/sm_bg_eminem.jpg";
  slideheading3.innerText = "Eminem";
  slidetitle3.innerText = stars_dataset[0][slideheading3.innerText][1];
  wiki3.innerText = slideheading3.innerText;
  wiki3.href = stars_dataset[0][slideheading3.innerText][2];
}

// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Female Stars" button is clicked, the web browser calls this function.
function show_female_stars() {
  // YOUR CODE GOES HERE
  var wiki1 = document.getElementById("wiki1");
  var wiki2 = document.getElementById("wiki2");
  var wiki3 = document.getElementById("wiki3");

  var image1 = document.getElementById("image1");
  var image2 = document.getElementById("image2");
  var image3 = document.getElementById("image3");

  var slideheading1 = document.getElementById("slide_heading1");
  var slideheading2 = document.getElementById("slide_heading2");
  var slideheading3 = document.getElementById("slide_heading3");

  var slidetitle1 = document.getElementById("slide_title1");
  var slidetitle2 = document.getElementById("slide_title2");
  var slidetitle3 = document.getElementById("slide_title3");

  var maleBtn = document.getElementById("male_button");
  var femaleBtn = document.getElementById("female_button");

  maleBtn.disabled = false;
  femaleBtn.disabled = true;

  image1.src = "images/sm_bg_irina.jpg";
  slideheading1.innerText = "Irina Shayk";
  slidetitle1.innerText = stars_dataset[1][slideheading1.innerText][1];
  wiki1.innerText = slideheading1.innerText;
  wiki1.href = stars_dataset[1][slideheading1.innerText][2];

  image2.src = "images/sm_bg_anna.jpg";
  slideheading2.innerText = "Anna Kendrick";
  slidetitle2.innerText = stars_dataset[1][slideheading2.innerText][1];
  wiki2.innerText = slideheading2.innerText;
  wiki2.href = stars_dataset[1][slideheading2.innerText][2];

  image3.src = "images/sm_bg_taylor.jpg";
  slideheading3.innerText = "Taylor Swift";
  slidetitle3.innerText = stars_dataset[1][slideheading3.innerText][1];
  wiki3.innerText = slideheading3.innerText;
  wiki3.href = stars_dataset[1][slideheading3.innerText][2];
}
