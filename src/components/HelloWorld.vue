<template>
<div>
  <h1>Componente Ola Mundo {{variavel}}</h1>
  <p>Link da API: {{url_api}}</p>
  <p>Modo: {{modo}}</p>
</div>
</template>

<script>
export default {
  data:()=>({
    variavel: process.env.VUE_APP_MINHA_VARIAVEL_DE_AMBIENTE,
    url_api: process.env.VUE_APP_API_URL,
    modo: process.env.VUE_APP_MODO
  }),
  name: 'HelloWorld',
  
}
</script>


<style >

</style>
