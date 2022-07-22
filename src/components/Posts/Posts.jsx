import React from 'react'
import {useState, useContext, useEffect} from 'react'
import Post from '../Post/Post';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Posts() {
    const [posts, setPosts] = useState([]);
  
    useEffect(()=>{
        const getPosts=async () =>{
            const resPosts=await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
            const posts=await resPosts.json();
            setPosts(posts);
        }
        getPosts();
    },[])

    async function handleDelete(id) {
        console.log(id);
        const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:'DELETE'
        });
        if(res.status===200){
            const temp=posts.filter(item=>item.id!==id)
            setPosts(temp);
        }
        return;
    }

  return (
    <div>
         <div className="Container mx-auto">
         <button type="button" class="btn btn-success">Add post</button>
            <div className='row'>
                {
                    posts.map((element)=>(
                        <Post post={element} key={element.id} onDelete={handleDelete}></Post>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
