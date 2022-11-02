import data from './data/data.json' assert { type: "json" };
import {user} from './data/user.js';

//Código para agregar datos a un objeto JS
let btnAdd = document.getElementById('btnAddObjectJS');

btnAdd.addEventListener('click', function(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    //Si push es exitoso, retorna la nueva longitud del arreglo
    if (username.value && password.value) {
        user.push({username:username.value, password: password.value});
        alert('Registro agregado exitosamente');
    } else
        alert('No es posible agregar datos vacíos')
})

//Imprimir datos del objeto JS

let btnPrintJS = document.getElementById('btnPrintObjectJS');

btnPrintJS.addEventListener('click', function(){
    alert(JSON.stringify(user));
})

// Imprimir datos de un objeto JSON
let btnPrintJSON = document.getElementById('btnJSON');

btnPrintJSON.addEventListener('click', function(){
    alert(JSON.stringify(data.user));
})

