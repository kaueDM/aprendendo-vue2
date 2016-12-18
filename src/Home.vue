<template>
  <div id="home">
    <h1>{{ projectName }}</h1>
    <h3>{{projectSubhead}}</h3>

    <p>{{projectText}}</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      projectName: 'ConsultaAqui',
      projectSubhead: 'Gerenciador de informações para consultores independentes',
      projectText: 'Com o ConsultaAqui, você tem controle total de todas as informações do seu dia a dia como consultor independente de produtos de estética, beleza e saúde'
    }
  }
}
</script>

<style>
#home {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 32px;
}

h3 {
  border: 1px solid #ccc;
  text-align: center;
  color: #2c3e50;
}

p {
  color: #000;
  text-align: center;
  font-style: italic;
}

</style>
