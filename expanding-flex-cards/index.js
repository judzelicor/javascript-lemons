const wallpapers = [
"Spy-x-Family.jpeg", 
"Kaguya-sama-Love-is-War.png", 
"Gintama.png",
"Haikyu!!.jpeg",
"My-Hero-Academia.jpeg",
"Detective-Conan.jpeg"]

const cards = document.querySelectorAll(".cards__card")

cards.forEach((card, position) => {
	console.log(wallpapers[position])
	card.style.backgroundImage = `url(./assets/${wallpapers[position]})`

	card.addEventListener("mouseover", () => {
		card.classList.add("active")
	})

	card.addEventListener("mouseout", () => {
		card.classList.remove("active")
	})
	console.log("hello")
})