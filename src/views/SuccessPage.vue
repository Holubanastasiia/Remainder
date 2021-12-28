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
        <button>
          <router-link to="/page">
            Create
          </router-link>
        </button>
      </div>
      <div class="item">
        <p>
          Go to list
        </p>
        <button>
          <router-link to="/page/list">
            Go
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessPage'
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
