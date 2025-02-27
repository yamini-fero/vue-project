<script setup>
import { ref, computed } from 'vue'
const header = ref('Shopping list')
const newItem = ref('')
const newItemHighPrority = ref(false)

const editing = ref(false)
const items = ref([
  { id: '1', label: 'Shopping list item 1', purchased: true, highpriority: true },
  { id: '2', label: 'Shopping list item 2', purchased: true, highpriority: false },
  { id: '3', label: 'Shopping list item 3', purchased: false, highpriority: true },
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
    <div class="container">
      <div class="buttons-container">
        <button v-if="editing" class="btn" @click="doEdit(false)">Cancel</button>
        <button v-else class="btn btn-primary" @click="doEdit(true)">Add Item</button>
      </div>
      <form v-if="editing" class="add-item-form" @submit.prevent="saveItem()">
        <input type="text" v-model.trim="newItem" placeholder="Add item" />
        <p class="counter">{{ charCount }}/200</p>
        <button class="btn btn-primary" :disabled="newItem.length < 5">Save</button>

        <label> <input type="checkbox" v-model="newItemHighPrority" /> High prority </label>
      </form>

      <ul class="items-list">
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
  </div>
</template>
<style scoped>
h1 {
  font-size: 6rem;
  color: #333;
  margin-bottom: 20px;
}

/* Container for all the content */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Buttons container for layout control */
.buttons-container {
  margin-bottom: 20px;
}

/* Button styling */
.btn {
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  margin: 5px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Form styling */
.add-item-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.add-item-form input {
  padding: 8px;
  width: 300px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 20px;
}

.counter {
  font-size: 20px;
  color: #ec0f0f;
  margin-bottom: 10px;
}

.add-item-form label {
  font-size: 14px;
  color: #333;
}

/* Items list styling */
.items-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 500px;
  font-size: 30px;
}

.items-list li {
  padding: 10px;
  margin: 5px 0;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.items-list li:hover {
  background-color: #a5a744;
}

.strikeout {
  text-decoration: line-through;
  color: #bbb;
}

.priority {
  font-weight: bold;
  color: #e74c3c;
}

/* No data message */
p {
  font-size: 16px;
  color: #777;
}

/* Responsive design for small screens */
@media (max-width: 600px) {
  .items-list {
    width: 100%;
  }

  .add-item-form input {
    width: 80%;
  }

  .container {
    padding: 0 20px;
  }
}
</style>
