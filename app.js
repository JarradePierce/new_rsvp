document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  const form = document.getElementById('registrar');
  const input = form.querySelector('input');
  const mainDiv = document.querySelector('.main');
  const ul = document.getElementById('invitedList');

  // Filter who has and has not responded
  const div = document.createElement('div');
  // Who has responded variables
  const hasRespondedFilterLabel = document.createElement('label');
  const hasRespondedFilterCheckbox = document.createElement('input');

  // Who has not responded variables
  const hasNotRespondedFilterLabel = document.createElement('label');
  const hasNotRespondedFilterCheckbox = document.createElement('input');

  // checking who responded content
  hasNotRespondedFilterLabel.textContent = 'Hide who has responded';
  hasRespondedFilterLabel.textContent = "Hide thoes who havent responded";

  hasNotRespondedFilterCheckbox.type = 'checkbox';
  hasRespondedFilterCheckbox.type = 'checkbox';

  div.appendChild(hasRespondedFilterLabel);
  div.appendChild(hasRespondedFilterCheckbox);
  div.appendChild(hasNotRespondedFilterLabel);
  div.appendChild(hasNotRespondedFilterCheckbox);
  mainDiv.insertBefore(div, ul);

  // has responded filter logic
  hasRespondedFilterCheckbox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const lis = ul.children;
    if(isChecked){
      for(let i = 0; i < lis.length; i++){
        let li = lis[i];
        if(li.className === 'responded'){
          li.style.display = '';
        }else{
          li.style.display = 'none';
        }
      }
    }else{
      for(let i = 0; i < lis.length; i++){
        let li = lis[i];
        li.style.display = '';
      }
    }
  });

  // has not responded filter logic
  hasNotRespondedFilterCheckbox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const lis = ul.children;
    if(isChecked){
      for(let i = 0; i < lis.length; i++){
        let li = lis[i];
        if(li.className === ''){
          li.style.display = '';
        }else{
          li.style.display = 'none';
        }
      }
    }else{
      for(let i = 0; i < lis.length; i++){
        let li = lis[i];
        li.style.display = '';
      }
    }
  });

  // create LI function (creates a new li every time a new name is entered)
  function createLI(text){

    function createElement(elementName, property, value){
      const element = document.createElement(elementName);
      element[property] = value;
      return element;
    }

    function appendToLi(elementName, property, value){
      const element = createElement(elementName, property, value);
      li.appendChild(element);
      return element;
    }

    const li = document.createElement('li');

    appendToLi('span', 'textContent', text);
    appendToLi('label', 'textContent', 'confirmed')
      .appendChild(createElement('input', 'type','checkbox'));
    appendToLi('button', 'textContent', 'edit');
    appendToLi('button', 'textContent', 'remove');
    return li;
  }

  // form event listener (creating a li for a new person)
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
      const action = button.textContent;

      nameActions= {
        remove: () => {
          ul.removeChild(li);
        },
        edit: () => {
          console.log('edit');
          const span = li.firstElementChild;
          const input = document.createElement('input');
          input.type = 'text';
          input.value = span.textContent;
          li.insertBefore(input, span);
          li.removeChild(span);
          button.textContent = 'save';
        },
        save: () => {
          console.log('edit');
          const input = li.firstElementChild;
          const span = document.createElement('span');
          span.textContent = input.value;
          li.insertBefore(span, input);
          li.removeChild(input);
          button.textContent = 'edit';
        }
      }
      nameActions[action]();
    }
  });
});
