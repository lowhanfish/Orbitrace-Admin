import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface StoreState {
    isSideBarOpen : boolean,
    setIsSideBarOpen : () => void,
}

export const useStore = create<StoreState>((set)=>({
    isSideBarOpen: false,
    setIsSideBarOpen : () => set((state)=>({isSideBarOpen : !state.isSideBarOpen}))
}))