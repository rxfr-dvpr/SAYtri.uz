<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <h1 class="header-title" v-html="store.title"></h1>

                <button class="header-btn all-btn">{{ store.btnTxt }}</button>

                <img :src="store.img" alt="" class="header-img">
            </div>
        </div>
    </header>
</template>

<script>
import { headerStore } from "@/stores/headerStore.js";

export default {
    name: 'Header',
    data() {
        return {
            store: headerStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 20px 0 100px;

    .row {
        flex-direction: column;
        row-gap: 135px;
        position: relative;
    }

    &-img {
        max-width: 700px;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        pointer-events: none;
    }

    &-title {
        max-width: max-content;
        font-size: 80px;
        display: flex;
        flex-direction: column;
        font-weight: 200;
        background: -webkit-linear-gradient(#333, #cacaca, #333, #eee);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        user-select: none;

        span {
            margin-left: auto;
        }
    }
}

</style>