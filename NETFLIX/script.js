let botao = document.getElementById('botao-pergunta')
let menu = document.getElementById('pergunta')
let img = document.getElementById('img-pergunta')

function show() {
  if (menu.style.display == 'none' || menu.style.display == '') {
    menu.style.display = 'block'
    img.id = 'img-pergunta-girar'
  } else {
    menu.style.display = 'none'
    img.id = 'img-pergunta'
  }
}

botao.addEventListener('click', show)
