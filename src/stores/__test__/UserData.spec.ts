import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useUserDataStore } from "../UserData.stores";
import type { User } from "firebase/auth";

describe('UserData store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Manages used data correctly', () => {
        const name = 'Shreesh';
        const email = 'shreesh@gmail.com';

        const userDataStore = useUserDataStore();
        userDataStore.updateUser({ displayName: name, email: email });

        expect(userDataStore.details?.name).toBe('Shreesh');
        expect(userDataStore.details?.email).toBe('shreesh@gmail.com');
    });

    it('Resets user data correctly', () => {
        const userDataStore = useUserDataStore();
        userDataStore.updateUser();

        expect(userDataStore.details).toBeNull();
    });

    it('Update existing user data if new data is passed', () => {
        const setupUser: Partial<User> = {
            displayName: 'Shreesh',
            email: 'shreesh@gmail.com',
        };

        const updateUser: Partial<User> = {
            displayName: 'Rohit',
            email: 'rohit@mi.com',
        };

        const userDataStore = useUserDataStore();
        userDataStore.updateUser(setupUser);

        expect(userDataStore.details?.name).toBe('Shreesh');
        expect(userDataStore.details?.email).toBe('shreesh@gmail.com');

        userDataStore.updateUser(updateUser);

        expect(userDataStore.details?.name).toBe('Rohit');
        expect(userDataStore.details?.email).toBe('rohit@mi.com');
    })

    it('Maintain existing data if some fields in data are not passed', () => {
        const setupUser: Partial<User> = {
            displayName: 'Shreesh',
            email: 'shreesh@gmail.com',
        };

        const updateUser: Partial<User> = {
            displayName: 'Shreesh Katyayan',
        };

        const userDataStore = useUserDataStore();
        userDataStore.updateUser(setupUser);
        userDataStore.updateUser(updateUser);

        expect(userDataStore.details?.name).toBe('Shreesh Katyayan');
        expect(userDataStore.details?.email).toBe('shreesh@gmail.com');
    });

    it('Maintain blank name if displayName field in data is not passed', () => {
        const setupUser: Partial<User> = {
            email: 'shreesh@gmail.com',
        };

        const userDataStore = useUserDataStore();
        userDataStore.updateUser(setupUser);

        expect(userDataStore.details?.name).toBe('');
        expect(userDataStore.details?.email).toBe('shreesh@gmail.com');
    });

    it('Maintain blank email if email field in data is not passed', () => {
        const setupUser: Partial<User> = {
            displayName: 'Shreesh',
        };

        const userDataStore = useUserDataStore();
        userDataStore.updateUser(setupUser);

        expect(userDataStore.details?.name).toBe('Shreesh');
        expect(userDataStore.details?.email).toBe('');
    });
})