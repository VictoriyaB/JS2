const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        products: [],
        filtered: [],
        cart: [],
        imgCatalog: 'https://placehold.it/200x150',
        imgCart: 'https://placehold.it/50x100',
        userSearch: '',
        show: false
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        filter(){
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));

        },
        addProduct(product){
            this.getJson(`${API}/addToBasket.json`)
            .then(data => {
                if(data.result === 1){
                    let find = this.cart.find(el => el.id_product === product.id_product);
                    if(find){
                        find.quantity++;
                    } else {
                        let item = {
                            id_product: product.id_product,
                            price: product.price,
                            product_name: product.product_name,
                            quantity: 1
                        };
                        this.cart.push(item);
                    }
                } else {
                    alert('Error');
                }
            })
        },
        deleteProduct(product){
            this.cart.splice(this.cart.indexOf(product), 1); 
        },
        reduceQuantity(product){
            if(product.quantity > 1){
            product.quantity--;
        } else {
            this.deleteProduct(product);
        }
        },
        increaseQuantity(product){
            product.quantity++;
        },
    },
    mounted(){
       this.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                   this.products.push(el);
                   this.filtered.push(el);

               }
           });
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            })
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for(let el of data.contents){
                    this.cart.push(el);
                }
            });
    }
})


