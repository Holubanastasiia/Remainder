<template class="container">
<div class="remainder">
  <div class="wrapper">
    <h2 class="title">
      Create remainder
    </h2>
    <div class="remainder__text">
      <label for="text" class="label">
        Enter text for reminder
      </label>
      <input type="text" id="text"
             :value="inputValue"
             @input="inputChangeHandler"
             @keypress.enter="addNewReminder">
    </div>
    <div class="remainder__date">
      <label for="date" class="label">
        Choose date when remind
      </label>
      <input type="date" class="date" id="date">
    </div>
    <div class="remainder__time">
      <label for="time" class="label">
        Choose time when remind
      </label>
      <input type="time" class="date" id="time">
    </div>
       <button class="btn .button" @click="addNewReminder">
       add
       </button>
    <hr/>
  </div>
</div>
</template>

<script>

export default {
  name: 'UserPage',
  data () {
    return {
      title: 'Remainder',
      inputValue: '',
      notes: []
    };
  },
  methods: {
    inputChangeHandler (event) {
      this.inputValue = event.target.value;
    },
    async addNewReminder () {
      if (this.inputValue.length) {
        this.$store.dispatch('remainders/addReminder', this.inputValue);
        this.inputValue = ' ';
        await this.$router.push('/page/success');
      }
    }
  },
  async mounted () {
    if (!Object.keys(this.$store.getters['auth/usersInfo']).length) {
      await this.$store.dispatch('auth/fetchInfo');
    }
  }
};

</script>

<style scoped>
li{
  display: flex;
  justify-content: space-between;
}
input{
  margin-bottom: 20px;
}

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

.label{
  margin-bottom: 10px;
  font-size: 24px;
}

.btn{
  background-color: #00cc99;
}

</style>
