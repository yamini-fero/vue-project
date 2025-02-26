<script setup>
import { ref } from 'vue'
const msg = ref('Hello..')

const link = ref('https://google.com')
const newItemPrority = ref('low')

const color = ref([])
</script>
<template>
  <div class="container">
    <div class="basic">
      <h1 class="heading">{{ msg.toLocaleUpperCase() }}</h1>
      <div class="input-container">
        <input v-model="msg" />
      </div>
      <div class="link-container">
        <a v-bind:href="link">link</a>
      </div>

      <div class="prority-container">
        <span class="label">Priority: </span>
        Prority :
        <label>
          <input type="radio" v-model="newItemPrority" value="low" class="radio" />Low
        </label>
        <label>
          <input type="radio" v-model="newItemPrority" value="high" class="radio" />High
        </label>
        <div class="priority-display">
          {{ newItemPrority }}
        </div>

        <div class="color-container">
          <label>
            <input type="checkbox" value="green" v-model="color" class="checkbox" />Green
          </label>
          <label>
            <input type="checkbox" value="pink" v-model="color" class="checkbox" />Pink
          </label>
        </div>
      </div>

      {{ color }}
      <br />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  font-size: 30px;
}
/* Basic Styling for Heading */
.heading {
  text-align: center;
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
}

.input-container {
  margin-bottom: 15px;
}

.input-field {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

/* Styling for Link */
.link-container {
  margin: 15px 0;
}

.link {
  color: #007bff;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

/* Styling for Priority Section */
.priority-container {
  margin: 20px 0;
}

.priority-container .label {
  font-weight: bold;
}

.priority-container .radio {
  margin-right: 8px;
}

.priority-display {
  margin-top: 10px;
  font-style: italic;
  color: #555;
}

/* Styling for Color Selection */
.color-container {
  margin-top: 15px;
}

.color-container .checkbox {
  margin-right: 8px;
}

.color-display {
  margin-top: 10px;
  font-style: italic;
  color: #555;
}
</style>
