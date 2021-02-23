<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light mb-5" style="background-color: #4A235A; height: 50px">
      <div class="dropdown ml-auto">
        <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <router-link class="dropdown-item" to="/admin/profile">Profile</router-link>
          <a class="dropdown-item" href="#" @click="logout()">Logout</a>
        </div>
      </div>
    </nav>

    <div class="sidebar" id="mySidebar">
      <div class="sidebar__list_wrap">
        <ul class="list-group" id="list-tab" role="tablist">
          <li>
            <router-link class="list-group-item list-group-item-action" data-toggle="list" role="tab" to="/admin/dashboard">Dashboard</router-link>
          </li>

          <li>
            <router-link class="list-group-item list-group-item-action" data-toggle="list" role="tab" to="/admin/blogs">Blogs</router-link>
          </li>

          <li>
            <router-link class="list-group-item list-group-item-action" data-toggle="list" role="tab" to="/admin/users">Users</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        window.location.href = "/login";
      }
    }
  }
</script>

<style lang="scss">
  .sidebar {
    max-width: 300px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #764989;

    &__list_wrap {
      padding: 100px 0;
    }
  }

  .list-group-item {
    background-color: transparent !important;
    color: #fff !important;
  }

  .list-group-item.active {
    color: #4A235A !important;
    background-color: #fff !important;
    border-color: #fff !important;
  }

  .dropdown-menu {
    right: 0 !important;
    left: auto !important;
  }
</style>