import React, { useState } from 'react'
import EditForm from './EditForm'
import { UserAuth } from '../context/AuthContext'
import './Card.css'
import { HiDotsHorizontal } from 'react-icons/hi'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

function Card({ res, handleDelete }) {
    const [toggle, setToggle] = useState(false)
    const { setToggleEditForm, toggleEditForm, setUpDelId, user } = UserAuth()
    const navigate = useNavigate()
    const handleToggle = (e) => {
        e.stopPropagation()
        setToggle(!toggle)
    }
    const handleEdit = () => {
        user ?
            setToggleEditForm(!toggleEditForm) : navigate('/signin');
    }



    return (
        <>
            <section id={res.id} className='card_conatiner'>
                <div className='card_title'>
                    <h4 title={res.title}>{res.title}</h4>
                    <div id={res.id} onClick={(e) => {
                        handleToggle(e)
                        setUpDelId(e.target.id)
                    }} className='iconContainer'>
                        <HiDotsHorizontal id={res.id} className='doticon' />
                        {toggle && <section className='popupContainer'>
                            <span id={res.id} onClick={handleEdit}>Edit</span>
                            <span id={res.id} onClick={(e) => { user ? handleDelete(e) : navigate('/signin') }}>Delete</span>
                        </section>}
                    </div>
                </div>
                {toggleEditForm && <EditForm />}
                <article className='card_body'>
                    <p>{res.body}</p>
                </article>
            </section>
        </>
    )
}

export default Card;
