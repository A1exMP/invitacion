<template>
  <section class="section" style="margin-bottom: 20px;">
    <p class="info-text-hight"><strong><u>{{ FechaLugar.Titulo_seccion }}</u></strong></p>
    <p class="info-text">{{ FechaLugar.Lugar}}</p>
    <p class="info-text">{{ FechaLugar.Distrito}}</p>
    
    <div class="button-wrapper">
      <button class="icon-btn" @click="openModal('map')">
        <div class="icon-circle">
          <!-- Icono Mapa (Pin) -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        </div>
        <span>{{ MapaUbicacion.boton_1 }}</span>
      </button>
    </div>
  </section>
  <br>
   <section class="section">
    <p class="info-text-hight"><strong><u>{{ FechaLugar.Titulo_seccion_Civil }}</u></strong></p>
    <p class="info-text">{{ FechaLugar.Lugar_Civil}}</p>
    <p class="info-text">{{ FechaLugar.Distrito_Civil}}</p>

    <div class="button-wrapper">
      <button class="icon-btn" @click="openModal('map-civil')">
        <div class="icon-circle">
          <!-- Icono Mapa (Pin) -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        </div>
        <span>{{ MapaUbicacion.boton_1 }}</span>
      </button>
    </div>
  </section>

  <!-- Modales -->
  <Modal :isOpen="activeModal === 'map'" @close="closeModal">
    <h3 class="modal-title">{{ MapaUbicacion.titulo_modal_mapa }}</h3>
    <div class="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.1142725307886!2d-71.51398566436801!3d-16.41902179570157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b10ca1065bf%3A0x4c7c92007c4eff0f!2sParroquia%20Nuestra%20Sra.%20De%20La%20Providencia!5e0!3m2!1ses-419!2spe!4v1769050782795!5m2!1ses-419!2spe" 
      width="100%" height="100%" 
      style="border:0;" allowfullscreen="" loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </Modal>

  <Modal :isOpen="activeModal === 'map-civil'" @close="closeModal">
    <h3 class="modal-title">{{ MapaUbicacion.titulo_modal_mapa }}</h3>
    <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.5635467176508!2d-71.5006509!3d-16.4469782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9143b5001edf830b%3A0xd22bad3b91e670e!2sFundo%20Alto%20del%20R%C3%ADo!5e0!3m2!1ses!2spe!4v1769055714017!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </Modal>

</template>
<script setup>
import { ref } from 'vue';
import { FechaLugar, MapaUbicacion } from "../constant/constant";
import Modal from './Modal.vue';

const activeModal = ref(null);

const openModal = (modalName) => {
  activeModal.value = modalName;
};

const closeModal = () => {
  activeModal.value = null;
};
</script>

<style scoped>
.button-wrapper {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.icon-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: #3a3a3a;
  font-family: var(--font-text);
  font-size: 14px;
}

.icon-circle {
  width: 50px;
  height: 50px;
  background-color: white;
  border: 1px solid #3a3a3a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, background-color 0.2s;
}

.icon-btn:hover .icon-circle {
  transform: translateY(-2px);
  background-color: #f0f0f0;
}

/* Modal and Map Styles (copied from MapSection) */
.modal-title {
  font-family: var(--font-text);
  font-size: 24px;
  margin-bottom: 15px;
  margin-top: 10px;
  text-align: center;
}

.map-container {
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  background: #fff7f9;
  border: 2px solid rgba(192, 122, 139, 0.35);
  box-shadow: 0 12px 32px rgba(192, 122, 139, 0.25);
  height: 400px; /* Define height */
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
