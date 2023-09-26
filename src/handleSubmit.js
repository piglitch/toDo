import {projectInput, titleInput, descriptionTextarea, notesTextarea, formElement} from './modal';

//const projectKeysJSON = localStorage.getItem('projectKeys');
//const projectKeys = JSON.parse(projectKeysJSON)

let projectKeys = JSON.parse(localStorage.getItem('projectKeys')) || [];

const projectFactory = () =>{
   
    const displayProjects = () =>{ 

        formElement.addEventListener('submit', ()=>{
        //e.preventDefault();        
        
        projectKeys.push(projectInput.value)

        /// Save to localStorage
        localStorage.setItem(`${projectInput.value}`, JSON.stringify({
//            project: projectInput.value,
            title: titleInput.value,
            description: descriptionTextarea.value,
            notes: notesTextarea.value
        }));
        localStorage.setItem('projectKeys', JSON.stringify(projectKeys))
        })
    }
    return {displayProjects, projectKeys}
}

export {projectKeys}; 
export const newProjectfact = projectFactory();