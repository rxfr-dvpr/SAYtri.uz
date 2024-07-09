import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
        links: [
            {
                name: 'Каталог',
                url: '/catalog'
            },
            {
                name: 'Коллекции',
                url: '/collection'
            },
            {
                name: 'Линейки',
                url: '/rulers'
            },
            {
                logo: 'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/sticker.webp?alt=media&token=ecc7081a-d83d-4223-ae99-80861da42f81',
                url: '/'
            },
            {
                name: 'Украшения',
                url: '/decorations'
            },
            {
                name: 'Журнал',
                url: '/journal'
            },
            {
                name: 'Sale',
                url: '/sale'
            }
        ],
    })
})