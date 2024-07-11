<template>
    <header class="cart__header">
        <div class="container">
            <div class="row">
                <h2 class="cart__header-title all-title">{{ store.header.title }}</h2>

                <div class="cart__header-descr">
                    <span class="cart__header-descr-icon"><i class="fal fa-map-marker-exclamation"></i></span>

                    <p class="cart__header-descr-txt">{{ store.header.descrTxt }}</p>
                </div>
            </div>
        </div>
    </header>
</template>
  
<script>
import { cartStore } from '@/stores/cartStore.js';

export default {
    name: 'Cart Header',
    data() {
        return {
            store: cartStore()
        }
    }
}
  
</script>
  
<style lang="scss" scoped>
  
.cart__header {
    width: 100%;
    padding-top: 20px;
  
    .row {
        flex-direction: column;
        row-gap: 20px;
    }
  
    &-title {
        font-weight: 300;
        background: -webkit-linear-gradient(#333,  #eee);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &-descr {
        max-width: 780px;
        width: 100%;
        display: flex;
        gap: 15px;
        align-items: center;
        padding: 20px 15px;
        background: #F3F3F3;

        &-txt {
            font-size: 14px;
            color: #919191;
        }

        &-icon {
            font-size: 20px;
        }
    }
}
  
</style>