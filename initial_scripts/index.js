// We are using bootstrap to create nice looking tables https://getbootstrap.com/docs/4.0/content/tables/

function createTableRow(rowItem) {
  const row = document.createElement('tr');
  // we are using template string to make it easier to create rows
  // https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/template_strings
  row.innerHTML = `<th scope="row">${rowItem.id}</th><td>${rowItem.name}</td>`
  document.querySelector('#simple_body').appendChild(row);
}

const tableItems = [{ id: 1, name: 'John' }, { id: 2, name: 'Tom' }, { id: 3, name: 'Bob' }];

tableItems.forEach(createTableRow);


// Here starts place for your code
// ==============================

function deleteTheRow (event) {
  event.preventDefault();
  var td = event.target.parentNode; 
  var tr = td.parentNode; 
  tr.parentNode.removeChild(tr);
  var targetId = Number (tr.childNodes[0].innerHTML);
  var xhttp = new XMLHttpRequest();
  xhttp.open('DELETE', 'http://localhost:3000/users/' + targetId, true);
  xhttp.send();
}

function modifyTabData(event) {
  event.preventDefault();
  var tabData = event.target.parentNode; 
  var tabRow = tabData.parentNode; 
  editBtn.style = 'display: none';
  saveBtn.style = 'display: initial';
  cancelBtn.style = 'display: initial';
  var newName = document.createElement('input');
  newName.setAttribute('type', 'text');
  var newAge = document.createElement('input');
  newAge.setAttribute('type', 'number');
  var newGender = document.createElement('select');
  newGender.setAttribute('class', 'custom-select');
  var option1 = document.createElement('option');
  option1.setAttribute('value', 'female')
  option1.innerHTML = 'Female';
  var option2 = document.createElement('option');
  option2.setAttribute('value', 'male');
  option2.innerHTML = 'Male';
  newGender.appendChild(option1);
  newGender.appendChild(option2);
  tabRow.childNodes[1].replaceChild(newName, tabRow.childNodes[1].childNodes[0]);
  tabRow.childNodes[2].replaceChild(newAge, tabRow.childNodes[2].childNodes[0]);;
  tabRow.childNodes[3].replaceChild(newGender, tabRow.childNodes[3].childNodes[0]);
  
  saveBtn.addEventListener('click', function (){
    var editedRow = {
      id: Number(tabRow.children[0].innerHTML),
      name: tabRow.childNodes[1].childNodes[0].value, 
      age: tabRow.childNodes[2].childNodes[0].value, 
      gender: tabRow.childNodes[3].childNodes[0].value
    }
    
  });
  //cancelBtn.addEventListener('click', function);
  // var xhttp = new XMLHttpRequest();
  // xhttp.open('PUT', 'http://localhost:3000/users' + editedRow.id, true);
  // xhttp.send(JSON.stringify(editedRow));
}

function createNewTableRow (tbRowItem) {
  const tableRow = document.createElement('tr');
  const isAdult = tbRowItem.age > 18;
  const trashIcon = document.createElement('i');
  trashIcon.className = 'fas fa-trash-alt';
  const editBtn = document.createElement('button');
  editBtn.setAttribute('class', 'btn btn-light');
  editBtn.innerHTML = 'Edit';
  const saveBtn = document.createElement('button');
  saveBtn.setAttribute('class', 'btn btn-light ml-4');
  saveBtn.style = 'display: none';
  saveBtn.innerHTML = 'Save';
  const cancelBtn = document.createElement('button');
  cancelBtn.setAttribute('class', 'btn btn-light ml-4');
  cancelBtn.style = 'display: none';
  cancelBtn.innerHTML = 'Cancel';
  tableRow.innerHTML = `<th scope = 'row'>${tbRowItem.id}</th><td><span>${tbRowItem.name}</span></td><td><span>${tbRowItem.age}</span></td><td>${tbRowItem.gender === 'female' ? '<i class="fas fa-female"></i>' : '<i class="fas fa-male"></i>'}</td><td>${isAdult === true ? '<i class="fas fa-user-check"></i>' : '<i class="fas fa-user-slash"></i>'}</td><td></td><td></td>`
  if (isAdult) {tableRow.setAttribute('class', 'table-success')
  } else {
    tableRow.setAttribute('class', 'table-danger')
  };
  tableRow.childNodes[5].appendChild(saveBtn);
  tableRow.childNodes[5].appendChild(cancelBtn);
  tableRow.childNodes[5].insertBefore(editBtn, saveBtn);
  tableRow.lastChild.appendChild(trashIcon);
  document.querySelector('#complex_body').appendChild(tableRow);
 // trashIcon.addEventListener('mouseover', function(event){
 //   event.target.setAttribute('style', 'cursor: pointer');
 // })
  trashIcon.addEventListener('click', deleteTheRow); 
  editBtn.addEventListener('click', modifyTabData);
}

const newTable = document.createElement('table');
newTable.setAttribute('class', 'table table-bordered table-hover');
newTable.setAttribute('id', 'myTable');
const tabHead = document.createElement('thead');
tabHead.innerHTML = `<tr><th scope = 'col'>${'#'}</th><th scope = 'col'>${'Name'}</th><th scope = 'col'>${'Age'}</th><th scope = 'col'>${'Gender'}</th><th scope = 'col'>${'Is Adult'}</th><th scope = 'col'>${'Edit Content'}</th><th scope = 'col'>${'Remove'}</th></tr>`
 const tabBody = document.createElement('tbody');
tabBody.setAttribute('id', 'complex_body');
newTable.appendChild(tabBody);
newTable.appendChild(tabHead);

document.querySelector('body').appendChild(newTable);



// Create table which will present below data
// Table should have following columns
// Id, Name, age, Is Adult (Use Icon and colors), Gender (Use Icon)
// Use some icons from here https://fontawesome.com/icons?d=gallery&m=free


document.getElementById('add-new-row').addEventListener('click', postNewRow);

(function loadTheRow() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.responseText);
      data.forEach(createNewTableRow);
    }
  };
  xhttp.open("GET", "http://localhost:3000/users", true);
  xhttp.send();
})();

function postNewRow(e) {
  e.preventDefault();
  const maxId = Number (tabBody.lastChild.cells[0].innerHTML);
  var newRow = {
    id: maxId + 1, 
    name: document.getElementById('inp-for-name').value, 
    age: document.getElementById('inp-for-age').value, 
    gender: document.getElementById('inp-for-gender').value
  };
  createNewTableRow(newRow);
  var xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'http://localhost:3000/users', true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(newRow));
};

 

