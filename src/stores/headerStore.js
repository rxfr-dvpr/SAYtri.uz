import { defineStore } from "pinia";

export const headerStore = defineStore('Header Store', {
    state: () => ({
        img: 'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/Header%2Fheader-img.png?alt=media&token=e61ffa8c-c979-44a4-8531-0c177d3c69cf',
        title: 'Выбери себя <span>СЕГОДНЯ</span>',
        btnTxt: 'Купить'
    })
})