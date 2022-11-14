<template>
  <nav>
    <router-link to="/">Início</router-link> |
    <router-link to="/list">Listagem</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import './scss/variables';

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Montserrat;
  text-align: center;
  background-color: $bg-color;
}
</style>
