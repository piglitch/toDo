import { newTask } from "./addNewTitle";

const prevIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>';
const bin = '<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>'
const plusIco = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>'

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

            //   projectContent.appendChild(projName)

                
                /// 
                projNameCluster.addEventListener('click', () => {
                    //const projectKeysJSON = localStorage.getItem('projectKeys');
                    //const projectKeys = JSON.parse(projectKeysJSON);
                    const projectContent = document.querySelector('.projects')
                    projectContent.textContent = '';
                    const projectNameJSON = localStorage.getItem(`${projectKeys[i]}`)
                    const projectNameKeys = JSON.parse(projectNameJSON)

                    const projectNameKeysArray = Object.keys(projectNameKeys)

                    const projectId = document.querySelector('.projectid')
                    projectId.textContent = projectKeys[i]

                    const titleDiv = document.createElement('div')
                    const addTitle = document.createElement('svg')
                    addTitle.innerHTML = plusIco
                    addTitle.classList.add('addTitle')
                    addTitle.addEventListener('click', () => {
                        document.querySelector('#overlay').classList.add('active')                         
                        newTask.addNewTask()
                        document.querySelector('.newTitleInputModal').addEventListener('submit', ()=>{
                                    
                            projectNameKeys.task.push(document.querySelector('.modalTitleInput').value);
                            localStorage.setItem(`${projName.textContent}`, JSON.stringify(projectNameKeys));
                            console.log(localStorage.getItem(projName.textContent))
                            console.log(projName.textContent, projectNameKeys.task)
                        })
                    })

                    const titleCluster = document.createElement('div')
                    titleCluster.classList.add('titleCluster')

                    titleCluster.appendChild(titleDiv)
                    titleCluster.appendChild(addTitle)
                        
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
                    projectContent.appendChild(document.createElement('br'))
                                        
                    titleDiv.textContent = `${projectNameKeysArray[0]}: `
                    for (let i = 0; i < projectNameKeys.task.length; i++) {
                        const taskCluster = document.createElement('div')
                        taskCluster.classList.add('taskcluster')

                        const taskDiv = document.createElement('div')
                        taskDiv.textContent = projectNameKeys.task[i]
                        taskDiv.classList.add('taskdiv')

                        const deleteTitleBtn = document.createElement('div')
                        deleteTitleBtn.textContent = 'Delete'
                        deleteTitleBtn.classList.add('deleteTitlebtn')
                        
                        deleteTitleBtn.addEventListener('click', (e) => {
                            
                            console.log(projectNameKeys.task)
                            projectNameKeys.task.splice(i, 1)
                            console.log(projectNameKeys.task)
                            localStorage.setItem(`${projName.textContent}`, JSON.stringify(projectNameKeys));
                        })

                        const checklist = document.createElement("div")
                        checklist.classList.add('check')

                        
                        const taskKey = projectNameKeys.task[i];
                        const projKey = `${projName.textContent}${i}`;
                        
                        let checklistObj = JSON.parse(localStorage.getItem(projKey));

                        if(checklistObj == null){
                            checklistObj = {};
                        //    console.log(`${checklistObj}here`);
                        }
                        console.log(`${checklistObj}here`)
                        const taskValue = checklistObj[taskKey] || '🔴';
                        checklist.textContent = taskValue;

                        checklist.addEventListener('click', () => {
                            if (checklist.textContent == "🟢") {
                                checklist.textContent = "🔴";
                                checklistObj[taskKey] = checklist.textContent;
                                localStorage.setItem(projKey, JSON.stringify(checklistObj));
                                return;
                            }
                            checklist.textContent = "🟢"; 
                            checklistObj[taskKey] = checklist.textContent;
                            localStorage.setItem(projKey, JSON.stringify(checklistObj));
                        });

                        localStorage.setItem(projKey, JSON.stringify(checklistObj));


                        taskCluster.appendChild(taskDiv)
                        taskCluster.appendChild(checklist)
                        taskCluster.appendChild(deleteTitleBtn)
                     
                        projectContent.appendChild(taskCluster)                       
                    }
                    projectContent.appendChild(descDiv)
                    projectContent.appendChild(notesDiv)
                    projectContent.appendChild(priorityDiv)
                }) 
                ////////// Preview ////
                const prev = document.createElement('svg')
                prev.innerHTML = prevIcon;
                prev.classList.add('prev')
                projNameCluster.appendChild(prev)
                prev.addEventListener('click', (e)=>{
                    e.stopPropagation()
                    console.log(`${i}hi`)
                })

                // Delete a project
                const deleteProjectBtn = document.createElement('svg')
                deleteProjectBtn.innerHTML = bin;
                deleteProjectBtn.classList.add('deleteProjectbtn')                
                deleteProjectBtn.addEventListener('click', (e) => {      
                    e.stopPropagation()              
                    console.log(projectKeys[i])
                    projectKeys.splice(i, 1)
                    console.log(projectKeys[i])
                    localStorage.setItem('projectKeys', JSON.stringify(projectKeys));
                }) 
                projNameCluster.appendChild(deleteProjectBtn)
                
            }        
        }    
        navBar.appendChild(projectCluster);
    }
    return {navProj}
}


export const newProject = navprojectFactory()
