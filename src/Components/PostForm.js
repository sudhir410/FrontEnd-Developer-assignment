import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'

function PostForm() {
  const [postData, setPostData] = useState({ title: "", body: "" })
  const { setTogglePostForm, id, setId, data, setData } = UserAuth()
  const handlePostSubmit = (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: postData.title,
        body: postData.body,
        userId: 10,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData([{ ...postData, id: id }, ...data])
        setId(id + 1)
        setTogglePostForm(false)
      });
  }
  return (
    <div className='postForm_container'>
      <section>

        <header>
          <p style={{ color: "white" }}>Post Form</p>
          <AiOutlineCloseCircle onClick={() => { setTogglePostForm(false) }} style={{ fontSize: '1.6rem', cursor: 'pointer' }} />
        </header>
        <form >
          <div>
            <label htmlFor="title" style={{ color: "black" }}>Title</label>
            <input type="text" id='title' name='title' value={postData.title} onChange={(e) => { setPostData({ ...postData, [e.target.name]: e.target.value }) }} />
          </div>
          <div>
            <label htmlFor="body" style={{ color: "black" }}>Description</label>
            <input type="text" id='body' name='body' value={postData.body} onChange={(e) => { setPostData({ ...postData, [e.target.name]: e.target.value }) }} />
          </div>
          <button onClick={handlePostSubmit} className='postForm_btn'>Post</button>
        </form>
      </section>
    </div>
  )
}

export default PostForm
