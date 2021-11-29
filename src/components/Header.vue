<template>
  <div class="home">
    <nav class="home__nav">
      <ul class="home__nav-list">
<!--        <li class="home__nav-item">-->
<!--          <router-link to="/login">-->
<!--            Login-->
<!--          </router-link>-->
<!--        </li>-->
        <li class="home__nav-item">
          <router-link to="/registration">
            Sign up
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 70px;
  background-color: #003900;
  font-size: 36px;
  color: #cccccc;
}

.home__nav {
  display: flex;
  justify-content: right;
}

.home__nav-list {
  display: flex;
  margin-top: 13px;
}

.home__nav-item {
  margin-right: 20px;
}
</style>
