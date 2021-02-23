<template>
  <div>
    <navigation-bar v-if="pages"></navigation-bar>
    <div id="addMargin">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import NavigationBar from './views/NavigationBar.vue';

  export default {
    components: {
      NavigationBar,
    },

    computed: {
      pages() {
        if( window.location.href != 'http://localhost:8080/login' && 
            window.location.href != 'http://localhost:8080/register' && 
            window.location.href != 'http://localhost:8080/blogs-page' &&
            window.location.href != 'http://localhost:8080/favorite-blogs' &&
            window.location.href != 'http://localhost:8080/profile') 
          {
          return true;
        } else {
          return false;
        }
      },
    },

    mounted() {
      const addSideMargin = document.getElementById('addMargin')
      if( window.location.href != 'http://localhost:8080/login' && 
          window.location.href != 'http://localhost:8080/register' && 
          window.location.href != 'http://localhost:8080/blogs-page' &&
          window.location.href != 'http://localhost:8080/favorite-blogs' &&
          window.location.href != 'http://localhost:8080/profile')
        {
        addSideMargin.style.marginLeft = "300px"
      } else {
        addSideMargin.style.marginLeft = "0px"
      }
    }
  }
</script>