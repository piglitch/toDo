import { displayModal } from "./modal"

const newProj = document.createElement("div")
newProj.classList.add('addProj')
newProj.textContent = '➕'
newProj.style.fontSize = '3em'

function displayaddsign(){
    document.querySelector('.nav').appendChild(newProj)
}

export { newProj, displayaddsign, displayModal,  };

