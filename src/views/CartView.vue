<template>
    <div class="cart-nav">
        <div class="container">
            <div class="row">
                <span class="cart-nav-ctlr">
                    <router-link to="/" class="cart-nav-link">Главная</router-link>
                    >>    
                    <router-link to="/cart" class="cart-nav-link">Корзина</router-link>
                </span>
            </div>
        </div>
    </div>

    <CartHeader/>

    <OrderComponent/>
</template>

<script>
import CartHeader from '@/components/CartHeader.vue';
import OrderComponent from '@/components/OrderComponent.vue';

export default {
    name: 'Cart Page',
    components: {
        CartHeader,
        OrderComponent
    }
}

</script>

<style lang="scss" scoped>

.cart-nav {
    width: 100%;

    &-ctlr {
        font-size: 12px;
        color: #959595;
        display: flex;
        gap: 15px;
    }

    &-link {
        color: #959595;
        transition: .3s;

        &:hover {
            color: var(--main-red);
        }
    }
}

</style>