import React,{useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './Home';
// import { Student } from './Student';
import { Contact } from './Contact';
import { Table } from './Table';
import ContaxtData from './ContextData';
import { AddNew } from './AddNew';
import { EditData } from './EditData';
 

export const Routing = () => {

    const [data,setData] = useState([
        {name:"Arpit",age:22,courses:"mern",batch:"22"},{name:"hello",age:33,courses:"mern",batch:"22"}
    ])
  return (
    <BrowserRouter>
    <>
    <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/student' element={
          <ContaxtData.Provider value={{data:data, updateData:setData}}>
            <Table/>
            </ContaxtData.Provider>
        }/>
        <Route path='/addNewStudent' element={
          <ContaxtData.Provider value={{data:data, updateData:setData}}>
            <AddNew/>
            </ContaxtData.Provider>
        }/>
        <Route path='/editStudent' element={
          <ContaxtData.Provider value={{data:data, updateData:setData}}>
            <EditData/>
            </ContaxtData.Provider>
        }/>
        <Route path='/contact' element={<Contact/>}/>
        
    </Routes>
    </>
    </BrowserRouter>
  )
}
