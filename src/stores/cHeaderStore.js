import { defineStore } from "pinia";

export const cHeaderStore = defineStore('Catalog Header Store', {
    state: () => ({
        title: 'Каталог',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/CatalogHeader%2Fcatalog-header-1.png?alt=media&token=29ba663d-92b1-4e48-9b7d-9afb8f481782',
            'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/CatalogHeader%2Fcatalog-header-2.png?alt=media&token=407212d1-dc9f-443a-9a30-3f9f42b0edc7',
            'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/CatalogHeader%2Fcatalog-header-3.png?alt=media&token=7d29ca58-3e09-481a-b37d-37080d5ecef8'
        ]
    })
})