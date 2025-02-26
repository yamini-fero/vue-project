<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CoffeePlan from './CoffeePlan.vue'
const plans = ref(['The Single', 'The Curious', 'The Addict', 'The hacker'])
const selectedCoffeePlan = ref()

function handleSelectedCoffeePlan(name) {
  selectedCoffeePlan.value = name
}

const planWrapper = ref()

onUnmounted(() => console.log('bye bye'))
onMounted(() => {
  console.log(planWrapper.value)
})
</script>

<template>
  <div ref="planWrapper" class="plans">
    <CoffeePlan
      v-for="plan in plans"
      :key="plan"
      :name="plan"
      :selected="plan === selectedCoffeePlan"
      @click="handleSelectedCoffeePlan(plan)"
    >
    </CoffeePlan>
    <div v-if="selectedCoffeePlan" class="selected-plan">
      <h2 class="text-xl font-bold mt-4">Selected Coffee Plan:</h2>
      <strong class="text-lg">{{ selectedCoffeePlan }}</strong>
    </div>
  </div>
</template>
<style scoped>
.selected-plan {
  background-color: #e19f9f;
  padding: 16px;
  border-radius: 8px;
  margin-top: 20px;
}

.selected-plan h2 {
  color: #333;
}

.selected-plan strong {
  color: #23912d;
}
</style>
