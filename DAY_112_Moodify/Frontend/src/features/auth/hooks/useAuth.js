import { register, login, getMe, logout } from "../services/auth.api";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context.jsx"

export const useAuth = ()=>{
    const context = useContext(AuthContext)

    const {user, setUser, loading, setLoading} = context


    async function handleRegister({username, email, password}){
        setLoading(true)
        try {
            const data = await register({username, email, password})
            setUser(data.user)
        } finally {
            setLoading(false)
        }
    }

    async function handleLogin({username, email, password}){
        setLoading(true)
        try {
            const data = await login({username, email, password})
            setUser(data.user)
        } finally {
            setLoading(false)
        }
    }

    async function handleGetMe() {
        setLoading(true)
        try {
            const data = await getMe()
            setUser(data?.user ?? null)
        } catch (error) {
            console.warn("Failed to fetch current user:", error?.response?.data?.message || error.message)
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    async function handleLogout() {
        setLoading(true)
        try {
            await logout()
        } finally {
            setUser(null)
            setLoading(false)
        }
    }

    useEffect(()=>{
        handleGetMe()
    }, [])

    return ({
        user, loading, handleRegister, handleGetMe, handleLogin, handleLogout
    })
}