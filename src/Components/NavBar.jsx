
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import PostForm from './PostForm'
function NavBar() {
    const navigate = useNavigate()
    const { logout, user, setTogglePostForm, togglePostForm } = UserAuth()
    const handleSignOut = async () => {
        try {
            await logout()
        } catch (err) {
            console.log(err)
        }
    }

    return (

        <header className='loginPage_header'>
            <p onClick={() => { navigate('/') }}>XhipMent</p>
            {user ? (<div className='header_Username'>
                <span >{user.displayName}</span>
                <button onClick={() => { setTogglePostForm(!togglePostForm) }} className='post'>Post</button>
                <button className='logoutBtn' onClick={handleSignOut}>Logout</button>
            </div>) : (<Link to={'/signin'} style={{ color: "white" }} >Sign in</Link>)}
            {togglePostForm && <PostForm />}
        </header>

    )
}

export default NavBar
