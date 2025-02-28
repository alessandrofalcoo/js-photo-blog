
// Select the row
const rowEl = document.querySelector('.row')


// Use the fetch for the API 
fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // Create a forEach loop to generate images from the API
        data.forEach(element => {
            console.log(element.url);
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
        });
    })

    .catch(error => {
        console.error(error);

    })


console.log(cardHeaderEl.innerHTML);

