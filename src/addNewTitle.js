const newTaskFactory = () => {
  function addNewTask() {
    const newTitleInputModal = document.createElement('form');
    newTitleInputModal.classList.add('newTitleInputModal');
    document.querySelector('body').appendChild(newTitleInputModal);
    const modalTitleInput = document.createElement('input');
    modalTitleInput.classList.add('modalTitleInput');
    modalTitleInput.type = 'text';
    const modalTitleLabel = document.createElement('label');
    modalTitleLabel.textContent = 'Add new title: ';

    const sbmtBtn = document.createElement('input');
    sbmtBtn.classList.add('submitBtn');
    sbmtBtn.type = 'button';
    sbmtBtn.value = 'Submit';

    modalTitleLabel.appendChild(modalTitleInput);
    newTitleInputModal.appendChild(modalTitleLabel);
    newTitleInputModal.appendChild(sbmtBtn);
  }
  addNewTask();
  function closeTaskModal() {
    document.querySelector('#overlay').addEventListener('click', ()=>{
      if (document.querySelector('.modalTitleInput').value = '') {
        return;
      }
      document.querySelector('.newTitleInputModal').style.display = 'none';
      document.querySelector('#overlay').classList.remove('active');
    });
  }
  return {addNewTask, closeTaskModal};
};
export const newTask = newTaskFactory();
