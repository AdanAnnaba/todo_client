import axios from 'axios';
import React, { useState } from 'react'

export const Task = ({task}) => {
    const [modal, setModal] = useState();


    const formsubmit =(event)=>{
      event.preventDefault();
      const task = {
        description: event.target.description.value,
      }
      console.log(task);
      axios.put('https://arctic-marks-64452.herokuapp.com/task/',task);
    };

    const taskDelete = (id)=>{
      axios.delete(`https://arctic-marks-64452.herokuapp.com/${id}`);
    }
    
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl gap-3">
     <div class="card-body">
    <div class="card-actions justify-end">
    </div>
    <h3>{task.date}</h3>
    <h3 className='text-left text-2xl font-serif mt-0'><p>Title: {task.title}</p></h3>
    <p className='text-left'>{task.description}</p>
    <div className='flex justify-evenly'>
    <button onClick={()=>taskDelete(task._id)} class="btn btn-sm">Delete</button>

    <a href="#my-modal-2" class="btn btn-sm">Edit</a>
    <div class="modal" id="my-modal-2">
    <div class="modal-box relative">
    <label for="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <form onSubmit={formsubmit}>
      <textarea class="textarea textarea-accent w-80 mt-4 h-44" name='description' placeholder="Description">{task.description}</textarea>
      <div class="modal-action">
      <button type='submit' class="btn btn-primary mt-3 mb-4">Add Task</button>
      </div>
      </form>
    
  </div>
  </div>
  </div>
  </div>
  </div>
    
    </div>
  )
}

