import create from 'zustand';

type LoadingState = {
  loading: boolean;
  message?: string;
  setLoading: (loading: boolean, message?: string) => void;
};

export const useLoadingStore = create<LoadingState>()(set => ({
  loading: false,
  message: undefined,
  setLoading: (loading, message?) => set(state => ({ ...state, loading, message })),
}));
