$(function() {
  window.shake(function() {
    $('#index').hide()
    $('#container').show()
  })

  var options = {
    reset: true,
    mobile: true
  }

  ScrollReveal(options).reveal('.p2-img', {
    distance: '100px',
    origin: 'left'
  })

  ScrollReveal(options).reveal('.p3-img', {
    distance: '100px',
    origin: 'left'
  })

  ScrollReveal(options).reveal('.p2-text', {
    distance: '100px',
    origin: 'right'
  })

  ScrollReveal(options).reveal('.p4-text', {
    distance: '100px',
    origin: 'left'
  })

  ScrollReveal(options).reveal('.p4-img', {
    distance: '100px',
    origin: 'right'
  })

  ScrollReveal(options).reveal('.p5-img', {
    distance: '100px',
    origin: 'left'
  })

  ScrollReveal(options).reveal('.p5-text', {
    distance: '100px',
    origin: 'right'
  })

  ScrollReveal(options).reveal('.dot-1', {
    distance: '1000px',
    origin: 'top'
  })

  ScrollReveal(options).reveal('.dot-2', {
    distance: '1000px',
    origin: 'top'
  })

  ScrollReveal(options).reveal('.dot-3', {
    distance: '1000px',
    origin: 'top'
  })

  ScrollReveal(options).reveal('.dot-4', {
    distance: '1000px',
    origin: 'top'
  })
})
