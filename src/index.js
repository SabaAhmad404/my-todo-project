import './style.css';
import dots from './images/dots.png';
import CreateTask from './modules/createTask.js';

// import bin from './images/bin.png';

import enter from './images/enter.png';
import refresh from './images/refresh.png';

let arr = [];
const enterButton = document.querySelector('.enter-images');
enterButton.addEventListener('click', () => {
  const str = document.querySelector('#place').value;
  const number = arr.length;
  const boolen = false;
  const newTask = new CreateTask(str, boolen, number);
  arr.push(newTask);
  localStorage.setItem('arr', JSON.stringify(arr));
  const texture = document.querySelector('#place');
  texture.value = '';
  window.location.reload();
});
arr = JSON.parse(localStorage.getItem('arr')) || [];
for (let i = 0; i < arr.length; i += 1) {
  const list = document.querySelector('.items');
  const listItem = document.createElement('div');
  listItem.classList.add('dish');
  list.append(listItem);
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  listItem.append(checkBox);
  const paraDiv = document.createElement('div');
  paraDiv.classList.add('para-text');
  listItem.append(paraDiv);
  const paraGraph = document.createElement('p');
  paraGraph.classList.add('wash');
  paraGraph.innerText = arr[i].description;
  paraDiv.append(paraGraph);
  const image = document.createElement('img');
  image.classList.add('dots-image');
  image.src = dots;
  /* eslint-disable */
  const deleteBook = () => {
    const target = image.id;
    arr.splice(target, 1);

    let newid = 0;
    if (arr.length > 0) {
      arr.forEach((check) => {
        check.id = newid;
        newid += 1;
      });
    }
  };
  image.addEventListener("click", () => {
    arr = JSON.parse(localStorage.getItem("arr")) || [];
    deleteBook();
    localStorage.setItem("arr", JSON.stringify(arr));
    window.location.reload();
  });
  paraDiv.append(image);
}

const fresh = document.querySelector(".refresh");
fresh.src = refresh;
enterButton.src = enter;
