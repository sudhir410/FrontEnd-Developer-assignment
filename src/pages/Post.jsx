import React, { useEffect } from 'react';
import Card from '../Components/Card'
import { UserAuth } from '../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Post() {
  const { setData, data } = UserAuth()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          setData(json)
        }
      });
  }, [])

  const handleDelete = (e) => {

    let x = e.target.id
    fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.id}`, {
      method: 'DELETE',
    }).then(res => {

      setData(data.filter(items => items.id !== Number(x)))
      toast('Post Deleted Successfully')

    })

  }

  return (
    <section className='Post_mainConatiner' >
      {
        data && data.map((res, i) => {
          return (
            <div key={i}>
              <Card res={res} handleDelete={handleDelete} />
            </div>
          )
        })
      }
      <ToastContainer position="top-right" autoClose={1000} />

    </section >
  );
}
