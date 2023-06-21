let WRTN = document.querySelector('.WRTN');
let SHWN = document.querySelector('#duplicateField');
let BTN = document.querySelector('.BTN');
BTN.addEventListener ('click', (e) =>{
    console.log (WRTN.value);
    WRTN.value = '';
    SHWN.textContent = '';
});
WRTN.addEventListener('keydown', () =>{
    SHWN.innerHTML = (WRTN.value);
});