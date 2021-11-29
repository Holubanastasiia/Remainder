<template>
  <div>
    <Header/>
    <Login/>
  </div>
</template>

<script>
import Login from '../components/Login'
import Header from '../components/Header'

export default {
  name: 'Auth',
  components: { Header, Login }
}
</script>

<style scoped>

</style>
