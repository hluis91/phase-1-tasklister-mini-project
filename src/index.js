document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");

  form.addEventListener('submit', (e)=> {
    e.preventDefault()
    createElement(e.target.children[1].value);
    form.reset();
  });
});

function createElement(create){
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteTask)
  btn.textContent = 'X';
  li.textContent = `${create} `;
  li.appendChild(btn)
  console.log(li);
  document.querySelector('#tasks').appendChild(li);
};

function deleteTask(e){
  e.target.parentNode.remove();
};
