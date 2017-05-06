function openLanding() {
  window.open("./index", "_self");
}

function openPortfolio() {
  window.open("./portfolio", "_self");
}

function openBlog() {
  window.open("./Blog/blog-home", "_self");
}

function openContact() {
  window.open("./contact", "_self");
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

//make skills draggable

$( () => {
  $(".skill-bubble").draggable({revert: true, containment: ".section-skills-2"});
})

//animate scroll
$(window).scroll( () => {
  $(".half-section-landing-left").css({
    "transform" : "translatey("+ ($(this).scrollTop()*2) +"px)"
  })
  $(".half-section-landing-right").css({
    "transform" : "translatey("+ $(window).scrollTop()*20 +")"
  })
  if($(this).scrollTop() > 1200) {
    $(".section-skills").css({
      "display" : "flex",
      "animation" : "fade-in 2s forwards"
    })
    $(".half-section-landing").css({
      "display" : "none"
    })
    $(".section-2").css({
      "display" : "none"
    })
    $(window).scrollTop(0)
  }
})
