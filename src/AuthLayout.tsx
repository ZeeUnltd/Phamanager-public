
// import setAuthToken from './lib/setAuthToken'
// import { useAppSelector } from './components/redux/store'


const AuthLayout = ({ children }: { children: React.ReactNode }) => {


    // if (status === "authenticated" ) {
    //     setAuthToken(session && session?.user?.name)
    // }

    

    return (
        <main className={ ""}>
            {children}
        </main>
    )
}

export default AuthLayout