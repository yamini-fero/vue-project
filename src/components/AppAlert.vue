<script setup>
import { ref, computed } from 'vue'
import IconInfo from './icons/IconInfo.vue'
import IconSuccess from './icons/IconSuccess.vue'
import IconWarning from './icons/IconWarning.vue'
import IconError from './icons/IconError.vue'

const props = defineProps({ type: { type: String, default: 'info' } })

const emit = defineEmits(['closed'])
const alertType = computed(() => {
  return {
    info: 'alert-info',
    warning: 'alert-warning',
    error: 'alert-error',
    success: 'alert-success',
  }[props.type]
})

const icon = computed(() => {
  return {
    info: IconInfo,
    warning: IconWarning,
    success: IconSuccess,
    error: IconError,
  }[props.type]
})

const closed = ref(false)
function close() {
  closed.value = true
  emit('closed')
}
</script>
<template>
  <div v-if="!closed" role="alert" :class="`alert ${alertType}`">
    <component :is="icon"></component>
    <span><slot></slot></span>
    <button @click="close">X</button>
  </div>
</template>
<style scoped>
.alert {
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: Arial, sans-serif;
  margin: 10px 0;
  position: relative;
}
.alert-info {
  background-color: #2196f3; /* Blue */
}

/* Success alert style */
.alert-success {
  background-color: #4caf50; /* Green */
}

/* Warning alert style */
.alert-warning {
  background-color: #ff9800; /* Orange */
}

/* Error alert style */
.alert-error {
  background-color: #f44336; /* Red */
}
/* Close button style */
button {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
}
</style>
