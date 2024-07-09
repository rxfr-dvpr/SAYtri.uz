<template>
  <Header/>

  <main class="main">
    <Banner/>

    <Collection/>

    <Contact/>
  </main>

  <Footer/>

</template>

<script>
import Banner from '@/components/Banner.vue';
import Header from '@/components/Header.vue';
import Collection from '@/components/Collection.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home Page',
  components: {
    Header,
    Banner,
    Collection,
    Contact,
    Footer
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