<template>
  <header class="catalog__header">
    <div class="container">
        <div class="row">
            <h2 class="catalog__header-title all-title">{{ store.title }}</h2>
        </div>
    </div>
  </header>
</template>

<script>
import { cHeaderStore } from "@/stores/cHeaderStore.js";

export default {
    name: 'Catalog Header',
    data() {
        return {
            store: cHeaderStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.catalog__header {
    width: 100%;
    padding-top: 20px;

    &-title {
        font-weight: 300;
        background: -webkit-linear-gradient(#333,  #eee);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

</style>