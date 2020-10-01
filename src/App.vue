<template>
  <div id="app">
    <b-navbar class="nav" type="dark" variant="dark">
      <b-navbar-brand><h1><router-link style="color: white; text-decoration: none;" :to="{ name: 'home' }">Home</router-link></h1></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link style="color: white; text-decoration: none;" :to="{ name: 'create' }">AddBook</router-link></b-nav-item>
      </b-navbar-nav>      
    </b-collapse>
    </b-navbar>
    
    <router-view></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
