//Funcionality for carousel
function carousel(dir) {

  let photos = 5

  let init = $("#landing").css("background-image")
  let url = init.substr((init.length - 7), 1);
  let num = parseInt(url);

  if(dir == "r") {
    if(num === photos) {
      num = 0;
    }
    else {
      num = num + 1
    }
    $("#landing").css({
      "background-image" : "url('../images/portfolio/p" + num + ".jpg')"
    })
  }
  if(dir == "l") {
    if(num == 0) {
      num = photos;
    }
    else {
      num = num - 1
    }
    $("#landing").css({
      "background-image" : "url('../images/portfolio/p" + num + ".jpg')"
    })
  }
}

//Show about-me info when clicking logo
function showInfo() {
  if($("#info-div").css("display") == "block") {
    $("#info-div").css({
      "display" : "none"
    })
  }
  else {
    $("#info-div").css({
      "display" : "block"
    })
  }
}


//IMage preloading function with call
function preloadImages() {
  let imgArray = ["p0", "p1", "p2", "p3", "p4", "p5"];

  for(var i = 0; i < imgArray.length; i++) {
    $('<img />').attr('src', "../images/portfolio/" + imgArray[i] + ".jpg").appendTo('body').css('display', 'none');
  }
}

preloadImages();
