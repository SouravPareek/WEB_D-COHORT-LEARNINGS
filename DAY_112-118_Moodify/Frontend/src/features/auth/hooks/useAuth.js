import { register, login, getMe, logout } from "../services/auth.api";
import { useContext, useCallback } from "react";
import { AuthContext } from "../auth.context.jsx"

export const useAuth = ()=>{
    const context = useContext(AuthContext)

    const {user, setUser, loading, setLoading} = context

    async function handleRegister({username, email, password}){
        setLoading(true)
        try {
            const data = await register({username, email, password})
            setUser(data.user)
            return data.user
        } catch (error) {
            console.warn("Register failed:", error?.response?.data?.message || error.message)
            throw error
        } finally {
            setLoading(false)
        }
    }

    async function handleLogin({username, email, password}){
        setLoading(true)
        try {
            const data = await login({username, email, password})
            setUser(data.user)
            return data.user
        } catch (error) {
            console.warn("Login failed:", error?.response?.data?.message || error.message)
            throw error
        } finally {
            setLoading(false)
        }
    }

    const handleGetMe = useCallback(async () => {
        setLoading(true)
        try {
            const data = await getMe()
            setUser(data?.user ?? null)
            return data?.user ?? null
        } catch {
            setUser(null)
            return null
        } finally {
            setLoading(false)
        }
    }, [setLoading, setUser])

    async function handleLogout() {
        setLoading(true)
        try {
            await logout()
        } finally {
            setUser(null)
            setLoading(false)
        }
    }

    return ({
        user, loading, handleRegister, handleGetMe, handleLogin, handleLogout
    })
}