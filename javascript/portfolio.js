//links
function openLanding() {
  window.open("./index", "_self");
}

function openAboutme() {
  window.open("./aboutme", "_self");
}

function openBlog() {
  window.open("./Blog/blog-home", "_self");
}

function openContact() {
  window.open("./contact", "_self");
}

function openGitHub() {
  window.open("https://github.com/Ivanr553");
}

function openCodePen() {
  window.open("https://codepen.io/ivanr553/");
}

//control panel functionality

function showWebsites() {
  if($(".websites").css("display") == "none") {
    $(".websites").css({
      "display" : "block"
    })
    $(".applications").css({
      "display" : "none"
    })
    $(".control-panel-nav-bar-slider").css({
      "animation" : "nav-slider-left 800ms forwards"
    })
    $(".control-panel-nav-bar-button-websites").css({
      "color" : "white",
      "cursor" : "default"
    })
    $(".control-panel-nav-bar-button-applications").css({
      "color" : "grey",
      "cursor" : "pointer"
    })
    $(".control-panel-directional-button").css({
      "background-color" : "rgb(27, 46, 79)"
    })
  }
}

function showApplications() {
  if($(".applications").css("display") == "none") {
    $(".applications").css({
      "display" : "block"
    })
    $(".websites").css({
      "display" : "none"
    })
    $(".control-panel-nav-bar-slider").css({
      "animation" : "nav-slider-right 800ms forwards"
    })
    $(".control-panel-nav-bar-button-applications").css({
      "color" : "white",
      "cursor" : "default"
    })
    $(".control-panel-nav-bar-button-websites").css({
      "color" : "grey",
      "cursor" : "pointer"
    })
    $(".control-panel-directional-button").css({
      "background-color" : "rgb(79, 28, 35)"
    })
  }
}
