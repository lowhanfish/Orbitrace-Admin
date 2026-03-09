import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface StoreState {
    isSideBarOpen : boolean,
    setIsSideBarOpen : () => void,
}

export const useStorex = create<StoreState>((set)=>({
    isSideBarOpen: true,
    setIsSideBarOpen : () => set((state)=>({isSideBarOpen : !state.isSideBarOpen}))
}))