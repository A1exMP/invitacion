<template>
  <section class="section banner">
    <div class="banner-bg img-fade-y" :style="bg">
    </div>
    <h1 class="banner-title">{{ Portada.Titulo }}</h1>
    <div class="banner-content">
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
import { Portada as Portada } from "../constant/constant";

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
  overflow: hidden;
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

@media (min-width: 768px) {
  .banner-bg {
    background-position: center -50px;
  }
}


.banner-title {
  position: absolute;
  top: 40%; /* Un poco más arriba del centro visualmente */
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  z-index: 10;
  margin: 0;
  padding: 0;
}

.banner-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  z-index: 5;
}

.curved-text {
  width: 100%;
  max-width: 900px;
  height: 300px;
  overflow: visible;
}

@media (max-width: 768px) {
  .curved-text {
      height: 650px;
  }
}

.romantic-text-svg {
  white-space: pre-line;
  fill: white;
  font-family: 'Allura', user-defined; /* Fallback simplified */
  font-family: var(--font-romantic);
  font-size: 48px;
}

@media (max-width: 768px) {
  .romantic-text-svg {
    font-size: 58px;
  }
}
</style>
