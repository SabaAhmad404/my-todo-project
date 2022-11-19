import './style.css';

// import bin from './images/bin.png';
import dots from './images/dots.png';
import enter from './images/enter.png';
import refresh from './images/refresh.png';

const fresh = document.querySelector('.refresh');
fresh.src = refresh;
const imgEnter = document.querySelector('.enter-images');
imgEnter.src = enter;
const arr = [
  {
    description: 'wash the dishes',
    completed: true,
    index: 0,
  },
  {
    description: 'wash your clothes',
    completed: false,
    index: 1,
  },
  {
    description: 'clean your house',
    completed: true,
    index: 2,
  },
];
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
  paraDiv.append(image);
}
