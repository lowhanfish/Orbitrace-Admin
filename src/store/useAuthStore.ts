import { create } from 'zustand'

interface UserData {
    id: string
    name: string
    email: string
    menu_klp_id: number
    pegawai_id: string | null
    is_active: boolean
    created_at: string
    updated_at: string
}

interface AuthState {
    token: string | null
    user: UserData | null
    isAuthenticated: boolean

    // Actions
    login: (token: string, user: UserData) => void
    logout: () => void
    loadFromStorage: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    user: null,
    isAuthenticated: false,

    login: (token, user) => {
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        set({ token, user, isAuthenticated: true })
    },

    logout: () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        set({ token: null, user: null, isAuthenticated: false })
    },

    loadFromStorage: () => {
        const token = localStorage.getItem('token')
        const userStr = localStorage.getItem('user')

        if (token && userStr) {
            try {
                const user = JSON.parse(userStr) as UserData
                set({ token, user, isAuthenticated: true })
            } catch {
                // Data rusak, bersihkan
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                set({ token: null, user: null, isAuthenticated: false })
            }
        }
    },
}))
