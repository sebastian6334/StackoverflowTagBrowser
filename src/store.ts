import { create } from "zustand";

type CounterStore = {
  allTags: any;
  isLoading: boolean;
  error?: string;
  pageInformation: { page: number; pageSize: number };
};

export const useCounterStore = create<CounterStore>(() => ({
  allTags: [],
  isLoading: false,
  pageInformation: { page: 1, pageSize: 10 },
}));
