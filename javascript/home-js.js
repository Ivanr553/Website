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

//GLOBAL VARS TO CHECK IF ELEMENT HAS BEEN OPENED

let openAboutMeCheck = "false";
let openWebsiteCheck = "false";
let openAppsCheck = "false";
let openBlogCheck = "false";
let openContactCheck = "false";


//VAR TO CHECK FOR PREVIOUS SECTION TRANSLATED
let previous = "landing";


//TRANSLATE PAGE LEFT

function translateLeft(section) {

  //CHECKING SECTION TO PROPERLY TRANSLATE
  if(previous == section) {
    return;
  }
  if(section != "landing") {
    $("." + section).each(function() {
      $(this).css({
        "animation" : "translate-left 2s forwards",
        "z-index" : "450"
      })
    })
  }
  if(section == "landing") {
    $("." + section).each(function() {
      $(this).css({
        "animation" : "translate-left-landing 2s forwards",
        "z-index" : "450"
      })
    })
  }
  if(previous != "landing") {
    $("." + previous).each(function() {
      $(this).css({
        "animation" : "translate-left-more 2s forwards"
      })
    })
  }
  if(previous == "landing") {
    $("." + previous).each(function() {
      $(this).css({
        "animation" : "translate-left 2s forwards"
      })
    })
  }

  //CALLING NAV BAR ANIMATIONS
  if(section == "landing") {
    animateNavBar("landing-sym");
  }
  if(section == "section-about-me") {
    animateNavBar("about-sym");
  }
  if(section == "section-web") {
    animateNavBar("websites-sym");
  }
  if(section == "section-apps") {
    animateNavBar("apps-sym");
  }
  if(section == "section-blog") {
    animateNavBar("blog-sym");
  }
  if(section == "section-contact") {
    animateNavBar("contact-sym");
  }

  //CALLING ANIMATIONS DEPENDING ON SECTION SELECTED
  if(section == "section-about-me" && openAboutMeCheck === "false") {
    setTimeout(function(){return openAboutMe()}, 2000);
    openAboutMeCheck = "true";
  }
  if(section == "section-web" && openWebsiteCheck === "false") {
    setTimeout(function(){return openWebsiteSection()}, 2000);
    openWebsiteCheck = "true";
  }
  if(section == "section-apps" && openAppsCheck === "false") {
    setTimeout(function(){return openAppsSection()}, 2000);
    openAppsCheck = "true";
  }
  if(section == "section-blog" && openBlogCheck === "false") {
    setTimeout(function(){return openBlogSection()}, 2000);
    openBlogCheck = "true";
  }
  if(section == "section-contact" && openContactCheck === "false") {
    setTimeout(function(){return openContactSection()}, 2000);
    openContactCheck = "true";
  }

  //SETTING GLOBAL VAR PREVIOUS TO STORE PREVIOUS SECTION
  previous = section;
}


//ANIMATION FUNCTION

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

function animateNavBar(inputClass) {
  $(".symbol").each(function() {
    if(!($(this).hasClass(inputClass))) {
      $(this).css({
        "cursor" : "pointer",
        "border-color" : "rgba(255, 255, 255, 0)"
      })
      $(this).hover(function(){
        $(this).addClass("sym-hover");
        $(this).removeClass("sym-hover-off");
      }, function() {
        $(this).removeClass("sym-hover");
        $(this).addClass("sym-hover-off");
      })
    }
    else {
      $(this).removeClass("sym-hover-off");
      $(this).removeClass("sym-hover");
      $(this).hover(function(){
        $(this).removeClass("sym-hover-off");
        $(this).removeClass("sym-hover");
      })
      $(this).css({
        "cursor" : "default",
        "border-color" : "rgba(255, 255, 255, 0.6)"
      })

    }
  });
}

//CALL FUNCTION INITIALLY TO GENERATE HOVER ANIMATIONS
animateNavBar("landing-sym")
