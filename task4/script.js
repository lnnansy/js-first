const  testTextField = document.querySelector('a');

testTextField.addEventListener('click', function() {
  event.preventDefault();

  this.textContent= prompt('Введите текст и текст ссылки изменится');;
})