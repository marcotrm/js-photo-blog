// DOM ELMS
const btnCloseElm = document.querySelector('.close')
const overlayElm = document.querySelector('.overlay')

//function
function newCard() {
    const postItElm = document.querySelector('.row')
    postItElm.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (response) {
            const infoPostItElm = response.data; 
            infoPostItElm.forEach(card => {
                console.log(card.url);
                postItElm.innerHTML += `
                    <div class="col">
                    <div class="card">
                        <div class="pin">
                            <img src="img/pin.svg" alt="pin">
                        </div>
                        <img class="popup" src=${card.url} alt="">
                        <h4>${card.title}</h4>
                    </div>
                </div>`;
            });
            const cardsElm = document.querySelectorAll('.card')
            //ON CLICK EVENTS(after then)
            cardsElm.forEach((card) => {
                card.addEventListener('click', () => {
                    console.log('Card cliccata')

                    const overlayImgElm = document.getElementById('overlayImage')
                    const overlayImg = card.querySelector('.popup').src;
                    overlayImgElm.src = overlayImg;

                    overlayElm.classList.remove('hidden');

                })
            })
            
        });
}
newCard()

//ON CLICK EVENTS

btnCloseElm.addEventListener('click', () => {
    overlayElm.classList.add('hidden')
})