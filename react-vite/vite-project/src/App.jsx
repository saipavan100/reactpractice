import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task'
import Counters from './Counter'

function App() {
  const[datas,setDatas] = useState([])
  useEffect(function(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(rawdata){
      return rawdata.json()
    }).then(function(response){
      setDatas(response)
    })
  },[])
  console.log(datas);
  
  // useEffect(function(){
  //   alert("I will run")
  // })

  // useEffect(function(){
  //   alert("I will run when the component is mounted")
  // },[])

  //  useEffect(function(){
  //    alert("count is changed so I am running")
  //  },[count])

  
  // const[toogle,settoogle] = useState(true)
  // return (
  //   // <>
  //   // <button onClick={()=>settoogle(!toogle)}>switch</button>
  //   // {toogle?<Counters/>:""}
  //   // </>
    
  // )
  return(
  <div>
    {
      datas.map(function(data){
        return <li>{data.title}</li>
      })
    }
  </div>
  )
}

export default App
