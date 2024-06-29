<template>
  <section class="banner__section">
    <div class="container">
        <div class="row">
            <img :src="img" alt="" class="banner-img" v-for="img in store.images" :key="img">
        </div>
    </div>
  </section>
</template>

<script>
import { bannerStore } from "../stores/bannerStore.js";

export default {
    name: 'Banner Section',
    data() {
        return {
            store: bannerStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.banner__section {
    width: 100%;

    .container {
        max-width: 1920px !important;
        padding: 0 !important;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        .banner-img {
            width: 100%;
            max-height: 530px;
            height: 100%;
            min-height: 100%;
            object-fit: cover;
            pointer-events: none;
            user-select: none;
        }
    }
}

</style>