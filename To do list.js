const addItem = () => {
    let newItemText = document.getElementById('new-item').value;
    if (newItemText.trim() === '') return;
    
    let li = document.createElement('li');
    li.className = 'item';
    
    let input = document.createElement('input');
    input.type = 'text';
    input.value = newItemText;
    input.setAttribute('readonly', 'readonly');
    
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() { editItem(input, this); };
    
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() { deleteItem(li); };

    li.appendChild(input);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    
    document.getElementById('items').appendChild(li);
    document.getElementById('new-item').value = '';
  };

  const editItem = (input, button) => {
    if (button.textContent === 'Edit') {
      input.removeAttribute('readonly');
      input.focus();
      button.textContent = 'Save';
    } else {
      input.setAttribute('readonly', 'readonly');
      button.textContent = 'Edit';
    }
  };

  const deleteItem = (li) => {
    document.getElementById('items').removeChild(li);
  };

  // edit or delete item
  document.getElementById('items').getElementsByTagName('li').forEach((el) => {
    let input = el.querySelector('input[type="text"]');
    let editButton = el.querySelector('button');
    editButton.onclick = function() { editItem(input, editButton); };
    let deleteButton = el.querySelectorAll('button')[1];
    deleteButton.onclick = function() { deleteItem(el); };
  });

  
  window.addItem = addItem;
;
