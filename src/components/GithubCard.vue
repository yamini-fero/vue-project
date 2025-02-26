<script setup>
import { ref } from 'vue'
const props = defineProps({
  username: { type: String, required: true },
})

const user = ref()
fetch(`https://api.github.com/users/${props.username}`).then(async (res) => {
  user.value = await res.json()
})
</script>
<template>
  <div v-if="user" class="m-5 shadow-xl card card-side bg-base-100">
    <figure>
      <img :src="user.avatar_url" alt="Movie" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ user.name }}</h2>
      <p>
        <strong> Followers: </strong>{{ user.followers }} <strong> Following: </strong
        >{{ user.following }}
      </p>
      <div class="card-actions justify-end">
        <a :href="user.html_url" class="btn btn-primary">View profile</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 50%;
  padding: 4px;
}
</style>
