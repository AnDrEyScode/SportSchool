import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  type UserCredential,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { RoutePaths } from "@/shared/const/route-paths";

export const useUserStore = defineStore("user", () => {
  const router = useRouter();
  const toast = useToast();

  const isLoading = ref(false);

  const isAuth = ref(false);
  onAuthStateChanged(getAuth(), (user) => {
    console.log("user: ", user);
    isAuth.value = user?.auth ?? false;
  });

  const user = ref<null | UserCredential>();

  const signUp = async (login: string, password: string) => {
    isLoading.value = true;
    try {
      user.value = await createUserWithEmailAndPassword(
        getAuth(),
        login,
        password
      );
      router.push(RoutePaths.HOME);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
        toast.add({
          severity: "error",
          summary: "Error",
          detail: err.message,
          life: 3000,
        });
      }
    } finally {
      isLoading.value = false;
    }
  };

  const signIn = async (login: string, password: string) => {
    isLoading.value = true;
    try {
      user.value = await signInWithEmailAndPassword(getAuth(), login, password);
      console.log("user.value: ", user.value);
      router.push(RoutePaths.HOME);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
        toast.add({
          severity: "error",
          summary: "Error",
          detail: err.message,
          life: 3000,
        });
      }
    } finally {
      isLoading.value = false;
    }
  };

  const signOutAccount = async () => {
    await signOut(getAuth());
    router.push(RoutePaths.HOME);
  };

  return {
    isLoading,
    isAuth,
    user,
    signUp,
    signIn,
    signOutAccount,
  };
});
