<template>
  <main class="login">
    <section class="login__forms">
      <div class="login__forms__login">
        <form class="login__forms__login__form" @submit.prevent="login">
          <h2>Login</h2>
          <div class="login__forms__login__form__form">
            <div class="login__forms__login__form__form__1-input">
              <label class="login__forms__label" for="login-email">Email</label>
              <input type="login-email" id="login-email" name="login-email" autocomplete="login-email" required
              enterkeyhint="next" v-model="loginForm.email" />
            </div>
            
            <div class="login__forms__login__form__form__1-input">
              <label class="login__forms__label" for="login-password">Senha</label>
              <input type="password" id="login-password" name="login-password" autocomplete="login-password" required
                enterkeyhint="next" v-model="loginForm.password" />
            </div>
          </div>
          
          <input class="login__forms__button" type="submit" value="Login">
        </form>

      </div>

      <div class="login__forms__register">
        <form class="login__forms__register__form" @submit.prevent="register">
          <h2>Não tem registro? Crie um agora!</h2>
          <div>
            <label class="login__forms__label" for="name">Nome Completo</label>
            <input type="text" id="name" name="name" autocomplete="name" required enterkeyhint="next"
              v-model="registerForm.name" />
          </div>
  
          <div class="login__forms__register__form__address">
            <div class="login__forms__register__form__address__1-input">
              <label class="login__forms__label" for="street-address">Endereço</label>
              <input type="text" id="street-address" name="street-address" autocomplete="street-address" required
                enterkeyhint="next" v-model="registerForm.addressStreet" />
            </div>
  
            <div class="login__forms__register__form__address__3-inputs">
              <div>
                <label class="login__forms__label" for="address-number">Número</label>
                <input type="text" id="address-number" name="address-number" autocomplete="address-number" required
                  enterkeyhint="next" v-model="registerForm.addressNumber" />
              </div>
  
              <div>
                <label class="login__forms__label" for="address-complement">Complemento</label>
                <input type="text" id="address-complement" name="address-complement" autocomplete="address-complement"
                  enterkeyhint="next" v-model="registerForm.addressComplement" />
              </div>
              
              <div>
                <label class="login__forms__label" for="address-cep">CEP</label>
                <input type="text" id="address-cep" name="address-cep" autocomplete="address-cep"
                  required enterkeyhint="next" v-model="registerForm.addressCep" />
              </div>
            </div>
            
            <div class="login__forms__register__form__address__3-inputs">
              <div>
                <label class="login__forms__label" for="address-city">Município</label>
                <input type="text" id="address-city" name="address-city" autocomplete="address-city" required
                  enterkeyhint="next" v-model="registerForm.addressCity" />
              </div>
  
              <div>
                <label class="login__forms__label" for="address-state">Estado</label>
                <input type="text" id="address-state" name="address-state" autocomplete="address-state"
                  enterkeyhint="next" v-model="registerForm.addressState" />
              </div>
              
              <div>
                <label class="login__forms__label" for="address-country">País</label>
                <input type="text" id="address-country" name="address-country" autocomplete="address-country"
                  required enterkeyhint="next" v-model="registerForm.addressCountry" />
              </div>
            </div>
          </div>
  
          <div class="login__forms__register__form__address__1-input">
            <label class="login__forms__label" for="email">Email</label>
            <input type="email" id="email" name="email" autocomplete="email" required enterkeyhint="next"
              v-model="registerForm.email" />
          </div>
  
          <div class="login__forms__register__form__address__1-input">
            <label class="login__forms__label" for="register-password">Senha</label>
            <input type="password" id="register-password" name="register-password" autocomplete="register-password" required enterkeyhint="next"
              v-model="registerForm.password" />
          </div>
          <input class="login__forms__button register" type="submit" value="Registrar">
        </form>
        
      </div>

    </section>
  </main>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
  setup() {
    const loginForm = ref({})
    const registerForm = ref({})
    const store = useStore()

    const login = ()=>{
      store.dispatch('login', loginForm.value)
    }

    const register = ()=>{
      store.dispatch('register', registerForm.value)
    }

    return {
      loginForm, registerForm, login, register
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/variables';

  .login{
    padding: 60px 200px;
    font-family: Montserrat;

    
    &__forms{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      color: $text-color;

      &__login{
        width: 100%;
        &__form{
          &__form{
            display: flex;
            flex-direction: column;
            width: 80%;
            margin: auto;
            
            &__1-input{
              &:first-child{
                input{
                  margin-top: -4px;
                }
              }
              &:last-child{
                input{
                  margin-top: -3px;
                }
              }
              input{
                margin-bottom: 10px;
                padding: 5px;
                border: none;
                width: 80%;
                float: right;
              }
            }
  
          }
          h2{
            margin-bottom: 20px;
          }
        }
      }

      &__register{
        width: 100%;
        h2{
          margin-bottom: 20px;
        }

        &__form{
          input{
            display: flex;
            flex-direction: row;
            margin-bottom: 10px;
            width: 100%;
            padding: 5px;border: none;

          }
          .login__forms__button{
            &.register{
              width: fit-content !important;
              margin: 30px auto;
            }
          }
  
          &__address{
            width: 100%;
  
            &__3-inputs{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              gap: 5px;
  
              input{
                width: 100%;
              }
            }
          }
        }
      }

      &__button{
        font-family: Montserrat;
        font-weight: 700;
        font-size: 18px;
        background-color: $primary-color;
        color: $bg-color;
        border: none;
        border-radius: 8px;
        text-align: center !important;
        padding: 10px 20px !important;
        margin-top: 20px;

        &:hover{
          background-color: $light-primary-color;
          cursor: pointer;
        }
      }
    }
  }
  
  
  @media(min-width: 681px) and (max-width: 996px){
   .login{
    padding: 20px;

    &__forms{
      flex-direction: row;
      gap: 20px;

      &__login{
        &__form{
          &__form{
            width: 100%;
          }
        }
      }

      &__register{
        &__form{
          &__address{
            &__3-inputs{
              gap: 5px;
            }
          }
        }
      }
    }
   }       
  }

  @media(max-width: 680px){
   .login{
    padding: 20px;

    &__forms{
      flex-direction: column;

      &__login{
        &__form{
          &__form{
            width: 100%;
          }
        }
      }

      &__register{
        margin-top: 60px;
        &__form{
          &__address{
            &__3-inputs{
              gap: 5px;
            }
          }
        }
      }
    }
   }       
  }
</style>