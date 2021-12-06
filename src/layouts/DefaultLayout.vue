<template>
  <section>
    <Header/>
    <router-view/>
  </section>
</template>

<script>
import Header from '../components/Header';

export default {
  name: 'default-layout',
  components: { Header }
};
</script>

<style scoped>

</style>
