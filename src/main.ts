import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { initializeApp } from 'firebase/app';

import './styles/base.css';

import App from '@/App.vue';
import router from '@/router';
import { firebaseConfig } from './config/firebase.config';
import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth';

const app = createApp(App);
app.use(createPinia());
app.use(router);

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

setPersistence(auth, browserLocalPersistence);

app.mount('#app');

export { auth };
