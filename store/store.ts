import {
  LoggedInUserStoreInterface,
  ModalStepStoreInterface,
  UserData,
} from "@/lib/typescript-types";
import { create } from "zustand";

const ModalStepStore = create<ModalStepStoreInterface>((set) => ({
  step: "dd",
  openModal: false,
  setStep: (newStep) => set((state) => ({ ...state, step: newStep })),
  setopenModal: (openModal) =>
    set((state) => ({ ...state, openModal: openModal })),
}));

export const defaultLoggedInData: UserData = {
  sCustomerId: "",
  parentId: "",
  subIds: [],
  subType: "user",
  subCategory: "",
  userRoles: "user",
};

const LoggedInUserStore = create<LoggedInUserStoreInterface>((set) => ({
  LoggedInUser: null,
  storeLoggedInUser: (data: UserData) =>
    set((state) => ({ ...state, LoggedInUser: data })),
}));

export { ModalStepStore, LoggedInUserStore };
