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
<!--             :value="inputDate"-->
<!--             @input="inputChangeHandler"-->
<!--             @keypress.enter="addNewReminder"-->
    </div>
    <div class="remainder__time">
      <label for="time" class="label">
        Choose time when remind
      </label>
      <input type="time" class="date" id="time">
    </div>
    <button class="btn .button" @click="addNewReminder">
     <router-link to="/page/success">
       add
     </router-link>
    </button>
    <hr/>
<!--    <ul class="list" v-if="notes.length !== 0">-->
<!--      <li v-for="(note, idx) of notes" v-bind:key="note">-->
<!--        {{ note }}-->
<!--        <button class="delete" @click="removeNote(idx)">-->
<!--          Delete-->
<!--        </button>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</div>
</template>

<script>

// import { authInstance, db } from '../firebase'
// import { ref as Firebase, set } from 'firebase/database'

export default {
  name: 'UserPage',
  data () {
    return {
      title: 'Remainder',
      inputValue: '',
      // inputDate: '',
      notes: []
    };
  },
  methods: {
    inputChangeHandler (event) {
      this.inputValue = event.target.value;
      // this.inputDate = event.target.value;
    },
    async addNewReminder () {
      if (this.inputValue.length !== 0) {
        const remainderText = this.inputValue;
        this.notes.push(remainderText);
        this.inputValue = ' ';
      }
    },
    removeNote (idx) {
      this.notes.splice(idx, 1);
    }
  },
  async mounted () {
    console.log('user-page', this.$store.getters['auth/usersInfo']);
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
