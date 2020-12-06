const form = document.getElementById('registrar');
const input = form.querySelector('input');

// create LI function (creates a new li every time a new name is entered)
function createLI(text){
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);

  const button = document.createElement('button');
  button.textContent = 'remove';
  li.appendChild(button);
  return li;
}

// form event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  const li = createLI(text);
  const ul = document.getElementById('invitedList');
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

// remove event listener
ul.addEventListener('click',(e) => {
  if(e.target.tagName == 'BUTTON'){
    const li = e.target.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);
  }
})
