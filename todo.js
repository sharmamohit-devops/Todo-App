const input = document.querySelector('.input');
const listContainer = document.querySelector('.listcontainer');

function addTask() {
  if (input.value === '') {
    alert('Please write something!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = input.value;

    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.className = 'delete';
    removeBtn.onclick = function () {
      listContainer.removeChild(li);
    };

    li.appendChild(removeBtn);
    listContainer.appendChild(li);
    input.value = '';
    listContainer.scrollTop = listContainer.scrollHeight;
  }
}