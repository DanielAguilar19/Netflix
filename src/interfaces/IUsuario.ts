interface Profile {
    nombre: string;
    apellido: string;
    perfil: string;
  }
  
  interface User {
    email: string;
    password: string;
    role: 'subscriber' | 'admin';
    profiles?: Profile[];
  }

  export type usuario = User;