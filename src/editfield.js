
const editFactory = () => {
    function addNewDescription(){
        const newContent = document.createElement('form')
        newContent.classList.add('newContent')
        document.querySelector('body').appendChild(newContent)
        const modalEditInput = document.createElement('input')
        modalEditInput.classList.add('modalEditInput')
        modalEditInput.type = 'text'
        
        const modalTitleLabel = document.createElement('label')
        modalTitleLabel.textContent = 'Add new description: '

        const sbmtBtn = document.createElement('input');
        sbmtBtn.classList.add('submitBtn')
        sbmtBtn.type = 'submit';
        sbmtBtn.value = 'Submit';

        modalTitleLabel.appendChild(modalEditInput)
        newContent.appendChild(modalTitleLabel)
        newContent.appendChild(sbmtBtn)

        newContent.classList.add('addNewdesc')
    }
    function addNewNotes(){
        const newContent = document.createElement('form')
        newContent.classList.add('newContent')
        document.querySelector('body').appendChild(newContent)

        const modalEditInput = document.createElement('input')
        modalEditInput.classList.add('modalEditInput')
        modalEditInput.type = 'text'
        const modalTitleLabel = document.createElement('label')
        modalTitleLabel.textContent = 'Add new notes: '

        const sbmtBtn = document.createElement('input');
        sbmtBtn.classList.add('submitBtn')
        sbmtBtn.type = 'submit';
        sbmtBtn.value = 'Submit';

        modalTitleLabel.appendChild(modalEditInput)
        newContent.appendChild(modalTitleLabel)
        newContent.appendChild(sbmtBtn)

        newContent.classList.add('addNewTitle')
    }
    function addNewPriority(){
        const newContent = document.createElement('form')
        newContent.classList.add('newContent')
        document.querySelector('body').appendChild(newContent)
        
        const modalEditInput = document.createElement('input')
        modalEditInput.classList.add('modalEditInput')
        modalEditInput.type = 'text'
        
        const modalTitleLabel = document.createElement('label')
        modalTitleLabel.textContent = 'Add new priority: '

        const sbmtBtn = document.createElement('input');
        sbmtBtn.classList.add('submitBtn')
        sbmtBtn.type = 'submit';
        sbmtBtn.value = 'Submit';

        modalTitleLabel.appendChild(modalEditInput)
        newContent.appendChild(modalTitleLabel)
        newContent.appendChild(sbmtBtn)

        newContent.classList.add('addNewTitle')
    }
    function closeEditModal() {
        // Check if the clicked element is outside the modal or the modal itself
        document.querySelector('#overlay').addEventListener('click', ()=>{
            newContent.style.display = 'none'; 
            document.querySelector('#overlay').classList.remove('active')
            document.querySelector('.addNewTitle').style.display = 'none'      
        })
    }
    return {addNewDescription, addNewNotes, addNewPriority, closeEditModal}
}    

export const newEdit = editFactory()