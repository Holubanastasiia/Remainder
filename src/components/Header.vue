<template>
  <div class="home">
    <nav class="home__nav">
      <ul class="home__nav-list">
        <li>
          <p class="user-name">
<!--            {{ info }}-->
          </p>
        </li>
        <li class="profile home__nav-item">
          <router-link to="/page">
            <img class="profile"
                 src="../assets/img/2.png"
                 alt="">
          </router-link>
          <ul class="profile__list">
            <li>
              <button class="logout" @click="handleLogout">
                Logout
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Header',
  methods: {
    handleLogout () {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push('/login');
      });
    }
  }
  // computed: {
  //   info () {
  //     console.log(this.$store.getters.usersInfo);
  //     return this.$store.getters.usersInfo;
  //   }
  // },
  // mounted () {
  //   if (!this.info) {
  //     this.$store.dispatch('auth/fetchInfo');
  //   }
  // }
};
</script>

<style scoped>
.router-link-active {
  color: #00cc99;
}

.logout{
  color: #fff;
  font-size: 20px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
}

.profile{
  width: 60px;
  height: 60px;
  cursor: pointer;
  position: relative;
  display: flex;
}
.profile:hover .profile__list{
  display: block;
}

.profile__list{
  display: none;
  text-align: center;
  width: 100px;
  margin-right: 40px;
  position: absolute;
  top: 45px;
  padding: 18px 0 0 0;
  left: 0;
}

.profile__list li{
  border: 1px solid #ccc;
  background-color: #00cc99;
}

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
  margin-right: 40px;
}

.home__nav-list {
  display: flex;
  margin-top: 7px;
  align-items: center;
}

.home__nav-list>li{
  margin-right: 20px;
}

.home__nav-item {
  margin-right: 20px;
  align-items: center;
}
</style>
