import { defineStore } from "pinia";

export const footerStore = defineStore('Footer Store', {
    state: () => ({
        logo: 'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/sticker.webp?alt=media&token=ecc7081a-d83d-4223-ae99-80861da42f81',
        socials: {
            name: 'Мы в соц сетях',
            links: [
                {
                    icon: '<i class="fab fa-instagram"></i>',
                    url: 'https://www.instagram.com/saytri_uz/'
                },
                {
                    icon: '<i class="fab fa-telegram-plane"></i>',
                    url: 'https://t.me/saytri_uz'
                }
            ]
        },
        sellers: {
            name: 'Покупателям',
            links: [
                {
                    name: 'Доставка и оплата',
                    url: '/'
                },
                {
                    name: 'Возврат',
                    url: '/'
                },
                {
                    name: 'О бренде',
                    url: '/'
                },
                {
                    name: 'Контакты',
                    url: '/'
                },
                {
                    name: 'Оптовикам',
                    url: '/'
                }
            ]
        }
    })
})