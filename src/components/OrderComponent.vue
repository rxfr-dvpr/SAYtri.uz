<template>
  <section class="order__section">
    <div class="container">
        <div class="row">
            <h2 class="order-title">{{ store.order.title }}</h2>

            <div class="order-btns">
                <button class="order-btn sign-in all-btn dark">{{ store.order.signIn }}</button>

                <button class="order-btn sign-out all-btn">{{ store.order.signUp }}</button>
            </div>

            <form action="" @submit.prevent class="order-form">
                <input :type="inp.type" :class="`order-form-inp all-inp ${inp.name}`" v-model="inp.value" 
                v-for="(inp, idx) in store.order.form.inputs" :key="idx" required :placeholder="inp.plcHdr">

                <span class="order-form-span">Доставка</span>

                <div class="order-form-options">
                    <span class="order-form-option active">Курьер</span>
                    <span class="order-form-option">Пункт выдачи</span>
                </div>

                <div class="courier-form-inps">
                    <input :type="inp.type" :class="`courier-form-inp all-inp ${inp.class}`" v-model="inp.value" 
                    v-for="(inp, idx) in store.order.form.courierInps" :key="idx" required :placeholder="inp.plcHdr">
                </div>                
            </form>
        </div>
    </div>
  </section>
</template>

<script>
import { cartStore } from '@/stores/cartStore.js';

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

    .order-form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        row-gap: 13px;
        gap: 20px;

        &-inp {
            &.name-inp {
                width: 100%;
            }
        }

        &-span {
            font-size: 20px;
            font-weight: 300;
            text-align: center;
            width: 100%;
        }

        &-options {
            width: 100%;
            display: flex;
            gap: 15px;
            text-align: center;
            justify-content: center;
        }

        &-option {
            font-size: 15px;
            color: #ADADAD;
            cursor: pointer;

            &.active {
                font-weight: 600;
                text-decoration: underline;
                color: var(--main-dark);
            }
        }
    }

    .courier-form-inps {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 14px;
        column-gap: 20px;

        .courier-form-inp {
            width: 100%;
        }
    }
}

</style>