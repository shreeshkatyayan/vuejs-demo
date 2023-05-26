<template>
  <div
    id="signup"
    class="flex flex-col mx-auto border-2 border-gray-200 border-solid rounded-xl bg-white shadow w-full md:w-1/2 lg:w-1/3 p-6 mt-12"
  >
    <h1 class="font-medium text-2xl text-center pb-6">Create account</h1>
    <!-- Insert form here -->
    <FormLayout :elements="signupFormConfig.elements" />
    <StyledButton
      :label="signupFormConfig.action.label"
      :theme="signupFormConfig.action.type"
      :on-click="createAccount"
    />
    <RouterLink
      class="cursor-pointer font-medium px-6 py-2 border-error text-center mt-4"
      to="/login"
      >Login to existing account</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth } from '@firebase/auth';
import StyledButton from '@/components/StyledButton/StyledButton.vue';
import type { FormConfiguration } from '@/types/FormConfiguration.types';
import FormLayout from '@/layouts/FormLayout/FormLayout.vue';
import { signup } from '@/services/auth.service';

const router = useRouter();
const email = ref('');
const password = ref('');
const repeatPassword = ref('');

const signupFormConfig: FormConfiguration = {
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
    {
      name: 'repeatpassword',
      type: 'password',
      placeholder: '********',
      value: repeatPassword,
    },
  ],
  action: {
    label: 'Signup',
    type: 'primary',
  },
};

const validateEmail = () => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
};

const validatePassword = () => {
  if (!password.value) {
    alert('Please enter a secure password to continue');
    return false;
  }
  if (!repeatPassword.value) {
    alert('Please re-type your password to confirm');
    return false;
  }
  if (repeatPassword.value !== password.value) {
    alert('Passwords do not match, please try again');
    return false;
  }
  return true;
};

const createAccount = () => {
  if (!email.value || !validateEmail()) {
    alert('Please enter a valid email to proceed');
    return;
  }
  if (validatePassword()) {
    signup(email.value, password.value)
      .then(() => {
        router.push('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  }
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
