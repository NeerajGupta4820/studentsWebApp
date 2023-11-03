import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const User = () => {
    const [users, setUsers] = useState([{
        Name: "pankaj", Email: "pankaj@gmail.com", Age: 20
    }])

    useEffect(()=> {
      axios.get('http://localhost:3001')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
    }) 

    const handleDelete = (id) => {
      axios.delete('http://localhost:3001/deleteUser/'+id)
      .then(res => {console.log(res)
        window.location.reload()
      })
      .catch(error => console.log(error))
    }
  return (
    <div className=' justify-center content-center gap-10'>
      <div className='w-[60%] m-auto rounded-md p-1 mt-[250px]'>

      <Link to="/create" className=' bg-[green]  hover:bg-green-700 text-white rounded px-3 py-1 '>Add +</Link>
      <table className='w-full text-center' >
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Name</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Email</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Age</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user) => {
                    return(
                        <tr className='bg-black border-2'>
                        <td className='bg-gray-200  p-3 text-sm text-gray-700'>{user.name}</td>
                        <td className='bg-gray-200 p-[30] text-sm text-gray-700'>{user.email}</td>
                        <td className='bg-gray-200 p-3 text-sm text-gray-700'>{user.age}</td>
                        <td className='bg-gray-200 p-5'>
                          <Link to={`/update/${user._id}`}><button className='m-3 bg-[blue] px-4 text-white rounded-lg hover:bg-blue-700'>Edit</button></Link> 
                           <button className='bg-[red] text-white rounded-lg px-4  hover:bg-red-700' 
                           onClick={(e) => handleDelete(user._id)}>Delete</button></td>
                    </tr>
                    )
                     
                })
            }
          </tbody>

      </table>
      </div>
    </div>
  )
}

export default User
