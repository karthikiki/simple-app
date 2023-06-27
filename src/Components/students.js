import React, { useState } from 'react'
import Base from '../Base/Base'
import data from '../Data/data'
import AddStudents from './AddStudent'
import UpdateStudents from './UpdateStudents';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';




function Students({students,setStudents}) {
 const history = useHistory();
//  const[editIdx, setEditIdx] = useState();
 //delete
 const deleteStudent= async (studId)=>{
   
       const response = await fetch(`https://649820699543ce0f49e1abe3.mockapi.io/users/${studId}`,{
        method:"DELETE"
       });
       const data = await response.json()
       if(data){
        const remainingStudents = students.filter((stud,idx)=> stud.id !== studId)
        setStudents(remainingStudents)
       }
     
 }
    return(
    <Base
    title={"User's List"}
    description={""}> 

    <div className='card-container'>
        {students.map((stud,idx)=>(
        <Card sx={{ maxWidth: 375 }} key={idx}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <b><i>{stud.name}</i></b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Batch: {stud.batch}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gender: {stud.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Qualification: {stud.Qualification}
          </Typography>
        </CardContent>
        <div className='list-btn'>
        <CardActions>
          <Button color="secondary" onClick={()=>history.push(`/edit/${idx}`)}>Edit</Button>
          {"  "}
          <Button variant="outlined" color="error" onClick={()=>deleteStudent(stud.id)}>Delete</Button>
        </CardActions>
        </div>
      </Card>
        ))}
     </div> 
    </Base>
    
    )
 }
 export default Students