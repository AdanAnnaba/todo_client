import React from 'react'

export const ToDo = () => {
  return (
    <div>
      <div>To-Do</div>
      <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <div class="card-actions justify-end">
    </div>
    <textarea class="textarea textarea-primary h-48" disabled></textarea>
    <div className='flex justify-evenly'>
    <button class="btn btn-sm">Edit</button>
    <button class="btn btn-sm">Delete</button>
    </div>
  </div>
</div>
    
    </div>
  )
}
