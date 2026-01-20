<!-- DateSection.vue -->
<template>
  <section class="section">
    <div class="date-class">
      <p class="date-highlight-variant">{{ FechaLugar.Titulo_seccion_2 }}</p>
      <div class="date">
        <p class="date-highlight">{{ FechaLugar.Dia}}</p>
        <p class="date-highlight">{{ FechaLugar.Mes}}</p>
        <p class="date-highlight">{{ FechaLugar.Anio}}</p>
      </div>

      <p class="date-highlight">{{ FechaLugar.DiaSemana}} {{ FechaLugar.Hora}}</p>
    </div>
  </section>
</template>
<script setup>
import { FechaLugar } from "../constant/constant";

</script>
<style scoped>
.date-class {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
}

.date {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px dotted #3a3a3a;
  border-bottom: 1px dotted #3a3a3a;
  padding: 10px 0; /* Espaciado interno vertical */
  margin: 10px 0; /* Separación del texto de arriba/abajo */
}

.date .date-highlight {
  /* Separadores visuales */
  padding: 0 15px; /* Espaciado lateral generoso, o reducir a 5-10px si se quiere compacto */
  border-right: 1px dotted #3a3a3a; /* Color oscuro base */
  line-height: 1;
  margin: 0;
}

.date .date-highlight:last-child {
  border-right: none;
}
</style>