<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'Default plan',
    validator(value) {
      return value.startsWith('The')
    },
  },
  selected: { type: Boolean, default: false },
})
</script>
<template>
  <div class="plan" :class="{ 'active-plan': selected }">
    <div class="description">
      <span class="title"> {{ name }} </span>
    </div>
  </div>
</template>
