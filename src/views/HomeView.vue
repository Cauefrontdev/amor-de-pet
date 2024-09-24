<script setup lang="ts">

</script>

<template>
  <div class="container">
    <img src="https://i.imgur.com/TCuTaSW.png" alt="imagem-de-pet" class="pets">
    <div class="text-box">
      <img src="https://i.imgur.com/AGZemED.png" alt="logo" class="logo">
      <h1>Conectando Corações,<br> Resgatando Vidas.</h1>
      <p>Registre ou encontre pets perdidos,<br> adote animais carentes e ajude a transformar vidas.</p>
    </div>
  </div>
</template>

<style  scoped>


  .pets {
    position: absolute;
    bottom: 0;
    max-width: 30%;
  }

  .text-box {
    gap: 20px;
    flex-direction: column;
    display: flex;
    text-align: center;
    color: white;
    margin-bottom: 15%;

    & h1 {
      font-size: 45px;
      line-height: 1;
      height: 100px;
    }

    & img {
      max-width: 500px;
    }

    & p {
      font-weight: 300;
    }
  }



  @media (max-width: 844px) {

    .pets {
    position: absolute;
    bottom: 0;
    max-width: 100%;
  }

  .text-box {
    padding-left: 20px;
    gap: 20px;
    flex-direction: column;
    display: flex;
    text-align: left;
    color: white;
    margin-bottom: 15%;

    & h1 {
      font-size: 30px;
      max-width: 90%;
    }

    & img {
      width: 90%;
      
    }

    & p {
      font-weight: 300;
      max-width: 90%;
    }
  }


}
</style>
