import { ref } from 'vue';
import { Router } from 'vue-router';
import usersData from "../assets/data/usuarios.json"
import { usuario } from '../interfaces/IUsuario';

const currentUser = ref<usuario | null>(null);

const login = (email: string, password: string, router: Router): boolean => {
  const user = usersData.find(u => u.email === email && u.password === password) as usuario | undefined;
  
  if (user) {
    currentUser.value = { ...user };
    if (user.role === 'subscriber') {
      router.push('/profiles');
    } else if (user.role === 'admin') {
      router.push('/admin/home');
    }
    return true;
  }
  return false;
};

const logout = (): void => {
  currentUser.value = null;
};

const isAuthenticated = (): boolean => {
  return currentUser.value !== null;
};

export { login, logout, isAuthenticated, currentUser };