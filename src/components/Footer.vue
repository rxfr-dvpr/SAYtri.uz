<template>
  <footer class="footer">
    <div class="container">
        <div class="row">

            <div class="footer__socials">
                <span class="footer__socials-name all-ftr-name">{{ store.socials.name }}</span>

                <div class="footer__socials-list">
                    <a :href="link.url" target="_blank" class="footer__socials-list-link" v-for="(link, idx) in store.socials.links" 
                    :key="idx" v-html="link.icon"></a>
                </div>

                <div class="footer-contacts">
                    <a :href="link.link" target="_blank" class="footer-contacts-link" v-for="link in store.socials.contacts" :key="link.id">
                        <span class="footer-contacts-icon" v-html="link.icon"></span>
                        {{ link.name }}
                    </a>
                </div>

                <p class="copyright-txt">© Saytri.uz 2024</p>
            </div>

            <div class="footer__sellers">
                <span class="footer__sellers-name all-ftr-name">{{ store.sellers.name }}</span>

                <ul class="footer__sellers-list">
                    <li class="footer__sellers-list-item"  v-for="(link, idx) in store.sellers.links" :key="idx">
                        <router-link :to="link.url" class="footer__sellers-list-link">
                            {{ link.name }}
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="footer__docs">
                <span class="footer__docs-name all-ftr-name">{{ store.docs.name }}</span>

                <ul class="footer__docs-list">
                    <li class="footer__docs-list-item" v-for="link in store.docs.links" :key="link.id">
                        <router-link :to="link.url" class="footer__docs-list-link">{{ link.name }}</router-link>
                    </li>
                </ul>
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

    &__socials {
        max-width: max-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 30px;

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

        .copyright-txt {
            margin-top: auto;
            color: var(--main-white);
            user-select: none;
        }

        .footer-contacts {
            max-width: max-content;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 25px;

            &-link {
                display: flex;
                gap: 12px;
                align-items: center;
                color: var(--main-white);
                transition: .4s;
                opacity: .5;

                &:hover {
                    opacity: 1;
                }
            }
        }
    }

    &__sellers {
        max-width: max-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 30px;

        &-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 20px;

            &-link {
                font-size: 18px;
                color: var(--main-white);
                opacity: .3;
                transition: .3s;

                &:hover {
                    color: var(--main-red);
                    opacity: 1;
                }
            }
        }
    }

    &__docs {
        max-width: max-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 30px;

        &-list {
            display: flex;
            flex-direction: column;
            row-gap: 18px;

            &-link {
                font-size: 18px;
                color: var(--main-white);
                opacity: .3;
                transition: .3s;

                &:hover {
                    color: var(--main-red);
                    opacity: 1;
                }
            }
        }
    }

    .all-ftr-name {
        font-size: 20px;
        color: var(--main-white);
    }
}

</style>