import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'

function EditForm() {
    const [editData, setEditData] = useState({ title: "", body: "" })
    const { setToggleEditForm, data, updelid } = UserAuth()

    const handleEditSubmit = (e) => {
        e.preventDefault()

        fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: editData.title,
                body: editData.body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {

                data.map((item) => {

                    if (item.id === Number(updelid)) {
                        item.title = editData.title ? editData.title : item.title
                        item.body = editData.body ? editData.body : item.body

                    }
                })
                setToggleEditForm(false)
            });
    }

    return (
        <div className='postForm_container'>
            <section>

                <header>
                    <p>Edit Form</p>
                    <AiOutlineCloseCircle onClick={() => { setToggleEditForm(false) }} style={{ fontSize: '1.6rem', cursor: 'pointer' }} />
                </header>
                <form >
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' name='title' value={editData.title} onChange={(e) => { setEditData({ ...editData, [e.target.name]: e.target.value }) }} />
                    </div>
                    <div>
                        <label htmlFor="body">Description</label>
                        <input type="text" id='body' name='body' value={editData.body} onChange={(e) => { setEditData({ ...editData, [e.target.name]: e.target.value }) }} />
                    </div>
                    <button onClick={handleEditSubmit} className='postForm_btn'>Upadte</button>
                </form>
            </section>
        </div>
    )
}

export default EditForm
