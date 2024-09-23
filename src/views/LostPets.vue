<template>
  <div class="lost-pets-view">
    <br>
    <h1>Registrar Animal Perdido</h1>
    <br>

    <div class="form-container">
      <img src="https://i.imgur.com/2Gaju0g.png" alt="" class="pet-form">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="animalType">Tipo de Animal:</label>
          <select v-model="formData.animalType" required>
            <option value="" disabled selected>Escolha um tipo</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div class="form-group">
          <label for="petName">Nome do Pet:</label>
          <input type="text" v-model="formData.petName" required />
        </div>

        <div class="form-group">
          <label for="breed">Raça:</label>
          <input type="text" v-model="formData.breed" required />
        </div>

        <div class="form-group">
          <label for="color">Cor:</label>
          <input type="text" v-model="formData.color" required />
        </div>

        <div class="form-group">
          <label for="age">Idade Aproximada:</label>
          <input type="number" v-model="formData.age" required />
        </div>

        <div class="form-group">
          <label for="location">Local onde se Perdeu:</label>
          <input type="text" v-model="formData.location" required />
        </div>

        <div class="form-group">
          <label for="lastSeen">Última vez visto:</label>
          <input type="datetime-local" v-model="formData.lastSeen" required />
        </div>

        <div class="form-group">
          <label for="photo">Foto do Pet:</label>
          <input type="file"/>
        </div>

        <div class="form-group">
          <label for="description">Descrição Adicional:</label>
          <textarea v-model="formData.description"></textarea>
        </div>

        <div class="form-group">
          <label for="contact">Contato do Dono:</label>
          <input type="text" v-model="formData.contactName" placeholder="Nome" required />
          <input type="tel" v-model="formData.contactPhone" placeholder="Telefone" required />
          <input type="email" v-model="formData.contactEmail" placeholder="E-mail" required />
        </div>
        <button type="submit">Registrar Animal Perdido</button>

      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  animalType: '',
  petName: '',
  breed: '',
  color: '',
  age: null,
  location: '',
  lastSeen: '',
  photo: null,
  description: '',
  contactName: '',
  contactPhone: '',
  contactEmail: '',
});

const submitForm = () => {
  console.log(formData.value);
};
</script>

<style scoped>
.lost-pets-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  color: #ffffff;
}

.form-container {
  overflow: visible;
  position: relative;
  width: 100%;
  max-width: 1140px;
}

.pet-form {
  position: absolute;
  top: -150px; /* Ajuste a posição vertical */
  right: -8%;
  transform: translateX(-50%);
  height: 295px; /* Ajuste o tamanho da imagem conforme necessário */
  z-index: 10000;
}

form {
  overflow: visible;
  position: relative;
  max-width: 1140px;
  padding: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 1.5rem;
  background-color: #007B98;
  color: #f5f5f5;
  border-radius: 60px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

label {
  display: block;
  font-size: 14px;
  font-weight: 300;
}

input, select, textarea {
  width: 250px;
  padding: 0.8rem;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  border-radius: 30px;
}

button {
  background-color: #069e6f;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}

button:hover {
  background-color: #067e5f;
}
</style>
