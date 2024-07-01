<template>
  <Nav/>
    
  <Header/>

  <main class="main">
    <Banner/>

    <Collection/>
  </main>

  <h1 class="main-title">SAYtri.uz Soon !</h1>

</template>

<script>
import Nav from '@/components/Nav.vue';
import Banner from '@/components/Banner.vue';
import Header from '@/components/Header.vue';
import Collection from '@/components/Collection.vue';

export default {
  name: 'Home Page',
  components: {
    Nav,
    Header,
    Banner,
    Collection
  }
}

</script>

<style lang="scss" scoped>

.main-title {
  text-align: center;
  color: var(--main-blue);
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 45px;
  padding: 35px 0 85px;
}

</style>