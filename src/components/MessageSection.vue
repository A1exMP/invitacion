<!-- MessageSection.vue -->
<template>
  <section class="section image-text">
    <div class="message-box">
      <img
        class="img-fade-y"
        :src="Portada2.Imagen"
        alt="Couple"
      />
      <div class="message">
        <p class="romantic-text">
          {{Portada2.Frase}}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Portada2 } from "../constant/constant";

</script>
<style scoped>
.image-text {
  display: flex;
  justify-content: center;
}

.message-box {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.message-box img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

.message {
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 2; /* Encima de la imagen */
  padding: 0 20px;
  box-sizing: border-box; /* Ensure padding doesn't add to width */
}

.romantic-text {
  white-space: pre-line;
  color: white;
  margin: 0;
  /* Ensure it has a nice shadow for readability if fade isn't enough, but img-fade-y should handle it */
  text-shadow: 0 2px 4px rgba(0,0,0,0.3); 
  width: 100%;
  overflow-wrap: break-word; /* Prevent long words from overflowing */
}

@media (max-width: 768px) {
  .message-box img {
    height: 350px; /* Ajuste de altura para móviles */
  }
  
  .romantic-text {
    font-size: 24px; /* Asegurar legibilidad */
    line-height: 1.4;
  }
  
  .message {
      bottom: 55px;
  }
}
</style>
