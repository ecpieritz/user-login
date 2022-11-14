<template>
  <Header />
  <nav>
    <router-link to="/">Início</router-link> |
    <router-link to="/list">Listagem</router-link>
  </nav>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header
  }
}

</script>

<style lang="scss">
@import './scss/variables';

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: $bg-color;
  color: $text-color;
}
#app {
  font-family: Montserrat;
  text-align: center;
  h1{
    color: $primary-color;
  }
  nav{
    a{
      color: $dark-primary-color;
      text-decoration: none;
      &:hover,
      &:focus{
        color: $light-primary-color;
      }
    }
  }
}
</style>
