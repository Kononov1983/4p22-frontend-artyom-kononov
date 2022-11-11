'use strict';

fetch('https://reqres.in/api/users')
    .then((response) => {
        return response.json();
    }).then((result) => {
        console.log(result);
    }).catch((e) => {
        console.log(e);
    });