import React from 'react'
import Base from '../Base/Base'
import Image from '../Components/crud.jpg'
import { Paper } from '@mui/material'

const Dashboard = () => {
  return (
       <Paper >
        <Base
       title={"welcome"}
       description={"This is CRUD website"}>
      </Base>
          </Paper>
   
  )
}
const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`
  }
};

export default Dashboard