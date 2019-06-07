(function(window){
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
        trashIcon.addEventListener('click', window.app.deleteTheRow); 
        editBtn.addEventListener('click', window.app.modifyTabData);
      }

      window.app = window.app || {};
      window.app.createNewTableRow = createNewTableRow;
})(window);