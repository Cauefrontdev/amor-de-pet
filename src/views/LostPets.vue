<template>
  <div class="lost-pets-view">
    <div class="signup-container">
  
  <div class="right-container">
    <img class="pet-photo" src="https://i.imgur.com/J2WLRyZ.png" alt="pet-photo">
    <header>
      <h1>Registro de pet perdido</h1>
      <div class="set">
        <div class="pets-name">
          <label for="pets-name">Nome</label>
          <input id="pets-name" type="text" placeholder="Nome do Pet">
        </div>
        <div class="pets-name">
          <label for="name">Nome</label>
          <input id="name" type="text" placeholder="Nome do dono">
        </div>
        
      </div>
      
      <div class="set">
        <div class="pets-breed">
          <label for="pets-breed">Raça</label>
          <input id="pets-breed" type="text" placeholder="Raça do Pet">
        </div>
        <div class="pets-breed">
          <label for="pets-breed">Número</label>
          <input type="text" id="telefone" maxlength="15" placeholder="(00) 0000-00000">
        </div>
       
      </div>
      
      <div class="set">
        <div class="pets-gender">
          <label for="pet-gender-female">Gênero</label>
          <div class="radio-container">
            <input id="pet-gender-female" name="pet-gender" type="radio" value="female" checked>
            <label class="f" for="pet-gender-female">Fêmea</label>
            <input id="pet-gender-male" name="pet-gender" type="radio" value="male">
            <label class="m" for="pet-gender-male">Macho</label>
          </div>
        </div>
        <div class="pets-breed">
          <label for="pets-breed">Endereço</label>
          <input type="text" id="text" placeholder="Endereço do dono">
        </div>
      </div>
      <div class="set">
        <div class="pets-breed">
          <label for="pets-breed">Endereço e enviar foto</label>
          <input type="text" id="text" placeholder="Último lugar visto">
        </div>
      </div>
      <div class="set">
        <label class="custum-file-upload" for="file">
          <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
          </div>
            <input type="file" id="file">
          </label>
      </div>
      <div class="set">
        <button>Enviar</button>
      </div>
    </header>
  </div>
</div>
    </div>

</template>

<script setup lang="ts">

</script>


<style scoped>
  * {
    overflow: visible;
  }

  .lost-pets-view {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

 .signup-container {
   width: 100vw;
   width: 100%;
   background-color: #00000000;
	 display: flex;
   justify-content: center;
	 max-width: 900px;
}

 
 .right-container {
  overflow: hidden;
  position: relative;
	 background: #007B98;
	 display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   color: #fff;
   border-radius: 60px;
	 grid-template-areas: "." ".";
	 width: 700px;
}

.pet-photo{
  transform: rotate(-20deg);
  position: absolute;
  max-height: 300px;
  bottom: 0;
  right: -100px;
}

.right-container input:focus {
  border-color: #069E6F; 
  outline: none; 
  box-shadow: 0 0 5px rgba(6, 158, 111, 0.5); 
}
 .right-container h1:nth-of-type(1) {
	 color: #fff;
	 font-size: 28px;
	 font-weight: 600;
}
 .right-container .set {
	 display: flex;
	 justify-content: space-left;
   gap: 30px;
	 margin: 10px 0;
}
 .right-container input {
	 border: 1px solid rgba(0, 0, 0, .1);
	 border-radius: 30px;
	 height: 38px;
	 line-height: 38px;
	 padding:0.8rem;
}
 .right-container input, .right-container label {
	 color: #f5f5f5;
}
 .right-container header {
	 padding: 40px;
}
 .right-container label, .right-container input, .right-container .pets-photo {
	 width: 18rem;
}
 .right-container .pets-photo {
	 align-items: center;
	 display: grid;
	 grid-template-areas: ". .";
}
 .right-container .pets-photo button {
	 border: none;
	 border-radius: 50%;
	 height: 38px;
	 margin-right: 10px;
	 outline: none;
	 width: 38px;
}
 .right-container .pets-photo button i {
	 color: rgba(0, 0, 0, .8);
	 font-size: 16px;
}
 .right-container .pets-weight .radio-container {
	 display: flex;
	 justify-content: space-between;
	 width: 100%;
}
 .right-container footer {
	 align-items: center;
   width: 100%;

	 background: #ffffff00;
	 display: flex;
	 padding: 10px 40px;
   justify-content: left;
   border-radius: 0px 0px 60px 60px;
}


 .pets-name label, .pets-breed label, .pets-birthday label, .pets-gender label, .pets-spayed-neutered label, .pets-weight label {
	 display: block;
	 margin-bottom: 5px;
   font-size: 14px;
}
 .radio-container {
	 background: #fff;
	 border: 1px solid rgba(0, 0, 0, .1);
	 border-radius: 30px;
	 display: inline-block;
	 padding: 5px;
}
 .radio-container label {
	 background: transparent;
	 border: 1px solid transparent;
	 border-radius: 15px;
	 display: inline-block;
	 height: 26px;
	 line-height: 26px;
	 margin: 0;
	 padding: 0;
	 text-align: center;
	 transition: 0.2s all ease-in-out;
	 width: 80px;
}
 .radio-container input[type="radio"] {
	 display: none;
}
 .radio-container input[type="radio"]:checked + label {
	 background: #efefef;
}

.m {
  color: rgb(0, 140, 255) !important;
}

.f {
  color: rgb(248, 149, 207) !important;
}

.custum-file-upload {
  height: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cacaca;
  background-color: rgba(255, 255, 255, 1);
  padding: 1rem;
  border-radius: 30px;
  box-shadow: 0px 48px 35px -48px rgba(0,0,0,0.1);
}

.custum-file-upload .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .icon svg {
  height: 20px;
  fill: rgba(75, 85, 99, 1);
}

.custum-file-upload .text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}

.custum-file-upload .text span {
  font-weight: 400;
  color: rgba(75, 85, 99, 1);
}

.custum-file-upload input {
  display: none;
}

@media (max-width: 844px) {
  .right-container .set {
	 flex-direction: column;
}
.right-container img {
  display: none;
}

.right-container {
  border-radius: 0;

}
    .lost-pets-view {
      margin-top: 20vh;
      z-index: 100;
    }
}
 
</style>
