<script setup></script>

<template>
  <div>
    <nav class="bg-gray-800 text-white p-4 fixed top-0 right-0 z-10 flex justify-between items-center">
      <router-link id="logo" to="/">Home</router-link>
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
nav {
  display: flex; /* Use Flexbox to arrange items */
  justify-content: space-between; /* Space between the logo and links */
  align-items: center; /* Vertically center the items */
  padding: 10px 20px; /* Add padding to the nav */
  background-color: #2d3748; /* Dark background color */
  position: fixed; /* Fix the nav bar at the top */
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

/* Style the logo */
#logo {
  font-size: 24px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
}

/* Style for the nav-links */
.nav-link {
  text-decoration: none;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Highlight active route link */
.router-link-active {
  font-weight: bold;
  color: #f59e0b; /* You can customize this color */
}

</style>
