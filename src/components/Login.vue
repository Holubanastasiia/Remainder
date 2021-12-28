<template>
  <div :class="[!isError ? 'sign-error' : 'auth-error']" class="error">
    <p> {{ fbErrorMap.value }}</p>
  </div>
  <div class="container">
    <V-form class="form" @submit="handleSubmit">
      <div class="form-control">
        <label for="email">Email:</label>
        <v-field name="email" v-slot={field} rules="email|required">
          <input v-bind="field" v-model="formLogin.email" name="email" id="email" type="email">
        </v-field>
        <div class="validation">
          <v-error-message name="email"/>
        </div>
      </div>

      <div class="form-control">
        <label for="password">Password:</label>
        <v-field name="password" v-slot={field} rules='required|min:6'>
          <input v-bind="field" v-model="formLogin.password" name="password" id="password" type="password">
        </v-field>
        <v-error-message name="password" class="validation"/>
      </div>
      <div class="buttons">
        <button type="submit" class="submit">
          Login
        </button>
        <button class="submit">
          <router-link to="/registration">
            Sign up
          </router-link>
        </button>
      </div>
    </V-form>
  </div>
</template>

<script>
import * as V from 'vee-validate/dist/vee-validate';
import { defineRule } from 'vee-validate/dist/vee-validate';
import { email, required, min } from '@vee-validate/rules';

export default {
  name: 'login',
  components: {
    VField: V.Field,
    VForm: V.Form,
    VErrorMessage: V.ErrorMessage
  },
  data () {
    return {
      formLogin: {
        email: '',
        password: ''
      },
      isError: false,
      fbErrorMap: {
        key: 'auth/user-not-found',
        value: 'User not found'
      }
    };
  },
  methods: {
    async handleSubmit () {
      const formData = {
        email: this.formLogin.email,
        password: this.formLogin.password
      };
      try {
        await this.$store.dispatch('auth/login', formData);
        console.log(formData);
        await this.$router.push('/page');
      } catch (e) {
        this.isError = e;
        setTimeout(() => {
          this.isError = false;
        }, 5000);
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
      min,
      email
    };
  }
};
</script>

<style scoped>

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
