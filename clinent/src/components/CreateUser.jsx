import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateUser = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const [file, setFile] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('file',file)
     axios.post("http://localhost:3001/createUser", {name, email, age ,formData})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }
  // const upload = () => {
  //   const formData = new FormData()
  //   formData.append('file',file)
  //    axios.post("http://localhost:3001/createUser", {formData})
  //   .then(result => {
  //     console.log(result)
  //   })
  //   .catch(err => console.log(err))
  // }


  return (
    <div className='xl:container mx-auto mb-32'>
      <div 
          className='flex justify-center h-[250px] bg-orange-300'>
      </div>
      <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
         <div className='rounded-lg shadow-lg bg-white -mt-24 h-[300px]'>

         <form  onSubmit={Submit}>
          <h2 className='text-center font-bold text-[24px]  text-[#8484eb] py-[15px]'>Add User</h2>
          <div className='mb-2 '>
            <label className="ml-[45px]" htmlFor="">Name</label>
            <input  type="text" placeholder='Enter Name' className='rounded text-center w-[50%] py-2 mx-4'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label className="ml-[45px]" htmlFor="">Email</label>
            <input type="email" placeholder='Enter Email' className='rounded text-center w-[50%] py-2 mx-4'
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label className="ml-[45px]" htmlFor="">Age</label>
            <input type="text" placeholder='Enter Age' className='rounded text-center w-[50%] py-2 mx-4'
             onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label className="ml-[45px]" htmlFor="">file</label>
            <input type="file"  className='rounded text-center w-[50%] py-2 mx-4'
             onChange={(e) => setFile(e.target.files[0])}/>
             <button type="button"  className='bg-[#e17f5e] text-white px-3 rounded'>Upload</button>
          </div>
          
          <button className='bg-[#5e5ee1] text-white px-3 rounded mx-[250px]'>Submit</button>
        </form>
    {/* 28:54 */}
         </div>
      </div>
    </div>
  )
}

export default CreateUser
