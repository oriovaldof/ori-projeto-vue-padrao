<template>
  <h1>Componente Ola Mundo {{variavel}}</h1>
</template>

<script>
export default {
  data:()=>({
    variavel: process.env.VUE_APP_MINHA_VARIAVEL_DE_AMBIENTE
  }),
  name: 'HelloWorld',
  
}
</script>


<style >

</style>
