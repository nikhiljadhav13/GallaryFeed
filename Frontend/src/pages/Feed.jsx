import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'




const Feed = () => {

    const [post, setpost] = useState([

    {_id: "1",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    caption: "This is my first post"}
])

  useEffect(()=>{

    axios.get('http://localhost:3000/posts')
    .then((res)=>{
        setpost(res.data.posts)
    })

  })
  return (
    <section className='feed-section'>
{
    post.length > 0 ? (
        post.map((post) => (
            <div key={post._id} className='post'>
                <img src={post.image} alt={post.caption} />
                <p>{post.caption}</p>
            </div>
        ))
    ) : (
        <p>No posts available.</p>
    )
}
    </section>
  )
}

export default Feed