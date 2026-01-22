<!-- NamesSection.vue -->
<template>
  <section class="section">
    <div class="couple-names">
      {{Novios.Novia}}
      <span class="ampersand">&</span>
      {{Novios.Novio}}
    </div>
   <!-- <p class="info-text"><strong>{{Novios.Mensaje}}</strong></p> -->
    <p class="info-text-hight"><strong>{{Novios.Mensaje}}</strong></p>
    <p class="info-text">{{"gustavo"}}</p>
  </section>
  
</template>
<script setup>
import { Novios } from "../constant/constant";
</script>
