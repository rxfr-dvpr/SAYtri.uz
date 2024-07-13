<template>
  <section class="order__section">
    <div class="container">
        <div class="row">
            <h2 class="order-title">{{ store.order.title }}</h2>

            <div class="order-btns">
                <button class="order-btn sign-in all-btn dark">{{ store.order.signIn }}</button>

                <button class="order-btn sign-out all-btn">{{ store.order.signUp }}</button>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { cartStore } from '@/stores/cartStore';

export default {
    name: 'Order Component',
    data() {
        return {
            store: cartStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.order__section {
    width: 100%;
    padding: 70px 0 280px;

    .row {
        flex-direction: column;
        row-gap: 40px;
        align-items: center;
        text-align: center;
    }

    .order-title {
        font-size: 48px;
        font-weight: 300;
    }
    
    .order-btns {
        display: flex;
        gap: 15px;
        align-items: center;

        .sign-out {
            color: var(--main-dark);
            border-color: var(--main-dark);

            &::after {
                left: unset;
                right: 0;
            }
        }
    }
}

</style>