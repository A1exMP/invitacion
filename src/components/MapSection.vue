<template>
  <section class="section">
    <p class="info-text"><strong>{{ MapaUbicacion.Titulo_seccion }}</strong></p>
    
    <div class="buttons-container">
      <button class="icon-btn" @click="openModal('map')">
        <div class="icon-circle">
          <!-- Icono Mapa (Pin) -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        </div>
        <span>{{ MapaUbicacion.boton_1 }}</span>
      </button>

      <button class="icon-btn" @click="openModal('directions')">
        <div class="icon-circle">
          <!-- Icono Indicaciones (Signpost/Path) -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"></path></svg>
        </div>
        <span>{{ MapaUbicacion.boton_2 }}</span>
      </button>

      <button class="icon-btn" @click="openModal('contact')">
        <div class="icon-circle">
          <!-- Icono Novios (Corazón/Usuarios) -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </div>
        <span>{{ MapaUbicacion.boton_3 }}</span>
      </button>

      <button class="icon-btn" @click="openModal('memory')">
        <div class="icon-circle">
          <!-- Icono Recuerdo (Imagen/Cámara) -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        </div>
        <span>{{ MapaUbicacion.boton_4 }}</span>
      </button>
    </div>

    <!-- Modales -->
    <Modal :isOpen="activeModal === 'map'" @close="closeModal">
      <h3 class="modal-title">{{ MapaUbicacion.titulo_modal_mapa }}</h3>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps?q=Lima&output=embed"
          width="100%"
          height="300"
          style="border:0;"
          loading="lazy"
        ></iframe>
      </div>
    </Modal>

    <Modal :isOpen="activeModal === 'directions'" @close="closeModal">
      <h3 class="modal-title">{{ MapaUbicacion.titulo_modal_indicaciones }}</h3>
      <ul class="steps-list">
        <template v-for="(value, index) in MapaUbicacion.pasos" :key="index">
          <li>{{ value }}</li>
        </template>

      </ul>
    </Modal>

    <Modal :isOpen="activeModal === 'contact'" @close="closeModal">
      <h3 class="modal-title">{{ MapaUbicacion.titulo_modal_novios }}</h3>
      <div class="contact-card">
        <div class="contact-item">
          <!-- Icono Mujer -->
          <font-awesome-icon :icon="['fas', 'person-dress']" class="contact-icon-fa" />
          <strong>{{ MapaUbicacion.novia }}</strong>
          <a href="tel:{{ MapaUbicacion.novia_telefono }}">{{ MapaUbicacion.novia_telefono }}</a>
        </div>
        <div class="contact-divider"></div>
        <div class="contact-item">
          <!-- Icono Hombre -->
          <font-awesome-icon :icon="['fas', 'person']" class="contact-icon-fa" />
          <strong>{{ MapaUbicacion.novio }}</strong>
          <a href="tel:{{ MapaUbicacion.novio_telefono }}">{{ MapaUbicacion.novio_telefono }}</a>
        </div>
      </div>
    </Modal>

    <Modal :isOpen="activeModal === 'memory'" @close="closeModal">
      <h3 class="modal-title">{{ MapaUbicacion.titulo_modal_recuerdo }}</h3>
      <div class="map-container">
        <iframe
          :src="MapaUbicacion.recuerdo_url"
          width="100%"
          height="300"
          style="border:0;"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Modal>

  </section>
</template>

<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';
import { MapaUbicacion } from '../constant/constant';

const activeModal = ref(null);

const openModal = (modalName) => {
  activeModal.value = modalName;
};

const closeModal = () => {
  activeModal.value = null;
};
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  padding: 40px 20px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
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

/* Modal Content Styles */
.modal-title {
  font-family: var(--font-text);
  font-size: 24px;
  margin-bottom: 15px;
  margin-top: 10px;
  text-align: center;
}

.map-container {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.steps-list {
  text-align: left;
  list-style-type: none;
  padding: 0;
  font-family: var(--font-text);
}

.steps-list li {
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px dotted #ccc;
}


.contact-card {
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: center;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-family: var(--font-text);
}

.contact-item strong {
  font-size: 18px;
}

.contact-icon, .contact-icon-fa {
  margin-bottom: 5px;
  color: #3a3a3a;
  font-size: 24px;
}


.contact-item a {
  text-decoration: none;
  color: #3a3a3a;
  border-bottom: 1px solid #3a3a3a;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .buttons-container {
    gap: 15px;
  }
  
  .icon-circle {
    width: 45px;
    height: 45px;
  }

  .icon-btn {
    font-size: 13px;
  }
  
  .section {
      padding: 30px 15px;
  }
}



/* Contenedor del iframe */
.map-container {
  border-radius: 18px;
  overflow: hidden;
  background: #fff7f9; /* rosado muy suave */
  border: 2px solid rgba(192, 122, 139, 0.35);
  box-shadow: 0 12px 32px rgba(192, 122, 139, 0.25);
}

/* Iframe limpio */
.map-container iframe {
  border: none;
  transition: transform 0.3s ease;
}

/* Efecto hover sutil */
.map-container iframe:hover {
  transform: scale(1.01);
}

/* (Opcional) texto secundario */
.modal-subtitle {
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  color: #8f5c68;
}

</style>