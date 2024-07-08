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
            ],
            contacts: [
                {
                    icon: '<i class="fas fa-phone-alt"></i>',
                    name: '+998 (00) 000 00 00',
                    link: 'tel:+998000000000'
                },
                {
                    icon: '<i class="fas fa-map-marker-alt"></i>',
                    name: 'г. Ташкент',
                    link: 'https://yandex.uz/maps/-/CDfhRNIU'
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
        },
        docs: {
            name: 'Документы',
            links: [
                {
                    name: 'Политика конфиденциальности',
                    url: '/'
                },
                {
                    name: 'Оферта',
                    url: '/'
                }
            ]
        }
    })
})