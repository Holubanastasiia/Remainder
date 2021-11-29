<template>
  <section>
    <Header/>
    <router-view/>
  </section>
</template>

<script>
import Header from '../components/Header'

export default {
  name: 'DefaultLayout',
  components: { Header }
}
</script>

<style scoped>

</style>
