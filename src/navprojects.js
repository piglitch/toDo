const bin = '<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
const plusIco = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>';

const navprojectFactory = () => {
  const navProj = () => {
    const projectKeysJSON = localStorage.getItem('projectKeys');
    const projectKeys = JSON.parse(projectKeysJSON);

    const navBar = document.querySelector('.nav');

    const projectCluster = document.createElement('div');
    projectCluster.classList.add('projectCluster');

    const prevtitleCluster = document.createElement('div');
    prevtitleCluster.classList.add('prevtitle');

    // Project name
    if (projectKeys != null) {
      for (let i = 0; i < projectKeys.length; i++) {
        const projName = document.createElement('div');
        projName.classList.add('projname');
        // eslint-disable-next-line linebreak-style
        projName.innerHTML = '';
        projName.textContent = '';
        projName.textContent = `${projectKeys[i]}`;
        const projNameCluster = document.createElement('div');
        projNameCluster.appendChild(projName);
        projNameCluster.classList.add('projNameCluster');
        projectCluster.appendChild(projNameCluster);


        const noreload = () => {
          projNameCluster.addEventListener('click', () => {
            const projectContent = document.querySelector('.projects');
            projectContent.textContent = '';
            const projectNameJSON = localStorage.getItem(`${projectKeys[i]}`);
            const projectNameKeys = JSON.parse(projectNameJSON);

            const projectNameKeysArray = Object.keys(projectNameKeys);

            const projectId = document.querySelector('.projectid');
            projectId.textContent = projectKeys[i];

            const titleDiv = document.createElement('div');
            const addTitle = document.createElement('svg');
            addTitle.innerHTML = plusIco;
            addTitle.classList.add('addTitle');
            addTitle.addEventListener('click', () => {
              document.querySelector('#overlay').classList.add('active');
              //    document.querySelector('.modalTitleInput').value = ''
              document.querySelector('.newTitleInputModal').style.display = 'block';
            });
            document.querySelector('.newTitleInputModal').addEventListener('click', ()=>{
              if (document.querySelector('.modalTitleInput').value != '' && !projectNameKeys.task.includes(document.querySelector('.modalTitleInput').value)) {
                projectNameKeys.task.push(document.querySelector('.modalTitleInput').value);
                localStorage.setItem(`${projName.textContent}`, JSON.stringify(projectNameKeys));
                console.log(localStorage.getItem(projName.textContent));
                console.log(projName.textContent, projectNameKeys.task);                
                location.reload();
              }
              if (document.querySelector('.modalTitleInput').value == '') {
                document.querySelector('.modalTitleInput').value != '';
              }
            });

            const titleCluster = document.createElement('div');
            titleCluster.classList.add('titleCluster');

            titleCluster.appendChild(titleDiv);
            titleCluster.appendChild(addTitle);

            const descDiv = document.createElement('div');
            descDiv.textContent = `${projectNameKeysArray[1]}: ${projectNameKeys.description}`;
            descDiv.style.marginTop = '20px';


            const notesDiv = document.createElement('div');
            notesDiv.textContent = `${projectNameKeysArray[2]}: ${projectNameKeys.notes}`;
            notesDiv.style.marginTop = '10px';

            const priorityDiv = document.createElement('div');
            priorityDiv.textContent = `${projectNameKeysArray[3]}: ${projectNameKeys.priority}`;
            priorityDiv.style.marginTop = '10px';

            projectContent.appendChild(titleCluster);
            projectContent.appendChild(document.createElement('br'));

            titleDiv.textContent = `${projectNameKeysArray[0]}: `;
            for (let i = 0; i < projectNameKeys.task.length; i++) {
              const taskCluster = document.createElement('div');
              taskCluster.classList.add('taskcluster');

              const taskDiv = document.createElement('div');
              taskDiv.textContent = projectNameKeys.task[i];
              taskDiv.classList.add('taskdiv');
              taskDiv.id = `taskdiv${i}`;

              const deleteTitleBtn = document.createElement('div');
              deleteTitleBtn.textContent = 'Delete';
              deleteTitleBtn.classList.add('deleteTitlebtn');

              const taskKey = projectNameKeys.task[i];
              const projKey = `${projName.textContent}${i}`;

              deleteTitleBtn.addEventListener('click', (e) => {
                const index = projectNameKeys.task.indexOf(taskDiv.textContent);
                console.log(index, i);
                console.log(projectNameKeys.task);
                e.preventDefault();
                projectNameKeys.task.splice(index, 1);
                localStorage.setItem(`${projName.textContent}`, JSON.stringify(projectNameKeys));
                localStorage.removeItem(projKey);
                localStorage.removeItem(taskKey);
                taskCluster.remove();
              });

              const checklist = document.createElement('div');
              checklist.classList.add('check');

              let checklistObj = JSON.parse(localStorage.getItem(projKey));

              if (checklistObj == null) {
                checklistObj = {};
              }

              console.log(`${checklistObj}here`);
              const taskValue = checklistObj[taskKey] || '🔴';
              checklist.textContent = taskValue;
              checklist.style.fontSize = '12px';

              checklist.addEventListener('click', () => {
                if (checklist.textContent == '🟢') {
                  checklist.textContent = '🔴';
                  checklistObj[taskKey] = checklist.textContent;
                  checklist.style.fontSize = '12px';
                  localStorage.setItem(projKey, JSON.stringify(checklistObj));
                  return;
                }
                checklist.textContent = '🟢';
                checklist.style.fontSize = '12px';
                checklistObj[taskKey] = checklist.textContent;
                localStorage.setItem(projKey, JSON.stringify(checklistObj));
              });

              localStorage.setItem(projKey, JSON.stringify(checklistObj));


              taskCluster.appendChild(taskDiv);
              taskCluster.appendChild(checklist);
              taskCluster.appendChild(deleteTitleBtn);

              projectContent.appendChild(taskCluster);
            }
            projectContent.appendChild(descDiv);
            projectContent.appendChild(notesDiv);
            projectContent.appendChild(priorityDiv);
          });
        };

        noreload();
        // Delete a project
        const deleteProjectBtn = document.createElement('svg');
        deleteProjectBtn.innerHTML = bin;
        deleteProjectBtn.classList.add('deleteProjectbtn');
        deleteProjectBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          console.log(projectKeys[i]);
          console.log(localStorage.removeItem(projectKeys[i]));
          projectKeys.splice(i, 1);
          console.log(projectKeys[i], i);
          localStorage.setItem('projectKeys', JSON.stringify(projectKeys));
          projNameCluster.innerHTML = '';
          console.log(projectKeys[i]);
          location.reload();
        });
        projNameCluster.appendChild(deleteProjectBtn);
      }
    }
    if (projectKeys == null || projectKeys == '') {
      const clickHere = document.createElement('div');
      clickHere.style.position = 'absolute';
      clickHere.textContent = '<--------- Click here to add a new project';
      clickHere.style.marginLeft = '210px';
      clickHere.style.marginTop = '710px';
      document.querySelector('body').appendChild(clickHere);
    }
    navBar.appendChild(projectCluster);
  };
  return {navProj};
};


export const newProject = navprojectFactory();
