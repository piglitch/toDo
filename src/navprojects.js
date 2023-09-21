const prevImgsrc = '<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>'


const navprojectFactory = (projectName, name, description, dueDate, priority, notes) =>{
    
    const navProj = () => {
        const navBar = document.querySelector('.nav')

        const projectCluster = document.createElement("div")
        projectCluster.classList.add('projectCluster')

        // Project name
        const projName = document.createElement("div")
        projName.classList.add('projname')
        projName.textContent = `${projectName}`

        // Except projname
        const exceptProjname = document.createElement("div")
        exceptProjname.classList.add('exProjname')

        /// Title
        const title = document.createElement("div")
        title.classList.add('Title')
        title.textContent = `${name}`

        // Checklist
        const checklist = document.createElement("div")
        checklist.classList.add('check')
        checklist.textContent = "🔴"        
        checklist.addEventListener('click', () => {
        if (checklist.textContent == "🟢") {
            checklist.textContent = "🔴";
            return
        }
        checklist.textContent = "🟢"; 
        })        

        // Description
        const desc = document.createElement("div")
        desc.classList.add('desc')
        desc.textContent = `${description}`

        // DueDate 
        const due = document.createElement("div")
        due.classList.add('due')
        due.textContent = `${dueDate}`

        // Priority
        const prior = document.createElement("div")
        prior.classList.add('prior')
        prior.textContent = `${priority}`

        // Notes
        const note = document.createElement("div")
        note.classList.add('note')
        note.textContent = `${notes}`

        title.appendChild(checklist)

        exceptProjname.appendChild(title)
        exceptProjname.appendChild(desc)
        exceptProjname.appendChild(due) 
        exceptProjname.appendChild(prior)
        exceptProjname.appendChild(note)
       
        // Setting exceptProjname's visibility to none
        exceptProjname.style.display = 'none'; 
        const prev = document.createElement('div')
        prev.classList.add('prev')
        const prevImg = document.createElement("svg")
        prevImg.innerHTML = `${prevImgsrc}`;
        prevImg.classList.add('prevImg')
        prev.appendChild(prevImg)
        prev.addEventListener('click', () => {
            if(exceptProjname.style.display == 'none'){
                exceptProjname.style.display = 'block';
                return
            } 
            exceptProjname.style.display = 'none'; 
        })               

        const preiewCluster = document.createElement('div')
        preiewCluster.classList.add('prevcluster')
        preiewCluster.appendChild(projName)
        preiewCluster.appendChild(prev)
        projectCluster.appendChild(preiewCluster)
        projectCluster.appendChild(exceptProjname)
        navBar.appendChild(projectCluster);

    }
    return {projectName, name, description, dueDate, priority, notes, navProj}
}


export const newProject = navprojectFactory(`Don't die`, 'brush', 'get through the day', '27.09.23', '🚩', 'NA')
export const learncoding = navprojectFactory('Learn coding', 'Choose a language', 'Need this for work', '27.10.23', '⏱️', 'Studied time complexity')