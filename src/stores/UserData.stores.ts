import type UserDetails from '@/types/UserDetails.types';
import type { User } from 'firebase/auth';
import { defineStore } from 'pinia';

// import { ref } from "vue";

export interface UserDataState {
  details: UserDetails | null;
}

export const useUserDataStore = defineStore('userData', {
  state: (): UserDataState => {
    return {
      details: null,
    };
  },
  actions: {
    updateUser(user: Partial<User> | null) {
      if (!user) {
        return this.$reset();
      }
      this.details = {
        ...this.details,
        name: user.displayName || this.details?.name || '',
        email: user.email || this.details?.email || '',
      };
      return this.details;
    },
  },
});
