<template class="container">
<div class="remainder">
  <div class="wrapper">
    <h2 class="title">
      hello
    </h2>
    <div class="remainder__text">
      <input type="text">
    </div>
    <div class="remainder__date">
      <input type="text">
    </div>
    <button class="btn">
      add
    </button>
    <hr/>
    <ul class="list">
      <li>
        text
        <button>
          Delete
        </button>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
// import { useAuthState } from '../firebase';
export default {
  name: 'UserPage',
  computed: {
    // authState () {
    // return useAuthState().then((result) => result.user);
    // }
  }
};

</script>

<style scoped>

.container{
  height: 100vh;;
}

.remainder{
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 50px;
}

.wrapper{
  max-width: 700px;
  border-radius: 20px;
  box-shadow: 2px 3px 10px rgb(0 0 0 / 20%);
  padding: 30px;
}

</style>
