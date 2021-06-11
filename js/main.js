class ProductsList{
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
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
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
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