import { getResource } from "../services/requests";

const showMoreStyles = (triger, wrapper) => {
    const trigerButton = document.querySelector(triger);

    // blockElements.forEach(elem => {
    //     elem.classList.add('animated', 'fadeInUp');
    // });

    // trigerButton.addEventListener('click', ()=> {
    //     blockElements.forEach(elem => {
    //         elem.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         elem.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     trigerButton.style.display = 'none';
    // });

    trigerButton.addEventListener('click', function() {
        getResource('assets/db.json')
            .then(res => createCards(res.styles));

        this.remove();
    });

    function createCards(response){
        response.forEach(item => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
                    <img src=${item.src} alt="style">
                    <h4>${item.title}</h4>
                    <a href=${item.link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
}

export default showMoreStyles;