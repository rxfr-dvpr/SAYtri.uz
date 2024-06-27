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
        max-width: 120px;
        width: 100%;

        &-img {
            width: 100%;
            pointer-events: none;
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
            transition: .4s;

            &::first-letter {
                text-transform: uppercase;
            }

            &:hover {
                color: var(--main-red);
            }
        }
    }
}

</style>