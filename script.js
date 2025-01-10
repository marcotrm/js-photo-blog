// DOM ELMS
const btnCloseElm = document.querySelector('.close')
const overlayElm = document.querySelector('.overlay')

//
function newCard() {
    const postItElm = document.querySelector('.row')
    postItElm.innerHTML = '';

    //RICHIESTA AD AXIOS
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (response) {
            const infoPostItElm = response.data; 
            infoPostItElm.forEach(card => {
                //CREAZIONE NUOVA CARD
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
            //ON CLICK EVENTS(after then)
            //EFFETTO POPUP
            const cardsElm = document.querySelectorAll('.card')
            cardsElm.forEach((card) => {
                card.addEventListener('click', () => {

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