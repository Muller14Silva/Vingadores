let time = 3000,
currentImageIndex = 0,
images = document
        .querySelectorAll("#slider img")
max = images.length;

function start() {
	setInterval(() => {
		 //trocar imagem
     nextImage()
		
	}, time)
	
}


// criando a função para trocar a imagem
function nextImage(){
  
images[currentImageIndex].classList.remove("selected")  //remove as classes para rodar o codigo novamente

	currentImageIndex ++  // fazer com que o current adicione a classe sempre na imagem seguinte
	if(currentImageIndex >= max)  //faz com que troque de imagem até o maximo de imagem que tiver e volta pro zero
		currentImageIndex = 0  
     images[currentImageIndex].classList.add("selected")
     
}
window.addEventListener("load", start)