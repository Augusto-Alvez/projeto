function toggleMode () {
  const html= document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if(html.classList.contains("light")){
    img.setAttribute("src", "./assets/2o.png")
    img.setAttribute(
      "alt",
      "Foto do Augusto, de óculos de sol e moletom azul num fundo branco."
    )
  }
  else {
    img.setAttribute("src", "./assets/1o.png")
    img.setAttribute(
      "alt",
      "Foto do Augusto, de moletom azul num fundo branco."
    )
  }
}