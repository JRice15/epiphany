var openFile = function(event) {
  var input = event.target;

  var title_text = event.target.files[0].name;
  var heading = document.getElementById('heading');
  title_text = title_text.substring(0, title_text.length - 4);
  heading.innerText = title_text;

  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    var content = document.getElementById('content');
    content.innerText = text;
  };

reader.readAsText(input.files[0]);

};