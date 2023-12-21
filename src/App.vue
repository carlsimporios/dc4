<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/student">Student</RouterLink>
      <RouterLink to="/course">Course</RouterLink>
      <RouterLink to="/grade">Grade</RouterLink>
    </nav>
    <RouterView />
  </header>
</div>
</template>

<style scoped>
.container {
  height: 100vh;
}

header {
  width: 100vw;
  line-height: 1.5;
  /* max-height: 100vh; */
  background-color: #fff; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  padding: 1rem;
}

nav {
  font-size: 1.2rem; 
  text-align: center;
  margin-top: 1rem;
}

nav a {
  text-decoration: none;
  padding: 1rem 1.5rem;
  color: #333; 
  border: 1px solid #333; 
  border-radius: 5px; 
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #333; 
  color: #fff; 
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  nav {
    text-align: left;
    margin-top: 0;
  }

  nav a {
    border: none; 
    margin-right: 1rem; 
  }
} */
</style>
