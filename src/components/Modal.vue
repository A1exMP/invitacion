<template>
  <Transition name="modal-fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <button class="close-btn" @click="close">&times;</button>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
}

.modal-content {
  background-color: #faf8f5;
  padding: 20px 20px 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 300px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  max-height: 90vh; /* Permite scroll si el contenido es alto */
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .modal-content {
    width: 90%; /* Un poco de margen */
    padding: 15px 15px 15px; /* Reducir padding en móviles */
    margin: auto;
    max-width: 450px;
  }
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 32px; /* Botón de cierre más grande y fácil de tocar */
  cursor: pointer;
  color: #3a3a3a;
  padding: 5px; /* Touch target size */
  line-height: 0.8;
  z-index: 10;
}

/* Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
