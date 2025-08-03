// item
function over(elem) {
  elem.style.backgroundImage = 'linear-gradient(90deg, #EC6DA4, #F4C465)';
}
function out(elem) {
  elem.style.backgroundImage = 'linear-gradient(90deg, #f4dabb, #f4dabb)';
}
function down(elem) {
  elem.style.fontWeight = 'bold';
}
function up(elem) {
  elem.style.fontWeight = 'normal';
}

function changeToPika() {
  let itemDiv = document.querySelector('#items');
  let pikaDiv = document.querySelector('#pika');
  let changeDiv = document.querySelector('#change');

  itemDiv.style.display = 'none';
  pikaDiv.style.display = 'block';
  changeDiv.style.display = 'flex';
  changeDiv.style.justifyContent = 'center';
  changeDiv.style.alignItems = 'center';
}
function changeToItem() {
  let itemDiv = document.querySelector('#items');
  let pikaDiv = document.querySelector('#pika');
  let changeDiv = document.querySelector('#change');

  itemDiv.style.display = 'block';
  pikaDiv.style.display = 'none';
  changeDiv.style.display = 'block';
}

function changeToP2() {
  let changeP1 = document.querySelector('#One');
  let changeP2 = document.querySelector('#Two');

  changeP1.style.display = 'none';
  changeP2.style.display = 'block';
}

function changeToP3() {
  let changeP2 = document.querySelector('#Two');
  let changeP3 = document.querySelector('#Three');

  changeP2.style.display = 'none';
  changeP3.style.display = 'block';
}

function changeToP4() {
  let changeP3 = document.querySelector('#Three');
  let changeP4 = document.querySelector('#Four');

  changeP3.style.display = 'none';
  changeP4.style.display = 'block';
}
