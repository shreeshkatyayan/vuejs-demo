import { useUserDataStore } from '@/stores/UserData.stores';
import HomePage from '@/views/HomePage/HomePage.vue';
import LoginPage from '@/views/LoginPage/LoginPage.vue';
import SignupPage from '@/views/SignupPage/SignupPage.vue';
import { getAuth } from 'firebase/auth';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage,
    },
  ],
});

router.beforeEach(async (to) => {
  // routes with `meta: { requiresAuth: true }` will check for the users, others won't
  if (to.meta.requiresAuth) {
    const auth = getAuth();
    // const currentUser = auth.currentUser;
    auth.onAuthStateChanged(
      (user) => {
        if (!user) {
          router.replace('/login');
        } else {
          const userDataStore = useUserDataStore();
          userDataStore.updateUser(user);
        }
      },
      () => {
        router.replace('/login');
      }
    );
    // if the user is not logged in, redirect to the login page
  }
});

export default router;
