<template>
  <nav class="nav">
    <div class="container">
        <div class="row">
            <ul class="nav__list">
                <li class="nav__list-item" v-for="(link, idx) in store.links" :key="idx">
                    <router-link :to="link.url" class="nav__list-link">{{ link.name }}</router-link>
                </li>
            </ul>

            <router-link to="/" class="nav-logo">
                <img :src="store.logo" alt="" class="nav-logo-img">
            </router-link>

            <div class="nav-cltrs">
                <button class="search-btn nav-cltrs-btn">
                    <i class="far fa-search"></i>
                </button>

                <button class="sign-btn nav-cltrs-btn">
                    <i class="far fa-user"></i>
                </button>

                <button class="cart-btn nav-cltrs-btn">
                    <i class="fab fa-opencart"></i>
                </button>
            </div>
        </div>
    </div>
  </nav>
</template>

<script>
import { navStore } from "@/stores/navStore.js";

export default {
    name: 'Navigation',
    data() {
        return {
            store: navStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    padding: 30px 0;

    .row {
        justify-content: space-between;
    }

    &-logo {
        max-width: 100px;
        width: 100%;
        display: block;
        border-radius: 50%;
        overflow: hidden;
        order: -1;

        &-img {
            width: 100%;
            pointer-events: none;
            display: block;
        }
    }

    &__list {
        max-width: 950px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;

        &-link {
            font-size: 15px;
            transition: .3s;
            font-weight: 500;

            &::first-letter {
                text-transform: uppercase;
            }

            &:hover {
                color: var(--main-red);
                font-style: italic;
            }
        }
    }

    &-cltrs {
        max-width: max-content;
        display: flex;
        gap: 10px;
        align-items: center;

        &-btn {
            background: transparent;
            border: 0;
            font-size: 20px;
            
            i {
                transition: .3s;
            }

            &:hover i {
                color: var(--main-red);
            }
        }
    }
}

</style>