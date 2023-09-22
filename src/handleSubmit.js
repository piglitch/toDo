import {projectInput, titleInput, descriptionTextarea, notesTextarea, formElement} from './modal';


const projectFactory = () =>{
    
    const displayProjects = () =>{ 

        formElement.addEventListener('submit', (e)=>{
        e.preventDefault();

        /// Project
        const projectArea = document.createElement('div')
        projectArea.textContent = projectInput.value;
        document.querySelector('.projects').appendChild(projectArea)
        
        /// Title
        const titleArea = document.createElement('div')
        titleArea.textContent = titleInput.value;
        projectArea.appendChild(titleArea)
        
        /// Description
        const descArea = document.createElement('div')
        descArea.textContent = descriptionTextarea.value;
        projectArea.appendChild(descArea)
        
        /// Notes
        const notesArea = document.createElement('div')
        notesArea.textContent = notesTextarea.value;
        projectArea.appendChild(notesArea)

        console.log('hi')
        console.log(titleInput.value)
        })
    }
    return {displayProjects}
}

export const newProjectfact = projectFactory()