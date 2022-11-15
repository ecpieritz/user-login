<template>
  <Header />
  <nav v-if="$store.state.user">
    <router-link to="/">Início</router-link> |
    <router-link to="/profile">Perfil</router-link> |
    <button @click="$store.dispatch('logout')">Sair</button>
  </nav>
  <router-view />
</template>

<script>
import Header from './components/Header.vue';
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    Header
  },
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

    // return{
    //   user: store.state.user
    // }
  }
}

</script>

<style lang="scss">
@import './scss/variables';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $bg-color;
  color: $text-color;
}

#app {
  font-family: Montserrat;
  text-align: center;

  h1 {
    color: $primary-color;
  }

  nav {
    text-align: end;
    margin-bottom: 30px;
    margin-right: 40px;

    a {
      color: $dark-primary-color;
      text-decoration: none;

      &:hover,
      &:focus {
        color: $light-primary-color;
      }
    }

    button {
      border: none;
      border-radius: 4px;
      padding: 2px 10px;
      font-family: Montserrat;
      font-size: 16px;
      color: $bg-color;
      background-color: $dark-primary-color;

      &:hover {
        cursor: pointer;
        background-color: $primary-color;
      }
    }
  }
}
</style>
