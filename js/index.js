$(function() {
  window.shake(function() {
    $('#index').hide()
    $('#container').show()
    setTimeout(function() {
      $('#p-wrap').show()
      run()
      $.scrollTo($('body').height() - window.innerHeight, 5000, 'linear')
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

    sr.reveal('.car-img', {
      distance: '100px',
      origin: 'left'
    })

    sr.reveal('.leaf-img', {
      distance: '1000px',
      origin: 'left',
      delay: 200
    })

    sr.reveal('.p5-text', {
      distance: '100px',
      origin: 'right'
    })

    sr.reveal('.dot', {
      distance: '1000px',
      origin: 'top'
    })
  }
})
