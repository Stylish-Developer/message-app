import { create } from 'zustand'

type useUserStoreType = {
    user: {
        name: string;
        password: string;
    },
    userSignin: (userName: string, userPassword: string) => void;
    userLogout: () => void;
}

const useUserStore = create<useUserStoreType>((set) => ({
    user: {
        name: '',
        password: '',
    },
    userSignin: (userName: string, userPassword: string) =>
        set({
            user: {
                name: userName,
                password: userPassword
            }
        })
    ,
    userLogout: () => set({
        user: {
            name: "",
            password: ""
        }
    })

}))

export default useUserStore;