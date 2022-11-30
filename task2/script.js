const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () =>{
alert('Служит для вывода информации в консоль');

});


const alertS = document.querySelector('#alert');

alertS.addEventListener('click', () =>{
    alert('Служит для вывода сообщения в всплывающем окошке и кнопкой ОК');
    
});

const promptS = document.querySelector('#prompt');

promptS.addEventListener('click', () =>{
    alert('Служит для вывода сообщения в всплывающем окошке, с полем для ввода информации и кнопкой ОК');
    
})