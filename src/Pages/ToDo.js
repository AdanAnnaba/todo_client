import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Task } from './Task';


export const ToDo = () => {
  const [task, setTask] = useState([])
  useEffect(()=>{
    (async()=>{
      await axios.get('https://arctic-marks-64452.herokuapp.com/task')
      .then(res=>{
        const data = res.data;
        setTask(data)
      })
    })()
  },[])
  return (
    <div>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 ml-12 mt-3'>
            
            {
                task.map(task=><Task key={task._id} task={task}></Task>)
            }
        </div>
    </div>
  )
}
