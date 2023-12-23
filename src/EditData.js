import React, { useContext } from 'react'
import ContaxtData from './ContextData'
import {  useLocation, useNavigate } from 'react-router-dom'
import './Style.css'


export const EditData = () => {
    const DataContext = useContext(ContaxtData)
    const index =useLocation().state.data
    const navigate = useNavigate();
//     // console.log(index)

    const newData={
        name:DataContext.data[index].name,
        age:DataContext.data[index].age,
        courses:DataContext.data[index].courses,
        batch:DataContext.data[index].batch
    }
  

    const handleChange=(e)=>{
        newData[e.target.name] = e.target.value;
    }
    const handleSubmit=()=>{
        DataContext.data[index] = newData;
         navigate(-1);
    }

  return (
    <div className='Edit'>
        <label>Name</label>
        <input className='one' type='text' onChange={handleChange} name='name' placeholder={DataContext.data[index].name}/>
        <label>Age</label>
        <input className='one' type='number' onChange={handleChange} name='age'placeholder={DataContext.data[index].age}/>
        <label>Courses</label>
        <input className='one' type='text' onChange={handleChange} name='courses'placeholder={DataContext.data[index].courses}/>
        <label>Batch</label>
        <input className='one' type='text' onChange={handleChange} name='batch'placeholder={DataContext.data[index].batch}/>

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
