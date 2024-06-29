<template>
  <Nav/>
  
  <h1 class="main-title">SAYtri.uz Soon !</h1>

  <main class="main">
    <Banner/>
  </main>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Banner from '@/components/Banner.vue';

export default {
  name: 'Home Page',
  components: {
    Nav,
    Banner
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