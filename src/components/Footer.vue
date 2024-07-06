<template>
  <footer class="footer">
    <div class="container">
        <div class="row">

            <div class="footer__socials">
                <span class="footer__socials-name">{{ store.socials.name }}</span>

                <div class="footer__socials-list">
                    <a :href="link.url" target="_blank" class="footer__socials-list-link" v-for="(link, idx) in store.socials.links" 
                    :key="idx" v-html="link.icon"></a>
                </div>
            </div>

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
        justify-content: space-between;
    }

    &-logo {
        max-width: 300px;
        width: 100%;

        img {
            width: 100%;
            pointer-events: none;
        }
    }

    .footer__socials {
        max-width: max-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 30px;

        &-name {
            font-size: 20px;
            color: var(--main-white);
        }

        &-list {
            display: flex;
            gap: 24px;
            align-items: center;

            &-link {
                width: 32px;
                height: 32px;
                background: var(--main-white);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                font-size: 17px;
                transition: .4s;

                &:hover {
                    background: var(--main-red);
                }
            }
        }
    }
}

</style>