<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header>
    <div class="navbar">
      <img src="https://i.imgur.com/AGZemED.png" alt="logo" class="logo">
      <nav class="nav-list" :class="{ 'active': isMenuOpen }">
        <button class="close-btn" @click="toggleMenu">✖</button>
        <RouterLink class="link" to="/" @click="toggleMenu">Home</RouterLink>
        <RouterLink class="link" to="/lost-pets" @click="toggleMenu">Pets Perdidos</RouterLink>
        <RouterLink class="link" to="/adoption" @click="toggleMenu">Adoção</RouterLink>
        <RouterLink class="link" to="/contacts" @click="toggleMenu">Contatos</RouterLink>
        <RouterLink class="link" to="/donations" @click="toggleMenu">Doações</RouterLink>
        <button>Entrar</button>
      </nav>
      <div class="hamburger" @click="toggleMenu">
        ☰
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 19vh;
  margin-top: 1vh;
  gap: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
  width: auto;
  padding: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-radius: 60px;
  position: relative;
}

.nav-list {
  display: flex;
  gap: 1.8rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.logo {
  display: none;
  width: 10rem;
}

.link {
  font-size: 1rem;
  text-decoration: none;
  color: #3333339e;
  font-weight: 300;
  transition: 400ms;
}

.link:hover {
  cursor: pointer;
  color: #3333335c;
}

button {
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

/* Estilos do menu "hambúrguer" para telas menores */
.hamburger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
}

/* Estilo do botão de fechar */
.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: #069e6f;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: none;
}

/* Responsividade */
@media (max-width: 844px) {

  .close-btn  {
    display: block;
  }

  .navbar {
    width: 70%;
    background-color: #f5f5f5;
    padding: 1rem 2rem;
  }
  .nav-list {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: #f5f5f5;
    flex-direction: column;
    gap: 2.5rem;
    padding: 2rem;
    border-radius: 0 0 0 15px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    display: flex;
    z-index: 10;
  }

  .nav-list.active {
    transform: translateX(0);
  }

  .hamburger {
    display: block;
    color: #069e6f;
  }

  .logo {
    width: 12rem;
    display: block;
  }
}
</style>
