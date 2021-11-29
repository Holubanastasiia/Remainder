<template>
  <div class="container">

    <div></div>
    <form class="form">

      <div class="form-control">
        <label for="name">User Name:</label>
        <input id="name" type="text">
        <div class="validation">
          <small>Enter user name</small>
        </div>
      </div>

      <div class="form-control">
        <label for="password">Password:</label>
        <input id="password" type="password">
        <div class="validation">
          <small>Enter password</small>
          <small>Password may have
          </small>
        </div>
      </div>

      <div class="buttons">
        <router-link to="/page/:id">
          <button type="submit" class="submit">
            Login
          </button>
        </router-link>
        <!--        <button type="button" class="submit">-->
        <!--          <router-link to="/">Logout</router-link>-->
        <!--        </button>-->
      </div>

    </form>
  </div>
</template>

<script>

export default {
  name: 'Login'
}
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
