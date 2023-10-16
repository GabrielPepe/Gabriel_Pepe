document.addEventListener('DOMContentLoaded', function () {
  var backToTopButton = document.getElementById('back-to-top')

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 800) {
      // Mostrar o botão quando o usuário rolar 800 pixels para baixo
      backToTopButton.style.display = 'block'
    } else {
      backToTopButton.style.display = 'none'
    }
  })

  backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Rolagem suave de volta ao topo
  })
})
