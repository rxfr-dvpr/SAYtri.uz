import { defineStore } from "pinia";

export const cartStore = defineStore('Cart Store', {
    state: () => ({
        header: {
            title: 'Корзина',
            descrTxt: 'В корзине находятся товары нескольких продавцов. Они будут доставлены разными посылками. После оформления оператор перезвонит вам и уточнит сроки доставки и оплаты каждого заказа'
        },
        order: {
            title: 'Оформление заказа',
            signIn: 'Войти',
            signUp: 'Зарегистрироваться'
        }
    })
})