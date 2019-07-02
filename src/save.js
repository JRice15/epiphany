// EPIPHANY
// v1
// JULIAN RICE

// Programs functionality of the save button

function create_download() {
  localStorage["title"] = document.getElementById("heading").innerText; // heading div
  localStorage["text"] = document.getElementById("content").innerText; // content div
  var link = document.getElementById("save");
  var file = new Blob([localStorage["text"]], {type: 'text/plain'});
  link.href = URL.createObjectURL(file);
  link.download = localStorage["title"];
}

create_download();