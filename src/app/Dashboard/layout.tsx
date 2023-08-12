'use client'
import axios from "axios"
import { useSession } from "next-auth/react"
import { useEffect } from "react"


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const { data: session } = useSession()

    useEffect(() => {
        const originUrl = window.location.origin
        function VerifySession() {
            if (session === null) {
                window.location.replace('/')
            }
        }
        // const result = axios.get(`${originUrl}/api/database/teste`)
        VerifySession()
    }, [session])

    return (
        <>
            {children}
        </>

    )
}
