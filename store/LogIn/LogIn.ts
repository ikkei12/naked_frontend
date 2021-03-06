import { reactive } from '@vue/composition-api';

export default function LogInStore() {
  const state = reactive({
      email: '',
      password: ''
  });

  return {
    get email() {
      return state.email;
    },
    get password() {
      return state.password;
    },
    setEmail(payload:string) {
      state.email = payload;
    },
    setPassword(payload:string) {
      state.password = payload;
    },
    reSetEmail() {
      state.email = ''
    },
    reSetPassword() {
      state.password = ''
    },
  };
}

export type LogInStore = ReturnType<typeof LogInStore>;