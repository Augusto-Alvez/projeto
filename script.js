function toggleMode () {
  const html= document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if(html.classList.contains("light")){
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto do maykebrito, usando óculos preto sorrindo de jaqueta cinza num fundo degradê ciano e rosa."
    )
  }
  else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do maykebrito, usando óculos sorrindo de camisa preta num fundo amarelo."
    )
  }
}