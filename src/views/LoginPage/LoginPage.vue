<template>
  <div
    id="login"
    class="flex flex-col mx-auto border-2 border-gray-200 border-solid rounded-xl bg-white shadow w-1/3 p-6 mt-12"
  >
    <h1 class="font-medium text-2xl text-center pb-6">Login</h1>
    <!-- Insert form here -->
    <FormLayout :elements="loginFormConfig.elements" />
    <StyledButton
      :label="loginFormConfig.action.label"
      :theme="loginFormConfig.action.type"
      :on-click="login"
    />
    <RouterLink
      class="cursor-pointer font-medium px-6 py-2 border-error text-center mt-4"
      to="/signup"
      >Create new account</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import StyledButton from '@/components/StyledButton/StyledButton.vue';
import type { FormConfiguration } from '@/layouts/FormLayout/FormConfiguration';
import FormLayout from '@/layouts/FormLayout/FormLayout.vue';
import { signin } from '@/services/auth.service';
import { getAuth } from '@firebase/auth';
import { onMounted, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

// const userDataStore = useUserDataStore();

const loginFormConfig: FormConfiguration = {
  elements: [
    {
      name: 'email',
      type: 'email',
      placeholder: 'you@example.com',
      value: email,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: '********',
      value: password,
    },
  ],
  action: {
    label: 'Login',
    type: 'primary',
  },
};

const validateEmail = () => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
};

const login = () => {
  if (!email.value || !validateEmail()) {
    alert('Please enter a valid email to proceed');
    return;
  }
  if (!password.value) {
    alert('Please enter password to continue');
  }
  signin(email.value, password.value)
    .then(() => {
      console.log('Login successful');
      router.push('/');
    })
    .catch((err) => {
      alert(err.message);
    });
};

onMounted(async () => {
  const auth = getAuth();
  auth.onAuthStateChanged((user) => {
    if (user) {
      router.push('/');
    }
  });
});
</script>
