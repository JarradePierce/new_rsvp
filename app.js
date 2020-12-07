const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

// create LI function (creates a new li every time a new name is entered)
function createLI(text){
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(label);

  const editButton = document.createElement('button');
  editButton.textContent = 'edit';
  li.appendChild(editButton);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'remove';
  li.appendChild(removeButton);
  return li;
}

function createSaveButton(){
  const saveButton = document.createElement('button');
  saveButton.textContent = 'save';
  li.removeChild(button);
  li.appendChild(saveButton);
}

// form event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  const li = createLI(text);
  ul.appendChild(li);
});

// Checkbox event listener
ul.addEventListener('change',(e) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;

  if(checked){
    listItem.className = 'responded';
  }else{
    listItem.className = '';
  }
});

// remove and edit event listener
ul.addEventListener('click',(e) => {
  if(e.target.tagName == 'BUTTON'){
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if(e.target.textContent === 'remove'){
      ul.removeChild(li);
    }else if(e.target.textContent === 'edit'){
      console.log('edit');
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'save';
    }else if(e.target.textContent === 'save'){
      console.log('edit');
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'edit';
    }
  }
})
