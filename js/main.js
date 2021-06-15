const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList{
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render();
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }

    totalCostProducts() {
        return this.goods.reduce(((total, product) => total + product.price),0);  
    }
}

class ProductItem {
    constructor(product, img = 'http://via.placeholder.com/250') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
        <img class="product-img" src="${this.img}" alt="${this.title}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`
    }
}

class CartList{
    addToCart() {} // создает новый объект класса CartItem, вызывает метод render у этого объекта
    deleteItem() {} // удаляет объект из массива списка товаров корзины
    changeQuantity() {} //изменяет количетво товара
    totalCostCart() {} // подсчитывает стоимость товаров в корзине
    show() {} // корзина выпадает при нажатии на кнопку корзина
    hide() {} // корзина скрывается
}

class CartItem{
render() {} // возвращает строку с разметкой товара в корзине
}



let list = new ProductsList();
list.render();
list.totalCostProducts();