import { ref } from 'vue';
import { Router } from 'vue-router';

interface User {
  email: string;
  password: string;
  role: 'subscriber' | 'admin'; // Role can be either 'subscriber' or 'admin'
}

const currentUser = ref<User | null>(null);

const login = (email: string, password: string, router: Router): boolean => {
  const users: User[] = [
    { email: 'user@hola.com', password: 'user', role: 'subscriber' },
    { email: 'admin@hola.com', password: 'admin', role: 'admin' },
  ];

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser.value = user;
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