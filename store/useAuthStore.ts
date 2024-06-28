import { create } from "zustand";

type useAuthType = {
    auth: {
        status: boolean
    },
    useAuth: (status: boolean) => void
}

const useAuthStore = create<useAuthType>((set) => ({
    auth: {
        status: false
    },
    useAuth: (status: boolean) => set({
        auth: {
            status,
        }
    }),
}))

export default useAuthStore;
