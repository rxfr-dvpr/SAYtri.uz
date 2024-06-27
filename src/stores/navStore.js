import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
        links: [
            {
                name: 'Каталог',
                url: '/'
            },
            {
                name: 'Коллекции',
                url: '/'
            },
            {
                name: 'Линейки',
                url: '/'
            },
            {
                name: 'Украшения',
                url: '/'
            },
            {
                name: 'Журнал',
                url: '/'
            },
            {
                name: 'Sale',
                url: '/'
            }
        ],
        logo: 'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/sticker.webp?alt=media&token=ecc7081a-d83d-4223-ae99-80861da42f81'
    })
})