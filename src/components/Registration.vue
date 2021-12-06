<template>
  <div class="container">
    <div class="massage"></div>
    <v-form @submit="handleSubmit" class="form">

      <div class="form-control">
        <label for="name">User Name:</label>
        <v-field name="name" v-slot={field} rules="required">
          <input v-bind="field" v-model="formRegistr.name" name="name" id="name" type="text">
        </v-field>
        <div class="validation">
          <v-error-message name="name"/>
        </div>
      </div>

      <div class="form-control">
        <label for="email">Email:</label>
        <v-field name="email" v-slot={field} rules="email|required">
          <input v-bind="field" v-model="formRegistr.email" name="email" id="email" type="email">
        </v-field>
        <div class="validation">
          <v-error-message name="email"/>
        </div>
      </div>

      <div class="form-control">
        <label for="password">Password:</label>
        <v-field name="password" v-slot={field} rules="required|min">
          <input v-bind="field" v-model="formRegistr.password" name="password" id="password" type="password">
        </v-field>
        <div class="validation">
          <v-error-message name="password"/>
        </div>
      </div>

      <div class="buttons">
        <button type="submit" class="submit">
          Sign up
        </button>
      </div>
    </v-form>
  </div>
</template>

<script>
import * as V from 'vee-validate/dist/vee-validate';
import { defineRule } from 'vee-validate/dist/vee-validate';
import { email, required, min } from '@vee-validate/rules';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'register',
  components: {
    VField: V.Field,
    VForm: V.Form,
    VErrorMessage: V.ErrorMessage
  },
  data () {
    return {
      formRegistr: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async handleSubmit () {
      try {
        const auth = getAuth();
        const {
          email,
          password
        } = this.formRegistr;
        console.log(email);
        await createUserWithEmailAndPassword(auth, email, password);
        await this.$router.push('/page/:id');
      } catch (e) {
        alert(e.message);
      }
    }
  },
  setup () {
    defineRule('email', email);
    defineRule('required', (value) => {
      if (!value) {
        return 'It is a required field';
      }
      return true;
    });
    defineRule('min', (value) => {
      if (value.length < 6) {
        return 'Min length is 6 symbols';
      }
      return true;
    });

    return {
      required,
      email,
      min
    };
  }
};
</script>

<style scoped>
input[type='text'],
input[type='email'],
input[type='password'],
input[type='date'],
select,
textarea {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
}

.authError {
  background-color: rgba(229, 226, 226, 0.829);
  text-align: center;
  color: #3f51b5;
  font-weight: bold;
  height: 35px;
  width: 100%;
  margin-bottom: -35px;
  margin-top: 30px;
}

.buttons {
  display: flex;
}

ul {
  list-style: none;
}

button {
  padding: 10px;
  width: 100px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 18px;
}

button:disabled {
  cursor: not-allowed;
  background: gray;
  color: #111;
}

.submit {
  background-color: #00cc99;
  margin-right: 15px;
}

.submit:hover {
  opacity: 60%;
  transition: 0.3s ease;
}

label {
  font-size: 20px;
  color: gray;
}

.form {
  max-width: 600px;
  margin: 50px auto;
}

.form-control {
  display: block;
  color: #888;
  margin-bottom: .8rem;
}

.form-control.invalid {
  color: red;
}

.validation {
  color: #dc3545;
}

</style>
