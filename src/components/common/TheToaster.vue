<template>
  <Transition name="slide-fade">
    <div
      v-if="showToaster"
      :class="{ notification: true, success: !isDanger, danger: isDanger }"
    >
      <slot></slot>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  showToaster: { type: Boolean },
  isDanger: { type: Boolean, default: false },
});
</script>

<style scoped>
.notification {
  color: var(--text-color);
  padding-left: 10px;
  width: 30vw;
  height: 8vh;
  border-radius: 5px;
  display: flex;
  align-items: center;

  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 999;
}

.success {
  background-color: var(--success-notification-background-color);
}

.danger {
  background-color: var(--danger-notification-background-color);
}
</style>
