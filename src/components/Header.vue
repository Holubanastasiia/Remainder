<template>
  <div class="home">
    <nav class="home__nav">
      <ul class="home__nav-list">
        <li class="profile home__nav-item">
          <router-link to="/page/:id">
            <img class="profile"
                 src="../assets/img/2.png"
                 alt="">
          </router-link>
          <ul class="profile__list">
            <li>
              <button class="logout" @click="signOutUser">
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

import { useAuthState } from '../firebase';
import { useRouter } from 'vue-router';
import { getAuth, signOut } from 'firebase/auth';

export default {
  name: 'Header',
  setup () {
    const { user } = useAuthState();
    const auth = getAuth();
    const router = useRouter();
    const signOutUser = async () => {
      try {
        await signOut(auth);
        await router.push('/login?message=logout');
        alert('Do you really want to log out? ');
      } catch (e) {
        alert(e.message);
      }
    };
    return { user, signOutUser };
  }
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
}
.profile:hover .profile__list{
  display: block;
}

.profile__list{
  display: none;
  text-align: center;
  width: 100px;
  background-color: #00cc99;
  margin-right: 40px;
  position: absolute;
  top: 63px;
  right: -55px;
}

.profile__list li{
  border: 1px solid #ccc;
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
}

.home__nav-list {
  display: flex;
  margin-top: 7px;
  margin-right: 40px;
}

.home__nav-item {
  margin-right: 20px;
}
</style>
