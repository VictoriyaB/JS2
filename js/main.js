const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'https://via.placeholder.com/250'},
    {id: 2, title: 'Mouse', price: 20, img: 'https://via.placeholder.com/250'}, 
    {id: 3, title: 'Keyboard', price: 200, img: 'https://via.placeholder.com/250'},
    {id: 4, title: 'Gamepad', price: 50, img: 'https://via.placeholder.com/250'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title = 'item', price = 0, img = 'https://via.placeholder.com/250') => {
    return `<div class="product-item">
                <img class="product-img" src="${img}">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price, item.img)).join('');
};

renderPage(products);