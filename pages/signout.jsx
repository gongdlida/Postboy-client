import {useState, useEffect, useContext} from 'react'
import {Router, useRouter} from 'next/router'
import fetch from 'node-fetch'
import Context from '../utils/context.js'

export default function Signout() {
    const router = useRouter()
    const [user, setUser] = useContext(Context).userContext

    useEffect(async () => {
        try {
            const response = await fetch('/signout', {
                method: 'post'
            })
            setUser({
                isLogin: false,
                username: '',
            })
            setTimeout(() => {router.push('/')}, 3000)
        } catch (e) {

        }
    }, [])
    return (
        <h1>You are successfully logged out! Redirecting in three seconds</h1>
    )
}