<template>
  <section class="collection__section">
    <div class="container">
        <div class="row">
            <h2 class="collection-title all-title">{{ store.title }}</h2>

            <div class="collection-grid">
                <img :src="img" alt="" :class="`collection-grid-img img-${idx + 1}`" v-for="(img, idx) in store.images" :key="idx">
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { collectionStore } from "@/stores/collectionStore.js";

export default {
    name: 'Collection',
    data() {
        return {
            store: collectionStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.collection__section {
    width: 100%;

    .row {
        flex-direction: column;
        row-gap: 70px;
    }

    .collection-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 25px;

        .img-1 { grid-area: 1 / 1 / 2 / 3; }
        .img-2 { grid-area: 1 / 3 / 2 / 4; }
        .img-3 { grid-area: 2 / 1 / 3 / 2; }
        .img-4 { grid-area: 2 / 2 / 3 / 4; }

        &-img {
            max-width: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}

</style>