$(function() {
  var shaked = false
  window.shake(function() {
    if (shaked) return
    shaked = true
    $('#index').hide()
    $('#container').show()
    setTimeout(function() {
      $('#p-wrap').show()
      run()
      $.scrollTo($('body').height() - window.innerHeight, 8000, 'linear')
    }, 8 * 1000);
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
      delay:600
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
