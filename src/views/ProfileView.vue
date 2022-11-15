<template>
  
  <main class="profile">
    <h1>Perfil</h1>

    <section class="profile__data">
      <p><strong>Nome: </strong></p>
      <p><strong>Endereço: </strong></p>
      <p><strong>Município: </strong></p>
      <p><strong>Estado: </strong></p>
      <p><strong>País: </strong></p>
      <p><strong>Email registrado: </strong></p>
    </section>
  </main>
</template>

<style lang="scss">
  @import '@/scss/variables';

  .profile{
    &__data{
      background-color: $dark-bg-color;
      width: 70%;
      margin: 20px auto;
      padding: 20px;
      text-align: left;
      border-radius: 12px;
      line-height: 1.5;
      font-size: 18px;

      strong{
        color: $dark-secondary-color;
      }
    }
  }
</style>
