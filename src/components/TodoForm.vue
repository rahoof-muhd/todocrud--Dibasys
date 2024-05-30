  <template>
    <div class="h-screen">
      <div class="w-100 h-75 content-center d-grid main">
        <div class="bg-blue-grey-lighten-5  ma-auto rounded-xl sub-main">
          <form action="" @submit.prevent="addTodo" class="pa-16 form-container ga-16">
            <div class="input-container">
              <input v-model="newTodo" placeholder="New Task" required>
            </div>
            <div class="button-container bg-teal ">
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>


<script>
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

export default {
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    async addTodo() {
      const newTask = {
        name: this.newTodo,
        status: 'Pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      alert("Todo Added")
      await addDoc(collection(db, 'todos'), newTask);
      this.$router.push('/todos');
    },
  },
};
</script>


<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sub-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}

.input-container,
.button-container {
  margin-bottom: 20px;
  width: 100%;

}

.input-container input {
  width: 100%;
  padding: 10px;
  border: 2px solid black;
  box-sizing: border-box;
}

.button-container button {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>

