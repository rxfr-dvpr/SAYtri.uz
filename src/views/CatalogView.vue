<template>
    <div class="catalog-nav">
        <div class="container">
            <div class="row">
                <span class="catalog-nav-ctlr">
                    <router-link to="/" class="catalog-nav-link">Главная</router-link>
                    >>    
                    <router-link to="/catalog" class="catalog-nav-link">Каталог</router-link>
                </span>
            </div>
        </div>
    </div>

    <CatalogHeader/>
</template>

<script>
import CatalogHeader from '@/components/CatalogHeader.vue'

export default {
    name: 'Catalog Page',
    components: {
        CatalogHeader
    }
}

</script>

<style lang="scss" scoped>

.catalog-nav {
    width: 100%;

    &-ctlr {
        font-size: 12px;
        color: #959595;
        display: flex;
        gap: 15px;
    }

    &-link {
        color: #959595;
        transition: .3s;

        &:hover {
            color: var(--main-red);
        }
    }
}

</style>