
import './App.css';
import {useState, useContext, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Posts from './components/Posts/Posts';

function App() {
  
  return (
   <Posts></Posts>
  );
}

export default App;



/*
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      setPosts(data);
    })
    .catch((err)=>{
      console.error(err);
    })
  },[])

*/