import React from 'react'
import Navbar from '../Home/Navbar'
import Sidebar from '../Home/Sidebar'
import Table from './Table'

export default function Tablehome() {
  return (
    <div>
        <Navbar />
        <div className='d-flex'>
            <Sidebar />
            <Table />
        </div>
    </div>
  )
}
