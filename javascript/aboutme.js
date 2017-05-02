function openLanding() {
  window.open("./index.html", "_self");
}

function openPortfolio() {
  window.open("./portfolio.html", "_self");
}

function openBlog() {
  window.open("./Blog/blog-home.html", "_self");
}

function openContact() {
  window.open("./contact.html", "_self");
}

//clear about-me mousdown
$(document).mousedown(function(e) {
  if(!$(".about-me-symbol").is(e.target)) {
      $(".about-me-info").css({
        "display" : "block",
        "animation" : "fade-in 1500ms forwards"
      })
      $(".info").css({
        "display" : "none",
        "animation" : "none"
      })
  }
})

//onclick animations for about-me symbols
$(".trombone").mousedown(function() {
  $(".info").css({
    "display" : "none",
    "animation" : "none"
  })

  $(".trombone-info").css({
    "display" : "block",
    "animation" : "fade-in 1500ms forwards"
  })

  $(".about-me-info").css({
    "display" : "none",
    "animation" : "none"
  })
})

$(".fitness").mousedown(function() {
  $(".info").css({
    "display" : "none",
    "animation" : "none"
  })

  $(".fitness-info").css({
    "display" : "block",
    "animation" : "fade-in 1500ms forwards"
  })
  $(".about-me-info").css({
    "display" : "none",
    "animation" : "none"
  })
})

$(".environment").mousedown(function() {
  $(".info").css({
    "display" : "none",
    "animation" : "none"
  })

  $(".environment-info").css({
    "display" : "block",
    "animation" : "fade-in 1500ms forwards"
  })
  $(".about-me-info").css({
    "display" : "none",
    "animation" : "none"
  })
})
