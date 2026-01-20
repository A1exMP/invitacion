<template>
  <section class="section farewell">
    <div class="farewell-bg img-fade-y" :style="bg"></div>
    <div class="content">
      <p class="romantic-text">{{Portada3.Frase}}</p>
      <p class="signature">{{Portada3.Titulo}}</p>
    </div>
  </section>
</template>

<script setup>
import { Portada3 } from "../constant/constant";

const bg = {
  backgroundImage: `url(${Portada3.Imagen})`
}
</script>

<style scoped>
.farewell {
  height: 70vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.farewell-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.content {
  text-align: center;
  color: white; /* Ensure text is visible over likely dark/faded bg */
}
</style>
