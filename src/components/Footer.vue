<template>
  <footer class="footer">
    <div class="container">
        <div class="row">

            <router-link class="footer-logo" to="/">
                <img :src="store.logo" alt="" class="footer-logo-img">
            </router-link>
        </div>
    </div>
  </footer>
</template>

<script>
import { footerStore } from "@/stores/footerStore.js";

export default {
    name: 'Footer',
    data() {
        return {
            store: footerStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.footer {
    width: 100%;
    padding: 90px 95px;
    background: var(--main-blue);


    .row {
        justify-content: center;
    }

    &-logo {
        max-width: 300px;
        width: 100%;

        img {
            width: 100%;
            pointer-events: none;
        }
    }
}

</style>