// EPIPHANY
// v1
// JULIAN RICE

// Writes text to local storage each second, and colorizes words

// var pos = require('pos');

document.getElementById("heading").innerText = "Untitled"; 
document.getElementById("content").innerText = ""; 
// document.getElementById("dev-output").innerText = "dev output test"


// function rand(min, max) {
//   return parseInt(Math.round(min + Math.random() * (max - min)));
// }


setInterval(function() {
  // fuction that is saving the innerText of the div
  create_download();

  // var content = document.getElementById("content").innerText;
  // // var last_ind = Math.max(content.lastIndexOf(" "), content.lastIndexOf("."), content.lastIndexOf("\n"));
  // // var complete_content = content.substring(0, last_ind + 1);

  // // parts of speech
  // var words = new pos.Lexer().lex(content);
  // var tagger = new pos.Tagger();
  // var taggedWords = tagger.tag(words);

  // document.getElementById("dev-output").innerText = taggedWords.toString();

  // for (i in taggedWords) {
  //     var taggedWord = taggedWords[i];
  //     var word = taggedWord[0];
  //     var tag = taggedWord[1];
  //     document.getElementById("dev-output").innerText = taggedWord;

  // }


  //   var words = $('#content').blast({
  //     delimiter: 'word', 
  //     returnGenerated: false
  //     })
  //   words.each(function() {
  //     $(this).css('color', 
  //       'rgb(' + rand(0, 255) + ',' + rand(0, 255) + ',' + rand(0, 255) + ')');
  //     });

  // alert("looped");


}, 5000);