import { defineStore } from "pinia";

export const cHeaderStore = defineStore('Catalog Header Store', {
    state: () => ({
        title: 'Каталог'
    })
})