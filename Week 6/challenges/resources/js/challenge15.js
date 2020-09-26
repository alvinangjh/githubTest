// KrazyMLBB API v1.0 - Documentation
// http://krazywoman.com/krazymlbb/

const YOUTUBE_API_KEY = ""; // Did you get your YouTube API key?

function call_youtube_api(heroName) {
  // Step 1
  var request = new XMLHttpRequest(); // Prep to make an HTTP request

  // Step 2
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Step 5
      var response_json = JSON.parse(this.responseText);
      var result = response_json.items;
      return result[0].id.videoId;
    }
  };

  // Step 3

  var url = "";

  url =
    "https://www.googleapis.com/youtube/v3/search?maxResults=25&q=" +
    heroName +
    "&key=" +
    YOUTUBE_API_KEY;

  request.open("GET", url, true);

  // Step 4
  request.send();
}
// When the webpage loads
function call_api(heroType) {
  // Step 1
  var request = new XMLHttpRequest(); // Prep to make an HTTP request

  // Step 2
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Step 5
      var response_json = JSON.parse(this.responseText);
      var hero_array = response_json.records;
      var heroStr = "";
      var ctr = 0;

      for (hero of hero_array) {
        var videoId = call_youtube_api(hero.name);

        heroStr += `<div class="card mb-3 mx-auto">
              <div class="row no-gutters">
                  <div class="col-md-3">
                      <img src="${hero.img_profile_url}" class="card-img" width="100%" alt="${hero.name}">
                  </div>
                  <div class="col-md-9">
                      <!-- Hero -->
                      <div class="card-body">
                          <h5 class="card-title">${hero.name}</h5>

                          <button type="button" class="btn btn-secondary btn-xs" id="${hero.name}" data-toggle="modal" data-target="#youtube_modal${ctr}">
                          YouTube Videos
                          </button>

                          <div class="modal" id="youtube_modal${ctr}">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">

                                        <!-- Modal Header -->
                                        <div class="modal-header">
                                            <h4 class="modal-title">${hero.name} Gameplay</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        
                                        <!-- Modal body -->
                                        <div class="modal-body mx-auto">
                                            <iframe id="iframe_${ctr}" width="560" height="315" src="https://www.youtube.com/embed/` + videoId + ` frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                                                                
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
      
                          <p class="card-text">${hero.description}</p>
                          
                          <p class="text-center">
                              <button type="button" class="btn mb-1" style="background-color:#ff7002; color: white; width: 220px">
                                  Battlepoint Cost <span class="badge badge-light">${hero.purchase.battlepoint_cost}</span>
                              </button>
      
                              <button type="button" class="btn mb-1" style="background-color:#1326ff; color: white; width: 220px">
                                  Diamond Cost <span class="badge badge-light">${hero.purchase.diamond_cost}</span>
                              </button>
      
                              <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                  Movement Speed <span class="badge badge-light">${hero.stats.movement_speed}</span>
                              </button>
      
                              <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                  Physical Attack <span class="badge badge-light">${hero.stats.physical_attack}</span>
                              </button>
      
                              <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                  Physical Defense <span class="badge badge-light">${hero.stats.physical_defense}</span>
                              </button>
      
                              <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                  Magic Power <span class="badge badge-light">${hero.stats.magic_power}</span>
                              </button>
      
                              <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                  Armor <span class="badge badge-light">${hero.stats.armor}</span>
                              </button>
      
                              <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                  Magic Resistance <span class="badge badge-light">${hero.stats.magic_resistance}</span>
                              </button>
      
                              <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                  HP <span class="badge badge-light">${hero.stats.hp}</span>
                              </button>
      
                              <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                  Mana <span class="badge badge-light">${hero.stats.mana}</span>
                              </button>
      
                              <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                  Attack Speed <span class="badge badge-light">${hero.stats.attack_speed}</span>
                              </button>
      
                              <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                  HP Regen Rate <span class="badge badge-light">${hero.stats.hp_regen_rate}</span>
                              </button>
      
                              <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                  Mana Regen Rate <span class="badge badge-light">${hero.stats.mana_regen_rate}</span>
                              </button>
      
                              <button type="button" class="btn mb-1" style="background-color:#3e3b3a; color: white; width: 220px">
                                  Class <span class="badge badge-light">${hero.class}</span>
                              </button>
      
                          </p>
                      </div> <!-- end of card-body -->
                  </div> <!-- end of col -->
              </div> <!-- end of row -->
          </div>`;
      }

      document.getElementById("hero_cards").innerHTML = heroStr;
    }
  };

  // Step 3
  var url = "";

  if (heroType == "all") {
    url = "http://localhost/krazymlbb/api/hero/read.php"; // all stars
  } else {
    url = "http://localhost/krazymlbb/api/hero/search.php?c=" + heroType; // 'm' or 'f'
  }

  request.open("GET", url, true);

  // Step 4
  request.send();
}

// When the webpage loads
// Display all heroes
function display_default() {
  // Display all heroes
  // YOUR CODE GOES HERE
  call_api("all");
}

// Given a hero_class (tank, fighter, mage, asassin, marksman, support, all)
function show_heroes(hero_class) {
  // if 'tank'
  // only display 'tank' heroes
  // if 'all'
  // display ALL heroes
  // YOUR CODE GOES HERE
  call_api(hero_class);
}
