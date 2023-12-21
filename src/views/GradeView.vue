<template>
    <div class="everything">
      <div class="perin">
        <h1 class="rentT">Grade <RouterLink to="/rent" class="plus">+</RouterLink></h1>
      </div>
      <div class="table-rents">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Id</th>
              <th>Course Id</th>
              <th>Grade</th>
              <th>Delete</th> 
            </tr>
          </thead>
          <tbody>
            <tr v-for="grade in grades" :key="grade.id">
              <td>{{ grade.id }}</td>
              <td>{{ grade.student_id}}</td>
              <td>{{ grade.course_id }}</td>
              <td>{{ grade.grade }}</td>
              <td>
                <button @click="deleteGrade(grade.id)" class="btn btn-danger">Delete</button>
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
  
  tbody {
       color:black;
    }
  .perin {
  border-bottom: 1px solid #383838; /* Pink border */
  padding-bottom: 10px;
  display: flex;
  
  }
  
  .table-rents {
  margin-top: 20px;
  }
  
  table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  }
  
  th, td {
  border: 1px solid #4b4a4a; /* Pink border */
  padding: 8px;
  text-align: left;
  color: rgb(0, 0, 0); /* White text for header */
  }
  
  th {
  background-color: #353434; /* Pink background for header */
  color: white; /* White text for header */
  }
  
  .rentT {
  color: white; /* White color for h1 */
  }
  .plus{
  padding: 5px;
  color: #464545;
  background-color: white;
  border-radius: 5px;
  font-size: 15px;
  text-decoration: none;
  }
  button{
  height: 30px;
  width: 30px;
  }
  </style>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const grades = ref(null);
  
  onMounted(() => {
    // Fetch rents with customer data
    fetch('http://localhost:8000/api/grades?include=student,course ')
      .then(response => response.json())
      .then(data => (grades.value = data))
      .catch(error => console.error('Error fetching data:', error));
  });
  
  const deleteGrade = async (gradeId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/grades/${gradeId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // Filter out the deleted rent
        grades.value = grades.value.filter(grade => grade.id !== gradeId);
  
        // Display an alert
        window.alert('Grade deleted successfully!');
      } else {
        console.error('Failed to delete grade:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting grade:', error);
    }
  };
  </script>