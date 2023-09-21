import {titleInput, descriptionTextarea, notesTextarea, formElement} from './modal'

const projectFactory = (name, description, notes) =>{
    
    const projectDetails = () => {
        /// Title    
        const title = document.querySelector(".projTitle")
        title.textContent = `${name}`

        // Description
        const desc = document.querySelector(".projDesc")
        desc.textContent = `${description}`

        // Notes
        const Notes = document.querySelector(".projNotes")
        Notes.textContent = `${notes}`
    }    
    return {name, description, notes, projectDetails}
}


formElement.addEventListener('submit', (e)=>{
    e.preventDefault();
    const titleName = titleInput.value;
    const descriptionInfo = descriptionTextarea.value
    const notesInfo = notesTextarea.value 
})

export const brushTeeth = projectFactory('gg', 'gg', 'gg');

