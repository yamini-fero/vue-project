<script setup>
import { ref } from 'vue'
import AppAlert from '../components/AppAlert.vue'

const alerts = ref([
  {
    type: 'info',
    message: 'info alert',
  },
  {
    type: 'success',
    message: 'success alert',
  },
  {
    type: 'warning',
    message: 'warning alert',
  },
  {
    type: 'error',
    message: 'error alert',
  },
])
</script>
<template>
  <div class="content-grid">
    <div class="alerts-column">
      <AppAlert
        v-for="alert in alerts"
        :key="alert.message"
        :type="alert.type"
        @closed="alerts = alerts.filter((a) => a.message !== alert.message)"
      >
        {{ alert.message }}
      </AppAlert>
    </div>
    <div class="alerts-array-column">
      <pre>{{ alerts }}</pre>
    </div>
  </div>
</template>
<style scoped>
.content-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
}
</style>
