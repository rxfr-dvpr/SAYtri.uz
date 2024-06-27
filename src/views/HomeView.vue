<template>
  <Nav/>
  
  <h1 class="main-title">SAYtri.uz Soon !</h1>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'Home Page',
  components: {
    Nav
  }
}

</script>

<style lang="scss" scoped>

.main-title {
  text-align: center;
  color: var(--main-white);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>