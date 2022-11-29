'use strict';
import {url} from '../../config.js';

(async () => {
  try {
    //const response = await fetch(url + '/auth/logout');
    //const json = await response.json();
    //console.log(json);
    
    const response = await fetch(url + '/auth/logout');
    const json = await response.json();
    console.log(json);

    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    alert('You have logged out');
    location.href = 'login.html';
  } catch (e) {
    console.log(e.message);
  }
})();
