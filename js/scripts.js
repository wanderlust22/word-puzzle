$(document).ready(function(){
  $("form.sentence").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#entrySentence").val();
    var arrLetters = userInput.split('');
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    for (var i = 0; i < arrLetters.length; i++){
      for (var j = 0; j < vowels.length; j++){
        if (arrLetters[i] === vowels[j]){
          arrLetters.splice(i, 1, "-");
          var finalSentence = arrLetters.join("");
        }
      }
    }
    $("#newSentence").text(finalSentence);
    $(".hidden-results").show();
    
  });
});
