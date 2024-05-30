import { createRouter, createWebHistory } from 'vue-router';
import TodoForm from '../components/TodoForm.vue';
import TodoList from '../components/TodoList.vue';

const routes = [
  { path: '/', redirect: '/add-todo' },
  { path: '/add-todo', component: TodoForm },
  { path: '/todos', component: TodoList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
