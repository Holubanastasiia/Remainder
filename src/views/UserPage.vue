<template class="container">
<div class="remainder">
  <div class="wrapper">
    <h2 class="title">
      Remainder
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
    <ul class="list" v-if="notes.length !== 0">
      <li v-for="(note, idx) of notes" v-bind:key="note">
        {{ note }}
        <button class="delete" @click="removeNote(idx)">
          Delete
        </button>
      </li>
    </ul>
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
    addNewReminder () {
      if (this.inputValue.length !== 0) {
        this.notes.push(this.inputValue);
        this.inputValue = ' ';
      }
    },
    removeNote (idx) {
      this.notes.splice(idx, 1);
    }
  },
  computed: {
    info () {
      console.log(this.$store.getters.usersInfo);
      return this.$store.getters.usersInfo;
    }
  },
  created () {
    if (!this.info) {
      this.$store.dispatch('auth/fetchInfo');
    }
  }
};

</script>

<style scoped>

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

.title{
  font-size: 32px;
  color: #003900;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.label{
  margin-bottom: 10px;
  font-size: 24px;
}

.btn{
  background-color: #00cc99;
}

.delete{
  background-color: #e53935;
}

</style>
