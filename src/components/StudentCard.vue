<template>
    <div class="student-card">
      <h3>{{ student.name }}</h3>
      <p>Email: {{ student.email }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      student: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .student-card {
    border: 1px solid #ddd;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  h3 {
    margin-bottom: 10px;
  }
  
  p {
    margin: 0;
  }
  </style>
  