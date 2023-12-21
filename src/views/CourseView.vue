<template>
  <div class="everything">
    <div class="perin">
      <h1 class="cust">
        COURSE
        <RouterLink to="/course" class="plus">+</RouterLink>
      </h1>
    </div>
    <div class="table-customers">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Delete</th>
         
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses" :key="course.id">
            <td>{{ course.id }}</td>
            <td>{{ course.title }}</td>
      
            <td>
              <button @click="deleteCourse(course.id)" class="btn btn-danger">Delete</button>
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
  border-bottom: 1px solid #6e6a6c; /* Pink border */
  padding-bottom: 10px;
  display: flex;
}

.table-customers {
  margin-top: 20px;
}

table {
  
  /* color: #000;  */
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border-radius: 10px;
}

th, td {
  border: 1px solid #6b696a; /* Pink border */
  padding: 8px;
  text-align: left;
  color: rgb(0, 0, 0); /* White text for header */
}

th {
  background-color: #9e9e9e; /* Pink background for header */
  color: white; /* White text for header */
}

.cust {
  color: white; /* White color for h1 */
}

.plus {
  padding: 5px;
  color: #555454;
  background-color: white;
  border-radius: 5px;
  font-size: 15px;
  text-decoration: none;
}

.btn {
  /* background-color: #363535;  */
  color: #ffffff;
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';

const courses = ref(null);

onMounted(() => {
  fetch('http://localhost:8000/api/courses')
    .then(response => response.json().then(data => (courses.value = data)));
});

const deleteCourse = async (courseId) => {
  try {
    const response = await fetch(`http://localhost:8000/api/courses/${courseId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      courses.value = courses.value.filter((course) => course.id !== courseId);
      alert('Course deleted successfully!');
    } else {
      console.error('Failed to delete course:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting course:', error);
  }
};
</script>

