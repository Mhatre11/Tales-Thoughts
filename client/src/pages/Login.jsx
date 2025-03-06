import React from 'react'
import { SignIn } from '@clerk/clerk-react'

const Login = () => {
    return (
        <section className='flex justify-center items-center h-[calc(100vh-64px)]'>
            <SignIn signInUrl='/register' />
        </section>
    )
}

export default Login