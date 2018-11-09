$(function() {
  var shaked = false
  var running = false
  window.shake(function() {
    if (shaked) return
    shaked = true
    $('#index').hide()
    $('#container').show()
    setTimeout(function() {
      $('#p-wrap').show()
      run()
      $.scrollTo($('body').height() - window.innerHeight, 8000, {
        easing: 'linear',
        onAfter: function() {},
        step: function(v) {
          if (
            !running &&
            v >
              $('body').height() -
                window.innerHeight -
                $('.p-con-3').height() / 2
          ) {
            running = true
            $('.gif')
              .show()
              .attr(
                'src',
                './images/1.gif?nocache=' + Math.floor(Math.random() * 1000)
              )
            $('#percent').show()
            var n = 1
            var t = setInterval(function() {
              var count = n * 10
              if (n === 10) {
                count = 99
                $('#percent').text(count + '%')
                clearInterval(t)
              } else {
                $('#percent').text(count + '%')
              }
              n++
            }, 200)
          }
        }
      })
    }, 8 * 1000)
  })

  function run() {
    sr.reveal('.p2-img', {
      distance: '100px',
      origin: 'left'
    })

    sr.reveal('.p3-img', {
      distance: '100px',
      origin: 'left'
    })

    sr.reveal('.p2-text', {
      distance: '100px',
      origin: 'right',
      delay: 600
    })

    sr.reveal('.p4-text', {
      distance: '100px',
      origin: 'left'
    })

    sr.reveal('.p4-img', {
      distance: '100px',
      origin: 'right',
      delay: 600
    })

    sr.reveal('.car-img', {
      distance: '100px',
      origin: 'left'
    })

    sr.reveal('.leaf-img', {
      distance: '1000px',
      origin: 'left',
      delay: 600
    })

    sr.reveal('.p5-text', {
      distance: '100px',
      origin: 'right',
      delay: 600
    })

    sr.reveal('.dot', {
      distance: '1000px',
      origin: 'top'
    })
  }
})
