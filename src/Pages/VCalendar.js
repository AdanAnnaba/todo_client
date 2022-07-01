import axios from 'axios';
import { format } from 'date-fns/esm';
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export const VCalendar = () => {
  const [date, setDate] = useState(new Date());
  const formsubmit =(event)=>{
    event.preventDefault();
    const task = {
      title: event.target.title.value,
      description: event.target.description.value,
      date,
    }
    axios.post('https://arctic-marks-64452.herokuapp.com/task',task);
       event.target.reset();
       alert('Data Saved')
  };
  return (
   <div className='justify-between'>
     <div class="card card-side bg-base-100 shadow-xl">
  <DayPicker  mode="single"
      selected={date}
      onSelect={setDate}></DayPicker>
  <div class="card-body">
 <div className='flex bg-base-100 shadow-xl w-80'>
 <form onSubmit={formsubmit}>
  <h3>Date: {format(date, 'PP') } </h3>
  <input type="text" placeholder="Title" name='title' class="input input-bordered w-full max-w-xs" />
  <textarea class="textarea textarea-accent w-80 mt-4 h-44" name='description' placeholder="Description"></textarea>
  <button type='submit' class="btn btn-primary mt-3 mb-4">Add Task</button>
  </form>
 </div>
  </div>
</div>
   </div>
  )
}

