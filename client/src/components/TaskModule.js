import React, { useState, useEffect }  from 'react'
import { Dropdown, Table } from '@fluentui/react-northstar'
import axios from'axios'

const TaskModule = () => {

  const inputItems = [
    'Atal Nagar',
    'Bangalore',
    'Chennai',
    'Delhi',
    'Hyderabad'
  ]

  const header = {
    items: ['Occasion', '']
  }

  

  const [location, setLocation] = useState(""); 
  const [holidayList, setHolidayList]  = useState([])
  

  {console.log("Re-render")}
  useEffect(() => {  
    fetchdetails()  
  }, [location])    

  const fetchdetails = () => {
    console.log("Inside fetch")
    console.log(location)
    if (location !== ""){
      axios.get(`/api/find/${location}`).then((res) => {        
        console.log(res.data)
        setHolidayList(res.data)
        console.log("state has been set lets check state")
        console.log(holidayList)
      }).catch((err) => {
        console.log(err)
      })
    }    
  }
 
  return(      
    <div>
    {console.log("Inside jsx")}      
    {console.log(location)}  
    {console.log(holidayList)}
    <h1>Holidates</h1>    
    <Dropdown  
      search               
      items={inputItems}           
      noResultsMessage="We couldn't find any matches."      
      getA11ySelectionMessage={{
        onAdd: (item) => {
          setLocation(item)          
          }
      }}         
      placeholder = "Enter your location here..."  
    />
    {!!location && <Table location={location} />}
  </div>
  )
}

export default TaskModule