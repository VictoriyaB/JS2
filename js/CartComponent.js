Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `
            <div class="cart-block" v-show = "visibility">
                <cart-item v-for="item of cartItems" :key="item.id_product"
                :cart-item="item">
                </cart-item>
            </div>
    `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
            <div class="cart-item">
                <div class="product-bio">
                        <img :src="img" alt="Some image">
                        <div class="product-desc">
                        <p class="product-title">{{cartItem.product_name}}</p>
                        <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
                            <button class="product-quantity"@click="$root.reduceQuantity(cartItem)"><i class="fas fa-minus"></i></button>
                            <button class="product-quantity" @click="$root.increaseQuantity(cartItem)"><i class="fas fa-plus"></i></button>
                    <p class="product-single-price">{{cartItem.price}} $</p>
                    </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
                        <button class="del-btn" @click="$root.remove(cartItem)">&times;</button>
                    </div>
                </div>
            </div>
    `
})