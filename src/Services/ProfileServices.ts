import { ref } from 'vue';
import { Profile } from '../interfaces/IUsuario';
import { currentUser } from './AuthServices';

const selectedProfile = ref<Profile | null>(null);

const selectProfile = (perfil: Profile) => {
  selectedProfile.value = perfil;
};

const getSelectedProfile = () => {
  return selectedProfile.value;
};

const getProfilesCurrentUser = () => {
  if (currentUser.value?.profiles) {
    const userProfiles = currentUser.value.profiles;
    console.log(userProfiles);
    return userProfiles;
  }
  console.log("No hay perfiles para este usuario");
  return [];  // Devuelve un array vacío si no hay perfiles
};

export { selectProfile, getSelectedProfile, getProfilesCurrentUser, selectedProfile };
