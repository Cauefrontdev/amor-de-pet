<script setup lang="ts">
import { RouterView } from 'vue-router'; 
import Navbar from './components/Navbar.vue'; 

</script>

<template>
  <Navbar /> 
  <div class="container">
    <img src="https://i.imgur.com/ajXCRQ7.png" alt="" class="pata-vetor-1">
    <img src="https://i.imgur.com/ajXCRQ7.png" alt="" class="pata-vetor-2">
    <img src="https://i.imgur.com/jNuWw1Q.png" alt="" class="forma-vetor-1">
    <img src="https://i.imgur.com/jNuWw1Q.png" alt="" class="forma-vetor-2">
    <RouterView /> 
  </div>
</template>


<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: "Poppins", system-ui;
  margin: 0;
  padding: 0;
}

body {
  background-color: #00bbb4;
}

.container {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
  position: relative;
  background-color: rgba(255, 228, 196, 0);
  }

  .pata-vetor-1 {
    position: absolute;
    max-width: 10%;
    right: 15%;
    top: 0;
    z-index: -1;
  }

  .pata-vetor-2 {
    position: absolute;
    max-width: 10%;
    left:15%;
    bottom: 0;
    transform: rotate(180deg);
    z-index: -1;
  }

  .forma-vetor-1 {
    position: absolute;
    max-width: 15%;
    right: 20%;
    bottom: -10%;
    z-index: -1;
  }

  .forma-vetor-2 {
    position: absolute;
    max-width: 15%;
    left:15%;
    top: 0%;
    transform: rotate(120deg);
    z-index: -1;
  }

  button {
    max-width: 150px;
  border: none;
  text-align: center;
  padding: 7px 25px;
  border-radius: 30px;
  background-color: #069e6f;
  color: white;
  font-size: 18px;
  transition: 400ms;
}

button:hover {
  background-color: #069e6e86;
  cursor: pointer;
  color: #ffffff64;
}

  @media (max-width: 844px) {

    .container {
      overflow: visible;
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

