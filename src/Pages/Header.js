import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <div class="navbar bg-neutral text-neutral-content">
    <a class="btn btn-ghost normal-case text-xl">Tasks Board</a>
    <div className='ml-56'>
    <p className='ml-4'><Link to='task'>Completed Tasks</Link></p>
    <p className='ml-4'><Link to='/'>To-Do</Link></p>
    <p className='ml-4'><Link to='calendar'>Calendar</Link></p>
    </div>
  </div>
    </div>
  )
}
