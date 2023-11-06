import {projectInput, titleInput, descriptionTextarea, notesTextarea, formElement, high, mid, low} from './modal';

const projectKeys = JSON.parse(localStorage.getItem('projectKeys')) || [];
// let titleList = JSON.parse(localStorage.getItem('titleList')) || [];
const projectFactory = () => {
  const displayProjects = () => {
    formElement.addEventListener('submit', (e)=>{
      // e.preventDefault();
      projectKeys.push(projectInput.value);

      const selectedPriority = document.querySelector('input[name="priority"]:checked');
      const priorityValue = selectedPriority ? selectedPriority.value : 'Not specified';

      // / Save to localStorage
      if (titleInput.value == '' || projectInput.value == '') {
        window.alert('Please provide a name for the project and details at least one task!');
        e.preventDefault();
        return;
      }
      localStorage.setItem(`${projectInput.value}`, JSON.stringify({
        task: [titleInput.value],
        description: descriptionTextarea.value,
        notes: notesTextarea.value,
        priority: priorityValue,
      }));
      //        titleList.push(titleInput.value)
      //        localStorage.setItem('titleList', JSON.stringify(titleList))
      localStorage.setItem('projectKeys', JSON.stringify(projectKeys));

      location.reload();
    });
  };
  return {displayProjects, projectKeys};
};

export {projectKeys};
export const newProjectfact = projectFactory();
