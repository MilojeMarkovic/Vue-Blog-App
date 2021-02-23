<template>
  <div class="container">
    <div style="border:1px solid lightgray">
      <div class="p-3">
        <h2 class="mb-3">Users</h2>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addUser">Add user</button>
      </div>

      <div class="p-3" v-if="users">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>

          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.firstName }} {{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>
              <a href="" class="mr-2">edit</a>
              <a href="">delete</a>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="modal fade" id="addUser" tabindex="-1" role="dialog" aria-labelledby="addUserLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form @submit.prevent="addUser">
            <div class="modal-header">
              <h5 class="modal-title" id="addUserLabel">Add User</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12 col-xs-12">
                  <div class="form-group">
                    <label for="">First Name</label>
                    <input class="form-control" type="text">
                  </div>
                </div>
                <div class="col-md-12 col-xs-12">
                  <div class="form-group">
                    <label for="">Last Name</label>
                    <input class="form-control" type="text">
                  </div>
                </div>
                <div class="col-md-12 col-xs-12">
                  <div class="form-group">
                    <label for="">Email</label>
                    <input class="form-control" type="text">
                  </div>
                </div>
                <div class="col-md-12 col-xs-12">
                  <div class="form-group">
                    <label for="">Phone</label>
                    <input class="form-control" type="text">
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: null,
      }
    },

    methods: {
      getUsers() {
        this.users = JSON.parse(localStorage.getItem('users'));
      },

      addUser() {
        console.log("object");
      }
    },

    mounted() {
      this.getUsers();
    }
  }
</script>

<style lang="scss" scoped>
  table {
    width: 100%;
  }

  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th, td {
    padding: 5px;
    text-align: center;    
  }
</style>