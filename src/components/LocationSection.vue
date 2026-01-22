<!-- LocationSection.vue -->
<template>
  <section class="section">
    <p class="info-text-hight"><strong>{{ FechaLugar.Titulo_seccion }}</strong></p>
    <p class="info-text">{{ FechaLugar.Lugar}}</p>
    <p class="info-text">{{ FechaLugar.Distrito}}</p>
  </section>
  <br>
   <section class="section">
    <p class="info-text-hight"><strong>{{ FechaLugar.Titulo_seccion_Civil }}</strong></p>
    <p class="info-text">{{ FechaLugar.Lugar_Civil}}</p>
    <p class="info-text">{{ FechaLugar.Distrito_Civil}}</p>
  </section>
</template>
<script setup>
import { FechaLugar } from "../constant/constant";

</script>