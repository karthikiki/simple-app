import { Switch,Route } from 'react-router-dom';
import './App.css';
import Base from './Base/Base';
import Students from './Components/students';
import AddStudents from './Components/AddStudent';
import data from './Data/data';
import { useEffect, useState } from 'react';
import UpdateStudents from './Components/UpdateStudents';
import NoPage from './Components/NoPage';
import Dashboard from './Components/Dashboard';

function App() {
  const[students,setStudents] =  useState([]);
  useEffect(()=>{
    const result = async ()=>{
      let response= await fetch('https://649820699543ce0f49e1abe3.mockapi.io/users',{
        method:"GET",
      });
      const data = await response.json();
      // console.log(data)
      if(data){
        setStudents([...data]);
      }else{
        alert("Error");
      }
    }
    result();
  })
  return (
    <div className="App">
      <Switch>
         <Route exact path="/">
            <Dashboard/>
         </Route >
         <Route path="/students">
           <Students
            students ={students}
            setStudents={setStudents}/>
         </Route>
         <Route path="/add">
            <AddStudents
            students ={students}
            setStudents={setStudents}/>
         </Route>
         <Route path="/edit/:id/">
            <UpdateStudents
            students ={students}
            setStudents={setStudents}/>
         </Route>
         <Route path="**">
          <NoPage/>
         </Route>
      </Switch>
    </div>
  ); 
}

export default App;
