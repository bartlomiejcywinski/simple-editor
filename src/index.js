const loadButton = document.querySelector('.button__load--js');
const saveButton = document.querySelector('.button__save--js');
const textArea = document.querySelector('.textarea--js');

saveButton.addEventListener('click', () =>{
        localStorage.setItem('notatka', textArea.value);
});

loadButton.addEventListener('click', () =>{
    textArea.value = localStorage.getItem('notatka');
});