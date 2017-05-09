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
// $(document).mousedown(function(e) {
//   if(!$(".about-me-symbol").is(e.target)) {
//       $(".about-me-info").css({
//         "display" : "block",
//         "animation" : "fade-in 1500ms forwards"
//       })
//       $(".info").css({
//         "display" : "none",
//         "animation" : "none"
//       })
//   }
// })

//onclick animations for about-me symbols
// $(".trombone").mousedown(function() {
//   $(".info").css({
//     "display" : "none",
//     "animation" : "none"
//   })
//
//   $(".trombone-info").css({
//     "display" : "block",
//     "animation" : "fade-in 1500ms forwards"
//   })
//
//   $(".about-me-info").css({
//     "display" : "none",
//     "animation" : "none"
//   })
// })
//
// $(".fitness").mousedown(function() {
//   $(".info").css({
//     "display" : "none",
//     "animation" : "none"
//   })
//
//   $(".fitness-info").css({
//     "display" : "block",
//     "animation" : "fade-in 1500ms forwards"
//   })
//   $(".about-me-info").css({
//     "display" : "none",
//     "animation" : "none"
//   })
// })
//
// $(".environment").mousedown(function() {
//   $(".info").css({
//     "display" : "none",
//     "animation" : "none"
//   })
//
//   $(".environment-info").css({
//     "display" : "block",
//     "animation" : "fade-in 1500ms forwards"
//   })
//   $(".about-me-info").css({
//     "display" : "none",
//     "animation" : "none"
//   })
// })

//make skills draggable
$( () => {
  $(".skill-bubble").draggable({revert: true, containment: ".section-skills-2"});
})

//animate scroll for about me pages
$(window).scroll( () => {
  $(".half-section-landing-left").css({
    "transform" : "translatey("+ ($(window).scrollTop()*2) +"px)"
  })
  $(".half-section-landing-right").css({
    "transform" : "translatey("+ -($(window).scrollTop()/200) +"px)"
  })
  //set skill section to respond to scrollbar with opacity and scale when scrolling up
  if(($(window).scrollTop()/($(window).height()/3)) <= 1) {
    $(".skill-bubble-container").css({
      "opacity" : ($(window).scrollTop()/($(window).height()/3))
    })
    $(".skill-info").css({
      "opacity" : ($(window).scrollTop()/($(window).height()/3))
    })
    $(".section-skills").css({
      "transform" : "scale("+ (0.9 + (($(window).scrollTop()/($(window).height()/3))/10)) +")"
    })
  }
  //reset translate if not scrolling down
  if(($(window).scrollTop()/($(window).height()/3)) <= 1.4){
    $(".skill-bubble-container").css({
      "transform" : "translatex(0px)"
    })
    $(".skill-info").css({
      "transform" : "translatex(0px)"
    })
  }
  //set skill section to respond with x translation when scrolling down
  if(($(window).scrollTop()/($(window).height()/3)) > 1.4 && $(".section-skills").css("display") == "flex") {
      $(".skill-bubble-container").css({
        "transform" : "translatex("+ ((($(window).scrollTop()/($(window).height()/3))-1.4)*$(window).width()*0.7) +"px)",
        "opacity" : 1-((($(window).scrollTop()/($(window).height()/3))-1.4)*1.5)
      })
      $(".skill-info").css({
        "transform" : "translatex("+ -((($(window).scrollTop()/($(window).height()/3))-1.4)*$(window).width()*0.7) +"px)",
        "opacity" : 1-((($(window).scrollTop()/($(window).height()/3))-1.4)*1.5)
      })
  }
  $(".half-section-landing-right").css({
    "opacity" : 1-($(window).scrollTop()/($(window).height()/2))
  })
  $(".half-section-landing-left").css({
    "opacity" : 1-($(window).scrollTop()/($(window).height()/2))
  })
  //begin showing skill section when 1200 scroll down page
  if($(this).scrollTop() > $(window).height()/3 && $(".half-section-landing").css("display") == "block") {
    $("body").css({"overflow-y" : "hidden"})
    setTimeout(function(){
      $(".section-skills").css({
        "display" : "flex",
        "animation" : "fade-in 2s forwards"
      })
    }, 50)

    setTimeout(function(){
      $("body").css({"overflow-y" : "scroll"})
      window.scrollTo(0, $(window).height()/3)
    }, 500)

    $(".half-section-landing").css({
      "display" : "none"
    })
    $(".section-2").css({
      "display" : "flex"
    })
    $(".section-3").css({
      "display" : "flex"
    })
    window.scrollTo(0, $(window).height()/2)
  }
  //return to aboutme landing page when scrolling pup from section-skills
  if($(".section-skills").css("display") == "flex" && $(window).scrollTop() == 0 && $(".section-skills").css("display") == "flex" && $(".half-section-landing").css("display") == "none") {
    $("body").css({"overflow-y" : "scroll"})
      $(".section-skills").css({
        "display" : "none"
      })
      $(".half-section-landing").css({
        "opacity" : "0",
        "display" : "block",
        "animation" : "fade-in 800ms forwards"
      })
      $(".section-2").css({
        "display" : "block"
      })
      $(".section-3").css({
        "display" : "none"
      })
      window.scrollTo(0, 0)
    }
})

//reset scrollTop
$(document).ready( () => {
  setTimeout(function(){window.scrollTo(0, 0)}, 50)
})
