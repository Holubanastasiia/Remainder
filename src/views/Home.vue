<template>
  <Header/>
  <Login/>
</template>

<script>

import Header from '../components/Header'
import Login from '../components/Login'

export default {
  name: 'Home',
  components: {
    Login,
    Header
  }
}
</script>

<style scoped>

</style>
