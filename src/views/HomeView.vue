<script setup lang="ts">

</script>

<template>
  <div class="container">
    <img src="https://i.imgur.com/ajXCRQ7.png" alt="" class="pata-vetor-1">
    <img src="https://i.imgur.com/ajXCRQ7.png" alt="" class="pata-vetor-2">
    <img src="https://i.imgur.com/jNuWw1Q.png" alt="" class="forma-vetor-1">
    <img src="https://i.imgur.com/jNuWw1Q.png" alt="" class="forma-vetor-2">
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

  .pata-vetor-1 {
    position: absolute;
    max-width: 10%;
    right: 15%;
    top: 0;
  }

  .pata-vetor-2 {
    position: absolute;
    max-width: 10%;
    left:15%;
    bottom: 0;
    transform: rotate(180deg);
  }

  .forma-vetor-1 {
    position: absolute;
    max-width: 15%;
    right: 20%;
    bottom: -10%;
    z-index: 100;
  }

  .forma-vetor-2 {
    position: absolute;
    max-width: 15%;
    left:15%;
    top: 0%;
    transform: rotate(120deg);
    z-index: -1;
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

  .pata-vetor-1 {
    position: absolute;
    max-width: 20%;
    right: 15%;
    top: 10%;
  }

  .pata-vetor-2 {
    position: absolute;
    z-index: 100;
    max-width: 20%;
    left:5%;
    bottom: 20%;
    transform: rotate(180deg);
  }

  .forma-vetor-1 {
    position: absolute;
    max-width: 25%;
    right: -5%;
    bottom: 0%;
    z-index: 100;
    z-index: 1;
  }

  .forma-vetor-2 {
    position: absolute;
    max-width: 25%;
    left:20px;
    top: 5%;
    transform: rotate(120deg);
    z-index: -1;
  }

}
</style>
