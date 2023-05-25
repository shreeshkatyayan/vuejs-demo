import { useUserDataStore } from '@/stores/UserData.stores';
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
} from 'firebase/auth';
import { useRouter } from 'vue-router';

export const signup = async (email: string, password: string) => {
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence).then(() => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const { user } = userCredential;
      const userDataStore = useUserDataStore();
      userDataStore.updateUser(user);
    });
  });
  // const user = await createUserWithEmailAndPassword(auth, email, password).then(
  //   (userCredentials) => userCredentials.user
  // );
  // return user;
};

export const signin = async (email: string, password: string) => {
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence).then(() => {
    signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
      const { user } = userCredentials;
      const userDataStore = useUserDataStore();
      userDataStore.updateUser(user);
    });
  });
};

export const signout = async () => {
  const auth = getAuth();
  const router = useRouter();
  setPersistence(auth, browserLocalPersistence).then(() => {
    signOut(auth).then(() => {
      const userDataStore = useUserDataStore();
      userDataStore.$reset();
      router?.push('/login');
    });
  });
};

export const updateUserProfile = async (userInfo: Partial<User>): Promise<void> => {
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence).then(() => {
    if (!auth?.currentUser) return;
    updateProfile(auth?.currentUser, {
      ...userInfo,
    }).then(() => {
      const userDataStore = useUserDataStore();
      userDataStore.updateUser({ ...userInfo });
    });
  });
};
