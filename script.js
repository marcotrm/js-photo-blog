// DOM ELMS
const postItElm = document.querySelector('.row')
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.querySelector(".close");

//function
function addPopupListeners() {
    const images = document.querySelectorAll('.popup-image');
    images.forEach(img => {
        img.addEventListener('click', function() {
            popup.classList.remove = 'none';
            popupImg.src = this.src;
        });
    });
}

function newCard() {
    postItElm.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (response) {
            const infoPostItElm = response.data; 
            infoPostItElm.forEach(card => {
                postItElm.innerHTML += `
                    <div class="col">
                    <div class="card">
                        <div class="pin">
                            <img src="img/pin.svg" alt="pin">
                        </div>
                        <img src=${card.url} alt="">
                        <h4>${card.title}</h4>
                    </div>
                </div>`;
            });
            addPopupListeners();
        });
}
newCard()

//ON CLICK EVENTS
closeBtn.addEventListener('click', function() {
    popup.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});