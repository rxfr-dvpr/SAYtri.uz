import { defineStore } from "pinia";

export const bannerStore = defineStore('Banner Store', {
    state: () => ({
        images: [
            'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/Banner%2FPortfolio%20%E2%80%94%20NYATA%20VISUALS.jfif?alt=media&token=70a6e0c8-d9d3-45fe-b8cf-ab32ba5bf42b',
            'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/Banner%2FCosmetics.jpg?alt=media&token=c2ece455-a106-479d-b5d9-8efce23934b3',
            'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/Banner%2FSummer%20Hair%20Clips.jfif?alt=media&token=1a0189b6-b4c3-4621-bae5-345a83cc30ac'
        ]
    })
})