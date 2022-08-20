import create from 'zustand';
export const useLogin = create(set => ({
  haveLogin: false,
  login: () => {
    set({ haveLogin: true });
  },
}));
