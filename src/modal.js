import { newProj } from "./addNewProj";
const modalElement = document.createElement('div');
modalElement.classList.add('modal')

function displayModal(){ 
    newProj.addEventListener('click', (e) => {
        document.querySelector('body').appendChild(modalElement);
    })
}    
    // Create form elements
    const formElement = document.createElement('form');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleLabel.appendChild(titleInput);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.rows = 4;
    descriptionTextarea.cols = 50;
    descriptionTextarea.name = 'description';
    descriptionLabel.appendChild(descriptionTextarea);

    const notesLabel = document.createElement('label');
    notesLabel.textContent = 'Notes:';
    const notesTextarea = document.createElement('textarea');
    notesTextarea.rows = 4;
    notesTextarea.cols = 50;
    notesTextarea.name = 'notes';
    notesLabel.appendChild(notesTextarea);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';

    // Append elements to the form
    formElement.appendChild(titleLabel);
    formElement.appendChild(document.createElement('br'));
    formElement.appendChild(descriptionLabel);
    formElement.appendChild(document.createElement('br'));
    formElement.appendChild(notesLabel);
    formElement.appendChild(document.createElement('br'));
    formElement.appendChild(submitButton);

    // Append the form to the container
    modalElement.appendChild(formElement);    



export {displayModal, titleInput, descriptionTextarea, notesTextarea, formElement};