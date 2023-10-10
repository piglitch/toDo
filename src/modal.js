import { newProj } from "./addNewProj";
const modalElement = document.createElement('div');
modalElement.classList.add('modal')

function displayModal(){ 
    newProj.addEventListener('click', () => {
            document.querySelector('body').appendChild(modalElement);
            modalElement.style.display = 'block';
            document.querySelector('#overlay').classList.add('active')
    })
}    

    // Create form elements
    const formElement = document.createElement('form');

    const projectLabel = document.createElement('label');
    projectLabel.textContent = 'Project: ';
    const projectInput = document.createElement('input')
    projectInput.classList.add('projectInput')
    projectInput.type = 'text';
    projectInput.placeholder = 'Get lean'
    projectLabel.appendChild(projectInput);

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Task: ';
    const titleInput = document.createElement('input');
    titleInput.classList.add('titleInput')
    titleInput.type = 'text';
    titleInput.placeholder = '...Eat good';
    titleLabel.appendChild(titleInput);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description: ';
    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.classList.add('descriptionTextarea')
    descriptionTextarea.rows = 2;
    descriptionTextarea.cols = 50;
    descriptionTextarea.name = 'description';
    descriptionLabel.appendChild(descriptionTextarea);

    const notesLabel = document.createElement('label');
    notesLabel.textContent = 'Notes: ';
    const notesTextarea = document.createElement('textarea');
    notesTextarea.classList.add('notesTextarea')
    notesTextarea.rows = 2;
    notesTextarea.cols = 50;
    notesTextarea.name = 'notes';
    notesLabel.appendChild(notesTextarea);

    const selectPriority = document.createElement('label')
    selectPriority.textContent = 'Priority: ';
    
    const priorityHigh = document.createElement('label');
    priorityHigh.textContent = 'High ';

    const high = document.createElement('input');
    high.classList.add('high')
    high.type = 'radio';
    high.value = 'High';
    high.name = 'priority';

    const priorityMid = document.createElement('label');
    priorityMid.textContent = 'Mid ';
    priorityMid.style.marginLeft = '59px'

    const mid = document.createElement('input');
    mid.classList.add('mid')
    mid.type = 'radio';
    mid.value = 'Medium';
    mid.name = 'priority';

    const priorityLow = document.createElement('label');
    priorityLow.textContent = 'Low ';
    priorityLow.style.marginLeft = '59px'
    
    const low = document.createElement('input');
    low.classList.add('low')
    low.type = 'radio';
    low.value = 'Low';
    low.name = 'priority';    

    priorityHigh.appendChild(high);
    priorityMid.appendChild(mid);
    priorityLow.appendChild(low);

    const submitButton = document.createElement('input');
    submitButton.classList.add('submitBtn')
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    // Append elements to the form
    formElement.appendChild(projectLabel);
    formElement.appendChild(document.createElement('br'));

    formElement.appendChild(titleLabel);
    formElement.appendChild(document.createElement('br'));
    
    formElement.appendChild(descriptionLabel);
    formElement.appendChild(document.createElement('br'));
    
    formElement.appendChild(notesLabel);
    formElement.appendChild(document.createElement('br'));
    
    formElement.appendChild(selectPriority)
    formElement.appendChild(priorityHigh);
    formElement.appendChild(document.createElement('br'));
    formElement.appendChild(priorityMid);
    formElement.appendChild(document.createElement('br'));
    formElement.appendChild(priorityLow);

    formElement.appendChild(document.createElement('br'));
    formElement.appendChild(document.createElement('br'));
    
    formElement.appendChild(submitButton);

    // Append the form to the container
    modalElement.appendChild(formElement);    

   function closeModal() {
        // Check if the clicked element is outside the modal or the modal itself
        document.querySelector('#overlay').addEventListener('click', ()=>{
            modalElement.style.display = 'none'; 
            document.querySelector('#overlay').classList.remove('active')      
        })    
}

    
export {displayModal, closeModal, projectInput, titleInput, descriptionTextarea, notesTextarea, formElement, submitButton, high, mid, low};
