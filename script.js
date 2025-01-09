// DOM ELMS
const postItElm = document.querySelector('.card')
//function
function newCard() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (response) {
            const infoPostItElm = response.data; 
            infoPostItElm.forEach(card => {
                postItElm.innerHTML += `
                    <div class="card">
                        <div class="pin">
                            <img src="img/pin.svg" alt="pin">
                        </div>
                        <img src="${card.url}" alt="">
                        <h4>${card.title}</h4>
                    </div>`
                ;
            });
        });
} 
newCard()