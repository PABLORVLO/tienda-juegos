const $ = document;

const containerProducts = $.querySelector('#containerProducts');

const newCard = ({ title, image, description, price }) => {
    return `
    <div class="card">
        <h3 class="card-title">${title}</h3>
        <img class="card-img" src="${image}" alt="imagen">
        <p class="card-desc">${description}</p>
        <strong class="card-price">${price}</strong>
        <button class="btn">comprar</button>
    </div>
    `;
}

const renderCards = (array) => {
    containerProducts.innerHTML = '';
    array.forEach(item => {
        containerProducts.innerHTML += newCard(item);
    });
}

const getAll = async () => {
    try {
        const response = await fetch('http://localhost:3008/api/productos');
        if (response.status !== 200) throw new Error('Error en la solicitud');
        const data = await response.json(); // Asegúrate de llamar a .json() como una función
        renderCards(data);
    } catch (error) {
        alert('Error: ' + error);
    }
}

getAll();

