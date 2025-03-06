import React from 'react'
import { SignedOut } from '@clerk/clerk-react'

const Register = () => {
    return (
        <section className='flex justify-center items-center h-[calc(100vh-64px)]'>
            <SignedOut signInUrl='/login' />
        </section>
    )
}

export default Register