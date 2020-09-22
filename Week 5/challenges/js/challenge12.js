// [IMPORTANT]
// DO NOT MODIFY challenge12.html content
// YOU MUST WORK WITH WHAT IS GIVEN TO YOU

// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function highlight_words(e) {
  // YOUR CODE GOES HERE
  var userInput = window.prompt(
    "Enter word length (words longer than this length will be highlighted for you)"
  );

  var list = document.getElementsByClassName("list-unstyled");

  for (listItem of list) {
    var listText = listItem.getElementsByTagName("p")[0].innerText.split(" ");

    for (i = 0; i < listText.length; i++) {
      if (listText[i].length >= userInput) {
        listText[i] =
          "<span style='background-color: yellow'>" + listText[i] + "</span>";
      } else {
        if (listText[i].includes("span")) {
          listText[i].replace(/<\/?span[^>]*>/g, "");
        }
      }
    }

    var newListText = listText.join(" ");

    listItem.getElementsByTagName("p")[0].innerHTML = newListText;
  }
}

// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_num_words() {
  // YOUR CODE GOES HERE
  var list = document.getElementsByClassName("list-unstyled");

  for (listItem of list) {
    var listText = listItem.getElementsByTagName("p")[0].innerText.split(" ");
    var listSpan = listItem.getElementsByTagName("span")[0];

    var wordCount = document.createTextNode("(" + listText.length + " words)");

    listSpan.setAttribute("style", "font-weight: bold;");

    if (listSpan.innerText.length == 0) {
      listSpan.append(wordCount);
    } else {
      listSpan.innerText = "";
    }
  }
}

// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_emoticons() {
  // YOUR CODE GOES HERE
  var list = document.getElementsByClassName("list-unstyled");

  var punctMark = { ",": "\u2B50", "?": "\u2753", "!": "\u2757" };
  var reversePunct = { "\u2B50": ",", "\u2753": "?", "\u2757": "!" };
  var punctUTF = ["\u2B50", "\u2753", "\u2757"];

  for (listItem of list) {
    var listText = listItem.getElementsByTagName("p")[0].innerText;

    if (
      punctUTF.some((text) =>
        listItem.getElementsByTagName("p")[0].innerHTML.includes(text)
      )
    ) {
      listItem.getElementsByTagName(
        "p"
      )[0].innerHTML = listItem
        .getElementsByTagName("p")[0]
        .innerHTML.replace(
          /\u2B50|\u2753|\u2757/gi,
          (punct) => reversePunct[punct]
        );
    } else {
      listItem.getElementsByTagName("p")[0].innerHTML = listText.replace(
        /[,?!]/g,
        (punct) => punctMark[punct]
      );
    }
  }
}
