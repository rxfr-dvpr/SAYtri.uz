import { defineStore } from "pinia";

export const collectionStore = defineStore('Collection Store', {
    state: () => ({
        images: [
            'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/Collection%2Fcollection-img-1.png?alt=media&token=e7497ef3-72c6-4f04-9fb5-2ed058c04ce4',
            'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/Collection%2Fcollection-img-2.png?alt=media&token=59e38eaa-5d10-4baf-a9c2-4fc707442814',
            'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/Collection%2Fcollection-img-3.png?alt=media&token=214cd2ac-04c8-469a-a902-5460200eb81d',
            'https://firebasestorage.googleapis.com/v0/b/saytri-affdd.appspot.com/o/Collection%2Fcollection-img-4.png?alt=media&token=21e1fc53-36b2-47df-a5c9-6fe80d365d51'
        ],
        title: 'Коллекции'
    })
})