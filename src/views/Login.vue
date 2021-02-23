<template>
  <div class="login container">
    <div class="text-center">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="login__wrap">
      <form action="" @submit.prevent="login">
        <div class="row mb-4">
          <div class="col-md-12 col-xs-12 mb-3">
            <label for="email">Email Address</label>
            <input type="text" v-model="email" id="email" class="form-control">
          </div>
          <div class="col-md-12 col-xs-12">
            <label for="password">Password</label>
            <input type="password" v-model="password" id="password" class="form-control">
          </div>
        </div>

        <div class="mb-5 text-center">
          <button class="btn btn-primary" type="submit">Login</button>
        </div>

        <div class="text-center">
          <p>Don't have an account <router-link to="/register">Register</router-link> here.</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  data() {
    return {
      email: '',
      password: '',

      admin: null,
      user: null,
    }
  },
  methods: {
    login() {
      if(this.email != '' && this.password != '') {
        if(this.email === this.admin.email && this.password === this.admin.password) {
          window.location.href = '/admin/dashboard';
        } else if (this.email === this.user.email && this.password == this.user.password) {
          window.location.href = '/blogs-page'
        } else {
          alert('You are not registered. Fill out register form.')
        }
      } else {
        alert('You must enter email and pawssord')
      }
    }
  },

  mounted() {
    if(localStorage.getItem('users')) {
      this.admin = JSON.parse(localStorage.getItem('users') || '')[0];
      this.user = JSON.parse(localStorage.getItem('users') || '')[1];
    }
  }
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
  .login {
    margin-top: 100px;
  
    &__wrap {
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
    }
  }
</style>
