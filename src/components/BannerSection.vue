<template>
  <section class="section banner">
    <div class="banner-bg img-fade-y" :style="bg">
    </div>
    <div class="banner-content">
      <h1 class="banner-title">{{ Portada.Titulo }}</h1>
      
      <svg class="curved-text" viewBox="0 0 1420 450" preserveAspectRatio="xMidYMid meet">
        <!-- Generación dinámica de curvas para cada línea de texto -->
        <path 
          v-for="(line, index) in lines" 
          :key="'curve-' + index"
          :id="'curve-' + index" 
          :d="getPath(index)" 
          fill="transparent" 
        />

        <text width="1420" v-for="(line, index) in lines" :key="'text-' + index">
          <textPath :href="'#curve-' + index" startOffset="50%" text-anchor="middle" class="romantic-text-svg">
            {{ line }}
          </textPath>
        </text>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { Portada3 as Portada } from "../constant/constant";

const lines = computed(() => {
  return Portada.Frase.split('\n');
});

const getPath = (index) => {
  // Ajustes de curva base
  const baseY = 300;
  const baseControlY = 50;
  // Espaciado dinámico
  const gap = 100;
  
  const currentY = baseY + (index * gap);
  const currentControlY = baseControlY + (index * gap);
  
  // M startX,startY Q controlX,controlY endX,endY
  return `M 60,${currentY} Q 710,${currentControlY} 1360,${currentY}`;
};

const bg = {
  backgroundImage:
    `url(${Portada.Imagen})`
}
</script>

<style scoped>
.banner {
  height: 90vh;
  position: relative;
  display: flex;
  align-items: flex-end; /* Align content to bottom by default (mobile) */
  justify-content: center;
  padding-bottom: 20px; 
  overflow: hidden;
}

@media (min-width: 720px) {
  .banner {
    align-items: center; /* Center content on desktop */
    padding-bottom: 0; /* Remove padding when centered */
  }
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.banner-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  gap: 40px;
  padding-bottom: 10px; /* Fine tuning */
  width: 100%; /* Ensure centering works */
}

.curved-text {
  width: 100%; /* Ancho responsivo */
  max-width: 900px;
  height: 300px; /* Aumentado para acomodar la nueva proporción */
  overflow: visible;
}

@media (max-width: 768px) {
  .curved-text {
      height: 200px; /* Menor altura en móvil pero suficiente para la curva */
  }
  .banner-content {
      gap: 40px; /* Menos espacio */
  }
}

.romantic-text-svg {
  white-space: pre-line;
  fill: white;
  font-family: 'Allura', cursive; /* Fallback or use var if possible in this context, but scoped styles might not resolve var from root seamlessly in SVG sometimes. Better to use standard font stack or var if supported. Vue scoped handles vars fine. */
  font-family: var(--font-romantic);
  font-size: 48px; /* Ajustado para que quepan dos líneas elegantemente */
}

@media (max-width: 768px) {
  .romantic-text-svg {
    font-size: 58px; /* Ligeramente más grande en el SVG para compensar el escalado */
  }
}


@media (min-width: 720px) {
.banner-title{
  padding-top: 120px;
}
}
</style>
