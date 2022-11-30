'use strict';
const url = 'https://mybcwt.northeurope.cloudapp.azure.com'

// select existing html elements
const addForm = document.querySelector('#addCatForm');
const userList = document.querySelector('.add-owner');

// submit add cat form
addForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const fd = new FormData(addForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: fd,
  };
  const response = await fetch(url + '/cat', fetchOptions);
  const json = await response.json();
  alert(json.message);
  location.href = 'front.html';
});
