<template>
  <div :class="[!isError ? 'sign-error' : 'auth-error']" class="error">
    <p> {{ fbErrorMap.value }}</p>
  </div>
  <div class="container">
    <v-form @submit="handleSubmit" class="form" v-model="formRegistr">
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
      },
      isError: false,
      fbErrorMap: {
        key: 'auth/email-already-in-use',
        value: 'Email already in use'
      }
    };
  },
  methods: {
    async handleSubmit () {
      const formData = {
        email: this.formRegistr.email,
        password: this.formRegistr.password,
        name: this.formRegistr.name
      };
      try {
        await this.$store.dispatch('auth/register', formData);
        // await this.$store.dispatch('auth/isAuth');
        await this.$router.push('/page');
      } catch (error) {
        this.isError = error;
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

.buttons {
  display: flex;
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
  margin: 70px auto;
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
