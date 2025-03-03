
// Select the row
const rowEl = document.querySelector('.row')
const hiddenEl = document.querySelector('.hidden-div')
const buttonEl = document.querySelector('.my-button')

// Use the fetch for the API 
fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {
        // Create a forEach loop to generate images from the API
        // Select the array "data" for using forEach
        data.forEach(element => {
            console.log(element);
            // Use the row for writing inside in HTML code with template literal with element variable
            rowEl.innerHTML += ` <div class="col pb-3">
                    <div class="card my-card">
                        <div class="card-body">
                            <div class="cork-container">
                                <img class="cork" src="./assets/img/pin.svg" alt="">
                            </div>
                            <h3 class="card-title card-header"><img class="my-img" src="${element.url}" alt=""></h3>
                            <small>${element.date}</small>
                            <h4 class="card-text titles">${element.title}</h4>
                        </div>
                    </div>
                </div>`
        })
        const imgEl = document.querySelectorAll('.my-img')
        console.log(imgEl);
        imgEl.forEach(element => {
            console.log(element);
            element.addEventListener('click', function () {
                hiddenEl.classList.remove('d-none');

            })
        })
    })

/* .catch(error => {
    console.error(error);
    
    }) */

buttonEl.addEventListener('click', function () {
    hiddenEl.classList.add('d-none')
})

