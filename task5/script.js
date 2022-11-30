const  inpText = document.querySelector('input');
const  duplicateField = document.querySelector('#duplicateField');
const btn = document.querySelector('button');
btn.addEventListener('click', 
  function() {
    event.preventDefault();
    console.log(n);
    inpText.value="";
    duplicateField.textContent = "";
    
})
n="";
inpText.addEventListener('keyup', 
  function() {
   n = inpText.value;
   duplicateField.textContent = n;
   
   
})
