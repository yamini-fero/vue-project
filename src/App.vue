<script setup></script>

<template>
  <div>
    <nav class="bg-gray-800 text-white p-4 fixed top-0 right-0 z-10">
      <div class="flex space-x-4">
        <router-link to="/basic" class="nav-link">Basic</router-link>
        <router-link to="/shopping-list" class="nav-link">Shopping List</router-link>
        <router-link to="/app-alert" class="nav-link">Alert</router-link>
        <router-link to="/github-card" class="nav-link">Github Card</router-link>
        <router-link to="/coffee-plan" class="nav-link">Coffee Plan</router-link>
        <router-link to="/counter" class="nav-link">Counter</router-link>
      </div>
    </nav>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 20px;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.router-link-active {
  font-weight: bold;
  color: #f59e0b; /* Or any color of your choice */
}
</style>
