$(function() {
  window.shake(function() {
    $('#index').hide()
    $('#container').show()
    setTimeout(function() {
      $('#p-wrap').show()
      run()
      $.scrollTo($('#p1').height(), 1000, 'linear')
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
      origin: 'right'
    })

    sr.reveal('.p4-text', {
      distance: '100px',
      origin: 'left'
    })

    sr.reveal('.p4-img', {
      distance: '100px',
      origin: 'right'
    })

    sr.reveal('.p5-img', {
      distance: '100px',
      origin: 'left'
    })

    sr.reveal('.p5-text', {
      distance: '100px',
      origin: 'right'
    })

    sr.reveal('.dot-1', {
      distance: '1000px',
      origin: 'top'
    })

    sr.reveal('.dot-2', {
      distance: '1000px',
      origin: 'top'
    })

    sr.reveal('.dot-3', {
      distance: '1000px',
      origin: 'top'
    })

    sr.reveal('.dot-4', {
      distance: '1000px',
      origin: 'top'
    })
  }
})
