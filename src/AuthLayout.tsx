'use client'
import { useSession } from 'next-auth/react'
import setAuthToken from './lib/setAuthToken'
import { useAppSelector } from './components/redux/store'


const AuthLayout = ({ children }: { children: React.ReactNode }) => {

    const { data: session, status } = useSession()

    if (status === "authenticated" && session) {
        setAuthToken(session && session?.user?.name)
    }

    

    return (
        <main className={ ""}>
            {children}
        </main>
    )
}

export default AuthLayout