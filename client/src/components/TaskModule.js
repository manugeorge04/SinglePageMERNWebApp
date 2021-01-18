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
  const [holidayList, setHolidayList] = useState("");

  {console.log("TM")}
  useEffect(() => {  
    fetchdetails()  
  }, [location])    

  const fetchdetails = () => {
    console.log("hi")
    console.log(location)
    if (location !== ""){
      axios.get(`/api/find/${location}`).then((res) => {
        setHolidayList(res.data)
        console.log(holidayList)
      }).catch((err) => {
        console.log(err)
      })
    }    
  }
 
  return(      
    <div>
    {console.log(location)}      
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