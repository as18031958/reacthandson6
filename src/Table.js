import React, { useContext } from 'react'
import { Navbar } from './Navbar'
import ContaxtData from './ContextData'
import { useNavigate,Link } from 'react-router-dom'
// import { Table } from './Table';
import './Style.css'
export const Table = () => {

   const DataContext = useContext(ContaxtData)
   const navigate = useNavigate();
  return (
    
    <div>
        <Navbar/>
        <button onClick={()=>{navigate('/addNewStudent')}}>Add Student</button>
        <table border={1} cellPadding={30} width={800} height={200}>
          <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Courses</th>
                <th>Batch</th>
                <th>Edit</th>
            </tr>
            </thead>
            <tbody>
              {DataContext.data.map((item,index)=>{
                return(
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.courses}</td>
                  <td>{item.batch}</td>
                  <td>
                  <Link to='/editStudent' state={{data:index}}>Edit</Link>
                  </td>
                </tr>
              )
              })}

            </tbody>
        </table>
    </div>
  )
}
