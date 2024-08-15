import { ref } from 'vue';

interface User {
  email: string;
  password: string;
}

const currentUser = ref<User | null>(null);

const login = (email: string, password: string): boolean => {
  const users: User[] = [
    { email: 'user1@hola.com', password: 'psw1' },
    { email: 'user2@hola.com', password: 'psw2' },
  ];

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser.value = user;
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