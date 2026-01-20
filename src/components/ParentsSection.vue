<!-- ParentsSection.vue -->
<template>
  <section class="section">
    <div class="parents">
      <div class="mother">
        <p class="info-text"><strong>{{NombresPadres.titulo_1}}</strong></p>
        <p class="info-text-variant">{{ NombresPadres.NombreMadreNovia }}</p>
        <p class="info-text-variant">{{NombresPadres.NombrePadreNovia}}</p>

      </div>
    
      <div class="father">
        <p class="info-text"><strong>{{NombresPadres.titulo_2}}</strong></p>
        <p class="info-text-variant">{{NombresPadres.NombreMadreNovia}}</p>
        <p class="info-text-variant">{{NombresPadres.NombrePadreNovia}}</p>

      </div>
    </div>
  </section>
</template>
<script setup>
import { NombresPadres } from "../constant/constant";

</script>
<style scoped>
    .parents{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 60px; /* Espacio entre columnas */
        text-align: center;
        margin: auto;

        .mother{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .father{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
    }
    @media screen and (max-width: 600px) {
      .parents{
        padding-right: 20px;
        padding-left: 20px;
        gap: 20px;
      }
    }
</style>