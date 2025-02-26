<script setup>
import { ref, computed } from 'vue'
const header = ref('Shopping list')
const newItem = ref('')
const newItemHighPrority = ref(false)

const editing = ref(false)
const items = ref([
  { id: '1', label: 'label id 1', purchased: true, highpriority: true },
  { id: '2', label: 'label id 2', purchased: true, highpriority: false },
  { id: '3', label: 'label id 3', purchased: false, highpriority: true },
])
const saveItem = () => {
  items.value.push({ id: items.value.lenght + 1, label: newItem.value })
  newItem.value = ''
}
const doEdit = (e) => {
  editing.value = e
  newItem.value = ''
}
const togglePurchased = (item) => {
  console.log('inside click')
  item.purchased = !item.purchased
}
const charCount = computed(() => newItem.value.length)
const reverseItems = computed(() => [...items.value].reverse())
</script>
<template>
  <div class="header">
    <h1>{{ header }}</h1>

    <div>
      <button v-if="editing" class="btn" @click="doEdit(false)">Cancel</button>
      <button v-else class="btn btn-primary" @click="doEdit(true)">Add Item</button>
    </div>
    <form v-if="editing" class="add-item-form" @submit.prevent="saveItem()">
      <input type="text" v-model.trim="newItem" placeholder="Add item" />
      <button class="btn btn-primary" :disabled="newItem.length < 5">Save</button>

      <label> <input type="checkbox" v-model="newItemHighPrority" /> High prority </label>
    </form>
    <p class="counter">{{ charCount }}/200</p>
    <ul>
      <li
        v-for="item in reverseItems"
        :key="item.id"
        @click="togglePurchased(item)"
        class="static-class"
        :class="{
          strikeout: item.purchased,
          priority: item.highpriority,
        }"
      >
        {{ item.label }}
      </li>
    </ul>
    <p v-if="!items.length">No data</p>
  </div>
</template>
