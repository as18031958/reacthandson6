import React, { useContext } from 'react'
import ContaxtData from './ContextData'
import { useNavigate } from 'react-router-dom'
import './Style.css'
export const AddNew = () => {
    const DataContext = useContext(ContaxtData)
    const navigate = useNavigate();

    const newobj={
        name:"",
        age:"",
        courses:"",
        batch:""
    }

    const handleChange=(e)=>{
        newobj[e.target.name] = e.target.value;
    }
    const handleSubmit=()=>{
        DataContext.data.push(newobj);
        navigate(-1);
    }
  return (
    <div className='AddNew'>
        <label>Name</label>
        <input className='one' type='text' placeholder='enter new name' onChange={handleChange} name="name"/>
        <label>Age</label>
        <input className='one' type='number' placeholder='enter new age' onChange={handleChange} name="age"/>
        <label>Courses</label>
        <input className='one'type='type' placeholder='enter couses' onChange={handleChange} name="courses"/>
        <label>Batch</label>
        <input className='one'type='type' placeholder='enter batch' onChange={handleChange} name="batch"/>
        <button class='addBtn'onClick={handleSubmit}>Submit</button>

    </div>
  )
}
