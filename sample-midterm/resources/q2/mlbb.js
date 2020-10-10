/*
    Name: 
    Email: 
*/

// YOUR CODE GOES HERE
function show() {
  var class_input = document.getElementById("class_input").value;
  var base_url = "http://localhost/is216/sample_midterm/api/hero/";
  var final_url = "";

  if (class_input == "all") {
    final_url = base_url + "read.php";
  } else {
    final_url = base_url + "search.php?c=" + class_input;
  }

  // Step 1
  var request = new XMLHttpRequest();

  // Step 2
  // Register function
  request.onreadystatechange = function () {
    // Step 5
    if (request.readyState == 4 && request.status == 200) {
      // Response is ready
      //console.log(request.responseText);

      // Convert API response to JavaScript JSON object
      var hero_obj = JSON.parse(request.responseText);
      display_hero(hero_obj.records);
    } else if (request.readyState == 4 && request.status != 200) {
      alert("Ouch! No matching heroes found!");
      document.getElementById("class_input").value = "";
      document.getElementById("hero_table").style.display = "none";
    }
  };

  // Step 3
  request.open("GET", final_url, true); // Asynch

  // Step 4
  request.send();
}

function display_hero(hero_obj) {
  var hero_table = document.getElementById("hero_table");
  var str = `<thead class="thead-dark">
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">Image</th>
    <th scope="col">Battle Points</th>
  </thead>
  <tbody class="hero_body">`;

  var ctr = 0;

  for (hero of hero_obj) {
    str += `<tr><td>${hero.id}</td><td>${hero.name}</td><td><img src="../api/images/${hero.img_profile_url}" width="20%" alt="${hero.description}" title="${hero.description}"/><button class="btn btn-warning" data-toggle="modal" data-target="#readmore_modal${ctr}">Read More</button>
    <div class="modal" id="readmore_modal${ctr}">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">${hero.name}</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <!-- Modal body -->
                <div class="modal-body mx-auto">
                  <p>${hero.description}</p>
                </div>
                                                        
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
    </td><td>${hero.purchase.battlepoint_cost}</td></tr>`;

    ctr += 1;
  }

  str += `</tbody></table>`;
  console.log(str);

  hero_table.innerHTML = str;
  hero_table.style.display = "";
}
