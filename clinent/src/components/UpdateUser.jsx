import React, {useState,useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from 'axios';

const UpdateUser = () => {
  const {id} = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(()=> {
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err))
  },[])

  const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/updateUser/"+id, {name, email, age})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='xl:container mx-auto mb-32'>
      <div 
          className='flex justify-center h-[250px] bg-orange-300'>
      </div>
      <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
         <div className='rounded-lg shadow-lg bg-white -mt-24 h-[300px]'>


         <form onSubmit={Update}>
          <h2 className='text-center font-bold text-[24px]  text-[#8484eb] py-[15px]'>Update User</h2>
          <div className='mb-2 '>
            <label className="ml-[45px]" htmlFor="">Name</label>
            <input  type="text" placeholder='Enter Name' className='rounded text-center w-[50%] py-2 mx-4'
              value={name} onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label className="ml-[45px]" htmlFor="">Email</label>
            <input type="email" placeholder='Enter Email' className='rounded text-center w-[50%] py-2 mx-4'
              value={email} onChange={(e) => setEmail(e.target.value)}

            />
          </div>
          <div className='mb-2'>
            <label className="ml-[45px]" htmlFor="">Age</label>
            <input type="text" placeholder='Enter Age' className='rounded text-center w-[50%] py-2 mx-4'
            value={age} onChange={(e) => setAge(e.target.value)}

            />
          </div>
          
          <button className='bg-[#5e5ee1] text-white px-3 rounded mx-[300px]'>Update</button>
        </form>

         </div>
      </div>
    </div>
  )
}

export default UpdateUser
