<template>
  <div class="wrapper">
    <h2 class="title">
      Your remainder was created!
    </h2>
    <div class="list">
      <div class="item">
        <p>
          Create ones more
        </p>

        <router-link to="/page">
          <button>
            Create
          </button>
        </router-link>

      </div>
      <div class="item">
        <p>
          Go to list
        </p>
        <router-link to="/page/list">
          <button>
            Go
          </button>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessPage',
  async mounted () {
    if (!Object.keys(this.$store.getters['remainders/usersRemainders']).length) {
      console.log('userpage work');
      await this.$store.dispatch('remainders/getRemainders');
    }
  }
};
</script>

<style scoped>

button{
    background-color: #00cc99;
}

.wrapper{
  max-width: 700px;
  margin: auto;
}

.list{
  display: flex;
  flex-direction: column;
}

.item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

</style>
