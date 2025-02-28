const cardEl = document.querySelector('.my-card');
const imgEl = document.querySelector('.my-img');

fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

    .catch(error => {
        console.error(error);

    })
for (let i = 0; i < 5; i++) {
    imgEl.innerHTML += `<img class="my-img" src="https://marcolanci.it/boolean/assets/pictures/.1/${imgEl}" alt="">`
}