<template>
    <div class="everything">
      <div class="perin">
        <h1 class="cust">
          STUDENT
          <RouterLink to="/student" class="plus">+</RouterLink>
        </h1>
      </div>
      <div class="table-customers">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student.id">
              <td>{{ student.id }}</td>
              <td>{{ student.name }}</td>
              <td>{{ student.email }}</td>
              <td>
                <button @click="deleteStudent(student.id)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <style>
  .everything {
    margin: 3.5rem 4rem;
  }
  
  .perin h1 {
    font-size: 45px;
    margin-left: 2px;
    font-weight: 1000;
    letter-spacing: -2px;
    font-family: 'Cavilant';
  }
  
  .perin {
    border-bottom: 1px solid #000000; /* Pink border */
    padding-bottom: 10px;
    display: flex;
  }
  
  .table-customers {
    margin-top: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    border-radius: 10px;
  }
  
  th, td {
    border: 1px solid #030303; 
    padding: 8px;
    text-align: left;
    color: #000;
  }
  
  /* td {

  } */
  
  th {
    background-color: #9e9e9e; /* Pink background for header */
    color: white; /* White text for header */
  }
  
  .cust {
    color: white; /* White color for h1 */
  }
  
  .plus {
    padding: 5px;
    color: #080707;
    background-color: white;
    border-radius: 5px;
    font-size: 15px;
    text-decoration: none;
  }
  
  .btn {
    background-color: #363535; /* Bootstrap red color */
    color: #ffffff;
    border-radius: 5px;
    padding: 5px 10px;
  }
  </style>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const students = ref(null);
  
  onMounted(() => {
    fetch('http://localhost:8000/api/students')
      .then(response => response.json().then(data => (students.value = data)));
  });
  
  const deleteStudent = async (studentId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/students/${studentId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        students.value = students.value.filter((student) => student.id !== studentId);
        alert('Student deleted successfully!');
      } else {
        console.error('Failed to delete student:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };
  </script>
  
  