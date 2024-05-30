

   <template>
    <div class="w-100 ">
      <div class=" text-center  text-h4 pa-4 mb-10">
        <label for="status-filter">Filter by status:</label>
        <select id="status-filter" v-model="filterStatus" @change="filterTodos" class="status pa-1 pl-2 text-h6 rounded-lg">
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div v-for="todo in filteredTodos" :key="todo.id">
        <TodoItem :todo="todo" @update-todo="updateTodo" @delete-todo="deleteTodo"/>
      </div>
    </div>
  </template>
  
  <script>
  import { collection, getDocs, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
  import TodoItem from './TodoItem';
  import { db } from '../firebase';
  
  export default {
    components: { TodoItem },
    data() {
      return {
        todos: [],
        filterStatus: '',
      };
    },
    computed: {
      filteredTodos() {
        if (this.filterStatus) {
          return this.todos.filter(todo => todo.status === this.filterStatus);
        }
        return this.todos;
      },
    },
    async created() {
      const q = query(collection(db, 'todos'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      this.todos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    methods: {
  
      async updateTodo(updatedTodo) {
      try {
        const todoRef = doc(db, 'todos', updatedTodo.id);
        await updateDoc(todoRef, updatedTodo);
        const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
          this.todos.splice(index, 1, updatedTodo);
        }
        alert("Todo Updated");
      } catch (error) {
        console.error("Error updating todo: ", error);
      }
    },
      async deleteTodo(id) {
        await deleteDoc(doc(db, 'todos', id));
        this.todos = this.todos.filter(todo => todo.id !== id);
        alert("Todo Deleted")
      },
      filterTodos() {
      },
    },
  };
  </script>
  
  <style scoped>
  .status{
   border: 2px solid rgb(22, 22, 250);
  }
  </style>