import { defineStore } from "pinia";

export const contactStore = defineStore('Contact Store', {
    state: () => ({
        title: 'Подписка на новости',
        inp: {
            plc: 'Ваш e-mail',
            val: ''
        },
        btnTxt: 'Подписаться'
    })
})