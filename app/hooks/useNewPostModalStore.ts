import { create } from 'zustand'

interface useNewPostModalStoreProp {
    isOpen: boolean;
    onOpen: ()=>void;
    onClose: ()=> void;
}

const useNewPostModalStore = create<useNewPostModalStoreProp>((set) => ({
    isOpen: false,
    onOpen: () => set((state) => ({ isOpen: true })),
    onClose: () =>  set((state) => ({ isOpen: false })),
}))

export default useNewPostModalStore