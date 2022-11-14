<template>
  <main class="login">
    <section class="login__forms">
      <form class="login__forms__login">
        <h2>Login</h2>
        <div>
          <label for="login-email">Email</label>
          <input type="login-email" id="login-email" name="login-email" autocomplete="login-email" required
            enterkeyhint="next" v-model="registerForm.email" />
        </div>

        <div>
          <label for="login-password">Senha</label>
          <input type="login-password" id="login-password" name="login-password" autocomplete="login-password" required
            enterkeyhint="next" v-model="registerForm.password" />
        </div>
        <input type="submit" value="Login">

      </form>

      <form class="login__forms__register">
        <h2>Não tem registro? Então faça um agora!</h2>
        <div>
          <label for="name">Nome Completo</label>
          <input type="text" id="name" name="name" autocomplete="name" required enterkeyhint="next"
            v-model="registerForm.name" />
        </div>

        <div class="login__forms__register__address">
          <div>
            <label for="street-address">Endereço</label>
            <input type="text" id="street-address" name="street-address" autocomplete="street-address" required
              enterkeyhint="next" v-model="registerForm.addressStreet" />
          </div>

          <div>
            <div>
              <label for="address-number">Número</label>
              <input type="text" id="address-number" name="address-number" autocomplete="address-number" required
                enterkeyhint="next" v-model="registerForm.addressNumber" />
            </div>

            <div>
              <label for="address-complement">Complemento</label>
              <input type="text" id="address-complement" name="address-complement" autocomplete="address-complement"
                enterkeyhint="next" v-model="registerForm.addressComplement" />
            </div>
            
            <div>
              <label for="address-cep">CEP</label>
              <input type="text" id="address-cep" name="address-cep" autocomplete="address-cep"
                required enterkeyhint="next" v-model="registerForm.addressCep" />
            </div>
          </div>
          
          <div>
            <div>
              <label for="address-city">Município</label>
              <input type="text" id="address-city" name="address-city" autocomplete="address-city" required
                enterkeyhint="next" v-model="registerForm.addressCity" />
            </div>

            <div>
              <label for="address-state">Estado</label>
              <input type="text" id="address-state" name="address-state" autocomplete="address-state"
                enterkeyhint="next" v-model="registerForm.addressState" />
            </div>
            
            <div>
              <label for="address-country">País</label>
              <input type="text" id="address-country" name="address-country" autocomplete="address-country"
                required enterkeyhint="next" v-model="registerForm.addressCountry" />
            </div>
          </div>
        </div>

        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" autocomplete="email" required enterkeyhint="next"
            v-model="registerForm.email" />
        </div>

        <div>
          <label for="password">Senha</label>
          <input type="password" id="password" name="password" autocomplete="password" required enterkeyhint="next"
            v-model="registerForm.password" />
        </div>


        <input type="submit" value="Registrar">
      </form>

    </section>
  </main>
</template>

<script>
// import { useStore } from 'vuex';
import { ref } from 'vue'

export default {
  setup() {
    const loginForm = ref({})
    const registerForm = ref({})
    // const store = useStore()

    return {
      loginForm, registerForm
    }
  }
}
</script>

