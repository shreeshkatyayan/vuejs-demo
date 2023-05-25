<template>
  <div
    id="home"
    class="flex flex-col mx-auto border-2 border-gray-200 border-solid rounded-xl bg-white shadow w-1/3 p-6 mt-12"
  >
    <h1 class="font-medium text-2xl text-center pb-6">User Details</h1>
    <div class="pb-6" v-if="!editMode">
      <div class="flex flex-col mb-4">
        <span class="text-xs">Name</span>
        <span class="text-lg font-medium">{{ userDataStore.details?.name || 'No name' }}</span>
      </div>
      <div class="flex flex-col">
        <span class="text-xs">Email</span>
        <span class="text-lg font-medium">{{ userDataStore.details?.email }}</span>
      </div>
    </div>
    <div v-if="editMode">
      <FormLayout :elements="editFormConfig.elements" />
      <StyledButton label="Edit" theme="primary" class="mr-4" :on-click="submit" />
      <StyledButton label="Cancel" class="mr-4" :on-click="cancelEdit" />
    </div>
    <div>
      <StyledButton label="Edit" class="mr-4" v-if="!editMode" :on-click="startEdit" />
      <StyledButton label="Logout" theme="error" :on-click="confirmLogout" v-if="!editMode" />
    </div>
  </div>
</template>
<script setup lang="ts">
import StyledButton from '@/components/StyledButton/StyledButton.vue';
import type { FormConfiguration } from '@/layouts/FormLayout/FormConfiguration';
import FormLayout from '@/layouts/FormLayout/FormLayout.vue';
import { signout, updateUserProfile } from '@/services/auth.service';
import { useUserDataStore } from '@/stores/UserData.stores';
import { ref } from 'vue';

const userDataStore = useUserDataStore();
const editMode = ref(false);
const name = ref('');
const email = ref('');

const editFormConfig: FormConfiguration = {
  elements: [
    {
      name: 'displayName',
      type: 'text',
      placeholder: 'John Doe',
      value: name,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'you@example.com',
      value: email,
    },
  ],
  action: {
    label: 'Login',
    type: 'primary',
  },
};

const startEdit = () => {
  name.value = userDataStore.details?.name || '';
  email.value = userDataStore.details?.email || '';
  editMode.value = true;
};

const cancelEdit = () => {
  if (confirm('Sure you want to go back?')) {
    editMode.value = false;
  }
};

const confirmLogout = () => {
  if (confirm('Are you sure you want to logout?')) {
    signout();
  }
};

const submit = () => {
  updateUserProfile({ displayName: name.value, email: email.value }).then(
    () => {
      editMode.value = false;
    },
    (err) => {
      alert(err.message);
    }
  );
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
