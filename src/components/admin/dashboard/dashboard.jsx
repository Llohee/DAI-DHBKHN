import React from 'react'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';  
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="sidebar-bar">
    <CDBSidebar className="cd-sidebar" >
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
      </CDBSidebarHeader>
      <CDBSidebarFooter className="cdsidebar-footer">
        <div className="board-calender">
          <button type="button" value='Boards' onClick={() => {
            navigate('/home/boards');
          }} > Board</button>
          <button type="button" value='Calendar' onClick={() => {
            navigate('/home/calendar');
          }} >Calendar</button>
          <button type="button" value='Calendar' onClick={() => {
            navigate('/home/calendar');
          }} >Calendar</button>
          <button type="button" value='Calendar' onClick={() => {
            navigate('/home/calendar');
          }} >Calendar</button>
          <button type="button" value='Calendar' onClick={() => {
            navigate('/home/calendar');
          }} >Calendar</button>
          <button type="button" value='Calendar' onClick={() => {
            navigate('/home/calendar');
          }} >Calendar</button>
        </div>
      </CDBSidebarFooter>

    </CDBSidebar>
  </div>
    )
}

export default Dashboard