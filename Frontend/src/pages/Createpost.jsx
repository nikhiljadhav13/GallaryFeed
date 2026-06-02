import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Createpost = () => {

  const navigate = useNavigate()  // this is for navigation ( this is for navigating to feed page after creating post)

  const handleSubmit = (e)=>{
    e.preventDefault()

    const formData = new FormData(e.target)  // this is for converting form data into form data object ( this is for sending file to backend)

    axios.post('http://localhost:3000/create-post', formData )
    .then((res)=>{                            // this is for handling response from backend
        navigate('/feed')  // this is for navigating to feed page after creating post
    })
    .catch((err)=>{                         //this is for error handling
        console.log(err)
        console.log("error while creating post")
    })
  }

  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name='image' accept='image/*' />
            <input type="text" name='caption' placeholder='enter caption' required />
            <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default Createpost