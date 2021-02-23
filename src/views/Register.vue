<template>
  <div class="container">
    <div class="register">
      <div class="register__wrap">
        <form action="" @submit.prevent="register">
          <div class="row mb-4">
            <div class="col-md-6 col-xs-12 mb-3">
              <label for="firstname">First Name</label>
              <input type="text" v-model="user.firstName" id="firstname" class="form-control">
            </div>

            <div class="col-md-6 col-xs-12 mb-3">
              <label for="lastname">Last Name</label>
              <input type="text" v-model="user.lastName" id="lastname" class="form-control">
            </div>
          
            <div class="col-md-6 col-xs-12 mb-3">
              <label for="email">Email Address</label>
              <input type="text" autocomplete="off" v-model="user.email" id="email" class="form-control">
            </div>

            <div class="col-md-6 col-xs-12 mb-3">
              <label for="password">Password</label>
              <input type="password" v-model="user.password" id="password" class="form-control">
            </div>

            <div class="col-md-6 col-xs-12 mb-3">
              <label for="address">Address</label>
              <input type="text" id="address" class="form-control">
            </div>

            <div class="col-md-6 col-xs-12 mb-3">
              <label for="city">City</label>
              <input type="text" id="city" class="form-control">
            </div>

            <div class="col-md-6 col-xs-12 mb-3">
              <label for="zip">Zip</label>
              <input type="text" name="" class="form-control" id="zip">
            </div>

            <div class="col-md-6 col-xs-12 mb-3">
              <label for="state">State</label>
              <select name="" id="state" class="form-control">
                <option value="">Serbia</option>
              </select>
            </div>

            <div class="col-md-6 col-xs-12 mb-3">
              <label for="phone">Phone Number</label>
              <input type="text" id="phone" class="form-control">
            </div>
          </div>

          <div class="text-center mb-4">
            <button class="btn btn-info">Register</button>
            <!-- <button type="button" @click="removeUsers()" class="btn btn-danger ml-4">Delete Users</button> -->
          </div>

          <div class="text-center">
            <p>Already have an account, <router-link to="login">Sign in</router-link> here.</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        },

        users: [
          { firstName:"Admin", lastName:"Admin", email:"admin@admin.com", password:"password"}
        ],
        registeredUsers: [],
      }
    },

    methods: {
      register() {
        alert(this.registeredUsers)
        if(this.user.firstName != '' && this.user.lastName != '' && this.user.email != '' && this.user.password != '') {
          this.users.push(this.user);
          localStorage.setItem('users', JSON.stringify(this.users));
          window.location.href = '/login';
        } else {
          alert('You must fill out all the required fields');
        }
      },

      removeUsers() {
        localStorage.clear();
        location.reload();
      }
    },
  }
</script>

<style lang="scss" scoped>
  .register {
    margin: 200px auto 0 auto;
  }
</style>