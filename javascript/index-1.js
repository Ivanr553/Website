var State = {
  view: 'landing',
  animating: false
}

// $(window).on('mousewheel DOMMouseScroll', function(event) {

//   if(State.animating) {
//     return
//   }

//   if(event.originalEvent.wheelDeltaY < 0 && event.originalEvent.wheelDeltaX === 0) {

//     State.animating = true
//     Animations.next()

//     setTimeout(function() {
//       State.animating = false
//     }, 5000)

//   }

//   if(event.originalEvent.wheelDeltaY > 0 && event.originalEvent.wheelDeltaX === 0) {

//     State.animating = true
//     Animations.previous()

//     setTimeout(function() {
//       State.animating = false
//     }, 5000)

//   }

// })


var Animations = {

  enter: {

    landing: function() {
      setTimeout(
        function() {
          $('#landing').css({
            display: 'block',
            animaiton: 'fade-in 1s forwards'
          })
          setTimeout(function(){
            $('#landing-bottom-text').css({
              opacity: 0.7,
              animation: 'pulse 2s infinite'
            })
          }, 1200)
          State.view = 'landing'
        },
        1500
      )
    },

    projects: function() {
      setTimeout(
        function() {
          $('#projects').css({
            display: 'block',
            animation: 'fade-in 1s forwards'
          })
          // $('body').css({
          //   animation: 'projects-background 1s forwards'
          // })
          State.view = 'projects'          
        },
        1500
      )
    }



  },

  exit: {

    default: function() {

      if(State.view === 'landing') {
        Animations.exit.landing()
      }

      if(State.view === 'projects') {
        Animations.exit.projects()
      }

      if(State.view === 'about') {
        Animations.exit.about()
      }

      if(State.view === 'contact') {
        Animations.exit.contact()
      }
 
    },

    landing: function() {

      $('#landing-center-text').css({
        animation: 'fade-up 2s linear forwards'
      })
      $('#portrait-wrapper').css({
        opacity: 1,
        animation: 'fade-up 2s linear forwards',
        animationDelay: '0.4s'
      })
      $('#landing-bottom-text').css({
        animation: 'fade-out 1s forwards'
      })
      $('.landing-png').css({
        opacity: 0.2,
        animation: 'fade-out-png 1s forwards',
        animationDelay: '0.5s'
      })

      setTimeout(
        function() {
          $('#landing').css({display: 'none'})
          $('#landing-center-text').css({
            opacity: 0,
            animation: 'fade-in 1s forwards'
          })
          $('#portrait-wrapper').css({
            opacity: 0,
            animation: 'fade-in 1s forwards',
            animationDelay: 0
          })
          $('#landing-bottom-text').css({
            opacity: 0,
            animation: 'fade-in 1s forwards'
          })
          $('.landing-png').css({
            animation: 'fade-in-png 1s forwards',
            opacity: 0,
            animationDelay: '0.2s'
          })
        }, 1500)

    },

    projects: function() {
      $('#projects').css({
        animation: 'fade-out 1.5s forwards'
      })

      setTimeout(
        function() {
          $('#projects').css({display: 'none'})
      }, 1500)
      
    }

  },

  next: function() {

    if(State.view === 'landing') {
      Animations.exit.landing()
      Animations.enter.projects()
    }

    if(State.view === 'contact') {
      return
    }

  },

  previous: function() {

    // if(State.view === 'landing'){
    //   return
    // }

    // if(State.view === 'projects') {
    //   Animations.exit.projects()
    //   Animations.enter.landing()
    // }

  }

}


var Open =  {

  landing: function() {

    if(State.view === 'landing') {
      return
    }

    State.animating = true
    Animations.exit.default()
    Animations.enter.landing()

    setTimeout(function() {
      State.animating = false
    }, 5000)

  },

  projects: function() {

    if(State.view === 'projects') {
      return
    }

    State.animating = true
    Animations.exit.default()
    Animations.enter.projects()

    setTimeout(function() {
      State.animating = false
    }, 5000)

  }

}


//Links
function openCarla() {
  window.open("http://carlakunkelweb.github.io/website/")
}

function openkmp() {
  window.open("https://keep-me-posted.herokuapp.com/")
}