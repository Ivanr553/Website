//SCROLL TO FUNCTIONS

function scrollToBio() {
  $("body").animate({ scrollTop: $(".section-about-me").offset().top}, 1500);
}

function scrollToWebsites() {
  $("body").animate({ scrollTop: $(".section-web").offset().top}, 3000);
}

function scrollToApplications() {
  $("body").animate({ scrollTop: $(".section-apps").offset().top}, 4000);
}

function scrollToBlog() {
  $("body").animate({ scrollTop: $(".section-blog-center").offset().top}, 5000);
}

function scrollToContact() {
  $("body").animate({ scrollTop: $(".section-contact").offset().top}, 6000);
}
function backToTop() {
  $("body").animate({ scrollTop: 0}, 2500)
}


//OPEN WEBSITE FUNCTIONS

function openCarla() {
  window.open("https://carlakunkelweb.github.io/website/");
}

function openTokiwa() {
  window.open("http://www.ivanraffucci.tech/Tokiwa/index.html");
}

function openRaincheck() {
  window.open("https://frozen-springs-75857.herokuapp.com/");
}

function openGitHub() {
  window.open("https://github.com/Ivanr553");
}

function openCodePen() {
  window.open("https://codepen.io/ivanr553/");
}

//BLOG OVERFLOW FUNCTION

function allowOverflow(element) {
  if(element.style.overflowY == "hidden") {
    element.style.overflowY = "scroll";
  }
  else {
    element.style.overflowY = "hidden";
  }
}


//GLOBAL VARS TO CHECK IF ELEMENT HAS BEEN OPENED

let openAboutMeCheck = "false";
let openWebsiteCheck = "false";
let openAppsCheck = "false";
let openBlogCheck = "false";


//CALLING ANIMATION FUNCTIONS

$(window).scroll(function() {
  let wHeight = $(window).height();
  let scrollT = $(this).scrollTop();

    $(".about-me-info").css({
      "transform" : "translate(0px, "+ scrollT /3 +"px)"
    })
    $(".about-me-span").each(function() {
      if($(".about-me-span").css("font-size") < 12) {
        $("about-me-span").css("font-size") = 12;
      }
    })

  if(scrollT > ($(".section-about-me").offset().top)*0.7 && scrollT < ($(".section-web").offset().top*0.5) && openAboutMeCheck === "false") {
    openAboutMe();
    openAboutMeCheck = "true";
  }
  if(scrollT < ($(".section-about-me").offset().top)*1.2) {
    $("#back-to-top").css({
      "display" : "none"
    })
  }
  if(scrollT > ($(".section-about-me").offset().top)*1.2) {
    $("#back-to-top").css({
      "display" : "flex",
      "animation" : "fade-in 1s forwards"
    })
  }
  if(scrollT > ($(".section-web").offset().top)*0.9 && scrollT < ($(".section-apps").offset().top)*0.7 && openWebsiteCheck === "false") {
    setTimeout(function(){return openWebsiteSection()}, 600);
    openWebsiteCheck = "true";
  }
  if(scrollT > ($(".section-apps").offset().top)*0.9 && scrollT < ($(".section-blog-center").offset().top)*0.8 && openAppsCheck === "false") {
    setTimeout(function(){return openAppsSection()}, 600);
    openAppsCheck = "true";
  }
  if(scrollT > ($(".section-blog-center").offset().top)*0.95 && scrollT < ($(".section-contact").offset().top)*0.85 && openBlogCheck === "false") {
    setTimeout(function(){return openBlogSection()}, 600)
    openBlogCheck = "true";
  }
  if(scrollT > ($(".section-contact").offset().top)*0.9) {
    setTimeout(function(){return openContactSection()}, 600)
  }
})


//ABOUT ME SECTION FUNCTIONS

function openAboutMe() {
  $(".about-me-title").each(function() {
    $(this).css({
      "animation" : "drop-down-fade 2s forwards"
    })
  })
  $(".about-me-info").each(function() {
    $(this).css({
      "animation" : "fade-in 2s forwards",
      "animation-delay" : "1s"
    })
  })
}


//WEBSITE SECTION FUNCTINOS

function openWebsiteSection() {
  $(".section-web-title").each(function() {
    $(this).css({
      "animation" : "slide-up 4s forwards",
      "position" : "absolute"
    })
  })
setTimeout(function(){return showWebsites()}, 4000)
}

function showWebsites() {
  $("#carla").css({
    "display" : "flex",
    "animation" : "slide-in-left 1.5s forwards"
  });
  $("#tokiwa").css({
    "display" : "flex",
    "animation" : "slide-in-right 1.5s forwards"
  });
}


//WEB APP SECTION FUNCTIONS

function openAppsSection() {
  $("#application-title").css({
    "animation" : "slide-up 4s forwards",
    "position" : "absolute"
  })
  $(".bubble").each(function() {
    $(this).css({
      "animation" : "fade-in-bubble 4.7s forwards",
      "display" : "flex",
    })
  })
  setTimeout(function(){return addHoverAnim()}, 3500)
}

function addHoverAnim() {
  $(".bubble").each(function() {
    $(this).hover(function(){
      $(this).css({
        "animation" : "app-hover 500ms forwards",
        "cursor" : "pointer"
      })
    })
    $(this).mouseout(function(){
      $(this).css({
        "animation" : "app-hover-off 500ms forwards"
      })
    })
  })
}

function openRaincheckInfo() {
  $(".information-container").each(function() {
    $(this).css({
      "display" : "flex",
      "animation" : "fade-in 1s forwards",
      "animation-delay" : "1s"
    })
  })
  $(".bubble-wrap").each(function() {
    $(this).css({
      "animation" : "move-left 1.5s forwards"
    })
  })
  setTimeout(function(){return $("#raincheck").attr("onclick", "openRaincheck()")}, 2000);
}


//BLOG SECTION FUNCTIONS

function openBlogSection() {
  $(".blog-title").each(function() {
    $(this).css({
      "animation" : "slide-up 4s forwards"
    })
  })
  setTimeout(function(){return showBlogInfo()}, 3500);
}

function showBlogInfo() {
  $(".blog-info").each(function() {
    $(this).css({
      "display" : "block",
      "animation" : "fade-in 1s forwards"
    })
  })
}


//CONTACT SECTION FUNCTIONS

function openContactSection() {
  $(".contact-title").each(function() {
    $(this).css({
      "animation" : "fade-left 2.6s forwards"
    })
  })
  $(".contact-info").each(function() {
    $(this).css({
      "animation" : "fade-left 2.4s forwards",
      "animation-delay" : "1.5s"
    })
  })
  $(".contact-info-bottom").each(function() {
    $(this).css({
      "display" : "block",
      "animation" : "fade-in 2s forwards",
      "animation-delay" : "3s"
    })
  })
}
