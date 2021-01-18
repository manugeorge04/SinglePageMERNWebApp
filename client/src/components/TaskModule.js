import React, { useState, useEffect }  from 'react'
import {Dropdown, Table} from '@fluentui/react-northstar'
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
    items: ['Occasion', 'Date']
  }  

  const [location, setLocation] = useState(""); 
  const [holidayList, setHolidayList]  = useState([])

  useEffect(() => {  
    fetchdetails()  
  }, [location])    

  const fetchdetails = () => {   
    if (location !== ""){
      axios.get(`/api/find/${location}`).then((res) => {        
        const holidayData = res.data
        const rows = holidayData.map((holiday) => {
          return {
            key : holiday._id,
            items : [
              holiday.occasion,
              holiday.date
            ]
          }
        })            
        setHolidayList(rows)     
      }).catch((err) => {
        console.log(err)
      })
    }    
  }
 
  return(      
    <div style={{marginLeft: "20px"}}>
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
    <br></br>
    {!!location && <Table compact header={header}  rows={holidayList} aria-label="Holidays" />}
  </div>
  )
}

export default TaskModule