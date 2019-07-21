const saveBtn = document.querySelector('.save-btn-js');
const loadBtn = document.querySelector('.load-btn-js');
const clearBtn = document.querySelector('.clear-btn-js');
const removeBtn = document.querySelector('.remove-btn-js');
const textArea = document.querySelector('.textarea-js')
saveBtn.addEventListener('click', (e) => {
  localStorage.setItem('textInput', textArea.value);
})
loadBtn.addEventListener('click', (e) => {
  textArea.value = localStorage.getItem('textInput');
})
clearBtn.addEventListener('click', (e) => {
  textArea.value = "";
})
removeBtn.addEventListener('click', (e) => {
  localStorage.removeItem('textInput');
})

if (localStorage.getItem('textInput')) {
  textArea.value = localStorage.getItem('textInput');
}