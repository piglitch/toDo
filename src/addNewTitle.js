//import {displayModal, closeModal, projectInput, titleInput, descriptionTextarea, notesTextarea, formElement, submitButton, high, mid, low} from './modal';

const newTaskFactory = () => {
    function addNewTask(){
        const newTitleInputModal = document.createElement('form')
        newTitleInputModal.classList.add('newTitleInputModal')
        document.querySelector('body').appendChild(newTitleInputModal)
        const modalTitleInput = document.createElement('input')
        modalTitleInput.classList.add('modalTitleInput')
        modalTitleInput.type = 'text'
        const modalTitleLabel = document.createElement('label')
        modalTitleLabel.textContent = 'Add new title: '

        const sbmtBtn = document.createElement('input');
        sbmtBtn.classList.add('submitBtn')
        sbmtBtn.type = 'submit';
        sbmtBtn.value = 'Submit';

        modalTitleLabel.appendChild(modalTitleInput)
        newTitleInputModal.appendChild(modalTitleLabel)
        newTitleInputModal.appendChild(sbmtBtn)

        newTitleInputModal.classList.add('addNewTitle')
    }
    return {addNewTask}
}
export const newTask = newTaskFactory()