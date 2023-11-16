document.addEventListener('DOMContentLoaded', function () {
  const imagesData = [
    { src: 'imgs/venice.jpg', alt: 'Venice' },
    { src: 'imgs/rome.jpg', alt: 'Rome' },
    { src: 'imgs/florence.jpg', alt: 'Florence' },
    { src: 'imgs/milan.jpg', alt: 'Milan' },
    { src: 'imgs/venice.jpg', alt: 'Venice' },
    { src: 'imgs/rome.jpg', alt: 'Rome' },
    { src: 'imgs/florence.jpg', alt: 'Florence' },
    { src: 'imgs/milan.jpg', alt: 'Milan' },
    { src: 'imgs/venice.jpg', alt: 'Venice' },
    { src: 'imgs/rome.jpg', alt: 'Rome' },
    { src: 'imgs/florence.jpg', alt: 'Florence' },
    { src: 'imgs/milan.jpg', alt: 'Milan' },
    { src: 'imgs/venice.jpg', alt: 'Venice' },
    { src: 'imgs/rome.jpg', alt: 'Rome' },
    { src: 'imgs/florence.jpg', alt: 'Florence' }
  ]

  const galleryContainer = document.querySelector('.gallery')

  function addImageToGallery(imageData) {
    const link = document.createElement('a')
    link.href = 'Cronograma.html'

    const img = document.createElement('img')
    img.src = imageData.src
    img.alt = imageData.alt
    img.className = 'gallery-img'

    const h4 = document.createElement('h4')
    h4.textContent = imageData.alt

    link.appendChild(img)
    link.appendChild(h4)

    galleryContainer.appendChild(link)
  }
  // Chame a função para transformar a galeria em um layout de grid
  function transformToGrid() {
    galleryContainer.style.display = 'grid'
    galleryContainer.style.gridTemplateColumns =
      'repeat(auto-fill, minmax(200px, 1fr))'
    galleryContainer.style.gridGap = '106px'
  }

  // Adicione uma imagem inicial à galeria
  addImageToGallery(imagesData.shift())

  // Adicione as imagens restantes com intervalos de 1.2s
  transformToGrid()
  const intervalId = setInterval(function () {
    const imageToAdd = imagesData.shift()
    if (imageToAdd) {
      addImageToGallery(imageToAdd)
    } else {
      clearInterval(intervalId) // Para o intervalo quando todas as imagens foram adicionadas
    }
  }, 1200)
})
