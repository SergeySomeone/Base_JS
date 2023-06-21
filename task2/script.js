const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоли');
});
const Alert = document.querySelector ('#alert');

Alert.addEventListener('click', () => {
    alert('Служит для отображения информации');
});
const Prompt = document.querySelector ('#prompt');

Prompt.addEventListener('click', () => {
   prompt('Отображает диалоговое окно с запросом на ввод текста');
});