<template>
  <div id="app" class="container">

    <div class="row">
      <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card hoverable"  style="border: 2px solid #212121;">
          <div class="card-content">
            <p class="card-title center-align">Conecte-se para continuar</p>
            <br>
            <div class="row">
              <form class="col s12">

                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix orange-text text-darken-4">account_circle</i>
                    <input type="email" class="validate" v-model="user_email">
                    <label for="user_email" data-error="Email inválido" data-success="Email válido">Email</label>
                  </div>
                </div>

                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix orange-text text-darken-4">vpn_key</i>
                    <input type="password" class="validate" v-model="user_password">
                    <label for="user_password">Senha</label>
                  </div>
                </div>

              </form>
            </div>

            <button class="right btn waves-effect waves-light orange darken-4" >Acessar
          <i class="material-icons right">send</i>
          </button>

          </div>
          <div class="card-action">
            <p class="center-align">Não possui uma conta?</p>
            <h5 class="center-align orange-text text-darken-4">Cadastre-se agora</h5>
          </div>
        </div>
      </div>
    </div>

    <!-- <router-link to="/home">Home</router-link>
    <router-link to="/dash">Dashboard</router-link>

    <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      user_email: '',
      user_password: '',
      projectName: '',
      projectSubhead: 'Gerenciador de informações para consultores independentes',
    }
  }
}
</script>
