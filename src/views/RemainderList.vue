<template>
  <div class="wrapper">
    <div class="title"> My Remainder</div>
    <div v-if="remainderList.length === 0">
      You dont have any remainders yet. <span class="link"> <router-link to="/page">Click to create first remainder</router-link></span>
    </div>
    <ul v-for="(item, idx) of remainderList" v-bind:key="item">
      <li  class="item">
        {{ item }}
        <button class="delete" @click="removeItem(idx)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RemainderList',
  data () {
    return {
      remainderList: []
    };
  },
  methods: {
    removeItem (idx) {
      this.remainderList.splice(idx, 1);
    }
  },
  created () {
    this.remainderList = this.remainderText;
  },
  computed: {
    remainderText () {
      return this.$store.getters['remainders/usersRemainders'];
    }
  }
};
</script>

<style scoped>
.wrapper{
  max-width: 700px;
  margin: auto;
}

.link{
  text-decoration: underline;
}

.item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
}
.item::after{
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  background-color: #003900;
  top: 50px;
}
</style>
