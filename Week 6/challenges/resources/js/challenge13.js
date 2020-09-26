// KrazyStars API v1.0 - Documentation
// http://krazywoman.com/krazystars/

// When the webpage loads
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {
  // YOUR CODE GOES HERE

  // Step 1 - Create a new Request
  var request = new XMLHttpRequest(); // Prep to make an HTTP request

  // Step 2 - Register a function with the Request
  // This function is called 4 times!
  /*
    Ref: https://www.w3schools.com/js/js_ajax_http_response.asp
    readyState
        Holds the status of the XMLHttpRequest.
            0: request not initialized
            1: server connection established
            2: request received
            3: processing request
            4: request finished and response is ready
    status
        200: "OK"
        403: "Forbidden"
        404: "Page not found"
    */

  request.onreadystatechange = function () {
    // Step 5 - Check if response is ready!
    if (this.readyState == 4 && this.status == 200) {
      // Convert responseText to JSON
      var response_json = JSON.parse(this.responseText);

      // Retrieve records (there are 20 items inside)
      star_array = response_json.records; // Array

      var gender = ["Male", "Female"];
      var randomGender = gender[Math.round(Math.random())];

      if (randomGender == "Male") {
        show_male_stars(star_array);
      } else {
        show_female_stars(star_array);
      }
    }
  };

  // Step 3
  // Specify method: GET for retrieval
  // 3rd argument
  //      true (asynchronous) or false (synchronous)
  // We want "asynchronous"
  // --> the user's web browser doesn't need to reload the entire page
  //     when only a small bit of data on the page has changed
  var url = "http://localhost/krazystars/api/star/read.php";
  request.open("GET", url, true);

  // Step 4
  // Haha! We haven't called the API endpoint yet
  // We will now
  request.send();

  // Call API
}

// This function is called when user clicks on "Show Male Stars" button.
function show_male_stars(res) {
  // YOUR CODE GOES HERE
  var ctr = 0;
  var str = "";
  var wikiStr = "";
  var imdbStr = "";

  for (r of res) {
    if (r.gender == "M") {
      if (ctr == 0) {
        str += `<div class="carousel-item active">
        <img id="image${ctr}" src="${r.photo_background_url}" alt=""/>
        <div class="carousel-caption">
        <h2 class="star_h2" id="slide_heading${ctr}" style="padding: 5px; background-color: grey; color: white">${r.fullname}</h2>
        <p id="slide_title${ctr}" style="padding: 5px; background-color: black; color: white">${r.quote}</p></div></div>`;

        wikiStr += `<a id="wiki${ctr}" class="dropdown-item" href="${r.wikipedia_url}" target="_blank">${r.fullname}</a>`;
        imdbStr += `<a id="imdb${ctr}" class="dropdown-item" href="${r.imdb_url}" target="_blank">${r.fullname}</a>`;
      } else {
        str += `<div class="carousel-item">
        <img id="image${ctr}" src="${r.photo_background_url}" alt=""/>
        <div class="carousel-caption">
        <h2 class="star_h2" id="slide_heading${ctr}" style="padding: 5px; background-color: grey; color: white">${r.fullname}</h2>
        <p id="slide_title${ctr}" style="padding: 5px; background-color: black; color: white">${r.quote}</p></div></div>`;

        wikiStr += `<a id="wiki${ctr}" class="dropdown-item" href="${r.wikipedia_url}" target="_blank">${r.fullname}</a>`;
        imdbStr += `<a id="imdb${ctr}" class="dropdown-item" href="${r.imdb_url}" target="_blank">${r.fullname}</a>`;
      }

      ctr++;
    }
  }

  document.getElementById("wiki_links").innerHTML = wikiStr;
  document.getElementById("imdb_links").innerHTML = imdbStr;
  document.getElementById("slide_show").innerHTML = str;
}

// This function is called when user clicks on "Show Female Stars" button.
function show_female_stars(res) {
  // YOUR CODE GOES HERE
  var ctr = 0;
  var str = "";
  var wikiStr = "";
  var imdbStr = "";

  for (r of res) {
    if (r.gender == "F") {
      if (ctr == 0) {
        str += `<div class="carousel-item active">
        <img id="image${ctr}" src="${r.photo_background_url}" alt=""/>
        <div class="carousel-caption">
        <h2 class="star_h2" id="slide_heading${ctr}" style="padding: 5px; background-color: grey; color: white">${r.fullname}</h2>
        <p id="slide_title${ctr}" style="padding: 5px; background-color: black; color: white">${r.quote}</p></div></div>`;

        wikiStr += `<a id="wiki${ctr}" class="dropdown-item" href="${r.wikipedia_url}" target="_blank">${r.fullname}</a>`;
        imdbStr += `<a id="imdb${ctr}" class="dropdown-item" href="${r.imdb_url}" target="_blank">${r.fullname}</a>`;
      } else {
        str += `<div class="carousel-item">
        <img id="image${ctr}" src="${r.photo_background_url}" alt=""/>
        <div class="carousel-caption">
        <h2 class="star_h2" id="slide_heading${ctr}" style="padding: 5px; background-color: grey; color: white">${r.fullname}</h2>
        <p id="slide_title${ctr}" style="padding: 5px; background-color: black; color: white">${r.quote}</p></div></div>`;

        wikiStr += `<a id="wiki${ctr}" class="dropdown-item" href="${r.wikipedia_url}" target="_blank">${r.fullname}</a>`;
        imdbStr += `<a id="imdb${ctr}" class="dropdown-item" href="${r.imdb_url}" target="_blank">${r.fullname}</a>`;
      }
      ctr++;
    }
  }

  document.getElementById("wiki_links").innerHTML = wikiStr;
  document.getElementById("imdb_links").innerHTML = imdbStr;
  document.getElementById("slide_show").innerHTML = str;
}
