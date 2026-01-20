<!-- LocationSection.vue -->
<template>
  <section class="section">
    <p class="info-text-hight"><strong>{{ FechaLugar.Titulo_seccion }}</strong></p>
    <p class="info-text">{{ FechaLugar.Lugar}}</p>
    <p class="info-text">{{ FechaLugar.Distrito}}</p>
  </section>
</template>
<script setup>
import { FechaLugar } from "../constant/constant";

</script>