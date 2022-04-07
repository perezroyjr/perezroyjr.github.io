const textDisplay = document.getElementById('text')
const phrases = ['Welcome to my Portfolio', 'My name is<br> Roy Perez.', 'Hello, World!']
let i = 0
let j = 0

let currentPhrase = []
let isDeleting = false

function loop () {
	textDisplay.innerHTML = currentPhrase.join('')

	if( i < phrases.length) { 

		if(!isDeleting && j <= phrases[i].length){ 
			if(phrases[i][j] == '<'){
				j+=4
			}
			currentPhrase.push(phrases[i][j])
			j++	
		}
	
		if(isDeleting && j <= phrases[i].length){
			j = 0
		}

		if(j == phrases[i].length){
			isDeleting = true
		}

		if(isDeleting && j === 0){
			currentPhrase = []
			isDeleting = false
			i++
			if(i == phrases.length){
				i = 0
			}
		}
	}
	setTimeout(loop, 250)
}

loop()