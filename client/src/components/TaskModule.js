import React, { useState, useEffect }  from 'react'
import {Dropdown, Table, Button} from '@fluentui/react-northstar'
import * as microsoftTeams from "@microsoft/teams-js";
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

  microsoftTeams.initialize()

  const handleShareButton = () => {
    microsoftTeams.tasks.submitTask({   //returning an object
      holidayList,
      location
    });
  }
 
  return(      
    <div style={{paddingLeft: "20px", paddingRight:"20px", paddingBottom:"20px"}}>
    <h1>Regional Holiday List</h1>    
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
    <br></br>
    {!!location && <Button content="Share" primary  className="shareBtn" onClick={handleShareButton}/>}
  </div>
  )
}

export default TaskModule