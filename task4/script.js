const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    const PRMT = prompt ('Введите текст для замены в ссылке');
    link.innerHTML = PRMT;
    event.preventDefault();
});

