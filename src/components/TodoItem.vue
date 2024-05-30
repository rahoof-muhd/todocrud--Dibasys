<template>
  <div class="todo-container content-center d-grid pa-4 ">
    <div class="todo-item ma-auto pa-8 rounded-lg d-flex flex-column ga-4 text-h5">
      <p><strong>Task:</strong> {{ todo.name }}</p>
      <p><strong>Status:</strong> {{ todo.status }}</p>
      <p><strong>Created At:</strong> {{ new Date(todo.createdAt).toLocaleString() }}</p>
      <p><strong>Updated At:</strong> {{ new Date(todo.updatedAt).toLocaleString() }}</p>
      <div>
        <label for="status-select" class=" pr-2">Change Status:</label>
        <select id="status-select" v-model="selectedStatus" class=" pa-2 status rounded-lg">
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div class="text-center bg-green mt-4">
        <button @click="updateStatus" class="save pa-1">Save</button>
      </div>
      <div class="text-center bg-red mt-4">
        <button @click="deleteTodo" class="delete pa-1">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {


  props: ['todo'],
  data() {
    return {
      selectedStatus: this.todo.status
    };
  },
  methods: {
    updateStatus() {
      const updatedTodo = { ...this.todo, status: this.selectedStatus, updatedAt: new Date().toISOString() };
      this.$emit('update-todo', updatedTodo);
    },
    deleteTodo() {
      this.$emit('delete-todo', this.todo.id);
    }
  }
}

</script>


<style scoped>
.todo-container {
  place-content: center;
}

.todo-item {
  width: max-content;
  margin: 8px;
  background-color: rgb(43, 98, 133);
  color: white;
  flex: 1 1 100%;
}

.status {
  border: 2px solid black;
}
</style>