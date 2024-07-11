<template>
  <header class="catalog__header">
    <div class="container">
        <div class="row">
            <h2 class="catalog__header-title all-title">{{ store.header.title }}</h2>

            <div class="catalog__header-images">
                <img :src="img" alt="" :class="`catalog__header-img img-${idx + 1}`" v-for="(img, idx) in store.header.images" :key="idx">
            </div>
        </div>
    </div>
  </header>
</template>

<script>
import { catalogStore } from "@/stores/catalogStore.js";

export default {
    name: 'Catalog Header',
    data() {
        return {
            store: catalogStore(),
        }
    }
}

</script>

<style lang="scss" scoped>

.catalog__header {
    width: 100%;
    padding-top: 20px;

    .row {
        flex-direction: column;
        row-gap: 20px;
    }

    &-title {
        font-weight: 300;
        background: -webkit-linear-gradient(#333,  #eee);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &-images {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    &-img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        &.img-1 { grid-area: 1 / 1 / 5 / 3; }
        &.img-2 { grid-area: 1 / 3 / 3 / 5; }
        &.img-3 { grid-area: 3 / 3 / 5 / 5; }
    }

}

</style>