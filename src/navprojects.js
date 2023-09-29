//const prevImgsrc = '<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>'

//import { projectKeys } from "./handleSubmit";

//import {projectInput, titleInput, descriptionTextarea, notesTextarea, formElement} from './modal';
//import projectKeys from './handleSubmit'; 
const prevIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>';

const navprojectFactory = () => {
    
    const navProj = () => {
        const projectKeysJSON = localStorage.getItem('projectKeys');
        const projectKeys = JSON.parse(projectKeysJSON);

        const navBar = document.querySelector('.nav')

        const projectCluster = document.createElement("div")
        projectCluster.classList.add('projectCluster')

        // Project name        
        if (projectKeys != null) {
            for (let i = 0; i < projectKeys.length; i++) {
                const projName = document.createElement("div");
                projName.classList.add('projname');
                projName.textContent = `${projectKeys[i]}`
                const projNameCluster = document.createElement("div");
                projNameCluster.appendChild(projName)
                projNameCluster.classList.add('projNameCluster')
                projectCluster.appendChild(projNameCluster)

                
                /// 
                projNameCluster.addEventListener('click', () => {
                    //const projectKeysJSON = localStorage.getItem('projectKeys');
                    //const projectKeys = JSON.parse(projectKeysJSON);
                    const projectContent = document.querySelector('.projects')
                    projectContent.textContent = '';
                    const projectNameJSON = localStorage.getItem(`${projectKeys[i]}`)
                    const projectNameKeys = JSON.parse(projectNameJSON)

                    const projectNameKeysArray = Object.keys(projectNameKeys)

                        const titleDiv = document.createElement('div')
                        const addTitle = document.createElement('div')
                        addTitle.textContent = '➕'
                        addTitle.classList.add('addTitle')
                        addTitle.addEventListener('click', ()=>{
                            
                        })

                        const titleCluster = document.createElement('div')
                        titleCluster.classList.add('titleCluster')

                        titleCluster.appendChild(titleDiv)
                        titleCluster.appendChild(addTitle)

                        titleDiv.textContent = `${projectNameKeysArray[0]}: ${projectNameKeys.title}`
                        
                        const descDiv = document.createElement('div')
                        descDiv.textContent = `${projectNameKeysArray[1]}: ${projectNameKeys.description}`
                        descDiv.style.marginTop = '20px'

                        const notesDiv = document.createElement('div')
                        notesDiv.textContent = `${projectNameKeysArray[2]}: ${projectNameKeys.notes}`
                        notesDiv.style.marginTop = '10px'

                        const priorityDiv = document.createElement('div')
                        priorityDiv.textContent = `${projectNameKeysArray[3]}: ${projectNameKeys.priority}`
                        priorityDiv.style.marginTop = '10px'

                        projectContent.appendChild(titleCluster)
                        projectContent.appendChild(descDiv)
                        projectContent.appendChild(notesDiv)
                        projectContent.appendChild(priorityDiv)
                }) 
                ////////// Preview ////
                const prev = document.createElement('svg')
                prev.innerHTML = prevIcon;
                prev.classList.add('prev')
                projNameCluster.appendChild(prev)
                prev.addEventListener('click', ()=>{
                    console.log('hfsh')
                })
               
            }        
        }    
        navBar.appendChild(projectCluster);
    }
    return {navProj}
}


export const newProject = navprojectFactory()
