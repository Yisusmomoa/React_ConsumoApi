import React from 'react'

export default function Post({post, onDelete}) {
    
  return (
    <div className='col-6 mt-5 mx-auto'>
        <div className="card">
            <div className="card-header">
                {post.id}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>Titulo: {post.title}</p>
                    <p>UserId: {post.userId}</p>
                    <button type="button" className="btn btn-danger" onClick={(e)=>onDelete(post.id)}>Eliminar</button>
                    {/* <button type="button" className="btn btn-danger" onClick={()=>handleDelete(post.id)}>Eliminar</button> */}
                </blockquote>
            </div>
        </div>        
    </div>
  )
}
