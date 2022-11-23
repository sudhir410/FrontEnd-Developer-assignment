import React from 'react';
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
    const navigate = useNavigate()
    const { googleSignIn } = UserAuth();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <main className='mainContainer'>
                <section className='signIn_container'>
                    <div >
                        <h3>Sign in</h3>
                        <GoogleButton onClick={handleGoogleSignIn} />
                    </div>
                </section>
            </main>
        </>
    );
}
